import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
//import JobTable from "../../components/JobTable/JobTable";
import SwipeCard from "react-tinder-card";
import { Form, Col, Jumbotron } from "react-bootstrap";
import Brand from "../../components/Brand/Brand";

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

  loadNextJob = () => {
    API.getJobs()
  }

  handleInputLocationChange = (event) => {
    let newJobs = this.locationSearched.filter((res) => {
      //console.log(res.candidate_required_location);
      let searchValue = res.candidate_required_location.toLowerCase();
      return searchValue.indexOf(event.target.value) !== -1;
    });
    this.setState({ jobData: newJobs });
  };
 
  onSwipe = (e, direction) => {
    let index = e;
    console.log("you swiped " + direction)
    if (direction === "right") {
    API.saveLikedJob({
      title: this.state.jobData[index].title,
      company_name: this.state.jobData[index].company_name,
      url: this.state.jobData[index].url,
      job_type: this.state.jobData[index].job_type,
      candidate_required_location: this.state.jobData[index].candidate_required_location
    })
    .catch((err) => console.log(err));
    } 
  }



  render() {
    return (
      <>
      <Brand />
      
      <Form>
        <div className="container">
          <div className="row search">
            <Form.Group>
              <Form.Row>
                <Form.Label className="search-header">Search Location </Form.Label>
                <Col>
                  <Form.Control
                    className="m-1"
                    type="search"
                    placeholder="Country"
                    onChange={(this.handleInputLocationChange.bind(this))}
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
                      onSwipe={(e) => this.onSwipe(index, e)}
                      job={index}
                      >
                        <div className="row">
                          <Col>
                            <Jumbotron>
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
                                <hr className="my-4" />
                                <p>{res.description} </p>
                              </div>
                              </Jumbotron>
                              </Col>
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
      </>
    );
  }
}

export default Search;
