// Scroll to section function
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Open link function
const openProjectLink = (link) => {
    window.open(link);
}

export { scrollToSection, openProjectLink };