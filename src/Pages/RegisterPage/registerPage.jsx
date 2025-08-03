import React, { useEffect } from "react";
import RegisterCard from "../../components/registerCard/registerCard";
import "./registerPage.css";


function RegisterPage() {
  useEffect(() => {
    document.body.className = 'register-body';
  }, []);
 return (
   <div>
     <RegisterCard 
       title="Register"
     />
   </div>
 );
}

export default RegisterPage;
