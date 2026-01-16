// Initialize EmailJS
// IMPORTANT: Replace these with your actual EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

(function () {
    emailjs.init(PUBLIC_KEY);
})();

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Change button state to loading
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Send email
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function () {
                console.log('SUCCESS!');
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
                console.log('FAILED...', error);
                submitBtn.innerText = 'Failed. Try Again.';
                submitBtn.disabled = false;

                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                }, 3000);
            });
    });
});
