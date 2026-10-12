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
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <div class="exp-number">${exp.experiment_number}</div>
                <h3>${exp.title}</h3>
                <p>${exp.short_description}</p>
                ${toolsHtml}
                <a href="experiment.html?id=${exp.id}" class="btn-outline" style="margin-top: auto; align-self: flex-start;">View →</a>
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
