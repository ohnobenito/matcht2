import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import "./Profile.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Table } from "react-bootstrap";
import Brand from "../../components/Brand/Brand";


function Profile() {
  const [jobsDb, setJobsDb] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  function loadJobs() {
    API.getLikedJobs()
      .then((res) => setJobsDb(res.data))
      .catch((err) => console.log(err));
  }

  function deleteJob(id) {
    API.deleteLikedJob(id)
      .then((res) => loadJobs())
      .catch((err) => console.log(err));
  }

  return (

        <Container>
            <Row className="justify-content-md-center">
              <Col xs={4} >
                <Brand />
              </ Col>
              <Col xs={7}>
              <h5 className="saveTitle">Saved Jobs</h5>
                {jobsDb.length ? (
                  
                  <Table striped bordered hover size="lg">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Job Type</th>
                        <th>Location</th>
                        <th>Link</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobsDb.map((job) => (
                        <tr key={job._id}>
                          <th>{job.title}</th>
                          <th>{job.company_name}</th>
                          <th>{job.job_type}</th>
                          <th>{job.candidate_required_location}</th>
                          <th className="jobLink">
                            <a href={job.url}>
                              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                          </th>
                          <DeleteBtn onClick={() => deleteJob(job._id)} />
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  
                ) : (
                  <h3> No Saved Jobs - Go Get Swipin'</h3>
                )}
              
              </Col>
            </Row>
          </Container>
  );
}

export default Profile;