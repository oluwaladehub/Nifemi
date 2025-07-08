import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nifemi",
  lastName: "Oluwalade",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mobile and Web Developer",
  avatar: "/images/avatar.jpg",
  email: "oluwaladen@gmail.com",
  location: "Africa/Lagos", 
  languages: ["English", "Yoruba"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Subscribe to receive updates and news from me.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/oluwaladehub?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oluwanifemi-oluwalade-775372296/",
  },
  {
    name: "",
    icon: "x",
    link: "https://twitter.com/oluwalade_nifemi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Nifemi - Mobile and Web Developer | Crafting seamless digital experiences.`,
  headline: <>Welcome to my digital space. I'm Nifemi, a passionate Mobile and Web Developer.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I build robust and engaging applications, turning complex ideas into intuitive user experiences.
      Explore my work and journey in mobile and web development.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/oluwanifemi-oluwalade",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Industrial Chemistry graduate with a solid foundation in chemical processes, analytical techniques,
        and laboratory practices. Possessing hands-on experience gained through academic projects and
        internships, I have developed strong skills in chemical analysis, process optimization, and quality
        control. My academic training has equipped me with a deep understanding of industrial chemical
        processes, material science, and environmental regulations.
        My technical expertise is complemented by a keen eye for detail and a creative approach to
        problem-solving. I am committed to staying at the forefront of technological advancements and
        continually enhancing my skills to create impactful, cutting-edge digital experiences.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "TOFAPS, Engineering",
        timeframe: "2019",
        role: "CIVIL ENGINEERING, INTERNSHIP",
        achievements: [
          <>
            Site Inspection
          </>,
          <>
            Taking Samples of Soils for Analysis
          </>,
          <>
            Flush Test on Oil Tanks
          </>,
        ],
        images: [],
      },
      {
        company: "Ragolis Bottle Limited",
        timeframe: "2020",
        role: "LABORATORY ASSISTANT",
        achievements: [
          <>
            Managing Analytical Instruments
          </>,
          <>
            Conducting Biological Analysis on water samples
          </>,
          <>
            Conducting TDS and pH level of water samples
          </>,
          <>
            Taking Samples of water for Analysis
          </>,
        ],
        images: [],
      },
      {
        company: "Farskadeli",
        timeframe: "2021",
        role: "BACKEND ENGINEER",
        achievements: [
          <>
            Managing multiple projects simultaneously and meet tight deadlines.
          </>,
          <>
            Writing scripts for websites
          </>,
          <>
            Debugging
          </>,
          <>
            Optimizing web applications for performance
          </>,
        ],
        images: [],
      },
      {
        company: "EarlyFounders NG",
        timeframe: "2024",
        role: "PROGRAMMING TUTOR",
        achievements: [
          <>
            Believe in learning by doing; my students work on real-world projects to build a solid portfolio and
            apply their knowledge practically.
          </>,
          <>
            Cover a wide range of programming languages and frameworks, including JavaScript, HTML/CSS,
            Python, providing both beginner and advance courses.
          </>,
          <>
            Tailor my programming lessons to fit each student’s unique needs, ensuring they grasp concepts at
            their own pace and build confidence in their skills.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lagos State Model College Igbokuta",
        description: <>SENIOR SECONDARY SCHOOL CERTIFICATE EXAMINATION (SSCE) (2010 – 2016)</>,
      },
      {
        name: "Al-Hilma University Ilorin, Kwara",
        description: <>A-LEVEL CERTIFICATE (2016 – 2017)</>,
      },
      {
        name: "Federal Polytechnic Ado-Ekiti, Civil Engineering",
        description: <>NATIONAL DIPLOMA (ND) (2017 – 2019)</>,
      },
      {
        name: "University of Ilorin, Industrial Chemistry",
        description: <>BACHELOR OF SCIENCE (BSc) (2019 – 2023)</>,
      },
      {
        name: "Udemy School",
        description: <>WEB DEVELOPMENT (2022)</>,
      },
      {
        name: "ALX Certificate",
        description: <>SOFTWARE ENGINEERING (2023)</>,
      },
      {
        name: "NATIONAL YOUTH SERVICE CORPS (NYSC)",
        description: <>(2023 – 2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Strong writing and communication Skill",
        description: <></>,
        images: [],
      },
      {
        title: "Creative and Innovation",
        description: <></>,
        images: [],
      },
      {
        title: "Software Programming",
        description: <></>,
        images: [],
      },
      {
        title: "Full Stack developer",
        description: <></>,
        images: [],
      },
      {
        title: "Chemical Analysis",
        description: <></>,
        images: [],
      },
      {
        title: "Quality Assurance",
        description: <></>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `My portfolio of web and mobile development projects.`,
  projects: [
    {
      name: "Dox Reliability Konsult",
      description: "A consulting web application built for a client, focusing on transforming industrial reliability through expert maintenance consulting, recruitment, and training services.",
      url: "https://www.doxreliability.com/",
      images: [
        { src: "/about/dox1.JPG", alt: "Dox Reliability Konsult Homepage" },
        { src: "/about/dox2.JPG", alt: "Dox Reliability Konsult Services" },
      ],
    },
    {
      name: "Sonia Glow Haven",
      description: "An e-commerce website specializing in skincare products and supplements, offering trusted products for radiant living.",
      url: "https://soniaglowheaven.com/",
      images: [
        { src: "/about/soina.JPG", alt: "Sonia Glow Haven Homepage" },
        { src: "/about/soina2.JPG", alt: "Sonia Glow Haven Shop" },
      ],
    },
    {
      name: "TradeAllCoins",
      description: "A cryptocurrency investment and trading platform designed for both beginners and experts to build wealth strategically with advanced trading capabilities and real-time market data.",
      url: "https://www.tradeallcoins.com/",
      images: [
        { src: "/about/tradeallcoins.JPG", alt: "TradeAllCoins Homepage" },
        { src: "/about/tradeallcoins2.JPG", alt: "TradeAllCoins Live Data" },
        { src: "/about/tradeallcoins3.JPG", alt: "TradeAllCoins Investment Plans" },
      ],
    },
    {
      name: "Rizora Fragrance",
      description: "An e-commerce site offering a curated collection of authentic and luxurious perfumes and clothing, providing a seamless shopping experience for fragrance enthusiasts and fashion-forward individuals.",
      url: "https://rizorafragance.vercel.app/",
      images: [
        { src: "/about/frag2.JPG", alt: "Rizora Fragrance Shop" },
        { src: "/about/frag.JPG", alt: "Rizora Fragrance Product Page" },
      ],
    },
    {
      name: "ServeEz Mobile App",
      description: "A mobile application connecting users with handyman services, designed for effortless, fast, and reliable booking and management of everyday services.",
      url: "https://www.serveezapp.com/",
      images: [
        { src: "/about/app2.JPG", alt: "ServeEz App Features" },
        { src: "/about/app.JPG", alt: "ServeEz App Homepage" },
      ],
    },
  ],
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/9.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/11.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
