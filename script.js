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
    const state = prompt("state of your book:");
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
        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = myLibrary[i].title;
        book.appendChild(title);
        const author = document.createElement("h3");
        author.classList.add("author");
        author.textContent = myLibrary[i].author;
        book.appendChild(author);
        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = myLibrary[i].pages + "pages";
        book.appendChild(pages);
        const state = document.createElement("p");
        state.classList.add("state");
        state.textContent = myLibrary[i].state;
        book.appendChild(state);
        library.appendChild(book);
    }
}

button.addEventListener("click", () => {
    addBookToLibrary();
    clearLibrary();
    displaylibrary(myLibrary);
});
    