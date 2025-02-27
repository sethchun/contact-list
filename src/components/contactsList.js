import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactsList = (props) => {
    const navigate = useNavigate();

    return (
        <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
                    <thead>
                        <tr className="align-middle">
                            <th scope="col">Profile Pic</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>
                            {props.contacts.map(contact => {
                                return (
                                    <tr key={contact.id} onClick={() => navigate(`/contacts/${contact.id}`, {state: {contact}})}>
                                        <td><img className="img-fluid" src={contact.imageUrl} alt="profile pic"/></td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phoneNumber}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            <Link to="/contacts/new">
                <button className="btn btn-primary">Add New Contact</button>
            </Link>
        </div>
    )
};

export default ContactsList;
