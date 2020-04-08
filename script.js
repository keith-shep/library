let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${isRead}`;
    }
}

function pushBookToLibraryArray(myBook) {
    myLibrary.push(myBook);
    render();
}

function render() {
    const bookshelf = document.querySelector('.bookshelf');

    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild);
    }

    myLibrary.map((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        bookshelf.appendChild(card);
        card.dataset.index = index;
        
        const title = document.createElement('h1');
        title.textContent = item.title;
        card.appendChild(title);
        
        const author = document.createElement('p');
        author.textContent = item.author;
        card.appendChild(author);
        
        const pages = document.createElement('p');
        pages.textContent = item.pages + ' pages';
        card.appendChild(pages);
        
        const readStatus = document.createElement('p');
        if (item.isRead) {
            readStatus.textContent = "I've read this!";
        } else {
            readStatus.textContent = "Not yet read...";
        }
        card.appendChild(readStatus);

        const readToggleBtn = document.createElement('button');
        readToggleBtn.textContent = 'Change Read Status';
        readToggleBtn.addEventListener("click", () =>{
            console.log(item.isRead = !item.isRead);
            render();
        });

        card.appendChild(readToggleBtn);

        

        
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.className = 'delete-btn';
        del.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            render();
        });
        card.appendChild(del);
    });

}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const hp = new Book('Harry Potter', 'J.K. Rowling', 635, true);
const pokemon = new Book('Pokemon', '‎Satoshi Tajiri‎', 122, true);

pushBookToLibraryArray(hobbit);
pushBookToLibraryArray(hp);
pushBookToLibraryArray(pokemon);



const myForm = document.querySelector("form");

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", () => {
    myForm.style.display = "block";
});

const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", (e) => {
    e.preventDefault();
    bookToAdd = new Book(title.value, author.value, pages.value,'read');
    myLibrary.push(bookToAdd);
    render();
    myForm.style.display = "none";
    title.value = "";
    author.value = "";
    pages.value = "";
});

// DONE: design card in CSS
// DONE: add 'New book' button
// DONE: add 'Delete' button on each book
// DONE: add form to receive book details
// DONE: when form is filled in and add book is clicked, new card appears
// DONE: form becomes empty after add book is clicked
// DONE: when delete is pressed, the book card disappears
// DONE: add mark as read implementation

// TODO: after pressing new book, make the modal form appear
// TODO: prevent form from submitted if there are uncompleted fields