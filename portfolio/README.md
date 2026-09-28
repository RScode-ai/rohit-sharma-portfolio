# Rohit Sharma — Portfolio

Static single-page portfolio. HTML5 + CSS3 + vanilla JS, no frameworks/build step.

## Run it
Open `index.html` directly in a browser, or in IntelliJ: right-click `index.html` → **Open in Browser**.

## Structure
- `index.html` — Home, About, Skills, Projects, Experience, Contact
- `css/style.css` — design tokens, layout, components, responsive rules, motion
- `js/data.js` — project content (edit this to update your work)
- `js/main.js` — navigation, scroll effects, project carousel and project details modal
- `assets/` — images and icons

## Personal details
- GitHub: `https://github.com/RScode-ai`
- LinkedIn: `https://www.linkedin.com/in/rohit-sharma-java`
- Email: `rohitsharma05824@gmail.com`
- Add your resume PDF as `assets/resume/rohit-sharma-resume.pdf`; the Skills section's View Resume button opens it in a new browser tab, where visitors can choose whether to download it. A placeholder note is in `assets/resume/` until the PDF is added. The certificate section and form-based contact flow are omitted until their details or EmailJS configuration are available. The Contact section currently uses a working `mailto:` link.
- Add verified repository/demo URLs for individual projects in `js/data.js` when available.

## Notes
- Project carousel supports swipe/trackpad scrolling and keyboard-accessible previous/next controls.
- Respects `prefers-reduced-motion`.
