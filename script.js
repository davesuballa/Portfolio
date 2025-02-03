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
      title: "Workout Application",
      imgSrc: "./assets/workoutapp.png",
      githubUrl: "https://github.com/davesuballa/WorkoutAPP",
    },
    {
      title: "Basic QRCODE Maker",
      imgSrc: "./assets/qrcode.png",
      githubUrl: "https://github.com/davesuballa/BasicQRCODESCANNER",
    },
    {
      title: "Chatbot",
      imgSrc: "./assets/chatbot.png",
      githubUrl: "https://github.com/davesuballa/SimpleChatBot",
    },
    {
      title: "Dog Movement and Emotion Recognition",
      imgSrc: "./assets/Buddy.png",
      githubUrl: "https://github.com/davesuballa/DogRecognitionAndroid",
    },
    {
      title: "Station Gaming",
      imgSrc: "./assets/stationgaming.png",
      githubUrl: "https://github.com/davesuballa/Station-Gaming",
    },
    {
      title: "Inventory system",
      imgSrc: "./assets/inventory.png",
      githubUrl: "https://github.com/davesuballa/Inventory-Management-Webpage",
    },
    {
      title: "Shop system",
      imgSrc: "./assets/shop.png",
      githubUrl: "https://github.com/davesuballa/Shop-Webpage",
    },
    {
      title: "Employee Management System",
      imgSrc: "./assets/employee.png",
      githubUrl: "https://github.com/davesuballa/Employee-Webpage",
    },
    {
      title: "Learnopia Website",
      imgSrc: "./assets/learning.png",
      githubUrl: "https://github.com/davesuballa/Learnopia-Webpage",
    },
    
  ];

  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectHTML = `
      <div class="details-container color-container">
        <div class="article-container">
          <img src="${project.imgSrc}" alt="${project.title}" class="project-img" />
        </div>
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubUrl}'">
            Github
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