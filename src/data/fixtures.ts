import {withPublicPath} from "../js/utils";

export default {
  author: "Alex Troshin",
  products: [
    {
      category: 'Production projects',
      projects: [
        {
          name: "V-Victoriya",
          medium: ["Nuxt.js", "Vue", "SCSS"],
          summary: "Hotel website",
          copy: [
            "A web app for a small business with a gallery and a booking (contact) form. ",
            "A project that I made from scratch, starting from design to development, " +
            "which taught me a lot about Vue, Nuxt and optimisation techniques, " +
            "gave some knowledge and practice in Node.js and PHP, " +
            "and led to first contributions to open-source modules and libs."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://v-victoriya.ru"
            }
          },
          images: withPublicPath([
            '/v-victoriya/v-victoriya-1.png',
            '/v-victoriya/v-victoriya-2.png',
            '/v-victoriya/v-victoriya-3.png',
          ])
        },
        {
          name: "Ligva",
          medium: ["Nuxt.js", "Vue", "TailwindCSS"],
          summary: "Language services startup",
          copy: [
            "A bold project aimed on providing language services. ",
            "My first acquaintance with Vue and Nuxt. ",
            "I was trusted with making landings for translators and clients, adding responsiveness to the existing pages."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://ligva.net"
            },
          },
          images: withPublicPath([
            "/ligva/ligva-1.png",
            "/ligva/ligva-2.png",
          ])
        },
      ]
    },
    {
      category: 'Hobby/practice projects',
      projects: [
        {
          name: "Toxin",
          medium: ["Pug", "Javascript", "SCSS"],
          summary: "Pure javascript practice",
          copy: [
            "First project I did to practice the basics of Javascript " +
            "by creating a datepicker, dropdowns, form elements, to get to know Webpack better " +
            "and to brush up on CSS.",
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://troalexis.github.io/toxin-fsd/pages"
            },
            secondary: {
              name: "Github",
              url: "https://github.com/TroAlexis/toxin-fsd/"
            }
          },
          images: withPublicPath([
            '/toxin/toxin-3.jpg',
            '/toxin/toxin-1.png',
            '/toxin/toxin-2.png',
          ])
        },
        {
          name: "Naviscroll.js",
          medium: ["Javascript", "IntersectionObserver"],
          summary: "Tiny navigation plugin",
          copy: [
            "Navigation plugin I decided to create after a task I was given at work " +
            "to make a nav menu that would track your progress of reading the article " +
            "and allow for fast switching between the sections. ",
            "It recursively goes through the tree, sets up an observer on each section, creates a navigation menu " +
            "and lets you hook into each section build, sections getting in and out of view."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://github.com/TroAlexis/naviscroll"
            },
          },
          images: withPublicPath([
            "/naviscroll/naviscroll-1.jpg",
          ])
        },
        {
          name: "Countries",
          medium: ["Vue 3", "Composition API", "TypeScript"],
          summary: "World countries challenge from <a href=\"https://frontendmentor.io\">Frontendmentor.io</a>",
          copy: [
            "A project that was developed to practice Composition API " +
            "and to learn Vue 3 breaking changes and features as well as TypeScript"
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://troalexis.github.io/countries-rest"
            },
            secondary: {
              name: "Github",
              url: "https://github.com/TroAlexis/countries-rest/"
            }
          },
          images:withPublicPath([
            '/countries/countries-1.jpg',
            '/countries/countries-2.jpg',
          ])
        },
        {
          name: "Room",
          medium: ["Pug", "Javascript", "SCSS"],
          summary: "<a href=\"https://frontendmentor.io\">Frontendmentor.io</a> challenge",
          copy: [
            "A small landing page with a javascript infinite slider I made for practice and deeper understanding."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://troalexis.github.io/frontend-room/"
            },
            secondary: {
              name: "Github",
              url: "https://github.com/TroAlexis/frontend-room"
            }
          },
          images: withPublicPath([
            "/room/room-1.jpg",
          ])
        },
        {
          name: "IP-Tracker",
          medium: ["React", "Pug", "CSS-Modules"],
          summary: "<a href=\"https://frontendmentor.io\">Frontendmentor.io</a> challenge",
          copy: [
            "Public IP address tracker made with React (just to practice it, not that it is really needed here). ",
            "<a href='https://www.ipify.org/'>Ipify</a> for getting public IP and coordinates and <a href='https://leafletjs.com/reference-1.7.1.html'>Leaflet</a> for displaying them visually on the map."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://troalexis.github.io/frontend-ip-tracker/"
            },
            secondary: {
              name: "Github",
              url: "https://github.com/TroAlexis/frontend-ip-tracker"
            }
          },
          images: [
            "/tracker/tracker.jpg",
          ]
        },
        {
          name: "Walkers",
          medium: ["React", "Pug", "CSS-Modules"],
          summary: "<a href=\"https://frontendmentor.io\">Frontendmentor.io</a> challenge",
          copy: [
            "Tiny landing I made to mainly practice transitions in React along with CSS",
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Discover",
              url: "https://troalexis.github.io/frontend-chat/"
            },
            secondary: {
              name: "Github",
              url: "https://github.com/TroAlexis/frontend-chat"
            }
          },
          images: withPublicPath([
            "/chat/chat.jpg",
          ])
        },
      ]
    }
  ],
  links: [
    {
      name: "Github",
      url: "https://github.com/TroAlexis"
    },
    {
      name: "Email",
      url: "mailto:aleksei.troshin1997@gmail.com"
    },
  ]
}