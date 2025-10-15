import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <section
        style={{
          width: "100%",
          overflow: "hidden",
          height: "450px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg?semt=ais_incoming&w=740&q=80')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border py-5 rounded my-5 text-center bg-light bg-opacity-75">
            <h2>Designed to get hired</h2>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Link to={"/resume"}>
              <button className="btn btn-primary">Make Your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* Tools */}
      <section style={{ width: "100%", overflow: "hidden" }}>
        <h1 className="text-center p-4">Tools</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png"
              alt=""
              className="w-75 ms-5"
            />
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          overflow: "hidden",
          height: "500px",
          backgroundImage:
            "url('https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/brianvanderwaal.com/wp-content/uploads/2023/04/Best-AI-Resume-Builder.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      ></section>

      {/* Testimony */}
      <section className="p-5">
        <h1 className="text-center">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-5">
            <h3 className="mb-2">Trusted by Professionals Worldwide</h3>
            <p className="lh-lg">
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results. In fact,
              users who used LiveCareer reported getting hired an average of 48
              days faster. Join thousands of job-seekers who’ve fast-tracked
              their careers with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-12 col-md-6 p-5">
            <div className="row mb-2 mt-4">
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/108.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="row mb-2 mt-4">
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/108.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="row mb-2 mt-4">
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/108.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="row mb-2 mt-4">
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/108.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-3 ">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
