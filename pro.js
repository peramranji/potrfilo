// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation & Feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Simulate a successful message submission
        document.getElementById('form-feedback').innerHTML = `<p style="color:green;">Thank you, ${name}! Your message has been sent successfully.</p>`;
        
        // Clear the form fields
        document.getElementById('contact-form').reset();
    } else {
        // Show error message if fields are missing
        document.getElementById('form-feedback').innerHTML = `<p style="color:red;">Please fill in all fields.</p>`;
    }
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            document.getElementById('form-feedback').innerHTML = `<p style="color:green;">Thank you, ${name}! Your message has been sent successfully.</p>`;
            document.getElementById('contact-form').reset();
        }, (error) => {
            document.getElementById('form-feedback').innerHTML = `<p style="color:red;">Oops! Something went wrong. Please try again later.</p>`;
            console.error('EmailJS Error:', error);
        });
});

