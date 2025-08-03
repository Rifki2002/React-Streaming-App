import logoImg from "../../assets/logo.png";
import googleImg from "../../assets/google.png";
import Button from "../button/button";
import TextBox from "../textBox/textBox";
import "./registerCard.css";
import { Link } from 'react-router-dom';

function RegisterCard ({title}){
    return (
        <div className="register-card">
        <img className="logo" src= {logoImg} alt="Logo" />
        <h2>{title}</h2>
        <form>
            <TextBox label="Masukan Username" type="text" placeholder="Username" required />
            <TextBox label="Masukan Password" type="password" placeholder="Password" required />
            <TextBox label="Konfirmasi Password" type="password" placeholder="Konfirmasi Password" required />
            <div className="helper-links">
            <div className="left-text">
            <span>Sudah punya akun?</span>
            <Link to="/">Masuk</Link>
            </div>
            </div>
            <Button className="register-button" name="Buat Akun" />
            <h3>OR</h3>
            <Button className="sso-button" icon={googleImg} name="Daftar Dengan Google" />

        </form>
        </div>
    );
}

export default RegisterCard;