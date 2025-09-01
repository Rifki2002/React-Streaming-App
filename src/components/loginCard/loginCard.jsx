import logoImg from "../../assets/logo.png";
import googleImg from "../../assets/google.png";
import Button from "../button/button";
import TextBox from "../textBox/textBox";
import { Link } from "react-router-dom";

function LoginCard({ title }) {
  return (
    <div className="text-center bg-[#2a2929ae] w-full max-w-[500px] mx-10 p-10 rounded-2xl border border-gray-300 shadow-md flex flex-col justify-between">
      <img className="w-[300px] h-auto mb-5 self-center" src={logoImg} alt="Logo" />
      <h2 className="mb-5 text-2xl font-semibold text-white">{title}</h2>

      <form className="flex flex-col gap-4 ">
        <TextBox label="Masukan Username" type="text" placeholder="Username" required />
        <TextBox label="Masukan Password" type="password" placeholder="Password" required />

        <div className="flex justify-between w-full mt-2 mb-12 text-sm text-white">
          <div>
            <span>Belum punya akun? </span>
            <Link to="/register" className="underline hover:text-gray-300">Daftar</Link>
          </div>
          <div>
            <a href="/" className="underline hover:text-gray-300">Lupa kata sandi?</a>
          </div>
        </div>

        <Link to="/home">
          <Button
            className="bg-[#2a2929ae] text-white border-2 border-gray-300 rounded-2xl w-full hover:bg-[#1a1a1a]"
            name="Masuk"
          />
        </Link>

        <h3 className="text-gray-200">OR</h3>

        <Button
          className="bg-[#2a2929ae] text-white border-2 border-gray-300 rounded-2xl w-full flex items-center justify-center gap-2 hover:bg-[#1a1a1a]"
          icon={googleImg}
          name="Masuk Dengan Google"
        />
      </form>
    </div>
  );
}

export default LoginCard;
