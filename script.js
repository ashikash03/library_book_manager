function storeBook(event) {
    event.preventDefault();  // Prevents form submission

    const book = {
        title: document.getElementById('book_title').value,
        author: document.getElementById('author_name').value,
        ISBN: document.getElementById('isbn').value
    }

    if (book.title === '' || book.author === '' || book.ISBN === '') {
        alert('Please fill the form properly!');
    } else {
        if (localStorage.getItem(book.ISBN)) {
            alert('Book already exists!');
        } else {
            localStorage.setItem(book.ISBN, JSON.stringify(book));
            alert('Book stored successfully!');
        }
    }
}

function retrieveBook(event) {
    event.preventDefault();  // Prevents form submission

    const enteredISBN = document.getElementById('retrieve_isbn').value;

    if (localStorage.getItem(enteredISBN)) {
        const book = JSON.parse(localStorage.getItem(enteredISBN));

        // Update the fields in the retrieve form with the book details
        document.getElementById('rbook_title').value = book.title;
        document.getElementById('rauthor_name').value = book.author;
        document.getElementById('risbn').value = book.ISBN;

        // Show the book details card
        document.getElementById('rbookDetails').style.display = 'block';
    } else {
        alert('Book not found!');
        // Hide the book details card if not found
        document.getElementById('rbookDetails').style.display = 'none';
    }
}

function deleteBook(){
    let search_isbn=deleteIsbn.value
    if(localStorage.getItem(search_isbn)){
        book_to_delete=JSON.parse(localStorage.getItem(search_isbn))
        alert(`removed ${book_to_delete.title}`)
        localStorage.removeItem(search_isbn)
    }
}

function clearBook(){
    alert("Cleared all book entries!!")
    localStorage.clear()
}