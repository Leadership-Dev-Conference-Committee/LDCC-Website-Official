import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from '/public/oldlogo.png'

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
            path: '/404' 
        },
        { 
            title: 'FAQ', 
            path: '/404' 
        },
    ]


    return(
        <footer className="p-10 bg-orange-50 flex flex-col items-center justify-center text-center px-5">
            <Link to={'/'}><img src={Logo} alt="logo" className="w-16 h-18 select-none cursor-pointer" onClick={() => window.scrollTo(0, 0)}/></Link>
                            
            <div className='flex text-center items-center justify-center mt-4 gap-1 md:gap-2 px-5'>
                    {Links.map((link, index) => (
                        <a
                            key={index}
                            className="p-2 rounded-full text-lg md:text-xl cursor-pointer text-blue-50 bg-purple-950 hover:text-purple-950 hover:bg-orange-50 transition"
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

                <div className='flex md:gap-6 gap-2 py-4 md:text-sm lg:text-md text-xs font-semibold items-center'>
                    {navLinks.map((navLinks, index) => (
                        <Link to={navLinks.path} key={index} className="transition hover:text-red-900" onClick={() => window.scrollTo(0, 0)}>
                            <button className=''>{navLinks.title}</button>
                        </Link>

                    ))}
                </div>

                <a className='font-normal md:text-sm text-xs underline' href=''>Become a sponsor!</a>

                <p className="text-xs pt-2">Copyright @ {new Date().getFullYear()} Leadership Development Conference Committee</p>
        </footer>
    )

}

export default Footer;