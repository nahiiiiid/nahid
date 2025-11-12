import React, { useState, useEffect, useMemo } from 'react';
import {
  Home, Briefcase, Code, GraduationCap, Mail, Github, Linkedin, MessageCircle, Sun, Moon,
  Users, Layers, BookOpen, Star, Zap, Activity, ChevronRight, Hash
} from 'lucide-react';

// --- Placeholder Data Structures ---

// Note: Replace "..." with your actual data and links.

const personalData = {
  name: "Nahid Hasan Saikot",
  title: "Programmer | ML Engineer",
  email: "nahidhasansaikot@gmail.com",
  github: "github.com/nahiiiiid",
  linkedin: "linkedin.com/in/nahiiiiid",
  whatsapp: "+1234567890",
  coverPhotoUrl: "https://placehold.co/1200x300/1e293b/ffffff?text=Professional+Cover+Photo+Area",
  profilePhotoUrl: "https://placehold.co/150x150/000/fff?text=Nahid",
  codingProfiles: [
    { name: "Codeforces", url: "https://codeforces.com/profile/nahiiiiid", icon: Hash },
    { name: "LeetCode", url: "https://leetcode.com/nahiiiiid", icon: Code },
    { name: "Kaggle", url: "https://kaggle.com/nahiiiiid", icon: Activity },
  ]
};

const insightsText = `
### Summary
A highly dedicated and results-oriented Programmer with expertise in Machine Learning, Full Stack Development, and Complex System Engineering. I thrive on solving intricate problems and leveraging cutting-edge technologies to build scalable and robust applications. My philosophy is rooted in clean, efficient code and continuous learning, drawing inspiration from open-source culture and top-tier development environments like VS Code.

### Core Skills
- **Machine Learning:** Deep proficiency in LLMs, RAG systems, Computer Vision, and classic ML algorithms using PyTorch and TensorFlow.
- **Backend:** Expert in Django/Flask for scalable API design, leveraging PostgreSQL and MongoDB for data persistence, and containerization with Docker.
- **Frontend:** Experienced in building responsive, modern user interfaces with React, TypeScript, and Tailwind CSS, focusing on performance and state management (Redux/Context).

### Experience Highlights
(Detailed tree view available in the 'Experience' section)
I have spent X years in the industry, contributing to key projects involving ML model deployment, large-scale data processing pipelines, and full-stack application development.

### Education
(Detailed tree view available in the 'Education' section)
I hold a degree in Computer Science, focusing on advanced algorithms and artificial intelligence. My academic journey provided a strong foundation for my professional career.

### Research & Publications
I have contributed to research in [Area 1] and [Area 2], focusing on optimizing [Specific Metric]. My work is published in [Journal/Conference Name].

---
*This section serves as a comprehensive textual CV, detailing the breadth of my technical and academic background.*
`;

const experiences = [
  {
    company: "Acme Tech Solutions",
    link: "#",
    years: "2021 - Present",
    role: "Senior ML Engineer",
    description: [
      "Designed and deployed Retrieval-Augmented Generation (RAG) pipelines for enterprise knowledge base indexing.",
      "Optimized PyTorch model inference speed by 40% using quantization and TensorRT integration.",
      "Led a cross-functional team in migrating legacy APIs to a modern, scalable Django/DRF microservice architecture.",
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "RAG", "Django", "Docker", "PostgreSQL"],
  },
  {
    company: "Innovate AI Lab",
    link: "#",
    years: "2019 - 2021",
    role: "Full Stack Developer",
    description: [
      "Developed a real-time data visualization dashboard using React and D3.js.",
      "Implemented OAuth2 and JWT authentication mechanisms for secure user access.",
      "Managed MongoDB clusters and performed schema migrations for large datasets.",
    ],
    tools: ["React", "TypeScript", "Flask", "MongoDB", "Tailwind CSS", "JWT", "Redis"],
  },
];

const skillsData = {
  "Machine Learning Skills": {
    tools: [
      { name: "Python", icon: Code, color: "bg-blue-600" },
      { name: "PyTorch", icon: Star, color: "bg-orange-500" },
      { name: "TensorFlow", icon: Star, color: "bg-amber-600" },
      { name: "Scikit-learn", icon: Star, color: "bg-yellow-500" },
      { name: "Keras", icon: Star, color: "bg-red-500" },
      { name: "NumPy", icon: Star, color: "bg-indigo-500" },
      { name: "Pandas", icon: Star, color: "bg-emerald-500" },
    ],
    concepts: [
      { concept: "RAG", description: "Retrieval-Augmented Generation for enhanced LLM responses with external knowledge bases." },
      { concept: "LLM", description: "Large Language Models fine-tuning, prompt engineering, and deployment." },
      { concept: "Computer Vision", description: "Image classification, object detection, segmentation using CNNs and transformers." },
      { concept: "NLP", description: "Natural Language Processing, sentiment analysis, text generation, and embeddings." },
    ],
  },
  "Backend Development Skills": {
    tools: [
      { name: "Django", icon: Layers, color: "bg-green-600" },
      { name: "Flask", icon: Layers, color: "bg-gray-600" },
      { name: "SQL", icon: Layers, color: "bg-blue-400" },
      { name: "PostgreSQL", icon: Layers, color: "bg-indigo-600" },
      { name: "MongoDB", icon: Layers, color: "bg-green-500" },
      { name: "Redis", icon: Layers, color: "bg-red-700" },
      { name: "Docker", icon: Layers, color: "bg-sky-500" },
    ],
    concepts: [
      { concept: "API Design", description: "RESTful APIs, GraphQL, API versioning, authentication, and documentation." },
      { concept: "Database Designing", description: "Schema design, normalization, indexing, query optimization, and migrations." },
      { concept: "Microservices", description: "Service architecture, inter-service communication, containerization, orchestration." },
      { concept: "Authentication", description: "JWT, OAuth2, session management, role-based access control." },
    ],
  },
  "Frontend Development Skills": {
    tools: [
      { name: "HTML5", icon: BookOpen, color: "bg-orange-500" },
      { name: "CSS3", icon: BookOpen, color: "bg-blue-500" },
      { name: "JavaScript", icon: BookOpen, color: "bg-yellow-500" },
      { name: "React", icon: BookOpen, color: "bg-sky-400" },
      { name: "TypeScript", icon: BookOpen, color: "bg-blue-700" },
      { name: "Tailwind CSS", icon: BookOpen, color: "bg-teal-500" },
    ],
    concepts: [
      { concept: "Responsive Design", description: "Mobile-first approach, flexbox, grid, media queries for all screen sizes." },
      { concept: "State Management", description: "Redux, Context API, component state management and data flow." },
      { concept: "Performance", description: "Code splitting, lazy loading, optimization techniques, lighthouse scores." },
    ],
  },
};

const projectsData = [
  {
    type: "Machine Learning Project",
    name: "Autonomous RAG System",
    description: "Developed an open-source RAG framework that connects to various document stores and utilizes fine-tuned LLMs for complex querying.",
    tools: ["PyTorch", "Faiss", "LangChain", "Flask", "Docker"],
    github: "#",
    demo: "#",
    imagePlaceholder: "https://placehold.co/400x250/1f2937/ffffff?text=ML+Project+Screenshot",
  },
  {
    type: "Full Stack Project",
    name: "Dev Portfolio Builder",
    description: "A comprehensive SaaS application allowing developers to generate and host their portfolios instantly using modern React and Django REST Framework.",
    tools: ["React", "Django", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
    imagePlaceholder: "https://placehold.co/400x250/1f2937/ffffff?text=Full+Stack+Project+Screenshot",
  },
  {
    type: "Complex Engineering Project",
    name: "Real-Time Geo-Spatial Processor",
    description: "Engineered a high-throughput data processing pipeline using Redis streams and Python workers to process and visualize 1M+ geo-spatial events per second.",
    tools: ["Python", "Redis", "Kafka", "Go", "Docker Compose"],
    github: "#",
    demo: "#",
    imagePlaceholder: "https://placehold.co/400x250/1f2937/ffffff?text=Engineering+Project+Screenshot",
  },
];

const educationData = [
  {
    institution: "Massachusetts Institute of Technology (MIT)",
    link: "#",
    years: "2016 - 2020",
    degree: "B.Sc. in Computer Science (Artificial Intelligence)",
    description: [
      "GPA: 3.9/4.0",
      "Focused on advanced algorithms, deep learning, and parallel computing.",
      "Thesis: 'Optimizing Transformer Architectures for Low-Resource Languages'.",
    ],
    logoPlaceholder: "https://placehold.co/50x50/1f2937/ffffff?text=MIT",
  },
  {
    institution: "Local College Name",
    link: "#",
    years: "2014 - 2016",
    degree: "Higher Secondary School Certificate",
    description: [
      "Major: Science (Physics, Chemistry, Mathematics)",
      "Achieved top score in national examinations.",
    ],
    logoPlaceholder: "https://placehold.co/50x50/1f2937/ffffff?text=LHS",
  },
];

// --- Custom Components ---

// Component for the technology/tool boxes
const ToolBox = ({ name, color }) => (
  <span
    className={`px-3 py-1 text-xs font-medium rounded-full ${color} dark:bg-opacity-20 bg-opacity-80 dark:text-gray-100 text-gray-900 border ${color} dark:border-opacity-30 border-opacity-30`}
  >
    {name}
  </span>
);

// Component for the Project Card with Hover Effect
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundImage: isHovered ? `url(${project.imagePlaceholder})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <div
      className="p-6 border rounded-xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer group dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 bg-white hover:bg-gray-50 border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100 dark:text-gray-100 text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">{project.name}</h3>
          <div className="flex space-x-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:dark:text-white transition duration-200" title="GitHub Source">
              <Github size={20} />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:dark:text-white transition duration-200" title="Live Demo">
              <Zap size={20} />
            </a>
          </div>
        </div>
        <p className="mb-4 text-sm dark:text-gray-300 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <ToolBox key={index} name={tool} color="bg-teal-500" />
          ))}
        </div>
      </div>
      {isHovered && (
        <div className="flex items-center justify-center h-full w-full text-center text-white font-bold backdrop-blur-sm bg-black bg-opacity-40 rounded-xl p-4">
          <p>Project Visuals: Image Placeholder</p>
        </div>
      )}
    </div>
  );
};

// --- Page/Section Components ---

const HomeSection = () => (
  <div className="space-y-8">
    {/* Full Width Cover Photo Style */}
    <div
      className="w-full h-40 md:h-64 bg-cover bg-center rounded-lg shadow-xl"
      style={{ backgroundImage: `url(${personalData.coverPhotoUrl})` }}
    >
      {/* Placeholder Text for Cover Photo */}
      <div className="flex items-center justify-center h-full bg-black bg-opacity-30 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-shadow-lg">Nahid's Digital Forge</h1>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-start p-4 md:p-6 dark:bg-gray-900 bg-white rounded-xl shadow-lg border dark:border-gray-800 border-gray-200">
      {/* Left Side: Profile Picture */}
      <div className="shrink-0">
        <img
          src={personalData.profilePhotoUrl}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 dark:border-blue-400 border-blue-600 shadow-2xl transition duration-300 transform hover:scale-105"
        />
      </div>

      {/* Right Side: Introduction and Contact */}
      <div className="flex-grow space-y-3 pt-2">
        <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white text-gray-900">
          Hey — I'm <span className="dark:text-blue-400 text-blue-600">Nahid Hasan Saikot</span>
        </h2>
        <p className="text-xl dark:text-gray-300 text-gray-600 font-mono italic">{personalData.title}</p>

        {/* Contact/Coding Links */}
        <div className="pt-4 space-y-2 dark:text-gray-400 text-gray-700">
          <div className="flex items-center space-x-2">
            <Mail size={18} className="dark:text-blue-400 text-blue-600" />
            <a href={`mailto:${personalData.email}`} className="hover:underline transition duration-200">{personalData.email}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Github size={18} className="dark:text-blue-400 text-blue-600" />
            <a href={`https://${personalData.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline transition duration-200">{personalData.github}</a>
          </div>
          <div className="flex flex-wrap items-center space-x-4 pt-2 font-mono text-sm">
            {personalData.codingProfiles.map((profile, index) => (
              <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-500 transition duration-200">
                <profile.icon size={16} className="dark:text-blue-400 text-blue-600" />
                <span>{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InsightsSection = () => (
  <div className="p-6 md:p-10 dark:bg-gray-900 bg-white rounded-xl shadow-lg border dark:border-gray-800 border-gray-200 min-h-[70vh]">
    <h2 className="text-3xl font-bold mb-6 dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
      <BookOpen className="inline-block mr-2" size={24} />
      Full Profile Insights (Text Mode)
    </h2>
    <div
      className="prose dark:prose-invert max-w-none text-base leading-relaxed dark:text-gray-300 text-gray-700"
      dangerouslySetInnerHTML={{ __html: insightsText.replace(/\n/g, '<br>') }}
    />
  </div>
);

const ExperienceSection = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
      <Briefcase className="inline-block mr-2" size={24} />
      Professional Journey (LinkedIn-Style Tree)
    </h2>
    <div className="relative pl-6 md:pl-10">
      {/* Vertical Timeline Line */}
      <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 dark:bg-gray-700 bg-gray-300"></div>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-12 relative">
          {/* Timeline Dot */}
          <div className="absolute -left-3 md:-left-5 top-1 w-6 h-6 rounded-full dark:bg-blue-400 bg-blue-600 border-4 dark:border-gray-950 border-white z-10"></div>

          <div className="ml-6 md:ml-8 p-6 dark:bg-gray-900 bg-white rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] dark:border-gray-700 border border-gray-200">
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-200">
                {exp.company}
              </a>
            </h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 italic mb-2">{exp.years}</p>
            <p className="text-lg font-medium dark:text-blue-400 text-blue-600 mb-4">{exp.role}</p>

            <div className="mb-4">
              <p className="text-sm font-semibold dark:text-gray-300 text-gray-700 mb-2">Tools & Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono rounded-full dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-700 shadow-sm border dark:border-gray-700 border-gray-300 opacity-90">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-2 dark:text-gray-300 text-gray-700">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm">{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="space-y-12">
    <h2 className="text-3xl font-bold dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
      <Code className="inline-block mr-2" size={24} />
      Technical Arsenal
    </h2>

    {Object.entries(skillsData).map(([sectionTitle, data], index) => (
      <div key={index} className="space-y-6 p-6 dark:bg-gray-900 bg-white rounded-xl shadow-lg dark:border-gray-800 border border-gray-200">
        <h3 className="text-2xl font-bold dark:text-white text-gray-900 border-l-4 dark:border-blue-400 border-blue-600 pl-3">
          {sectionTitle}
        </h3>

        {/* Tool/Technology Boxes */}
        <div className="flex flex-wrap gap-3">
          {data.tools.map((tool, i) => (
            <div
              key={i}
              className={`flex items-center px-4 py-2 rounded-lg ${tool.color} dark:bg-opacity-30 bg-opacity-10 dark:text-white text-gray-900 border ${tool.color} border-opacity-30 transition duration-200 hover:shadow-lg hover:scale-[1.02]`}
            >
              <tool.icon size={16} className={`mr-2 ${tool.color.replace('bg-', 'text-')}`} />
              <span className="font-semibold text-sm">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Concept Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y dark:divide-gray-700 divide-gray-200">
            <thead className="dark:bg-gray-800 bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-300 text-gray-500 uppercase tracking-wider w-1/4 rounded-tl-lg">
                  Concept
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium dark:text-gray-300 text-gray-500 uppercase tracking-wider rounded-tr-lg">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-800 divide-gray-200">
              {data.concepts.map((concept, i) => (
                <tr key={i} className="dark:hover:bg-gray-800 hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold dark:text-blue-400 text-blue-600">
                    {concept.concept}
                  </td>
                  <td className="px-6 py-4 text-sm dark:text-gray-300 text-gray-700">
                    {concept.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

const ProjectsSection = () => {
  const machineLearningProjects = projectsData.filter(p => p.type === "Machine Learning Project");
  const fullStackProjects = projectsData.filter(p => p.type === "Full Stack Project");
  const complexEngineeringProjects = projectsData.filter(p => p.type === "Complex Engineering Project");

  const projectSubsections = [
    { title: "Machine Learning Projects", data: machineLearningProjects },
    { title: "Full Stack Projects", data: fullStackProjects },
    { title: "Complex Engineering Projects", data: complexEngineeringProjects },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
        <Layers className="inline-block mr-2" size={24} />
        Key Projects & Artifacts
      </h2>

      {projectSubsections.map((section, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-2xl font-bold dark:text-white text-gray-900 border-l-4 dark:border-teal-400 border-teal-600 pl-3">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.data.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const EducationSection = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
      <GraduationCap className="inline-block mr-2" size={24} />
      Academic Background (Tree View)
    </h2>

    <div className="relative pl-6 md:pl-10">
      {/* Vertical Timeline Line */}
      <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 dark:bg-gray-700 bg-gray-300"></div>

      {educationData.map((edu, index) => (
        <div key={index} className="mb-12 relative">
          {/* Timeline Dot */}
          <div className="absolute -left-3 md:-left-5 top-1 w-6 h-6 rounded-full dark:bg-green-400 bg-green-600 border-4 dark:border-gray-950 border-white z-10 flex items-center justify-center">
            {/* Placeholder for Logo/Icon */}
            <Users size={12} className="text-white"/>
          </div>

          <div className="ml-6 md:ml-8 p-6 dark:bg-gray-900 bg-white rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] dark:border-gray-700 border border-gray-200">
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
              <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 dark:hover:text-green-400 transition duration-200">
                {edu.institution}
              </a>
            </h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 italic mb-2">{edu.years}</p>
            <p className="text-lg font-medium dark:text-green-400 text-green-600 mb-4">{edu.degree}</p>

            <ul className="list-disc pl-5 space-y-2 dark:text-gray-300 text-gray-700">
              {edu.description.map((desc, i) => (
                <li key={i} className="text-sm">{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactSection = () => (
  <div className="p-6 md:p-10 dark:bg-gray-900 bg-white rounded-xl shadow-lg border dark:border-gray-800 border-gray-200">
    <h2 className="text-3xl font-bold mb-6 dark:text-blue-400 text-blue-600 border-b pb-2 dark:border-gray-700 border-gray-200">
      <Mail className="inline-block mr-2" size={24} />
      Get In Touch
    </h2>
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Type your message here..."
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
        onClick={(e) => {
          e.preventDefault();
          // Replace this with actual form submission logic (e.g., Firebase Cloud Function or EmailJS)
          alert("Form submitted! (Placeholder - Replace with real API endpoint)");
        }}
      >
        Send Message
      </button>
    </form>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode
  const [currentPage, setCurrentPage] = useState('Nahiiiiid');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#030712'; // Default dark black/blue background
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f9fafb'; // Default creamy white background
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = useMemo(() => [
    { name: 'Nahiiiiid', icon: Home, component: HomeSection },
    { name: 'Insights', icon: BookOpen, component: InsightsSection },
    { name: 'Experience', icon: Briefcase, component: ExperienceSection },
    { name: 'Skills', icon: Code, component: SkillsSection },
    { name: 'Projects', icon: Layers, component: ProjectsSection },
    { name: 'Education', icon: GraduationCap, component: EducationSection },
    { name: 'Contact', icon: Mail, component: ContactSection },
  ], []);

  const socialLinks = [
    { icon: Github, href: `https://${personalData.github}`, title: "GitHub" },
    { icon: Mail, href: `mailto:${personalData.email}`, title: "Email" },
    { icon: MessageCircle, href: `https://wa.me/${personalData.whatsapp.replace('+', '')}`, title: "WhatsApp" },
    { icon: Linkedin, href: personalData.linkedin, title: "LinkedIn" },
  ];

  const CurrentComponent = navItems.find(item => item.name === currentPage)?.component || HomeSection;

  return (
    <div className={`min-h-screen font-inter ${darkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-stone-50 text-gray-900'} transition-colors duration-500`}>
      {/* --- Minimalist Navbar --- */}
      <nav className="sticky top-0 z-50 w-full dark:bg-gray-950 bg-white dark:border-b-gray-800 border-b border-gray-200 shadow-xl dark:shadow-gray-900">
        <div className="flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Left Side: Name and Nav Icons */}
          <div className="flex items-center space-x-6">
            <h1
              className="text-2xl font-extrabold dark:text-blue-400 text-blue-600 cursor-pointer transition duration-200 hover:scale-105 hover:opacity-90"
              onClick={() => setCurrentPage('Nahiiiiid')}
            >
              nahiiiiid
            </h1>

            {/* Nav Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <button
                    className={`p-2 rounded-lg transition duration-300 text-sm font-medium flex items-center space-x-2 ${currentPage === item.name
                        ? 'dark:bg-blue-800 bg-blue-100 dark:text-white text-blue-600'
                        : 'dark:text-gray-400 text-gray-600 hover:dark:bg-gray-800 hover:bg-gray-100'
                      }`}
                    onClick={() => setCurrentPage(item.name)}
                    title={item.name}
                  >
                    <item.icon size={18} />
                    <span className="hidden xl:inline">{item.name}</span>
                  </button>
                  {index < navItems.length - 1 && (
                    <div className="h-6 w-px dark:bg-gray-700 bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Side: Social Icons and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition duration-200"
                  title={link.title}
                >
                  <link.icon size={20} />
                </a>
                {index < socialLinks.length - 1 && (
                  <div className="h-6 w-px dark:bg-gray-700 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}

            {/* Theme Toggle */}
            <div className="h-6 w-px dark:bg-gray-700 bg-gray-300 hidden md:block"></div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full dark:bg-gray-800 bg-gray-100 dark:text-yellow-300 text-orange-500 hover:scale-110 transition duration-300"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      {/* This container achieves the 20% left/right margin effect by limiting the max-width */}
      <main className="py-12 md:py-20 px-4 md:px-8 mx-auto w-full max-w-5xl">
        <CurrentComponent />
      </main>

      {/* --- Footer (Simple & Minimalist) --- */}
      <footer className="py-6 border-t dark:border-gray-800 border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto text-center text-sm dark:text-gray-500 text-gray-500">
          &copy; {new Date().getFullYear()} Nahid Hasan Saikot. Coded with <Code size={12} className="inline-block mx-1" /> and <Star size={12} className="inline-block mx-1 text-yellow-500" />.
        </div>
      </footer>
    </div>
  );
};

export default App;