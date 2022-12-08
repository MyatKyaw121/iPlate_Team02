import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

  const Signup =(props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword,setconfirmPassword]=React.useState('');
    const [jump, setJump] = React.useState(false);

    if(jump)
    {
        window.location.href = '/home';
    }

    const handleSubmit2 = () => {
        const body = {
            username: username,
            password: password,
            confirmPassword: confirmPassword
        };
        const settings = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

            fetch('/api/signup', settings)
            .then((res) =>res.json()
                ).then((body) => {
                    if(body.isSucceed==="true"){
                        alert('User succesfully created!!')
                        setJump(true);
                        window.location.href = '/';
                    }
                    else{
                            alert(body.message);
                            setJump(false);
                            window.location.href = '/signup';
                    }
                }).catch((err)=> {
                    window.location.href='/signup';
                    alert(err);
                });
    };

    return (
        <div >
            {/* nav bar */}
            <Navbar isLogged={false} />

            <div className="form-container">
                {/* form title */}
                <h2 className="form-title">Welcome to iPlate!</h2>

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

                    <div className="form-group">
                        <input
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* divider -> register page */}
                    {props.page === "register" && <div className="dropdown-divider"></div>}

                    {/* Log in! button */}
                    <div className="nav-a">
                        <Link
                            to={"/"}
                            className="btn btn-outline-success my-2 my-sm-0 button"
                        >
                        Existing User? Log In!
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

export default Signup;

