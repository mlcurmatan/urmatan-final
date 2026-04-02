// Get the button
const topBtn = document.getElementById("backToTop");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to the top of the document smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Loads content into the Portfolio Explorer Iframe
 */
function loadTab(button, url) {
    const iframe = document.getElementById('explorer-iframe');
    
    // Smooth transition effect
    iframe.style.opacity = "0";
    
    setTimeout(() => {
        iframe.src = url;
        iframe.style.opacity = "1";
    }, 200);

    // Update button states
    const tabs = document.querySelectorAll('.exp-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');
}
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (!menu.style.width || menu.style.width === "0%") {
        menu.style.width = "100%";
    } else {
        menu.style.width = "0%";
    }
}