
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div>
            <div className="email mt-5">
                <p>Email: <input type="text" /> Password: <input type="text" /></p>
            </div>
            <div className="sign mb-5">
                <Button variant="primary">Sign Up</Button>
            </div>
        </div>
    );
};

export default SignUp;