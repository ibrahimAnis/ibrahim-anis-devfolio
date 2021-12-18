/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ibrahim Anis",
  title: "Hi all, I'm Ibrahim",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AxQ_VNtCMn2rXIZHfDsnVlv0vSQrEN3V/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ibrahimAnis",
  linkedin: "https://www.linkedin.com/in/ibrahimanis/",
  gmail: "anisibrahim21@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Design scalable backend system for your application that can serve million of users seamlessly"),
    emoji(
      "⚡ Experience in working on multiple technologies and framework like SpringBoot,Django,Express"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ujjain Engineering College",
      logo: require("./assets/images/uec_logo.jpg"),
      subHeader: "B.Tech in Computer Science",
      duration: "August 2016 - August 2020",
      desc: "Completed my graduation in B.Tech from Ujjain Engineering College with the score of 7.20 CGPA"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Swami Vivekanand Public School",
      logo: require("./assets/images/swami_logo.jpg"),
      subHeader: "12th",
      duration: "June 2015 - June 2016",
      desc: "Completed my Higher Secondary Education from Swami Vivekanand Public School in 2016 and secured 86.4% in 12th Board."      
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Gokuldas Public School",
      logo: require("./assets/images/gps_logo.png"),
      subHeader: "10th",
      duration: "August 2013 - August 2014",
      desc: "Completed my High School from Gokuldas Public School (CBSE) in 2014 and scored 9.6 CGPA in 10th Board."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "80%"

    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Accolite Digital",
      companylogo: require("./assets/images/accolite_logo.jpeg"),
      date: "Feb 2021 – Present",
      desc: "Working with Prudential Team in designing and developing scalable backend system for finance based application.",
      // descBullets: [
      //   "Designing the RESTful APIs to add new features in the existing application",
      //   "Working with Business Analyst in integrating the new insurance products into the system.",
      //   "Debugging and fixing the issues in the existing application to increase the productivity of the app"
      // ]
    },
    {
      role: "C++ Developer",
      company: "Techolution",
      companylogo: require("./assets/images/tech_logo.png"),
      date: "Sep 2020 - Dec 2020",
     desc: "Worked on the revolutionary AI-based access control product faceopen to recognize the face of a person and grant access to the valuable asset."
    },
    {
      role: "Software Engineer Intern",
      company: "Thinking Machines",
      companylogo: require("./assets/images/tm_logo.png"),
      date: "Jan 2019 – Aug 2019",
      desc: "Worked as an intern at Thinking Machines and Designed a multi-threaded library using Java technology that will help the programmers to get rid of writing socket programming code while creating a client-server application"    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/db-tool.png"),
      projectName: "Database Designing Tool",
      projectDesc: "Desinging Database Schema for a project is always fun but writing SQL script is not.Using SQL shell to write SQL script is always hectic.You can generate SQL script but in only one RDBMS language if you use any tool like MySQL Workbench.To bridge these gaps I designed this app.This web based tool provides a canvas to draw database schema and to visualize it.This tool can also generate SQL script in 3 different RDBMS technology.You can download the image of schema and you don't need to install any application on your desktop.",
      footerLink: [
        {
          name: "View Demo",
          url: "https://ibrahimanis.github.io/an-interactive-data-modeler/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/path-finder.png"),
      projectName: "Path finding Visualizer",
      projectDesc: "This project is developed to visualise the dif- ferent graph searching algorithms used in solving and creating a maze. The algorithms include: BFS, DFS, Dijkstra,Greedy BFS,A* and Swarm, along with some maze generating algorithms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ibrahimanis.github.io/path-finder-visualizer"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CodeChef",
      subtitle:
        "Participated in ACM-ICPC and 3* at CodeChef",
      image: require("./assets/images/codechef.png"),
      footerLink: [
        {
          name: "Codechef Profile",
          url: "https://www.codechef.com/users/ibbu_001"
        }
      ]
    },
    {
      title: "Hacker Rank",
      subtitle:
        "Achieved Hacker Rank certification for Advanced programming",
      image: require("./assets/images/hackerRank.png"),
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.hackerrank.com/certificates/d2bc3d70ba62"
        }
      ]
    },

    {
      title: "Google Code Jam",
      subtitle: "Qualified Google Code Jam 1st round",
      image: require("./assets/images/codeJam.png"),
      footerLink: [
        {name: "Certification", url: "https://codingcompetitions.withgoogle.com/codejam/certificate/summary/0000000000051672"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7898607653",
  email_address: "anisibrahim21@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
