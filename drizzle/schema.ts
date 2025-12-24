import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const authors = sqliteTable("authors", {
  authorId: integer("author_id"),
  fullName: text("full_name"),
  country: text(),
});

export const bookAuthors = sqliteTable("book_authors", {
  bookId: integer("book_id"),
  authorId: integer("author_id"),
});

export const books = sqliteTable("books", {
  bookId: integer("book_id"),
  isbn: integer(),
  title: text(),
  categoryId: integer("category_id"),
  publisherId: integer("publisher_id"),
  publicationYear: integer("publication_year"),
  copiesTotal: integer("copies_total"),
  copiesAvailable: integer("copies_available"),
});

export const categories = sqliteTable("categories", {
  categoryId: integer("category_id"),
  name: text(),
});

export const members = sqliteTable("members", {
  memberId: integer("member_id"),
  fullName: text("full_name"),
  phone: integer(),
  email: text(),
  joinDate: text("join_date"),
});

export const publishers = sqliteTable("publishers", {
  publisherId: integer("publisher_id"),
  name: text(),
});
