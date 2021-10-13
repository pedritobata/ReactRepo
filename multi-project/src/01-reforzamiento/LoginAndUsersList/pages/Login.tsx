import classes from "./Login.module.css";
import { useContext, useState } from "react";
import { useHistory, useRouteMatch } from 'react-router-dom';
import AuthService from "../services/authService";
import { Context } from "../store/context";
import { loginFail, loginRequest, loginSuccess } from "../store/authActions";
import { LoginAndCollaboratorsRoutes } from "./Index";

const Login = () => {
  const {authState: {isLoading, error}, setAuthState} = useContext(Context);
  const history = useHistory();
  const match = useRouteMatch();
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setAuthState(loginRequest());
    const authService = new AuthService();
    const result = await authService.login(
      "eve.holt@reqres.in",
      "cityslicka"
    );
    if (result.errorMessage) {
        setAuthState(loginFail(result.errorMessage))
    } else {
        setAuthState(loginSuccess(result.data.token, formData.email));
        localStorage.setItem('token', result.data.token!);
        history.replace(`${match.path}/${LoginAndCollaboratorsRoutes.home}`);
    }
  }

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  if(isLoading) {
      return <h3>Loading...</h3>
  }

  return (
    <div className={classes.login}>
      <h1 className={classes.title}>Sign in</h1>
      <form className={classes.form}>
        <div className={classes.formControl}>
          <label htmlFor="emailId">Email</label>
          <input id="emailId" type="text" name="email" onChange={inputChangeHandler}/>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="passwordId">Password</label>
          <input id="passwordId" type="password" name="password" onChange={inputChangeHandler}/>
        </div>
        <button onClick={loginHandler} className={classes.btn}>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
