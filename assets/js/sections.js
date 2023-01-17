const sections = window.sections

const linkIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="link-icon" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>`

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

     anchor.innerHTML = `${linkIcon} ${btn.title}`

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

