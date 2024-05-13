const myLibrary = [];
const library = document.getElementById("container");
const button = document.getElementById("button");

function Book(title,author, pages, state) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
}

function addBookToLibrary() {
    const title = prompt("title of your book:");
    const author = prompt("author of your book:");
    const pages = prompt("pages of your book:");
    let state = prompt("have you finished reading the book (yes/no only):");
    while (state != "yes" && state != "no"){
        state = prompt("have you finished reading the book (yes/no only):");
    }
    const newBook = new Book(title,author,pages,state);
    myLibrary.push(newBook);
}

function clearLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}
function displaylibrary(myLibrary){ 
    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.classList.add("book");
        const title = document.createElement("h1");
        title.textContent = myLibrary[i].title;
        book.appendChild(title);
        const author = document.createElement("h3");
        author.textContent = myLibrary[i].author;
        book.appendChild(author);
        const pages = document.createElement("p");
        pages.textContent = myLibrary[i].pages + " " + "pages";
        book.appendChild(pages);
        const stateButton = document.createElement("button");
        stateButton.classList.add("state-button");
        stateButton.addEventListener("click", () => {
            if (stateButton.classList.contains("active")){
                stateButton.classList.remove("active");
                myLibrary[i].state = "no";
                state.textContent = "not read";
            } else {
                stateButton.classList.add("active");
                myLibrary[i].state = "yes";
                state.textContent = "read";
            }
        })
        book.appendChild(stateButton);
        const state = document.createElement("p");
        if (myLibrary[i].state == "yes"){
            state.textContent = "read";
        } else {
            state.textContent = "not read";
        }
        book.appendChild(state);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        book.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(i,1);
            clearLibrary();
            displaylibrary(myLibrary);
        });
        library.appendChild(book);
    }
}

button.addEventListener("click", () => {
    addBookToLibrary();
    clearLibrary();
    displaylibrary(myLibrary);
});
    