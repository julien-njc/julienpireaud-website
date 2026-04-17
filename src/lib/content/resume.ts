import type { Locale } from '$lib/i18n/site';

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type ResumeContent = {
  metaTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  chips: string[];
  printLabel: string;
  openContactLabel: string;
  summaryTitle: string;
  summaryRole: string;
  summaryBody: string;
  experienceTitle: string;
  skillsTitle: string;
  educationTitle: string;
  linksTitle: string;
  education: string[];
  skills: { title: string; items: string[] }[];
  experiences: ExperienceItem[];
};

export const profile = {
  name: 'Julien Pireaud',
  email: 'jpireaud@gmail.com',
  phone: '(214) 404-2863',
  location: 'Pullman, WA, USA',
  linkedin: 'https://www.linkedin.com/in/jpireaud/',
  github: 'https://github.com/julien-njc',
  website: 'https://www.njc-software.com/'
};

export const resumeContent: Record<Locale, ResumeContent> = {
  en: {
    metaTitle: 'Resume',
    heroEyebrow: 'Senior iOS Engineer',
    heroTitle: 'Shipping polished Apple-platform products with deep engineering rigor.',
    heroSummary:
      'I build production software that holds up under real users, complex product constraints, and cross-functional execution. My background spans iOS, C++, product architecture, and hands-on delivery from early concept to release.',
    chips: ['SwiftUI', 'UIKit', 'Objective-C++', 'C++', 'Apple Watch', 'AR / RealityKit'],
    printLabel: 'Print Resume',
    openContactLabel: 'Start a conversation',
    summaryTitle: 'Profile',
    summaryRole: 'Senior iOS Engineer with 10+ years building apps used by millions',
    summaryBody:
      'Deep expertise in UIKit and Objective-C / Objective-C++, with hands-on experience in Swift and SwiftUI. I focus on performance, maintainability, and shipping thoughtful product work with teams that care about quality.',
    experienceTitle: 'Experience',
    skillsTitle: 'Strengths',
    educationTitle: 'Education',
    linksTitle: 'Links',
    education: ["M.S. in Computer Engineering, Polytech'Lille, graduated October 2006"],
    skills: [
      {
        title: 'Apple Platforms',
        items: [
          'UIKit, SwiftUI, Objective-C, Objective-C++, Swift, Apple Watch',
          'Production app architecture, release quality, and long-lived maintainability',
          'AR and spatial interfaces with RealityKit and camera workflows'
        ]
      },
      {
        title: 'Core Engineering',
        items: [
          'C++, performance work, modeling systems, and shared cross-platform logic',
          'Complex rendering, PDF generation, graphics pipelines, and tooling',
          'Testing and release process improvements aimed at crash reduction'
        ]
      },
      {
        title: 'Product Delivery',
        items: [
          'Founder-level execution across mobile, backend, and web',
          'Experience with Django, Firebase, React, Spring Boot, AWS, and ML-adjacent integrations',
          'Cross-functional leadership, mentoring, and technical direction'
        ]
      }
    ],
    experiences: [
      {
        role: 'Senior Software Engineer / Founder',
        company: 'NJC Software LLC',
        location: 'Pullman, WA, USA',
        period: 'Since Jul. 2020',
        bullets: [
          'Designed and shipped a SwiftUI-based iOS application using SwiftData and iCloud for real-time cross-device synchronization.',
          'Delivered SwiftUI iOS and Apple Watch interfaces for a cognitive health application, integrating with backend services and ML pipelines.',
          'Built AR features using RealityKit for mobile applications, including spatial UI for digital asset visualization.',
          'Developed supporting web and backend systems with Firebase and Django to enable end-to-end product delivery.'
        ]
      },
      {
        role: 'Chief Technology Officer / Senior Software Engineer',
        company: 'Life Adapt Inc',
        location: 'Pullman, WA, USA (Remote)',
        period: 'Sep. 2022 to Feb. 2024',
        bullets: [
          'Architected and led development of an iOS cognitive health platform integrating Apple Watch data with a Django and AWS backend.',
          'Built end-to-end pipelines for collecting, analyzing, and visualizing cognitive metrics in real time.',
          'Led cross-functional development across iOS and React web surfaces while aligning technical and product direction.'
        ]
      },
      {
        role: 'Senior Software Engineer',
        company: 'Washington State University',
        location: 'Pullman, WA, USA (Part-Time)',
        period: 'Nov. 2019 to Oct. 2022',
        bullets: [
          'Developed high-performance C++ simulation tools that improved execution speed and enabled scalable HPC workflows.',
          'Rewrote scientific models from Excel and R into optimized C++ implementations.',
          'Contributed to React and Spring Boot applications for climate data exploration and visualization.'
        ]
      },
      {
        role: 'Senior Mobile Engineer / Team Lead',
        company: 'Sensopia Inc.',
        location: 'Montreal, QC, Canada (Remote)',
        period: 'May 2012 to Jul. 2019',
        bullets: [
          'Led iOS and core platform development for magicplan, a floor plan application with 20M+ downloads.',
          'Designed and implemented room and floor editors that materially improved usability and growth.',
          'Built law-enforcement-focused features that improved scene documentation workflows.',
          'Re-architected a C++ and Cairo PDF generation pipeline for structured reports with images and annotations.',
          'Built a custom SVG rendering system for dynamic catalogs and over-the-air updates.',
          'Designed a shared cross-platform C++ core library to accelerate Android parity.',
          'Improved platform stability with modern C++ memory management and better release discipline.',
          'Mentored engineers and strengthened quality-oriented team practices.'
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Autodesk Inc.',
        location: 'Montreal, QC, Canada',
        period: 'Jun. 2008 to May 2012',
        bullets: [
          'Developed C++ tooling for asset serialization integrated into FBX and Maya pipelines.',
          'Supported engine integrations and complex debugging across middleware systems.'
        ]
      },
      {
        role: 'Full-stack Software Engineer',
        company: 'Marson Edition et Consultation Inc.',
        location: 'Montreal, QC, Canada',
        period: 'Oct. 2006 to Jun. 2008',
        bullets: [
          'Developed web and mobile-compatible applications with PHP and MySQL.',
          'Re-architected a task management system supporting early mobile platforms such as WAP and PDAs.'
        ]
      }
    ]
  },
  fr: {
    metaTitle: 'CV',
    heroEyebrow: 'Ingénieur iOS Senior',
    heroTitle: 'Concevoir des produits Apple robustes avec une vraie exigence d’ingénierie.',
    heroSummary:
      'Je construis des logiciels de production capables de tenir dans la durée, malgré des contraintes produit réelles, des usages intensifs et des arbitrages transverses. Mon parcours couvre iOS, le C++, l’architecture produit et la livraison concrète, du concept initial à la mise en production.',
    chips: ['SwiftUI', 'UIKit', 'Objective-C++', 'C++', 'Apple Watch', 'AR / RealityKit'],
    printLabel: 'Imprimer le CV',
    openContactLabel: 'Prendre contact',
    summaryTitle: 'Profil',
    summaryRole: "Ingénieur iOS senior avec plus de 10 ans d'expérience sur des apps utilisées par des millions de personnes",
    summaryBody:
      "Expertise approfondie en UIKit et Objective-C / Objective-C++, avec une pratique concrète de Swift et SwiftUI. Je me concentre sur la performance, la maintenabilité et la livraison de produits bien conçus avec des équipes qui accordent de l'importance à la qualité.",
    experienceTitle: 'Expérience',
    skillsTitle: 'Points forts',
    educationTitle: 'Formation',
    linksTitle: 'Liens',
    education: ["Master en ingénierie informatique, Polytech'Lille, diplômé en octobre 2006"],
    skills: [
      {
        title: 'Plateformes Apple',
        items: [
          'UIKit, SwiftUI, Objective-C, Objective-C++, Swift, Apple Watch',
          "Architecture d'applications de production, qualité de livraison et maintenabilité sur le long terme",
          'AR et interfaces spatiales avec RealityKit et workflows caméra'
        ]
      },
      {
        title: 'Ingénierie cœur',
        items: [
          'C++, performance, systèmes de modélisation et logique partagée multiplateforme',
          'Rendu complexe, génération PDF, pipelines graphiques et outillage',
          'Amélioration des tests et des processus de release pour réduire les crashs'
        ]
      },
      {
        title: 'Delivery produit',
        items: [
          'Exécution de niveau fondateur sur mobile, backend et web',
          'Expérience avec Django, Firebase, React, Spring Boot, AWS et intégrations proches du ML',
          'Leadership transverse, mentorat et direction technique'
        ]
      }
    ],
    experiences: [
      {
        role: 'Senior Software Engineer / Founder',
        company: 'NJC Software LLC',
        location: 'Pullman, WA, USA',
        period: 'Depuis juil. 2020',
        bullets: [
          'Conçu et livré une application iOS en SwiftUI utilisant SwiftData et iCloud pour une synchronisation temps réel entre appareils.',
          "Livré des interfaces SwiftUI sur iPhone et Apple Watch pour une application de santé cognitive, en intégration avec des services backend et des pipelines ML.",
          'Développé des fonctionnalités AR avec RealityKit, notamment des interfaces spatiales pour la visualisation de ressources numériques.',
          'Développé les briques web et backend avec Firebase et Django pour assurer la livraison produit de bout en bout.'
        ]
      },
      {
        role: 'Chief Technology Officer / Senior Software Engineer',
        company: 'Life Adapt Inc',
        location: 'Pullman, WA, USA (Remote)',
        period: 'sept. 2022 à fév. 2024',
        bullets: [
          "Architecturé et piloté le développement d'une plateforme iOS de santé cognitive intégrant les données Apple Watch avec un backend Django et AWS.",
          'Construit des pipelines complets de collecte, analyse et visualisation de métriques cognitives en temps réel.',
          'Piloté le développement transverse entre iOS et React Web, en alignant direction produit et direction technique.'
        ]
      },
      {
        role: 'Senior Software Engineer',
        company: 'Washington State University',
        location: 'Pullman, WA, USA (Temps partiel)',
        period: 'nov. 2019 à oct. 2022',
        bullets: [
          "Développé des outils de simulation C++ haute performance améliorant la vitesse d'exécution et la capacité des workflows HPC.",
          'Réécrit des modèles scientifiques Excel et R en implémentations C++ optimisées.',
          "Contribué à des applications React et Spring Boot pour l'exploration et la visualisation de données climatiques."
        ]
      },
      {
        role: 'Senior Mobile Engineer / Team Lead',
        company: 'Sensopia Inc.',
        location: 'Montréal, QC, Canada (Remote)',
        period: 'mai 2012 à juil. 2019',
        bullets: [
          "Mené le développement iOS et du cœur de plateforme pour magicplan, une application de plans d'étage dépassant 20M de téléchargements.",
          "Conçu et implémenté les éditeurs de pièces et d'étages, avec un impact direct sur l'ergonomie et la croissance.",
          "Développé des fonctionnalités pour la version forces de l'ordre, afin d'accélérer la documentation de scènes.",
          'Réarchitecturé le pipeline PDF en C++ et Cairo pour produire des rapports structurés avec images et annotations.',
          'Construit un système de rendu SVG sur mesure pour des catalogues dynamiques et des mises à jour OTA.',
          'Conçu une bibliothèque C++ partagée multiplateforme pour accélérer la parité Android.',
          'Amélioré la stabilité grâce à une gestion mémoire C++ moderne et une meilleure discipline de release.',
          "Accompagné d'autres ingénieurs et renforcé une culture d'équipe orientée qualité."
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Autodesk Inc.',
        location: 'Montréal, QC, Canada',
        period: 'juin 2008 à mai 2012',
        bullets: [
          "Développé des outils C++ de sérialisation d'assets intégrés aux pipelines FBX et Maya.",
          "Participé aux intégrations moteur et au débogage de systèmes middleware complexes."
        ]
      },
      {
        role: 'Full-stack Software Engineer',
        company: 'Marson Edition et Consultation Inc.',
        location: 'Montréal, QC, Canada',
        period: 'oct. 2006 à juin 2008',
        bullets: [
          'Développé des applications web et mobiles compatibles avec PHP et MySQL.',
          'Réarchitecturé un système de gestion de tâches pour les premières plateformes mobiles comme WAP et PDA.'
        ]
      }
    ]
  }
};
