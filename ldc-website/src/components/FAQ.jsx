import React from 'react';

const FAQ = () => {
    const topics = [
        { title: "Who are we?", description: "A team of like-minded engineering students who have a passion for innovation and a dream to help others reach their engineering goals" },
        { title: "Who is organizing the event?", description: "The conference is organized by The LDCC under the McMaster Students Union (MSU), showcasing talent and innovation from the McMaster community." },
        { title: "Where and ehen is the conference", description: "The event will be held on Febuary 4th at CIBC Hall, on the McMaster University campus in Hamilton, Ontario." },
        { title: "Is the conference open to students from all disciplines or only engineering?", description: "While the conference is tailored for engineering students, attendees from all disciplines interested in personal branding and career growth are welcome to join." },
        { title: "What topics will be covered during the conference?", description: "Topics include personal branding strategies, leveraging LinkedIn, building a professional portfolio, and effective networking techniques." },
        { title: "Will there be opportunities to network with industry professionals?", description: "Yes, there will be dedicated networking sessions with industry professionals, senior students who have gotten great internships, and recruiters from leading companies." }
      ];
      
      
    return (
        <main className='bg-gradient-to-b from-blue-50 to-orange-50 justify-center items-center pt-5 px-10 pb-14'>
            <section className="gap-24">
                <h2 className="justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950 mb-3">Frequently Asked Questions (FAQ)</h2>
                <p className=" text-lg mb-8">Answers to some commonly asked Questions.</p>
            </section>
        {/* 
        Section is for topic grid and controls the number of coloumns as well as how they look    
        */}
            <section className="bg-gradient-to-b from-blue-50 to-orange-50 max-w-screen-xl w-full justify-center grid gap-6 grid-cols-1 md:grid-cols-2 flex">
                {topics.map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">{topic.title}</h3>
                <p className="text-gray-600 mt-2">{topic.description}</p>
                </div>
            ))}
            </section>
        </main>


    ) 
}

export default FAQ;