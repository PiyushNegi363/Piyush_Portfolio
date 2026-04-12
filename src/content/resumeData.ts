export const resumeData = {
  name: 'Piyush Negi',
  summary: `BCA student with a strong foundation in Python and SQL, and hands-on experience in machine learning, NLP, and full-stack development. Interested in building efficient, reliable software and continuously improving problem-solving skills.`,
  contact: {
    phone: '+91 9258094042',
    email: 'pnegi3750@gmail.com',
    github: 'https://github.com/PiyushNegi363',
    linkedin: 'https://linkedin.com/in/piyush-negi-78903a379',
  },
  skills: [
    { name: 'Python', level: 90 },
    { name: 'SQL / MySQL', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'NLP', level: 75 },
    { name: 'Flask / Streamlit', level: 80 },
    { name: 'Pandas / NumPy', level: 85 },
    { name: 'Java', level: 70 },
    { name: 'Git / GitHub', level: 90 },
  ],
  skillGroups: [
    {
      category: 'Programming',
      items: ['Python', 'Java', 'C++'],
    },
    {
      category: 'Databases',
      items: ['MySQL (CRUD, Joins, Constraints)'],
    },
    {
      category: 'Core CS',
      items: ['Data Structures', 'OOP', 'Machine Learning', 'NLP'],
    },
    {
      category: 'Frameworks & Tools',
      items: ['Flask', 'Streamlit', 'Git', 'GitHub', 'VS Code'],
    },
    {
      category: 'Data & ML',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    },
  ],
  projects: [
    {
      title: 'ChatPulse Pro: WhatsApp Analyzer',
      year: '2025',
      tech: ['Streamlit', 'Plotly', 'Pandas', 'Regex'],
      demo: '#',
      repo: 'https://github.com/PiyushNegi363/WhatsApp--chat-analyzer',
      bullets: [
        'Developed a high-performance, privacy-first analytics dashboard using Streamlit and Plotly for deep message analysis.',
        'Engineered a robust preprocessing engine with regex-driven parsing, Unicode cleaning, and Hinglish stop-word filtering.',
        'Implemented advanced data visualizations including hourly activity heatmaps, sentiment word clouds, and engagement timelines.',
      ],
    },
    {
      title: 'Spam Email Classification System',
      year: '2024',
      tech: ['Python', 'NLP', 'Scikit-learn', 'Streamlit'],
      demo: '#',
      repo: 'https://github.com/PiyushNegi363',
      bullets: [
        'Developed an NLP-based spam detection system achieving 98% accuracy using TF-IDF and Logistic Regression.',
        'Built a Streamlit web interface for real-time and batch email classification.',
        'Enhanced model reliability using cross-validation and hyperparameter tuning.',
      ],
    },
    {
      title: 'Movie Recommendation System',
      year: '2024',
      tech: ['Python', 'Flask', 'NLP'],
      demo: '#',
      repo: 'https://github.com/PiyushNegi363',
      bullets: [
        'Implemented a content-based recommendation engine using cosine similarity on movie metadata.',
        'Integrated external APIs and sentiment analysis to improve recommendation relevance by 20%.',
        'Designed a Flask-based UI for smooth movie discovery.',
      ],
    },
    {
      title: 'Laptop Price Predictor',
      year: '2023',
      tech: ['Python', 'Regression', 'Pandas'],
      demo: '#',
      repo: 'https://github.com/PiyushNegi363',
      bullets: [
        'Built a regression model achieving an R2 score of 0.89.',
        'Performed feature engineering and visualized key pricing factors.',
        'Optimized model performance by handling outliers and missing values, improving prediction reliability.',
      ],
    },
  ],
  education: [
    {
      institution: 'Graphic Era Hill University Bhimtal, India',
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '2023 – 2026',
      detail: 'CGPA: 8.3 / 10',
    },
    {
      institution: 'Beersheba School (CBSE) India',
      degree: 'Class XII',
      period: '2022 – 2023',
      detail: null,
    },
  ],
  certifications: [
    'Python for Data Science – Udemy (2024)',
    'Machine Learning – CognitiveClass (2025)',
    'SQL and Relational Databases – CognitiveClass (2024)',
    'AI Fundamentals – Oracle Academy (2025)',
    'Introduction to C++ – Udemy (2023)',
    'Public Speaking – NPTEL (2023)',
  ],
  achievements: [
    'Participated in CodeCraft 2025, solving algorithmic and data-driven problems under time constraints.',
    'Developed a working prototype during Niruan Hackathon 2025 at Graphic Era Hill University, Haldwani.',
  ],
  testimonials: [
    {
      quote: 'Piyush demonstrates strong problem-solving skills and a keen interest in machine learning. His projects showcase practical application of theoretical concepts.',
      author: 'Faculty Mentor',
      role: 'Graphic Era Hill University',
    },
    {
      quote: 'A dedicated team player with excellent coding practices. Delivered a working prototype under tight deadlines during the hackathon.',
      author: 'Hackathon Team Lead',
      role: 'Niruan Hackathon 2025',
    },
  ],
} as const

export type ResumeData = typeof resumeData
