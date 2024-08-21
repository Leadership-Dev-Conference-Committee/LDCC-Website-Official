import React from 'react';
import Logo from '/public/LDC.png'
import Headroom from 'react-headroom'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll';


const Navbar = () => {

    const logoImg = Logo

    const navLinks = [
        { 
            title: 'Home', 
            path: '/' 
        },
        { 
            title: 'About', 
            path: '/' 
        },
        { 
            title: 'Speakers', 
            path: '/' 
        },
    ]


    const [open, setOpen] = React.useState(false)

    return (
        <Headroom><nav className="py-5 flex justify-center border-b border-blue-50 backdrop-blur-2xl z-10">
            <section className="flex flex-col justify-between max-w-screen-xl w-full text-md items-center z-10">

                <div className='flex w-full justify-between items-center'>
                    <img src={logoImg} alt="logo" className="w-20 h-9 select-none cursor-pointer" />

                    <ul className='md:flex lg:gap-10 gap-8 hidden font-bold'>
                        {navLinks.map((navLink, index) => (
                            <a key={index} href={navLink.path} className="transition hover:text-blue-700">
                                <li className=''>{navLink.title}</li>
                            </a>
                        ))}
                    </ul>

                    <button className="font-black text-xl transition hover:text-blue-700 flex md:hidden" onClick={() => setOpen((open) => !open)}><FiMenu /></button>
                </div>
                
                <div className={`flex md:hidden w-full pt-6 items-start ${open ? 'flex' : 'hidden'}`}>
                    <ul className="flex-col justify-start flex text-left -mt-2">
                    {
                        navLinks.map((item) => (
                            <li className="text-slate-800 font-medium py-2 hover:text-blue-700" key={item.id} >
                            {/* <a href={item.link}> {item.title}</a> */}
                                <Link to={item.link} activeClass="active" smooth={true} spy={true} duration={1000} offset={-30} onClick={() => setOpen((open) => !open)} className='cursor-pointer select-none'>{item.title}</Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>

            </section>  
        </nav></Headroom>

    )

}

export default Navbar