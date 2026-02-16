import { Book } from "../../../../../types/book";
import BookCard from "./BookCard";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
