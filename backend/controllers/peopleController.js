//Get the data from the database
const People = require('../models/peopleModel')


/* *************************** */
/**** GET ALL PEOPLE ********* */

//http://localhost:3000/people/
async function getAllPeople(req, res) {
    try {
        const results = await People.findAll()
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({message: error})
    }
}


/* *************************** */
/**** ADD A PERSON ********* */
// http://localhost:3000/people/

//go to postman and do a post request
/*
    {
        "id": 4,
        "owner_name": "Wilma",
        "age": 30,
        "location": "New York",
        "pet_id": 1
    }
*/

//There is possibly an error here
async function addPerson(req, res) {
    try {
   const person = req.body
   //owner_name, age, location, pet_id
    if(person.owner_name == null || person.location == null || person.pet_id == null) {
        res.status(400).json({message: "Please provide all the information"})
    } else {
        const newPerson = await People.create(person)
        //console.log(person)
        res.status(201).json(newPerson)
    }

} catch (error) {
    res.status(500).json({message: error})
}

}

module.exports = {getAllPeople, addPerson}