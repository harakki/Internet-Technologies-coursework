// Обработчик события промотки
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const html_element = document.documentElement
    const percentOfScreenHeightScrolled = html_element.scrrollTop / html_element.clientHeight
    html_element.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()


// Выпуск конфетти
function startConfetti() {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 1000,       
    })
}

// Обработчик события: нажатие кнопки => взрыв конфетти

// const button = document.querySelector('#confetti');
// const canvas = document.querySelector('#confetti-canvas');

// const jsConfetti = new JSConfetti()

// button.addEventListener('click', () => {
//     jsConfetti.addConfetti({
//         confettiRadius: 6,
//         confettiNumber: 1000,       
//     })
// })

// Проверка электронной почты на валидность
function checkEmail(email) {
    var emailRegularExpressions = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegularExpressions.test(email);
}

// Скрыть контейнер подписки на Email-рассылку
function hideSubsForm() {
    var subsForm = document.getElementById("subsForm");
    subsForm.style.display = 'none';
}

// Показать контейнер успешной подписки на Email-рассылку
function enableAfterSubsForm() {
    var afterSubsForm = document.getElementById("afterSubsForm");
    afterSubsForm.style.display = 'block';
}

// Вывод ошибки о неправильно введенном Email
function showEmailValidError() {
    var emailError = document.getElementById("emailError");
    emailError.style.display = 'block';
}

// Функция обработки формы подписки на Email-рассылку
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

function clickMoreAppsButtonl() {
    var hide = document.getElementById("c11");
    var show = document.getElementById("c12");
    var btn = document.getElementById("buttonMoreApps1");
    
    hide.style.display = 'none';
    btn.style.display = 'none';
    show.style.display = 'block';
}

function clickMoreAppsButtonc() {
    var hide = document.getElementById("c13");
    var show = document.getElementById("c14");
    var btn = document.getElementById("buttonMoreApps2");
    
    hide.style.display = 'none';
    btn.style.display = 'none';
    show.style.display = 'block';
}

function clickMoreAppsButtonr() {
    var hide = document.getElementById("c15");
    var show = document.getElementById("c16");
    var btn = document.getElementById("buttonMoreApps3");
    
    hide.style.display = 'none';
    btn.style.display = 'none';
    show.style.display = 'block';
}


window.addEventListener('load', function() {
    const preLoader = document.querySelector('.preloader');
    const mainContent = document.querySelector('main');
    
    setTimeout(() => {
        preLoader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1)
});

document.addEventListener('DOMContentLoaded', function () {
    const frames = document.querySelectorAll('.slider-frame');
    let currentFrameIndex = 0;

    function showFrame(index) {
      frames.forEach((frame, i) => {
        if (i === index) {
          frame.classList.remove('hidden');
        } else {
          frame.classList.add('hidden');
        }
      });
    }

    function nextFrame() {
      currentFrameIndex = (currentFrameIndex + 1) % frames.length;
      showFrame(currentFrameIndex);
    }

    function prevFrame() {
      currentFrameIndex = (currentFrameIndex - 1 + frames.length) % frames.length;
      showFrame(currentFrameIndex);
    }

    // Initial display
    showFrame(currentFrameIndex);

    // Add event listeners to handle next and previous buttons
    document.getElementById('nextButton').addEventListener('click', nextFrame);
    document.getElementById('prevButton').addEventListener('click', prevFrame);
  });