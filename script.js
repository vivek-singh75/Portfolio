/* =========================================================
   PORTFOLIO PROJECT DATA

   ADD / EDIT YOUR PROJECTS HERE
========================================================= */


const projects = [

    {
        id: 1,

        title: "ShopSphere",

        category: "fullstack",

        categoryName: "Full Stack",

        shortDescription:
            "A full-stack e-commerce platform designed to provide a complete online shopping experience.",

        description:
            "ShopSphere is a full-stack e-commerce platform where I worked across the frontend and backend. The project focuses on building a practical shopping experience with a modern UI, API-based backend architecture and database integration.",


        /*
            ADD MULTIPLE IMAGES HERE

            Put images inside:

            assets/projects/shopsphere/
        */

        images: [
            "assets/projects/shopsphere/1.png",
            "assets/projects/shopsphere/2.png",
            "assets/projects/shopsphere/3.png"
        ],


        techStack: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS"
        ],


        tools: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
            "GitHub"
        ],


        features: [
            "Product browsing",
            "Responsive user interface",
            "Backend REST APIs",
            "Database integration",
            "Full-stack architecture"
        ],


        progress: 20,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "#"
    },


    {
        id: 2,

        title: "SkillGaps",

        category: "ai",

        categoryName: "AI / Full Stack",

        shortDescription:
            "AI-powered resume analysis and interview preparation platform.",

        description:
            "SkillGaps analyzes a candidate's resume, job description and self-description to generate technical questions, behavioral questions, skill gaps and a personalized preparation plan using AI.",


        images: [
            "assets/projects/skillgaps/1.png",
            "assets/projects/skillgaps/2.png"
        ],


        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js"
        ],


        tools: [
            "MongoDB",
            "Gemini API",
            "Git",
            "GitHub"
        ],


        features: [
            "Resume analysis",
            "Job description matching",
            "Technical interview questions",
            "Behavioral questions",
            "Skill gap analysis",
            "Preparation plan"
        ],


        progress: 85,

        status: "In Development",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "#"
    },


    {
        id: 3,

        title: "E-Commerce AI Chatbot",

        category: "ai",

        categoryName: "AI / RAG",

        shortDescription:
            "A RAG-based customer support chatbot that answers questions using a product knowledge base.",

        description:
            "This project uses Retrieval-Augmented Generation to provide answers based on company knowledge documents. PDF documents are parsed, converted into chunks, embedded and stored in a vector database. User queries are matched against the knowledge base before generating the final answer.",


        images: [
            "assets/projects/chatbot/1.png",
            "assets/projects/chatbot/2.png"
        ],


        techStack: [
            "JavaScript",
            "Node.js",
            "Express.js",
            "RAG"
        ],


        tools: [
            "Gemini",
            "Pinecone",
            "PDF Parse",
            "Git",
            "GitHub",
            "Render",
            "GitHub Pages"
        ],


        features: [
            "PDF knowledge ingestion",
            "Document chunking",
            "Embeddings",
            "Vector search",
            "RAG pipeline",
            "AI-generated answers"
        ],


        progress: 95,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/E-Commerce-ChatBot",

        live:
            "https://vivek-singh75.github.io/E-Commerce-ChatBot/"
    },


    {
        id: 4,

        title: "Placement Preparation Tracker",

        category: "frontend",

        categoryName: "Frontend",

        shortDescription:
            "A placement preparation tracker and analytics dashboard for tracking coding progress.",

        description:
            "A frontend-focused placement preparation system designed to track solved questions, progress, streaks, difficulty levels and preparation statistics.",


        images: [
            "assets/projects/placement-tracker/1.png",
            "assets/projects/placement-tracker/2.png"
        ],


        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],


        tools: [
            "Git",
            "GitHub",
            "VS Code"
        ],


        features: [
            "Question tracking",
            "Progress analytics",
            "Difficulty tracking",
            "Streak tracking",
            "Dashboard"
        ],


        progress: 80,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "#"
    },


    {
        id: 5,

        title: "Face Recognition Attendance",

        category: "ai",

        categoryName: "AI / Computer Vision",

        shortDescription:
            "Face recognition based attendance management system.",

        description:
            "A computer vision based attendance system using face recognition to identify users and record attendance. The project combines a Flask backend with computer vision libraries and database/storage services.",


        images: [
            "assets/projects/attendance/1.png",
            "assets/projects/attendance/2.png"
        ],


        techStack: [
            "Python",
            "Flask",
            "OpenCV"
        ],


        tools: [
            "Firebase",
            "SQLite",
            "Face Recognition",
            "MediaPipe"
        ],


        features: [
            "Face detection",
            "Face recognition",
            "Attendance recording",
            "Database storage",
            "Web interface"
        ],


        progress: 75,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "#"
    },


    {
        id: 6,

        title: "College Website Clone",

        category: "frontend",

        categoryName: "Frontend",

        shortDescription:
            "A frontend recreation of a college website built using core web technologies.",

        description:
            "A frontend-only project created to practice responsive web design, layouts, navigation and recreating a real-world website interface.",


        images: [
            "assets/projects/college/1.png",
            "assets/projects/college/2.png"
        ],


        techStack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],


        tools: [
            "VS Code",
            "Git",
            "GitHub"
        ],


        features: [
            "Responsive design",
            "Navigation",
            "Website layout",
            "Interactive elements"
        ],


        progress: 100,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "#"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectsGrid =
    document.getElementById("projectsGrid");

const searchInput =
    document.getElementById("projectSearch");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const modal =
    document.getElementById("projectModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


/* =========================================================
   CURRENT FILTER
========================================================= */

let currentFilter = "all";


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const filteredProjects =
        projects.filter(project => {

            const matchesCategory =
                currentFilter === "all" ||
                project.category === currentFilter;


            const searchableText = [

                project.title,

                project.shortDescription,

                project.description,

                ...project.techStack,

                ...project.tools

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                searchableText.includes(searchValue);


            return matchesCategory && matchesSearch;

        });


    projectsGrid.innerHTML = "";


    if (filteredProjects.length === 0) {

        projectsGrid.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                padding: 50px;
                text-align: center;
                color: #969aa7;
            ">
                No projects found.
            </div>
        `;

        return;
    }


    filteredProjects.forEach(project => {

        const card =
            document.createElement("article");


        card.className = "project-card";


        card.innerHTML = `

            <div class="project-image">

                <img
                    src="${project.images[0]}"
                    alt="${project.title}"
                    loading="lazy"
                >

                <span class="project-category">
                    ${project.categoryName}
                </span>

            </div>


            <div class="project-content">

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.shortDescription}
                </p>


                <div class="project-tags">

                    ${project.techStack
                        .slice(0, 4)
                        .map(tech =>
                            `<span>${tech}</span>`
                        )
                        .join("")
                    }

                </div>


                <div class="project-bottom">

                    <div class="progress-wrapper">

                        <div class="progress-label">

                            <span>
                                ${project.status}
                            </span>

                            <span>
                                ${project.progress}%
                            </span>

                        </div>

                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="
                                    width:${project.progress}%
                                "
                            ></div>

                        </div>

                    </div>


                    <span class="view-project">
                        View →
                    </span>

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openProject(project)
        );


        projectsGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(project) {

    modalBody.innerHTML = `

        <h2 class="modal-title">
            ${project.title}
        </h2>


        <p class="modal-description">
            ${project.description}
        </p>


        <div class="modal-gallery">

            ${project.images
                .map(image => `
                    <img
                        src="${image}"
                        alt="${project.title}"
                        loading="lazy"
                    >
                `)
                .join("")
            }

        </div>


        <div class="modal-section">

            <h4>
                Tech Stack
            </h4>

            <div class="modal-list">

                ${project.techStack
                    .map(item =>
                        `<span>${item}</span>`
                    )
                    .join("")
                }

            </div>

        </div>


        <div class="modal-section">

            <h4>
                Tools & Technologies
            </h4>

            <div class="modal-list">

                ${project.tools
                    .map(item =>
                        `<span>${item}</span>`
                    )
                    .join("")
                }

            </div>

        </div>


        <div class="modal-section">

            <h4>
                Features
            </h4>

            <div class="modal-list">

                ${project.features
                    .map(item =>
                        `<span>${item}</span>`
                    )
                    .join("")
                }

            </div>

        </div>


        <div class="modal-section">

            <h4>
                Project Progress
            </h4>

            <div class="progress-label">

                <span>
                    ${project.status}
                </span>

                <span>
                    ${project.progress}%
                </span>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="
                        width:${project.progress}%
                    "
                ></div>

            </div>

        </div>


        <div class="modal-links">

            ${
                project.github &&
                project.github !== "#"

                ?

                `
                    <a
                        href="${project.github}"
                        target="_blank"
                        class="primary-btn"
                    >
                        GitHub →
                    </a>
                `

                :

                ""
            }


            ${
                project.live &&
                project.live !== "#"

                ?

                `
                    <a
                        href="${project.live}"
                        target="_blank"
                        class="secondary-btn"
                    >
                        Live Demo →
                    </a>
                `

                :

                ""
            }

        </div>

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    renderProjects
);


/* =========================================================
   FILTER
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove("active")
            );


            button.classList.add("active");


            currentFilter =
                button.dataset.filter;


            renderProjects();

        }
    );

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle("active");

    }
);


document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove("active");

            }
        );

    });


/* =========================================================
   YEAR
========================================================= */

document.getElementById("year")
    .textContent = new Date().getFullYear();


/* =========================================================
   INITIAL RENDER
========================================================= */

renderProjects();