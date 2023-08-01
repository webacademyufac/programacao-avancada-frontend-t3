const ul = document.getElementById('listOfLinks')
const input = document.querySelector('input')
const form = document.querySelector('form')

function showMenu() {
   if (navbar.style.display == 'block') {
    navbar.style.display = 'none'
   } else {
    navbar.style.display = 'block'
   }
}

async function load() {
    const response = await fetch('http://localhost:3000/')
        .then(data => data.json())
    response.urls.map(({ name, url, _id }) => addElement(name, url, _id))
}

load()

function addElement(name, url, _id) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    // const actions = document.createElement("div")
    // actions.classList.add('actions')
    const trash = document.createElement("span")
    const edit = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    edit.innerHTML = `<button onclick="removeElement()"><i class="fas fa-edit"></i></button>`
    trash.innerHTML = `<button onclick="removeElement()"><i class="fa-solid fa-trash"></i></button>`

    edit.onclick = () => editElement(edit, { name, url, _id })
    trash.onclick = () => removeElement(trash, { name, url, _id })

    ul.append(li)
    // ul.append(actions)
    li.append(a)
    li.append(edit)
    li.append(trash)

}

async function addElementAndSendToApi({ name, url }) {

    addElement({ name, url })

    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            url: url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location.reload()
    if (!response.ok)
        console.error(`Erro ao enviar os dados para a API: ${response.statusText}`)

}

async function editElement(element, { name, url, _id }) {
    input.value = `${name},${url}`

    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

        let { value } = input
        const [nameSplit, urlSplit] = value.split(',')

        const response = fetch(`http://localhost:3000/${_id}`, { method: 'DELETE' })
    }

)
    if(confirm('deseja alterar?')){
        const response = await fetch('http://localhost:3000', {
        method: 'PATCH',
        body: JSON.stringify({
            name: nameSplit,
            url: urlSplit
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location.reload()
    }
}
        

async function removeElement(element, { name, url, _id }) {
    if (confirm('Tem certeza que deseja deletar?')) {

        const response = await fetch(`http://localhost:3000/${_id}`, { method: 'DELETE' })

        element.parentNode.remove()

        if (!response.ok)
            console.error(`Erro ao enviar os dados para a API: ${response.statusText}`)
    }

}


form.addEventListener('submit', (event) => {

    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    addElementAndSendToApi({ name, url })

    input.value = ''

})