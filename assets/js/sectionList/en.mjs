/**
 * @type {Section[]}
 */
export const sections = [{
     title: "Accomplishments",
     experiences: [{
          title: "🦠 Team Saint-Joseph",
          description: "Behcheck is a Lateral Flow Assay to help the diagnosis of Behçet's Disease.",
          timestamp: "iGEM 2023 - Silver Medal 🥈",
          buttons: [{
               title: "Team Wiki",
               href: "https://2023.igem.wiki/saint-joseph/"
          }]
     }, {
          title: "🦠 Team Saint_Joseph • iGEM 2021 🥈",
          description: "Cellulophile is a project enhancing 2 types of cellulases to combat against paper pollution.",
          timestamp: "iGEM 2023 - Silver Medal 🥈",
          buttons: [{
               title: "Team Wiki",
               href: "https://2021.igem.org/Team:Saint_Joseph"
          }]
     }]
}, {
     title: "Languages",
     experiences: [{
          title: "Turkish",
          description: "Native",
          img: "tr.jpg"
     }, {
          title: "English",
          description: "Fluent - IELTS 7.0 Academic Band",
          img: "gb.webp  "
     }, {
          title: "French",
          description: "Fluent - DALF C1",
          img: "fr.png"
     }]
},
{
     title: "Projects",
     experiences: [{
          title: "🌐 MFINUE Connect",
          description: "Connect is a portal serving as a tool for organizing the annual MFINUE conference.",
          buttons: [{
               title: "Website",
               href: "https://connect.mfinue.org"
          }]
     }]
},
{
     title: "Experiences",
     minWidth: "48%",
     experiences: [
          {
               title: "🦠 iGEM Advisor",
               description: "Advisor of Team Saint-Joseph",
               timestamp: "Since Dec 2024",
               minWidth: "100%"
          },
          {
               title: "🌐 Chief Technology Officer of MFINUE 2023",
               description: "Sustain and develop technologies that are used in 2023's Francophone Model United Nations of Eurasia (MFINUE) conference",
               timestamp: "Apr 2023 - Dec 2023",
               buttons: [{
                    title: "mfinue.org",
                    href: "https://mfinue.org"
               }]
          },
          {
               title: "💻 Software Engineer at Ponsatlas",
               description: "Development for Atlassian Marketplace apps and addons",
               timestamp: "Dec 2023 - Jul 2024",
               buttons: [{
                    title: "Website",
                    href: "https://ponsatlas.com/"
               }]
          },
          {
               title: "🦠 iGEM Team Leader",
               description: "Student Lead of Saint-Joseph Team",
               timestamp: "Sept 2022 - Aug 2023"
          },
          {
               title: "🦠 iGEM Team Member",
               description: "Student Member of Saint-Joseph Team",
               timestamp: "Sept 2020 - Sept 2022"
          },
          {
               title: "💻 Internship at L Teknoloji",
               description: "Aug 2021 • Worked with ASP.NET environment (C#)",
               buttons: [{
                    title: "Website",
                    href: "https://lengerteknoloji.com/"
               }]
          }]
}, {
     title: "Activities",
     experiences: [
          {
               title: "📈 Harvard Young Global Leaders Program",
               description: "An intensive 4-day program led by Harvard students focusing on leadership activities, a contextual problem and how to solve it through a group effort.",
               minWidth: "100%"
          },
          {
               title: "⭐ Future Stars (Leadership Academy)",
               description: "This 3 week intensive program's objective is to provide the participants with the necessary skills and knowledge related to working with children and youth with a strong focus on programing planning and execution. While in this program, participants also develop in leadership, teambuilding and community development skills.",
               buttons: [{
                    title: "Transcript",
                    href: "/assets/certs/FSTranscript.pdf"
               }, {
                    title: "Recommendation",
                    href: "/assets/certs/FSRecommendation.pdf"
               }],
               minWidth: "100%"
          },
          {
               title: "🌐 MUN Conferences",
               description: "Participated in various local MUN conferences."
          },
          {
               title: "⛺️ Camp Counselor at Future Stars",
               description: "After the Leadership Academy, I worked as a camp counselor at Future Stars."
          }]
}, {
     title: "Certifications",
     experiences: [{
          title: "Google IT Support Specialization",
          description: "Google",
          timestamp: "Mar 2023",
          img: "google.png"
     }, {
          title: "Python for Everybody Specialization",
          description: "U of Michigan",
          timestamp: "May 2021",
          img: "michigan.jpg"
     }, {
          title: "Web Programming",
          description: "Turkcell Geleceğin Yazarları",
          timestamp: "June 2021",
          img: "turkcell.png"
     }, {
          title: "REST API (Intermediate)",
          description: "HackerRank",
          timestamp: "Dec 2022",
          img: "hackerrank.png"
     }, {
          title: "Node.js (Intermediate)",
          description: "HackerRank",
          timestamp: "Aug 2021",
          img: "hackerrank.png"
     }, {
          title: "JavaScript (Intermediate)",
          description: "HackerRank",
          timestamp: "Aug 2021",
          img: "hackerrank.png"
     }, {
          title: "CSS",
          description: "HackerRank",
          timestamp: "Mar 2023",
          img: "hackerrank.png"
     }, {
          title: "C# (Basic)",
          description: "HackerRank",
          timestamp: "Aug 2021",
          img: "hackerrank.png"
     }]
}, {
     title: "Contact Me",
     experiences: [{
          title: "📧 bciner@tudelft.nl",
          description: "School Email",
          buttons: [{
               href: "mailto:bciner@tudelft.nl",
               title: "Send me an Email"
          }]
     }, {
          title: "🕹️ Sards (sards)",
          description: "Discord Account"
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
     subtitle: "Wannabe Genetic Engineer",
     text: `Hello! I am a science enthusiast that is currently studying
     Nanobiology in TU Delt. I am interested in computational sciences
     and biology.`,
     tags: ["molecular-biology", "science", "programming", "INFP-T", "5w6"],
     education: {
          title: "Education",
          experiences: [{
               title: "📖 Nanobiology BSc.",
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
               title: "🏫 French High School",
               description: "Saint-Joseph Istanbul",
               timestamp: "2019-2024",
               buttons: [{
                    title: "School's Website",
                    href: "https://sj.k12.tr"
               }]
          }]
     },
     technologies: "Technologies"
}