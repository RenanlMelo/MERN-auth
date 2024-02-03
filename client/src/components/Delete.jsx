import React, { useEffect } from 'react';
import './Animation.css';

const Delete = ({ currentUser, formWidth, setIsVisible, isVisible, opacity, setOpacity, dispatch, deleteUserStart, deleteUserSuccess, deleteUserFailure }) => {

  const transitionClass = isVisible ? 'slide2-in-left' : 'slide2-in-right';
  const transitionClass2 = isVisible ? 'slide-close' : '';

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if(data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  useEffect(() => {

    if (isVisible) {
      setTimeout(() => {
        setOpacity(1);
      }, 0); // Change the opacity after 0.35 seconds
    }
    else {
      setTimeout(() => {
        setOpacity(0);
      }, 1000);
    }

  }, [isVisible, setOpacity]);

  useEffect(() => {
    const element = document.querySelector('.delete-container');
    element.classList.add(transitionClass);

    return () => {
      if(isVisible === true){
        element.classList.remove(transitionClass);
        element.classList.add(transitionClass2);
      } else{
          if(element.classList.contains('slide-close')){
            element.classList.remove('slide-close');
          }
          element.classList.remove(transitionClass);
      }
    };
  }, [isVisible, transitionClass, transitionClass2]);

  return (
    <div onClick={(e) => e.stopPropagation() }>
        <div style={{ right: `${formWidth}px`, opacity: `${opacity}` }} className={`delete-container absolute top-1/2 z-0 rounded-l-xl bg-zinc-900 flex justify-evenly item flex-col gap-4 w-3/5 h-96 p-8 text-xl shadow-bottom`}>
            <p className='text-slate-200'>Are you certain you wish to delete this account?</p>
            <span onClick={handleDeleteAccount} className='bg-slate-950 rounded-xl text-center text-slate-200 scale-90 hover:bg-slate-900 hover:scale-100 hover:shadow-lightBright transition-all duration-150 p-4 w-full'>Yes</span>
            <span onClick={() => {setIsVisible(!isVisible)}} className='bg-slate-950 rounded-xl text-center text-slate-200 scale-90 hover:bg-slate-900 hover:scale-100 hover:shadow-lightBright transition-all duration-150 p-4 w-full'>No</span>
        </div>
    </div>
  );
};
  
export default Delete;


