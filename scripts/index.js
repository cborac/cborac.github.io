const colors = ["#3742fa", "#2ed573", "#ff6348", "#ff4757"]
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
}).reveal(".divided-list-obj");


ScrollReveal({
     delay: 1.5,
     scale: .7
}).reveal(".intro-anim");

document.querySelectorAll(".tag[auto-color]").forEach(x => {
     const color = x.attributes.getNamedItem("auto-color").value
     x.style.color = color
     x.style.background = color + "1A"
})

ScrollReveal({
     delay: 1.5,
     scale: .7
}).reveal(".article");