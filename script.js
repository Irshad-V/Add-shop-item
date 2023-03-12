const form = document.getElementById("shop-form")
const itemName = document.getElementById("item-name")
const itemqty = document.getElementById("item-qty")
const list = document.getElementById("list")
const alertBox = document.getElementById("alertBox")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    if (itemName.value !== "" && itemqty.value !== "") {
        const tr = document.createElement("tr")
        const rand = Math.floor((Math.random() * 1000) + 1)
        tr.setAttribute("id", `${rand}`)
        tr.innerHTML = ` 
        <td>${rand}</td>
        <td>${itemName.value}</td>
        <td>${itemqty.value}</td>
        
        <td> <button class="btn btn-danger">Delete</button> </td>
        `
        list.appendChild(tr)
        itemName.value = ""
        itemqty.value = " "
        alertBox.classList.add('alert-success')
        alertBox.innerHTML = "Item Added Successfully !";
        setTimeout(() => {
            alertBox.classList.remove("alert-success")
            alertBox.innerHTML = ""
        }, 3000)
    } else {
        alertBox.classList.add("alert-danger")
        alertBox.innerHTML = "Please Add An Item !"
        setTimeout(() => {
            alertBox.classList.remove("alert-danger")
            alertBox.innerHTML = ""
        }, 3000)
    }

})



list.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn")) {

        e.target.parentElement.parentElement.remove()

        alertBox.classList.add("alert-danger")
        alertBox.innerHTML ="Item Deleted !"
        setTimeout(() => {
            alertBox.classList.remove("alert-danger")
            alertBox.innerHTML =""
        }, 3000);

    }
})
