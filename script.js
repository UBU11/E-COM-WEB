document.getElementById('aboutLink').addEventListener('click', function (event) {
    event.preventDefault();
    toggleSection('about');
});

document.getElementById('privacyLink').addEventListener('click', function (event) {
    event.preventDefault();
    toggleSection('privacy');
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
