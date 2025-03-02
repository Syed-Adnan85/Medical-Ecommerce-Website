import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
const [user, setUser] = useState({});
const navigate = useNavigate();
const [profilePic, setProfilePic] = useState("https://static.vecteezy.com/system/resources/previews/029/364/941/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg");

useEffect(() => {  
      const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
    const User = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        navigate("/login");
    }
    else {
        setUser(User);
    }

   
}, [navigate]);

const getProfilePic = (e) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        localStorage.setItem("profilePic", imageData);  
        setProfilePic(imageData);
      };
      reader.readAsDataURL(file);
    }
    };

const DeleteAccount = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("profilePic"); 
    navigate("/signup");
    window.location.reload(); 
}

const LogOut=()=>{
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    window.location.reload();
}

  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-500 to-indigo-950'>
<div className='flex flex-col space-y-4 py-5 bg-white rounded-lg p-10 mt-5'>
    <h1 className='text-white bg-pink-950 rounded-2xl text-center text-2xl'>Profile</h1>
    <img src={profilePic} alt="profile photo"  className='rounded-full w-44 h-44 object-cover aspect-square  m-auto mb-4 border-4 border-green-500'/>
    <div className='flex justify-center mb-10'>
         <label htmlFor="pic" className='bg-emerald-800 text-white p-2 rounded-xl cursor-pointer'>   Choose Profile Picture</label>
    <input type="file" accept='image/*' id='pic' className='hidden' onChange={getProfilePic} />
    </div>
   
    <h1 className=' text-xl font-bold'><span className='text-black'>Name:</span>  {user.name}</h1>
    <p className='text-xl font-bold'><span>Email:</span> {user.email}</p>

    <button className='bg-blue-500 text-white w-full mb-4 px-6 py-3 font-semibold rounded-lg hover:bg-blue-600' onClick={LogOut}>Log Out</button>

    <button className='bg-red-500 text-white w-full px-6 py-3 font-semibold rounded-lg hover:bg-red-600' onClick={DeleteAccount} >Delete Account</button>

   

</div>
    </div>
  )
}

export default Profile