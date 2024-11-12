import React from 'react';

const FAQ = () => {
    const topics = [
        { title: "Who are we?", description: "A team of like-minded engineering students who have a passion for innovation and a dream to help others reach their engineering goals" },
        { title: "What is our Mission", description: "Answer to question 1" },
        { title: "When is the conference", description: "Answer to question 1" },
        { title: "Question 1", description: "Answer to question 1" },
        { title: "Question 2", description: "Answer to question 2" },
        { title: "Question 3", description: "Answer to question 3" },
        { title: "Question 4", description: "Answer to question 4" },
        { title: "Question 5", description: "Answer to question 5" },
      ];
      
      
    return (
        <main className='bg-gradient-to-b from-blue-50 to-orange-50 justify-center items-center pt-5 px-10 pb-14'>
            <section className="py-4">
                <h2 className="flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950">Frequently Asked Questions</h2>
                <p className="text-lg mb-4">Answers to some commonly asked Questions.</p>
            </section>
        {/* 
        Section is for topic grid and controls the number of coloumns as well as how they look    
        */}
            <section className="bg-gradient-to-b from-blue-50 to-orange-50 max-w-screen-xl w-full grid gap-6 grid-cols-1 md:grid-cols-2 justify-center">
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