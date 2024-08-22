import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from '/public/LDC.png'

const Footer = () => {

    const Links = [
        {
            name: 'Facebook',
            url: ''
        },
        {
            name: 'Instagram',
            url: ''
        },
        {
            name: 'Linkedin',
            url: ''
        },
        {
            name: 'Email',
            url: ''
        }
    ];

    const navLinks = [
        { 
            title: 'About', 
            path: '/404' 
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
            path: '/404' 
        },
        { 
            title: 'FAQ', 
            path: '/404' 
        },
    ]


    return(
        <footer className="p-10 bg-orange-50 flex flex-col items-center justify-center text-center px-5">
            <Link to={'/Home'}><img src={Logo} alt="logo" className="w-18 h-8 select-none cursor-pointer hover:animate-bounce" /></Link>
                            
            <div className='flex text-center items-center justify-center mt-4 gap-1 px-5'>
                    {Links.map((link, index) => (
                        <a
                            key={index}
                            className="p-2 border rounded-full text-lg md:text-xl cursor-pointer hover:text-blue-700 transition"
                            href={link.url}
                            target="_blank"
                        >
                            {link.name === 'Facebook' && <FaFacebookF />}
                            {link.name === 'Instagram' && <FaInstagram />}
                            {link.name === 'Linkedin' && <FaLinkedin />}
                            {link.name === 'Email' && <MdEmail />}
                        </a>
                    ))}
                </div> 

                <div className='flex md:gap-6 gap-2 py-4 md:text-sm lg:text-md text-xs font-semibold items-center px-5'>
                    {navLinks.map((navLinks, index) => (
                        <Link to={navLinks.path} key={index} className="transition hover:text-blue-700">
                            <button className=''>{navLinks.title}</button>
                        </Link>

                    ))}
                </div>

                <a className='font-normal md:text-sm text-xs underline' href=''>Become a sponsor!</a>

                <p className="text-xs pt-2">Copyright @ {new Date().getFullYear()} Leadrship Development Conference Committee</p>
        </footer>
    )

}

export default Footer;