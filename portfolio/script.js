const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

const portfolioTabs = document.querySelectorAll(".portfolio__tab");
const portfolioImages = document.querySelectorAll(".portfolio__grid img");

const seasons = ["winter", "spring", "summer", "autumn"];

/* Burger menu */

burger?.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("burger--active");

  nav?.classList.toggle("nav--open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--open");
    document.body.classList.remove("menu-open");
    burger?.setAttribute("aria-label", "Open menu");
  });
});

/* Portfolio image preload */

function preloadPortfolioImages() {
  seasons.forEach((season) => {
    for (let i = 1; i <= 6; i += 1) {
      const img = new Image();
      img.src = `./assets/images/${season}/${i}.jpg`;
    }
  });
}

preloadPortfolioImages();

/* Portfolio tabs */

portfolioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const season = tab.dataset.season;

    if (!season) return;

    portfolioTabs.forEach((item) => {
      item.classList.remove("portfolio__tab--active");
    });

    tab.classList.add("portfolio__tab--active");

    portfolioImages.forEach((image, index) => {
      image.classList.add("is-changing");

      setTimeout(() => {
        image.src = `./assets/images/${season}/${index + 1}.jpg`;
        image.alt = `${season} portfolio photo`;
        image.classList.remove("is-changing");
      }, 180);
    });
  });
});
const langButtons = document.querySelectorAll(".lang__btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const placeholderElements = document.querySelectorAll(
  "[data-i18n-placeholder]",
);

const translations = {
  en: {
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navVideo: "Video",
    navPrice: "Price",
    navContacts: "Contacts",

    heroTitle: "Alexa Rise",
    heroText:
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hireMe: "Hire me",

    skillsTitle: "Skills",
    skillPhotographyTitle: "Digital photography",
    skillPhotographyText: "High-quality photos in the studio and on the nature",
    skillVideoTitle: "Video shooting",
    skillVideoText: "Capture your moments so that they always stay with you",
    skillRetouchTitle: "Retouch",
    skillRetouchText: "I strive to make photography surpass reality",
    skillAudioTitle: "Audio",
    skillAudioText:
      "Professional sounds recording for video, advertising, portfolio",

    portfolioTitle: "Portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",

    videoTitle: "Video",

    priceTitle: "Price",
    standardTitle: "Standard",
    premiumTitle: "Premium",
    goldTitle: "Gold",
    standardPrice: "$500",
    premiumPrice: "$700",
    goldPrice: "$1000",

    oneLocation: "One location",
    oneTwoLocations: "One or two locations",
    threeLocations: "Three locations or more",
    photos120: "120 photos in color",
    photos200: "200 photos in color",
    photos300: "300 photos in color",
    retouch12: "12 photos in retouch",
    retouch20: "20 photos in retouch",
    retouch50: "50 photos in retouch",
    readiness23: "Readiness 2-3 weeks",
    readiness12: "Readiness 1-2 weeks",
    readiness1: "Readiness 1 week",
    makeup: "Make up, visage",
    makeupHair: "Make up, visage, hairstyle",
    orderShooting: "Order shooting",

    contactsTitle: "Contact me",
    sendMessage: "Send message",
    emailPlaceholder: "E-mail",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Message",

    footerSchool: "Rolling Scopes School",
  },

  ua: {
    navSkills: "Навички",
    navPortfolio: "Портфоліо",
    navVideo: "Відео",
    navPrice: "Ціни",
    navContacts: "Контакти",

    heroTitle: "Алекса Райз",
    heroText:
      "Збережіть щирі емоції, романтичні почуття та щасливі моменти життя разом із професійним фотографом Алексою Райз",
    hireMe: "Замовити",

    skillsTitle: "Навички",
    skillPhotographyTitle: "Цифрова фотографія",
    skillPhotographyText: "Якісні фотографії у студії та на природі",
    skillVideoTitle: "Відеозйомка",
    skillVideoText: "Збережіть свої моменти, щоб вони завжди залишалися з вами",
    skillRetouchTitle: "Ретуш",
    skillRetouchText: "Я прагну зробити фотографію ще виразнішою за реальність",
    skillAudioTitle: "Аудіо",
    skillAudioText: "Професійний запис звуку для відео, реклами та портфоліо",

    portfolioTitle: "Портфоліо",
    winter: "Зима",
    spring: "Весна",
    summer: "Літо",
    autumn: "Осінь",

    videoTitle: "Відео",

    priceTitle: "Ціни",
    standardTitle: "Стандарт",
    premiumTitle: "Преміум",
    goldTitle: "Золото",
    standardPrice: "$500",
    premiumPrice: "$700",
    goldPrice: "$1000",

    oneLocation: "Одна локація",
    oneTwoLocations: "Одна або дві локації",
    threeLocations: "Три локації або більше",
    photos120: "120 фотографій у кольорі",
    photos200: "200 фотографій у кольорі",
    photos300: "300 фотографій у кольорі",
    retouch12: "12 фотографій у ретуші",
    retouch20: "20 фотографій у ретуші",
    retouch50: "50 фотографій у ретуші",
    readiness23: "Готовність через 2-3 тижні",
    readiness12: "Готовність через 1-2 тижні",
    readiness1: "Готовність через 1 тиждень",
    makeup: "Макіяж, візаж",
    makeupHair: "Макіяж, візаж, зачіска",
    orderShooting: "Замовити зйомку",

    contactsTitle: "Звʼяжіться зі мною",
    sendMessage: "Надіслати",
    emailPlaceholder: "E-mail",
    phonePlaceholder: "Телефон",
    messagePlaceholder: "Повідомлення",

    footerSchool: "Rolling Scopes School",
  },
};

function setLanguage(lang) {
  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[lang]?.[key]) {
      element.textContent = translations[lang][key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (translations[lang]?.[key]) {
      element.placeholder = translations[lang][key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("lang__btn--active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang === "ua" ? "uk" : "en";
  localStorage.setItem("language", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;

    if (lang) {
      setLanguage(lang);
    }
  });
});

setLanguage(localStorage.getItem("language") || "en");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

function setTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light-theme", isLight);
  themeIcon.style.transform = isLight ? "rotate(180deg)" : "rotate(0deg)";
  localStorage.setItem("theme", theme);
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-theme")
    ? "dark"
    : "light";

  setTheme(nextTheme);
});

setTheme(localStorage.getItem("theme") || "dark");
const sections = document.querySelectorAll("section[id]");

function setActiveNavLink() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.id;

    const isActive =
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight;

    const navLink = document.querySelector(`.nav a[href="#${sectionId}"]`);

    if (navLink) {
      navLink.classList.toggle("nav__link--active", isActive);
    }
  });
}

window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);
const header = document.querySelector(".header");

function toggleHeaderBackground() {
  header?.classList.toggle("header--scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", toggleHeaderBackground);
window.addEventListener("load", toggleHeaderBackground);
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
