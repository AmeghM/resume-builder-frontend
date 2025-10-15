import React, { useState } from "react";
import Steps from "../components/Steps";
import Preview from "../components/Preview";

function Form() {
  const [userInput, setUserInput] = React.useState({
    professionalData: {
      name: "",
      JobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobRole: "",
      company: "",
      jobLoc: "",
      duration: "",
    },
    skill: [],
    summary: "",
  });

  const [isResumeAdded, setIsResumeAdded] = useState(false);
  const [resumeId, setResumeId] = useState("");
  // console.log(resumeId);
  return (
    <>
      <div className="container-fluid">
        {isResumeAdded ? (
          <div className="row p-5">
            <div className="col-2"></div>
            <div className="col-8">
              <Preview
                userInput={userInput}
                isResumeAdded={isResumeAdded}
                resumeId={resumeId}
                setUserInput={setUserInput}
              />
            </div>
            <div className="col-2"></div>
          </div>
        ) : (
          <div className="row p-5">
            <div className="col-6">
              <Steps
                setUserInput={setUserInput}
                userInput={userInput}
                setIsResumeAdded={setIsResumeAdded}
                setResumeId={setResumeId}
              />
            </div>
            <div className="col-6">
              <Preview userInput={userInput} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
