import { useSelector } from 'react-redux';
import { useState } from 'react';
import Form from '../components/Form';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';  
import '../components/Animation.css';

const profile = ({}) => {

  const { currentUser } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [ isOpenPopup, setIsOpenPopup ] = useState(false);
  const [ isOpenBg, setIsOpenBg ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(false);

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='absolute z-30 p-8 h-36 flex justify-center items-center left-44 mb-12'>
        <h1 className='text-4xl border-l-2 pl-5 text-white italic'>Profile</h1>
      </div>

      <div className='absolute top-10 bg-slate-950 flex justify-center items-center w-full h-full'>
        <div className='absolute w-4/12 drop-shadow-4xl right-0 top-0 mix-blend-hard-light opacity-80'>
          <svg viewBox="0 0 180 180" width='100%' xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow2)" }}>
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
          <path fill="url(#gradiente1)" width='100%' transform="translate(90 90)">
            <animate attributeName='d' dur='30000ms' repeatCount='indefinite' values='M28.9,-13.3C39,0.7,49.7,17.8,45,33.5C40.3,49.2,20.1,63.5,-4,65.8C-28.1,68.1,-56.1,58.3,-69,37.9C-81.9,17.5,-79.7,-13.6,-65.6,-29.9C-51.6,-46.2,-25.8,-47.8,-8.2,-43C9.4,-38.3,18.8,-27.3,28.9,-13.3Z";
            M45.1,-28.7C51.4,-15,44.7,3.4,35,16.4C25.3,29.3,12.7,36.7,-1,37.3C-14.6,37.8,-29.2,31.6,-39.1,18.5C-49,5.4,-54.3,-14.5,-47,-28.7C-39.7,-43,-19.8,-51.6,-0.2,-51.5C19.4,-51.4,38.7,-42.5,45.1,-28.7Z;
            M38.2,-15.4C48.7,-4,55.7,16.1,48.8,30.8C41.8,45.5,20.9,54.9,1.2,54.2C-18.6,53.5,-37.1,42.9,-42,29.4C-46.8,15.9,-37.8,-0.4,-28.5,-11.1C-19.3,-21.9,-9.6,-27.1,2.1,-28.3C13.9,-29.6,27.8,-26.8,38.2,-15.4Z;
            M44.8,-27.1C54.7,-8.7,57.1,12.8,48.3,24.5C39.6,36.3,19.8,38.2,-3.5,40.2C-26.8,42.3,-53.6,44.3,-66.8,30C-80,15.7,-79.7,-15.1,-66.3,-35.5C-52.9,-56,-26.5,-66.2,-4.5,-63.6C17.4,-60.9,34.9,-45.6,44.8,-27.1Z;
            M34.4,-14.8C46.3,0.8,58.9,21,53.3,36.4C47.7,51.8,23.8,62.2,-0.8,62.7C-25.4,63.1,-50.7,53.5,-64.6,33.4C-78.5,13.2,-81,-17.5,-68.3,-33.5C-55.6,-49.5,-27.8,-50.8,-8.3,-46C11.2,-41.2,22.5,-30.3,34.4,-14.8Z;
            M28.9,-13.3C39,0.7,49.7,17.8,45,33.5C40.3,49.2,20.1,63.5,-4,65.8C-28.1,68.1,-56.1,58.3,-69,37.9C-81.9,17.5,-79.7,-13.6,-65.6,-29.9C-51.6,-46.2,-25.8,-47.8,-8.2,-43C9.4,-38.3,18.8,-27.3,28.9,-13.3Z;'>
            </animate>
          </path>
          <defs>
                <linearGradient id="gradiente1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="30%" style={{ stopColor: "#f2a28d", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f2cc9b", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
          </svg>
        </div>

        <div className='absolute w-4/12 h-1/3 drop-shadow-4xl -left-24 top-72 mix-blend-hard-light opacity-80'>
          <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow2)" }}>
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
          <path fill="url(#gradiente2)" transform="translate(125 125)">
            <animate attributeName='d' dur='30000ms' repeatCount='indefinite' values='M30.9,-16.4C43.9,4.5,60.7,24.7,56.2,36.6C51.7,48.5,25.9,52.2,3.1,50.4C-19.7,48.6,-39.4,41.4,-52.1,24.7C-64.8,8,-70.6,-18.1,-60.8,-37.2C-51,-56.4,-25.5,-68.7,-8.2,-63.9C9,-59.2,18,-37.4,30.9,-16.4Z";
            M65.1,-41.1C73,-24,60.1,1.7,45.8,19.5C31.5,37.4,15.7,47.6,-6.3,51.2C-28.4,54.9,-56.8,52.1,-70.8,34.4C-84.8,16.7,-84.3,-15.9,-70.1,-36.6C-55.9,-57.4,-27.9,-66.5,0.3,-66.7C28.6,-66.9,57.3,-58.2,65.1,-41.1Z;
            M44.6,-24C58.8,-1.3,71.8,23.9,64.2,44.6C56.6,65.4,28.3,81.7,7.3,77.5C-13.6,73.3,-27.2,48.4,-35.2,27.5C-43.1,6.6,-45.3,-10.4,-38.4,-28.9C-31.6,-47.3,-15.8,-67.3,-0.3,-67.1C15.2,-67,30.5,-46.7,44.6,-24Z;
            M38.1,-27.1C46.1,-8,47.3,10,39.8,25.1C32.3,40.1,16.2,52.3,-0.3,52.4C-16.7,52.6,-33.3,40.7,-45.4,23C-57.5,5.2,-65.1,-18.4,-56.8,-37.6C-48.5,-56.8,-24.2,-71.7,-4.6,-69C15,-66.3,30,-46.2,38.1,-27.1Z;
            M49.3,-23C63.4,-4,74.1,22.5,65.3,36.7C56.5,50.8,28.3,52.7,6,49.3C-16.2,45.8,-32.4,36.9,-41.8,22.4C-51.2,7.9,-53.8,-12.3,-45.7,-27.9C-37.6,-43.4,-18.8,-54.2,-0.6,-53.9C17.6,-53.5,35.1,-42,49.3,-23Z;
            M30.9,-16.4C43.9,4.5,60.7,24.7,56.2,36.6C51.7,48.5,25.9,52.2,3.1,50.4C-19.7,48.6,-39.4,41.4,-52.1,24.7C-64.8,8,-70.6,-18.1,-60.8,-37.2C-51,-56.4,-25.5,-68.7,-8.2,-63.9C9,-59.2,18,-37.4,30.9,-16.4Z;'>
            </animate>
          </path>
          <defs>
                <linearGradient id="gradiente2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" style={{ stopColor: "#a4d9fc", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#a0f2be", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
          </svg>
        </div>

        <div className="custom-shape-3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>


        <div className='bg-slate-900/10 backdrop-blur-xl w-9/12 h-auto rounded-3xl overflow-hidden absolute shadow-lightBright text-white lg:w-3/5 xl:w-1/2 md:w-3/4 flex flex-col md:flex-row md:h-1/4 lg:h-1/3'>
          
          
          <div className='bg-slate-100/15 backdrop-blur-xl flex justify-evenly items-center flex-row md:flex-col'>
            <img src={ currentUser.profilePicture } alt='Profile Picture' className='mx-4 md:mx-16 rounded-full w-24 h-24 border-slate-500 border-2 z-10 my-4 md:my-0 md:w-36 md:h-36' />
            <div className='flex flex-col text-center gap-6 md:gap-0'>
              <p className='text-xl mx-4 first-letter:uppercase tracking-wide pb-2 md:text-2xl'>
                { currentUser.username }
              </p> 
              <p className='text-slate-200 mx-4  text-sm md:text-lg '>
                { currentUser.email }
              </p>
            </div>
          </div>

          <div className='flex items-center flex-col w-full h-auto md:h-full'>
            <h2 className='text-lg mt-10 sm:text-2xl'>About me</h2>
            <p className='mt-6 text-md bg-slate-100/10 p-4 rounded-xl w-2/3 mb-36'>{ currentUser.aboutMe }</p>
            <div className='flex justify-evenly items-center gap-10 absolute bottom-6 xl:gap-20 lg:bottom-10'>
              <button onClick={() => {setIsOpenPopup(!isOpenPopup); setIsOpenBg(!isOpenBg)}} className='text-sm text-blue-500 border-2 border-blue-600 p-2 opacity-80 rounded-sm font-semibold transition-all duration-200 hover:shadow-edit  hover:scale-110 sm:text-xl'>Edit Profile</button>
              <button onClick={handleSignOut} className='text-sm text-red-400 border-2 border-red-500 p-2 opacity-80 rounded-sm font-semibold transition-all duration-200 hover:shadow-singOut hover:scale-110 sm:text-xl'>Sign Out</button>
            </div>
          </div>
    
        </div>


          <div>
              
            <Form isVisible={isVisible} setIsVisible={setIsVisible} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} isOpenBg={isOpenBg} setIsOpenBg={setIsOpenBg} />
                  
          </div>


      </div>
    </div>
  )
}

export default profile;