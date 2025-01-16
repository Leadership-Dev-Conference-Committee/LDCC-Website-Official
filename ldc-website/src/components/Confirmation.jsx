import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {

    const Links = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ldc_maceng/'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/mcmaster-engineering-leadership-development-conference-9169aa29b/?originalSubdomain=ca'
        },
        {
            name: 'Email',
            url: 'mailto:ldcc@macengsociety.ca'
        }
    ];

    return(
        <main className='inset-0 flex flex-col gap-6 items-center bg-gradient-to-b from-blue-50 to-orange-50 justify-center h-screen px-10'>
            <div className='flex flex-col gap-8 items-center text-center tracking-widest px-10'>
                <h1 className='font-black font-Edu md:text-7xl text-5xl text-red-900'>You have successfully registered</h1>
                <p className='w-full max-w-screen-md md:text-xl text-md font-normal'>This is your confimation that you have been added to the priority list. While you wait for the official registration, check out our socials!</p>
            </div>
            <div className='flex text-center items-center justify-center md:gap-1'>
                    {Links.map((link, index) => (
                        <a
                            key={index}
                            className="p-2 text-xl rounded-full md:text-2xl cursor-pointer text-purple-950 hover:bg-purple-100 transition"
                            href={link.url}
                            target="_blank"
                        >
                            {link.name === 'Facebook' && <FaFacebook />}
                            {link.name === 'Instagram' && <FaInstagram />}
                            {link.name === 'Linkedin' && <FaLinkedin />}
                            {link.name === 'Email' && <MdEmail />}
                        </a>
                    ))}
                </div>    
                <Link className='bg-purple-950 text-slate-100 font-normal text-md px-3 py-2 rounded-xl hover:bg-red-900 transition z-10' to={'/'}>Return Home</Link>
        </main>
    )

}

export default Footer;