import requests
from xml.dom.minidom import parseString



url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso"


headers = {
    "Content-Type": "text/xml; charset=utf-8",
}

pais = input("Digite o país: ")
capital_city_body = f"""<?xml version="1.0" encoding="utf-8"?>
                          <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                            <soap:Body>
                              <CapitalCity xmlns="http://www.oorsprong.org/websamples.countryinfo">
                                <sCountryISOCode>{pais}</sCountryISOCode>
                              </CapitalCity>
                            </soap:Body>
                          </soap:Envelope>
                        """


response = requests.post(url, data=capital_city_body, headers=headers)
dom = parseString(response.content)


capital = dom.getElementsByTagName("m:CapitalCityResult")[0].firstChild.nodeValue
print("A capital quye vc procura é: ", capital)

codigo = input("Digite o código: ")
currency_name_body = f"""<?xml version="1.0" encoding="utf-8"?>
                      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                          <CurrencyName xmlns="http://www.oorsprong.org/websamples.countryinfo">
                            <sCurrencyISOCode>{codigo}</sCurrencyISOCode>
                          </CurrencyName>
                        </soap:Body>
                      </soap:Envelope>"""


response = requests.post(url, data=currency_name_body, headers=headers)
dom = parseString(response.content)


currency_name = dom.getElementsByTagName("m:CurrencyNameResult")[0].firstChild.nodeValue
print("A moeda é:", currency_name)

pais2 = input("Digite o pais: ")
country_name_body = f"""<?xml version="1.0" encoding="utf-8"?>
                    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                      <soap:Body>
                        <CountryName xmlns="http://www.oorsprong.org/websamples.countryinfo">
                          <sCountryISOCode>{pais2}</sCountryISOCode>
                        </CountryName>
                      </soap:Body>
                    </soap:Envelope>"""


response = requests.post(url, data=country_name_body, headers=headers)
dom = parseString(response.content)


country_name = dom.getElementsByTagName("m:CountryNameResult")[0].firstChild.nodeValue
print("O nome completo do país é:", country_name)

nacao = input("Digite o pais que deseja ver a bandeira: ")
country_flag_body = f"""<?xml version="1.0" encoding="utf-8"?>
                    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                      <soap:Body>
                        <CountryFlag xmlns="http://www.oorsprong.org/websamples.countryinfo">
                          <sCountryISOCode>{nacao}</sCountryISOCode>
                        </CountryFlag>
                      </soap:Body>
                    </soap:Envelope>"""


response = requests.post(url, data=country_flag_body, headers=headers)
dom = parseString(response.content)


country_flag = dom.getElementsByTagName("m:CountryFlagResult")[0].firstChild.nodeValue
print("bandeira:", country_flag)

