import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FaRegEdit } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Edit from "./Edit";
import jspdf from "jspdf";
import html2canvas from "html2canvas";

function Preview({ userInput, isResumeAdded, resumeId, setUserInput }) {
  console.log(userInput);

  const downloadPDF = async () => {
    const input = document.getElementById("result"); // to get id
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // pdf
    const pdf = new jspdf("P", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <>
      <Box component="section">
        <Stack
          direction={"row"}
          sx={{ gap: "10px", display: "flex", justifyContent: "end" }}
        >
          {/* edit */}
          {isResumeAdded && (
            <div className="d-flex gap-2">
              <Edit resumeId={resumeId} setUserInput={setUserInput} />

              {/* download */}
              <p>
                <button
                  type="button"
                  className="btn btn-primary align-items-center d-flex justify-content-center btn-lg"
                  onClick={downloadPDF}
                >
                  <FaFileDownload />
                </button>
              </p>
            </div>
          )}

          {/* history */}
          <p>
            <Link href={"/history"}>
              <button className="btn btn-primary align-items-center d-flex justify-content-center btn-lg">
                <FaHistory />
              </button>
            </Link>
          </p>
          <Link href={"/"}>
            <p className="btn text-primary">Back</p>
          </Link>
        </Stack>

        <div className="mt-3 p-3" id="result">
          <Paper
            elevation={3}
            sx={{ p: 2, textAlign: "center", padding: "50px" }}
          >
            <h2>{userInput.professionalData.name}</h2>
            <h4>{userInput.professionalData.JobTitle}</h4>
            <p>
              <span>{userInput.professionalData.location}</span> |{" "}
              <span>{userInput.professionalData.email}</span> |{" "}
              <span>{userInput.professionalData.phone}</span>
            </p>
            <div className="d-flex gap-2 justify-content-center mb-3">
              <Link href={userInput.professionalData.github}>Github</Link> |{" "}
              <Link href={userInput.professionalData.linkedin}>Linkedin</Link> |{" "}
              <Link href={userInput.professionalData.portfolio}>Portfolio</Link>
            </div>

            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
              Summary
            </Divider>
            <p style={{ textAlign: "justify" }}>{userInput.summary}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
              Education
            </Divider>
            <h5>{userInput.educationData.course}</h5>

            <p>
              {userInput.educationData.college} |{" "}
              {userInput.educationData.university} |{" "}
              {userInput.educationData.year}
            </p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
              Professional Experience
            </Divider>
            <h5>{userInput.experience.jobRole}</h5>

            <p>
              {userInput.experience.company} | {userInput.experience.jobLoc} |{" "}
              {userInput.experience.duration}
            </p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>
              Skills
            </Divider>
            <Stack
              spacing={2}
              direction={"row"}
              sx={{ flexWrap: "wrap", gap: "10px" }}
            >
              {userInput.skill.map((item) => (
                <Button variant="contained">{item}</Button>
              ))}
            </Stack>
          </Paper>
        </div>
      </Box>
    </>
  );
}

export default Preview;
