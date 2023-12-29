import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
document.body.style.overflow = "hidden";

export default function signUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(true);
        return;
      }

      navigate('/');

    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="bg-gray-800  z-0 absolute bg-cover bg-center bg-no-repeat top-0 w-screen h-screen flex justify-center items-center">
      <div className='absolute w-4/12 h-2/3 drop-shadow-4xl left-60 top-20'>
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
          <animate attributeName='d' dur='30000ms' repeatCount='indefinite' values='M38.5,-45.7C45.7,-31.2,44.6,-15.6,41.3,-3.3C38,9,32.6,18.1,25.3,28.1C18.1,38.2,9,49.3,-4.5,53.8C-18.1,58.4,-36.2,56.4,-52.4,46.3C-68.5,36.2,-82.7,18.1,-82.9,-0.2C-83.1,-18.5,-69.4,-37.1,-53.2,-51.5C-37.1,-66,-18.5,-76.4,-1.5,-74.9C15.6,-73.5,31.2,-60.2,38.5,-45.7Z;
          M51.7,-49.6C67.9,-35.5,82.4,-17.8,79.1,-3.4C75.7,11,54.4,22.1,38.3,33.1C22.1,44.1,11,55.1,-6,61.1C-23.1,67.1,-46.1,68.2,-54.3,57.1C-62.5,46.1,-55.8,23.1,-52.9,2.9C-50,-17.2,-50.8,-34.5,-42.6,-48.5C-34.5,-62.6,-17.2,-73.5,0.3,-73.7C17.8,-74,35.5,-63.7,51.7,-49.6Z;
          M58.2,-58.7C70.7,-45.8,72.6,-22.9,72.7,0.1C72.7,23,70.9,46.1,58.5,57.1C46.1,68,23,66.9,2.3,64.6C-18.5,62.3,-36.9,58.8,-45.7,47.9C-54.4,36.9,-53.5,18.5,-55.7,-2.2C-57.9,-22.9,-63.3,-45.7,-54.5,-58.6C-45.7,-71.4,-22.9,-74.2,0,-74.3C22.9,-74.3,45.8,-71.5,58.2,-58.7Z;
          M60.2,-58.1C75,-45.4,81.9,-22.7,81,-0.9C80,20.9,71.3,41.7,56.5,55.1C41.7,68.4,20.9,74.3,-0.5,74.7C-21.8,75.2,-43.6,70.3,-53.8,57C-64,43.6,-62.5,21.8,-56.8,5.7C-51,-10.3,-41,-20.7,-30.9,-33.3C-20.7,-46,-10.3,-60.9,6.2,-67.1C22.7,-73.2,45.4,-70.7,60.2,-58.1Z;
          M49.2,-50.7C59.8,-38.5,61.8,-19.3,61.5,-0.3C61.2,18.7,58.7,37.4,48.1,46.6C37.4,55.8,18.7,55.4,3,52.4C-12.7,49.4,-25.4,43.7,-39.8,34.6C-54.1,25.4,-70.2,12.7,-73.1,-2.9C-76.1,-18.6,-65.9,-37.2,-51.5,-49.3C-37.2,-61.5,-18.6,-67.3,0.3,-67.6C19.3,-68,38.5,-62.9,49.2,-50.7Z;
          M38.5,-45.7C45.7,-31.2,44.6,-15.6,41.3,-3.3C38,9,32.6,18.1,25.3,28.1C18.1,38.2,9,49.3,-4.5,53.8C-18.1,58.4,-36.2,56.4,-52.4,46.3C-68.5,36.2,-82.7,18.1,-82.9,-0.2C-83.1,-18.5,-69.4,-37.1,-53.2,-51.5C-37.1,-66,-18.5,-76.4,-1.5,-74.9C15.6,-73.5,31.2,-60.2,38.5,-45.7Z'>
          </animate>
        </path>
          <defs>
              <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#940eb0", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#3682da", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
        </svg>
      </div>
    
      <div className='absolute w-4/12 h-2/3 drop-shadow-2xl right-96 bottom-0'>
        <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow2)" }}>
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
        <path fill="url(#gradiente2)" transform="translate(85 85)">
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
                <stop offset="0%" style={{ stopColor: "#19db96", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#b10fd2", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
        </svg>
      </div>

      <div className='p-6 max-w-xl w-1/2 h-3/6 bg-white bg-opacity-10 relative z-20 shadow-5xl rounded-2xl backdrop-blur-sm'>
        <h1 className="text-4xl text-center font-semibold my-7 pb-3 text-slate-100">Sign Up</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'onChange={handleChange}/>
          <input type="text" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'onChange={handleChange}/>
          <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'onChange={handleChange}/>

            <button disabled={loading} className="text-xl text-slate-100 relative px-6 py-3 text-center w-1/1 transition-all ease-out disabled:opacity-60
            bg-indigo-950 rounded-md duration-400 hover:scale-95 hover:ease-linear hover:duration-75 hover:bg-gray-900 hover:italic">{loading? 'Loading...' : 'Sign Up'}
            </button>
           

        </form>
        <div className='flex gap-2 mt-5'>
          <p className='text-slate-100'>Have an account</p>
          <Link to='/sign-in'>
            <span className='text-blue-500 font-semibold'>Sign-In</span>
          </Link>
        </div>
        <p className='text-red-600 pmt-5 font-semibold'>{error && 'Something went wrong'}</p>
      </div>
    </div>

  )
}
