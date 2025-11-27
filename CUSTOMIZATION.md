# Portfolio Website Customization Guide

Welcome to your new portfolio website! This guide will help you customize it with your personal information.

## 🎨 Quick Start

Your portfolio website is ready to use. Simply update the placeholder content with your own information.

## 📝 Customization Checklist

### 1. Personal Information (index.html)

#### Hero Section (Lines 30-43)
- Update your name if needed (currently: "Ireoluwa Tomide")
- Modify the subtitle: "Software Developer | Problem Solver | Tech Enthusiast"
- Change the description: "I build innovative solutions and bring ideas to life through code."

#### About Section (Lines 50-56)
- Rewrite the three paragraphs to reflect your personal journey and experience
- Share your unique story and what makes you passionate about development

### 2. Skills Section (Lines 63-87)

Update the skills in each category:
- **Frontend Development**: Add your frontend technologies
- **Backend Development**: List your backend skills
- **Tools & Technologies**: Include tools you use
- **Design & UX**: Add any design skills you have

### 3. Projects Section (Lines 94-152)

For each project card:
- Replace the emoji icon or add an actual image
- Update the project title
- Write a compelling project description
- Update technology tags
- Replace `href="#"` with actual project URLs:
  - Demo link: Link to live project
  - Source Code link: Link to GitHub repository

### 4. Contact Information (Lines 163-173)

**Important:** Update these placeholder values:
- **Email**: Replace `your.email@example.com` with your actual email
- **LinkedIn**: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn URL
- **GitHub**: The link to `https://github.com/Ireoluwatomide` is already correct

### 5. Customize Colors (styles.css)

The color scheme can be changed in the CSS variables (Lines 9-19):

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #3b82f6;       /* Lighter blue */
    /* ... other colors ... */
}
```

Feel free to change these to match your personal brand!

### 6. Add Your Photo (Optional)

To add a profile photo:
1. Add your image to the repository
2. In the About section, add an `<img>` tag:
```html
<img src="your-photo.jpg" alt="Ireoluwa Tomide" style="max-width: 300px; border-radius: 50%;">
```

### 7. Add Real Project Images (Optional)

Replace the emoji placeholders with actual project screenshots:
1. Add your project images to the repository
2. Replace the placeholder div:
```html
<!-- Before -->
<div class="project-placeholder">🚀</div>

<!-- After -->
<img src="project-screenshot.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🚀 Deployment

Your website will automatically be deployed to GitHub Pages once this branch is merged to `main`.

The website will be available at: `https://ireoluwatomide.github.io`

## 📱 Testing

### Local Testing
You can test locally by opening `index.html` in a browser or running:
```bash
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

### Mobile Testing
- Use browser dev tools (F12) and toggle device toolbar
- Test on actual mobile devices
- Check the hamburger menu functionality

## 🎯 Tips for a Great Portfolio

1. **Keep It Updated**: Regularly add new projects and skills
2. **Use Real Content**: Replace all placeholder text with your actual information
3. **Add Metrics**: Include achievements like "Improved performance by 40%"
4. **Show Variety**: Display different types of projects
5. **Make It Personal**: Let your personality shine through
6. **Proofread**: Check for typos and grammar errors
7. **Test Everything**: Ensure all links work correctly

## 🔧 Advanced Customization

### Adding New Sections
You can add additional sections like:
- Education
- Work Experience
- Certifications
- Blog Posts
- Testimonials

Follow the existing section structure:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Adding Animations
The site uses Intersection Observer for animations. To animate new elements:
```javascript
// Add to script.js
const newElements = document.querySelectorAll('.your-new-class');
newElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

## 🆘 Need Help?

If you need help customizing your portfolio:
1. Check the code comments in the files
2. Refer to MDN Web Docs for HTML/CSS/JavaScript questions
3. Test changes in small increments

## 📄 License

Feel free to customize this portfolio template as much as you want. Make it your own!

---

**Happy Coding! 🚀**
