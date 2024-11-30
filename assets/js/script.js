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

    // Contact Form Submission
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const payload = new URLSearchParams(formData);

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
            } else {
                alert("There was a problem submitting your message. Please try again later.");
            }
        });
    }
});

