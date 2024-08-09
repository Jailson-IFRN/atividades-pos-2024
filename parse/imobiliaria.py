from xml.dom.minidom import parse
import json


imobiliaria = parse("imobiliaria.xml")


vari = imobiliaria.documentElement


imoveis = vari.getElementsByTagName('imovel')


data_imobiliaria = []
data_proprietario = {}
emails ={}
telefones = {}
endereco2 = {}
caracteristicas2 = {}
descricao = {}
valor = {}
for i in imoveis:
    descricao1 = i.getElementsByTagName("descricao")[0].firstChild.nodeValue
    descricao["descricao"] = descricao1
    valor1 = i.getElementsByTagName("valor")[0].firstChild.nodeValue
    valor["valor"] = valor1
    data_imobiliaria.append(descricao)
    data_imobiliaria.append(valor)
    elemento_proprietario = i.getElementsByTagName("proprietario")
    for j in elemento_proprietario:
        nome = j.getElementsByTagName("nome")[0].firstChild.nodeValue
        email = j.getElementsByTagName("email")
        data_proprietario["nome"] = nome
        for k in email:
            print(k.firstChild.nodeValue)
            emails["emails"] = k
            
            data_proprietario["email"] = emails
            
        telefone = j.getElementsByTagName("telefone")[0].firstChild.nodeValue
        for h in telefone:
            
            telefones["telefone"] = h
            data_proprietario["telefone"] = telefones

    data_imobiliaria.append(data_proprietario)
    endereco = i.getElementsByTagName("endereco")
    for a in endereco:
        rua = a.getElementsByTagName("rua")[0].firstChild.nodeValue
        bairro = a.getElementsByTagName("bairro")[0].firstChild.nodeValue
        cidade = a.getElementsByTagName("cidade")[0].firstChild
        numero = a.getElementsByTagName("número")[0].firstChild
        endereco2["rua"] = rua
        endereco2["bairro"] = bairro
        endereco2["cidade"] = cidade
        endereco2["numero"] = numero
    
    data_imobiliaria.append(endereco)
    caracteristicas = i.getElementsByTagName("caracteristicas")
    for b in caracteristicas:
        tamanho = b.getElementsByTagName("tamanho")[0].firstChild.nodeValue
        numQuartos = b.getElementsByTagName("numQuartos")[0].firstChild.nodeValue
        numBanheiros = b.getElementsByTagName("numBanheiros")[0].firstChild.nodeValue
        caracteristicas2["tamanho"] = tamanho
        caracteristicas2["numQuartos"] = numQuartos
        caracteristicas2["numBanheiros"] = numBanheiros
    data_imobiliaria.append(caracteristicas2)

#with open("biblioteca.json", "w") as json_file:
#    json.dump(data_imobiliaria, json_file, indent=2)
print(data_imobiliaria)    

 

