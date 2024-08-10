from xml.dom.minidom import parse
import json


imobiliaria = parse("imobiliaria.xml")
vari = imobiliaria.documentElement
imoveis = vari.getElementsByTagName('imovel')

data_imobiliaria = []

for i in imoveis:
    imovel_data = {}
    
    descricao = i.getElementsByTagName("descricao")[0].firstChild.nodeValue
    imovel_data["descricao"] = descricao
    
    valor = i.getElementsByTagName("valor")[0].firstChild.nodeValue
    imovel_data["valor"] = valor
    
    proprietario = i.getElementsByTagName("proprietario")[0]
    proprietario_data = {
        "nome": proprietario.getElementsByTagName("nome")[0].firstChild.nodeValue,
        "email": proprietario.getElementsByTagName("email")[0].firstChild.nodeValue if proprietario.getElementsByTagName("email")[0].firstChild else "",
        "telefones": [telefone.firstChild.nodeValue for telefone in proprietario.getElementsByTagName("telefone")]
    }
    imovel_data["proprietario"] = proprietario_data
    
    endereco = i.getElementsByTagName("endereco")[0]
    endereco_data = {
        "rua": endereco.getElementsByTagName("rua")[0].firstChild.nodeValue,
        "bairro": endereco.getElementsByTagName("bairro")[0].firstChild.nodeValue,
        "cidade": endereco.getElementsByTagName("cidade")[0].firstChild.nodeValue,
        "numero": endereco.getElementsByTagName("número")[0].firstChild.nodeValue
    }
    imovel_data["endereco"] = endereco_data
    
    caracteristicas = i.getElementsByTagName("caracteristicas")[0]
    caracteristicas_data = {
        "tamanho": caracteristicas.getElementsByTagName("tamanho")[0].firstChild.nodeValue,
        "numQuartos": caracteristicas.getElementsByTagName("numQuartos")[0].firstChild.nodeValue,
        "numBanheiros": caracteristicas.getElementsByTagName("numBanheiros")[0].firstChild.nodeValue
    }
    imovel_data["caracteristicas"] = caracteristicas_data
    
    data_imobiliaria.append(imovel_data)


with open("imobiliaria.json", "w", encoding="utf-8") as json_file:
    json.dump(data_imobiliaria, json_file, ensure_ascii=False, indent=2)

print(json.dumps(data_imobiliaria, ensure_ascii=False, indent=2))
 

 

