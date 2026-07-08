# Resumeasy

A responsive, interactive resume builder. Pick a template, fill out a form, and watch your resume render live in the browser — then download it as a PDF or print it.

## Features

- **4 resume templates** — Classic, Modern, Professional (sidebar), and Creative
- **Live preview** — the resume updates in real time as you type, no page reloads
- **Dynamic sections** — add/remove multiple rows for Education, Experience, Projects, and Certifications
- **Skill tags** — quick checkbox-based skill selection
- **Progress bar** — animated indicator showing how much of the form is complete
- **PDF export** — download the rendered resume as a PDF (via html2pdf.js)
- **Print support** — print the resume directly from the browser
- **Responsive design** — form and preview adapt to mobile, tablet, and desktop via CSS media queries
- **CSS animations** — smooth transitions on template selection, form inputs, and resume appearance

## Project Structure

```
.
├── template.html       # Step 1 — choose a resume template
├── VOC-Assign2.html    # Step 2 — fill the form and build the resume
├── style.css           # All styling: layout, templates, animations, media queries
├── script.js           # Template renderers + form logic, live preview, PDF/print, dynamic rows
└── README.md
```

## Getting Started

No build step or dependencies required.

1. Download/clone this folder.
2. Open `template.html` in a browser to pick a template, or open `VOC-Assign2.html` directly to start building (defaults to the Classic template).
3. Fill in your details on the left — the preview on the right updates instantly.
4. Use **Download PDF** or **Print** when you're done.

Your chosen template is remembered in the browser's `localStorage`, so it persists across visits until you clear it or pick a different one.

## Tech Stack

- HTML5
- CSS3 (Flexbox, transitions, keyframe animations, media queries)
- Vanilla JavaScript (no frameworks)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) for PDF export

## License

This project is licensed under the MIT License — see below.

```
MIT License

Copyright (c) 2026 Saksham Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
