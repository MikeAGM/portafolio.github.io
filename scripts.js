/* General styling */
body {
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.8;
    color: #333;
    background-color: #ffffff; /* Start with white background */
    transition: background-color 0.6s ease, color 0.6s ease; /* Smooth transition for both background and text color */
    text-align: left; /* Align body text to the left */
}

/* Header styling */
header {
    background-color: #000; /* Set black background */
    color: #fff; /* Set text color to white */
    display: flex;
    align-items: center;
    padding: 20px; /* Adjust the padding to a compact layout */
}

header img {
    width: 100px; /* Image size for the profile picture */
    height: auto;
    border-radius: 50%; /* Make the image round */
    margin-right: 15px;
}

header h1 {
    font-size: 2rem; /* Adjusted font size for the header */
}

header p {
    font-size: 1rem; /* Smaller font size for paragraphs */
}

header a {
    color: #4CAF50; /* Green color for email and LinkedIn links */
}

/* Section styling */
section {
    text-align: left; /* Align content to the left */
    padding: 60px;
    margin: 40px auto;
    border-radius: 12px;
    max-width: 1200px; /* Restrict section width */
    transition: background-color 0.6s ease, color 0.6s ease;
}

/* Project Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexible grid layout */
    gap: 30px; /* Space between project items */
    margin-top: 20px;
}

/* Project Items */
.project-item {
    border: 1px solid #ddd; /* Light border around each project */
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
}

.project-item h3 {
    margin: 15px 0 10px;
    font-size: 1.5rem; /* Slightly larger title font */
    color: #333;
}

.project-item p {
    font-size: 1.2rem; /* Slightly larger description font */
    color: #555;
}

/* Adjust image size for project items */
.project-item img {
    width: 100%; /* Ensure the image is responsive */
    max-width: 500px; /* Limit the maximum width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 5px; /* Optional: Add rounded corners */
    object-fit: cover; /* Ensure the images maintain aspect ratio */
    margin: 0 auto; /* Center the image */
}

/* Footer styling */
footer {
    padding: 30px;
    text-align: center;
    background-color: #000;
    color: #fff;
}
