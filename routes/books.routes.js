import express from 'express';
import BookController from '../controllers/book.controller.js';  // Correct import
import { validate} from '../middlewares/validation.middleware.js';
import  {bookValidationSchema}  from '../middlewares/validation.middleware.js';  // Uncomment if needed
import  {authMiddleware } from '../middlewares/auth.middleware.js';
import  {roleMiddleware}  from '../middlewares/role.middleware.js';

const router = express.Router();

// Add a book (admin-only)
router.post(
    '/books',
    authMiddleware,                // Verify user is authenticated
    roleMiddleware('admin'),       // Verify user is an admin
    validate(bookValidationSchema),// Validate request body
    BookController.createBook      // Controller function
);

// Get all books
router.get('/books', BookController.getAllBooks);

// Get book by ID
router.get('/books/:bookId', BookController.getBookById);  // Use bookId here

// Update a book (admin-only)
router.put(
    '/books/:bookId',  // Use bookId here
    authMiddleware,
    roleMiddleware('admin'),
    validate(bookValidationSchema),
    BookController.updateBook
);

// Delete a book (admin-only)
router.delete(
    '/books/:bookId',  // Use bookId here
    authMiddleware,
    roleMiddleware('admin'),
    BookController.deleteBook
);

export default router;
