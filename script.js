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
}

function render() {
    const bookshelf = document.querySelector('.bookshelf');

    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild);
    }

    myLibrary.map((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        bookshelf.appendChild(card);

        const title = document.createElement('h1');
        title.textContent = item.title;
        card.appendChild(title);

        const author = document.createElement('p');
        author.textContent = item.author;
        card.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = item.pages + ' pages';
        card.appendChild(pages);

        const markAsRead = document.createElement('button');
        markAsRead.textContent = 'Mark as Read';
        card.appendChild(markAsRead);

        const del = document.createElement('button');
        del.textContent = 'Delete';
        card.appendChild(del);
    });

}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not yet read');
const hp = new Book('Harry Potter', 'J.K. Rowling', 635, 'has been read');
const pokemon = new Book('Pokemon', '‎Satoshi Tajiri‎', 122, 'has been read');

// pushBookToLibraryArray(hobbit);
// pushBookToLibraryArray(hp);
// pushBookToLibraryArray(pokemon);


title = document.querySelector('#title');
author = document.querySelector('#author');
pages = document.querySelector('#pages');



// DONE: design card in CSS
// DONE: add 'New book' button
// DONE: add 'Delete' button on each book
// DONE: add form to receive book details

// TODO: after pressing new book, make the modal form appear
// TODO: when delete is pressed, the book card disappears
// TODO: when form is filled in and add book is clicked, new card appears
// TODO: form becomes empty after add book is clicked