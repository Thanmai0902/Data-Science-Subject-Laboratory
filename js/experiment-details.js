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

        <div id="procedure" class="content-section">
            <h2>PROCEDURE</h2>
            ${procLines}
        </div>

        <div id="implementation" class="content-section">
            <h2>IMPLEMENTATION & EDITOR</h2>
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
            <h2>OUTPUT GRAPHICS</h2>
            ${experiment.output_image ? 
                `<img src="${experiment.output_image}" alt="Output Graph" style="max-width: 100%; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: var(--shadow-sm);">` : 
                `<div style="padding: 40px; background: var(--card-bg); text-align: center; border-radius: 8px; border: 1px dashed var(--border-color); color: var(--text-muted);">[Output Image/Graph Placeholder]</div>`
            }
        </div>

        <div id="result" class="content-section">
            <h2>RESULT</h2>
            <p>${experiment.result}</p>
        </div>

        <div class="nav-buttons">
            <a href="${prevLink}" class="btn-outline" style="${prevStyle}">← Previous Experiment</a>
            <a href="index.html" class="btn-outline" style="border:none;">Back to Experiments</a>
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
