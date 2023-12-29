import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
document.body.style.overflow = "hidden";
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function signIn() {

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data));
        return;
      }
      
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="bg-gray-800  z-0 absolute bg-cover bg-center bg-no-repeat top-0 w-screen h-screen flex justify-center items-center">
      <div className='absolute w-4/12 h-2/3 drop-shadow-4xl left-60 top-60 mix-blend-overlay'>
        <svg viewBox="0 0 190 190" xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow)" }}>
        <defs>
            <filter id="drop-shadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="30" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.65" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        <path fill="url(#gradiente)" transform="translate(95 95)">
          <animate attributeName='d' dur='30000ms' repeatCount='indefinite' values='M40.3,-69.9C53.1,-62.5,65,-53.4,70.8,-41.5C76.7,-29.6,76.5,-14.8,75.3,-0.7C74.1,13.4,71.8,26.8,66.2,39C60.5,51.2,51.3,62.1,39.7,69.4C28.1,76.6,14.1,80.1,-0.9,81.7C-15.9,83.3,-31.8,82.9,-43.9,75.9C-56,69,-64.4,55.5,-69.1,41.7C-73.8,28,-74.9,14,-76.4,-0.8C-77.8,-15.7,-79.6,-31.3,-73.9,-43.4C-68.2,-55.5,-55,-64,-41.5,-70.9C-27.9,-77.9,-13.9,-83.3,-0.1,-83.1C13.8,-83,27.5,-77.2,40.3,-69.9Z;
          M44.2,-78C56.7,-69.3,65.9,-56.3,72.5,-42.6C79.2,-28.9,83.3,-14.4,82.6,-0.4C81.9,13.7,76.5,27.3,69.7,40.9C63,54.5,55,67.9,43.2,73.9C31.3,79.8,15.7,78.3,1.3,76C-13.1,73.8,-26.2,71,-40.5,66.5C-54.8,61.9,-70.3,55.7,-78.2,44.4C-86.1,33,-86.4,16.5,-84.2,1.3C-82,-13.9,-77.2,-27.9,-69.1,-39C-61.1,-50.1,-49.8,-58.5,-37.8,-67.4C-25.7,-76.3,-12.9,-85.8,1.5,-88.4C15.8,-91,31.7,-86.6,44.2,-78Z;
          M38.3,-65.4C50.5,-59.4,61.8,-50.8,68.3,-39.5C74.9,-28.2,76.6,-14.1,76.8,0.1C77.1,14.4,75.9,28.7,69.8,40.9C63.8,53,52.9,62.9,40.5,71.1C28,79.2,14,85.6,-0.3,86.1C-14.6,86.7,-29.3,81.3,-40.5,72.5C-51.6,63.6,-59.4,51.2,-66.5,38.5C-73.6,25.8,-80,12.9,-80.9,-0.5C-81.8,-14,-77.2,-28,-69.6,-39.6C-61.9,-51.2,-51.1,-60.5,-39,-66.6C-26.9,-72.6,-13.4,-75.5,-0.2,-75.2C13.1,-74.9,26.1,-71.4,38.3,-65.4Z;
          M46.5,-78C60,-72.7,70.6,-59.8,75.7,-45.5C80.9,-31.2,80.6,-15.6,78.5,-1.2C76.4,13.2,72.6,26.4,66,38.2C59.4,50.1,50.2,60.5,38.7,68.8C27.3,77.2,13.6,83.5,-1.4,85.9C-16.4,88.4,-32.9,86.9,-45.3,79.1C-57.8,71.3,-66.2,57.2,-73.9,43C-81.6,28.7,-88.6,14.4,-87.5,0.7C-86.4,-13.1,-77.1,-26.1,-68.6,-39C-60.1,-51.8,-52.3,-64.4,-41,-71C-29.6,-77.6,-14.8,-78.1,0.8,-79.5C16.5,-80.9,32.9,-83.2,46.5,-78Z;
          M37.3,-68C48.2,-58.4,56.7,-48,64.4,-36.5C72.1,-25.1,79.1,-12.5,81.2,1.2C83.3,15,80.5,29.9,73.5,42.7C66.5,55.4,55.3,65.9,42.3,71.5C29.4,77.1,14.7,77.9,1.1,76.1C-12.5,74.2,-25,69.6,-36.2,62.9C-47.4,56.2,-57.2,47.5,-63.8,36.6C-70.5,25.8,-74,12.9,-75.3,-0.7C-76.6,-14.4,-75.7,-28.8,-69.5,-40.4C-63.3,-52.1,-51.8,-61,-39.4,-69.7C-26.9,-78.3,-13.5,-86.6,-0.1,-86.4C13.2,-86.2,26.5,-77.5,37.3,-68Z;
          M40.3,-69.9C53.1,-62.5,65,-53.4,70.8,-41.5C76.7,-29.6,76.5,-14.8,75.3,-0.7C74.1,13.4,71.8,26.8,66.2,39C60.5,51.2,51.3,62.1,39.7,69.4C28.1,76.6,14.1,80.1,-0.9,81.7C-15.9,83.3,-31.8,82.9,-43.9,75.9C-56,69,-64.4,55.5,-69.1,41.7C-73.8,28,-74.9,14,-76.4,-0.8C-77.8,-15.7,-79.6,-31.3,-73.9,-43.4C-68.2,-55.5,-55,-64,-41.5,-70.9C-27.9,-77.9,-13.9,-83.3,-0.1,-83.1C13.8,-83,27.5,-77.2,40.3,-69.9Z'>
          </animate>
        </path>
          <defs>
              <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#2ef0b9", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#8661c1", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
        </svg>
      </div>
    
      <div className='absolute w-4/12 h-2/3 drop-shadow-4xl right-60 bottom-72 mix-blend-overlay'>
        <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow2)" }}>
        <defs>
            <filter id="drop-shadow2" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="30" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.65" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        <path fill="url(#gradiente2)" transform="translate(110 110)">
          <animate attributeName='d' dur='30000ms' repeatCount='indefinite' values='M60.6,-55.4C76.7,-44.5,86.7,-22.3,85.5,-1.2C84.2,19.8,71.8,39.5,55.6,53.9C39.5,68.2,19.8,77.1,3.2,73.9C-13.5,70.8,-26.9,55.6,-40,41.2C-53.1,26.9,-65.9,13.5,-66.6,-0.7C-67.4,-14.9,-56.1,-29.9,-43,-40.8C-29.9,-51.7,-14.9,-58.6,3.7,-62.3C22.3,-66,44.5,-66.4,60.6,-55.4Z";
          M40.4,-38C52.8,-28.1,63.4,-14,64,0.6C64.6,15.3,55.3,30.6,42.9,45.3C30.6,59.9,15.3,74,-0.7,74.6C-16.6,75.3,-33.3,62.6,-48.2,48C-63.1,33.3,-76.2,16.6,-76.1,0.1C-76,-16.5,-62.7,-32.9,-47.8,-42.8C-32.9,-52.6,-16.5,-55.9,-1.2,-54.7C14,-53.5,28.1,-47.8,40.4,-38Z;
          M48.1,-44.8C62.9,-33.3,76,-16.6,76.6,0.6C77.1,17.7,65.2,35.5,50.3,44.6C35.5,53.6,17.7,54,0.3,53.6C-17.1,53.3,-34.1,52.2,-46,43.2C-57.8,34.1,-64.4,17.1,-65.8,-1.4C-67.1,-19.8,-63.2,-39.5,-51.4,-51C-39.5,-62.5,-19.8,-65.8,-1.6,-64.2C16.6,-62.6,33.3,-56.3,48.1,-44.8Z;
          M50.7,-50.1C61.4,-40.1,62.7,-20,63.9,1.2C65.1,22.4,66.1,44.8,55.4,53.1C44.8,61.5,22.4,55.9,0.6,55.3C-21.2,54.7,-42.5,59.2,-55.6,50.9C-68.7,42.5,-73.7,21.2,-70.8,2.9C-67.9,-15.4,-57.1,-30.8,-44,-40.8C-30.8,-50.8,-15.4,-55.4,2.3,-57.7C20,-60,40.1,-60.1,50.7,-50.1Z;
          M40.5,-37C53.3,-27.7,65.1,-13.8,65.2,0C65.2,13.9,53.5,27.9,40.7,39.7C27.9,51.5,13.9,61.2,-1.9,63.1C-17.8,65,-35.6,59.2,-48.9,47.4C-62.2,35.6,-71.1,17.8,-72.9,-1.8C-74.8,-21.4,-69.6,-42.9,-56.2,-52.2C-42.9,-61.5,-21.4,-58.8,-3.8,-55C13.8,-51.1,27.7,-46.3,40.5,-37Z;
          M60.6,-55.4C76.7,-44.5,86.7,-22.3,85.5,-1.2C84.2,19.8,71.8,39.5,55.6,53.9C39.5,68.2,19.8,77.1,3.2,73.9C-13.5,70.8,-26.9,55.6,-40,41.2C-53.1,26.9,-65.9,13.5,-66.6,-0.7C-67.4,-14.9,-56.1,-29.9,-43,-40.8C-29.9,-51.7,-14.9,-58.6,3.7,-62.3C22.3,-66,44.5,-66.4,60.6,-55.4Z;'>
          </animate>
        </path>
        <defs>
              <linearGradient id="gradiente2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#eb3613", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#8224b5", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
        </svg>
      </div>

      <div className='p-6 max-w-xl w-1/2 h-3/6 bg-white bg-opacity-10 relative z-20 shadow-5xl rounded-2xl backdrop-blur-sm'>
        <h1 className="text-4xl text-center font-semibold my-7 pb-3 text-slate-100">Sign In</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <input type="text" placeholder='Email' id='email' className='bg-zinc-800 text-slate-100 p-3 rounded-lg'onChange={handleChange}/>
          <input type="password" placeholder='Password' id='password' className='bg-zinc-800 text-slate-100 p-3 rounded-lg'onChange={handleChange}/>

            <button disabled={loading} className="text-xl text-slate-100 relative px-6 py-3 text-center w-1/1 transition-all ease-out disabled:opacity-60
            bg-indigo-950 rounded-md duration-400 hover:scale-95 hover:ease-linear hover:duration-75 hover:bg-gray-900 hover:italic">{loading? 'Loading...' : 'Sign In'}
            </button>
           

        </form>
        <div className='flex gap-2 mt-5'>
          <p className='text-slate-100'>Don't have an account?</p>
          <Link to='/sign-in'>
            <span className='text-blue-500 font-semibold'>Sign-Up</span>
          </Link>
        </div>
        <p className='text-red-600 pmt-5 font-semibold'>{error ? error.message || 'Something went wrong' : ''}</p>
      </div>
    </div>

  )
}
