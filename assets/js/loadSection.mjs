import { sections as en } from "./sectionList/en.mjs"
import { sections as fr } from "./sectionList/fr.mjs"

const langs = navigator.languages || [navigator.language]

const langchoosen = (new URLSearchParams(window.location.search).get("lang") || langs.find(x => (["en", "fr"].some(l => x.startsWith(l)))) || "en").split("-")[0]

if (langchoosen === "fr") 
     window.sections = fr
else
     window.sections = en