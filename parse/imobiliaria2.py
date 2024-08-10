import json


with open("imobiliaria.json", "r") as json_file:
    data_imobiliaria = json.load(json_file)


print("Menu de Imóveis:")
for index, imovel in enumerate(data_imobiliaria):
    print(f"ID: {index} - Descrição: {imovel['descricao']}")


escolha = int(input("Digite o ID do imóvel que deseja saber mais detalhes: "))


if 0 <= escolha < len(data_imobiliaria):
    imovel = data_imobiliaria[escolha]
    print("\nDetalhes do Imóvel:")
    print(f"Descrição: {imovel['descricao']}")
    print(f"Valor: {imovel['valor']}")
    print("\nProprietário:")
    print(f"  Nome: {imovel['proprietario']['nome']}")
    print(f"  Email: {imovel['proprietario']['email']}")
    print(f"  Telefones: {', '.join(imovel['proprietario']['telefones'])}")
    print("\nEndereço:")
    print(f"  Rua: {imovel['endereco']['rua']}")
    print(f"  Bairro: {imovel['endereco']['bairro']}")
    print(f"  Cidade: {imovel['endereco']['cidade']}")
    print(f"  Número: {imovel['endereco']['numero']}")
    print("\nCaracterísticas:")
    print(f"  Tamanho: {imovel['caracteristicas']['tamanho']} m²")
    print(f"  Número de Quartos: {imovel['caracteristicas']['numQuartos']}")
    print(f"  Número de Banheiros: {imovel['caracteristicas']['numBanheiros']}")
else:
    print("ID do imóvel não encontrado.")
