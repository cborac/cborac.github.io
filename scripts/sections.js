const sections = window.sections

/**
 * @typedef {{ title: string, href: string }} ExperienceButton
 */

/**
 * @typedef {{
 *   title: string,
 *   description: string,
 *   buttons: ExperienceButton[]
 * }} Experience
 */

/**
 * @typedef {{
 *   title: string,
 *   experiences: Experience[]
 * }} Section
 */

/**
 * @param {ExperienceButton} btn 
 * @returns {HTMLAnchorElement}
 */
function buttonComponent(btn) {
     const anchor = document.createElement("a")
     anchor.classList.add("attachment")
     anchor.target = "_blank";
     anchor.href = btn.href || ""

     if (!btn.href) anchor.setAttribute("disabled", true)

     anchor.innerHTML = `<i class="fa-solid fa-link"></i> ${btn.title}`

     return anchor
}

/**
 * @param {Experience} exp 
 * @returns {HTMLDivElement}
 */
function experienceComponent(exp) {
     const container = document.createElement("div")
     container.classList.add("divided-list-obj")
     
     const title = document.createElement("h2")
     title.classList.add("obj-title")
     title.innerHTML = exp.title

     const description = document.createElement("p")
     description.classList.add("obj-timestamp")
     description.innerHTML = exp.description

     const linkRow = document.createElement("div")
     linkRow.classList.add("attachment-row")
     linkRow.append(...(exp.buttons || []).flatMap(x => [buttonComponent(x), document.createTextNode("\n")]))
     
     container.append(title, description, linkRow)

     return container
}

sections.reverse().forEach(section => {
     const container = document.createElement("div")
     container.classList.add("article")

     const title = document.createElement("h1")
     title.classList.add("title")
     title.innerHTML = section.title

     container.append(title, ...section.experiences.map(experienceComponent))

     document.body.insertBefore(container, document.getElementById("pre-tag").nextSibling)
})

