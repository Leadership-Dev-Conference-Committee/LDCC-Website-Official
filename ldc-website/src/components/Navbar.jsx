import React from 'react';
import Logo from '/public/oldlogo.png'
import Headroom from 'react-headroom'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const navLinks = [
        { 
            title: 'About', 
            path: '/About' 
        },
        { 
            title: 'Agenda', 
            path: '/404' 
        },
        { 
            title: 'Speakers', 
            path: '/404' 
        },
        { 
            title: 'Sponsors', 
            path: '/404' 
        },
        { 
            title: 'Team', 
            path: '/Team' 
        },
        { 
            title: 'FAQ', 
            path: '/404' 
        },
    ]

    // const toTop = window.scrollTo(0, 0);

    const [open, setOpen] = React.useState(false)

    return (
        <Headroom style={{
            zIndex: '100',
        }}>
            <nav className={`py-5 flex justify-center bg-blue-50 shadow-md px-10 `}>
                <section className="flex flex-col justify-between max-w-screen-2xl w-full text-lg items-center">

                    <div className='flex w-full justify-between items-center'>
                        <Link to={'/'}><img src={Logo} alt="logo" className="w-16 h-14 select-none cursor-pointer" onClick={() => {setOpen(false); window.scrollTo(0, 0); }}/></Link>

                        <ul className='md:flex lg:gap-10 gap-5 hidden font-semibold items-center'>
                            {navLinks.map((navLinks, index) => (
                                <Link to={navLinks.path} key={index} className="transition hover:text-red-900" onClick={() => window.scrollTo(0, 0)}>
                                    <button className=''>{navLinks.title}</button>
                                </Link>

                            ))}
                            <Link className='bg-purple-950 text-slate-100 hover:bg-red-900 transition font-normal text-sm px-2 py-1 rounded-lg' to={'/404'} >Register Now</Link>
                        </ul>

                        <button className="font-black text-xl transition hover:text-red-900 flex md:hidden" onClick={() => setOpen((open) => !open)}><FiMenu /></button>
                    </div>
                    
                    <div className={`flex md:hidden w-full pt-6 items-start font-medium ${open ? 'flex' : 'hidden'}`}>
                        <ul className="flex-col justify-start flex text-left -mt-2 gap-2">
                        {navLinks.map((item) => (
                            <li className="font-medium py-2 hover:text-red-900 transition " key={item} >
                            {/* <a href={item.link}> {item.title}</a> */}
                                <Link to={item.path} onClick={() => { setOpen((open) => !open); window.scrollTo(0, 0); }} className='cursor-pointer select-none' >{item.title}</Link>
                            </li>
                        ))}
                            <a className='bg-purple-950 text-slate-100 font-normal text-sm px-2 py-1 rounded-lg' href='#'>Register Now</a>
                        </ul>
                    </div>

                </section>  
            </nav>
        </Headroom>

    )

}

export default Navbar