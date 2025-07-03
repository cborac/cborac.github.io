/**
 * @type {Section[]}
 */
export const sections = [{
     title: "Réalisations",
     experiences: [{
          title: "🦠 Équipe Saint-Joseph",
          description: "Behcheck est un test de flux latéral pour aider au diagnostic de la maladie de Behçet.",
          timestamp: "iGEM 2023 - Médaille d'argent 🥈",
          buttons: [{
               title: "Wiki de l'équipe",
               href: "https://2023.igem.wiki/saint-joseph/"
          }]
     }, {
          title: "🦠 Équipe Saint-Joseph • iGEM 2021 🥈",
          description: "Cellulophile est un projet visant à améliorer deux types de cellulases pour lutter contre la pollution papier.",
          timestamp: "iGEM 2021 - Médaille d'argent 🥈",
          buttons: [{
               title: "Wiki de l'équipe",
               href: "https://2021.igem.org/Team:Saint_Joseph"
          }]
     }]
}, {
     title: "Langues",
     experiences: [{
          title: "turc",
          description: "Langue maternelle",
          img: "tr.jpg"
     }, {
          title: "anglais",
          description: "Courant - IELTS 7.0 Academic Band",
          img: "gb.webp"
     }, {
          title: "français",
          description: "Courant - DALF C1",
          img: "fr.png"
     }]
},
{
     title: "Projets",
     experiences: [{
          title: "🌐 MFINUE Connect",
          description: "Connect est un portail servant d'outil pour organiser la conférence annuelle MFINUE.",
          buttons: [{
               title: "Site web",
               href: "https://connect.mfinue.org"
          }]
     }]
},
{
     title: "Expériences",
     minWidth: "48%",
     experiences: [
          {
               title: "🦠 Conseiller iGEM",
               description: "Conseiller de l'équipe Saint-Joseph",
               timestamp: "Depuis Dec 2024",
               minWidth: "100%"
          },
          {
               title: "🌐 Chef des TI de MFINUE 2023",
               description: "Maintenir et développer les technologies utilisées lors de la conférence francophone MFINUE 2023",
               timestamp: "Avr 2023 - Déc 2023",
               buttons: [{
                    title: "mfinue.org",
                    href: "https://mfinue.org"
               }]
          },
          {
               title: "💻 Ingénieur logiciel chez Ponsatlas",
               description: "Développement d'applications et modules pour la Marketplace Atlassian",
               timestamp: "Déc 2023 - Juil 2024",
               buttons: [{
                    title: "Site web",
                    href: "https://ponsatlas.com/"
               }]
          },
          {
               title: "🦠 Chef d'équipe iGEM",
               description: "Chef de l'équipe Saint-Joseph",
               timestamp: "Sept 2022 - Août 2023"
          },
          {
               title: "🦠 Membre d'équipe iGEM",
               description: "Membre de l'équipe Saint-Joseph",
               timestamp: "Sept 2020 - Sept 2022"
          },
          {
               title: "💻 Stage chez L Teknoloji",
               description: "Travail dans un environnement ASP.NET (C#)",
               timestamp: "Août 2021",
               buttons: [{
                    title: "Site web",
                    href: "https://lengerteknoloji.com/"
               }]
          }]
}, {
     title: "Activités",
     experiences: [
          {
               title: "📈 Programme des jeunes leaders mondiaux de Harvard",
               description: "Un programme intensif de 4 jours dirigé par des étudiants de Harvard, axé sur des activités de leadership, la résolution de problèmes en contexte et le travail en groupe.",
               minWidth: "100%"
          },
          {
               title: "⭐ Future Stars (Académie de leadership)",
               description: "Ce programme intensif de 3 semaines vise à apporter aux participants les compétences et connaissances nécessaires pour travailler avec des enfants et des jeunes, en mettant l'accent sur la planification et l'exécution de programmes. Les participants y développent également des compétences en leadership, en travail d'équipe et en développement communautaire.",
               buttons: [{
                    title: "Synthèse du programme",
                    href: "/assets/certs/FSTranscript.pdf"
               }, {
                    title: "Lettre de recommandation",
                    href: "/assets/certs/FSRecommendation.pdf"
               }],
               minWidth: "100%"
          },
          {
               title: "🌐 Conférences MNU",
               description: "Participation à diverses conférences locales de MNU."
          },
          {
               title: "⛺️ Animateur de camp chez Future Stars",
               description: "Après l'Académie de leadership, j'ai travaillé comme animateur de camp chez Future Stars."
          }]
}, {
     title: "Certifications",
     experiences: [{
          title: "Google IT Support Specialization",
          description: "Google",
          timestamp: "Mars 2023",
          img: "google.png"
     }, {
          title: "Python for Everybody Specialization",
          description: "Université du Michigan",
          timestamp: "Mai 2021",
          img: "michigan.jpg"
     }, {
          title: "Programmation web",
          description: "Turkcell Geleceğin Yazarları",
          timestamp: "Juin 2021",
          img: "turkcell.png"
     }, {
          title: "REST API (Intermédiaire)",
          description: "HackerRank",
          timestamp: "Déc 2022",
          img: "hackerrank.png"
     }, {
          title: "Node.js (Intermédiaire)",
          description: "HackerRank",
          timestamp: "Août 2021",
          img: "hackerrank.png"
     }, {
          title: "JavaScript (Intermédiaire)",
          description: "HackerRank",
          timestamp: "Août 2021",
          img: "hackerrank.png"
     }, {
          title: "CSS",
          description: "HackerRank",
          timestamp: "Mars 2023",
          img: "hackerrank.png"
     }, {
          title: "C# (Basique)",
          description: "HackerRank",
          timestamp: "Août 2021",
          img: "hackerrank.png"
     }]
}, {
     title: "Contactez-moi",
     experiences: [{
          title: "📧 bciner@tudelft.nl",
          description: "Adresse mail scolaire",
          buttons: [{
               href: "mailto:bciner@tudelft.nl",
               title: "M'envoyer un e-mail"
          }]
     }, {
          title: "🕹️ Sards (sards)",
          description: "Compte Discord"
     }]
}]

/**
 * @type {{
 *   subtitle: string,
 *   text: string,
 *   tags: string[],
 *   education: Section,
 *   technologies: string
 * }}
 */
export const hero = {
     subtitle: "Ingénieur génétique en devenir",
     text: `Bonjour ! Je suis un passionné de sciences qui étudie
     actuellement la nanobiologie à TU Delft. Je m'intéresse aux sciences informatiques
     et à la biologie.`,
     tags: ["biologie-moléculaire", "science", "programmation", "INFP-T", "5w6"],
     education: {
          title: "Formation",
          experiences: [{
               title: "📖 Licence en Nanobiologie",
               description: "TU Delft & Erasmus MC",
               timestamp: "2024-2027",
               buttons: [{
                    title: "TU Delft",
                    href: "https://www.tudelft.nl/en/education/programmes/bachelors/nb/bsc-nanobiology"
               }, {
                    title: "EMC",
                    href: "https://www.eur.nl/en/erasmusmc/bachelor/nanobiology"
               }]
          }, {
               title: "🏫 Lycée Français",
               description: "Saint-Joseph Istanbul",
               timestamp: "2019-2024",
               buttons: [{
                    title: "Site de l'école",
                    href: "https://sj.k12.tr"
               }]
          }]
     },
     technologies: "Technologies"
}
