import { Link } from 'react-router-dom';
document.body.style.overflow = "hidden";

export default function signUp() {
  return (
    <div className="bg-gray-900 z-0 absolute bg-cover bg-center bg-no-repeat top-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute aspect-square w-3/12 left-72 top-0 animate-pulse"></div>
      <div className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute aspect-square w-3/12 right-96 bottom-0  animate-pulse"></div>
      <div className='p-6 max-w-xl w-1/2 h-4/6 bg-white bg-opacity-10 relative z-20 shadow-5xl rounded-2xl backdrop-blur-sm'>
        <h1 className="text-4xl text-center font-semibold my-7 pb-3 text-slate-100">Sign Up</h1>
        <form className='flex flex-col gap-4'>
          <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' />
          <input type="text" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
          <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
          <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span class="w-full h-full absolute"></span>
            <span class="relative px-6 py-3 text-center w-screen transition-all ease-out bg-gray-900 rounded-md duration-400 hover:scale-110 hover:ease-linear hover:duration-75 hover:bg-indigo-950">
            <span class="relative text-xl text-slate-100">Submit</span>
          </span>
          </a>
        </form>
        <div className='flex gap-2 mt-5'>
          <p className='text-slate-100'>Have an account</p>
          <Link to='/sign-in'>;
            <span className='text-blue-500 font-semibold'>Sign-In</span>
          </Link>
        </div>
      </div>
    </div>

  )
}
