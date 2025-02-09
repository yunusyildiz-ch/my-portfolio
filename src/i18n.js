import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Initialize React i18next
  .init({
    resources: {
      en: {
        translation: {
          "home.welcome": "Welcome, I'm Yunus YILDIZ",
          "home.subtitle":
            "Full-Stack Developer | Problem Solver | Continuous Learner",
          "home.description":
            "I am a passionate developer who loves to build smart, efficient, and scalable web applications. I believe in clean code, continuous learning, and the power of technology to make life better.",
          "about.title": "About Me",
          "about.description":
            "A dedicated and ambitious Full Stack Developer with a strong foundation in front-end and back-end technologies. I see coding not just as a technical process but as a creative way to solve real-world challenges. Proficient in JavaScript, React, Node.js, Express.js, HTML, CSS, and Bootstrap, I have built various projects and am currently expanding my backend expertise by learning Java, with plans to deepen my knowledge in Spring Boot and Angular. One of my key projects, SmartFox Home, is a smart home management system that focuses on heat optimization, energy efficiency, and user comfort. This project has allowed me to work extensively on IoT device integration, performance optimization, and user-friendly UI/UX development. I strongly believe in leveraging technology to create sustainable and practical solutions that improve daily life. Having completed two intensive training programs at HiCoders, earning Certificates of Excellence, I have honed my ability to build scalable applications while continuously improving my skills. Adaptable and team-oriented, I thrive in dynamic environments where I can contribute my analytical thinking, problem-solving abilities, and fast-learning mindset to innovative projects. Additionally, I am currently enhancing my French language proficiency to integrate more effectively into international work environments. Excited to collaborate on impactful projects, develop scalable solutions, and grow as a developer within a forward-thinking team.",
          "education.certifications": "Education & Certifications",
          "education.certification1":
            "Certificate of Excellence - HiCoders IT Academy (2023)",
          "education.certification2":
            "Full-Stack Development Certificate - HiCoders IT Academy (2023)",
          "skills.title": "Skills and Abilities Acquired",
          "skills.item1": "Mastery of Web Programming Basics",
          "skills.item2": "Proficiency in Developing Middle-Sized Applications",
          "skills.item3":
            "Expertise in Independently Building Applications Using HTML, CSS, and JavaScript",
          "skills.item4":
            "Ability to Build and Deploy Full-Stack Applications Using React, Node.js, and MongoDB",
          "skills.item5": "Understanding of CLI Basics, Git, and GitHub",
          "skills.item6":
            "Strong Ability to Communicate and Articulate Programming Principles",
          "skills.item7":
            "Basic Knowledge of Arduino Integration and IoT Applications",
          "technicalSkills.title": "Technical Skills",
          "contact.title": "Contact Me",
          "contact.description":
            "You can reach me via email or connect with me on LinkedIn and GitHub.",
          "hobbies.title": "Hobbies & Interests",
          "hobbies.description":
            "I enjoy playing chess, running, drinking coffee with my wife, and spending time improving my coding skills. I believe in continuous learning and am always curious to explore new technologies and tools to enhance my skill set.",
          "footer.address": "Geneva",
          "footer.copyright": "© 2025 Yunus YILDIZ",
          "language.switch": "Language",
        },
      },
      de: {
        translation: {
          "home.welcome": "Willkommen, ich bin Yunus YILDIZ",
          "home.subtitle":
            "Full-Stack-Entwickler | Problemlöser | Lernbegeistert",
          "home.description":
            "Ich bin ein leidenschaftlicher Entwickler, der intelligente, effiziente und skalierbare Webanwendungen erstellt. Ich glaube an sauberen Code, lebenslanges Lernen und die Kraft der Technologie, das Leben besser zu machen.",
          "about.title": "Über mich",
          "about.description":
            "Ein engagierter und ehrgeiziger Full-Stack-Entwickler mit einer soliden Grundlage in Frontend- und Backend-Technologien. Ich betrachte das Programmieren nicht nur als einen technischen Prozess, sondern als eine kreative Möglichkeit, reale Herausforderungen zu lösen. Versiert in JavaScript, React, Node.js, Express.js, HTML, CSS und Bootstrap habe ich verschiedene Projekte entwickelt und erweitere derzeit mein Backend-Wissen durch das Erlernen von Java, mit dem Ziel, meine Kenntnisse in Spring Boot und Angular zu vertiefen. Eines meiner Hauptprojekte, SmartFox Home, ist ein Smart-Home-Managementsystem, das sich auf Wärmeoptimierung, Energieeffizienz und Benutzerkomfort konzentriert. Dieses Projekt hat es mir ermöglicht, umfangreich an IoT-Geräteintegration, Leistungsoptimierung und benutzerfreundlicher UI/UX-Entwicklung zu arbeiten. Ich bin fest davon überzeugt, dass Technologie genutzt werden sollte, um nachhaltige und praktische Lösungen zu schaffen, die das tägliche Leben verbessern. Nach dem Abschluss zweier intensiver Schulungsprogramme bei HiCoders und dem Erhalt von Zertifikaten für Exzellenz habe ich meine Fähigkeit verfeinert, skalierbare Anwendungen zu entwickeln, während ich kontinuierlich meine Fähigkeiten verbessere. Anpassungsfähig und teamorientiert gedeihe ich in dynamischen Umgebungen, in denen ich mit meinem analytischen Denken, meinen Problemlösungsfähigkeiten und meiner schnellen Lernfähigkeit zu innovativen Projekten beitragen kann. Zusätzlich verbessere ich derzeit meine Französischkenntnisse, um mich effektiver in internationale Arbeitsumgebungen zu integrieren. Ich freue mich darauf, an wirkungsvollen Projekten mitzuwirken, skalierbare Lösungen zu entwickeln und als Entwickler in einem zukunftsorientierten Team zu wachsen.",
          "education.certifications": "Bildung & Zertifikate",
          "education.certification1":
            "Zertifikat für Exzellenz - HiCoders IT Academy (2023)",
          "education.certification2":
            "Full-Stack-Entwicklung Zertifikat - HiCoders IT Academy (2023)",
          "skills.title": "Fähigkeiten und erworbene Kenntnisse",
          "skills.item1": "Beherrschung der Grundlagen der Webprogrammierung",
          "skills.item2": "Fähigkeit zur Entwicklung mittelgroßer Anwendungen",
          "skills.item3":
            "Expertenwissen im eigenständigen Aufbau von Anwendungen mit HTML, CSS und JavaScript",
          "skills.item4":
            "Fähigkeit zum Erstellen und Bereitstellen von Full-Stack-Anwendungen mit React, Node.js und MongoDB",
          "skills.item5": "Grundverständnis von CLI, Git und GitHub",
          "skills.item6":
            "Starke Kommunikationsfähigkeiten und Verständnis von Programmierprinzipien",
          "skills.item7":
            "Grundkenntnisse in der Arduino-Integration und IoT-Anwendungen",
          "technicalSkills.title": "Technische Fähigkeiten",
          "contact.title": "Kontakt",
          "contact.description":
            "Sie können mich per E-Mail erreichen oder sich mit mir auf LinkedIn und GitHub verbinden.",
          "hobbies.title": "Hobbys & Interessen",
          "hobbies.description":
            "Ich genieße es, Schach zu spielen, zu laufen, Kaffee mit meiner Frau zu trinken und Zeit damit zu verbringen, meine Programmierfähigkeiten zu verbessern. Ich glaube an lebenslanges Lernen und bin immer neugierig, neue Technologien und Werkzeuge zu erkunden, um meine Fähigkeiten weiterzuentwickeln.",
          "footer.address": "Genf",
          "footer.copyright": "© 2025 Yunus YILDIZ",
          "language.switch": "Sprache",
        },
      },
      fr: {
        translation: {
          "home.welcome": "Bienvenue, je suis Yunus YILDIZ",
          "home.subtitle":
            "Développeur Full-Stack | Résolveur de problèmes | Apprentissage continu",
          "home.description":
            "Je suis un développeur passionné qui aime créer des applications Web intelligentes, efficaces et évolutives. Je crois au code propre, à l'apprentissage continu et au pouvoir de la technologie pour améliorer la vie.",
          "about.title": "À propos de moi",
          "about.description":
            "Développeur Full Stack dévoué et ambitieux, doté d’une solide expertise en technologies front-end et back-end. Je considère la programmation non seulement comme un processus technique, mais aussi comme un moyen créatif de résoudre des défis du monde réel. Compétent en JavaScript, React, Node.js, Express.js, HTML, CSS et Bootstrap, j’ai développé divers projets et j’élargis actuellement mes compétences en backend en apprenant Java, avec pour objectif d’approfondir mes connaissances en Spring Boot et Angular. L’un de mes principaux projets, SmartFox Home, est un système de gestion de maison intelligente axé sur l’optimisation thermique, l’efficacité énergétique et le confort utilisateur. Ce projet m’a permis de travailler en profondeur sur l’intégration des appareils IoT, l’optimisation des performances et le développement d’une interface utilisateur/expérience utilisateur conviviale. Je crois fermement à l’utilisation de la technologie pour créer des solutions durables et pratiques qui améliorent la vie quotidienne. Après avoir suivi deux formations intensives chez HiCoders et obtenu des certificats d'excellence, j’ai affiné ma capacité à développer des applications évolutives tout en améliorant continuellement mes compétences. Adaptable et orienté travail d'équipe, j’évolue dans des environnements dynamiques où je peux apporter ma pensée analytique, mes compétences en résolution de problèmes et ma capacité d’apprentissage rapide à des projets innovants. Par ailleurs, j’améliore actuellement ma maîtrise du français afin de m’intégrer plus efficacement dans des environnements de travail internationaux. Enthousiaste à l'idée de collaborer sur des projets d'impact, de développer des solutions évolutives et de progresser en tant que développeur au sein d’une équipe tournée vers l’avenir.",
          "education.certifications": "Éducation & Certifications",
          "education.certification1":
            "Certificat d'excellence - HiCoders IT Academy (2023)",
          "education.certification2":
            "Certificat de développement Full-Stack - HiCoders IT Academy (2023)",
          "skills.title": "Compétences et capacités acquises",
          "skills.item1": "Maîtrise des bases de la programmation Web",
          "skills.item2":
            "Compétence dans le développement d'applications de taille moyenne",
          "skills.item3":
            "Expertise dans la création indépendante d'applications en HTML, CSS et JavaScript",
          "skills.item4":
            "Capacité à créer et déployer des applications Full-Stack avec React, Node.js et MongoDB",
          "skills.item5": "Compréhension des bases de CLI, Git et GitHub",
          "skills.item6":
            "Forte capacité de communication et compréhension des principes de programmation",
          "skills.item7":
            "Connaissances de base en intégration Arduino et applications IoT",
          "technicalSkills.title": "Compétences techniques",
          "contact.title": "Me Contacter",
          "contact.description":
            "Vous pouvez me contacter par e-mail ou vous connecter avec moi sur LinkedIn et GitHub.",
          "hobbies.title": "Loisirs & Intérêts",
          "hobbies.description":
            "J'aime jouer aux échecs, courir, boire du café avec ma femme et passer du temps à améliorer mes compétences en programmation. Je crois en l'apprentissage continu et suis toujours curieux d'explorer de nouvelles technologies et outils pour enrichir mes compétences.",
          "footer.address": "Genève",
          "footer.copyright": "© 2025 Yunus YILDIZ",
          "language.switch": "Langue",
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Use English if a translation is missing
    debug: true, // Enable debugging in the console
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
