const input = document.getElementById("addtarea")
const btnAdd = document.getElementById("btn-add")
const ul = document.getElementById("listtarea")
const mensaje = document.getElementById("mensaje")


btnAdd.addEventListener("click", (e) => {
    e.preventDefault()
    const tarea = input.value
    const deleteButton = addBtnDelete()

    if(tarea !== "") {
        const li = document.createElement("li")
        const texto = document.createElement("p")
        texto.textContent = tarea

        li.appendChild(texto)
        li.appendChild(deleteButton)
        ul.appendChild(li)

        input.value = ""
        mensaje.style.display = "none"
    }
})

function addBtnDelete() {
    const boton = document.createElement("button")
    boton.textContent = "X"
    boton.className = "btn-delete"

    boton.addEventListener("click", (e) => {
        const item = e.target.parentElement
        ul.removeChild(item)


        const items = document.querySelectorAll("li")
        if(items.length === 0) {
            mensaje.style.display = "block"
        }
    })
    return boton
}