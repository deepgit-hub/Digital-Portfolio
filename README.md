# 💼 Deepak L – Digital Portfolio

> A modern, responsive personal portfolio website showcasing skills, Java projects, achievements, technical sessions, and services with a premium black–gold design.

![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 🎯 Overview

This is a **modern, fully responsive personal portfolio website** built by Deepak L, a B.Sc. Computer Science student focused on Java development and Cybersecurity. The portfolio showcases:

- **Java Projects** – Real-world applications demonstrating problem-solving
- **Technical Skills** – Programming languages, DSA, Web technologies
- **Achievements** – Competitions, presentations, and awards
- **Gallery** – Visual documentation of 20+ events and accomplishments
- **YouTube Sessions** – 8+ technical and inspirational videos
- **Professional Services** – Website development and deployment

### 🚀 Live Demo
[**Visit the Portfolio →**](https://deepgit-hub.github.io/Digital-Portfolio/)

---

## ✨ Key Features

### 🎨 Design & UX
- **Premium Black–Gold UI** – Professional and modern aesthetic
- **Fully Responsive** – Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** – Hover effects, transitions, and smooth scrolling
- **Sticky Navigation** – Quick access to all sections from anywhere
- **Lazy Loading** – Images load on demand for optimal performance

### 💻 Interactive Components
- **Image Gallery with Lightbox**
  - Click to expand full-screen
  - Keyboard navigation (Arrow keys, Escape)
  - Swipe support for mobile devices
  - Smooth transitions and captions
- **Embedded YouTube Videos** – 8 technical sessions and motivational content
- **Floating WhatsApp Button** – Direct contact messaging
- **Smooth Scroll Navigation** – Intuitive section jumping

### 📱 Mobile Optimized
- Touch-friendly interface
- Responsive grid layouts
- Fast loading on all devices
- Accessible design

---

## 🏗️ Project Structure

```
Digital-Portfolio/
├── index.html          # Main HTML file (505 lines, all sections)
├── style.css           # Complete styling - no frameworks (412 lines)
├── README.md          # Project documentation
└── Images/            # Gallery images and assets
    ├── Deepak_pro.jpg
    ├── Deepak_Teachers_Day.jpg
    ├── Deepak_Freshers_Day.jpg
    ├── elon_musk.jpeg
    ├── how_to_win_friends.jpeg
    ├── deep_work.jpeg
    └── ... (20+ images)
```

---

## 📑 Website Sections

### 1. **Hero Section**
- Profile picture with golden border
- Name and professional title
- Call-to-action buttons (View Projects, GitHub)

### 2. **About Me**
- Background as a B.Sc. Computer Science student
- Career focus: Cybersecurity & Java Development
- Current learning: Java, Linux fundamentals

### 3. **Skills**
- **Programming:** Java (OOPS), Python, C++ (OOPS)
- **Core Concepts:** Arrays, Loops, Conditions, Logic Building, Problem Solving
- **Data Structures:** Arrays, Linked Lists
- **Web:** HTML, CSS
- **Tools:** Git, GitHub, VS Code
- **OS:** Linux (Ubuntu)

### 4. **Java Projects** (6 Projects)
1. **Theatre Ticket Booking System** – Movie selection, show timings, seat booking, summary generation
2. **College Admission System** – Real-time admission process simulation
3. **Banking System** – Account creation and management (Saving & Current)
4. **Employee Salary & Attendance System** – Salary calculation with fines
5. **Student Performance Management System** – Grade analysis and discipline tracking
6. **Traffic Rule & Fine Logic** – Violation penalties and warnings

*Each project links to full source code on GitHub*

### 5. **Achievements** (17+ Awards)
- 🏆 Cybersecurity presentations at multiple colleges
- 🎤 Speech awards (Teacher's Day, Fresher's Day, Farewell)
- 🥇 Competition wins (Debugging, Paper Presentation, Quiz, Book Review)
- 🎓 Design awards and event organization
- 💰 Multiple cash prizes

### 6. **Books Section**
Influential reads that shaped my thinking:
- **Elon Musk** – Resilience and long-term thinking
- **How to Win Friends & Influence People** – Communication skills
- **Deep Work** – Focus and discipline

### 7. **Image Gallery** (20+ Photos)
- Professional photos from events and competitions
- Full-screen lightbox viewer
- Mobile-friendly swipe navigation
- Keyboard shortcuts (Arrow keys, Escape)
- Lazy loading for performance

### 8. **YouTube Sessions** (8 Videos)
Topics include:
- Virtual Machines & Dual Boot
- Cybersecurity & Ethical Hacking
- Inspirational speeches
- Generative AI in Cybersecurity
- College presentations

### 9. **Services Offered**
- Static website development (HTML & CSS)
- Student/Freelancer portfolio creation
- GitHub Pages deployment
- Website maintenance and updates

### 10. **Contact Section**
- Email: deepak2911001@gmail.com
- Phone: +91 93457 38927
- LinkedIn: deepaklogu
- GitHub: deepgit-hub
- WhatsApp integration

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling** | Custom CSS (No frameworks) |
| **Fonts** | Google Fonts (Orbitron, Montserrat) |
| **Hosting** | GitHub Pages |
| **Version Control** | Git & GitHub |
| **Tools** | VS Code |
| **OS** | Linux (Ubuntu) |

---

## 🚀 Getting Started

### **View Live**
Simply visit: [https://deepgit-hub.github.io/Digital-Portfolio/](https://deepgit-hub.github.io/Digital-Portfolio/)

### **Fork & Customize**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deepgit-hub/Digital-Portfolio.git
   cd Digital-Portfolio
   ```

2. **Edit files locally:**
   - Update `index.html` for content changes
   - Modify `style.css` for design customization
   - Add your images to the `Images/` folder

3. **Test locally:**
   ```bash
   # Option 1: Open in browser
   open index.html
   
   # Option 2: Use a local server
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
   Your changes go live automatically!

---

## 💡 Customization Guide

### Change Color Scheme
In `style.css`, update the color variables:
```css
/* Current: Black + Gold */
body { background: black; color: goldenrod; }

/* Example: Dark Blue + Cyan */
body { background: #0a0e27; color: #00d4ff; }
```

### Update Personal Information
In `index.html`:
- **Line 26-28:** Name, title, and tagline
- **Line 379-397:** Contact details
- **Line 24:** Profile picture path

### Add New Projects
In `index.html`, add to the project grid (around line 78):
```html
<div class="project-card">
    <h4>Your Project Name</h4>
    <p>Project description here...</p>
    <a href="your-github-link" target="_blank" class="btn secondary">View Code</a>
</div>
```

### Add Gallery Images
1. Place images in `Images/` folder
2. Add to gallery grid (around line 173):
```html
<div class="gallery-item">
    <img src="Images/your-image.jpg" alt="Description" loading="lazy">
    <p><b>Image Title</b></p>
</div>
```

### Add YouTube Videos
In `index.html`, add to video grid (around line 273):
```html
<div class="video-item">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
    <p><b>Video Title</b></p>
</div>
```

---

## 📊 Portfolio Statistics

- **20+ Gallery Images** – Professional photography
- **6 Java Projects** – Real-world applications
- **17+ Achievements** – Competitions and awards
- **8+ YouTube Videos** – Technical and inspirational content
- **4 Service Offerings** – Available for freelance work
- **100% Responsive** – Works on all devices
- **Pure HTML/CSS/JS** – No framework dependencies
- **Fast Loading** – Optimized performance

---

## 👥 About the Developer

**Deepak L** – B.Sc. Computer Science Student

### Profile
- 🎯 **Focus:** Java Development & Cybersecurity
- 🏆 **Achievements:** Award-winning speaker and developer
- 💬 **Languages:** English, Tamil
- 🔗 **Philosophy:** Open to collaboration and continuous learning

### Contact & Social
- 📧 Email: [deepak2911001@gmail.com](mailto:deepak2911001@gmail.com)
- 📱 Phone: +91 93457 38927
- 💼 LinkedIn: [deepaklogu](https://www.linkedin.com/in/deepaklogu/)
- 💻 GitHub: [@deepgit-hub](https://github.com/deepgit-hub)
- 💬 WhatsApp: [Send Message](https://wa.me/919345738927)

---

## 🔮 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Contact form with backend integration
- [ ] Project filters and sorting
- [ ] Blog section for technical articles
- [ ] Animated hero section
- [ ] Search functionality
- [ ] Downloadable resume button
- [ ] Testimonials section
- [ ] Blog/articles section

---

## 📝 License & Usage

This project is **open-source** and available for:
- ✅ Learning and educational use
- ✅ Personal portfolio inspiration
- ✅ Forking and customization
- ✅ Creating your own portfolio

**Please give credit** when using this as a template!

---

## 🌟 Show Your Support

If you find this portfolio useful or inspiring:
- ⭐ **Star the repository** on GitHub
- 🔀 **Fork** to create your own version
- 💬 **Share feedback** and suggestions
- 📢 **Recommend** to others building portfolios
- 🤝 **Connect** on LinkedIn or GitHub

---

## 📞 Let's Connect

Have questions, feedback, or want to collaborate?
- 💬 **Chat on WhatsApp:** [Quick Message](https://wa.me/919345738927?text=Hi%20Deepak,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.)
- 📧 **Email:** deepak2911001@gmail.com
- 🔗 **LinkedIn:** Connect for professional collaboration
- 💻 **GitHub:** Explore my projects

---

**Last Updated:** May 4, 2026  
**Portfolio Status:** ✅ Active & Maintained  
**Hosted on:** GitHub Pages  

---

### Made with ❤️ by Deepak L