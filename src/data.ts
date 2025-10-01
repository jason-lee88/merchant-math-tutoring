//import EricLai from "./assets/tutors/eric-lai.jpg";
//import MadelineBraun from "./assets/tutors/madeline-braun.png";
//import SophiaMartino from "./assets/tutors/sophia-martino.jpg";
//import NolanJetter from "./assets/tutors/nolan-jetter.jpg";
import JoshuaHall from "./assets/tutors/joshua-hall.jpg";
import QuanHoang from "./assets/tutors/quan-hoang.jpg";
//import EthanFisherPerez from "./assets/tutors/ethan-fisher-perez.jpg";
//import AndersHeyniger from "./assets/tutors/anders-heyniger.png";
import MeganFreid from "./assets/tutors/megan-freid.png";
//import AriannaMorataya from "./assets/tutors/arianna-morataya.jpg";
//import EmmaAnderson from "./assets/tutors/emma-anderson.jpg";
//import LukeRekucki from "./assets/tutors/luke-rekucki.jpg";
import ImonRahaman from "./assets/tutors/imon-rahaman.jpg";

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
  subjects: string[];
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
        "My name is Sameer Merchant, and I’m a math tutor from the Bucks County area. I consider myself a lifelong learner, having explored various learning methods to find what works best for me. My passion for learning didn’t ignite until my junior year at Lehigh University, but since then, it has flourished. I’ve been both one of the worst and best students in my classes, so I understand the challenges of getting a bad grade and the determination required to improve.",
        "I earned my master’s degree in Electrical Engineering from Lehigh University, where I also worked as a research assistant. During my undergraduate studies in Computer Engineering, I served as president of the Institute of Electrical and Electronics Engineers (IEEE), participated in IEEE’s honor society, Eta Kappa Nu (HKN), and held the position of secretary in the Tea Club.",
        "I am currently working as an Electrical Engineer and have passed the Fundamentals of Engineering (FE) exam, which grants me the Engineer in Training (EIT) certification. Additionally, I am planning to take the Professional Engineering (PE) exam to obtain my PE license. My hobbies include beatboxing, playing the violin, and working out—all of which reflect my deep love for learning."
      ],
    },
    {
      heading: "My Story",
      body: [
        "In 10th grade, I began tutoring math through my high school’s math club and at Kumon as a grader. One day, while working with a student on graphing sine and cosine, I noticed he didn’t understand the significance of the unit circle in relation to these functions. As he grasped the connection, his comprehension of subsequent topics improved, and his confidence grew as he mastered fundamental concepts and applied them to other problems.",
        "When I started at Lehigh, my passion for helping students navigate the world of math remained strong. I began tutoring friends in the library or common areas, where I observed a recurring issue: students lacking strong fundamentals often struggled in introductory math classes. This was particularly true for those who hadn’t taken calculus in high school and found themselves overwhelmed in “weed out” classes. My experience helping friends led me to apply for a tutoring position, and in my junior year, I was hired as a tutor for linear methods, right in the midst of the pandemic.",
        "The shift to online tutoring presented its own challenges, but I quickly adapted to the necessary technology. During this time, I also became a teaching assistant (TA) for several classes, where I held office hours to help students with individual issues. These experiences further developed my skills as a tutor.",
        "As I progressed into my master’s program, I decided to start tutoring students in mathematics and engineering subjects that I excelled at teaching. I wanted to provide the individual attention that the Lehigh tutoring center couldn’t always offer. As word spread, more students began requesting help in a variety of subjects, prompting me to hire my first tutor. Eventually, I grew my company into a team of tutors covering different subjects as a pioneer in tutoring on Lehigh's campus."
      ],
    },
    {
      heading: "Why Choose Us?",
      body: [
        "At Merchant Math, we believe in the power of strong fundamentals and personalized learning. Our approach is shaped by years of hands-on experience.At Merchant Math, we believe in the power of strong fundamentals and personalized learning. Our approach is shaped by years of hands-on experience.",
        "We recognize that each student has unique needs, which is why we focus on providing individualized support that goes beyond what traditional tutoring centers offer. Whether you need help with high school algebra or advanced engineering subjects, our tutors tailor their approach to your specific learning style.",
        "We’ve helped students improve their understanding, confidence, and grades by focusing on core concepts and effective problem-solving techniques. Our success stories include students who have transformed their academic performance by mastering the basics and applying them to more complex problems.",
        "We’ve adapted to the changing educational environment as our tutors are skilled in both in-person and online tutoring, utilizing the latest technology to create an engaging and effective learning experience.",
        "Our team of qualified tutors covers a wide range of subjects, ensuring that you can find the help you need, no matter the challenge. The team consists of students at the university who have done well in their courses and have proven they can teach the material."
      ],
    },
  ],
  pricing: [
    {
      label: "Individual",
      cost: 80,
    },
    {
      label: "Group (2 Students)",
      cost: 60,
    },
    {
      label: "Group (3 Students)",
      cost: 50,
    },
    {
      label: "Group (4 Students)",
      cost: 45,
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
    {
      name: "Sophia",
      subheading: "Calculus 1 Part 2",
      body: "Eric was super helpful and organized! He always came prepared with problems to review and focused on explaining problems I had trouble with.",
    },
  ],
  tutors: [
    {
      name: "Joshua Hall",
      imagePath: JoshuaHall,
      imagePosition: [40, 20],
      imagePositionMobile: [100, 20],
      imageScaling: 600,
      imageScalingMobile: 500,
      bio: [
        "My name is Josh Hall, and I'm a junior undergraduate student at Lehigh. I'm duel majoring in CS and Mathematics, and I've also been a musician for 10 years! I've found that professors sometimes have a habit of skipping steps they deem 'irrelevant' or 'easy', and sometimes I get lost with the omitted details. As a tutor, my main method is to cover these intermediate steps, or study the more niche problems in a subject. I also try to give helpful tips and shortcuts to problems. I've always enjoyed helping my peers in their classes with anything they have been struggling to understand. I love tutoring because I get invested in those I'm teaching, and I love to see them succeed!",
        "Joshua tutors calculus 1, calculus 2, and calculus 3.",
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
        "Hello! My name is Quan Hoang and I am currently a fourth-year student majoring in both Chemical Engineering and Biochemistry. I am involved in many of the musical ensembles here at Lehigh, as well as many STEM related organizations. In the past, I have worked as a Chemistry tutor at Lehigh, and I hope to continue tutoring students with Merchant. I understand that it could be frustrating and difficult to seek assistance in classes, and I hope that I could be a resource to help those students who need it!",
        "Quan tutors chemistry, material balances, fluid mechanics, thermodynamics, methods, pchem, and reactor design.",
      ],
    },
 
    {
      name: "Megan Freid",
      imagePath: MeganFreid,
      imagePosition: [40, 70],
      imagePositionMobile: [50, 40],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "Hi, my name is Megan Freid and I am a junior studying Mechanical Engineering with a minor in Business and Aerospace Engineering at Lehigh University.  Outside of class, I am part of the Formula One SAE team, where we design and build a Formula One car every year at a competition up in Michigan. It’s here where I learned a lot of fun skills including how to weld.  Additionally, I am a member of the Society of Women Engineers and the Tau Beta Pi Engineering Honors Society.  Besides school and educational groups, I enjoy running, reading, and baking.  I grew up helping my sister with math and other courses and I understand that different people have different learning styles and that it is beneficial to teach things in different ways. I look forward to using my tutoring skills to help others in my community.",
        "Megan tutors statics, dynamics, strength of materials, thermodynamics, and other mechanical engineering subjects."
      ],
    },
    {
      name: "Imon Rahaman",
      imagePath: ImonRahaman,
      imagePosition: [40, 70],
      imagePositionMobile: [50, 40],
      imageScaling: 600,
      imageScalingMobile: 400,
      bio: [
        "Hi, my name is Imon Rahaman. I am a clinical researcher working in the genetics department at the Children’s Hospital of Philadelphia. I graduated from MIT (class of 2020) with a degree in biological engineering and am currently pursuing a Master of Science in Bioinformatics at Johns Hopkins University (expected 2025). With over three years of experience in academic research, I specialize in biology laboratory techniques, computational analysis, and data science, particularly within the fields of biotechnology and medicine. I am passionate about sharing my knowledge and helping others grasp complex topics, which is why I offer tutoring services in all STEM subjects and specifically upper level biology, mathematics, computer science, and related subjects.", 

        "As a former premed student, I am also able to offer guidance on building a strong application when applying for medical school, especially in succeeding on the MCAT on which I scored a 517 (94th percentile).", 
        
        "I look forward to helping students learn and succeed on their academic journey!"

      ],
    },

  ],
  subjects: ["Engineering", "Calculus", "Statistics", "Algebra", "Geometry", "Biology", "Chemistry", "Physics", "Accounting", "Economics", "Computer Science"],
};

export default Data;
