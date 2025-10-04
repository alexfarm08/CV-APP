import React, {useState} from "react";
import "./personalForm.css"

export default function PersonalInputForm() {
    return (
        <div className="personalForm">
            <h3>Personal Info: </h3>
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" placeholder="Enter First Name" name="firstName"/>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" placeholder="Enter Last Name" name="lastName"/>

                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="Enter Email" name="email"/>

                <label htmlFor="phone">Last Name: </label>
                <input type="text" placeholder="Enter Phone Number" name="phone"/>

                <button type="button">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}