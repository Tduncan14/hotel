

const LoginForm = ({name,setName,email,setEmail,password,setPassword,handleSubmit}) => {




    return(
        <form onSubmit={handleSubmit} className="mt-3">
  
    
        <div className="form-group mb-3">
            <label className="form-label">Email Address</label>
             <input
               type="email"
               className="form-control"
               placeholder="Enter-email"
               value={email}
               onChange={e => setEmail(e.target.value)}/>
        </div>
    
    
          <div className="form-group mb-3">
              <label className="form-label">Password</label>
              <input
                 type="password"
                 className="form-control"
                 placeholder="Enter Password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}/>
          </div>
      
    
    
       <button className="btn btn-primary">Login</button>
    </form>
    
    )
    
    
    }
    
    export default LoginForm