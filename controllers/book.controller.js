import bookServices from "../services/book.services.js";

class BookController {
    static async createBook(req, res) {
        try {
            const newBook = await bookServices.createBook(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getAllBooks(req, res) {
        try {
            const books = await bookServices.getAllBooks(req.query);
            res.status(200).json(books);  
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getBookById(req, res) {
        try {
            const book = await bookServices.getBookById(req.params.bookId);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateBook(req, res) {
        try {
            const book = await bookServices.updateBook(req.params.bookId, req.body);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteBook(req, res) {
        try {
            const book = await bookServices.deleteBook(req.params.bookId);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default BookController;  // Default export
