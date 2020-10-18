import React, { useState } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"

function EditUser(props) {
    const [landingRedirect, setLandingRedirect] = useState(false);
    const [name, setName] = useState(props.state.account.name);
    const [email, setEmail] = useState(props.state.account.email);
    const [password, setPassword] = useState('');
    const [userPhoto, setUserPhoto] = useState(props.state.account.user_photo);

    const handleSubmit = (event) => {
        event.preventDefault();
        const registrationData = {
            userID: props.state.account._id,
            name: name,
            email: email,
            user_photo: userPhoto,
            rejected_animals: props.state.rejected_animals
        }

        axios
            .put("http://localhost:3001/user", registrationData)
            .then((response) => {
                console.log(response);
                return axios
                    .get(`http://localhost:3001/login/?email=${registrationData.email}&password=${password}`)
                    .then((response) => {
                        if (response.data) {
                            props.login(response.data)
                            setLandingRedirect(true);
                        } else {
                            alert("wrong credentials")
                        }
                    })
                    .catch((err) => {
                        alert(err);
                    });
            })
            .catch((err) => {
                alert(err);
                console.log(err)
            });

    }

    if (landingRedirect) {
        return <Redirect to="/landing" />
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Account</h1>
            <label>
                Full Name
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </label>
            <br></br>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </label>
            <br></br>
            <label>
                Display Picture:
                <input
                    name="userPhoto"
                    type="userPhoto"
                    value={userPhoto}
                    onChange={e => setUserPhoto(e.target.value)}
                    required />
            </label>
            <br></br>
            <p>Please input your password to confirm edits</p>
            <label>
                Password:
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
            </label>
            <br></br>

            <button>Submit</button>
        </form>
    );
}

export default EditUser;