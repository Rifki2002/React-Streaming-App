import LoginCard from "../../components/loginCard/loginCard";
import "./loginPage.css";
import { useEffect } from 'react';

function LoginPage() {
  useEffect(() => {
    document.body.className = 'login-body';
  }, []);
 return (
   <div>
     <LoginCard 
       title="Login"
     />
   </div>
 );
}

export default LoginPage;