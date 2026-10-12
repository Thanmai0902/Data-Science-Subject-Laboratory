const CONFIG = {
    MBU_LOGO: "https://th.bing.com/th/id/OIP.bResCP4t_UH2aiOZUSW0FgHaHa?pid=ImgDet&rs=1", // Updated from user prompt
    STUDENT_PHOTO: "assets/student_photo.png", // Replace with actual photo path
    STUDENT_NAME: "Mounika",
    STUDENT_ID: "[ADD ID]",
    SUBJECT_CODE: "22DS102006",
    YOUTUBE_LINK: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Embed link
    YOUTUBE_WATCH_LINK: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Watch link
    GITHUB_LINK: "[PASTE_GITHUB_LINK_HERE]",
    PROJECT_NAME: "[ADD PROJECT NAME]",
    PROJECT_DESCRIPTION: "[ADD PROJECT DESCRIPTION]"
};

// Apply config to DOM elements on load if they exist
document.addEventListener('DOMContentLoaded', () => {
    const applyConfig = (selector, value, isSrc = false, isHref = false) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (isSrc) el.src = value;
            else if (isHref) el.href = value;
            else el.textContent = value;
        });
    };

    applyConfig('.config-student-name', CONFIG.STUDENT_NAME);
    applyConfig('.config-student-id', CONFIG.STUDENT_ID);
    applyConfig('.config-subject-code', CONFIG.SUBJECT_CODE);
    applyConfig('.config-project-name', CONFIG.PROJECT_NAME);
    applyConfig('.config-project-description', CONFIG.PROJECT_DESCRIPTION);
    applyConfig('.config-mbu-logo', CONFIG.MBU_LOGO, true);
    applyConfig('.config-student-photo', CONFIG.STUDENT_PHOTO, true);
    applyConfig('.config-youtube-embed', CONFIG.YOUTUBE_LINK, true);
    applyConfig('.config-youtube-link', CONFIG.YOUTUBE_WATCH_LINK, false, true);
    applyConfig('.config-github-link', CONFIG.GITHUB_LINK, false, true);
});
