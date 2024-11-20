import React from 'react';

const FAQ = () => {
  const topics = [
    {
      title: "Who are we?",
      description:
        "A team of like-minded engineering students who have a passion for innovation and a dream to help others reach their engineering goals",
    },
    {
      title: "Who is organizing the event?",
      description:
        "The conference is organized by The LDCC (Leadership Development Conference Committee) under the McMaster Engineering Society (MES), showcasing talent and innovation from the McMaster community.",
    },
    {
      title: "Where and when is the conference",
      description:
        "The event will be held on February 25th at CIBC Hall, at the McMaster University campus in Hamilton, Ontario.",
    },
    {
      title:
        "Is the conference open to students from all disciplines or only engineering?",
      description:
        "While the conference is tailored for engineering students, attendees from all disciplines interested in engineering, personal branding and career growth are welcome to join.",
    },
    {
      title: "What topics will be covered during the conference?",
      description:
        "Topics include personal branding strategies, leveraging LinkedIn, building a professional portfolio, and effective networking techniques.",
    },
    {
      title: "Is registration open?",
      description: "Not yet! But, keep an eye out for more updates.",
    },
    {
      title:
        "Will there be opportunities to network with industry professionals?",
      description:
        "Yes, there will be dedicated networking sessions with industry professionals, students who have experience with coops in the industry, and recruiters from leading companies.",
    },
    {
      title: "Is this the first year LDC is running?",
      description:
        "Nope! This is an annual event hosted by the McMaster Engineering Society and run by the Leadership Development Conference Committee. In fact, this is our fourth year running!",
    },
    {
      title: "Do I have to pay to attend the event?",
      description:
        "Absolutely not. This event is completely free; however, space is limited!",
    },
    {
      title:
        "Will I get a 0.5% bonus for 1p13 or 1p10, as we got that last year?",
      description: "We are currently working to figure that out as well.",
    },
  ];

  return (
    <main className="flex flex-col bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10">
      <section className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-start max-w-screen-xl w-full">
          <h1 className="flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950 ">
            FAQ
          </h1>
        </div>

        <article className="flex flex-col items-between max-w-screen-xl w-full -mt-4">
          <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
            Answers to some of our Frequently Asked Questions.
          </h2>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-5">
            Do you have any questions? Well, we have <strong>Answers!</strong>{" "}
            At least to some of the questions.
          </p>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-2">
            Don't see your question? Feel free to send us a message on our any
            of our social platforms and we will get back to you as soon as
            possible!
          </p>

          <section className="mb-14 mt-10 max-w-screen-xl w-full justify-center grid gap-6 grid-cols-1 md:grid-cols-2 ">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="md:text-lg text-md font-semibold text-red-900">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm md:text-md">{topic.description}</p>
              </div>
            ))}
          </section>
        </article>
      </section>
    </main>
  );
};

export default FAQ;
