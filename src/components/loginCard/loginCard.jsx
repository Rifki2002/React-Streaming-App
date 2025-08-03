import logoImg from "../../assets/logo.png";
import googleImg from "../../assets/google.png";
import Button from "../button/button";
import TextBox from "../textBox/textBox";
import "./loginCard.css";
import { Link } from 'react-router-dom';

function LoginCard ({title}){
    return (
        
        <div className="login-card">
        <img className="logo" src= {logoImg} alt="Logo" />
        <h2>{title}</h2>
        <form>
            <TextBox label="Masukan Username" type="text" placeholder="Username" required />
            <TextBox label="Masukan Password" type="password" placeholder="Password" required />
            <div className="helper-links">
            <div className="left-text">
            <span>Belum punya akun?</span>
            <Link to="/register">Daftar</Link>
            </div>
            <div className="right-text"> <a href=" ">Lupa kata sandi?</a>
            </div>
            </div>
            <Link to="/home">
            <Button className="login-button" name="Masuk" onClick={() => {}} />
            </Link>
            <h3>OR</h3>
            <Button className="sso-button" icon={googleImg} name="Masuk Dengan Google" />
        </form>
        </div>
        
    );
}

export default LoginCard;