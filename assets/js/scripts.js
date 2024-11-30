document.addEventListener("DOMContentLoaded", function () {
    // Load favicon dynamically
    const faviconLink = document.querySelector("link[rel='icon']");
    if (!faviconLink) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = '/assets/images/favicon.png';
        link.type = 'image/png';
        document.head.appendChild(link);
    }

    // Make all links in the downloads page downloadable
    const downloadLinks = document.querySelectorAll("#downloads a");
    downloadLinks.forEach(link => {
        link.setAttribute("download", "");
    });

    // Contact Form Submission with reCAPTCHA
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const payload = new URLSearchParams(formData);

            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                alert("Please complete the reCAPTCHA.");
                return;
            }
            payload.append("g-recaptcha-response", recaptchaResponse);

            const response = await fetch(form.action, {
                method: form.method,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: payload,
            });

            if (response.ok) {
                alert("Thank you for your message. We'll get back to you shortly.");
                form.reset();
                grecaptcha.reset();
            } else {
                alert("There was a problem submitting your message. Please try again later.");
            }
        });
    }
});
