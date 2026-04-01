document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    nav.appendChild(menuToggle);

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && navList.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });

    // Three.js Background
    let scene, camera, renderer, particlesMesh;
    const canvas = document.getElementById('threejs-canvas');
    if (canvas) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;

        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
        });

        particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // Translation Data
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-experience": "Experience",
            "nav-skills": "Skills",
            "nav-whatido": "What I Do",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-hi": "Hi, I'm ",
            "hero-title1": "Full Stack Developer",
            "hero-title2": "Web & Mobile Enthusiast",
            "hero-title3": "Problem Solver",
            "cv-download": "Download CV",
            "about-title": "About Me",
            "about-text": "Passionate about Web Development and its diverse applications, I strengthened my competencies enrolling in an intensive bootcamp in IT. Thanks to my fast learning abilities and eye for details, I was able to fully grasp the content, achieving outstanding results and showcasing my skills in innovative real-life applications. I enjoy collaborating with others and always up for a challenge, I make sure to welcome every learning opportunity and I aim to join a dynamic team in which I am able to put my skills into practice and build a fulfilling career as a developer.",
            "edu-title": "Education",
            "edu-item1-h": "Baccalaureate Diploma in IT",
            "edu-item1-p1": "Secondary School Ibn Haithem, Beja",
            "edu-item1-p2": "09/2022 – 06/2023",
            "edu-item2-h": "1st Year in Computer Engineering",
            "edu-item2-p1": "ISSAT Kasserine",
            "edu-item2-p2": "09/2023 – 05/2024",
            "edu-item2-p3": "Currently completing first year of computer engineering studies",
            "edu-item3-h": "American Certification in Full Stack Web Development",
            "edu-item3-p1": "Coding Dojo Africa",
            "edu-item3-p2": "09/2024 – 02/2025",
            "edu-item3-li1": "Intensive bootcamp in 3 full stacks (Python, JS, and Java)",
            "edu-item3-li2": "Passed Belt exams, assignments and code reviews",
            "edu-item3-li3": "Developed three projects with innovative features",
            "edu-item3-li4": "Soft skills and English Language training",
            "exp-title": "Professional Experience",
            "exp-item1-h": "Full Stack Developer",
            "exp-item1-p1": "Tunis",
            "exp-item1-p2": "05/2025 – Present",
            "exp-item1-sub1-h": "ERP System",
            "exp-item1-sub1-li1": "Business needs analysis (appointment management, client files, etc.)",
            "exp-item1-sub1-li2": "Design and development of a custom ERP with automated email notifications for post-operative follow-ups and a doctor messaging module.",
            "exp-item1-sub1-li3": "Technologies: Django, Angular, PostgreSQL, Tailwind CSS",
            "exp-item1-sub2-h": "Marketing CRM",
            "exp-item1-sub2-li1": "Integration of WhatsApp Cloud API, Messenger, Instagram (Graph API), Gmail",
            "exp-item1-sub2-li2": "Reception, recording and automated response via back-office",
            "exp-item1-sub2-li3": "Webhook management and OAuth authentication (Facebook/Meta)",
            "exp-item1-sub2-li4": "Technologies: Django, REST API, Webhooks, OAuth, JavaScript, PostgreSQL",
            "exp-item1-sub3-h": "Automation & AI",
            "exp-item1-sub3-li1": "Use of Selenium for automated marketplace posting",
            "exp-item1-sub3-li2": "HeyGen API integration for AI-generated video content",
            "exp-item1-sub4-h": "Data Intelligence",
            "exp-item1-sub4-li1": "Feature implementation to predict hotel price trends",
            "skills-title": "My Skills",
            "skills-frontend-h": "Front-end",
            "skills-backend-h": "Back-end",
            "skills-db-h": "Database",
            "skills-tools-h": "Tools",
            "services-title": "What I Do",
            "services-web-h": "Web Development",
            "services-web-p": "Custom website development from concept to deployment. Responsive design and clean code.",
            "services-design-h": "Design",
            "services-design-p": "Keeping it simple. Centered on content and functionality",
            "services-solve-h": "Problem Solving",
            "services-solve-p": "Creative approach to research, analysis, and decision-making",
            "portfolio-title": "My Projects",
            "portfolio-p1-h": "A website for exchanging items or donating them, encouraging community engagement and recycling.",
            "portfolio-p2-h": "A recipe discovery application with real-time interaction and dynamic dashboards (MEAN stack).",
            "portfolio-p3-h": "A healthtech platform for clinic management, booking appointments and medical history visualization.",
            "portfolio-view": "View Project",
            "contact-title": "Get in Touch",
            "contact-name": "Your Name",
            "contact-email": "Your Email",
            "contact-msg": "Your Message",
            "contact-send": "Send Message",
            "contact-loc-h": "📍 Location",
            "contact-loc-p": "Ariana, Tunisia",
            "contact-phone-h": "📞 Phone",
            "contact-email-h": "📧 Email",
            "typed-strings": ['Helmi Hamraoui', 'a Full Stack Developer', 'a Problem Solver', 'a Tech Enthusiast']
        },
        fr: {
            "nav-home": "Accueil",
            "nav-about": "À propos",
            "nav-experience": "Expérience",
            "nav-skills": "Compétences",
            "nav-whatido": "Ce que je fais",
            "nav-projects": "Projets",
            "nav-contact": "Contact",
            "hero-hi": "Salut, je suis ",
            "hero-title1": "Développeur Full Stack",
            "hero-title2": "Passionné Web & Mobile",
            "hero-title3": "Résolveur de problèmes",
            "cv-download": "Télécharger CV",
            "about-title": "À propos de moi",
            "about-text": "Passionné par le Développement Web et ses diverses applications, j'ai renforcé mes compétences en m'inscrivant à un bootcamp intensif en informatique. Grâce à mes capacités d'apprentissage rapide et mon sens du détail, j'ai pu saisir pleinement le contenu, obtenant des résultats exceptionnels et démontrant mes compétences dans des applications innovantes de la vie réelle. J'aime collaborer avec les autres et je suis toujours prêt à relever un défi, je veille à accueillir chaque opportunité d'apprentissage et je vise à rejoindre une équipe dynamique dans laquelle je pourrai mettre mes compétences en pratique et bâtir une carrière enrichissante en tant que développeur.",
            "edu-title": "Éducation",
            "edu-item1-h": "Baccalauréat en Informatique",
            "edu-item1-p1": "Lycée Ibn Haithem, Béja",
            "edu-item1-p2": "09/2022 – 06/2023",
            "edu-item2-h": "1ère année en Ingénierie Informatique",
            "edu-item2-p1": "ISSAT Kasserine",
            "edu-item2-p2": "09/2023 – 05/2024",
            "edu-item2-p3": "Actuellement en cours de première année d'études en ingénierie informatique",
            "edu-item3-h": "Certification Américaine en Développement Web Full Stack",
            "edu-item3-p1": "Coding Dojo Africa",
            "edu-item3-p2": "09/2024 – 02/2025",
            "edu-item3-li1": "Bootcamp intensif sur 3 stacks complets (Python, JS et Java)",
            "edu-item3-li2": "Réussite des examens Belt, devoirs et revues de code",
            "edu-item3-li3": "Développement de trois projets avec des fonctionnalités innovantes",
            "edu-item3-li4": "Formation aux soft skills et à la langue anglaise",
            "exp-title": "Expérience Professionnelle",
            "exp-item1-h": "Développeur Full Stack",
            "exp-item1-p1": "Tunis",
            "exp-item1-p2": "05/2025 – Présent",
            "exp-item1-sub1-h": "Système ERP",
            "exp-item1-sub1-li1": "Analyse des besoins métiers (gestion des rendez-vous, fiches clients, etc.)",
            "exp-item1-sub1-li2": "Conception et développement d'un ERP personnalisé avec notifications d'emails automatisées pour les suivis post-opératoires et un module de messagerie pour les médecins.",
            "exp-item1-sub1-li3": "Technologies : Django, Angular, PostgreSQL, Tailwind CSS",
            "exp-item1-sub2-h": "CRM Marketing",
            "exp-item1-sub2-li1": "Intégration des APIs WhatsApp Cloud, Messenger, Instagram (Graph API), Gmail",
            "exp-item1-sub2-li2": "Réception, enregistrement et réponse automatique via back-office",
            "exp-item1-sub2-li3": "Gestion des webhooks et authentification OAuth (Facebook/Meta)",
            "exp-item1-sub2-li4": "Technologies : Django, REST API, Webhooks, OAuth, JavaScript, PostgreSQL",
            "exp-item1-sub3-h": "Automatisation & IA",
            "exp-item1-sub3-li1": "Utilisation de Selenium pour la publication automatique sur les marketplaces",
            "exp-item1-sub3-li2": "Intégration de l'API HeyGen pour la génération de contenu vidéo par IA",
            "exp-item1-sub4-h": "Intelligence de Données",
            "exp-item1-sub4-li1": "Implémentation d'une fonctionnalité pour prédire les tendances des tarifs hôteliers",
            "skills-title": "Mes Compétences",
            "skills-frontend-h": "Front-end",
            "skills-backend-h": "Back-end",
            "skills-db-h": "Base de données",
            "skills-tools-h": "Outils",
            "services-title": "Ce que je fais",
            "services-web-h": "Développement Web",
            "services-web-p": "Développement de sites web personnalisés, du concept au déploiement. Design réactif et code propre.",
            "services-design-h": "Design",
            "services-design-p": "Rester simple. Centré sur le contenu et la fonctionnalité",
            "services-solve-h": "Résolution de problèmes",
            "services-solve-p": "Approche créative de la recherche, de l'analyse et de la prise de décision",
            "portfolio-title": "Mes Projets",
            "portfolio-p1-h": "Un site web pour échanger ou donner des objets, encourageant l'engagement communautaire et le recyclage.",
            "portfolio-p2-h": "Une application de découverte de recettes avec interactions en temps réel et tableaux de bord dynamiques (stack MEAN).",
            "portfolio-p3-h": "Une plateforme HealthTech pour la gestion de clinique, la prise de rendez-vous et la visualisation de l'historique médical.",
            "portfolio-view": "Voir le projet",
            "contact-title": "Contactez-moi",
            "contact-name": "Votre nom",
            "contact-email": "Votre email",
            "contact-msg": "Votre message",
            "contact-send": "Envoyer le message",
            "contact-loc-h": "📍 Localisation",
            "contact-loc-p": "Ariana, Tunisie",
            "contact-phone-h": "📞 Téléphone",
            "contact-email-h": "📧 Email",
            "typed-strings": ['Helmi Hamraoui', 'un Développeur Full Stack', 'un Solutionneur de Problèmes', 'un Passionné de Tech']
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    let typedInstance = null;

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'SPAN' && el.classList.contains('typed-text')) {
                    // Handled by Typed.js
                } else if (el.querySelector('.typed-text')) {
                    // If it's the parent of typed-text, we need to preserve the span
                    const span = el.querySelector('.typed-text');
                    const cursor = el.querySelector('.cursor');
                    el.innerHTML = translations[lang][key];
                    el.appendChild(span);
                    if (cursor) el.appendChild(cursor);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update active button
        const btnFr = document.getElementById('lang-fr');
        const btnEn = document.getElementById('lang-en');
        if (btnFr) btnFr.classList.toggle('active', lang === 'fr');
        if (btnEn) btnEn.classList.toggle('active', lang === 'en');

        // Update CV download link
        const cvBtnLink = document.getElementById('cv-download-btn');
        if (cvBtnLink) {
            cvBtnLink.href = `./pdfs/Helmi_Hamraoui_${lang}.pdf`;
            cvBtnLink.download = `Helmi_Hamraoui_${lang}.pdf`;
        }

        // Restart Typed.js with new strings
        if (typedInstance) typedInstance.destroy();
        if (typeof Typed !== 'undefined') {
            typedInstance = new Typed('.typed-text', {
                strings: translations[lang]['typed-strings'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true
            });
        }
    }

    const btnFr = document.getElementById('lang-fr');
    const btnEn = document.getElementById('lang-en');
    if (btnFr) btnFr.addEventListener('click', () => setLanguage('fr'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // Initialize Language
    setLanguage(currentLang);

    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-in-out';
                bar.style.width = width;
            }, 100);
        });
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) skillObserver.observe(skillsSection);

    // Scroll Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'nav-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Education Animation Trigger
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.education-item').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.education').forEach(section => {
        educationObserver.observe(section);
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth Scroll with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let responseMessage = document.getElementById("responseMessage");

            if (name === "" || email === "" || message === "") {
                e.preventDefault();
                responseMessage.innerHTML = currentLang === 'en' ? "All fields are required!" : "Tous les champs sont obligatoires !";
                responseMessage.style.color = "red";
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                e.preventDefault();
                responseMessage.innerHTML = currentLang === 'en' ? "Please enter a valid email address!" : "Veuillez entrer une adresse email valide !";
                responseMessage.style.color = "red";
                return;
            }

            responseMessage.innerHTML = currentLang === 'en' ? "Sending..." : "Envoi en cours...";
            responseMessage.style.color = "blue";
        });
    }

    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.querySelector(".theme-icon");

    if (themeToggle && themeIcon) {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeIcon.textContent = "☀️";
        } else {
            document.body.classList.remove("dark-mode");
            themeIcon.textContent = "🌙";
        }

        // Toggle theme on button click
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeIcon.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeIcon.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // AOS Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});