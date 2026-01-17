// Initialize EmailJS
// IMPORTANT: Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_txzaf5q";
const TEMPLATE_ID = "template_b1p8h5q";
const PUBLIC_KEY = "XNLF1sD_tc5ovnJSk";

(function () {
    emailjs.init(PUBLIC_KEY);
})();

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (typeof emailjs === 'undefined') {
            alert("Error: EmailJS SDK is not loaded. Please check your internet connection.");
            return;
        }

        // Change button state to loading
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Get values directly
        const name = document.getElementById('user_name').value;
        const email = document.getElementById('user_email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Log parameters for debugging
        console.log("Attempting to send email with:", { service: SERVICE_ID, template: TEMPLATE_ID, public_key: PUBLIC_KEY });

        // Prepare parameters
        // sending both 'user_name' and 'from_name' to cover different default template styles
        const templateParams = {
            user_name: name,
            from_name: name,
            user_email: email,
            from_email: email,
            reply_to: email,
            subject: subject,
            message: message,
            to_name: "Aditya" // Optional, for "Hello Aditya" in template
        };

        // Send email using .send() instead of .sendForm() for better control
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                submitBtn.innerText = 'Message Sent!';
                submitBtn.classList.remove('btn-primary');
                submitBtn.classList.add('bg-green-500', 'text-white');

                // Reset form
                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-500', 'text-white');
                    submitBtn.classList.add('btn-primary');
                }, 3000);
            }, function (error) {
                console.error('FAILED...', error);

                // Extract specific error text if available
                const errorMessage = error.text || JSON.stringify(error) || "Unknown error";
                alert(`Failed to send. Error: ${errorMessage}`);

                submitBtn.innerText = 'Failed. Try Again.';
                submitBtn.disabled = false;

                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                }, 3000);
            });
    });
});

