import wrapper_users as users

def main():
    api = users.UsersWrapper()

    print("Digite 1 para listar todos os usuários")
    print("Digite 2 para listar tarefas de um usuário específico")
    print("Digite 3 para CRUD de usuários")
    opcao = input()

    if opcao == "1":
        users_list = api.list()
        for user in users_list:
            print(f"{user['id']} - {user['name']}")

    elif opcao == "2":
        user_id = input("Digite o ID do usuário: ")
        tasks = api.list_user_tasks(user_id)
        if tasks:
            for task in tasks:
                print(task["title"])
                print("*" * 40)
        else:
            print("Usuário não encontrado ou sem tarefas.")

    elif opcao == "3":
        print("Digite 1 para criar um novo usuário")
        print("Digite 2 para ler um usuário")
        print("Digite 3 para atualizar um usuário")
        print("Digite 4 para deletar um usuário")
        opcao2 = input()

        if opcao2 == "1":
            user_data = {
                "name": input("Digite o nome de usuário: "),
                "username": input("Digite o nome de usuário: "),
                "email": input("Digite o email de usuário: "),
                "address": {
                    "street": input("Digite o endereço de usuário: "),
                    "city": input("Digite a cidade de usuário: ")
                }
            }
            user = api.create(user_data)
            if user:
                print("Usuário criado com sucesso:", user)
            else:
                print("Falha na criação do usuário.")

        elif opcao2 == "2":
            user_id = input("Digite o ID para o usuário a ser consultado: ")
            user = api.read(user_id)
            if user:
                print(user)
            else:
                print("Usuário não encontrado.")

        elif opcao2 == "3":
            user_id = input("Digite o ID do usuário a ser editado: ")
            user_data = {
                "name": input("Digite o nome de usuário: "),
                "email": input("Digite o email de usuário: ")
            }
            user = api.update(user_id, user_data)
            if user:
                print("Usuário atualizado com sucesso:", user)
            else:
                print("Falha na atualização do usuário.")

        elif opcao2 == "4":
            user_id = input("Digite o ID do usuário: ")
            if api.delete(user_id):
                print("Usuário deletado com sucesso.")
            else:
                print("Falha ao deletar o usuário.")
        else:
            print("Opção não encontrada.")
    else:
        print("Opção não encontrada.")

if __name__ == "__main__":
    main()
