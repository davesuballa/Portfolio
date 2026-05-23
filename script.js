function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      jobName: "Freelance Programmer (Commission)",
      date: "Jan 2020 - Present Day",
      description: "<b>Programming</b> - Creating a mobile application, Website, NOTE: This is a Student and Business Projects only.",
    },
    {
      jobName: "IT Operation Assistant (Internship)",
      date: "August 2024 - October 2024",
      description: [
        "<b>Connection Assistant</b> - Responsible for ensuring all employees are properly connected to the internet, diagnosing and resolving network issues, maintaining switches, and verifying that PCs are correctly connected to the network infrastructure. <br><b>Hardware/Software Maintenance</b> - Handles diagnosing and fixing hardware and software issues on employee devices, identifying problems with equipment such as printers, computers, and other office technology, and implementing practical solutions to ensure smooth operations. <br><b>Data Entry</b> - Manages the entry, processing, and analysis of data using Excel and other software, encoding and coding information for company databases, and maintaining data accuracy and integrity within all systems. <br><b>Server Maintenance</b> - Oversees the daily maintenance and monitoring of IT systems, including checking network switches, managing software installations, performing system updates, and ensuring that all infrastructure remains operational and secure. "
      ],
    },
    {
      jobName: "Data Entry (Job)",
      date: "December 2019 - September 2020",
      description: "<b>Encoding Data</b> - Responsible for inputting the data into excel of the student along with the teacher credentials. Additionally, I need also to create the table of modules for each course of the school."
    }
  ];

  const buttonOne = document.getElementById("buttonOne");
  const buttonTwo = document.getElementById("buttonTwo");
  const buttonThree = document.getElementById("buttonThree");
  const contentOne = document.getElementById("contentOne");
  const contentTwo = document.getElementById("contentTwo");
  const contentThree = document.getElementById("contentThree");

  buttonOne.textContent = experienceData[0].jobName;
  buttonTwo.textContent = experienceData[1].jobName;
  buttonThree.textContent = experienceData[2].jobName;

  buttonOne.addEventListener("click", () => {
    buttonOne.classList.add("active");
    buttonTwo.classList.remove("active");
    buttonThree.classList.remove("active");
    displayExperience(0);
  });

  buttonTwo.addEventListener("click", () => {
    buttonOne.classList.remove("active");
    buttonTwo.classList.add("active");
    buttonThree.classList.remove("active");
    displayExperience(1);
  });

  buttonThree.addEventListener("click", () => {
    buttonOne.classList.remove("active");
    buttonTwo.classList.remove("active");
    buttonThree.classList.add("active");
    displayExperience(2);
  });

  function displayExperience(index) {
    const data = experienceData[index];
    contentOne.innerHTML = `
      <h2>${data.jobName}</h2>
      <p>${data.date}</p>
      <br>
      <p>${data.description}</p>
    `;

    contentTwo.innerHTML = ""; // Clear contentTwo
  }

  // Initialize with the first experience data
  displayExperience(0);
});



///PROJECTS
document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Recycle App",
      imgSrc: "./assets/recycle-app-generated.png",
      description: "Expo React Native recycling scanner with material detection, guides, history, and cloud storage.",
      tags: ["Expo", "Firebase", "AI Detection"],
      githubUrl: "https://github.com/davesuballa/recycle",
    },
    {
      title: "Microservices V2",
      imgSrc: "./assets/microservices-v2-generated.png",
      description: "ASP.NET Core Web API for merchant onboarding with SQL Server, Swagger, Basic Auth, and service integrations.",
      tags: [".NET 6", "SQL Server", "API"],
      githubUrl: "https://github.com/davesuballa/MicroservicesV2",
    },
    {
      title: "Workout Application",
      imgSrc: "./assets/workoutapp.png",
      description: "Android fitness app with login, meal plans, workout customization, reports, and Firebase data storage.",
      tags: ["Android", "Firebase", "Mobile"],
      githubUrl: "https://github.com/davesuballa/WorkoutAPP",
    },
    {
      title: "Basic QRCODE Maker",
      imgSrc: "./assets/qrcode.png",
      description: "Android QR code scanner and generator for creating, reading, and sharing QR-based data.",
      tags: ["Android", "QR Code", "Utility"],
      githubUrl: "https://github.com/davesuballa/BasicQRCODESCANNER",
    },
    {
      title: "Chatbot",
      imgSrc: "./assets/chatbot.png",
      description: "Simple chatbot project focused on conversational UI and API-driven responses.",
      tags: ["Android", "Chatbot", "API"],
      githubUrl: "https://github.com/davesuballa/SimpleChatBot",
    },
    {
      title: "Dog Movement and Emotion Recognition",
      imgSrc: "./assets/Buddy.png",
      description: "Mobile recognition app for detecting dog movement and emotion patterns.",
      tags: ["Android", "Recognition", "Mobile"],
      githubUrl: "https://github.com/davesuballa/DogRecognitionAndroid",
    },
    {
      title: "Station Gaming",
      imgSrc: "./assets/stationgaming.png",
      description: "Gaming station web project with a themed interface and interactive browsing experience.",
      tags: ["Web", "HTML", "CSS"],
      githubUrl: "https://github.com/davesuballa/Station-Gaming",
    },
    {
      title: "Inventory system",
      imgSrc: "./assets/inventory.png",
      description: "Inventory management webpage for tracking items and organizing product records.",
      tags: ["Web", "CRUD", "Management"],
      githubUrl: "https://github.com/davesuballa/Inventory-Management-Webpage",
    },
    {
      title: "Shop system",
      imgSrc: "./assets/shop.png",
      description: "Online shop webpage with product browsing, user actions, and storefront layout.",
      tags: ["Web", "Ecommerce", "UI"],
      githubUrl: "https://github.com/davesuballa/Shop-Webpage",
    },
    {
      title: "Employee Management System",
      imgSrc: "./assets/employee.png",
      description: "Employee management webpage for organizing staff data and records.",
      tags: ["Web", "CRUD", "Admin"],
      githubUrl: "https://github.com/davesuballa/Employee-Webpage",
    },
    {
      title: "Learnopia Website",
      imgSrc: "./assets/learning.png",
      description: "Learning website concept with educational content structure and responsive web design.",
      tags: ["Web", "Education", "UI"],
      githubUrl: "https://github.com/davesuballa/Learnopia-Webpage",
    },
    
  ];

  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const tagsHTML = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");

    const projectHTML = `
      <div class="details-container color-container">
        <div class="article-container">
          <img src="${project.imgSrc}" alt="${project.title}" class="project-img" />
        </div>
        <div class="project-content">
          <h2 class="project-title">${project.title}</h2>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">${tagsHTML}</div>
          <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubUrl}'">
            View on GitHub
          </button>
        </div>
      </div>
    `;
    projectContainer.innerHTML += projectHTML;
  });
});


const brands = document.querySelector('ul.brands');
total_brand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', total_brand);
for (let i = 0; i < total_brand; i++) {
  brands.appendChild(brands.children[i].cloneNode(true));
}
