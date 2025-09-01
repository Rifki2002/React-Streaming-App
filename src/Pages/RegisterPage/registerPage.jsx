import RegisterCard from "../../components/registerCard/registerCard";
import { useEffect } from "react";

function RegisterPage() {
    useEffect(() => {
      document.body.className = "bg-[url('/src/assets/background2.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center";
    }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <RegisterCard title="Register" />
    </div>
  );
}

export default RegisterPage;
