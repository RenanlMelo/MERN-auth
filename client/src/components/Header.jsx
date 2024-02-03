import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/user/userUtils';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const userData = getUserData();
    console.log(userData);

  return (
    <div className='bg-zinc-900 text-white mb-12 w-full absolute z-10 shadow-under'>
        <div className="flex justify-between items-center mas-w-6xl mx-auto p-8">
            <Link to='/'>
                <h1 className='font-bold text-4xl italic'>Auth App</h1>
            </Link>
            <ul className='flex gap-9 text-2xl justify-center items-center'>
                <Link to='/'>
                    <li className='after:block after:content-[""] after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='after:block after:content-[""] after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center'>About</li>
                </Link>
                <Link to='/profile'>
                    { currentUser ? (
                        <img src={currentUser.profilePicture} alt="profile" className='w-20 h-20 rounded-full object-cover transition-all hover:scale-110 hover:drop-shadow-light'/>
                    ) : (
                        <li className=' after:block after:content-[""] after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center'>Sign In</li>
                    )}
                </Link>
            </ul>
        </div>
    </div>
  );
}
