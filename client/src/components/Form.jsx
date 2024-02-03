import './Animation.css';
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from '../redux/user/userSlice';
import Delete from './Delete';

const Form = ({ isVisible, setIsVisible, isOpenPopup, setIsOpenPopup, isOpenBg, setIsOpenBg }) => {

    const dispatch = useDispatch();
    const fileRef = useRef(null);
    const [image, setImage] = useState(undefined);
    const [imagePercent, setImagePercent] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser, loading, error } = useSelector(state => state.user);

    const [opacity, setOpacity] = useState(0);
    const [formWidth, setFormWidth] = useState(0);

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
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          dispatch(updateUserStart());
          const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (data.success === false) {
            dispatch(updateUserFailure(data));
            return;
          }
          dispatch(updateUserSuccess(data));
          setUpdateSuccess(true);
        } catch (error) {
          dispatch(updateUserFailure(error));
        }
      };

      useEffect(() => {
        const timeout = setTimeout(() => {
          setUpdateSuccess(false);
          dispatch(updateUserFailure(null));
        }, 2000); // 1000 milliseconds = 1 second
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, [updateSuccess, error]);

    // ANIMATION
  
    const transitionEdit = isOpenPopup ? 'slide-in-left' : 'slide-in-right';
    const transitionBg = isOpenBg ? 'push' : 'pull';
    
    useEffect(() => {
        const formEdit = document.querySelector('.form-edit');
        const updateFormWidth = () => {
            setFormWidth(formEdit.offsetWidth);
        };
        updateFormWidth();
        window.addEventListener('resize', updateFormWidth);
        return () => {
          window.removeEventListener('resize', updateFormWidth);
        };
    }, []);
    
    useEffect(() => {
        const formEdit = document.querySelector('.form-edit');
        const bgTransition = document.querySelector('.bg-transition');
        formEdit.classList.add(transitionEdit);
        bgTransition.classList.add(transitionBg);
        
        return () => {
          formEdit.classList.remove(transitionEdit);
          bgTransition.classList.remove(transitionBg);
        };
    }, [transitionEdit, transitionBg]);

  return (
    <div id='background' onClick={() => {setIsOpenPopup(!isOpenPopup); setIsVisible(isVisible = false); setIsOpenBg(!isOpenBg)}} className='bg-transition fixed backdrop-blur-md top-0 bottom-0 left-0 right-0 flex justify-end items-center bg-zinc-950/70 z-30'>

        <div className='relative w-1/3 h-2/3'>
            <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation() } className={`form-edit absolute right-0 bg-zinc-900 w-4/5 h-full z-40 rounded-l-xl`}>
                      
                      <div onClick={() => {setIsOpenPopup(!isOpenPopup); setIsVisible(isVisible = false); setIsOpenBg(!isOpenBg)}} className='bg-zinc-700 box-content aspect-square w-9 rounded-tl-xl rounded-br-xl cursor-pointer z-50 hover:scale-105 transition-all duration-150 hover:bg-zinc-600 hover:translate-x-px hover:translate-y-px'>
                          <svg viewBox="0 0 24 24" width='100%' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><bg fill='red' /><path d="M18 6L6 18M6 6L18 18" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>

                      <h3 className='absolute text-slate-200 text-4xl top-10 left-1/2 -translate-x-1/2'>Edit Profile</h3>

                      <div className='absolute h-full w-full flex justify-center items-center flex-col gap-6'>
                        <input type='file' ref={fileRef} hidden accept='image/*' onChange={(e) => setImage(e.target.files[0])}/>
                        {/*
                          firebase storage rules: 
                          allow read;
                          allow write: if
                          request.resource.size < 2 * 1024 * 1024 &&
                          request.resource.contentType.matches('image/.*')
                        */}
                            <img src={formData.profilePicture || currentUser.profilePicture} alt='profile' onClick={() => fileRef.current.click()} className='top-28 rounded-full w-36 h-36 z-10 cursor-pointer hover:scale-110 transition-all duration-150' />
                            <p>
                              { imageError ? (
                                <span className='text-red-500'>Error uploading image</span>) : imagePercent > 0 && imagePercent < 100 ? (
                                  <span className='text-slate-400'>{`Uploading: ${imagePercent}%`}</span>) : imagePercent === 100 ? (
                                    <span className='text-green-500'>Image uploaded successfully</span>) : ( '' )}
                            </p>
                        <input onChange={handleChange} required  maxLength={20} type="text" id='username' placeholder='Username' defaultValue={ currentUser.username } className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                        <input onChange={handleChange} required type="text" id='email' placeholder='Email' defaultValue={ currentUser.email } className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                        <input onChange={handleChange} maxLength={200} type="text" id='aboutMe' placeholder='About Me' defaultValue={ currentUser.aboutMe } className='w-2/3 h-12 bg-slate-950 rounded-xl p-4 text-slate-200 border-thin border-slate-500'/>
                        <button className='w-2/3 h-12 bg-slate-950 rounded-xl text-slate-200 scale-95 hover:bg-slate-900 hover:scale-100 hover:shadow-lightBright transition-all duration-150'>{ loading ? 'Loading...' : 'Save changes' }</button>
                        <p className='absolute bottom-0 translate-y-8 text-red-500 mt-5'>{error && 'Something went wrong'}</p>
                        <p className='absolute bottom-0 translate-y-8 text-green-500 mt-5'>{updateSuccess && 'User is updated successfully'}</p>
                      </div>

                      <div className='absolute top-0 right-0 -translate-y-full justify-self-end w-full flex px-12 justify-center items-center gap-8'>

                              <div onClick={(e) => e.stopPropagation() } className='w-1/2'>
                                <button type='button' onClick={() => {setIsVisible(!isVisible)}} className={`cursor-pointer h-12 w-full flex justify-center items-center bg-zinc-900 text-slate-200 rounded-t-xl hover:scale-110 transition-all shadow-bottom hover:shadow-none ${ setIsOpenPopup ? 'animate-slideIn' : 'animate-slideOut' }`}>Delete account</button>
                              </div>

                              <div onClick={(e) => e.stopPropagation() } className='w-1/2'>
                                <button type='button' onClick={() => {setIsVisible(!isVisible)}} className={`cursor-pointer h-12 w-full flex justify-center items-center bg-zinc-900 text-slate-200 rounded-t-xl hover:scale-110 transition-all shadow-bottom hover:shadow-none ${ setIsOpenPopup ? 'animate-slideIn' : 'animate-slideOut' }`}>Change password</button>
                              </div>
                              
                      </div>
                        
                  
                  </form>

                  <Delete currentUser={currentUser} setOpacity={setOpacity} opacity={opacity} formWidth={formWidth} setIsVisible={setIsVisible} isVisible={isVisible} dispatch={dispatch} deleteUserStart={deleteUserStart} deleteUserSuccess={deleteUserSuccess} deleteUserFailure={deleteUserFailure} />
        </div>

    </div>
  )
}
 

export default Form;