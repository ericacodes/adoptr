import React, { useState } from 'react';
import axios from "axios";

function AnimalRegistration(props) {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (event) => {
        const registrationData = {
            name: name,
            breed: breed,
            gender: gender,
            age: age
        }

        axios
            .post("http://localhost:3001/animals", registrationData)
            .then((response) => {
                console.log("FE response", response);
            })
            .catch((err) => {
                alert(err);
            });

        event.preventDefault();
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>Create Animal</h1>

            <label>
                Name
        <input
                    name="name"
                    type="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </label>
            <br></br>
            <label>
                Breed
        <input
                    name="breed"
                    type="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    required />
            </label>

            <br></br>
            <label>
                Gender
        <input
                    name="gender"
                    type="gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    required />
            </label>
            <br></br>
            <label>
                Age
        <input
                    name="age"
                    type="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    required />
            </label>

            <button>Submit</button>
        </form>

    );
}

export default AnimalRegistration;