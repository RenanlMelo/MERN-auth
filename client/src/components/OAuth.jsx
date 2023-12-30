import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));

        } catch (error) {
            console.log("Could not log with google", error);
        }
    };

  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-800 text-white rounded-lg p-3 uppercase font-semibold scale-95 
    transition-transform duration-100 ease-in-out hover:transform hover:scale-100 hover:bg-red-950 hover:italic hover:opacity-80 hover:shadow-inset hover:drop-shadow-light'>continue with google</button>
  )
}
