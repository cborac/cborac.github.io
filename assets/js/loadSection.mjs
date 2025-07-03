import * as en from "./sectionList/en.mjs"
import * as fr from "./sectionList/fr.mjs"
import * as tr from "./sectionList/tr.mjs"

const langs = (localStorage.getItem("lang") && [localStorage.getItem("lang")]) || navigator.languages || [navigator.language]

let langchoosen = (new URLSearchParams(window.location.search).get("lang") || langs.find(x => (["en", "fr", "tr"].some(l => x.startsWith(l)))) || "en").split("-")[0]

switch (langchoosen) {
     case "fr":
          window.sections = fr.sections
          window.hero = fr.hero
          break
     case "tr":
          window.sections = tr.sections
          window.hero = tr.hero
          break
     default:
          window.sections = en.sections
          window.hero = en.hero
          langchoosen = "en"
          break
}

document.querySelector(`a[lang="${langchoosen}"]`).style.opacity = .8

window.updateLang = (lang) => {
     localStorage.setItem("lang", lang)
     location.reload()
}

/**
 * @param {string} selector 
 * @returns {HTMLDivElement}
 */
function getTranslationEl(selector) {
     return document.querySelector(`*[translate="${selector}"]`)
}

/**
 * @type {{
 *   subtitle: string,
 *   text: string,
 *   tags: string[],
 *   education: Section,
 *   technologies: string
 * }}
 */
const hero = window.hero
getTranslationEl("subtitle").innerHTML = hero.subtitle
getTranslationEl("text").innerHTML = hero.text
getTranslationEl("technologies").innerHTML = hero.technologies
getTranslationEl("tags").innerHTML = hero.tags.map(x => `<p><span class="tag">#${x}</span></p>`).join("\n")