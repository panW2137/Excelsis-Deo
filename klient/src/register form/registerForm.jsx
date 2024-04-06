import styles_registerForm from "./registerFrom.module.css"

function RegisterFrom(){
    return(
        <div className={styles_registerForm.registerFrom}>
            <div className={styles_registerForm.form}>
                <div>imię<input type="text"></input></div>
                <div>nazwisko<input type="text"></input></div>
                <div>patron<input type="text"></input></div>
                <div>parafia<input type="text"></input></div>
                <div></div>
                <div>email<input type="text"></input></div>
                <div>hasło<input type="password"></input></div>
                <div>powtórz hasło<input type="password"></input></div>
            </div>
            <div className={styles_registerForm.loginButtons}>
                <button> rejestruj </button>
            </div>
        </div>
    )
}

export default RegisterFrom