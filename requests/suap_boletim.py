import requests
from getpass import getpass

api_url = "https://suap.ifrn.edu.br/api/"

user = input("user: ")
password = getpass()

data = {"username":user,"password":password}

response = requests.post(api_url+"v2/autenticacao/token/", json=data)
token = response.json()["access"]
print(response.json())

headers = {
    "Authorization": f'Bearer {token}'
}


ano_letivo = input("Digite o ano letivo: ")
periodo_letivo = input("Digite o período letivo: ")

print(f"{api_url}v2/minhas-informacoes/boletim/{ano_letivo}/{periodo_letivo}/")

response = requests.get(f"{api_url}v2/minhas-informacoes/boletim/{ano_letivo}/{periodo_letivo}/", headers=headers)

print(response.text)
print(response)