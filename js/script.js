window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const html_element = document.documentElement
    const percentOfScreenHeightScrolled = html_element.scrrollTop / html_element.clientHeight
    html_element.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()

function startConfetti() {
    // const button = document.querySelector('#confetti');
    const canvas = document.querySelector('#confetti-canvas');

    const сonfetti = new Confetti()

    // button.addEventListener('click', () => {
        сConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 1000,       
        })
    // })
}

function checkEmail(email) {
    var emailRegularExpressions = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegularExpressions.test(email);
}

function hideSubsForm() {
    var subsForm = document.getElementById("subsForm");
    subsForm.style.display = 'none';
}

function enableAfterSubsForm() {
    var afterSubsForm = document.getElementById("afterSubsForm");
    afterSubsForm.style.display = 'block';
}

function showEmailValidError() {
    var emailError = document.getElementById("emailError");
    emailError.style.display = 'block';
}

function getAndCheckEmail() {
    var rowInput = document.getElementById("email-form");
    var email = rowInput.value;

    if (checkEmail(email)) {
        hideSubsForm();
        enableAfterSubsForm();
        startConfetti();
      } else {
        showEmailValidError();
      }
}

