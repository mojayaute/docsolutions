import Header from "../components/Header";
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from "react";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";



function UsersList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const dataCriteria = { Body: { SearchText: search } };
            const res = await userServices.getAll(dataCriteria);
            let data = res.data;
            if (data.IsOK) {
                setUsers(data.Body);
            }
        } catch (error) {
            console.log("Error] -> ", error);
        }


    }

    const columns = [
        {
            name: 'Username',
            selector: row => row.Username
        },
        {
            name: 'Name',
            selector: row => row.Name
        },
        {
            name: 'FatherLastName',
            selector: row => row.FatherLastName
        },
        {
            name: 'CreationDate',
            selector: row => row.CreationDate
        },
        {
            name: 'Email',
            selector: row => row.Email
        },
        {
            name: 'PhoneNumber',
            selector: row => row.PhoneNumber
        },
    ];

    const handleFilter = event => {
        if (event.target.value) {
            setSearch(event.target.value);
            getUsers();
        } else {
            getUsers();
        }
    };

    return (
        <>
            <Header />
            <div className='container pt-5'>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3>Users</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to={"/users/add"} className="btn btn-success">New user</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card p-4'>
                            <div className="row mb-4 justify-content-end">
                                <div className="col-md-3">
                                    <input type="text" onChange={handleFilter} name="search" placeholder="Search" className="form-control" />
                                </div>
                            </div>
                            <DataTable columns={columns} data={users} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersList
