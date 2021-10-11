import classes from "./Login.module.css";
import { useContext } from "react";
import AuthService from "../services/authService";
import { Context } from "../store/context";
import { loginRequest, loginSuccess } from "../store/authActions";

const Login = () => {
  const {authState: {token, isLoading, error}, setAuthState} = useContext(Context);

  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setAuthState(loginRequest());
    const authService = new AuthService();
    const result = await authService.login(
      "eve.holt@reqres.in",
      "cityslicka"
    );
    if (result.errorMessage) {

    } else {
        setAuthState(loginSuccess(result.data.token, "eve.holt@reqres.in"));
    }
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
          <input id="emailId" type="text" name="email" />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="passwordId">Password</label>
          <input id="passwordId" type="password" name="password" />
        </div>
        <button onClick={loginHandler} className={classes.btn}>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
