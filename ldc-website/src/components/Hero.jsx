import LDCBanner from '/public/Bg-Fc.png';
import LDCBannerMob from '/public/Bg-Mc.png';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {

    //Update date when event date is confirmed
    const dateOfEvent = ['Date: TBD']

    const eventInfo = <p>Join McMaster University's <strong>largest student run engineering conference</strong> featuring co-op pannels, professional speakers, Mac alumni, and Linkedin headshots! Registeration opens soon! </p>

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

    return (
        <section className="w-[full] h-screen overflow-hidden relative flex justify-center text-center lg:pt-24 md:pt-20 pt-16 px-10 bg-gradient-to-b from-blue-50 to-orange-50">
            <div className='flex flex-col max-w-screen-xl w-full items-center z-10'>
                <h1 className='font-bold md:text-3xl lg:text-5xl text-2xl flex text-red-900'>Leadership Development Conference</h1>
                <h2 className='font-medium md:text-xl lg:text-2xl text-lg md:py-3 lg:py-6 py-2'>{dateOfEvent} • In-person Event • McMaster University</h2>
                <p className='font-medium md:text-md lg:text-lg text-sm '>{eventInfo}</p>
                <a className='font-normal md:text-md lg:text-lg text-sm pt-4 underline' href=''>Interested in becoming a sponsor?</a>
                
                <div className='flex text-center items-center justify-center mt-4 md:gap-1'>
                    {Links.map((link, index) => (
                        <a
                            key={index}
                            className="p-2 text-xl border rounded-full md:text-2xl cursor-pointer hover:text-blue-700 transition"
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
            </div>
            
            <img src={LDCBanner} alt="LDC Banner" className="w-full h-screen lg:flex hidden bg-cover bg-bottom inset-0 z-[1] absolute select-none opacity-90" />
            <img src={LDCBannerMob} alt="LDC Banner" className="w-full lg:hidden flex h-screen bg-cover bg-bottom inset-0 z-0 absolute select-none opacity-90" />

        </section>
    )

}

export default Hero;