import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { id: 2, title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({
            ...newBook,
            [name]: value,  
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();  

        setBooks([
            ...books,  
            { id: books.length + 1, ...newBook },
        ]);

        setNewBook({
            title: '',
            author: '',
        });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>

            <div className="bookCardsDiv">
                {books.map((book) => (
                    <div key={book.id} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>Author: {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;