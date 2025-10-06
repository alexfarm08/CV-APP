import React, {useState} from "react";
import './experience.css';

export function ExperienceForm() {
    return (
        <div className="experienceFormContainer">
            <h3>Education: </h3>
            <form className="experienceForm">
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" placeholder="Enter Company Name" name="companyName"/>
                </div>
                <div>
                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" placeholder="Enter Position Title" name="positionTitle"/>
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
                    <label htmlFor="responsibilities">Key Responsibilities</label>
                    <textarea type="text" placeholder="Enter Responsibilities" name="responsibilities"/>
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