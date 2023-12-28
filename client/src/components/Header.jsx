import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-indigo-950 text-white mb-12 w-screen absolute z-10'>
        <div className="flex justify-between items-center mas-w-6xl mx-auto p-8">
            <Link to='/'>
                <h1 className='font-bold text-5xl'>Auth App</h1>
            </Link>
            <ul className='flex gap-9 text-2xl '>
                <Link to='/'>
                    <li className='after:block after:content-[""] after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='after:block after:content-[""] after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='after:block after:content-[""] after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>Sign In</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
