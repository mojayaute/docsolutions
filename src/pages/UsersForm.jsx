import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import userServices from "../services/userServices";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";


function formUsers() {

    const initAddress = {
        UserName: "",
        Password: "",
        Name: "",
        FatherLastName: "",
        MotherLastName: "",
        Email: "",
        PhoneNumber: "",
        Metadata: null,
        Roles: [ {  Id: 2, Name: 'Usuario Tradicional' } ],
    }

    const { id } = useParams(); 
    const [address, setAddress] = useState(initAddress);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setAddress({ ...address, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let res =  await userServices.save(address);

            if (res.status === 200) {
                Swal.fire({
                    title: 'Done',
                    text: 'User Registered',
                    icon: 'success',
                }).then((result) => {
                    navigate('/users/all');
                });
            } else {
                console.log("Error -> ", res.data);
                setIsError(true);
            }

        } catch (error) {
            console.log("Error on [FormAddress | handleSubmit] -> ", error);
        }
    }
    
    const formFields = [
        { label: "Username", name: "UserName" },
        { label: "Password", name: "Password", type: "password" },
        { label: "Name", name: "Name" },
        { label: "FatherLastName", name: "FatherLastName" },
        { label: "MotherLastName", name: "MotherLastName" },
        { label: "Email", name: "Email", type: "email" },
        { label: "PhoneNumber", name: "PhoneNumber", type: "number" }
    ];

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <h3>Address</h3>
                            {isError ? (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    An error ocurred. please try again later.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            ) : (null)}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                {formFields.map(field => (
                                    <div key={field.name} className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label">{field.label}:</label>
                                            <input
                                                type={field.type || "text"}
                                                name={field.name}
                                                value={address[field.name]}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                ))}
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success mb-2">Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default formUsers
