const tittle = document.querySelector("#f-tittle")
const author = document.querySelector("#f-author")
const bookId = document.querySelector("#f-book-id")
const button = document.querySelector("#f-button")
const tableBody = document.querySelector("#t-body")


button.addEventListener('click', (event) => {
    event.preventDefault()
    if (tittle.value == '' || author.value == '' || bookId.value == '') {
        alert("fill all the fields !")
    } else {
        const row = document.createElement("tr")
        row.innerHTML = ` 
                          <td> ${tittle.value} </td>
                          <td> ${author.value} </td>  
                          <td> ${bookId.value} </td>
                          <td><i class="fa fa-trash-o text-danger" aria-hidden="true"></i></td>
                          
                        `
        tableBody.appendChild(row)
        tittle.value = ''
        author.value = ''
        bookId.value = ''
    }
})

tableBody.addEventListener('click', (e) => {
    const item = e.target.parentElement.parentElement
    console.log(item)
    console.log(e.target.classList[2])
    if (e.target.classList[2] == 'text-danger') {
        item.remove()
    }
})