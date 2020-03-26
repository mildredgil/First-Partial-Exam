let addComment = (name, comment) => {
    let liNode = document.createElement("li");
    liNode.innerHTML = 
    `
    <label>${name}</label>
    <button class="delete">delete</button>
    <label>${comment}</label>
    `

    let ul = document.getElementById("comments");

    ul.append(liNode);

    liNode.addEventListener("click", (event) => {
        console.log(event);
        if(event.target.matches(".delete")) {
            event.currentTarget.remove();
        }
    })
}

let eventHandler = () => {
    let button = document.querySelector("#submit");
    let name = document.getElementsByClassName("userName")[0];
    let comment = document.getElementById("userComment");

    button.addEventListener("click", (event) => {
        event.preventDefault();

        if(name.value != "") {
            if(comment.value != "") {
                addComment(name.value, comment.value);
                name.value = "";
                comment.value = "";
            }
        }
    })
}

let init = () => {
    eventHandler();
}

init();