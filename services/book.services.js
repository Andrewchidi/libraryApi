import  Book  from '../models/book.model.js'

class BookService {
    async createBook (data) {
        return await Book.create(data)
    }

    async getAllbooks (query) {
        const filters = {};

        if (query.search) {
            filters.title = { $regex: query.search, $options: 'i' };
        }

        if (query.author) {
            filters.author = query.author;
        }

        if (query.minYear || query.maxYear ) {
            filters.publicationYear = {
                $gte: query.minYear || 0,
                $lte: query.maxYear || Infinity,
            };
        }

        return await Book.find(filters);
    }

    async getBookById (bookId) {
        try {
            const book = await Book.findById(bookId)
            if (!book) {
                throw new Error('Book not Found');
            }
            return book;
        } catch {
            throw new Error('Error fetching book' + error.message)
        }

    }

    async updateBook(bookId, updateData) {

        try {
            const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, { new: true, runValidators: true });
            if (!updatedBook) {
                throw new Error('Book not found');
            }
            return updatedBook;

        } catch (error) {
            throw new Error('Error updating book:' + error.message);
        }

    }

    async deleteBook(bookId) {
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if(!deletedBook) {
            throw new Error('Book not found');
        }
        return deletedBook;
    }
}


export default new BookService();