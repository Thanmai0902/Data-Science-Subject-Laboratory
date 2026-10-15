// Render experiments to grid
function renderExperiments(experimentsToRender) {
    const grid = document.getElementById('experimentsGrid');
    const noResults = document.getElementById('noResults');
    const count = document.getElementById('expCount');
    
    if(!grid) return;

    grid.innerHTML = '';
    
    if (experimentsToRender.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        experimentsToRender.forEach((exp, index) => {
            let toolsHtml = '';
            if(exp.tools) {
                toolsHtml = `<div class="tech-list">` + exp.tools.slice(0,3).map(t => `<span class="tech-tag">${t}</span>`).join('') + `</div>`;
            }

            const card = document.createElement('div');
            card.className = 'experiment-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="exp-number">${exp.experiment_number}</div>
                <h3>${exp.title}</h3>
                <p>${exp.short_description}</p>
                ${toolsHtml}
                <div style="margin-top: auto; padding-top: 14px; border-top: 1px dashed var(--card-border); font-size: 0.82rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                    <a href="${exp.github_repo || 'https://github.com/Thanmai0902/pandas_data_formats'}" target="_blank" style="color: var(--gamma-blue); font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 5px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        pandas_data_formats ↗
                    </a>
                    <a href="experiment.html?id=${exp.id}" class="btn-outline" style="padding: 4px 12px; font-size: 0.82rem;">Inspect →</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    if(count) count.textContent = experimentsToRender.length;
}

// Modal handling
function openAddModal() {
    document.getElementById('addModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals if clicking outside content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const allExperiments = getExperiments();
    renderExperiments(allExperiments);

    // Photo Upload Logic
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('studentPhotoPreview');
    
    if (photoUpload && photoPreview) {
        // Load saved photo if any
        const savedPhoto = localStorage.getItem('studentPhoto_S_Thanmai');
        if (savedPhoto) {
            photoPreview.src = savedPhoto;
        }

        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const result = e.target.result;
                    photoPreview.src = result;
                    localStorage.setItem('studentPhoto_S_Thanmai', result);
                }
                reader.readAsDataURL(file);
            }
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = allExperiments.filter(exp => 
                exp.title.toLowerCase().includes(query) || 
                exp.short_description.toLowerCase().includes(query) ||
                exp.experiment_number.toLowerCase().includes(query)
            );
            renderExperiments(filtered);
        });
    }

    // Add Experiment Form
    const addForm = document.getElementById('addExperimentForm');
    if(addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newExp = {
                experiment_number: document.getElementById('expNum').value,
                title: document.getElementById('expTitle').value,
                short_description: document.getElementById('expDesc').value,
                aim: document.getElementById('expAim').value,
                objective: document.getElementById('expObj').value,
                theory: document.getElementById('expTheory').value,
                requirements: document.getElementById('expReq').value,
                procedure: document.getElementById('expProc').value,
                python_code: document.getElementById('expCode').value,
                result: document.getElementById('expResult').value,
                tools: ["Python"], // Default tool for custom added
                dataset: "Custom dataset",
                output_image: ""
            };

            saveExperiment(newExp);
            closeModal('addModal');
            e.target.reset();
            
            // Refresh grid
            renderExperiments(getExperiments());
        });
    }
});
