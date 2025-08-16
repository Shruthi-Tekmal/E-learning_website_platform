// Sample course data with detailed descriptions and links
/*const courses = [
    {
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming in various languages.',
      detail: `
        <h3>Introduction to Programming</h3>
        <p>Learn the fundamentals of programming. Topics covered include variables, loops, functions, and object-oriented programming principles.</p>
        <p>This course is perfect for beginners and those who want to learn the basics of programming in different languages like Python, Java, and C++.</p>
      `,
      link: "https://www.example.com/introduction-to-programming", // Link for external course details
      id: 1
    },
    {
      title: 'Web Development Bootcamp',
      description: 'A comprehensive guide to building modern web applications.',
      detail: `
        <h3>Web Development Bootcamp</h3>
        <p>Master HTML, CSS, JavaScript, and modern frameworks like React, Node.js, and Express.js. Learn how to build full-stack web applications.</p>
        <p>By the end of the course, you will be able to create fully functional websites and web applications from scratch.</p>
      `,
      link: "https://www.example.com/web-development-bootcamp", // Link for external course details
      id: 2
    },
    {
      title: 'Data Science with Python',
      description: 'Learn Python for data science and machine learning.',
      detail: `
        <h3>Data Science with Python</h3>
        <p>This course teaches Python for data analysis, visualization, and machine learning. You will work with libraries like Pandas, Matplotlib, Scikit-learn, and more.</p>
        <p>By the end of the course, you will have built data science projects and models for real-world applications.</p>
      `,
      link: "https://www.example.com/data-science-with-python", // Link for external course details
      id: 3
    }
  ];
  
  // Elements
  const homeSection = document.getElementById('home');
  const coursesSection = document.getElementById('courses');
  const courseListDiv = document.getElementById('course-list');
  const courseDetailSection = document.getElementById('course-detail');
  const courseDetailContent = document.getElementById('course-detail-content');
  const backHomeButton = document.getElementById('back-home-btn');
  const viewCoursesButton = document.getElementById('view-courses-btn');
  const backToCoursesButton = document.getElementById('back-to-courses-btn');
  
  // Function to display courses
  function displayCourses() {
    courseListDiv.innerHTML = ''; // Clear any previous course listings
  
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button onclick="viewCourseDetails(${course.id})">View Details</button>
      `;
      courseListDiv.appendChild(courseCard);
    });
  }
  
  // Show the courses page
  viewCoursesButton.addEventListener('click', () => {
    homeSection.classList.add('hidden');
    coursesSection.classList.remove('hidden');
    displayCourses();
  });
  // Login functionality
  const loginSection = document.getElementById('login');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  
  const validCredentials = {
    email: "user@example.com",
    password: "12345"
  };
  
  // Handle login form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === validCredentials.email && password === validCredentials.password) {
      alert("Login successful! Redirecting to the Home Page.");
      loginSection.classList.add('hidden');
      homeSection.classList.remove('hidden');
    } else {
      loginError.style.display = 'block';
    }
  });
  
  // Initial display - Show login first
  window.onload = () => {
    homeSection.classList.add('hidden');
    coursesSection.classList.add('hidden');
    courseDetailSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  };
  
  
  // Go back to the home page
  backHomeButton.addEventListener('click', () => {
    homeSection.classList.remove('hidden');
    coursesSection.classList.add('hidden');
  });
  
  // Go back to the course list page
  backToCoursesButton.addEventListener('click', () => {
    courseDetailSection.classList.add('hidden');
    coursesSection.classList.remove('hidden');
  });
  
  // Function to view course details
  function viewCourseDetails(courseId) {
    const course = courses.find(course => course.id === courseId);
    courseDetailContent.innerHTML = `
      ${course.detail}
      <p><a href="${course.link}" target="_blank">Click here to learn more about this course</a></p>
    `;
    coursesSection.classList.add('hidden');
    courseDetailSection.classList.remove('hidden');
  }*/
const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the basics of programming in various languages.",
    detail: `
      <h3>Introduction to Programming</h3>
      <p>Learn variables, loops, functions, and OOP in Python, Java, and C++.</p>`,
    link: "https://www.geeksforgeeks.org/computer-science-fundamentals/introduction-to-programming-languages/"
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "A comprehensive guide to building modern web applications.",
    detail: `
      <h3>Web Development Bootcamp</h3>
      <p>Master HTML, CSS, JavaScript, React, and Node.js for full-stack development.</p>`,
    link: "https://www.geeksforgeeks.org/web-tech/web-development/"
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Learn Python for data science and machine learning.",
    detail: `
      <h3>Data Science with Python</h3>
      <p>Work with Pandas, Matplotlib, Scikit-learn to build real-world ML projects.</p>`,
    link: "https://www.geeksforgeeks.org/data-science/python-for-data-science/"
  }
];

// DOM Elements
const loginSection = document.getElementById("login");
const homeSection = document.getElementById("home");
const coursesSection = document.getElementById("courses");
const courseDetailSection = document.getElementById("course-detail");
const courseListDiv = document.getElementById("course-list");
const courseDetailContent = document.getElementById("course-detail-content");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

const viewCoursesBtn = document.getElementById("view-courses-btn");
const backHomeBtn = document.getElementById("back-home-btn");
const backToCoursesBtn = document.getElementById("back-to-courses-btn");

// Initial Display
window.onload = () => {
  loginSection.classList.remove("hidden");
  homeSection.classList.add("hidden");
  coursesSection.classList.add("hidden");
  courseDetailSection.classList.add("hidden");
};

// Demo Login Logic
const validCredentials = {
  email: "user@example.com",
  password: "12345"
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === validCredentials.email && password === validCredentials.password) {
    loginError.style.display = "none";
    loginSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  } else {
    loginError.style.display = "block";
  }
});

viewCoursesBtn.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  coursesSection.classList.remove("hidden");
  renderCourses();
});

backHomeBtn.addEventListener("click", () => {
  coursesSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
});

backToCoursesBtn.addEventListener("click", () => {
  courseDetailSection.classList.add("hidden");
  coursesSection.classList.remove("hidden");
});

// Render Courses
function renderCourses() {
  courseListDiv.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="viewCourseDetails(${course.id})">View Details</button>
    `;
    courseListDiv.appendChild(card);
  });
}

// Show Course Detail
function viewCourseDetails(id) {
  const course = courses.find((c) => c.id === id);
  courseDetailContent.innerHTML = `
    ${course.detail}
    <p><a href="${course.link}" target="_blank">Learn more</a></p>
  `;
  coursesSection.classList.add("hidden");
  courseDetailSection.classList.remove("hidden");
}


