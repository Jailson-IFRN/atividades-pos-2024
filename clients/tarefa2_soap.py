import requests
from xml.dom.minidom import parseString


url_country_info = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso"


headers = {
    "Content-Type": "text/xml; charset=utf-8",
}


capital_city_body = """<?xml version="1.0" encoding="utf-8"?>
                        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                            <CapitalCity xmlns="http://www.oorsprong.org/websamples.countryinfo">
                            <sCountryISOCode>NO</sCountryISOCode>
                            </CapitalCity>
                        </soap:Body>
                        </soap:Envelope>"""


response = requests.post(url_country_info, data=capital_city_body, headers=headers)
dom = parseString(response.content)


capital = dom.getElementsByTagName("m:CapitalCityResult")[0].firstChild.nodeValue
print("A capital da Noruega (NO) é:", capital)




url_numeros = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso"

headers = {
    "Content-Type": "text/xml; charset=utf-8",
}


numero = 223


conversao = f"""<?xml version="1.0" encoding="utf-8"?>
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                            xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                <soap:Body>
                    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                    <ubiNum>{numero}</ubiNum>
                    </NumberToWords>
                </soap:Body>
                </soap:Envelope>"""


response = requests.post(url_numeros, data=conversao, headers=headers)
dom = parseString(response.content)


number = dom.getElementsByTagName("m:NumberToWordsResult")[0].firstChild.nodeValue
print(f"O número {numero} por extenso em inglês é: {number}")
