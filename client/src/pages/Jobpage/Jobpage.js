import React, { useState, useEffect } from "react";
import SwipeCard from "react-tinder-card";
import "./style.css";
import API from "../../utils/API";

function Jobpage() {
  const [index, setIndex] = useState();
  const [jobsDb, setJobsDb] = useState();

  useEffect(() => {
    loadJobs();
  }, []);

  function loadJobs() {
    API.getJobs()
      .then((res) => setJobsDb(res.data))
      .catch((err) => console.log(err));
  }

//Button Click
function handleButtonClick(event) {
  event.preventDefault();
  console.log("I Clicked!");
  saveJob();
}

function saveJob() {
    API.saveLikedJob({
      url: this.jobsDb.url,
      title: this.jobsDb.title,
      company_name: this.jobsDb.company_name,
      job_type: this.jobsDb.job_type
    })
    .then((res) => loadJobs())
    .catch((err) => console.log(err));
    
  }

  const current = jobsDb[index];

  return (
    <div className="container">
      <div className="job-card">
        <button>Hello!</button>
          <SwipeCard
            className="swipe"
            key={current._id}
            preventSwipe={["up", "down"]}
            //onSwipe={deleteJob(job.id)}
            //onCardLeftScreen=
          >
            <div className="row">
              <div className="offset-3 col-6 offset-3">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h4 className="display-3"> {current.title} </h4>
                    <h6>Type: {current.current_type}</h6>
                    <h6>Company: {current.company_name}</h6>
                    <h6>Category: {current.category}</h6>
                    <h6>
                      {" "}
                      Required Location: {current.candidate_required_location}
                    </h6>
                    <h6>
                      {" "}
                      <a href={current.url}> Link to Posting </a>{" "}
                    </h6>
                    <hr className="my-4" />
                    <button onClick={handleButtonClick}>Save Button </button>
                    <p>{current.description} </p>
                  </div>
                </div>
              </div>
            </div>
          </SwipeCard>
      </div>
    </div>
  );
}

export default Jobpage;
