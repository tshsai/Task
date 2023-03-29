import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
//     useEffect(() => {
//         // Define the 'otpless' function
//         window.otpless = (otplessUser) => {
//          // Retrieve the user's details after successful login
//          const waName = otplessUser.waName;
//          const waNumber = otplessUser.waNumber;
                 
//          // Handle the signup/signin process
//          // ...
//         };
//        }, []);
const navigate = useNavigate();
async function HandleSubmit(event){
    event.preventDefault();
    
    
    if(event.target.email.value==="tshsai0@gmail.com" && event.target.PhoneNumber.value==8688596894){
        navigate('/Login_success');
    }else{
        alert("Login failed");
    }
    console.log(event.target.email.value);
}
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        Email:<input type="text" name="email" id="email" /><br />
        MobileNumber:<input type="number" name="PhoneNumber" id="PhoneNumber" /><br />
        <input type="submit" value="login" id='button'/>
      </form>
    </div>
  )
}
