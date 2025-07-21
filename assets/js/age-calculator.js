// Dynamic Age Calculator
// Calculates age from birth year 1999 to current date

function calculateAge() {
    const birthYear = 1999;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-based (January = 0)
    const currentDay = currentDate.getDate();
    
    // Assuming birth date is January 1st, 1999 (you can adjust month/day if needed)
    const birthMonth = 0; // January (0-based)
    const birthDay = 1;
    
    let age = currentYear - birthYear;
    
    // Adjust if birthday hasn't occurred this year yet
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }
    
    return age;
}

// Function to update age in DOM elements
function updateAgeElements() {
    const age = calculateAge();
    
    // Update age span in profile info
    const ageSpan = document.querySelector('[data-age-display]');
    if (ageSpan) {
        ageSpan.textContent = `Age: ${age}`;
    }
    
    // Update age in hero description
    const heroDescription = document.querySelector('[data-age-description]');
    if (heroDescription) {
        heroDescription.innerHTML = `I'm a ${age}-year-old technical team lead and full-stack developer who builds scalable backend systems, intuitive interfaces, and intelligent automations. My work spans AI, blockchain, and automation. I believe in building quiet empires through clean code, strategic thinking, and emotional resilience.`;
    }
}

// Initialize age calculation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateAgeElements();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateAge, updateAgeElements };
}
