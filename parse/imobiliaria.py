from xml.dom.minidom import parse
import json

imobiliaria = parse("imobiliaria.xml")


vari = imobiliaria.documentElement


imoveis = vari.getElementsByTagName('imovel')

data_imobiliaria = []
data_proprietario = []
for i in imoveis:
    descricao = i.getElementsByTagName("descricao")[0].firstChild.nodeValue
    elemento_proprietario = i.getElementsByTagName("proprietario")
    for j in elemento_proprietario:
        nome = j.getElementsByTagName("nome")[0].firstChild.nodeValue
    #proprietario = elemento_proprietario.firstChild.nodeValue
    elemento_endereco = i.getElementsByTagName("endereco")[0].firstChild.nodeValue
    elemento_caracteristicas = i.getElementsByTagName("caracteristicas")[0].firstChild.nodeValue
    valor = i.getElementsByTagName("valor")
    

 

