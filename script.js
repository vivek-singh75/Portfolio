/* =========================================================
   PORTFOLIO PROJECT DATA
   =========================================================
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

        images: [
            "assets/projects/shopsphere/1.png",
            "assets/projects/shopsphere/2.png",
            "assets/projects/shopsphere/3.png",
            "assets/projects/shopsphere/.png"
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

        status: "In Development",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "https://vivek-singh75.github.io/ShopSphere/"
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
            "assets/projects/SkillGaps/1.png",
            "assets/projects/skillgaps/2.png",
            "assets/projects/skillgaps/3.png",
            "assets/projects/skillgaps/4.png",
            "assets/projects/skillgaps/5.png"
        ],

        techStack: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "puppeteer",
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

        progress: 95,

        status: "Completed",

        github:
            "https://github.com/vivek-singh75/",

        live:
            "https://vivek-singh75.github.io/SkillGaps/#/"
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
            "assets/projects/E-Commerce ChatBot/1.png",
            "assets/projects//E-Commerce ChatBot/2.png",
            "assets/projects//E-Commerce ChatBot/3.png",
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

        progress: 75,

        status: "in Development",

        github:
            "https://github.com/vivek-singh75/E-Commerce-ChatBot",

        live:
            "https://vivek-singh75.github.io/E-Commerce-ChatBot/"
    },

    {
        id: 4,

        title: "DevTrack",

        category: "fullstack",

        categoryName: "Full Stack",

        shortDescription:
            "A placement preparation tracker and analytics dashboard for tracking coding progress.",

        description:
            "A frontend-focused placement preparation system designed to track solved questions, progress, streaks, difficulty levels and preparation statistics.",

        images: [
            "assets/projects/Placement Preparation tracker/1.png",
            "assets/projects/Placement Preparation tracker/2.png",
            "assets/projects/Placement Preparation tracker/3.png",
            "assets/projects/Placement Preparation tracker/4.png",
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
            "https://vivek-singh75.github.io/placement-preparation-tracker/"
    },

   {
    id: 7,

    title: "AI ChatBot",

    category: "ai",

    categoryName: "AI / Generative AI",

    shortDescription:
        "An AI chatbot designed to answer computer science related questions using Gemini AI.",

    description:
        "AI ChatBot is an AI-powered chatbot focused specifically on computer science related questions. The chatbot uses the Gemini AI API to understand user queries and generate relevant answers related to computer science topics.",

    images: [
        "assets/projects/ChatBot/1.png",
        "assets/projects/ChatBot/2.png",
    ],

    techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Gemini AI API"
    ],

    tools: [
        "Gemini AI",
        "Node.js",
        "Express.js",
        "Git",
        "GitHub"
    ],

    features: [
        "Computer science focused answers",
        "AI-powered responses",
        "Gemini AI integration",
        "Interactive chatbot interface",
        "Backend API integration"
    ],

    progress: 100,

    status: "Completed",

    github:
        "https://github.com/vivek-singh75/E-Commerce-ChatBot",

    live:
        "https://vivek-singh75.github.io/AiChatbot/"
    },

    {
    id: 6,

    title: "Movie Recommendation System",

    category: "ai",

    categoryName: "AI / Generative AI",

    shortDescription:
        "An AI-powered movie recommendation system that uses vector embeddings and cosine similarity to find movies semantically similar to the user's query.",

    description:
        "Movie Recommendation System uses Gemini Embedding models to convert movie descriptions and user queries into high-dimensional vector embeddings. The system compares these embeddings using cosine similarity and recommends movies based on semantic similarity rather than simple keyword matching.",

    images: [
        "assets/projects/Movie Recomendation System/1.png",
        "assets/projects/Movie Recomendation System/2.png",
        "assets/projects/Movie Recomendation System/3.png",
        "assets/projects/Movie Recomendation System/4.png",
        
    ],

    techStack: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "Gemini AI",
        "Gemini Embeddings",
        "Vector Embeddings",
        "Cosine Similarity"
    ],

    tools: [
        "Google Gemini API",
        "Node.js",
        "Express.js",
        "JavaScript",
        "Git",
        "GitHub"
    ],

    features: [
        "Semantic movie search",
        "Vector embedding generation",
        "Gemini embedding model integration",
        "Cosine similarity based recommendations",
        "Top movie recommendations",
        "Natural language movie queries",
        "Similarity-based ranking"
    ],

    progress: 100,

    status: "Completed",

    github:
        "https://github.com/vivek-singh75/",

    live:
        " https://vivek-singh75.github.io/Movie-Recommendation-System/"
    },

    {
        id: 7,

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
    },

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


                    <!-- LIVE DEMO + GITHUB BUTTONS -->

                    <div class="project-actions">

                        ${
                            project.live &&
                            project.live !== "#"

                            ?

                            `
                                <a
                                    href="${project.live}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-live-btn"
                                    onclick="event.stopPropagation()"
                                >
                                    🚀 Live Demo
                                </a>
                            `

                            :

                            ""
                        }


                        ${
                            project.github &&
                            project.github !== "#"

                            ?

                            `
                                <a
                                    href="${project.github}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-github-btn"
                                    onclick="event.stopPropagation()"
                                >
                                    GitHub →
                                </a>
                            `

                            :

                            ""
                        }

                    </div>

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
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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