import requests

#user_id = input("digite o id do usuário: ")
#response = requests.get(f"https://jsonplaceholder.typicode.com/users/{user_id}")

#print(response.status_code)

#user = response.json()
#print(f"{user['name']} - {user['email']}")
#for i in response.json():
    #print(f"{i['name']} - {i['email']}")



api_url = "https://jsonplaceholder.typicode.com/users"

print("digite 1 para listar todos os usuários")
print("Digite 2 para listar tarefas de um usuário")
print("digite 3 para CRUD de usuários")
opcao = input()

if opcao == "1":
    response = requests.get(api_url).json()
    for user in response:
        print(f"{user['id']} - {user['name']}")
elif opcao == "2":
    user_id = int(input("Digite o ID do usuário: "))
    response = requests.get(f"{api_url}/{user_id}/todos").json()
    for i in response:
        print(i["title"])
        print("*" * 40)
elif opcao == "3":
    print("Digite 1 para criar um novo usuário")
    print("Digite 2 para ler um usuário")
    print("Digite 3 para atualizar um usuário")
    print("Digite 4 para deletar um usuário")
    opcao2 = input()
    if opcao2 == "1":
        user_data = {}
        user_data["name"] = input("Digite o nome de usuário: ")
        user_data["username"] = input("Digite o nome de usuário: ")
        user_data["email"] = input("Digite o email de usuário: ")
        user_address = {}
        user_address["street"] = input("Digite o endereço de usuário: ")
        user_address["city"] = input("Digite a cidade de usuário: ")
        user_data["address"] = user_address
        response = requests.post(api_url, json=user_data).status_code
        if response == 201:
            print("SUCESSO")
        else:
            print("Derrota")
        


    elif opcao2 == "2":
        user_id2 = input("Digite o ID para o usuário a ser consultado: ")
        response = requests.get(api_url+"/"+user_id2).json()
        print(response)
    elif opcao2 == "3":
        id_user = input("Digite o ID do usuário a ser editado: ")
        user = requests.get(api_url+"/"+id_user).json()
        user["name"] = input("Digite o nome de usuário: ")
        user["email"] = input("Digite o email de usuário: ")
        response = requests.patch(api_url+"/"+id_user, json=user).status_code

        if response == 200:
            print("Sucesso")
        else:
            print("trsite")

    elif opcao2 == "4":
        user_id2 = input("Digite o ID do usuário: ")
        response = requests.delete(api_url+"/"+user_id2).status_code
        if response == 200:
            print("sucesso")
        else:
            print("Trsite")
    else:
        print("Opção não encontrada.")
else:
    print("Opção não encontrada.")