import {useState} from "react";
import RegisterForm from "../components/RegisterForm";
import axios from 'axios';
import {toast} from 'react-toastify';
import {register} from '../actions/auth';

const Register = ({history}) => {

    console.log(history)
    console.log(process.env.REACT_APP_API,)

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = async (e) => {

        e.preventDefault()


    try{

       const response = await register({
           name,
           email,
           password}
        )
        
        console.log('register user',response)
        toast.success('Register success.please login')
        history.push('/')
    }

    catch(err){

        console.log('not sent')
     if(err.response.status === 400)toast.error(err.response.data)
    }


    }


    return(
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
          <h1>   Register Page</h1>
        </div>

        

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3" >
                    <RegisterForm  handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                </div>
            </div>
        </div>
      </>
    )



}



export default Register