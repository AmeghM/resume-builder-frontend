import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { getResumeAPI, updateResumeAPI } from "../service/allAPI";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "90vh",
};

function Edit({ resumeId, setUserInput }) {
  const [open, setOpen] = React.useState(false);
  const [editUserInput, setEditUserInput] = React.useState({
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

  const [inputSkill, setInputSkill] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  // console.log(resumeId);

  const getEditResume = async (resumeId) => {
    try {
      const result = await getResumeAPI(resumeId);
      console.log(result);
      setEditUserInput(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEditResume(resumeId);
  }, []);

  console.log(editUserInput);

  const skillsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "REACT",
    "MongoDB",
    "NodeJS",
  ];

  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (editUserInput.skill.includes(inputSkill)) {
        alert("Given skill already Exists");
      } else {
        setEditUserInput({
          ...editUserInput,
          skill: [...editUserInput.skill, inputSkill],
        });
      }
    }
  };

  const removeSkill = (skill) => {
    setEditUserInput({
      ...editUserInput,
      skill: [editUserInput.skill.filter((item) => item != skill)],
    });
  };

  const updateResume = async () => {
    try {
      const res = await updateResumeAPI(resumeId, editUserInput);
      console.log(res);
      setUserInput(res.data);

      if (res.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Resume Updated Successfully!",
          icon: "success",
        });
        handleClose();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Resume not updated!",
          icon: "error",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="btn btn-primary align-items-center d-flex justify-content-center btn-lg"
      >
        <FaRegEdit />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your Resume
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h1>Personal Details</h1>
              <div className="row d-flex p-3">
                <TextField
                  value={editUserInput.professionalData.name}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        name: e.target.value,
                      },
                    })
                  }
                  id="name"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.JobTitle}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        JobTitle: e.target.value,
                      },
                    })
                  }
                  id="job-title"
                  label="Job title"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.location}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        location: e.target.value,
                      },
                    })
                  }
                  id="location"
                  label="Location"
                  variant="standard"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1>Contact Details</h1>
              <div className="row d-flex p-3 ">
                <TextField id="email" label="Email" variant="standard" />
                <TextField
                  value={editUserInput.professionalData.email}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        email: e.target.value,
                      },
                    })
                  }
                  id="email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.phone}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        phone: e.target.value,
                      },
                    })
                  }
                  id="phone-number"
                  label="Phone Number"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.github}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        github: e.target.value,
                      },
                    })
                  }
                  id="github"
                  label="GitHub Profile Link"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.linkedin}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        linkedin: e.target.value,
                      },
                    })
                  }
                  id="linkedin"
                  label="LinkedIn Profile Link"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.portfolio}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        portfolio: e.target.value,
                      },
                    })
                  }
                  id="porfolio"
                  label="Portfolio Profile Link"
                  variant="standard"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1>Education Details</h1>
              <div className="row d-flex p-3">
                <TextField
                  value={editUserInput.educationData.course}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        course: e.target.value,
                      },
                    })
                  }
                  id="couse-name"
                  label="Course Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.college}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        college: e.target.value,
                      },
                    })
                  }
                  id="college-name"
                  label="College Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.university}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        university: e.target.value,
                      },
                    })
                  }
                  id="university"
                  label="University"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.year}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        year: e.target.value,
                      },
                    })
                  }
                  id="passout"
                  label="Year of Passout"
                  variant="standard"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1>Professional Details</h1>
              <div className="row d-flex p-3">
                <TextField
                  value={editUserInput.experience.jobRole}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        jobRole: e.target.value,
                      },
                    })
                  }
                  id="job-or-internship"
                  label="Job or Internship"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.company}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        company: e.target.value,
                      },
                    })
                  }
                  id="company-name"
                  label="Company Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.jobLoc}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        jobLoc: e.target.value,
                      },
                    })
                  }
                  id="company-location"
                  label="Location"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.duration}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        duration: e.target.value,
                      },
                    })
                  }
                  id="duration"
                  label="Duration"
                  variant="standard"
                />
              </div>
            </div>
            <div className="mt-3">
              <h1>Skills</h1>
              <div className=" d-flex align-items-center  justify-content-between">
                <TextField
                  value={inputSkill}
                  onChange={(e) => setInputSkill(e.target.value)}
                  sx={{ width: "600px" }}
                  id="skill"
                  label="Add skills"
                  variant="standard"
                />

                <Button onClick={() => addSkill(inputSkill)} variant="outlined">
                  Add
                </Button>
              </div>
              <div className="mt-3">
                <h4>Suggestions:</h4>
                <div className="d-flex flex-wrap gap-4 mt-3">
                  {skillsArray.map((userSkill) => (
                    <Button
                      onClick={() => addSkill(userSkill)}
                      key={userSkill}
                      variant="outlined"
                    >
                      {userSkill}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <h4>Added Skills:</h4>
                {editUserInput.skill.map((skill) => (
                  <span key={skill} className="btn btn-primary me-3">
                    {skill}
                    <button
                      onClick={(skill) => removeSkill(skill)}
                      className="text-light btn"
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h1>Professional Summary</h1>
              <div className="row d-flex p-3">
                <TextField
                  value={editUserInput.summary}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      summary: e.target.value,
                    })
                  }
                  multiline
                  rows={5}
                  id="professional-summary"
                  label="Write a short summary of yourself"
                  variant="standard"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end gap-4">
              <Button variant="outlined">Clear</Button>
              <Button type="button" onClick={updateResume} variant="outlined">
                Update
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
