import React, { useState } from 'react';

// Define the Job interface
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[]; // Array of requirements
  responsibilities: string[]; // Array of responsibilities
}

// Hardcoded job data
const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description: "Develop and maintain user-friendly web applications using modern frontend technologies.",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with React or Vue.js",
      "Strong understanding of responsive design",
    ],
    responsibilities: [
      "Develop and maintain user interfaces",
      "Collaborate with backend developers",
      "Optimize applications for performance",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description: "Build scalable and efficient backend systems for web and mobile applications.",
    requirements: [
      "Proficiency in Node.js or Python",
      "Experience with databases like MySQL or MongoDB",
      "Knowledge of RESTful APIs",
    ],
    responsibilities: [
      "Design and implement backend systems",
      "Ensure system security and data protection",
      "Collaborate with frontend developers",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Innovate Tech",
    location: "Lagos",
    salary: "₦500,000",
    description: "Work on both frontend and backend development to deliver end-to-end solutions.",
    requirements: [
      "Proficiency in both frontend and backend technologies",
      "Experience with React and Node.js",
      "Knowledge of version control systems like Git",
    ],
    responsibilities: [
      "Develop full-stack applications",
      "Debug and resolve issues across the stack",
      "Collaborate with cross-functional teams",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Remote",
    salary: "₦350,000",
    description: "Design intuitive and visually appealing user interfaces for web and mobile apps.",
    requirements: [
      "Proficiency in design tools like Figma or Sketch",
      "Strong understanding of UI/UX principles",
      "Experience with prototyping and wireframing",
    ],
    responsibilities: [
      "Create user-centered designs",
      "Collaborate with developers to implement designs",
      "Conduct user research and testing",
    ],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Abuja",
    salary: "₦450,000",
    description: "Manage and optimize cloud infrastructure for seamless deployment and scaling.",
    requirements: [
      "Experience with cloud platforms like AWS or Azure",
      "Knowledge of CI/CD pipelines",
      "Proficiency in scripting languages like Bash or Python",
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Automate deployment processes",
      "Monitor system performance and reliability",
    ],
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Analytics Corp",
    location: "Remote",
    salary: "₦550,000",
    description: "Analyze large datasets to extract insights and build predictive models.",
    requirements: [
      "Proficiency in Python or R",
      "Experience with machine learning frameworks",
      "Strong understanding of statistics and data analysis",
    ],
    responsibilities: [
      "Analyze and interpret complex datasets",
      "Build and deploy machine learning models",
      "Collaborate with stakeholders to solve business problems",
    ],
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Port Harcourt",
    salary: "₦400,000",
    description: "Develop innovative mobile applications for iOS and Android platforms.",
    requirements: [
      "Proficiency in Flutter, React Native, or Swift",
      "Experience with RESTful APIs and Git",
      "Strong understanding of mobile UI/UX principles",
    ],
    responsibilities: [
      "Develop and maintain mobile apps",
      "Optimize app performance",
      "Debug and resolve app issues",
    ],
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: " Lagos",
    salary: "₦600,000",
    description: "Define product vision, strategy, and roadmap to deliver high-quality products.",
    requirements: [
      "Proven experience as a Product Manager",
      "Familiarity with Agile methodologies and tools like Jira",
      "Strong communication and analytical skills",
    ],
    responsibilities: [
      "Define product vision and roadmap",
      "Collaborate with cross-functional teams",
      "Monitor product performance and feedback",
    ],
  },
  {
    id: 9,
    title: "Full Stack Developer",
    company: "Xend Finance",
    location: "Enugu",
    salary: "₦550,000",
    description: "Develop and maintain both frontend and backend components of web applications",
    requirements: [
      "Proficiency in HTML, CSS, JavaScript, and React",
      "Strong backend skills with Node.js or Python",
      "Experience with databases like MySQL or MongoDB",
    ],
    responsibilities: [
      "Develop full-stack applications",
      "Optimize applications for speed and scalability",
      "Debug and resolve issues across the stack",
    ],
  },
  {
    id: 10,
    title: "Cloud Engineer",
    company: "SkyNet",
    location: "Abuja",
    salary: "₦700,000",
    description: "Design and implement scalable and secure cloud solutions",
    requirements: [
      "Extensive experience with AWS, Azure, or Google Cloud",
      "Proficiency in Terraform or CloudFormation",
      "Strong knowledge of networking and security",
    ],
    responsibilities: [
      "Design and implement cloud solutions",
      "Optimize cloud costs and performance",
      "Ensure compliance with security standards",
    ],
  },
  {
    id: 11,
    title: "DevOps Engineer",
    company: "Cloudify",
    location: "Remote",
    salary: "₦450,000",
    description: "Manage and optimize cloud infrastructure for seamless deployment and scaling.",
    requirements: [
    "Experience with cloud platforms like AWS, Azure, or Google Cloud.",
    "Proficiency in CI/CD tools like Jenkins, GitLab CI, or CircleCI.",
    "Strong knowledge of containerization tools like Docker and orchestration tools like Kubernetes.",
    ],
    responsibilities: [
    "Manage and optimize cloud infrastructure for scalability and reliability.",
    "Automate deployment and monitoring processes.",
    "Collaborate with development and operations teams to ensure seamless integration.",
    ],
  },
];


const JobCard: React.FC<Job & { theme: string; showDetails: boolean }> = ({
  id,
  title,
  company,
  location,
  salary,
  description,
  requirements,
  responsibilities,
  theme,
  showDetails,
}) => {
  const cardStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
    marginBottom: '10px',
    color: theme === 'dark' ? '#fff' : '#000',
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0', fontSize: '18px' }}>{title}</h3>
      <p style={{ margin: '5px 0', color: theme === 'dark' ? '#ccc' : '#666' }}>{company} - {location}</p>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{salary}</p>
      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Job ID:</strong> {id}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Requirements:</strong></p>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <p><strong>Responsibilities:</strong></p>
          <ul>
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showDetails, setShowDetails] = useState(false); 

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };


  const appStyle = {
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh',
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <div style={appStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Job Listings</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by job title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '50%', 
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
            fontFamily: "'Lato', sans-serif",
          }}
        />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === 'dark' ? '#555' : '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <button
          onClick={toggleShowDetails}
          style={{
            backgroundColor: theme === 'dark' ? '#555' : '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            description={job.description}
            requirements={job.requirements}
            responsibilities={job.responsibilities}
            theme={theme}
            showDetails={showDetails}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center', color: theme === 'dark' ? '#ccc' : '#666' }}>No jobs found.</p>
      )}
    </div>
  );
};

export default App;
