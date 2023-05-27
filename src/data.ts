interface Data {
  tabs: {
    [key: string]: string;
  };
  about: {
    heading: string;
    body: string[];
  }[];
}

const Data: Data = {
  tabs: {
    about: "About Me",
    pricing: "Pricing",
    testimonials: "Testimonials",
    guides: "Study Guides",
    tutors: "Tutors",
    subjects: "Subjects Offered",
  },
  about: [
    {
      heading: "Who am I?",
      body: [
        `My name is Sameer Merchant and I'm a math tutor in the Bucks County Area. I’d describe myself as a lifelong learner who has seen different learning methods and found what works for me. I was not always this way, and in fact, it was not until my junior year at Lehigh that I started to love learning. I have been both one of the worst students, and one of the best students in my college classes so I understand how it feels to get a bad grade in a class. That being said, I am in a place in my academic career where my trajectory has generally been upwards as I am a current master’s student at Lehigh University studying electrical engineering where I am working as a research assistant. I was also the president of the Institute of Electrical and Electronics Engineers (IEEE), I was involved in IEEE’s honor society, Eta Kappa Nu (HKN), and I was the secretary of Tea Club while pursuing my undergraduate degree in Computer Engineering. My hobbies include beatboxing, playing violin, and working out, which are all a part of my love for learning.`,
      ],
    },
    {
      heading: "My Story",
      body: [
        "In 10th grade, I started tutoring students in math through my high school’s math club and at Kumon as a grader. One day, a student came to my tutoring session, and I was going over graphing sine and cosine. I realized he was unaware of the importance of the unit circle in regards to graphing these two functions. As he learned about the relationship between the unit circle and graphing sine and cosine, his understanding of subsequent topics grew stronger. His confidence was elevated by learning fundamental concepts and he applied this to other problems.",
        "As I stepped into Lehigh, my motives remained the same: I love to help students learn how to navigate through the math world and make the challenge of problem solving a fun experience. I started helping some of my friends in my free time in the library or common areas. I noticed a similar problem that I saw before where if the students did not have strong fundamentals in math, they faced problems with their introductory math classes. Many students who didn't take any calculus in high school found themselves struggling in “weed out” introductory math classes. My experience with helping my friends led me to apply for a tutoring position, and in my junior year, I was hired as a tutor in linear methods amidst the pandemic. The pandemic seemed to be a drawback for a lot of us. Life became a huge challenge to navigate problem solving all across the student life, so I set up my tablet for online tutoring.",
        "Tutoring online was a challenge, but I quickly became acclimated to the technology used. During this time, I also became a teaching assistant (TA) for many different classes where I’ve had to hold office hours. During these office hours, I would help students with their individual issues, which helped me develop my skills as a tutor.",
      ],
    },
    {
      heading: "Why Choose Me?",
      body: [
        "As I’ve mentioned before, I have worked as a tutor and a TA for many classes including Computer Architecture, Systems Software, Linear Methods (a class on differential equations and linear algebra), and Principles of Electrical Engineering. From these experiences, I have learned about the best strategies for teaching students the material. Moreover, I am a firm believer of the idea that the purpose of a tutor is to get the student to the point where they can learn the material independently. In other words, I teach the student problem solving skills that students do not learn in school.",
      ],
    },
    {
      heading: "What Do I Tutor?",
      body: [
        "Subjects I tutor include but are not limited to SAT Math, AP Physics C: Mechanics and Electricity and Magnetism, Introduction to circuits, K-12 Mathematics, AP Calculus AB and BC (Calculus 1 and 2), Calculus 3, Linear Algebra, and Differential Equations. I am prepared to tutor both online using zoom and my tablet and in person. I am currently studying at Lehigh in the Bethlehem area so if you are interested in tutoring whether that would be in-person or online, my email is at the bottom of the page.",
      ],
    },
  ],
};

export default Data;
