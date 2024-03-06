import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import axios from 'axios';
import { useState } from 'react'; // Import the useState hook

function Contact() {
  // Use useState to manage the state of form data
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const Api_url = "http://localhost:3001";
    axios.post(Api_url + '/api/contact', {
      name: name,
      email: email,
      mobile: mobile
     
    })
      .then(response => {
        console.log(response.data);
        console.log(name,email,mobile)
        setname('');
        setEmail('');
        setMobile('');
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  }

  return (
    <Container>
      <Row>
        <Col md="4">
        </Col>
        <Col md="4" className="card mt-4" >
          <h3 className="text-center mt-4">Contact</h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mt-4">
              {/* <label>Name:</label> */}
              <input type="text"  name="name" onChange={(e) => setname(e.target.value)} placeholder="Name" className="form-control" />
            </FormGroup>
            <FormGroup className="mt-4">
              {/* <label>Email:</label> */}
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" />
            </FormGroup>
            <FormGroup className="mt-4">
            
              <input type="text" name="mobile" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile no" className="form-control" />
            </FormGroup>
            <FormGroup className="mt-4">
              <input type="submit" value="Submit" className="btn btn-dark float-end mt-4 mb-4" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
