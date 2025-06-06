function secretFunction() {
    console.log("This is hidden!");
}
function a() { console.log("This is hidden!"); }



// Disable Right-Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
    }
});

setInterval(function () {
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 100) {
        window.location.replace("https://google.com"); // Redirect
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add("show-animation");
            }
        });
    }, { threshold: 0.5 }); // Animation triggers when 50% of the form is visible

    observer.observe(contactForm);
});







document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    productCards.forEach(card => {
        observer.observe(card);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNav() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
})






/*pop up message*/
$(document).ready(function () {
    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Prevent the page from refreshing

        // Show Bootstrap modal
        var messageModal = new bootstrap.Modal(document.getElementById("messageSentModal"));
        messageModal.show();

        // Reset the form after submission
        $("#contactForm")[0].reset();
    });
});



/*<textarea> validation*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        if (messageInput.value.trim().length < 20) {
            event.preventDefault(); // Stop form submission
            messageError.classList.remove("d-none"); // Show error message
            messageInput.classList.add("is-invalid"); // Highlight input
        } else {
            messageError.classList.add("d-none"); // Hide error message
            messageInput.classList.remove("is-invalid"); // Remove highlight
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    if (!document.cookie.includes("cookiesAccepted=true")) {
        document.getElementById("cookieConsent").style.display = "block";
    }

    document.getElementById("acceptCookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + (365 * 24 * 60 * 60);
        document.getElementById("cookieConsent").style.display = "none";
    });
});





/*JavaScript to Toggle Chatbox*/
document.getElementById("chatbox-toggle").addEventListener("click", function () {
    var menu = document.getElementById("chatbox-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Close the chatbox menu when clicking outside
document.addEventListener("click", function (event) {
    var chatbox = document.getElementById("chatbox-menu");
    var button = document.getElementById("chatbox-toggle");

    if (!chatbox.contains(event.target) && !button.contains(event.target)) {
        chatbox.style.display = "none";
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let openBtn = document.getElementById("openTranslate");
    let closeBtn = document.getElementById("closeTranslate");
    let popup = document.getElementById("translatePopup");
    let languageSelect = document.getElementById("languageSelect");

    // Show popup
    openBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Close popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Translate when language is selected
    languageSelect.addEventListener("change", function () {
        let targetLang = languageSelect.value;
        translatePage(targetLang);
    });

    async function translatePage(targetLang) {
        let elements = document.querySelectorAll("[data-translate]");

        for (let el of elements) {
            let text = el.textContent.trim();
            let translatedText = await translateText(text, targetLang);
            if (translatedText) {
                el.textContent = translatedText;
            }
        }
    }

    async function translateText(text, targetLang) {
        try {
            let response = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    q: text,
                    source: "en",
                    target: targetLang,
                    format: "text",
                }),
            });
            let data = await response.json();
            return data.translatedText;
        } catch (error) {
            console.error("Translation error:", error);
            return null;
        }
    }
});



var backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
