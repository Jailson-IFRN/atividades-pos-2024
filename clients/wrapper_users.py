import requests

class UsersWrapper:
    def __init__(self, base_url="https://jsonplaceholder.typicode.com/users"):
        self.base_url = base_url

    def list(self):
        response = requests.get(self.base_url)
        return response.json()

    def create(self, user_data):
        response = requests.post(self.base_url, json=user_data)
        return response.json() if response.status_code == 201 else None

    def read(self, user_id):
        response = requests.get(f"{self.base_url}/{user_id}")
        return response.json() if response.status_code == 200 else None

    def update(self, user_id, user_data):
        response = requests.patch(f"{self.base_url}/{user_id}", json=user_data)
        return response.json() if response.status_code == 200 else None

    def delete(self, user_id):
        response = requests.delete(f"{self.base_url}/{user_id}")
        return response.status_code == 200

    def list_user_tasks(self, user_id):
        todos_url = f"https://jsonplaceholder.typicode.com/todos?userId={user_id}"
        response = requests.get(todos_url)
        return response.json() if response.status_code == 200 else None
