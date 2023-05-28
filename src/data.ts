interface Data {
  tabs: {
    tabName: string;
    tabLink: string;
  }[];
  about: {
    heading: string;
    body: string[];
  }[];
  pricing: {
    label: string;
    cost: number;
  }[];
  testimonials: {
    name: string;
    subheading?: string;
    body: string;
  }[];
}

const Data: Data = {
  tabs: [
    {
      tabName: "About Me",
      tabLink: "about",
    },
    {
      tabName: "Pricing",
      tabLink: "pricing",
    },
    {
      tabName: "Testimonials",
      tabLink: "testimonials",
    },
    {
      tabName: "Study Guides",
      tabLink: "guides",
    },
    {
      tabName: "Tutors",
      tabLink: "tutors",
    },
    {
      tabName: "Subjects Offered",
      tabLink: "subjects",
    },
  ],
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
        "Subjects I tutor include but are not limited to SAT Math, AP Physics C: Mechanics and Electricity and Magnetism, Introduction to circuits, K-12 Mathematics, AP Calculus AB and BC (Calculus 1 and 2), Calculus 3, Linear Algebra, and Differential Equations. I am prepared to tutor both online using zoom and my tablet and in person. I am currently studying at Lehigh in the Bethlehem area so if you are interested in tutoring whether that would be in-person or online, feel free to reach out (contact info below).",
      ],
    },
  ],
  pricing: [
    {
      label: "Individual",
      cost: 75,
    },
    {
      label: "Group (2 Students)",
      cost: 55,
    },
    {
      label: "Group (3 Students)",
      cost: 45,
    },
    {
      label: "Group (4 Students)",
      cost: 40,
    },
  ],
  testimonials: [
    {
      name: "Artur P.",
      subheading: "Electrical Engineering",
      body: "Sameer tutored me in the fall of 2021 for ECE 81 or Lehigh’s Circuits 1 class. At the time I struggled to understand concepts such as phasor and Laplace transformations. Sameer’s tutoring style was very dynamic, and he was able to cater how he taught me those concepts in a way that I understood. After many sessions, I was able to do both transformations with much more ease. Similarly, Sameer provided great insights and tricks for the general analysis of circuits. At the beginning of our tutoring sessions, he noticed that I always preferred to do nodal analysis instead of mesh current analysis which was essential to the foundations of the circuits class. He worked tirelessly with me for 2 weeks to solidify my ability to analyze circuits using the mesh current method. Sameer was an invaluable asset and allowed me to pass the course with a good grade.",
    },
    {
      name: "Tyler N.",
      subheading: "Linear Methods",
      body: "Having Sameer as a tutor for MATH 205 was a extremely helpful experience. He was able to provide excellent explanations and explained step by step solutions to problems that I didn't quite understand. He allowed me to learn on my own and gave tips to solving problems without directly giving me the solution so that I could fundamentally understand the problem at hand. At the end of the semester, I had asked him to help me review for the final and he was able to go over every topic that the exam may cover. Received a great grade and would come to him again.",
    },
    {
      name: "Charlotte",
      subheading: "Calculus 1, Chemistry",
      body: "Sameer and Eric are both fantastic tutors who went above and beyond to help me learn. They molded to my learning style, and were completely prepared for every session. Sameer runs a very professional business, and I would recommend them to anyone!",
    },
    {
      name: "Marielle",
      subheading: "Calculus 3",
      body: "This tutoring service was extremely helpful. Sameer tutored me for calc 3 and he would first go over the material covered in class and equations then relevant examples. He was also willing to send solutions for practice tests even after the session was over. Overall Merchant Math Tutoring was very helpful and I will continue to use them in the coming years.",
    },
    {
      name: "Ben Ross",
      subheading: "Business Calculus",
      body: "Extremely easy to work with and very accommodating. 10/10",
    },
    {
      name: "Emily",
      subheading: "Linear Methods",
      body: "Sameer was very helpful and knowledgeable in the topic. It was very helpful in working through examples that I may have struggled with on my own, and forcing my to take time to study for my exam.",
    },
    {
      name: "Jack P.",
      subheading: "Chemistry",
      body: "Eric obviously has a strong background in chemistry. He did a great job explaining into thorough detail any questions that I had or topics I was confused with. All topics were broken down into simpler terms so it was easier to understand. Also, my tutor did a great job at noticing if I did not understand a concept. He would not fault me for it and we just went over more example problems until I got the gist of it.",
    },
    {
      name: "Josh",
      subheading: "Calculus 2",
      body: "Knew the course material very well and all of the best tips, could not recommend more. The tutoring improved my test taking ability and grade drastically.",
    },
  ],
};

export default Data;
