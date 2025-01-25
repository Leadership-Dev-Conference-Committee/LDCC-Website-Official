import LDCBanner from '/src/assets/Bg-Fc.png';
import LDCBannerMob from '/src/assets/Bg-Mc.png';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {

    //Update date when event date is confirmed
    const dateOfEvent = ['February 25th']

    const eventInfo = <p>Join McMaster University's <strong>largest student run engineering conference</strong> featuring co-op pannels, professional speakers, final-year capstone projects, networking opportuinties and Linkedin headshots! Early registeration is now closed! </p>

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

    return (
        <section className="w-[full] h-screen overflow-hidden relative flex justify-center text-center lg:pt-24 md:pt-20 pt-16 px-10 bg-gradient-to-b from-blue-50 to-orange-50">
            <div className='flex flex-col max-w-screen-xl w-full items-center z-10'>
                <h1 className='font-bold md:text-3xl lg:text-5xl text-2xl flex text-red-900'>Leadership Development Conference</h1>
                <h2 className='font-medium md:text-xl lg:text-2xl text-lg md:py-3 lg:py-6 py-2'>{dateOfEvent} • In-person Event • McMaster University</h2>
                <p className='font-medium md:text-md lg:text-lg text-sm '>{eventInfo}</p>
                <a className='font-normal md:text-md lg:text-lg text-sm pt-4 underline' href='mailto:ldcc@macengsociety.ca'>Interested in becoming a sponsor?</a>
                
                <div className='flex text-center items-center justify-center mt-4 md:gap-1'>
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
            </div>
            
            <img src={LDCBanner} alt="LDC Banner" className="w-full h-screen md:flex hidden bg-cover bg-bottom inset-0 z-[1] absolute select-none opacity-90 pt-10" />
            <img src={LDCBannerMob} alt="LDC Banner" className="w-full md:hidden flex h-screen bg-cover bg-bottom inset-0 z-0 absolute select-none opacity-90 pt-32" />

        </section>
    )

}

export default Hero;