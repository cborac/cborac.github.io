const colors = ["#3742fa", "#ff6348", "#ff4757"]
const randomColor = colors[Math.floor(Math.random() * colors.length)]

const el = document.createElement("style")
el.innerHTML = `
     :root {
          --accent-color: ${randomColor}
     }
`

document.querySelector('meta[name="theme-color"]').setAttribute("content", randomColor)

document.body.append(el)

ScrollReveal({
     delay: 1.5,
     scale: .9
}).reveal(".card-container");


ScrollReveal({
     delay: 1.5,
     scale: .7
}).reveal(".intro-anim");

document.querySelectorAll(".tag[color]").forEach(x => {
     const color = x.attributes.getNamedItem("color").value
     x.style.color = color
     x.style.background = color + "1A"
})

ScrollReveal({
     delay: 1.5,
     scale: .7
}).reveal(".article");