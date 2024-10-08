import oldLogo from '/src/assets/oldlogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

// Team component
import Dhruv from '/src/assets/TeamPFP/DhruvPFP.jpg';
import Jackie from '/src/assets/TeamPFP/JackiePFP.png';
import Deea from '/src/assets/TeamPFP/DeeaPFP.png';

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
    //         website: 'Link'
    //     },
    //     optionalParagraph: 'Optional paragraph
    // },

    const coordinatorTeamList = [
        {
            name: 'Jackie Fisher (she/her)',
            position: 'LDCC Chair/MES VP External',
            img: Jackie,
            social: {
                instagram: 'https://www.instagram.com/jackle_fisher/',
                linkedin: 'https://www.linkedin.com/in/jacqueline-fisher252/',
                email: 'mailto:vp.external@macengsociety.ca'
            },
            optionalParagraph: '3rd year Materials Science and Engineering & Society program'
        },
        {
            name: 'Dhruv Chokshi',
            position: 'LDCC Co-Chair & Website Developer Lead',
            img: Dhruv,
            social: {
                github: 'https://github.com/chokshidhruv',
                linkedin: 'https://www.linkedin.com/in/chokshidhruv/',
                email: 'mailto:chokshid@mcmaster.ca',
                website: 'https://www.dhruvchokshi.co'
            },
            optionalParagraph: 'Second year Software Engineering student at McMaster University.'
        },
        {
            name: 'Deea Saha',
            position: 'LDCC Co-Chair',
            img: Deea,
            social: {
                linkedin: 'https://www.linkedin.com/in/deea-saha-036299245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                instagram: 'https://www.instagram.com/d.eeeeea',
                email: 'mailto:sahadeea24@gmail.com'
            },
            optionalParagraph: 'Second year Civil Engineering Student at McMaster University'
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
                                        {team.social.website && <a href={team.social.website} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><FaGlobe /></a>}
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