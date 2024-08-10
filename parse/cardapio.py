from xml.dom.minidom import parse


cardapio = parse("cardapio.xml")
pratos = cardapio.getElementsByTagName('prato')


print("Menu de Pratos:")
for prato in pratos:
    id_prato = prato.getAttribute('id')
    nome_prato = prato.getElementsByTagName('nome')[0].firstChild.nodeValue
    print(f"ID: {id_prato} - Nome: {nome_prato}")


escolha = input("Digite o ID do prato que deseja saber mais detalhes: ")


for prato in pratos:
    if prato.getAttribute('id') == escolha:
        nome_prato = prato.getElementsByTagName('nome')[0].firstChild.nodeValue
        descricao_prato = prato.getElementsByTagName('descricao')[0].firstChild.nodeValue
        preco_prato = prato.getElementsByTagName('preco')[0].firstChild.nodeValue
        calorias_prato = prato.getElementsByTagName('calorias')[0].firstChild.nodeValue
        
        print("\nDetalhes do Prato:")
        print(f"Nome: {nome_prato}")
        print(f"Descrição: {descricao_prato}")
        print(f"Preço: {preco_prato}")
        print(f"Calorias: {calorias_prato}")
        print("*" *30)
        print("cheguei aqui")
        break
else:
    print("Prato não encontrado.")
