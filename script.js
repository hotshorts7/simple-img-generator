document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const imageDisplay = document.getElementById('image-display');

    // List of public domain/free stock images (e.g., from Unsplash/Pexels)
    // IMPORTANT: Use full, accessible URLs for external images.
    const imageUrls = [
        'https://picsum.photos/400/300?random=1', // Random image 1
        'https://picsum.photos/400/300?random=2', // Random image 2
        'https://picsum.photos/400/300?random=3', // Random image 3
        'https://picsum.photos/400/300?random=4', // Random image 4
        'https://picsum.photos/400/300?random=5'  // Random image 5
    ];

    function generateImage() {
        // 1. Get a random URL from the array
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const imageUrl = imageUrls[randomIndex];

        // 2. Clear the previous image
        imageDisplay.innerHTML = '';

        // 3. Create a new image element
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Generated Image';
        
        // 4. Add the image to the display area
        imageDisplay.appendChild(img);
    }

    // Load an image on initial page load
    generateImage();

    // Attach event listener to the button
    generateBtn.addEventListener('click', generateImage);
});
