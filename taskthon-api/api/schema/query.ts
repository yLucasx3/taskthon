import { books } from '../../db';

const query = {
  books: async ({ limit }, context) => {
    return await books.getAllBooks(limit)
  },
  book: async ({ id }, context) => {
    return await books.getBookById(id)
  }
};

export default query;