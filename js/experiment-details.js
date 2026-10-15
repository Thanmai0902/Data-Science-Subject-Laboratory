document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id) {
        document.getElementById('mainContent').innerHTML = "<h1>Experiment not found</h1>";
        return;
    }

    const experiment = getExperimentById(id);
    if (!experiment) {
        document.getElementById('mainContent').innerHTML = "<h1>Experiment not found</h1>";
        return;
    }

    const allExperiments = getExperiments();
    const currentIndex = allExperiments.findIndex(e => e.id === parseInt(id));
    
    let prevLink = currentIndex > 0 ? `experiment.html?id=${allExperiments[currentIndex - 1].id}` : '#';
    let nextLink = currentIndex < allExperiments.length - 1 ? `experiment.html?id=${allExperiments[currentIndex + 1].id}` : '#';
    
    let prevStyle = currentIndex > 0 ? '' : 'visibility: hidden;';
    let nextStyle = currentIndex < allExperiments.length - 1 ? '' : 'visibility: hidden;';

    document.getElementById('sidebarExpNumber').textContent = experiment.experiment_number;

    // Build procedure HTML
    const procLines = experiment.procedure.split('\n').map(line => `<p>${line}</p>`).join('');

    const contentHtml = `
        <div style="text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 1px; margin-bottom: 10px;">
            ${experiment.experiment_number}
        </div>
        <h1>${experiment.title}</h1>

        <div id="aim" class="content-section">
            <h2>AIM</h2>
            <p>${experiment.aim}</p>
        </div>

        <div id="objective" class="content-section">
            <h2>OBJECTIVE</h2>
            <p>${experiment.objective}</p>
        </div>

        <div id="theory" class="content-section">
            <h2>THEORY</h2>
            <p>${experiment.theory.replace(/\n/g, '<br>')}</p>
        </div>

        <div id="requirements" class="content-section">
            <h2>REQUIREMENTS</h2>
            <p>${experiment.requirements}</p>
        </div>

        <div id="dataset" class="content-section">
            <h2>DATASET</h2>
            <p>${experiment.dataset || 'Standard dataset used for this experiment.'}</p>
        </div>

        ${experiment.syntax ? `
        <div id="syntax" class="content-section">
            <h2>SYNTAX & USAGE</h2>
            <pre class="code-block" style="background: #F8FAFD; color: var(--gamma-navy); border: 1px solid var(--card-border); padding: 16px; border-radius: 10px; font-size: 0.88rem; font-family: 'JetBrains Mono', monospace;">${experiment.syntax}</pre>
        </div>` : ''}

        <div id="procedure" class="content-section">
            <h2>PROCEDURE</h2>
            ${procLines}
        </div>

        <div id="implementation" class="content-section">
            <h2>IMPLEMENTATION &amp; EDITOR</h2>
            <div style="border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; margin-top: 15px; box-shadow: var(--shadow-md);">
                <div style="background-color: #1e293b; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155;">
                    <div style="display: flex; gap: 8px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ff5f56;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ffbd2e;"></div>
                        <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #27c93f;"></div>
                    </div>
                    <button class="btn-primary" style="margin-top: 0; padding: 6px 16px; font-size: 0.9rem; background-color: var(--primary-color); color: white; font-weight: 600; display: flex; align-items: center; gap: 5px; box-shadow: none;" onclick="runExperimentCode()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Run Code
                    </button>
                </div>
                <div id="experiment-editor" style="height: 400px; width: 100%; font-size: 15px;"></div>
                <div style="background-color: #0F172A; color: #C8E64A; padding: 15px; font-family: monospace; height: 180px; overflow-y: auto; border-top: 1px solid var(--border-color); font-size: 0.9rem;" id="experiment-output">
                    > Terminal ready.<br>> Hit 'Run Code' to execute this experiment.
                </div>
            </div>
        </div>

        <div id="output" class="content-section">
            <h2>EXPECTED OUTPUT &amp; GRAPHICS</h2>
            ${experiment.expected_output ? `<pre class="code-block" style="background: #0F172A; color: #E2E8F0; padding: 18px; border-radius: 12px; overflow-x: auto; margin-bottom: 15px; font-size: 0.86rem; font-family: 'JetBrains Mono', monospace; line-height: 1.5;">${experiment.expected_output}</pre>` : ''}
            ${experiment.output_image ? 
                `<img src="${experiment.output_image}" alt="Output Graph" style="max-width: 100%; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: var(--shadow-sm);">` : 
                `<div style="padding: 24px; background: #F8FAFD; border-radius: 10px; border: 1px dashed var(--card-border); color: var(--gamma-muted); font-size: 0.9rem;">Plots are rendered in an interactive Matplotlib / Seaborn window upon execution.</div>`
            }
        </div>

        <div id="result" class="content-section">
            <h2>RESULT</h2>
            <p>${experiment.result}</p>
        </div>

        <!-- Associated GitHub Repository -->
        <div id="repository" class="content-section" style="background: linear-gradient(135deg, #F8FAFD 0%, #EFF6FF 100%); border: 1.5px solid var(--card-border); border-radius: 18px; padding: 26px 28px; margin-top: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
                <div>
                    <span class="gamma-badge" style="background: #EFF6FF; color: var(--gamma-blue); margin-bottom: 6px;">✦ ASSOCIATED LAB REPOSITORY</span>
                    <h3 style="font-size: 1.3rem; color: var(--gamma-navy); margin: 6px 0 4px; font-family: 'Playfair Display', serif;">pandas_data_formats</h3>
                    <p style="font-size: 0.92rem; color: var(--gamma-body); margin: 0;">Access code implementations, pandas data formats, datasets, and Jupyter notebook files for this experiment.</p>
                </div>
                <a href="${experiment.github_repo || 'https://github.com/Thanmai0902/pandas_data_formats'}" target="_blank" class="gamma-pill-btn" style="background: #0F172A; color: #FFFFFF; font-weight: 700; display: inline-flex; align-items: center; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    pandas_data_formats ↗
                </a>
            </div>
            <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed rgba(37,99,235,0.25); font-size: 0.84rem; color: var(--gamma-muted);">
                GitHub Link: <a href="${experiment.github_repo || 'https://github.com/Thanmai0902/pandas_data_formats'}" target="_blank" style="color: var(--gamma-blue); font-weight: 600;">https://github.com/Thanmai0902/pandas_data_formats</a>
            </div>
        </div>

        <div class="nav-buttons">
            <a href="${prevLink}" class="btn-outline" style="${prevStyle}">← Previous Experiment</a>
            <a href="experiments.html" class="btn-outline">Back to Experiments</a>
            <a href="${nextLink}" class="btn-outline" style="${nextStyle}">Next Experiment →</a>
        </div>
    `;

    document.getElementById('mainContent').innerHTML = contentHtml;

    // Setup scrollspy for sidebar
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Initialize Ace Editor
    setTimeout(() => {
        if(document.getElementById('experiment-editor') && typeof ace !== 'undefined') {
            window.expEditor = ace.edit("experiment-editor");
            window.expEditor.setTheme("ace/theme/dracula");
            window.expEditor.session.setMode("ace/mode/python");
            window.expEditor.setValue(experiment.python_code || "# Write code here", -1);
            window.expEditor.clearSelection();
            
            window.runExperimentCode = function() {
                const output = document.getElementById('experiment-output');
                output.innerHTML += '<br><br>> Running experiment script...<br>> [Output] execution simulated successfully in local browser!';
                output.scrollTop = output.scrollHeight;
                
                // Flash the terminal background to show it did something
                output.style.backgroundColor = '#1e293b';
                setTimeout(() => {
                    output.style.backgroundColor = '#0F172A';
                }, 200);
            };
        } else {
            console.warn("Ace editor not loaded yet or container missing");
        }
    }, 100);
});
