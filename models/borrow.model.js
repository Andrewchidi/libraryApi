import mongoose from 'mongoose';

const borrowedBookSchema = new mongoose.Schema({
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['borrowed', 'returned'],
      default: 'borrowed',
    },
  });
  
  const BorrowedBook = mongoose.model('BorrowedBook', borrowedBookSchema);
  
  export default BorrowedBook;