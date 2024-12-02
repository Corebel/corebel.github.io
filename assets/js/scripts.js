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

    // Contact Form Submission with hCaptcha
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const payload = new URLSearchParams(formData);

            const hcaptchaResponse = document.querySelector('[name="h-captcha-response"]').value;
            if (!hcaptchaResponse) {
                alert("Please complete the hCaptcha.");
                return;
            }
            payload.append("h-captcha-response", hcaptchaResponse);

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

    // Function to reset Copilot session
    function resetCopilotSession() {
        const copilotIframe = document.createElement('iframe');
        copilotIframe.src = "https://copilotstudio.microsoft.com/environments/Default-1849246c-173d-4d4b-8155-25047bc80c5b/bots/crdfc_codeCraft/webchat?__version__=2";
        copilotIframe.frameBorder = "0";
        copilotIframe.classList.add('copilot-chat');

        // Remove existing iframe if present
        const existingIframe = document.querySelector('.copilot-chat');
        if (existingIframe) {
            existingIframe.remove();
        }

        document.body.appendChild(copilotIframe);
    }

    // Reset Copilot session on page load
    resetCopilotSession();

    // Toggle AI chat visibility
    const toggleChatButton = document.getElementById('toggleChatButton');
    toggleChatButton.addEventListener('click', function() {
        const copilotChat = document.querySelector('.copilot-chat');
        if (copilotChat.style.display === 'none' || copilotChat.style.display === '') {
            copilotChat.style.display = 'block';
        } else {
            copilotChat.style.display = 'none';
        }
    });
});
