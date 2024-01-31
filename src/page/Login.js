import React from 'react'
import { Container } from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticat}) => {
    const navigate = useNavigate();
    const loginClick = (e) => {
        e.preventDefault();
        setAuthenticat(true);
        navigate('/');
    }
    
    return (
        <Container className='container-size'>
            {/* <Container className='container-size'> 
                <h1>로그인 화면</h1>
                <Form.Label htmlFor="inputId">Email address</Form.Label>
                <Form.Control
                    type="text"
                    id="inputId"
                    placeholder='Email address'
                />
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    placeholder='Password'
                />
                <br />
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Login
                    </Button>
                </div>
            </Container> */}
                <Form onSubmit={(e) => loginClick(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
        </Container>
    )
}

export default Login