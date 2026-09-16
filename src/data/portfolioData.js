export const portfolioData = {
  personal: {
    name: "Sachin Pal",
    nickname: "Sachin",
    roles: [
      "Database / SQL Engineer",
      "SQL Developer",
      "Data Engineer",
      "Query Optimization Specialist"
    ],
    tagline: "Building secure, high-throughput data systems — from complex SQL query optimization to AI-driven database security research.",
    location: "Ambarnath, Mumbai, India",
    education: {
      degree: "Master of Computer Applications (MCA)",
      institution: "Bharati Vidyapeeth's Institute of Management and Information Technology (BVIMIT)",
      location: "Navi Mumbai, India",
      duration: "2025 – 2027",
      status: "Pursuing"
    },
    bio: "MCA student (2025–2027) at Bharati Vidyapeeth's Institute of Management and Information Technology, Navi Mumbai. Strategically pivoted from Java/DSA foundations into deep SQL-first specialization and high-performance database engineering. Targeting SQL Developer, Junior DBA, PL-SQL Developer, and Data Engineer roles at product companies and banking/fintech firms.",
    profileImage: "/sachin-hoodie.png",
    suitImage: "/sachin-suit.png",
    resumeUrl: "/resume.pdf",
  },

  socialLinks: {
    github: "https://github.com/sachinkumar2304",
    linkedin: "https://www.linkedin.com", // Placeholder - swap easily
    instagram: "https://www.instagram.com", // Placeholder - swap easily
    email: "mailto:sachinpal2304@gmail.com", // Placeholder mailto - swap easily
    displayEmail: "sachinpal2304@gmail.com",
  },

  stats: [
    { label: "Core Projects", value: "05", helper: "Production & Research" },
    { label: "SQL Queries Solved", value: "50+", helper: "CTEs & Window Functions" },
    { label: "SIH 2025", value: "Winner", helper: "VaaniPath Project" },
    { label: "Query Speedup", value: "10x", helper: "Index & Cost Optimization" },
  ],

  skills: [
    {
      id: "sql-server",
      name: "SQL Server / SSMS",
      category: "Databases & SQL",
      level: "Advanced",
      description: "Index tuning, query optimization & stored procedures.",
      iconName: "SqlServer",
      accent: "#CC292B",
      highlight: true
    },
    {
      id: "window-ctes",
      name: "Window Functions & CTEs",
      category: "Databases & SQL",
      level: "Advanced",
      description: "Recursive CTEs, ranking partitions & analytical queries.",
      iconName: "SqlQuery",
      accent: "#0078D4",
      highlight: true
    },
    {
      id: "python",
      name: "Python",
      category: "Backend & Tools",
      level: "Proficient",
      description: "ETL automation, data pipelines & DB connectors.",
      iconName: "Python",
      accent: "#3776AB",
      highlight: true
    },
    {
      id: "power-bi",
      name: "Power BI",
      category: "Databases & SQL",
      level: "Intermediate",
      description: "Executive dashboards, DAX queries & data modeling.",
      iconName: "PowerBi",
      accent: "#F2C811",
      highlight: false
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "Backend & Tools",
      level: "Proficient",
      description: "High-performance async APIs & connection pooling.",
      iconName: "FastApi",
      accent: "#05998B",
      highlight: false
    },
    {
      id: "supabase",
      name: "Supabase",
      category: "Databases & SQL",
      level: "Intermediate",
      description: "PostgreSQL cloud backend, RLS & real-time DB.",
      iconName: "Supabase",
      accent: "#3ECF8E",
      highlight: false
    },
    {
      id: "n8n",
      name: "n8n (Automation)",
      category: "Backend & Tools",
      level: "Intermediate",
      description: "Workflow automation, webhooks & automated pipelines.",
      iconName: "N8n",
      accent: "#EA4B71",
      highlight: false
    },
    {
      id: "react-vite",
      name: "React + Vite",
      category: "Backend & Tools",
      level: "Intermediate",
      description: "Component dashboards, state management & UI.",
      iconName: "React",
      accent: "#61DAFB",
      highlight: false
    },
    {
      id: "indicbert-codebert",
      name: "IndicBERT / CodeBERT",
      category: "AI & NLP",
      level: "Specialized",
      description: "Transformer models & code representation NLP.",
      iconName: "HuggingFace",
      accent: "#FFD21E",
      highlight: true
    },
    {
      id: "gitpython-treesitter",
      name: "GitPython / Tree-sitter",
      category: "AI & NLP",
      level: "Specialized",
      description: "AST parsing & repository grammar analytics.",
      iconName: "TreeSitter",
      accent: "#4EAA25",
      highlight: false
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      category: "Backend & Tools",
      level: "Proficient",
      description: "Version control, branching workflows & CI/CD.",
      iconName: "Git",
      accent: "#F05032",
      highlight: false
    },
    {
      id: "java",
      name: "Java (Foundational)",
      category: "Backend & Tools",
      level: "Basic",
      description: "OOP foundations & core data structures.",
      iconName: "Java",
      accent: "#E76F00",
      highlight: false
    },
    {
      id: "excel",
      name: "Excel / Power Query",
      category: "Databases & SQL",
      level: "Advanced",
      description: "Pivot tables, Power Query M, XLOOKUP & data modeling.",
      iconName: "Excel",
      accent: "#217346",
      highlight: false
    },
    {
      id: "pandas",
      name: "Pandas",
      category: "Backend & Tools",
      level: "Proficient",
      description: "DataFrame transformations, groupby aggregations & EDA.",
      iconName: "Pandas",
      accent: "#150458",
      highlight: false
    },
    {
      id: "databricks",
      name: "Databricks",
      category: "Databases & SQL",
      level: "Intermediate",
      description: "Spark SQL notebooks, Delta Lake & unified analytics.",
      iconName: "Databricks",
      accent: "#FF3621",
      highlight: false
    }
  ],

  projects: [
    {
      id: "finpulse",
      order: 1,
      title: "FinPulse — BNPL Analytics Platform",
      oneLiner: "Simulated Buy-Now-Pay-Later platform — Python ETL pipeline, Supabase/PostgreSQL, 500K+ records, 38 SQL analysis queries, 5-page Power BI dashboard.",
      problemStatement: "BNPL fintech providers struggle to detect credit risk spikes, delayed merchant settlements, and user repayment drop-offs across millions of unlinked transactions.",
      solutionStatement: "Engineered an end-to-end analytics pipeline using Python ETL to ingest 500K+ simulated records into PostgreSQL/Supabase, writing 38 advanced analytical SQL queries (CTEs, window functions) and visualizing risk patterns on a 5-page interactive Power BI executive dashboard.",
      tags: ["Python", "Supabase", "PostgreSQL", "SQL", "Power BI"],
      expandedTags: ["Python", "Supabase", "PostgreSQL", "SQL Server", "Power BI", "ETL Pipeline", "Data Modeling", "DAX"],
      cardImage: "/finpulse.jpg",
      previewImage: "/finpulse.jpg",
      repoUrl: "https://github.com/sachinkumar2304/FinePulse---BNPL",
      badge: null,
      fullDetails: [
        "Synthetic BNPL engine generating 500K+ high-volume transaction records",
        "38 advanced analytical SQL queries using window functions and CTEs",
        "Automated Python ETL pipeline syncing into PostgreSQL database",
        "Interactive 5-page Power BI executive dashboard with DAX metrics"
      ]
    },
    {
      id: "vaanipath",
      order: 2,
      title: "VaaniPath",
      oneLiner: "Smart India Hackathon 2025 winning project.",
      problemStatement: "Millions of regional citizens cannot access digital public services due to complex text-heavy UI interfaces and English/Hindi-only language barriers.",
      solutionStatement: "Built a multilingual voice-first accessibility platform that translates spoken vernacular queries into actionable service requests in real time using high-performance FastAPI microservices and speech-to-intent routing — awarded Winner at SIH 2025.",
      tags: ["SIH 2025", "Winner"],
      expandedTags: ["SIH 2025", "Winner", "Voice AI", "Multilingual", "FastAPI", "Speech-to-Text", "Accessibility"],
      cardImage: "/vaanipath.jpg",
      previewImage: "/vaanipath.jpg",
      repoUrl: "https://github.com/sachinkumar2304/vaanipath/tree/master/project-1",
      badge: "SIH_WINNER",
      fullDetails: [
        "Grand Finale Winner at Smart India Hackathon (SIH 2025)",
        "Voice-driven interactive platform bridging regional language barriers",
        "Real-time multilingual speech-to-text with contextual query routing",
        "High-performance FastAPI microservices with low-latency responses"
      ]
    },
    {
      id: "snackify",
      order: 3,
      title: "Snackify — Food Ordering Web App",
      oneLiner: "Modern full-stack food ordering platform with dynamic menu catalog, real-time cart state, and responsive multi-outlet ordering.",
      problemStatement: "Local food businesses need quick, interactive, and reliable web ordering portals without expensive intermediary aggregator commissions.",
      solutionStatement: "Built a responsive food ordering web application with categorized delicacies, location-based outlet selection, dynamic cart management, and seamless modern UI deployed on Vercel.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      expandedTags: ["React", "JavaScript", "Tailwind CSS", "Web App", "Cart System", "Vercel", "REST API"],
      cardImage: "/snackify.png",
      previewImage: "/snackify.png",
      repoUrl: "https://github.com/sachinkumar2304/Cafe_project",
      badge: null,
      fullDetails: [
        "Interactive culinary menu catalog featuring categorized regional snacks & delicacies",
        "Real-time cart state management with instant checkout calculations",
        "Multi-location outlet selector tailored for quick local delivery",
        "Mobile-first responsive architecture deployed live on Vercel"
      ]
    },
    {
      id: "codedarpan",
      order: 4,
      title: "CodeDarpan",
      oneLiner: "Codebase analysis platform with Tree-sitter parsing and GitPython integration.",
      problemStatement: "Evaluating codebase health, structural complexity, and contributor commit patterns manually across large repositories is slow and error-prone.",
      solutionStatement: "Developed an automated repository intelligence engine using Tree-sitter AST syntax parsing to extract language grammars and GitPython to analyze commit velocity, file churn, and architectural technical debt.",
      tags: ["Tree-sitter", "GitPython", "Python"],
      expandedTags: ["Tree-sitter", "GitPython", "Python", "AST Grammar", "Code Metrics", "Repo Analytics"],
      cardImage: "/codedarpan.png",
      previewImage: "/codedarpan.png",
      repoUrl: "https://github.com/sachinkumar2304/CodeDarpan",
      badge: null,
      fullDetails: [
        "Deep AST syntax parsing powered by Tree-sitter language grammars",
        "GitPython integration for commit history and churn analytics",
        "Automated code complexity scoring and architectural dependency mapping",
        "Modular CLI and API interface for automated repository auditing"
      ]
    },
    {
      id: "eye-keyboard",
      order: 5,
      title: "Eye-Tracking Virtual Keyboard",
      oneLiner: "Hands-free virtual keyboard using webcam eye/blink tracking — OpenCV, MediaPipe, nose-controlled cursor.",
      problemStatement: "Individuals with severe motor impairments or paralysis cannot operate physical keyboards or traditional touch screen devices.",
      solutionStatement: "Created an affordable, camera-only assistive typing system using MediaPipe face mesh for 468-point facial landmarking, nose orientation for cursor positioning, blink duration heuristics for keystrokes, and text-to-speech feedback.",
      tags: ["OpenCV", "MediaPipe", "Python", "Computer Vision"],
      expandedTags: ["OpenCV", "MediaPipe", "Python", "Computer Vision", "Face Mesh", "Assistive Tech", "TTS"],
      cardImage: "/eye-keyboard.png",
      previewImage: "/eye-keyboard.png",
      repoUrl: "https://github.com/sachinkumar2304/eye_detector_project",
      badge: null,
      fullDetails: [
        "MediaPipe 468-point face mesh for precision eye-gaze tracking",
        "Adaptive blink detection algorithm for touch-free keystroke triggers",
        "Nose-controlled smooth virtual cursor for seamless typing",
        "Integrated text-to-speech audio feedback for assistive typing"
      ]
    }
  ],

  journeyPivot: {
    title: "The Strategic Pivot: Java/DSA to SQL-First Engineering",
    description: "While building foundations in Java and Data Structures & Algorithms, Sachin realized that modern software performance bottlenecks rarely exist in standard algorithmic loops — they live in poorly designed database schemas, un-indexed queries, and inefficient data retrieval layers. By pivoting to database-first engineering, Sachin focuses on where modern data systems truly scale or fail.",
    bulletPoints: [
      "Deep specialization in SQL Server, SSMS, query cost analysis, and execution plan profiling",
      "Mastery of recursive & non-recursive CTEs and complex analytical window functions",
      "Building end-to-end data pipelines with Python ETL, Supabase, and Power BI dashboards",
      "Bridging the gap between raw data storage and actionable executive business intelligence"
    ]
  }
};
