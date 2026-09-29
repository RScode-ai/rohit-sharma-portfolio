# Rohit Sharma - Portfolio

Static single-page portfolio. HTML5 + CSS3 + vanilla JS, no frameworks/build step.

## Run it
Open `index.html` directly in a browser, or in IntelliJ: right-click `index.html` → **Open in Browser**.

## Deploy with Netlify
Connect the GitHub repository and leave the base directory and build command blank. Set the publish directory to `.` because `index.html` is at the repository root.

## Structure
- `index.html` — Home, About, Skills, Projects, Experience, Contact
- `style.css` - design tokens, layout, components, responsive rules and motion
- `data.js` - project content (edit this to update your work)
- `script.js` - navigation, scroll effects, project carousel and details modal
- `images/` - optimized portfolio photos, original image backups, favicon and social preview
- `assets/resume/` - resume PDF
>>>>>>> 4c39dcf (Move portfolio site to repository root)

## Personal details
- GitHub: `https://github.com/RScode-ai`
- LinkedIn: `https://www.linkedin.com/in/rohit-sharma-java`
- Email: `rohitsharma05824@gmail.com`
- The Skills section's View Resume button opens `assets/resume/rohit-sharma-resume2.pdf` in a new browser tab. The certificate section and form-based contact flow are omitted until their details or EmailJS configuration are available. The Contact section currently uses a working `mailto:` link.
- Add verified repository/demo URLs for individual projects in `data.js` when available.

## Notes
- Project carousel supports swipe/trackpad scrolling and keyboard-accessible previous/next controls.
- Respects `prefers-reduced-motion`.
