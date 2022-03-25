import books from './books';

const getAllBooks = async (limit) => {
  return await books.find({}).limit(limit);
}

const getBookById = async (id) => {
  return await books.findById(id);
}

const createBook = async ({ title, description, author }) => {
  return await books.create({ title, description, author });
}

const updateBook = async (id: number, { title, description, author }) => {
  const set = { title: '', description: '', author: '' };
  if (title) set.title = title;
  if (description) set.description = description;
  if (author) set.author = author;
  return await books.findByIdAndUpdate(id, set);
}

const deleteBook = async (id) => {
  return await books.findByIdAndDelete(id);
}

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}