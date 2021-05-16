import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


function Login () {
   
        const [user,setUser] = useState({
            email:'',password:''
        })
    const onChangeInput =e =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

        const loginSubmit = async e =>{
            e.preventDefault()
            try {
                
                await axios.post('/user/login',{...user}) 
                localStorage.setItem('firstLogin',true)
                window.location.href="/books";


            } catch (err) {
                alert(err.response.data.msg)
            }
        }


        return(
<div style={{backgroundColor:"#002147de"}}>
<br /><br/>
<div className="row justify-content-center">

     <div id="center" >
     
            <div id="b"><b>Log In</b></div>
            
                <form onSubmit={loginSubmit} method="POST">

                    <div className="form-group">

                    <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input id="email" type="email" name="email" placeholder="Email" className="form-control" 
                    aria-label="email" aria-describedby="addon-wrapping" value={user.email} required  onChange={onChangeInput}/>
                    
                </div>
                <small id="emaill"></small>
</div>

            <div className="form-group">
                    <div className="input-group flex-nowrap">
                    <span className="input-group-text glyphicon glyphicon-lock" id="addon-wrapping"> </span>
                    <input id="password" type="password" name="password" className="form-control" placeholder="Password" value={user.password} required  onChange={onChangeInput}/>
                </div><small id="passwordd" ></small>
            </div> 

            <div className="form-group" >
                {/*onclick="return val()"*/}    <button  type="submit" className="btn btn-dark btn-block">Log in</button>
            </div>

                <div className="cen" >
                   <small>forgot Your password?</small><br/>
                    <span className="text-muted">Don/'t You have any account Yet?</span> <small className="si"><Link to="/signup">Sign up</Link> </small><br/>

                </div>

                

           
                </form>
            
               

    </div>
</div>
<brv/><br /><brv/><br />
</div>
)
    }

export default Login;
