/*
Users Table:
user_id (Primary key)
username
password (hashed and salted)
email
created_at
updated_at
*/

const users = [
    {
        "username": "Bexy",
        "password": "Bexy1234!"
    },
    {
        "username": "Fred",
        "password": "Fred1234!"
    }
]

module.exports = users