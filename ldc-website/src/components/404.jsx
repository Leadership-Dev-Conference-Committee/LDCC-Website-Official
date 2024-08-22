import NFImg from '/public/404pg.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='inset-0 flex flex-col items-center bg-gradient-to-b from-blue-50 to-orange-50 justify-center h-screen px-10'>
            <div className='flex flex-col items-center text-center z-10 tracking-widest px-10'>
                <h1 className='font-black font-Edu md:text-9xl text-7xl text-red-900'>404</h1>
                <p className='font-semibold md:text-3xl text-xl'>Page not found :/</p>
                <p className='py-3 w-full max-w-screen-md md:text-xl text-md'>Oops! The page you are looking for does not exist yet. You may have entered an incorrect URL - or the page must have been deleted. </p>
            </div>
            <img src={NFImg} className='w-96 py-5 opacity-90'></img>
            <Link className='bg-purple-950 text-slate-100 font-normal text-md px-3 py-2 rounded-full hover:bg-red-900 transition z-10' to={'/'}>Return Home</Link>
        </div>
    );
}

export default NotFound;