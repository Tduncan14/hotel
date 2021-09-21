import {toast} from 'react-toastify';
import {login} from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

const Login = () => {


    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()


    }



    return(
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
           <h1>Login</h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <LoginForm />

                </div>

            </div>
        </div>

        </>
    )



}



export default Login