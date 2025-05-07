// Hover functionality to show overlay
function showProjectImages(projectId) {
    const overlay = document.getElementById(`${projectId}-overlay`);
    overlay.classList.add('visible');

    overlay.onclick = function (e) {
        // Prevent click from blocking underlying links only if not clicking a link
        if (!e.target.closest('a')) {
            openGallery(projectId);
        }
    };
}

function hideProjectImages(projectId) {
    const overlay = document.getElementById(`${projectId}-overlay`);
    overlay.classList.remove('visible');
}

// Open the gallery modal
function openGallery(projectId) {
    const modal = document.getElementById('gallery-modal');
    const galleryImages = document.getElementById('gallery-images');

    // Clear existing images in the gallery
    galleryImages.innerHTML = '';

    // Get images for the project dynamically
    const images = getProjectImages(projectId);

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        galleryImages.appendChild(imgElement);
    });

    modal.style.display = 'flex';
}

// Close the gallery modal
function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
}

// Function to return images based on the project ID
function getProjectImages(projectId) {
    switch (projectId) {
        case 'missile-guidance':
            return ['images/missile1.jpg', 'images/missile2.jpg', 'images/missile3.jpg'];  // Example images for missile guidance project
        case 'dynamic-fields':
            return ['images/dynamic-field1.jpg', 'images/dynamic-field2.jpg', 'images/dynamic-field3.jpg'];  // Example images for dynamic fields
        case 'dynamic-neural-fields':
            return ['images/neural-field1.jpg', 'images/neural-field2.jpg', 'images/neural-field3.jpg'];  // Example images for neural fields
        // Add more projects and images as needed
        default:
            return [];
    }
}
