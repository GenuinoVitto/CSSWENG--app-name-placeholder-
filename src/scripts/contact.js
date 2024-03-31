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

        if (email === '' && message === '') {
            event.preventDefault();
            // style through CSS
            errorMessageSpan.classList.add('error');
            errorMessageSpan.textContent = 'Please fill out the email and message fields.';
        } else if (legitEmailDomains.some(domain => email.endsWith(domain)) && message === '') {
            event.preventDefault(); 
            errorMessageSpan.classList.add('error');
            errorMessageSpan.textContent = 'Please provide a message.';
        } else if (!legitEmailDomains.some(domain => email.endsWith(domain)) && message !== '') {
            event.preventDefault();
            errorMessageSpan.classList.add('error');
            errorMessageSpan.textContent = 'Please provide a valid email address.';
        } else {
            const subject = 'iDOLTAXI Feedback';
            const body = `${message}`;
            const mailtoLink = `mailto:idoltaxi.r4a@gmail.com?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            successMessageSpan.classList.add('success');
            successMessageSpan.textContent = 'Redirecting you to your email client...';
        }
    });
});
