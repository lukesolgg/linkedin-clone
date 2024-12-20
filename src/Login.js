import React, { useState } from 'react';
import "./Login.css";
import LinkedInLogo from './content/LinkedInLogo.png';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  const auth = getAuth();

  const loginToApp = (e) => {
    e.preventDefault();
    // Your login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL,
        }));
      })
      .catch(error => alert(error.message));




  };

  const register = () => {
    if (!name) {
      alert('Please enter a full name!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoURL: profilePic,
          }));
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <img src={LinkedInLogo} alt=""/>
      <form>
        <input 
          type='text' 
          value={name} 
          onChange={e => setName(e.target.value)}  
          placeholder="Full name (required if registering)"
        />
        <input 
          value={profilePic} 
          onChange={e => setProfilePic(e.target.value)} 
          type='text' 
          placeholder="Profile pic URL (optional)"
        />
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          type='email' 
          placeholder="Email"
        />
        <input 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type='password' 
          placeholder="Password"
        />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      <p>{" "}Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </form>



    </div>
  )
}

export default Login