import React, { useState, useEffect, useContext } from "react";
import "./Search.css";
import API from "../../utils/API";
//import JobTable from "../../components/JobTable/JobTable";
import SwipeCard from "react-tinder-card";
import { Form, Col } from "react-bootstrap";
import { AuthContext } from "../../Auth";

function Search() {
  const [jobsData, setJobsData] = useState([]);
  const [locationSearched, setLocationSearched] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    loadJobData();
  }, []);

  function loadJobData() {
    API.getJobs()
      .then((res) => {
        setLocationSearched(res.data);
        setJobsData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputLocationChange(event) {
    let newJobs = locationSearched.filter((res) => {
      let searchValue = res.candidate_required_location.toLowerCase();
      let searchedIndex = searchValue.indexOf(event.target.value) !== -1;
      return searchedIndex;
    });
    setJobsData(newJobs);
  }

  //WE NEED TO BE ABLE TO GRAB THE INDEX FROM THE ARRAY IT'S DISPLAYING
  //ONCE WE DO THAT WE CAN CHANGE OUT THE CODE SO IT'S
  //this.state.jobdata[index].title instead of this.state.jobData

  // handleBtnClick = (event) => {
  //   event.preventDefault();
  //   const newState = { ...this.state };
  //   console.log("Button Clicked");
  //   console.log(newState);
  //   this.saveJob();
  // }
  // saveJob = (e) => {
  //   let index = e;
  //   API.saveLikedJob({
  //     title: this.state.jobData[index].title,
  //     company_name: this.state.jobData[index].company_name,
  //     url: this.state.jobData[index].url,
  //     job_type: this.state.jobData[index].job_type,
  //     candidate_required_location: this.state.jobData[index].candidate_required_location
  //   })
  //   .catch((err) => console.log(err));

  // }

  function onSwipe(e, direction) {
    let index = e;
    console.log("you swiped " + direction);
    if (direction === "right") {
      API.saveLikedJob({
        url: jobsData[index].url,
        title: jobsData[index].title,
        company_name: jobsData[index].company_name,
        job_type: jobsData[index].job_type,
        candidate_required_location:
          jobsData[index].candidate_required_location,
      }).catch((err) => console.log(err));
    }
  }

  return (
    <Form>
      <div className="container">
        <div className="row search">
          <Form.Group>
            <Form.Row>
              <Form.Label className="search-header">
                Search Location{" "}
              </Form.Label>
              <Col>
                <Form.Control
                  className="m-1"
                  type="search"
                  placeholder="Country"
                  onChange={handleInputLocationChange.bind(this)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <div className="container">
                <div className="row job-card">
                  {jobsData.map((res, index, arr) => (
                    <SwipeCard
                      className="swipe"
                      key={res._id}
                      preventSwipe={["up", "down"]}
                      onSwipe={(e) => onSwipe(index, e)}
                      job={index}
                    >
                      <div className="row">
                        <div className="offset-3 col-6 offset-3">
                          <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                              <h4 className="display-3"> {res.title} </h4>
                              <h6>Type: {res.job_type}</h6>
                              <h6>Company: {res.company_name}</h6>
                              <h6>Category: {res.category}</h6>
                              <h6>
                                {" "}
                                Required Location:{" "}
                                {res.candidate_required_location}
                              </h6>
                              <h6>
                                {" "}
                                <a href={res.url}> Link to Posting </a>{" "}
                              </h6>
                              {/* <button 
                                onClick={(e) => this.saveJob(index, e)}
                                key={res[index]}>
                                  Save Job to DB
                                  </button> */}
                              <hr className="my-4" />
                              <p>{res.description} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwipeCard>
                  ))}
                </div>
              </div>
            </Form.Row>
          </Form.Group>
        </div>
      </div>
    </Form>
  );
}

export default Search;
