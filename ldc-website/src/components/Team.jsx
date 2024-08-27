import oldLogo from '/public/oldlogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// Team component
import Dhruv from '/public/TeamPFP/Dhruv.jpg';

const Team = () => {

    // To add members, update team list with the following method; if there is nothing to add, leave it empty:
    // {
    //     name: 'First Last',
    //     position: 'Position',
    //     img: Imported image,
    //     social: {
    //         github: 'Link',
    //         linkedin: 'Link',
    //         instagram: 'Link',
    //         email: 'Link'
    //     },
    //     optionalParagraph: 'Optional paragraph
    // },

    const coordinatorTeamList = [
        {
            name: 'Dhruv Chokshi',
            position: 'LDCC Co-Chair & Website Developer Lead',
            img: Dhruv,
            social: {
                github: 'https://github.com/chokshidhruv',
                linkedin: 'https://www.linkedin.com/in/chokshidhruv/',
                email: 'mailto:chokshid@mcmaster.ca'
            },
            optionalParagraph: 'Second year Software Engineering student at McMaster University.'
        },
        {
            name: 'Deea Saha',
            position: 'LDCC Co-Chair & Social Media/Content Creator Lead',
            img: oldLogo,
            social: {
                github: '',
                linkedin: '',
                instagram: '',
                email: ''
            },
            optionalParagraph: 'Second year Student at McMaster University'
        },

    ] 

    return (
        <main className="bg-gradient-to-b from-blue-50 to-orange-50 flex flex-col items-center px-10 pt-5 pb-14">
            <section className="flex flex-col justify-between max-w-screen-xl w-full gap-14">
                <h1 className='flex justify-start font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950'>Team</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-6">

                    {
                        coordinatorTeamList.map((team, index) => (
                            <div className="flex flex-col justify-center bg-purple-950 rounded-2xl py-2 px-2 pt-28 " key={index}>
                                <div className="flex flex-col items-center text-center rounded-2xl bg-purple-50 h-full px-2">
                                    <img src={team.img} className="w-36 h-36 rounded-full -mt-20 select-none object-cover bg-purple-50" />
                                    <h2 className="font-black text-red-900 text-lg py-2">{team.name}</h2>
                                    <p className="text-md font-semibold">{team.position}</p>
                                    <div className="flex items-center py-2">
                                        {team.social.github && <a href={team.social.github} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaGithub /></a>}
                                        {team.social.linkedin && <a href={team.social.linkedin} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaLinkedin /></a>}
                                        {team.social.instagram && <a href={team.social.instagram} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaInstagram /></a>}
                                        {team.social.email && <a href={team.social.email} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><MdEmail /></a>}
                                    </div>
                                    <p className="text-sm italic font-normal pb-6">{team.optionalParagraph}</p>
                                </div>    
                            </div>
                        ))
                    }

                </div>
            </section>
        </main>
    )

}

export default Team;