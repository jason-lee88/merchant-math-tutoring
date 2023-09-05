import EricLai from "./assets/tutors/eric-lai.jpg";
import MadelineBraun from "./assets/tutors/madeline-braun.png";
import SophiaMartino from "./assets/tutors/sophia-martino.jpg";
import NolanJetter from "./assets/tutors/nolan-jetter.jpg";
import JoshuaHall from "./assets/tutors/joshua-hall.jpg";
import SolomayaSchwab from "./assets/tutors/solomaya-schwab.jpg";
import QuanHoang from "./assets/tutors/quan-hoang.jpg";
import EthanFisherPerez from "./assets/tutors/ethan-fisher-perez.jpg";
import AndersHeyniger from "./assets/tutors/anders-heyniger.png";

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
  tutors: {
    name: string;
    imagePath: string;
    imagePosition: [number, number];
    imagePositionMobile: [number, number];
    imageScaling: number;
    imageScalingMobile: number;
    bio: string[];
  }[];
  subjects: {
    [key: string]: string[];
  };
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
  tutors: [
    {
      name: "Eric Lai",
      imagePath: EricLai,
      imagePosition: [0, 150],
      imagePositionMobile: [140, 210],
      imageScaling: 500,
      imageScalingMobile: 500,
      bio: [
        "I’m Eric Lai, currently a senior pursuing a B.S. in Chemical Engineering at Lehigh University. Some information about me: I am the president of the Lehigh University eSports club, I have two black belts and I’m a big foodie! I believe there is nothing more frustrating in academics than a professor that knows practically everything in his discipline and can’t relay even a fraction of that knowledge to his/her students. I can’t recall how many times I skipped an entire semester’s worth of classes because I found it more beneficial to learn through the textbook than through lecture-based instruction. I am interested in tutoring because I believe that your time is valuable and shouldn’t be wasted through inefficient means of learning. Learning the course material is something you should expect from any tutor, but I also want to help you develop strong study habits that will guide you to prolonged success in college.",
        "Eric tutors chemistry, calculus 1, material balances, fluid mechanics, thermodynamics, methods, pchem, reactor design, and biology.",
      ],
    },
    {
      name: "Madeline Braun",
      imagePath: MadelineBraun,
      imagePosition: [155, 300],
      imagePositionMobile: [270, 400],
      imageScaling: 800,
      imageScalingMobile: 800,
      bio: [
        "My name is Madeline Braun and I am a third year Mechanical Engineering student at Lehigh! As a new tutor at Merchant, I look forward to forming connections with other students who are working to learn the course content as I once was. Aside from being a student, I am an RA for sophomore housing and work at the Goose deli! I enjoy listening to music and watching Queen’s Gambit. Recognizing that some courses at Lehigh require extra attention, I am excited to be a source of help for others in their learning process.",
        "Madeline tutors calculus 1, physics 1, statics, dynamics, and strength of materials.",
      ],
    },
    {
      name: "Sophia Martino",
      imagePath: SophiaMartino,
      imagePosition: [0, 300],
      imagePositionMobile: [10, 260],
      imageScaling: 800,
      imageScalingMobile: 600,
      bio: [
        "Hi! I am Sophia Martino and I am studying computer engineering with a minor in business and a minor in data science. I also participate in acapella on campus; I am the music director of the Lehigh Echoes. I grew up in Pennsylvania outside of Philly and my family is from Paraguay! Lastly, I enjoy following Formula 1 and playing chess if I’ve got the time.",
        "Sophia tutors calculus and electrical engineering subjects that include but aren't limited to circuits, signals and systems, and microelectronics.",
      ],
    },
    {
      name: "Nolan Jetter",
      imagePath: NolanJetter,
      imagePosition: [170, 0],
      imagePositionMobile: [170, 20],
      imageScaling: 800,
      imageScalingMobile: 600,
      bio: [
        "I’m a junior here at lehigh doing a dual degree in mechanical engineering and biology. I got into engineering when I was young—I liked that I could play with numbers and objects and make them do what I wanted for me. I have only grown to enjoy this more as I have gotten older. I like to do stuff outside of academics as well - I play on the men’s soccer team here at Lehigh and enjoy spending time outside (biking, surfing, and skiing), reading, playing piano, and playing chess. Tutoring is really attractive to me because I believe that the surest sign of deep knowledge in a field is the ability to explain concepts as simply and intuitively as possible. I think that it’s a great opportunity to pass on my knowledge in clear, concise terms and sharpen my skills as a byproduct",
        "Nolan tutors statics, dynamics, strength of materials, thermodynamics, and other mechanical engineering subjects.",
      ],
    },
    {
      name: "Joshua Hall",
      imagePath: JoshuaHall,
      imagePosition: [40, 20],
      imagePositionMobile: [100, 20],
      imageScaling: 600,
      imageScalingMobile: 500,
      bio: [
        "My name is Josh Hall, and I'm a first year undergraduate student at Lehigh. I'm duel majoring in CS and Mathematics, and I've also been a musician for 10 years! I've found that professors sometimes have a habit of skipping steps they deem 'irrelevant' or 'easy', and sometimes I get lost with the omitted details. As a tutor, my main method is to cover these intermediate steps, or study the more niche problems in a subject. I also try to give helpful tips and shortcuts to problems. I've always enjoyed helping my peers in their classes with anything they have been struggling to understand. I love tutoring because I get invested in those I'm teaching, and I love to see them succeed!",
        "Joshua tutors calculus 1, calculus 2, and calculus 3.",
      ],
    },
    {
      name: "Solomaya Schwab",
      imagePath: SolomayaSchwab,
      imagePosition: [70, 70],
      imagePositionMobile: [60, 60],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "I'm Solomaya Schwab! I am a lab technician at Lehigh and I graduated from Cedar Crest College in 2022 with a Bachelor's degree in Mathematics. I have a real passion for math and science and I love teaching, which I discovered while tutoring for the Community College of Philadelphia for 3 years. When I tutor, I try to offer alternative ways of thinking about a concept in order to find an explanation that makes sense to a particular student. I also try to impart good study habits as well as mathematical maturity and rigor. When I'm not at work, you can find me on the rugby pitch playing for the Lehigh Valley Lady Hooligans, working on an arts and crafts project, taking a walk, or sound asleep in the apartment I share with my girlfriend and two pigeons.",
        "Solomaya tutors calculus 1, calculus 2, linear algebra, differential equations, and discrete mathematics.",
      ],
    },
    {
      name: "Quan Hoang",
      imagePath: QuanHoang,
      imagePosition: [100, 70],
      imagePositionMobile: [70, 50],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "Hello! My name is Quan Hoang and I am currently a third-year student majoring in both Chemical Engineering and Biochemistry. I am involved in many of the musical ensembles here at Lehigh, as well as many STEM related organizations. In the past, I have worked as a Chemistry tutor at Lehigh, and I hope to continue tutoring students with Merchant. I understand that it could be frustrating and difficult to seek assistance in classes, and I hope that I could be a resource to help those students who need it!",
        "Quan tutors chemistry, material balances, fluid mechanics, thermodynamics, methods, pchem, and reactor design.",
      ],
    },
    {
      name: "Ethan Fisher-Perez",
      imagePath: EthanFisherPerez,
      imagePosition: [70, 30],
      imagePositionMobile: [60, 20],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "My name is Ethan Fisher-Perez. I’m a Lehigh senior studying Behavioral Neuroscience and Sociology. I’ve been doing research as a member of the Miwa Lab since my first year, where we study proteins involved in neuroplasticity. I’m scientifically most interested in learning, mood disorders, and smell.  I’m a writer, and I spent 5 semesters as a member of the Brown & White, where I was an editor, reported for the Health and Science beat, and wrote a column (mostly) about neuroscience called Gray Matters. I hope to soon publish the first issue of an online magazine that publishes psychological pieces of writing called Above Cognition.",
        "I’m from a rural town an hour north of Bethlehem called Kunkletown. It is there I discovered my interest in lifting as well as coffee brewing and cupping. I love all kinds of art, but I am particularly devoted to the Renaissance and French impressionism. I love  reading, thinking, and handwriting—now that I think about it, most probably in that order.",
        "Ethan tutors biology, physics 1, and physics 2.",
      ],
    },
    {
      name: "Anders Heyniger",
      imagePath: AndersHeyniger,
      imagePosition: [40, 100],
      imagePositionMobile: [50, 70],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "What’s up! I’m Anders, a Computer Science student at Lehigh University’s P.C. Rossin School of Engineering and Applied Sciences. I love playing video games, watching shows and movies, and just really anything to do with computers. I also love to play and learn about music! I first realized my love of coding in 10th grade when I took my first computer science class and just couldn’t stop learning about it, and as a result I often ended up helping friends and those around me who were struggling with coding. I’ve been practically teaching coding to people frequently ever since then, and over time I’ve realized how much I enjoy helping people learn it too! I always strive to find what others might not understand about it (as computer science can be daunting, I know) and I hope to use the ways I’ve learned to approach programming to help other people be able to understand it and see it in a much easier and more interesting light!",
        "Anders tutors computer science.",
      ],
    },
  ],
  subjects: {
    BIOS: ["045", "115"],
    CHE: ["031", "044", "210", "211", "212"],
    CHEM: ["030", "031", "110"],
    CSE: ["002", "017"],
    ECE: ["033", "081"],
    MATH: ["021", "022", "023", "051", "052", "081", "205"],
    ME: ["017", "104", "231", "245"],
    MECH: ["003", "012", "102"],
    PHY: ["011"],
  },
};

export default Data;
