import requests
from requests.auth import HTTPBasicAuth


password = "chave"
user = "Jailson-IFRN"

print("Digite 1 para seguir o usuário")
print("Digite 2 para parar de seguir o usuário ")

opcao = int(input())


if opcao == 1:

    username = input("Digite o nome do usuário que deseja seguir: ")

    response = requests.put(f'https://api.github.com/user/following/{username}', 
                            auth = HTTPBasicAuth(user, password))

    print(response.status_code)

elif opcao == 2:

    username = input("Digite o nome do usuário que deseja parar de seguir: ")

    response = requests.delete(f'https://api.github.com/user/following/{username}', auth = HTTPBasicAuth(user, password))

    print(response.status_code)

else:
    print("Opção não conhecida")



