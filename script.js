// Function to highlight all bold words
function highlight() {
    // Get all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

// Function to revert the color of all bold words to normal
function return_normal() {
    // Get all <strong> elements
    const boldElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and revert its color to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}
