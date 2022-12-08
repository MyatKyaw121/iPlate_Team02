import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

  const Login =(props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    var globalVar = window.sessionStorage;

    if(globalVar.isSucceed==="true")
    {
      window.location.href = '/home';
    }

    const handleSubmit2 = () => {
        const body = {
            username: username,
            password: password,
        };
        const settings = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

            fetch('/api/login', settings)
            .then((res) =>res.json()
                ).then((body) => {
                  //alert(body.isSucceed);
                    if(body.isSucceed===true){
                      globalVar.setItem("username", JSON.stringify(body.username));
                    //   alert("This is the branch");
                      globalVar.setItem("isSucceed", JSON.stringify(body.isSucceed));
                      //alert('!!')
                      window.location.href = '/home';
                      
                    }
                    else{
                      alert(body.message);
                    }
                }).catch((err)=> {
                  alert(err);
                    window.location.href='/signup';
                    
                });

    };

    return (
        <div >
            {/* nav bar */}
            <Navbar isLogged={false} />

            <div className="form-container">
                {/* form title */}
                <h2 className="form-title">Welcome back!</h2>

                <form>
                    {/* username */}
                    <div className="form-group form-entry">
                        <input
                            type="text"
                            id="exampleInputEmail1"
                            placeholder="email / username"
                            required
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* password */}
                    <div className="form-group">
                        <input
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="nav-a">
                        {/* Sign up! button */}
                        <Link
                            to={"/signup"}
                            className="btn btn-outline-success my-2 my-sm-0 button"
                        >
                        New User ? Sign up
                        </Link>
                        {/* submit button */}
                        <button type="button" className="btn btn-primary button" onClick={handleSubmit2}>
                        {'Submit'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;