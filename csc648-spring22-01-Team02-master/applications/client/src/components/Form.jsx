import React from "react";

const Form = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  var globalVar = window.sessionStorage;

  const handleSubmit = () => {
    const body = {
      username: username,
      password: password,
    };
    const settings = {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(body),
    };

    if (password === confirmPassword) console.log("Password matched!");
    fetch("http://localhost:8000/users/login", settings)
      .then((res) => res.json())
      .then((body) => {
        globalVar.setItem("username", JSON.stringify(body.username));
        globalVar.setItem("isSucceed", JSON.stringify(body.isSucceed));
        if (body.isSucceed === true) {
          window.location.href = "/home";
        } else {
          alert(body.message);
          globalVar.removeItem("isSucceed");
          globalVar.removeItem("username");
          globalVar.removeItem("testMessage");
          window.location.href = "/";
        }
      });
  };

  return (
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
        {/* comfirm password -> register page */}
        {props.page === "register" && (
          <div className="form-group">
            <input
              type="password"
              id="exampleInputPassword2"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
        )}
        {/* divider -> register page */}
        {props.page === "register" && <div className="dropdown-divider"></div>}
        {/*  */}
        {/* submit button */}
        <button type="submit" className="btn btn-primary button" onClick={handleSubmit}>
          {props.page === "register" ? "Sign up!" : "Login"}
        </button>
        <div>
          {/* {message} */}
        </div>
      </form>
    </div>
  );
};

export default Form;
