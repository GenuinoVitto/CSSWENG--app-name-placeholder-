document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('contact-message');
    const emailInput = document.getElementById('contact-email');
    const emailFeedbackLink = document.querySelector('.email-feedback');
    const errorMessageSpan = document.getElementById('error-message');
    const successMessageSpan = document.getElementById('success-message');

    //  Form checker
    emailFeedbackLink.addEventListener('click', function(event) {
        const legitEmailDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@icloud.com', '@hotmail.com'];
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Clear existing messages
        errorMessageSpan.textContent = '';
        successMessageSpan.textContent = '';
        errorMessageSpan.classList.remove('error');
        successMessageSpan.classList.remove('success');

        if (email === '' && message === '') { // empty fields
            event.preventDefault();
            errorMessageSpan.textContent = 'Please fill out the email and message fields.';
            setTimeout(function() {
                errorMessageSpan.classList.add('error', 'shake');
            }, 10); // Delay added here
        } else if (legitEmailDomains.some(domain => email.endsWith(domain)) && message === '') {
            event.preventDefault(); // valid email, empty message
            errorMessageSpan.textContent = 'Please provide a message.';
            setTimeout(function() {
                errorMessageSpan.classList.add('error', 'shake');
            }, 10); // Delay added here
        } else if (!legitEmailDomains.some(domain => email.endsWith(domain)) && message !== '') {
            event.preventDefault(); // empty email, with message
            errorMessageSpan.textContent = 'Please provide a valid email address.';
            setTimeout(function() {
                errorMessageSpan.classList.add('error', 'shake');
            }, 10); // Delay added here
        } else if (!legitEmailDomains.some(domain => email.endsWith(domain)) && message === '') {
            event.preventDefault(); // invalid email, empty message
            errorMessageSpan.textContent = 'Please provide a valid email address and a message.';
            setTimeout(function() {
                errorMessageSpan.classList.add('error', 'shake');
            }, 10); // Delay added here
        } else {
            const subject = 'iDOLTAXI Feedback';
            const body = `${message}`;
            const mailtoLink = `mailto:idoltaxi.r4a@gmail.com?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            // Display success message
            successMessageSpan.classList.add('success');
            successMessageSpan.textContent = 'Redirecting you to your email client...';
        }
    });
});
