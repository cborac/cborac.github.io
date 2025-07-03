const sections = window.sections


/**
 * @typedef {{ title: string, href: string }} ExperienceButton
 */

/**
 * @typedef {{
 *   title: string,
 *   description?: string,
 *   timestamp?: string,
 *   buttons: ExperienceButton[]
 * }} Experience
 */

/**
 * @typedef {{
 *   title: string,
 *   experiences: Experience[],
 *   minWidth?: string
 * }} Section
 */

/**
 * @param {ExperienceButton} btn 
 * @returns {HTMLAnchorElement}
 */
function buttonComponent(btn) {
     const anchor = document.createElement("a")
     anchor.classList.add("card-btn")
     anchor.target = "_blank";
     anchor.href = btn.href || ""

     if (!btn.href) anchor.setAttribute("disabled", true)

     anchor.innerHTML = btn.title

     return anchor
}

/**
 * @param {Experience} exp 
 * @param {Section} section
 * @returns {HTMLDivElement}
 */
function experienceComponent(exp, section) {
     const container = document.createElement("div")
     container.classList.add("card-container")
     if (exp.minWidth || section.minWidth) container.style.minWidth = exp.minWidth || section.minWidth
     
     
     const info = document.createElement("div")
     container.append(info)

     const title = document.createElement("h2")
     title.classList.add("card-title")
     let imgsrc = ""
     if (exp.img) {
          imgsrc = `<img src="./assets/images/${exp.img}" class="card-img"> `
     }

     title.innerHTML = imgsrc + exp.title

     const description = document.createElement("p")
     description.innerHTML = exp.description || ""

     const timestamp = document.createElement("p")
     timestamp.classList.add("card-timestamp")
     timestamp.innerHTML = exp.timestamp || ""

     const linkRow = document.createElement("div")
     linkRow.classList.add("card-btn-list")
     linkRow.append(...(exp.buttons || []).flatMap(x => [buttonComponent(x), document.createTextNode("\n")]))
     
     info.append(title, description, timestamp)
     container.append(info, linkRow)

     return container
}

function loadSection(section) {
     const container = document.createElement("div")
     container.classList.add("article")

     const title = document.createElement("h1")
     title.classList.add("title")
     title.innerHTML = section.title

     const cardGrid = document.createElement("div")
     cardGrid.classList.add("card-grid")
     cardGrid.append(...section.experiences.map(x => experienceComponent(x, section)))

     container.append(title, cardGrid)
     return container
}

sections.reverse().forEach(x => {
     document.body.insertBefore(loadSection(x), document.getElementById("pre-tag").nextSibling)
})


document.querySelector("div[translate='education']").prepend(loadSection(window.hero.education))