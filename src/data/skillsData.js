// 🧠 SkillQuest AI - Comprehensive Skill Mapping Dataset
// Maps skills → next skills, projects, and career paths

export const skillsData = {
  // 🐍 PYTHON ECOSYSTEM
  Python: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["Django", "FastAPI", "Machine Learning", "Data Science", "Pandas", "NumPy", "Flask", "Async Programming"],
    projects: [
      "Build a web scraper for real-time data",
      "Create a machine learning model for prediction",
      "Develop a REST API with FastAPI",
      "Build an automation tool for daily tasks",
      "Create a chatbot using NLP",
      "Develop a data analysis dashboard"
    ],
    careers: ["Backend Developer", "Data Scientist", "ML Engineer", "DevOps Engineer", "Automation Specialist", "Python Developer"],
    resources: [
      { name: "Python Tutorial by Corey Schafer (YouTube)", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" },
      { name: "Complete Python by Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=_uQrJ0TkSuc" },
      { name: "Python Official Docs", url: "https://docs.python.org/3/" },
      { name: "Real Python Tutorials", url: "https://realpython.com/" }
    ]
  },

  Django: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["REST APIs", "PostgreSQL", "Docker", "Celery", "Redis", "DRF", "Authentication"],
    projects: [
      "Build a content management system",
      "Create a real-time notification system",
      "Develop a multi-tenant SaaS platform",
      "Build an e-commerce backend",
      "Create a social network platform",
      "Build an admin dashboard"
    ],
    careers: ["Backend Developer", "Full-Stack Developer", "DevOps Engineer", "Django Specialist", "Software Engineer"],
    resources: [
      { name: "Django Official Documentation", url: "https://docs.djangoproject.com/" },
      { name: "Django for Beginners", url: "https://djangoforbeginners.com/" },
      { name: "Real Python Django Tutorials", url: "https://realpython.com/django/" },
      { name: "Udemy Django Course", url: "https://www.udemy.com/course/python-django-dev-to-deployment/" }
    ]
  },

  FastAPI: {
    nextSkills: ["Async Programming", "PostgreSQL", "GraphQL", "Testing", "Performance Optimization", "Docker", "Pydantic"],
    projects: [
      "Build a high-performance REST API",
      "Create a real-time API with WebSockets",
      "Develop a microservice architecture",
      "Build a machine learning model server",
      "Create an async job queue system",
      "Build a rate-limited API"
    ],
    careers: ["Backend Developer", "API Developer", "Performance Engineer", "Microservices Architect", "Senior Developer"],
    resources: [
      { name: "FastAPI Official Documentation", url: "https://fastapi.tiangolo.com/" },
      { name: "FastAPI Tutorial - YouTube by Traversy Media", url: "https://www.youtube.com/watch?v=7t2alSnE2-I" },
      { name: "Real Python FastAPI Tutorial", url: "https://realpython.com/fastapi-python-web-apis/" },
      { name: "FastAPI Full Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=SORiTsvnU28" }
    ]
  },

  Flask: {
    nextSkills: ["SQLAlchemy", "Jinja2", "SQLite", "Testing", "Blueprint Architecture"],
    projects: [
      "Build a simple blog platform",
      "Create a URL shortener service",
      "Develop a notes application",
      "Build a personal portfolio site",
      "Create a simple authentication system"
    ],
    careers: ["Web Developer", "Backend Developer", "Junior Developer", "Freelancer"],
    resources: [
      { name: "Flask Official Documentation", url: "https://flask.palletsprojects.com/" },
      { name: "Flask by Example - Real Python", url: "https://realpython.com/flask-by-example/" },
      { name: "Flask Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=Z1RJmh_OqeE" },
      { name: "freeCodeCamp Flask Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=dam0GPOAvVI" }
    ]
  },

  "Machine Learning": {
    nextSkills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "NLP", "Computer Vision", "Data Analysis"],
    projects: [
      "Build a recommendation system",
      "Create an image classification model",
      "Develop a sentiment analysis tool",
      "Build a predictive analytics model",
      "Create an anomaly detection system"
    ],
    careers: ["ML Engineer", "Data Scientist", "AI Engineer", "Research Scientist"],
    resources: [
      { name: "Machine Learning Mastery by Andrew Ng (Coursera)", url: "https://www.coursera.org/learn/machine-learning" },
      { name: "Scikit-learn Official Documentation", url: "https://scikit-learn.org/stable/" },
      { name: "Machine Learning Tutorial - StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDciUJ8KXExQE" },
      { name: "Real Python Machine Learning Tutorials", url: "https://realpython.com/learning-paths/machine-learning-python/" }
    ]
  },

  "Data Science": {
    nextSkills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Statistics", "Jupyter Notebooks"],
    projects: [
      "Analyze large datasets and create visualizations",
      "Build predictive models",
      "Create data pipelines",
      "Perform statistical analysis",
      "Build interactive dashboards"
    ],
    careers: ["Data Scientist", "Data Analyst", "Analytics Engineer", "Business Analyst"],
    resources: [
      { name: "Pandas Official Documentation", url: "https://pandas.pydata.org/docs/" },
      { name: "Data Science with Python - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=k092NroIjW0" },
      { name: "NumPy Tutorial - Real Python", url: "https://realpython.com/numpy-tutorial/" },
      { name: "Data Science Bootcamp - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" }
    ]
  },

  // 🌐 JAVASCRIPT ECOSYSTEM
  JavaScript: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["React", "Node.js", "TypeScript", "Vue.js", "CSS", "Web APIs", "Async/Await", "Express"],
    projects: [
      "Build an interactive web dashboard",
      "Create a real-time chat application",
      "Develop a todo app with local storage",
      "Build a weather app with live API",
      "Create a game using Canvas API",
      "Build a note-taking app"
    ],
    careers: ["Web Developer", "Full-Stack Developer", "Frontend Developer", "JavaScript Developer"],
    resources: [
      { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "JavaScript.info", url: "https://javascript.info/" },
      { name: "freeCodeCamp JavaScript Course", url: "https://www.youtube.com/watch?v=PkZYUXjMy9c" },
      { name: "Codecademy JavaScript", url: "https://www.codecademy.com/learn/learn-javascript" }
    ]
  },

  React: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["Redux", "Next.js", "React Router", "Hooks", "TypeScript", "Testing", "State Management"],
    projects: [
      "Build a social media dashboard",
      "Create an e-commerce product page",
      "Develop a project management tool",
      "Build a real-time notifications app",
      "Create a video streaming interface",
      "Build a complex form application"
    ],
    careers: ["Frontend Developer", "Full-Stack Developer", "React Developer", "Senior Developer"],
    resources: [
      { name: "React Tutorial by Scrimba (Interactive)", url: "https://scrimba.com/learn/learnreact" },
      { name: "Complete React Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
      { name: "React Official Documentation", url: "https://react.dev/" },
      { name: "freeCodeCamp React Full Course (YouTube)", url: "https://www.youtube.com/watch?v=bMknfKXIFdQ" }
    ]
  },

  Vue: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["Vuex", "Vue Router", "Nuxt.js", "Pinia", "TypeScript"],
    projects: [
      "Build an admin dashboard",
      "Create an interactive UI component library",
      "Develop a real-time collaboration tool",
      "Build a PWA application",
      "Create a single-page application"
    ],
    careers: ["Frontend Developer", "Vue Specialist", "Web Developer"],
    resources: [
      { name: "Vue.js Official Documentation", url: "https://vuejs.org/" },
      { name: "Vue Mastery - Vue 3 Composition API", url: "https://www.vuemastery.com/" },
      { name: "Vue Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=bzlqraOxWAY" },
      { name: "Vue 3 Full Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=bipirYhYjW8" }
    ]
  },

  Angular: {
    nextSkills: ["RxJS", "TypeScript", "Dependency Injection", "Testing", "Angular Material"],
    projects: [
      "Build enterprise web applications",
      "Create a large-scale SPA",
      "Develop a real-time dashboard",
      "Build a progressive web app",
      "Create a component library"
    ],
    careers: ["Frontend Developer", "Angular Developer", "Enterprise Developer"],
    resources: [
      { name: "Angular Official Documentation", url: "https://angular.io/docs" },
      { name: "Angular Course - Academind (YouTube)", url: "https://www.youtube.com/watch?v=k5E2AVpwsko" },
      { name: "Angular Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=3dHNOWTI7H8" },
      { name: "Angular University Tutorials", url: "https://angular-university.io/" }
    ]
  },

  "Node.js": {
    nextSkills: ["Express", "MongoDB", "PostgreSQL", "Async/Await", "REST APIs", "WebSockets"],
    projects: [
      "Build a REST API server",
      "Create a real-time chat server",
      "Develop a task scheduler",
      "Build a file upload service",
      "Create a notification system"
    ],
    careers: ["Backend Developer", "Full-Stack Developer", "Server-Side Developer", "API Developer"],
    resources: [
      { name: "Node.js Tutorial by Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      { name: "Complete Node.js Course by Andrew Mead (Udemy)", url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
      { name: "Node.js Official Documentation", url: "https://nodejs.org/docs/" },
      { name: "freeCodeCamp Node.js Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=RLtxwajqJ88" }
    ]
  },

  Express: {
    nextSkills: ["Middleware", "Authentication", "Database Integration", "Error Handling", "REST APIs"],
    projects: [
      "Build a robust REST API",
      "Create an authentication system",
      "Develop a blog platform API",
      "Build an e-commerce backend",
      "Create a microservice"
    ],
    careers: ["Backend Developer", "Full-Stack Developer", "API Architect"],
    resources: [
      { name: "Express.js Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=L72fhGm1tfE" },
      { name: "Express.js Crash Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=lY6IcUyc1TM" },
      { name: "Express.js Official Guide", url: "https://expressjs.com/" },
      { name: "REST API with Express & MongoDB (YouTube)", url: "https://www.youtube.com/watch?v=fgTGADljAe" }
    ]
  },

  TypeScript: {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["React", "Node.js", "NestJS", "GraphQL", "Testing", "Advanced OOP"],
    projects: [
      "Build a type-safe API client",
      "Create a full-stack TypeScript application",
      "Develop a CLI tool with strict typing",
      "Build a library with comprehensive types",
      "Create a game engine"
    ],
    careers: ["Full-Stack Developer", "Senior Developer", "Tech Lead", "Software Architect"],
    resources: [
      { name: "TypeScript Fundamentals by Corey Schafer (YouTube)", url: "https://www.youtube.com/watch?v=ZQbwEbBkNQw" },
      { name: "TypeScript Course by Academind (YouTube)", url: "https://www.youtube.com/playlist?list=PL1Nml43UBm6yrz-sRl9l6xKQdWfQtGVyC" },
      { name: "TypeScript Official Handbook", url: "https://www.typescriptlang.org/docs/" },
      { name: "Total TypeScript", url: "https://www.totaltypescript.com/" }
    ]
  },

  // 📱 MOBILE DEVELOPMENT
  "React Native": {
    nextSkills: ["Expo", "Redux", "Firebase", "Navigation", "Native Modules"],
    projects: [
      "Build a social media app",
      "Create a fitness tracking app",
      "Develop a note-taking app",
      "Build a weather app",
      "Create an e-commerce mobile app"
    ],
    careers: ["Mobile Developer", "Full-Stack Developer", "React Native Developer"],
    resources: [
      { name: "React Native Official Documentation", url: "https://reactnative.dev/docs/getting-started" },
      { name: "React Native Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=Htz6tMveIUc" },
      { name: "Expo Documentation & Tutorials", url: "https://docs.expo.dev/" },
      { name: "React Native Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=0kL6PsFGQ1g" }
    ]
  },

  Swift: {
    nextSkills: ["SwiftUI", "Combine", "CoreData", "Networking", "AppKit"],
    projects: [
      "Build an iOS game",
      "Create a productivity app",
      "Develop a photo editing app",
      "Build a music streaming app",
      "Create a fitness tracker"
    ],
    careers: ["iOS Developer", "Mobile Developer", "Apple Developer"],
    resources: [
      { name: "Swift Official Documentation", url: "https://www.swift.org/documentation/" },
      { name: "SwiftUI Tutorials - Apple", url: "https://developer.apple.com/tutorials/swiftui" },
      { name: "iOS Development - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=DdSnCUWOqwQ" },
      { name: "iOS App Development - Stanford (YouTube)", url: "https://www.youtube.com/playlist?list=PLpGHT1n4-mAsxuRxVPcZa3I91mp2IoDVe" }
    ]
  },

  Kotlin: {
    nextSkills: ["Android Studio", "Jetpack Compose", "Retrofit", "Room Database"],
    projects: [
      "Build an Android messaging app",
      "Create a task management app",
      "Develop a fitness tracking app",
      "Build a news reader app",
      "Create an e-commerce app"
    ],
    careers: ["Android Developer", "Mobile Developer", "Kotlin Developer"],
    resources: [
      { name: "Kotlin Official Documentation", url: "https://kotlinlang.org/docs/" },
      { name: "Android Development - Google Codelabs", url: "https://developer.android.com/codelabs" },
      { name: "Android Studio & Kotlin - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=5EZ1p1KV4FA" },
      { name: "Kotlin & Android Development - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=OMRKbJQ5f-8" }
    ]
  },

  // 🗄️ DATABASES
  SQL: {
    nextSkills: ["PostgreSQL", "Query Optimization", "Indexes", "Transactions", "Database Design"],
    projects: [
      "Design a complex database schema",
      "Build a data warehouse",
      "Create optimized queries",
      "Build a reporting system"
    ],
    careers: ["Database Engineer", "Data Analyst", "Backend Developer"],
    resources: [
      { name: "SQL Tutorial - W3Schools", url: "https://www.w3schools.com/sql/" },
      { name: "SQL Basics - Khan Academy", url: "https://www.khanacademy.org/computing/computer-programming/sql" },
      { name: "SQL Full Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=xiUTqnI6xk8" },
      { name: "SQL Masterclass - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }
    ]
  },

  PostgreSQL: {
    nextSkills: ["Advanced SQL", "Indexing", "Replication", "Performance Tuning", "JSON/Arrays"],
    projects: [
      "Build a production database",
      "Create a distributed database system",
      "Design a high-performance database",
      "Build real-time analytics"
    ],
    careers: ["Database Administrator", "Backend Developer", "Data Engineer"],
    resources: [
      { name: "PostgreSQL Official Documentation", url: "https://www.postgresql.org/docs/" },
      { name: "PostgreSQL Tutorial - Mode Analytics", url: "https://mode.com/sql-tutorial/" },
      { name: "PostgreSQL with Node.js - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=nzD4FCKnYOE" },
      { name: "Advanced PostgreSQL - YouTube Tutorials", url: "https://www.youtube.com/results?search_query=postgresql+advanced" }
    ]
  },

  MongoDB: {
    nextSkills: ["Aggregation", "Indexing", "Replication", "Sharding", "Atlas"],
    projects: [
      "Build a NoSQL application",
      "Create a real-time data app",
      "Develop a document-based system",
      "Build a flexible schema application"
    ],
    careers: ["Backend Developer", "Database Engineer", "Full-Stack Developer"],
    resources: [
      { name: "MongoDB Official Documentation", url: "https://docs.mongodb.com/" },
      { name: "MongoDB Basics - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=ofme2o7d0Is" },
      { name: "MongoDB Tutorial - Real Python", url: "https://realpython.com/introduction-to-mongodb-and-python/" },
      { name: "MongoDB Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=fbYExfeFsI0" }
    ]
  },

  Firebase: {
    nextSkills: ["Firestore", "Cloud Functions", "Cloud Storage", "Authentication", "Realtime Database"],
    projects: [
      "Build a chat application",
      "Create a collaborative document editor",
      "Develop a real-time todo app",
      "Build a social media app",
      "Create a live notification system"
    ],
    careers: ["Full-Stack Developer", "Mobile Developer", "Backend Developer"],
    resources: [
      { name: "Firebase Official Documentation", url: "https://firebase.google.com/docs" },
      { name: "Firebase Crash Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=2Vf1sUHHW1U" },
      { name: "Firebase & React Tutorial", url: "https://www.youtube.com/watch?v=9zdYaSPpWHI" },
      { name: "Firebase Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=RcYS1FgfRzc" }
    ]
  },

  Redis: {
    nextSkills: ["Caching Strategies", "Sessions", "Pub/Sub", "Clustering", "Performance Optimization"],
    projects: [
      "Build a high-performance cache layer",
      "Create a real-time leaderboard",
      "Develop a session management system",
      "Build a rate limiter"
    ],
    careers: ["Backend Developer", "DevOps Engineer", "Performance Engineer"],
    resources: [
      { name: "Redis Official Documentation", url: "https://redis.io/documentation" },
      { name: "Redis Tutorial - Real Python", url: "https://realpython.com/python-redis/" },
      { name: "Redis Basics - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=jgpVdJV2mKw" },
      { name: "Redis Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=XCsS_NVAa1g" }
    ]
  },

  // ☁️ DEVOPS & CLOUD
  Docker: {
    nextSkills: ["Kubernetes", "Container Orchestration", "Docker Compose", "CI/CD", "Docker Registry"],
    projects: [
      "Containerize an application",
      "Create a multi-container setup",
      "Build a deployment pipeline",
      "Create a development environment"
    ],
    careers: ["DevOps Engineer", "Infrastructure Engineer", "Backend Developer"],
    resources: [
      { name: "Docker Official Documentation", url: "https://docs.docker.com/" },
      { name: "Docker Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=3c-iBn73dRM" },
      { name: "Docker for Beginners - Real Python", url: "https://realpython.com/docker-in-action/" },
      { name: "Docker Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=9zUHg7xjIqQ" }
    ]
  },

  Kubernetes: {
    nextSkills: ["Helm", "Service Mesh", "Monitoring", "Scaling", "Container Security"],
    projects: [
      "Deploy applications to Kubernetes",
      "Build a microservices infrastructure",
      "Create auto-scaling pipelines",
      "Build a service mesh"
    ],
    careers: ["DevOps Engineer", "Platform Engineer", "Infrastructure Architect"],
    resources: [
      { name: "Kubernetes Official Documentation", url: "https://kubernetes.io/docs/" },
      { name: "Kubernetes Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=d6WC5n4G10M" },
      { name: "Kubernetes Basics - Linux Academy", url: "https://www.youtube.com/watch?v=6YGHDKJPj9M" },
      { name: "Kubernetes Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=d6WC5n4G10M" }
    ]
  },

  "AWS": {
    nextSkills: ["EC2", "S3", "Lambda", "RDS", "CloudFormation", "IAM"],
    projects: [
      "Deploy an application on AWS",
      "Build a serverless architecture",
      "Create a scalable infrastructure",
      "Build a disaster recovery system"
    ],
    careers: ["Cloud Architect", "DevOps Engineer", "Infrastructure Engineer"],
    resources: [
      { name: "AWS Official Documentation", url: "https://docs.aws.amazon.com/" },
      { name: "AWS Essentials - A Cloud Guru", url: "https://www.pluralsight.com/courses/aws-essentials" },
      { name: "AWS Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=1z3kDjHWbdE" },
      { name: "AWS Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=k1RI5locZE4" }
    ]
  },

  GCP: {
    nextSkills: ["Cloud Run", "BigQuery", "Cloud Storage", "Dataflow", "Cloud SQL"],
    projects: [
      "Deploy on Google Cloud",
      "Build a data pipeline",
      "Create a real-time analytics",
      "Build a serverless application"
    ],
    careers: ["Cloud Architect", "Data Engineer", "DevOps Engineer"],
    resources: [
      { name: "Google Cloud Documentation", url: "https://cloud.google.com/docs" },
      { name: "Google Cloud Essentials - Coursera", url: "https://www.coursera.org/learn/gcp-fundamentals" },
      { name: "Google Cloud Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=LNp8u7l2-Pg" },
      { name: "GCP Complete Guide - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=LNp8u7l2-Pg" }
    ]
  },

  // 🔍 FRONTEND TECHNOLOGIES
  "HTML/CSS": {
    nextSkills: ["JavaScript", "Responsive Design", "CSS Frameworks", "Web Standards"],
    projects: [
      "Build a responsive website",
      "Create a landing page",
      "Design a portfolio website",
      "Build a business website"
    ],
    careers: ["Frontend Developer", "Web Designer", "Junior Developer"],
    resources: [
      { name: "HTML & CSS - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { name: "HTML/CSS Tutorial - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=FQdaUv95-wM" },
      { name: "Responsive Web Design - Khan Academy", url: "https://www.khanacademy.org/computing/computer-programming/html-css" },
      { name: "HTML & CSS Crash Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=hu-q2zYwEYw" }
    ]
  },

  "CSS/SCSS": {
    nextSkills: ["CSS Grid", "Flexbox", "Animations", "Preprocessors", "Tailwind"],
    projects: [
      "Create complex layouts",
      "Build animated components",
      "Design a component system",
      "Create responsive designs"
    ],
    careers: ["Frontend Developer", "UI Developer", "CSS Specialist"],
    resources: [
      { name: "CSS Tricks & Tips", url: "https://css-tricks.com/" },
      { name: "CSS Grid & Flexbox - Kevin Powell (YouTube)", url: "https://www.youtube.com/watch?v=RSdS1QTnkno" },
      { name: "SCSS/Sass Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=Zz1zZfo5-PQ" },
      { name: "Advanced CSS - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=Er5K_nR5NPY" }
    ]
  },

  "Tailwind CSS": {
    nextSkills: ["Responsive Design", "Component Design", "Custom Config", "Performance"],
    projects: [
      "Build UI with Tailwind",
      "Create a design system",
      "Design landing pages",
      "Build a component library"
    ],
    careers: ["Frontend Developer", "UI Developer", "Full-Stack Developer"],
    resources: [
      { name: "Tailwind CSS Official Documentation", url: "https://tailwindcss.com/docs" },
      { name: "Tailwind CSS Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=bxmDnn7lrnY" },
      { name: "Tailwind CSS Course - Kevin Powell (YouTube)", url: "https://www.youtube.com/watch?v=lCxcTsOHrWw" },
      { name: "Tailwind CSS Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=ft30zcMlFbE" }
    ]
  },

  // 🧪 TESTING & QA
  "Testing": {
    nextSkills: ["Jest", "Cypress", "Unit Testing", "Integration Testing", "E2E Testing"],
    projects: [
      "Write comprehensive tests",
      "Build test automation",
      "Create testing framework",
      "Improve code coverage"
    ],
    careers: ["QA Engineer", "Test Automation Engineer", "Senior Developer"],
    resources: [
      { name: "Jest Official Documentation", url: "https://jestjs.io/docs/getting-started" },
      { name: "Testing JavaScript - Kent C. Dodds", url: "https://testingjavascript.com/" },
      { name: "Jest Testing - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=7r4xVZIrMZ8" },
      { name: "Testing Tutorial - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=HcOcsE0pX00" }
    ]
  },

  // 🛠️ TOOLS & SKILLS
  Git: {
    nextSkills: ["GitHub", "GitLab", "Version Control", "Branching Strategies"],
    projects: [
      "Manage project repositories",
      "Create branching workflows",
      "Build CI/CD pipelines"
    ],
    careers: ["Developer", "DevOps Engineer"],
    resources: [
      { name: "Git Official Documentation", url: "https://git-scm.com/doc" },
      { name: "Git Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { name: "Git & GitHub - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=tYKBAjMUe3k" },
      { name: "Atlassian Git Tutorials", url: "https://www.atlassian.com/git/tutorials" }
    ]
  },

  "API Development": {
    nextSkills: ["REST", "GraphQL", "WebSockets", "Documentation"],
    projects: [
      "Build a public API",
      "Create API documentation",
      "Develop a GraphQL server",
      "Build real-time APIs"
    ],
    careers: ["API Developer", "Backend Developer", "Full-Stack Developer"],
    resources: [
      { name: "RESTful API Design Best Practices", url: "https://restfulapi.net/" },
      { name: "API Design Tutorial - YouTube", url: "https://www.youtube.com/watch?v=bKpBOhJbEhk" },
      { name: "Building APIs - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=SLwpqD8n3d0" },
      { name: "API Security Guide", url: "https://owasp.org/www-project-api-security/" }
    ]
  },

  GraphQL: {
    nextSkills: ["Apollo", "Relay", "Schema Design", "Performance Optimization"],
    projects: [
      "Build a GraphQL server",
      "Create a data aggregation layer",
      "Build a real-time subscription system",
      "Develop a backend-for-frontend"
    ],
    careers: ["Backend Developer", "Full-Stack Developer", "API Architect"],
    resources: [
      { name: "GraphQL Official Documentation", url: "https://graphql.org/learn/" },
      { name: "Apollo GraphQL Tutorial", url: "https://www.apollographql.com/tutorials/" },
      { name: "GraphQL Crash Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=BcLNfwF04Ks" },
      { name: "GraphQL Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=ed8SzALpx1Q" }
    ]
  },

  // 🎨 DESIGN & UI/UX
  Figma: {
    nextSkills: ["UI Design", "Prototyping", "Design Systems", "Collaboration"],
    projects: [
      "Design a complete app interface",
      "Create a design system",
      "Build interactive prototypes",
      "Design a website"
    ],
    careers: ["UI/UX Designer", "Product Designer", "Design Lead"],
    resources: [
      { name: "Figma Official Tutorials", url: "https://www.figma.com/best-practices" },
      { name: "Figma Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=dXQ7IHkTiMM" },
      { name: "Figma Crash Course - Design Tutorials (YouTube)", url: "https://www.youtube.com/watch?v=p6bQFLAoed4" },
      { name: "Figma Masterclass - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=hCPJTUnI19U" }
    ]
  },

  // 🔐 SECURITY
  "Cybersecurity": {
    nextSkills: ["Penetration Testing", "Network Security", "Application Security", "Encryption"],
    projects: [
      "Conduct security audit",
      "Build secure authentication",
      "Implement encryption",
      "Create security best practices"
    ],
    careers: ["Security Engineer", "Pentester", "Security Architect"],
    resources: [
      { name: "OWASP Top 10 Security Guide", url: "https://owasp.org/www-project-top-ten/" },
      { name: "Cybersecurity Fundamentals - Google (Coursera)", url: "https://www.coursera.org/learn/cybersecurity-fundamentals" },
      { name: "Cybersecurity Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=jBYTt386kperiods" },
      { name: "Web Security Academy - PortSwigger", url: "https://portswigger.net/web-security" }
    ]
  },

  // 📊 DATA & ANALYTICS
  "Data Analysis": {
    nextSkills: ["Statistical Analysis", "Data Visualization", "Business Intelligence", "Reporting"],
    projects: [
      "Create data dashboards",
      "Perform trend analysis",
      "Build reports",
      "Create visualizations"
    ],
    careers: ["Data Analyst", "Business Analyst", "BI Developer"],
    resources: [
      { name: "Data Analysis with Pandas - Real Python", url: "https://realpython.com/learning-paths/data-science-python/" },
      { name: "Excel & Data Analysis - Coursera", url: "https://www.coursera.org/learn/data-analysis-fundamentals" },
      { name: "Data Analytics Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
      { name: "Google Data Analytics - Coursera", url: "https://www.coursera.org/professional-certificates/google-data-analytics" }
    ]
  },

  // ☕ JAVA ECOSYSTEM
  Java: {
    nextSkills: ["Spring Boot", "Hibernate", "Microservices", "Docker", "Kubernetes", "AWS"],
    projects: [
      "Build an e-commerce backend system",
      "Create a microservices application",
      "Develop a high-throughput API server",
      "Build a payment processing system",
      "Create a distributed cache system"
    ],
    careers: ["Backend Developer", "Enterprise Developer", "Cloud Architect", "DevOps Engineer"],
    resources: [
      { name: "Java Official Documentation", url: "https://docs.oracle.com/javase/" },
      { name: "Java Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=eIrMbAQS7C8" },
      { name: "Java Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=xk4_1vDrwcs" },
      { name: "Java Programming - Real Python", url: "https://www.codecademy.com/learn/learn-java" }
    ]
  },

  "Spring Boot": {
    nextSkills: ["Spring Cloud", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Microservices"],
    projects: [
      "Build a banking system",
      "Create a marketplace platform",
      "Develop a video streaming backend",
      "Build a supply chain management system",
      "Create a real-time notification service"
    ],
    careers: ["Backend Developer", "Enterprise Architect", "Microservices Developer"],
    resources: [
      { name: "Spring Boot Official Documentation", url: "https://spring.io/projects/spring-boot" },
      { name: "Spring Boot Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=9SGDpanrc8U" },
      { name: "Spring Boot Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=9SGDpanrc8U" },
      { name: "Baeldung Spring Boot Tutorials", url: "https://www.baeldung.com/spring-boot" }
    ]
  },

  // 🧠 AI/ML ECOSYSTEM
  "Deep Learning": {
    nextSkills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "GANs", "Reinforcement Learning"],
    projects: [
      "Build a neural network from scratch",
      "Create a generative AI model",
      "Develop an object detection system",
      "Build a language model",
      "Create a reinforcement learning agent"
    ],
    careers: ["AI Engineer", "Research Scientist", "ML Engineer", "Autonomous Systems Developer"],
    resources: [
      { name: "Deep Learning Specialization - Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
      { name: "TensorFlow Official Tutorials", url: "https://www.tensorflow.org/tutorials" },
      { name: "Deep Learning Course (YouTube)", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" }
    ]
  },

  // 📊 DATABASE SKILLS
  "SQL": {
    nextSkills: ["PostgreSQL", "MongoDB", "Database Design", "Optimization", "ETL", "Data Warehousing"],
    projects: [
      "Design a relational database for e-commerce",
      "Create complex queries for analytics",
      "Build a data pipeline for ETL",
      "Develop a reporting system",
      "Optimize database performance"
    ],
    careers: ["Database Administrator", "Data Engineer", "Backend Developer", "Data Analyst"],
    resources: [
      { name: "SQL Tutorial - W3Schools", url: "https://www.w3schools.com/sql/" },
      { name: "SQL Basics - Khan Academy", url: "https://www.khanacademy.org/computing/computer-programming/sql" },
      { name: "SQL Complete Course - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { name: "Advanced SQL - Mode Analytics", url: "https://mode.com/sql-tutorial/" }
    ]
  },

  "MongoDB": {
    nextSkills: ["NoSQL Design", "Aggregation Pipeline", "Replication", "Sharding", "Full-text Search"],
    projects: [
      "Build a scalable content management system",
      "Create a real-time analytics platform",
      "Develop a social network database",
      "Build a document storage system",
      "Create a time-series data collection"
    ],
    careers: ["Backend Developer", "Data Engineer", "Database Specialist", "DevOps Engineer"],
    resources: [
      { name: "MongoDB Official Documentation", url: "https://docs.mongodb.com/" },
      { name: "MongoDB Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=4yqu8YF29D0" },
      { name: "MongoDB Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=fbYExfeFsI0" },
      { name: "MongoDB University", url: "https://university.mongodb.com/" }
    ]
  },

  "PostgreSQL": {
    nextSkills: ["Advanced SQL", "JSONB", "Window Functions", "Optimization", "Replication", "Backups"],
    projects: [
      "Build an analytics database",
      "Create a financial trading system",
      "Develop a real-time dashboard",
      "Build a complex reporting system",
      "Create a multi-tenant application"
    ],
    careers: ["Database Administrator", "Backend Developer", "Data Engineer", "DevOps Engineer"],
    resources: [
      { name: "PostgreSQL Official Documentation", url: "https://www.postgresql.org/docs/" },
      { name: "PostgreSQL Tutorial - Real Python", url: "https://realpython.com/intro-to-postgres/" },
      { name: "PostgreSQL Complete Course (YouTube)", url: "https://www.youtube.com/watch?v=qw--VYLvj8c" },
      { name: "PostgreSQL Tutorials - Tutorialspoint", url: "https://www.tutorialspoint.com/postgresql/index.htm" }
    ]
  },

  "Web Development": {
    proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    nextSkills: ["React", "Node.js", "TypeScript", "Databases", "CSS", "APIs", "Performance"],
    projects: [
      "Build a responsive website",
      "Create a full-stack web app",
      "Develop a SaaS platform",
      "Build a real-time web application",
      "Create a mobile-responsive design"
    ],
    careers: ["Full-Stack Developer", "Frontend Developer", "Web Developer", "Senior Developer"],
    resources: [
      { name: "The Odin Project - Full Stack", url: "https://www.theodinproject.com/" },
      { name: "Web Development Full Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=zJSY8NsKSVg" },
      { name: "MDN Web Docs - Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { name: "Web Development Bootcamp - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
    ]
  },

  // 📚 DEPRECATED - Use first React entry above
  // React (removed duplicate - see line 140 for complete React with all resources)

  "Next.js": {
    nextSkills: ["TypeScript", "TailwindCSS", "PostgreSQL", "Vercel", "API Routes", "Authentication"],
    projects: [
      "Build a production-ready blog with SSR",
      "Create an e-commerce platform",
      "Develop a SaaS application",
      "Build a static site generator",
      "Create a real-time dashboard"
    ],
    careers: ["Full-Stack Developer", "Frontend Specialist", "Startup CTO", "Freelancer"]
  },

  "Express.js": {
    nextSkills: ["Middleware", "MongoDB", "PostgreSQL", "Authentication", "API Security", "Testing"],
    projects: [
      "Build a RESTful API with authentication",
      "Create a chat server with WebSockets",
      "Develop a payment processing API",
      "Build a real-time analytics platform",
      "Create an email service"
    ],
    careers: ["Backend Developer", "API Developer", "Full-Stack Developer"]
  },

  // ☕ JAVA ECOSYSTEM
  Java: {
    nextSkills: ["Spring Boot", "Hibernate", "Microservices", "Docker", "Kubernetes", "AWS"],
    projects: [
      "Build an e-commerce backend system",
      "Create a microservices application",
      "Develop a high-throughput API server",
      "Build a payment processing system",
      "Create a distributed cache system"
    ],
    careers: ["Backend Developer", "Enterprise Developer", "Cloud Architect", "DevOps Engineer"]
  },

  "Spring Boot": {
    nextSkills: ["Spring Cloud", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Microservices"],
    projects: [
      "Build a banking system",
      "Create a marketplace platform",
      "Develop a video streaming backend",
      "Build a supply chain management system",
      "Create a real-time notification service"
    ],
    careers: ["Backend Developer", "Enterprise Architect", "Microservices Developer"]
  },

  // 🧠 AI/ML ECOSYSTEM
  "Machine Learning": {
    nextSkills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning", "Scikit-learn"],
    projects: [
      "Build an image recognition model",
      "Create a recommendation system",
      "Develop a sentiment analysis tool",
      "Build a time-series forecasting model",
      "Create a chatbot with ML"
    ],
    careers: ["ML Engineer", "Data Scientist", "AI Engineer", "Research Scientist"]
  },

  "Deep Learning": {
    nextSkills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "GANs", "Reinforcement Learning"],
    projects: [
      "Build a neural network from scratch",
      "Create a generative AI model",
      "Develop an object detection system",
      "Build a language model",
      "Create a reinforcement learning agent"
    ],
    careers: ["AI Engineer", "Research Scientist", "ML Engineer", "Autonomous Systems Developer"]
  },

  "Data Science": {
    nextSkills: ["Machine Learning", "Statistics", "Data Visualization", "SQL", "Big Data", "Tableau"],
    projects: [
      "Analyze COVID-19 trends dataset",
      "Build a customer churn prediction model",
      "Create a market analysis report",
      "Develop a data visualization dashboard",
      "Build hypothesis testing framework"
    ],
    careers: ["Data Scientist", "Analytics Engineer", "Business Analyst", "Data Engineer"]
  },

  // 📊 DATABASE SKILLS
  SQL: {
    nextSkills: ["PostgreSQL", "MongoDB", "Database Design", "Optimization", "ETL", "Data Warehousing"],
    projects: [
      "Design a relational database for e-commerce",
      "Create complex queries for analytics",
      "Build a data pipeline for ETL",
      "Develop a reporting system",
      "Optimize database performance"
    ],
    careers: ["Database Administrator", "Data Engineer", "Backend Developer", "Data Analyst"]
  },

  MongoDB: {
    nextSkills: ["NoSQL Design", "Aggregation Pipeline", "Replication", "Sharding", "Full-text Search"],
    projects: [
      "Build a scalable content management system",
      "Create a real-time analytics platform",
      "Develop a social network database",
      "Build a document storage system",
      "Create a time-series data collection"
    ],
    careers: ["Backend Developer", "Data Engineer", "Database Specialist", "DevOps Engineer"]
  },

  PostgreSQL: {
    nextSkills: ["Advanced SQL", "JSONB", "Window Functions", "Optimization", "Replication", "Backups"],
    projects: [
      "Build an analytics database",
      "Create a financial trading system",
      "Develop a real-time dashboard",
      "Build a complex reporting system",
      "Create a multi-tenant application"
    ],
    careers: ["Database Administrator", "Backend Developer", "Data Engineer", "DevOps Engineer"]
  },

  // 🐳 DEVOPS & INFRASTRUCTURE - CI/CD (moved earlier)
  "CI/CD": {
    nextSkills: ["GitHub Actions", "Jenkins", "GitLab CI", "Docker", "Testing Automation", "Deployment"],
    projects: [
      "Set up end-to-end CI/CD pipeline",
      "Create automated testing workflows",
      "Build automated deployment system",
      "Create blue-green deployment setup",
      "Build canary release pipeline"
    ],
    careers: ["DevOps Engineer", "Release Engineer", "Platform Engineer", "Infrastructure Engineer"],
    resources: [
      { name: "GitHub Actions Official Documentation", url: "https://docs.github.com/en/actions" },
      { name: "CI/CD with GitHub Actions - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
      { name: "Jenkins Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=pMO26j2Oski" },
      { name: "CI/CD Best Practices - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=scEDHM3RrV8" }
    ]
  },

  // 🎨 DESIGN SKILLS
  "UI Design": {
    nextSkills: ["UX Design", "Figma", "Design Systems", "Prototyping", "Accessibility", "CSS"],
    projects: [
      "Create a complete design system",
      "Design a SaaS dashboard",
      "Build interactive UI prototypes",
      "Design a mobile app interface",
      "Create animation-heavy designs"
    ],
    careers: ["UI Designer", "Product Designer", "Design System Designer", "Interaction Designer"],
    resources: [
      { name: "UI Design Principles - Interaction Design Foundation", url: "https://www.interaction-design.org/courses" },
      { name: "UI Design Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=WD0xvqH4K0w" },
      { name: "UI/UX Design Fundamentals - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { name: "Nielsen Norman Group UX Articles", url: "https://www.nngroup.com/articles/" }
    ]
  },

  "UX Design": {
    nextSkills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Analytics", "Psychology"],
    projects: [
      "Conduct user research study",
      "Create comprehensive user personas",
      "Design an entire user journey",
      "Build accessibility audit report",
      "Create a design sprint project"
    ],
    careers: ["UX Designer", "Product Designer", "Research Designer", "Design Lead"],
    resources: [
      { name: "UX Design Fundamentals - Interaction Design Foundation", url: "https://www.interaction-design.org/courses/ux-design" },
      { name: "UX Research Guide - Nielsen Norman Group", url: "https://www.nngroup.com/reports/" },
      { name: "UX Design Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=eZJVlE2falling" },
      { name: "Don Norman: Design of Everyday Things (Book/Course)", url: "https://www.nngroup.com/books/design-everyday-things-revised/" }
    ]
  },

  // 🔐 SECURITY & AUTHENTICATION
  OAuth: {
    nextSkills: ["JWT", "Session Management", "2FA", "Security Best Practices", "HTTPS", "CORS"],
    projects: [
      "Implement OAuth 2.0 authentication",
      "Build a single sign-on (SSO) system",
      "Create multi-factor authentication",
      "Build a secure token management system",
      "Implement role-based access control"
    ],
    careers: ["Security Engineer", "Backend Developer", "DevOps Engineer", "Architect"],
    resources: [
      { name: "OAuth 2.0 Official Specification", url: "https://oauth.net/2/" },
      { name: "OAuth 2.0 Tutorial - Digital Ocean", url: "https://www.digitalocean.com/community/tutorials" },
      { name: "Auth0 - Authentication & Authorization Platform", url: "https://auth0.com/learn" },
      { name: "OAuth Implementation Guide (YouTube)", url: "https://www.youtube.com/results?search_query=oauth+2.0+tutorial" }
    ]
  },

  Flutter: {
    nextSkills: ["Dart Advanced", "State Management", "Firebase", "Native Plugins", "Performance"],
    projects: [
      "Build a weather app",
      "Create a todo list app",
      "Develop a banking app",
      "Build a gaming app",
      "Create a real-time collaboration tool"
    ],
    careers: ["Mobile Developer", "Flutter Specialist", "Cross-platform Developer"],
    resources: [
      { name: "Flutter Official Documentation", url: "https://flutter.dev/docs" },
      { name: "Flutter Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=1ukSR1GRtMU" },
      { name: "Dart Programming - Official Tutorial", url: "https://dart.dev/guides" },
      { name: "Flutter Complete Course - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=wgTBLj7rNQY" }
    ]
  },

  // 📈 TESTING & QUALITY
  Cypress: {
    nextSkills: ["Test Automation", "E2E Testing", "JavaScript", "CI/CD Integration", "Debugging"],
    projects: [
      "Build E2E test automation",
      "Create comprehensive test suite",
      "Develop CI/CD testing pipeline",
      "Build test reporting system",
      "Create accessibility testing"
    ],
    careers: ["QA Engineer", "Test Automation Engineer", "Senior Developer"],
    resources: [
      { name: "Cypress Official Documentation", url: "https://docs.cypress.io/" },
      { name: "Cypress E2E Testing - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=7N63cMKosIE" },
      { name: "End-to-End Testing with Cypress - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=1c8RUXvB7g0" },
      { name: "Cypress Best Practices Guide", url: "https://docs.cypress.io/guides/references/best-practices" }
    ]
  },

  Jest: {
    nextSkills: ["Testing", "React Testing", "Mocking", "Code Coverage", "CI/CD Integration"],
    projects: [
      "Write unit tests for React components",
      "Build comprehensive test suite",
      "Create test coverage reports",
      "Develop mock implementations",
      "Build testing CI/CD pipeline"
    ],
    careers: ["Frontend Developer", "QA Engineer", "Test Automation Engineer", "Senior Developer"],
    resources: [
      { name: "Jest Official Documentation", url: "https://jestjs.io/docs/getting-started" },
      { name: "Jest Testing Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=7r4xVZIrMZ8" },
      { name: "Testing JavaScript - Kent C. Dodds", url: "https://testingjavascript.com/" },
      { name: "Jest Complete Guide - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=eCeAEQtHL0c" }
    ]
  },

  // 🔄 ADDITIONAL POPULAR SKILLS
  RESTful: {
    nextSkills: ["GraphQL", "API Security", "Documentation", "Versioning", "Rate Limiting"],
    projects: [
      "Design a comprehensive REST API",
      "Create API documentation",
      "Build API versioning system",
      "Develop rate limiting solution",
      "Create API client libraries"
    ],
    careers: ["API Developer", "Backend Developer", "Full-Stack Developer"],
    resources: [
      { name: "RESTful API Design - restfulapi.net", url: "https://restfulapi.net/" },
      { name: "REST API Best Practices", url: "https://restfulapi.net/best-practices/" },
      { name: "Building REST APIs - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=0oXYLzuucwE" },
      { name: "REST API Design Tutorial - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=bKpBOhJbEhk" }
    ]
  },

  "Git/GitHub": {
    nextSkills: ["CI/CD", "DevOps", "Code Review", "Branching Strategies", "Open Source"],
    projects: [
      "Contribute to open source projects",
      "Manage a collaborative repository",
      "Set up GitHub Actions workflows",
      "Create a contribution guide",
      "Build a project management workflow"
    ],
    careers: ["Developer", "DevOps Engineer", "Tech Lead", "Open Source Maintainer"],
    resources: [
      { name: "GitHub Official Documentation", url: "https://docs.github.com/" },
      { name: "GitHub Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=CXkZ3BWosSM" },
      { name: "Git Complete Guide - freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=tYKBAjMUe3k" },
      { name: "GitHub Flow Guide", url: "https://guides.github.com/introduction/flow/" }
    ]
  },

  "System Design": {
    nextSkills: ["Microservices", "Scalability", "Database Design", "Caching", "Message Queues"],
    projects: [
      "Design a Twitter-like system",
      "Create a YouTube-like video platform",
      "Design an Uber-like system",
      "Build a real-time notification system",
      "Design a distributed cache system"
    ],
    careers: ["Architect", "Senior Developer", "Tech Lead", "Staff Engineer", "Solutions Architect"],
    resources: [
      { name: "System Design Interview - Educative", url: "https://www.educative.io/courses/grokking-the-system-design-interview" },
      { name: "System Design Primer - GitHub", url: "https://github.com/donnemartin/system-design-primer" },
      { name: "System Design Fundamentals (YouTube)", url: "https://www.youtube.com/playlist?list=PLkQkbY7JNJuBoSOXUC9MKoUxIlJ4CP1ze" },
      { name: "Alex Xu System Design Course", url: "https://bytebytego.com/" }
    ]
  },

  Microservices: {
    nextSkills: ["Docker", "Kubernetes", "API Gateway", "Message Queues", "Service Mesh"],
    projects: [
      "Design microservices architecture",
      "Build a distributed order system",
      "Create service-to-service communication",
      "Build an API gateway",
      "Create inter-service authentication"
    ],
    careers: ["Microservices Architect", "Backend Developer", "DevOps Engineer"],
    resources: [
      { name: "Building Microservices - Sam Newman (Book)", url: "https://samnewman.io/books/building_microservices/" },
      { name: "Microservices Tutorial - Traversy Media (YouTube)", url: "https://www.youtube.com/watch?v=lTAmatVxqy0" },
      { name: "Microservices Architecture (YouTube)", url: "https://www.youtube.com/watch?v=CdBtNQZH8a0" },
      { name: "Martin Fowler on Microservices", url: "https://martinfowler.com/articles/microservices.html" }
    ]
  },

  // 🎨 NON-CODING TECH SKILLS
  "UI/UX Design": {
    nextSkills: ["Figma", "User Research", "Prototyping", "Interaction Design", "Design Systems"],
    projects: [
      "Design a complete mobile app interface",
      "Create a responsive website design",
      "Build an interactive prototype",
      "Design an admin dashboard",
      "Create a design system documentation"
    ],
    careers: ["UI/UX Designer", "Product Designer", "Design Lead", "UX Researcher"]
  },

  "Product Management": {
    nextSkills: ["User Research", "Product Strategy", "Analytics", "Roadmap Planning", "Stakeholder Management"],
    projects: [
      "Create a product roadmap for 6 months",
      "Write detailed product requirements documents",
      "Conduct user interviews and create personas",
      "Build a product launch strategy",
      "Create a competitive analysis report"
    ],
    careers: ["Product Manager", "Senior Product Manager", "Director of Product", "Startup Founder"],
    resources: [
      { name: "Product Management Fundamentals - Reforge", url: "https://www.reforge.com/learn/product-management" },
      { name: "Inspired: How to Create Products Customers Love (Book)", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" },
      { name: "Product School - PM Essentials (YouTube)", url: "https://www.youtube.com/watch?v=b3Eqkb0aDqQ" },
      { name: "Mind the Product - Product Management Resources", url: "https://www.mindtheproduct.com/" }
    ]
  },

  "Digital Marketing": {
    nextSkills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Analytics"],
    projects: [
      "Build a content calendar for 3 months",
      "Create a social media marketing campaign",
      "Design an email marketing sequence",
      "Develop a customer acquisition strategy",
      "Build a marketing analytics dashboard"
    ],
    careers: ["Digital Marketer", "Marketing Manager", "Growth Manager", "CMO"],
    resources: [
      { name: "Digital Marketing Course - Google (Coursera)", url: "https://www.coursera.org/learn/digital-marketing-global" },
      { name: "Hubspot Digital Marketing Certification", url: "https://academy.hubspot.com/courses/digital-marketing" },
      { name: "Digital Marketing Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=jzBFfcfPF-A" },
      { name: "Neil Patel Digital Marketing Guide", url: "https://neilpatel.com/blog/" }
    ]
  },

  SEO: {
    nextSkills: ["Content Marketing", "Technical SEO", "Link Building", "Keyword Research", "Analytics"],
    projects: [
      "Conduct comprehensive SEO audit",
      "Create optimized content strategy",
      "Build internal linking structure",
      "Design backlink acquisition plan",
      "Create SEO tracking dashboard"
    ],
    careers: ["SEO Specialist", "Content Marketer", "Digital Marketer", "Growth Manager"],
    resources: [
      { name: "Complete SEO Course - Udemy", url: "https://www.udemy.com/course/seo-training-complete/" },
      { name: "Moz SEO Learning Center", url: "https://moz.com/learn/seo" },
      { name: "SEO Tutorial - Neil Patel (YouTube)", url: "https://www.youtube.com/watch?v=JHzagU8aqOY" },
      { name: "Google Search Central - SEO Guide", url: "https://developers.google.com/search" }
    ]
  },

  "Content Strategy": {
    nextSkills: ["Copywriting", "Video Production", "Social Media", "Editorial Calendar", "Analytics"],
    projects: [
      "Create annual content calendar",
      "Write and publish 20 blog posts",
      "Develop brand voice guidelines",
      "Create content repurposing strategy",
      "Build content performance dashboard"
    ],
    careers: ["Content Strategist", "Content Manager", "Marketing Manager", "Communications Manager"],
    resources: [
      { name: "Content Strategy Course - Coursera", url: "https://www.coursera.org/learn/content-strategy" },
      { name: "Content Marketing Institute Resources", url: "https://contentmarketinginstitute.com/" },
      { name: "Content Strategy Fundamentals (YouTube)", url: "https://www.youtube.com/watch?v=5-Aa3J_YRfI" },
      { name: "Copyblogger Content Strategy Guide", url: "https://www.copyblogger.com/" }
    ]
  },

  "Technical Writing": {
    nextSkills: ["API Documentation", "User Guides", "Content Management", "Markdown", "Technical Communication"],
    projects: [
      "Write comprehensive API documentation",
      "Create user onboarding guides",
      "Develop troubleshooting documentation",
      "Build knowledge base for SaaS product",
      "Create technical tutorials and videos"
    ],
    careers: ["Technical Writer", "Documentation Manager", "Developer Advocate", "Technical Editor"],
    resources: [
      { name: "Technical Writing Course - Google (Coursera)", url: "https://www.coursera.org/learn/technical-writing" },
      { name: "Write the Docs Community", url: "https://www.writethedocs.org/" },
      { name: "Technical Writing Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=ECrNpzLMSbk" },
      { name: "Divio Technical Writing Guidelines", url: "https://documentation.divio.com/" }
    ]
  },

  "Project Management": {
    nextSkills: ["Agile", "Scrum", "Kanban", "Risk Management", "Stakeholder Communication"],
    projects: [
      "Manage a software development project",
      "Coordinate cross-functional team",
      "Create project timelines and budgets",
      "Lead sprint planning and retrospectives",
      "Build project dashboard and reporting"
    ],
    careers: ["Project Manager", "Scrum Master", "Program Manager", "Delivery Lead"],
    resources: [
      { name: "Project Management Fundamentals - PMI", url: "https://www.pmi.org/learning" },
      { name: "Scrum Guide - Scrum.org", url: "https://www.scrum.org/resources/scrum-guide" },
      { name: "Project Management Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=owSbqulI4Yo" },
      { name: "Coursera Project Management Course", url: "https://www.coursera.org/learn/project-management" }
    ]
  },

  "Data Analytics": {
    nextSkills: ["Business Intelligence", "Tableau", "Google Analytics", "Excel", "SQL Basics"],
    projects: [
      "Build marketing analytics dashboard",
      "Create product usage analytics",
      "Develop sales forecasting model",
      "Build customer retention analysis",
      "Create KPI tracking system"
    ],
    careers: ["Data Analyst", "Business Analyst", "Analytics Manager", "Insights Manager"],
    resources: [
      { name: "Google Analytics Certification", url: "https://analytics.google.com/analytics/academy/" },
      { name: "Data Analytics Course - Coursera", url: "https://www.coursera.org/learn/data-analytics" },
      { name: "Tableau Learning Dashboard", url: "https://www.tableau.com/learn" },
      { name: "Analytics Vidhya Tutorials", url: "https://www.analyticsvidhya.com/" }
    ]
  },

  "Business Analysis": {
    nextSkills: ["Requirements Gathering", "Process Mapping", "Data Analytics", "Documentation", "Stakeholder Management"],
    projects: [
      "Conduct process improvement analysis",
      "Create requirements documentation",
      "Perform gap analysis and assessment",
      "Design process flow diagrams",
      "Build business case presentations"
    ],
    careers: ["Business Analyst", "Systems Analyst", "Operations Manager", "Process Consultant"],
    resources: [
      { name: "Business Analysis Training - IIBA", url: "https://www.iiba.org/learning" },
      { name: "Business Analysis Course - Udemy", url: "https://www.udemy.com/course/business-analyst-training/" },
      { name: "Business Analysis Fundamentals (YouTube)", url: "https://www.youtube.com/watch?v=RxqPMJ2q6K0" },
      { name: "Coursera Business Analysis Course", url: "https://www.coursera.org/learn/business-analysis" }
    ]
  },

  "Social Media Management": {
    nextSkills: ["Content Creation", "Community Management", "Analytics", "Video Editing", "Influencer Relations"],
    projects: [
      "Manage social media presence across 5 platforms",
      "Create monthly content calendar",
      "Build community engagement strategy",
      "Design social media ad campaigns",
      "Create social media analytics reports"
    ],
    careers: ["Social Media Manager", "Community Manager", "Content Creator", "Social Media Strategist"],
    resources: [
      { name: "Hootsuite Social Media Certification", url: "https://hootsuite.com/platform/academy" },
      { name: "Social Media Strategy - Coursera", url: "https://www.coursera.org/learn/social-media-marketing" },
      { name: "Social Media Management Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=8dHMf_8qhYQ" },
      { name: "Sprout Social Resources", url: "https://sproutsocial.com/learn/" }
    ]
  },

  "Community Management": {
    nextSkills: ["Customer Support", "Engagement Strategy", "Content Moderation", "Analytics", "Events"],
    projects: [
      "Build active online community",
      "Create community guidelines and culture",
      "Organize virtual community events",
      "Develop member engagement programs",
      "Create community feedback system"
    ],
    careers: ["Community Manager", "Customer Success Manager", "Community Lead", "Engagement Manager"],
    resources: [
      { name: "Community Manager Handbook - CMX", url: "https://cmxresearch.com/" },
      { name: "Community Management Course - Coursera", url: "https://www.coursera.org/learn/community-management" },
      { name: "Community Management Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=M3-TGSGaPbU" },
      { name: "Building Engaged Communities - CircleCI", url: "https://circleci.com/blog/" }
    ]
  },

  "Growth Hacking": {
    nextSkills: ["Analytics", "Experimentation", "Product Marketing", "Viral Marketing", "Conversion Optimization"],
    projects: [
      "Run A/B testing experiments",
      "Create viral growth strategy",
      "Build referral program",
      "Optimize conversion funnels",
      "Create growth metrics dashboard"
    ],
    careers: ["Growth Manager", "Growth Hacker", "Marketing Manager", "Product Manager"],
    resources: [
      { name: "Traction by Gabriel Weinberg (Book)", url: "https://gabrielweinberg.com/traction/" },
      { name: "Growth Hacking Course - Reforge", url: "https://www.reforge.com/learn/growth-marketing" },
      { name: "Growth Hacking Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=XKmEzJmFNL0" },
      { name: "Andrew Chen - Growth Blog", url: "https://andrewchen.com/" }
    ]
  },

  "Copywriting": {
    nextSkills: ["Email Marketing", "Sales Pages", "Ad Copywriting", "SEO Writing", "Brand Voice"],
    projects: [
      "Write compelling email campaigns",
      "Create high-converting landing pages",
      "Write product descriptions and headlines",
      "Create social media copy calendar",
      "Write persuasive sales letters"
    ],
    careers: ["Copywriter", "Content Marketer", "Marketing Manager", "Freelance Writer"],
    resources: [
      { name: "Copyblogger Copywriting Courses", url: "https://www.copyblogger.com/copywriting-course/" },
      { name: "Copywriting Fundamentals - Coursera", url: "https://www.coursera.org/learn/copywriting" },
      { name: "Copywriting Masters (YouTube)", url: "https://www.youtube.com/watch?v=pM6Wa_2IWzI" },
      { name: "Swipe File - Copywriting Examples", url: "https://www.swipefile.com/" }
    ]
  },

  "User Research": {
    nextSkills: ["User Interviews", "Usability Testing", "Analytics", "Personas", "Journey Mapping"],
    projects: [
      "Conduct 20 user interviews",
      "Create detailed user personas",
      "Perform usability testing sessions",
      "Build user journey maps",
      "Create research reports and insights"
    ],
    careers: ["UX Researcher", "Product Manager", "Design Lead", "Insights Manager"],
    resources: [
      { name: "User Research Fundamentals - Nielsen Norman Group", url: "https://www.nngroup.com/courses/user-research/" },
      { name: "User Research Course - Coursera", url: "https://www.coursera.org/learn/user-research" },
      { name: "Erica Hall - Qualitative User Research (YouTube)", url: "https://www.youtube.com/watch?v=Q2a40YJBH4M" },
      { name: "Dovetail UX Research Platform", url: "https://dovetailapp.com/research/" }
    ]
  },

  "Brand Management": {
    nextSkills: ["Brand Strategy", "Visual Identity", "Messaging", "Brand Guidelines", "Market Positioning"],
    projects: [
      "Develop comprehensive brand guidelines",
      "Create brand identity and visual system",
      "Build brand positioning statement",
      "Design brand messaging framework",
      "Create brand style guide"
    ],
    careers: ["Brand Manager", "Brand Strategist", "CMO", "Brand Director"],
    resources: [
      { name: "Brand Management Course - Coursera", url: "https://www.coursera.org/learn/brand-management" },
      { name: "Marty Neumeier - Brand Gap (Book)", url: "https://www.martineumeier.com/books/" },
      { name: "Brand Management Fundamentals (YouTube)", url: "https://www.youtube.com/watch?v=bXLuW2m9c4g" },
      { name: "Branding Guide - Interaction Design Foundation", url: "https://www.interaction-design.org/courses/branding" }
    ]
  },

  "Customer Success": {
    nextSkills: ["Account Management", "Customer Support", "Analytics", "Sales Enablement", "Onboarding"],
    projects: [
      "Build customer onboarding program",
      "Create customer success playbook",
      "Develop account management strategy",
      "Build customer health dashboard",
      "Create customer training materials"
    ],
    careers: ["Customer Success Manager", "Account Manager", "Customer Advocate", "Success Lead"],
    resources: [
      { name: "Customer Success Course - Coursera", url: "https://www.coursera.org/learn/customer-success" },
      { name: "Gainsight - CS Resources", url: "https://www.gainsight.com/cs-resources/" },
      { name: "Customer Success Fundamentals (YouTube)", url: "https://www.youtube.com/watch?v=Cc_mN0cxbqU" },
      { name: "Qualaroo Customer Experience Guide", url: "https://www.qualaroo.com/" }
    ]
  },

  "Marketing Analytics": {
    nextSkills: ["Data Analysis", "Business Intelligence", "Attribution Modeling", "Reporting", "Excel/Python"],
    projects: [
      "Build marketing attribution model",
      "Create campaign performance dashboard",
      "Analyze customer acquisition costs",
      "Build marketing ROI reports",
      "Create customer journey analytics"
    ],
    careers: ["Marketing Analyst", "Analytics Manager", "Data Analyst", "Marketing Manager"],
    resources: [
      { name: "Marketing Analytics - Google Analytics Academy", url: "https://analytics.google.com/analytics/academy/" },
      { name: "Marketing Analytics Course - Coursera", url: "https://www.coursera.org/learn/marketing-analytics" },
      { name: "Advanced Analytics for Marketing (YouTube)", url: "https://www.youtube.com/watch?v=eZpzN6yegbI" },
      { name: "Mixpanel Analytics Guide", url: "https://mixpanel.com/blog/" }
    ]
  },

  "Event Management": {
    nextSkills: ["Project Management", "Marketing", "Community Building", "Sponsorship", "Logistics"],
    projects: [
      "Organize a virtual conference",
      "Plan a product launch event",
      "Coordinate sponsorship partnerships",
      "Build event marketing campaign",
      "Create attendee experience plan"
    ],
    resources: [
      { name: "Event Management Course - Coursera", url: "https://www.coursera.org/learn/event-management" },
      { name: "Eventbrite Event Planning Guide", url: "https://www.eventbrite.com/blog/" },
      { name: "Event Management Fundamentals (YouTube)", url: "https://www.youtube.com/watch?v=5hnxGROvvbY" },
      { name: "Professional Convention Management Association", url: "https://www.pcma.org/" }
    ],
    careers: ["Event Manager", "Program Manager", "Marketing Manager", "Producer"]
  }
};