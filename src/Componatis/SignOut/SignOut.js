import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './SignOut.css'
import NavLink from "react-bootstrap/esm/NavLink";
export default function SignOut(){
    return(
        <div>
            
            <Container className='w-25'>
                <Row>
                                       <Form>
              <Form.Group className="mb-1 mt-3" controlId="text">
        <Form.Label>Fast Name</Form.Label>
        <Form.Control type='text' placeholder="Fast Name" />
      </Form.Group>                             
                                           
                                           
                                           
                         <Form.Group className="mb-3 mt-3 mb-1" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='text' placeholder="Last Name" />
      </Form.Group>                             
                                                     
                                           
                                           
                                           
                                           
      <Form.Group className="mb-3 mt-3 mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="emil" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
   <NavLink to="/home">
          <Button variant="primary mb-5" type="submit">
        Submit
      </Button>
   </NavLink>
    </Form>
                </Row>
            </Container>
        </div>
    )
}