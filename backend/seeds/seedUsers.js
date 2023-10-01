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
        "username": "Wilma",
        "password": "Wilma1234!"
    },
    {
        "username": "Fred",
        "password": "Fred1234!"
    },
    {
        "username": "Barney",
        "password": "Barney1234!"
    },
    {
        "username": "Betty",
        "password": "Betty1234!"
    },
    {
        "username": "Bexy",
        "password": "Bexy1234!"
    }
]

module.exports = users