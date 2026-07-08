// templates.js – all resume layout renderers

function restartAnimation(element) {
    element.style.animation = 'none';
  
    void element.offsetHeight; 
    element.style.animation = '';
}

function renderClassic(data) {
    const { name, email, phone, summary, skills, edu, exp, proj, certs } = data;
    let html = '';
    html += `<div class="r-name">${name || 'Your Name'}</div>`;
    html += `<div class="r-contact">`;
    if (email) html += `<span>${email}</span>`;
    if (phone) html += `<span>${phone}</span>`;
    if (!email && !phone) html += `<span>Add your contact details</span>`;
    html += `</div>`;
    if (summary) html += `<div class="r-summary">${summary}</div>`;
    if (skills.length) {
        html += `<div class="r-section-title">Skills</div><div class="r-skills">${skills.map(s => `<span class="r-skill-tag">${s}</span>`).join('')}</div>`;
    }

    if (edu.length) {
        html += `<div class="r-section-title">Education</div>`;
        edu.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.degree || 'Degree'}</div><div class="r-entry-meta">${[e.institution, e.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }

    if (exp.length) {
        html += `<div class="r-section-title">Experience</div>`;
        exp.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.title || 'Position'}</div><div class="r-entry-meta">${[e.company, e.duration].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
  
    if (proj.length) {
        html += `<div class="r-section-title">Projects</div>`;
        proj.forEach(p => {
            html += `<div class="r-entry"><div class="r-entry-title">${p.name || 'Project'}</div>${p.stack ? `<div class="r-entry-meta">${p.stack}</div>` : ''}${p.desc ? `<div class="r-entry-desc">${p.desc}</div>` : ''}${p.link ? `<div class="r-entry-link">${p.link}</div>` : ''}</div>`;
        });
    }
   
    if (certs.length) {
        html += `<div class="r-section-title">Certifications</div>`;
        certs.forEach(c => {
            html += `<div class="r-entry"><div class="r-entry-title">${c.name || 'Certification'}</div><div class="r-entry-meta">${[c.issuer, c.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    return html;
}

function renderModern(data) {
    const { name, email, phone, summary, skills, edu, exp, proj, certs } = data;
    let html = `<div class="r-modern-header"><div class="r-name">${name || 'Your Name'}</div><div class="r-modern-sub">${[email, phone].filter(Boolean).join(' · ') || 'Add your contact details'}</div></div>`;
    if (summary) html += `<div class="r-summary">${summary}</div>`;
    if (skills.length) {
        html += `<div class="r-section-title">Skills</div><div class="r-skills">${skills.map(s => `<span class="r-skill-tag">${s}</span>`).join('')}</div>`;
    }
  
    if (edu.length) {
        html += `<div class="r-section-title">Education</div>`;
        edu.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.degree || 'Degree'}</div><div class="r-entry-meta">${[e.institution, e.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (exp.length) {
        html += `<div class="r-section-title">Experience</div>`;
        exp.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.title || 'Position'}</div><div class="r-entry-meta">${[e.company, e.duration].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (proj.length) {
        html += `<div class="r-section-title">Projects</div>`;
        proj.forEach(p => {
            html += `<div class="r-entry"><div class="r-entry-title">${p.name || 'Project'}</div>${p.stack ? `<div class="r-entry-meta">${p.stack}</div>` : ''}${p.desc ? `<div class="r-entry-desc">${p.desc}</div>` : ''}${p.link ? `<div class="r-entry-link">${p.link}</div>` : ''}</div>`;
        });
    }
    if (certs.length) {
        html += `<div class="r-section-title">Certifications</div>`;
        certs.forEach(c => {
            html += `<div class="r-entry"><div class="r-entry-title">${c.name || 'Certification'}</div><div class="r-entry-meta">${[c.issuer, c.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    return html;
}

function renderProfessional(data) {
    const { name, email, phone, summary, skills, edu, exp, proj, certs } = data;
    let html = `<div class="r-professional-wrapper">`;
    // Sidebar
    html += `<div class="r-sidebar">`;
    html += `<div class="r-name">${name || 'Your Name'}</div>`;
    if (email) html += `<div class="r-sidebar-item"><strong>Email</strong> ${email}</div>`;
    if (phone) html += `<div class="r-sidebar-item"><strong>Phone</strong> ${phone}</div>`;
    if (skills.length) {
        html += `<div class="r-sidebar-item"><strong>Skills</strong></div><div class="r-sidebar-skills">${skills.map(s => `<span>${s}</span>`).join(' ')}</div>`;
    }
    if (certs.length) {
        html += `<div class="r-sidebar-item"><strong>Certifications</strong></div>`;
        certs.forEach(c => {
            html += `<div class="r-sidebar-item">${c.name || 'Certification'}${c.issuer ? ` (${c.issuer})` : ''}${c.year ? ` · ${c.year}` : ''}</div>`;
        });
    }
    html += `</div>`; 

    html += `<div class="r-main">`;
    if (summary) html += `<div class="r-summary">${summary}</div>`;
    if (edu.length) {
        html += `<div class="r-section-title">Education</div>`;
        edu.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.degree || 'Degree'}</div><div class="r-entry-meta">${[e.institution, e.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (exp.length) {
        html += `<div class="r-section-title">Experience</div>`;
        exp.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.title || 'Position'}</div><div class="r-entry-meta">${[e.company, e.duration].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (proj.length) {
        html += `<div class="r-section-title">Projects</div>`;
        proj.forEach(p => {
            html += `<div class="r-entry"><div class="r-entry-title">${p.name || 'Project'}</div>${p.stack ? `<div class="r-entry-meta">${p.stack}</div>` : ''}${p.desc ? `<div class="r-entry-desc">${p.desc}</div>` : ''}${p.link ? `<div class="r-entry-link">${p.link}</div>` : ''}</div>`;
        });
    }
    html += `</div>`; 
    html += `</div>`;
    return html;
}


function renderCreative(data) {
    const { name, email, phone, summary, skills, edu, exp, proj, certs } = data;
    let html = `<div class="r-creative-header"><span class="r-creative-avatar">${(name || 'You').charAt(0)}</span><div><div class="r-name">${name || 'Your Name'}</div><div class="r-creative-sub">${[email, phone].filter(Boolean).join(' · ') || 'Add your contact details'}</div></div></div>`;
    if (summary) html += `<div class="r-summary">${summary}</div>`;
    if (skills.length) {
        html += `<div class="r-section-title">Skills</div><div class="r-skills">${skills.map(s => `<span class="r-skill-tag">${s}</span>`).join('')}</div>`;
    }
    
    if (edu.length) {
        html += `<div class="r-section-title">Education</div>`;
        edu.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.degree || 'Degree'}</div><div class="r-entry-meta">${[e.institution, e.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (exp.length) {
        html += `<div class="r-section-title">Experience</div>`;
        exp.forEach(e => {
            html += `<div class="r-entry"><div class="r-entry-title">${e.title || 'Position'}</div><div class="r-entry-meta">${[e.company, e.duration].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    if (proj.length) {
        html += `<div class="r-section-title">Projects</div>`;
        proj.forEach(p => {
            html += `<div class="r-entry"><div class="r-entry-title">${p.name || 'Project'}</div>${p.stack ? `<div class="r-entry-meta">${p.stack}</div>` : ''}${p.desc ? `<div class="r-entry-desc">${p.desc}</div>` : ''}${p.link ? `<div class="r-entry-link">${p.link}</div>` : ''}</div>`;
        });
    }
    if (certs.length) {
        html += `<div class="r-section-title">Certifications</div>`;
        certs.forEach(c => {
            html += `<div class="r-entry"><div class="r-entry-title">${c.name || 'Certification'}</div><div class="r-entry-meta">${[c.issuer, c.year].filter(Boolean).join(' · ')}</div></div>`;
        });
    }
    return html;
}        function updateProgress() {
            var fields = [
                document.getElementById('nameInput'),
                document.getElementById('emailInput'),
                document.getElementById('phoneInput'),
                document.getElementById('summaryInput')
            ];
            var filled = 0;
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].value.trim() !== '') filled++;
            }
            var eduRows = document.querySelectorAll('#educationContainer .dyn-row');
            for (var j = 0; j < eduRows.length; j++) {
                var inputs = eduRows[j].querySelectorAll('input[type="text"]');
                var allFilled = true;
                for (var k = 0; k < inputs.length; k++) {
                    if (inputs[k].value.trim() === '') { allFilled = false; break; }
                }
                if (allFilled) { filled += 1; break; }
            }
            var expRows = document.querySelectorAll('#experienceContainer .dyn-row');
            for (var l = 0; l < expRows.length; l++) {
                var inputs2 = expRows[l].querySelectorAll('input[type="text"]');
                var allFilled2 = true;
                for (var m = 0; m < inputs2.length; m++) {
                    if (inputs2[m].value.trim() === '') { allFilled2 = false; break; }
                }
                if (allFilled2) { filled += 1; break; }
            }
            var checkedSkills = document.querySelectorAll('#skillsGroup input[type="checkbox"]:checked');
            if (checkedSkills.length > 0) filled += 1;

            var projRows = document.querySelectorAll('#projectsContainer .dyn-row');
            for (var p = 0; p < projRows.length; p++) {
                var inputs3 = projRows[p].querySelectorAll('input[type="text"]');
                var anyFilled = false;
                for (var n = 0; n < inputs3.length; n++) {
                    if (inputs3[n].value.trim() !== '') { anyFilled = true; break; }
                }
                if (anyFilled) { filled += 1; break; }
            }

            var certRows = document.querySelectorAll('#certificationsContainer .dyn-row');
            for (var q = 0; q < certRows.length; q++) {
                var inputs4 = certRows[q].querySelectorAll('input[type="text"]');
                var anyFilled2 = false;
                for (var r = 0; r < inputs4.length; r++) {
                    if (inputs4[r].value.trim() !== '') { anyFilled2 = true; break; }
                }
                if (anyFilled2) { filled += 1; break; }
            }

            var total = 9;
            var pct = Math.min(Math.round((filled / total) * 100), 100);
            document.getElementById('progressBar').style.width = pct + '%';
            document.getElementById('progressText').textContent = pct + '%';

            var statusText = document.getElementById('statusText');
            statusText.textContent = pct >= 100 ? 'all set — ready to export' : 'Draft saved locally';
        }

        function getSelectedSkills() {
            var checkboxes = document.querySelectorAll('#skillsGroup input[type="checkbox"]:checked');
            var skills = [];
            for (var i = 0; i < checkboxes.length; i++) skills.push(checkboxes[i].value);
            return skills;
        }

        function getEducationData() {
            var rows = document.querySelectorAll('#educationContainer .dyn-row');
            var data = [];
            for (var i = 0; i < rows.length; i++) {
                var deg = rows[i].querySelector('.edu-degree');
                var inst = rows[i].querySelector('.edu-institution');
                var yr = rows[i].querySelector('.edu-year');
                if (deg && inst && yr) {
                    data.push({ degree: deg.value.trim(), institution: inst.value.trim(), year: yr.value.trim() });
                }
            }
            return data;
        }

        function getExperienceData() {
            var rows = document.querySelectorAll('#experienceContainer .dyn-row');
            var data = [];
            for (var i = 0; i < rows.length; i++) {
                var title = rows[i].querySelector('.exp-title');
                var company = rows[i].querySelector('.exp-company');
                var duration = rows[i].querySelector('.exp-duration');
                if (title && company && duration) {
                    data.push({ title: title.value.trim(), company: company.value.trim(), duration: duration.value.trim() });
                }
            }
            return data;
        }

        function getProjectsData() {
            var rows = document.querySelectorAll('#projectsContainer .dyn-row');
            var data = [];
            for (var i = 0; i < rows.length; i++) {
                var name = rows[i].querySelector('.proj-name');
                var stack = rows[i].querySelector('.proj-stack');
                var desc = rows[i].querySelector('.proj-desc');
                var link = rows[i].querySelector('.proj-link');
                if (name && stack && desc && link) {
                    data.push({
                        name: name.value.trim(),
                        stack: stack.value.trim(),
                        desc: desc.value.trim(),
                        link: link.value.trim()
                    });
                }
            }
            return data;
        }

        function getCertificationsData() {
            var rows = document.querySelectorAll('#certificationsContainer .dyn-row');
            var data = [];
            for (var i = 0; i < rows.length; i++) {
                var name = rows[i].querySelector('.cert-name');
                var issuer = rows[i].querySelector('.cert-issuer');
                var yr = rows[i].querySelector('.cert-year');
                if (name && issuer && yr) {
                    data.push({ name: name.value.trim(), issuer: issuer.value.trim(), year: yr.value.trim() });
                }
            }
            return data;
        }

        var TEMPLATE_RENDERERS = {
            classic: renderClassic,
            modern: renderModern,
            professional: renderProfessional,
            creative: renderCreative
        };
        var TEMPLATE_CLASSES = ['template-classic', 'template-modern', 'template-professional', 'template-creative'];

        var TEMPLATE_LABELS = {
            classic: 'Classic',
            modern: 'Modern',
            professional: 'Professional',
            creative: 'Creative'
        };

        function getSelectedTemplateId() {
            var stored = localStorage.getItem('resumeasy_template');
            return TEMPLATE_RENDERERS.hasOwnProperty(stored) ? stored : 'classic';
        }

        function updateActiveTemplateChip(templateId) {
            var label = document.getElementById('activeTemplateText');
            if (label) label.textContent = TEMPLATE_LABELS[templateId] || 'Classic';
        }

        function renderResume() {
            var name = document.getElementById('nameInput').value.trim();
            var email = document.getElementById('emailInput').value.trim();
            var phone = document.getElementById('phoneInput').value.trim();
            var summary = document.getElementById('summaryInput').value.trim();
            var skills = getSelectedSkills();
            var edu = getEducationData().filter(function(e){ return e.degree || e.institution || e.year; });
            var exp = getExperienceData().filter(function(e){ return e.title || e.company || e.duration; });
            var proj = getProjectsData().filter(function(p){ return p.name || p.stack || p.desc || p.link; });
            var certs = getCertificationsData().filter(function(c){ return c.name || c.issuer || c.year; });

            var preview = document.getElementById('resumePreview');
            var templateId = getSelectedTemplateId();

            updateActiveTemplateChip(templateId);

            if (!name && !email && !phone && !summary && skills.length === 0 && edu.length === 0 && exp.length === 0 && proj.length === 0 && certs.length === 0) {
                preview.classList.remove.apply(preview.classList, TEMPLATE_CLASSES);
                preview.innerHTML = '<div class="empty-preview"><span class="icon">RE</span><p>Start filling the form on the left — your resume will render here in real time.</p></div>';
                updateProgress();
                return;
            }

            var data = { name: name, email: email, phone: phone, summary: summary, skills: skills, edu: edu, exp: exp, proj: proj, certs: certs };
            var renderer = TEMPLATE_RENDERERS[templateId] || renderClassic;

            preview.classList.remove.apply(preview.classList, TEMPLATE_CLASSES);
            preview.classList.add('template-' + templateId);
            preview.innerHTML = renderer(data);
            restartAnimation(preview);
            updateProgress();
        }

        function makeRemovable(row, selectorClass) {
            var btn = row.querySelector(selectorClass);
            btn.addEventListener('click', function() {
                row.remove();
                renderResume();
            });
        }

        function addEducationRow() {
            var container = document.getElementById('educationContainer');
            var row = document.createElement('div');
            row.className = 'dyn-row';
            row.innerHTML =
                '<input type="text" placeholder="Degree / Program" class="edu-degree" />' +
                '<input type="text" placeholder="Institution" class="edu-institution" />' +
                '<input type="text" placeholder="Year" class="edu-year" />' +
                '<div class="dyn-row-foot"><button type="button" class="link-btn remove-edu">Remove</button></div>';
            container.appendChild(row);
            makeRemovable(row, '.remove-edu');
            row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            renderResume();
        }

        function addExperienceRow() {
            var container = document.getElementById('experienceContainer');
            var row = document.createElement('div');
            row.className = 'dyn-row';
            row.innerHTML =
                '<input type="text" placeholder="Job title" class="exp-title" />' +
                '<input type="text" placeholder="Company" class="exp-company" />' +
                '<input type="text" placeholder="Duration" class="exp-duration" />' +
                '<div class="dyn-row-foot"><button type="button" class="link-btn remove-exp">Remove</button></div>';
            container.appendChild(row);
            makeRemovable(row, '.remove-exp');
            row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            renderResume();
        }

        function addProjectRow() {
            var container = document.getElementById('projectsContainer');
            var row = document.createElement('div');
            row.className = 'dyn-row';
            row.innerHTML =
                '<input type="text" placeholder="Project name" class="proj-name" />' +
                '<input type="text" placeholder="Tech stack (e.g. React, Node.js, MongoDB)" class="proj-stack" />' +
                '<input type="text" placeholder="Short description" class="proj-desc" />' +
                '<input type="text" placeholder="Link (optional)" class="proj-link" />' +
                '<div class="dyn-row-foot"><button type="button" class="link-btn remove-proj">Remove</button></div>';
            container.appendChild(row);
            makeRemovable(row, '.remove-proj');
            row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            renderResume();
        }

        function addCertificationRow() {
            var container = document.getElementById('certificationsContainer');
            var row = document.createElement('div');
            row.className = 'dyn-row';
            row.innerHTML =
                '<input type="text" placeholder="Certification name" class="cert-name" />' +
                '<input type="text" placeholder="Issuing organization" class="cert-issuer" />' +
                '<input type="text" placeholder="Year" class="cert-year" />' +
                '<div class="dyn-row-foot"><button type="button" class="link-btn remove-cert">Remove</button></div>';
            container.appendChild(row);
            makeRemovable(row, '.remove-cert');
            row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            renderResume();
        }

        document.addEventListener('DOMContentLoaded', function() {
            var inputs = document.querySelectorAll('#nameInput, #emailInput, #phoneInput, #summaryInput, #skillsGroup input[type="checkbox"]');
            inputs.forEach(function(inp) {
                inp.addEventListener('input', renderResume);
                inp.addEventListener('change', renderResume);
            });

            document.querySelectorAll('#educationContainer .dyn-row').forEach(function(row){
                makeRemovable(row, '.remove-edu');
                row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            });
            document.querySelectorAll('#experienceContainer .dyn-row').forEach(function(row){
                makeRemovable(row, '.remove-exp');
                row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            });
            document.querySelectorAll('#projectsContainer .dyn-row').forEach(function(row){
                makeRemovable(row, '.remove-proj');
                row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            });
            document.querySelectorAll('#certificationsContainer .dyn-row').forEach(function(row){
                makeRemovable(row, '.remove-cert');
                row.querySelectorAll('input').forEach(function(inp){ inp.addEventListener('input', renderResume); });
            });

            document.getElementById('addEducationBtn').addEventListener('click', addEducationRow);
            document.getElementById('addExperienceBtn').addEventListener('click', addExperienceRow);
            document.getElementById('addProjectBtn').addEventListener('click', addProjectRow);
            document.getElementById('addCertificationBtn').addEventListener('click', addCertificationRow);

            document.getElementById('clearFormBtn').addEventListener('click', function() {
                document.getElementById('nameInput').value = '';
                document.getElementById('emailInput').value = '';
                document.getElementById('phoneInput').value = '';
                document.getElementById('summaryInput').value = '';
                document.querySelectorAll('#skillsGroup input[type="checkbox"]').forEach(function(c){ c.checked = false; });
                document.getElementById('educationContainer').innerHTML = '';
                addEducationRow();
                document.getElementById('experienceContainer').innerHTML = '';
                addExperienceRow();
                document.getElementById('projectsContainer').innerHTML = '';
                addProjectRow();
                document.getElementById('certificationsContainer').innerHTML = '';
                addCertificationRow();
                renderResume();
            });

            document.getElementById('printResumeBtn').addEventListener('click', function() {
                window.print();
            });

            document.getElementById('downloadPdfBtn').addEventListener('click', function() {
                var btn = this;
                var originalLabel = btn.textContent;
                var resumeEl = document.getElementById('resumePreview');
                var fileName = (document.getElementById('nameInput').value.trim() || 'resume')
                    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.pdf';

                btn.disabled = true;
                btn.textContent = 'Preparing PDF…';
                var PROPS_TO_BAKE = [
                    'color', 'backgroundColor', 'borderColor', 'borderTopColor',
                    'borderRightColor', 'borderBottomColor', 'borderLeftColor',
                    'fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing'
                ];

                function bakeComputedStyles(node) {
                    var computed = window.getComputedStyle(node);
                    var inline = '';
                    for (var i = 0; i < PROPS_TO_BAKE.length; i++) {
                        var prop = PROPS_TO_BAKE[i];
                        var cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
                        inline += cssProp + ':' + computed.getPropertyValue(cssProp) + ';';
                    }
                    node.setAttribute('style', node.getAttribute('style') ? node.getAttribute('style') + ';' + inline : inline);
                    for (var c = 0; c < node.children.length; c++) {
                        bakeComputedStyles(node.children[c]);
                    }
                }

                var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();

                fontsReady.then(function() {
                    bakeComputedStyles(resumeEl);
                    resumeEl.style.animation = 'none';
                    resumeEl.style.opacity = '1';
                    resumeEl.style.transform = 'none';

                    var opt = {
                        margin: 0,
                        filename: fileName,
                        image: { type: 'jpeg', quality: 1 },
                        html2canvas: {
                            scale: 2,
                            backgroundColor: '#ffffff',
                            useCORS: true,
                            allowTaint: true,
                            letterRendering: true,
                            onclone: function(clonedDoc) {
                                var clonedResume = clonedDoc.getElementById('resumePreview');
                                if (clonedResume) {
                                    clonedResume.style.animation = 'none';
                                    clonedResume.style.opacity = '1';
                                    clonedResume.style.transform = 'none';
                                }
                            }
                        },
                        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
                    };

                    return html2pdf().set(opt).from(resumeEl).save();
                }).then(function() {
                    btn.disabled = false;
                    btn.textContent = originalLabel;
                    resumeEl.removeAttribute('style');
                    renderResume();
                }).catch(function() {
                    btn.disabled = false;
                    btn.textContent = originalLabel;
                    resumeEl.removeAttribute('style');
                    renderResume();
                    alert('Could not generate the PDF. Please try again.');
                });
            });

            renderResume();
        });