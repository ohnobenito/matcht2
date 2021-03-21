import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
//import JobTable from "../../components/JobTable/JobTable";
import SwipeCard from "react-tinder-card";
import { Form, Col } from "react-bootstrap";

class Search extends Component {
  state = {
    jobData: [],
    locationSearched: [],
  };

  componentDidMount() {
    this.loadJobData();
  }

  loadJobData = () => {
    API.getJobs()
      .then((res) => {
        this.locationSearched = res.data;
        this.setState({ jobData: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleInputLocationChange = (event) => {
    let newJobs = this.locationSearched.filter((res) => {
      console.log(res.candidate_required_location);
      let searchValue = res.candidate_required_location.toLowerCase();
      return searchValue.indexOf(event.target.value) !== -1;
    });
    this.setState({ jobData: newJobs });
  };
 
  //WE NEED TO BE ABLE TO GRAB THE INDEX FROM THE ARRAY IT'S DISPLAYING
  //ONCE WE DO THAT WE CAN CHANGE OUT THE CODE SO IT'S 
  //this.state.jobData[index].title instead of this.state.jobData[7].title
  
  handleBtnClick = (event) => {
    event.preventDefault();
    const newState = { ...this.state };
    console.log("Button Clicked");
    console.log(newState);
    this.saveJob();
  }
  saveJob = () => {
    API.saveLikedJob({
      title: this.state.jobData[7].title,
      company_name: this.state.jobData[7].company_name,
      url: this.state.jobData[7].url,
      job_type: this.state.jobData[7].job_type,
      candidate_required_location: this.state.jobData[7].candidate_required_location
    })
  }
  onSwipe = (job) => {
    console.log(this.state.jobData)

  }


  render() {
    return (
      <Form>
        <div className="container">
          <div class="row search">
            <Form.Group>
              <Form.Row>
                <Form.Label className="search-header">Search Location </Form.Label>
                <Col>
                  <Form.Control
                    className="m-1"
                    type="search"
                    placeholder="Country"
                    onChange={this.handleInputLocationChange.bind(this)}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <div className="container">
                  <div className="row job-card">
                    {this.state.jobData.map((res, index, arr) => (
                      <SwipeCard className="swipe" 
                      key={res._id} 
                      preventSwipe={["up", "down"]}
                      onSwipe={this.onSwipe} job={index}
                      >
                        <div className="row">
                          <div className="offset-3 col-6 offset-3">
                            <div className="jumbotron jumbotron-fluid">
                              <div className="container">
                                <h4 className="display-3"> {res.title} </h4>
                                <h6>Type: {res.job_type}</h6>
                                <h6>Company: {res.company_name}</h6>
                                <h6>Category: {res.category}</h6>
                                <h6> Required Location: {res.candidate_required_location}</h6>
                                <h6>
                                  {" "}
                                  <a href={res.url}> Link to Posting </a>{" "}
                                </h6>
                                <button 
                                onClick={this.handleBtnClick} 
                                key={res[index]}>Save Job to DB</button>
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
}

export default Search;
