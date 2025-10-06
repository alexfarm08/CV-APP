import React, {useState} from "react";
import "./personalForm.css"

export default function PersonalInputForm() {
    return (
        <div className="personalFormContainer">
            <h3>Personal Info: </h3>
            <form className="personalForm">
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" placeholder="Enter First Name" name="firstName"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" placeholder="Enter Last Name" name="lastName"/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter Email" name="email"/>
                </div>
                <div>
                    <label htmlFor="phone">Last Name: </label>
                    <input type="text" placeholder="Enter Phone Number" name="phone"/>
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" placeholder="Enter Your Address" name="address"/>
                </div>
            </form>
        </div>
    );
}