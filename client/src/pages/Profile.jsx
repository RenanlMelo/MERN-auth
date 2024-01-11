import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';

export default function profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState();
  const { currentUser } = useSelector(state => state.user);
  const [ isOpenPopup, setIsOpenPopup ] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  
  const handleFileUpload = async (image) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
    },
    (error) => {
      setImageError(true)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
        setFormData({ ...formData, profilePicture: downloadURL }))
    }
    );
  }; 


  return (
    <div>
      <div className='absolute z-30 p-8 h-36 flex justify-center items-center left-44 mb-12'>
        <h1 className='text-4xl border-l-2 pl-5 text-white italic'>Profile</h1>
      </div>

      <div className='absolute top-10 bg-slate-950 flex justify-center items-center w-full h-full'>
        <div className='absolute w-5/12 h-2/3 drop-shadow-4xl -right-32 top-0 mix-blend-hard-light opacity-80'>
          <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" style={{ filter: "url(#drop-shadow2)" }}>
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
          <path fill="url(#gradiente1)" transform="translate(90 90)">
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

        <div className='absolute w-4/12 h-2/3 drop-shadow-4xl -left-24 top-72 mix-blend-hard-light opacity-80'>
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

        <div className='bg-slate-900/10 backdrop-blur-xl w-1/2 h-1/3 rounded-3xl overflow-hidden absolute shadow-lightBright text-white '>
          
          
          <div className=' bg-slate-100/15 backdrop-blur-xl w-1/3 h-full absolute top-0 flex justify-center items-center flex-col'>
            <img src={currentUser.profilePicture} alt='Profile Picture' className='absolute top-6 rounded-full w-36 h-36 border-slate-500 border-2 z-10' />
            {/*<p>
              { imageError ? (
                <span className='text-red-700'>Error uploading image</span>) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className='text-slate-700'>{`'Uploading: ' ${imagePercent} '%`}</span>) : imagePercent === 100 ? (
                    <span className='text-green-700'>Image uploaded successfully</span>) : ( '' )}
                  </p>*/}
            <p className='absolute top-3/4 -translate-y-full left-1/2 -translate-x-1/2 text-2xl first-letter:uppercase tracking-wide pb-2'>
              { currentUser.username }
            </p> 
            <p className='absolute text-slate-200 text-md left-1/2 -translate-x-1/2 bottom-10'>
              { currentUser.email }
            </p>
          </div>

          <div className='absolute w-2/3 h-full right-0 flex justify-center items-center flex-col'>
            <h2 className='absolute text-2xl top-6'>About me</h2>
            <p className='absolute top-20 text-md bg-slate-100/10 p-4 rounded-xl w-10/12'></p>
            <div className='absolute bottom-0 w-full h-2/6 flex justify-evenly items-center'>
            <button onClick={setIsOpenPopup.bind(this, true)} className='text-xl text-blue-500 border-2 border-blue-600 p-2 opacity-80 rounded-sm font-semibold transition-all duration-200 hover:shadow-edit  hover:scale-110'>Edit Profile</button>
            <button className='text-xl text-red-400 border-2 border-red-500 p-2 opacity-80 rounded-sm font-semibold transition-all duration-200 hover:shadow-singOut hover:scale-110'>Sign Out</button>
            </div>
          </div>

        </div>

        {isOpenPopup && 
          <div>
              <div id='background' onClick={setIsOpenPopup.bind(this, false)} className='fixed backdrop-blur-md top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-zinc-950/30 z-30'>
          
                  <form id='form' onClick={(e) => e.stopPropagation() } className={`bg-zinc-800 w-1/4 h-2/3 z-40 rounded-l-xl absolute right-0 overflow-hidden ${ setIsOpenPopup ? 'animate-slideIn' : 'animate-slideOut' }`}>
                  
                      <div onClick={setIsOpenPopup.bind(this, false)} className='bg-zinc-700 box-content aspect-square w-12 rounded-br-xl cursor-pointer z-50 hover:scale-105 transition-all duration-150 hover:bg-zinc-600 hover:translate-x-px hover:translate-y-px'>
                          <svg viewBox="0 0 24 24" width='100%' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><bg fill='red' /><path d="M18 6L6 18M6 6L18 18" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>

                      <h3 className='absolute text-slate-200 text-4xl top-12 left-1/2 -translate-x-1/2'>Edit Profile</h3>

                      <div className='absolute h-4/5 w-full flex justify-evenly items-center flex-col top-24'>
                      <input type='file' ref={fileRef} hidden accept='image/*' onChange={(e) => setImage(e.target.files[0])}/>
                      {/*
                        firebase storage rules: 
                        allow read;
                        allow write: if
                        request.resource.size < 2 * 1024 * 1024 &&
                        request.resource.contentType.matches('image/.*')
                       */}
                          <img src={currentUser.profilePicture} alt='profile' onClick={() => fileRef.current.click()} className='top-28 rounded-full w-36 h-36 z-10 cursor-pointer hover:scale-110 transition-all duration-150' />
                      <input type="text" id='username' placeholder='Username'  defaultValue={ currentUser.username } className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                      <input type="text" id='email' placeholder='Email' defaultValue={ currentUser.email } className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                      <input type="text" placeholder='About Me' defaultValue={''} className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                      </div>
                  
                  </form>

              </div>
          </div>
        }

      </div>
    </div>
  )
}
