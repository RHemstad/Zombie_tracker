/* needed by the map */
/*
    id: "US",
    name: "United States",
    value: 100
*/
/* zombie types
slow zombies
fast zombies
intelligent zombies
vodoo zombies
infected
hybrid
biological
feral
crawler
decaying
*/

/*
Zombies Table:
zombie_id (Primary key)
type (of zombie) //needs to be a drop down in form


id: (of location of zombie) //needs to be a drop down in form
name: (of location of zombie) //needs to be a drop down in form
value: (of zombie) //value is fixed for now

notes
image_url (or a reference to the image location)
created_at
updated_at
user_id (Foreign key) - so the user can see the zombies they have reported

*/


const zombies = [
    {
        "type": "Slow",
        "id": "US",
        "name": "United States",
        "value": 100,
        "notes": "these are notes affiliated with this zombie",
        "user_id": 1
    },

    {
        "type": "Fast",
        "id": "GB",
        "name": "United Kingdom",
        "value": 100,
        "notes": "these are notes affiliated with this zombie",
        "user_id": 1
    }

]

module.exports = zombies