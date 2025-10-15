import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// add resume - POST - steps component
export const addResumeAPI = async (resume) => {
  return await commonAPI("POST", `${BASEURL}/all-resumes`, resume);
};

// get resume
export const getResumeAPI = async (id) => {
  return await commonAPI("GET", `${BASEURL}/all-resumes/${id}`, {});
};

// get all resumes
export const getAllResumesAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/all-resumes`, {});
};

// update resume
export const updateResumeAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/all-resumes/${id}`, reqBody);
};

// delete resume
export const deleteResumeAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/all-resumes/${id}`, {});
};
