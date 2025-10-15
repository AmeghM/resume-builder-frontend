import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { deleteResumeAPI, getAllResumesAPI } from "../service/allAPI";

function History() {
  const [userInput, setUserInput] = useState({
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

  const getAllResumes = async () => {
    const result = await getAllResumesAPI();
    console.log(result);
    setUserInput(result.data);
  };
  console.log(userInput);
  useEffect(() => {
    getAllResumes();
  }, []);

  const handleDeleteResume = async (id) => {
    try {
      const res = await deleteResumeAPI(id);
      console.log(res);
      getAllResumes();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-5">Downloaded Resume History</h1>
        <Link
          to={"/"}
          style={{ marginTop: "-50px" }}
          className=" float-end me-5"
        >
          Back
        </Link>

        <Box component={"section"} className="container-fluid">
          <div className="row mt-5">
            {userInput?.length > 0 ? (
              userInput?.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <Paper
                    elevation={3}
                    sx={{ my: 5, p: 2, textAlign: "center" }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <h6>
                      Review At: <br /> 30/09/2024, 7:20:30
                    </h6> */}
                      <h6>Resume Number:{index + 1}</h6>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteResume(item?.id)}
                      >
                        X
                      </button>
                    </div>
                    <div className="mt-3 p-3">
                      <h2>{item?.professionalData.name}</h2>
                      <h4>{item?.professionalData.JobTitle}</h4>
                      <p>
                        <span>{item?.professionalData.location}</span> |{" "}
                        <span>{item?.professionalData.email}</span> |{" "}
                        <span>{item?.professionalData.phone}</span>
                      </p>
                      <div className="d-flex gap-2 justify-content-center mb-3">
                        <Link href={item?.professionalData.github}>Github</Link>{" "}
                        |{" "}
                        <Link href={item?.professionalData.linkedin}>
                          Linkedin
                        </Link>{" "}
                        |{" "}
                        <Link href={item?.professionalData.portfolio}>
                          Portfolio
                        </Link>
                      </div>

                      <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
                        Summary
                      </Divider>
                      <p style={{ textAlign: "justify" }}>{item?.summary}</p>
                      <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
                        Education
                      </Divider>
                      <h5>{item?.educationData.course}</h5>

                      <p>
                        {item?.educationData.college} |{" "}
                        {item?.educationData.university} |{" "}
                        {item?.educationData.year}
                      </p>
                      <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
                        Professional Experience
                      </Divider>
                      <h5>{item?.experience.jobRole}</h5>

                      <p>
                        {item?.experience.company} | {item?.experience.jobLoc} |{" "}
                        {item?.experience.duration}
                      </p>
                      <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
                        Skills
                      </Divider>
                      <Stack
                        spacing={2}
                        direction={"row"}
                        sx={{ flexWrap: "wrap", gap: "10px" }}
                      >
                        {item?.skill.map((item) => (
                          <Button variant="contained">{item}</Button>
                        ))}
                      </Stack>
                    </div>
                  </Paper>
                </div>
              ))
            ) : (
              <div>NO resumes added</div>
            )}
          </div>
        </Box>
      </div>
    </>
  );
}

export default History;
