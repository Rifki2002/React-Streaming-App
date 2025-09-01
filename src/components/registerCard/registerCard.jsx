import logoImg from "../../assets/logo.png";
import googleImg from "../../assets/google.png";
import Button from "../button/button";
import TextBox from "../textBox/textBox";
import { Link } from "react-router-dom";

function RegisterCard({ title }) {
  return (
    <div className="flex flex-col justify-between text-center bg-[#2a2929ae] w-full max-w-[600px] mx-auto p-6 sm:p-10 rounded-2xl border border-gray-300 shadow-lg">
      <img
        className="w-40 sm:w-72 h-auto mb-5 self-center"
        src={logoImg}
        alt="Logo"
      />

      <h2 className="text-2xl font-bold text-white mb-5">{title}</h2>

      <form>
        <div className="flex flex-col gap-4 w-auto">
          <TextBox
            label="Masukan Username"
            type="text"
            placeholder="Username"
            required
          />
          <TextBox
            label="Masukan Password"
            type="password"
            placeholder="Password"
            required
          />
          <TextBox
            label="Konfirmasi Password"
            type="password"
            placeholder="Konfirmasi Password"
            required
          />
        </div>

        <div className="flex justify-between mt-2 mb-12 text-sm text-white">
          <span>
            Sudah punya akun?{" "}
            <Link to="/" className="text-white hover:underline">
              Masuk
            </Link>
          </span>
        </div>

        <Button
          className="w-full bg-[#2a2929ae] text-white border-2 border-gray-300 rounded-2xl py-3 cursor-pointer hover:bg-[#1a1a1a] transition"
          name="Buat Akun"
        />

        <h3 className="text-gray-300 my-4">OR</h3>

        <Button
          className="w-full flex items-center justify-center gap-2 bg-[#2a2929ae] text-white border-2 border-gray-300 rounded-2xl py-3 hover:bg-[#1a1a1a] transition"
          icon={googleImg}
          name="Daftar Dengan Google"
        />
      </form>
    </div>
  );
}

export default RegisterCard;
