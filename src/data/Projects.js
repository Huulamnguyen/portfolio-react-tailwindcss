import project1 from '../img/project-1.png';
import project2 from '../img/project-2.png';
import project3 from '../img/project-3.png';
import project4 from '../img/project-4.png';
import project5 from '../img/project-5.png';
import project6 from '../img/project-6.png';

const Projects = [
    {   
        id: 1,
        title: "Inventory & Point-Of-Sale",
        subtitle: "with React, Rails, PostgreSQL",
        tags: ["React","React-Bootstrap", "Ruby", "Rails", "PostgreSQL", "Redux"],
        src_code_link: "https://github.com/Huulamnguyen/inventory-pos-rails-react",
        isDevelopment: true,
        deploymentLink: "https://inventory-pos-final.herokuapp.com/",
        img: project1,
        description: "This project is building an inventory system that integrated POS features that allows users to manage inventory and sales in one place. The project is built by React for frontend, Rails for backend Application, and deployed on Heroku."
    },
    {   
        id: 2,
        title: "E-commerce App",
        subtitle: "with React and a Third-Party API",
        tags: ["React", "React-Bootstrap", "API"],
        src_code_link: "https://github.com/Huulamnguyen/phase-2-project",
        isDevelopment: false,
        img: project2,
        description: "This project is building an e-commerce application with React and a Third-party API called Fake Product."
    },
    {   
        id: 3,
        title: "CanCook",
        subtitle: "with Python, PostgreSQL, and Spoonacular API",
        tags: ["Python", "Flask", "Jinja Template", "PostgreSQL", "Bootstrap", "API"],
        src_code_link: "https://github.com/Huulamnguyen/can-cook",
        isDevelopment: false,
        deploymentLink: "https://cancook.herokuapp.com/",
        img: project3,
        description: "This project is about a Recipe App for people who is looking for recipes that they love."
    },
    {   
        id: 4,
        title: "Portfolio",
        subtitle: "with HTML, CSS, JavaScript",
        tags: ["HTML", "CSS", "JavaScript"],
        src_code_link: "https://github.com/Huulamnguyen/dev-porfolio-official",
        isDevelopment: false,
        deploymentLink: "https://huulamnguyen.github.io/dev-porfolio-official/",
        img: project4,
        description: "A basic portfolio built with HTML, CSS and JavaScript. To demonstrate my basic knowledge in web development"
    },
    {   
        id: 5,
        title: "Portfolio",
        subtitle: "with React and TailwindCSS",
        tags: ["React", "TailwindCSS"],
        src_code_link: "https://github.com/Huulamnguyen/portfolio-react-tailwindcss",
        isDevelopment: true,
        deploymentLink: "https://liamdev.herokuapp.com/",
        img: project5,
        description: "My latest portfolio, my little world where I share tech blogs, recent projects, contact, and about me"
    },
    {   
        id: 6,
        title: "Shopify E-Commerce",
        subtitle: "with Shopify Partner",
        tags: ["Shopify", "E-Commerce"],
        isDevelopment: false,
        deploymentLink: "https://www.angelinanailsupply.us/",
        img: project6,
        description: "I'm running an online business, which is a wholesale in nail and beauty industry."
    },
]

export default Projects;