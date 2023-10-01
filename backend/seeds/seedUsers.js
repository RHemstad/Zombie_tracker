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
        "username": "FredA",
        "roles": 2001,
        "password": "$2b$10$zDnIruKyUERsaphJ5xGqC.rEI2hRVGy.qYwyOudWoPCd24q7kCIq2",
        //"refreshToken": need to add once it is working
    },
    {
        "username": "FredB",
        "roles": 2001,
        "password": "$2b$10$0NpWOfmoW./vUBK6knpFeuIZMjhSSGMnN4r6wDF.S2cXcsuWONWwK",
        //"refreshToken": need to add once it is working
    }
]

module.exports = users