import classes from './Login.module.css';

const Login = () => {
    return (
        <div className={classes.login}>
            <h1 className={classes.title}>Sign in</h1>
            <form className={classes.form}>
                <div className={classes.formControl}>
                    <label htmlFor="emailId">Email</label>
                    <input id="emailId" type="text" name="email"/>
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="passwordId">Password</label>
                    <input id="passwordId" type="password" name="password"/>
                </div>
                <button className={classes.btn}>Sign in</button>
            </form>
        </div>
    )
};

export default Login;
