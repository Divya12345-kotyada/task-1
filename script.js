// Framework data with icons and colors
const frameworks = [
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'Angular', icon: 'angular', color: '#DD0031' },
    { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D' },
    { name: 'Node.js', icon: 'node-js', color: '#8CC84B' },
    { name: 'Django', icon: 'python', color: '#092E20' },
    { name: 'Flask', icon: 'flask', color: '#000000' },
    { name: 'Express', icon: 'js', color: '#000000' },
    { name: 'Ruby on Rails', icon: 'gem', color: '#CC0000' },
    { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
    { name: 'Spring', icon: 'leaf', color: '#6DB33F' },
    { name: 'ASP.NET', icon: 'microsoft', color: '#512BD4' },
    { name: 'Flutter', icon: 'mobile-screen', color: '#02569B' }
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Frameworks button
    const showFrameworksBtn = document.getElementById('showFrameworksBtn');
    
    // Add click effect to the button
    showFrameworksBtn.addEventListener('click', function() {
        // Add visual feedback
        this.classList.add('clicked');
        
        // Show alert message
        alert('Welcome to the Frameworks Explorer! Click OK to continue.');
        
        // Navigate to frameworks page after alert is closed
        window.location.href = 'frameworks.html';
        
        // Remove click effect after a short delay
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Add hover effect to the button
    showFrameworksBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    showFrameworksBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
