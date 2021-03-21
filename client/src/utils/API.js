import axios from "axios";

const jobAPI = {
  getJobs: function () {
    return axios.get("/api/jobs");
  },
  getJob: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  saveJob: function(jobData) {
    return axios.post("/api/jobs", jobData);
  },
  deleteJob: function (id) {
    return axios.delete("/api/jobs/" + id);
  },
  getLikedJobs: function () {
    return axios.get("/api/likes");
  },
  getLikedJob: function (id) {
    return axios.get("/api/likes/" + id);
  },
  saveLikedJob: function(jobData) {
    return axios.post("/api/likes", jobData);
  },
  deleteLikedJob: function (id) {
    return axios.delete("/api/likes/" + id);
  }
};

export default jobAPI;
