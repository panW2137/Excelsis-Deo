import styles_loginForm from "./loginForm.module.css"

function LoginForm(){
    return(
        <div className={styles_loginForm.loginForm}>
            <div className={styles_loginForm.form}>
                <div>e-mail<input type="text"></input></div>

                <div>hasło<input type="password"></input></div>
            </div>
            <div className={styles_loginForm.loginButtons}>
                <button> loguj </button>
                <button> zarejestruj się </button>
                <button> zapomniałem hasła </button>
            </div>
        </div>
    )
}

export default LoginForm