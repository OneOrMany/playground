import json

users = []
# name_dictionary ={
#     "name":"someone",
#     "age":22
# }
# users.append(name_dictionary)

for user in range(50):
    user_dict ={
        "name": chr(user) * 8,
        "age": user
    }
    users.append(user_dict)
json_myusers=json.dumps(users)

with open('users.json', 'w') as outfile:
    outfile.write(json_myusers)
