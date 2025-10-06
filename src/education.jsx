import React, {useState} from "react";
import "./education.css"


export function EducationForm() {
    return (
        <div className="educationFormContainer">
            <h3>Education: </h3>
            <form className="educationForm">
                <div>
                    <label htmlFor="schoolName">School Name</label>
                    <input type="text" placeholder="Enter School Name" name="schoolName"/>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" placeholder="Enter Degree" name="degree"/>
                </div>
                <div>
                    <label htmlFor="sdate">Start Date</label>
                    <input type="text" placeholder="Enter Start Date" name="sdate"/>
                </div>
                <div>
                    <label htmlFor="edate">End Date</label>
                    <input type="text" placeholder="Enter End Date" name="edate"/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder="Enter Location" name="location"/>
                </div>
                <div className="buttonDiv">
                    <div className="innerButtons">
                        <button>cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}