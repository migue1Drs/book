import { notFound } from "next/navigation";
import { searchBooks } from "../../../lib/openLibrary";
import { VALID_AREAS } from "../../../lib/constants";
import BookList from "../../../components/books/BookList";

export default async function AreaPage({
  params,
}: {
  params: { area: string };
}) {
  const { area } = await params;

  if (!VALID_AREAS.includes(area)) {
    return notFound();
  }

  try {
    const books = await searchBooks(area);

    return (
      <>
        <h1 className="text-2xl font-bold mb-6 capitalize py-8">
          {area} Books
        </h1>
        <BookList books={books} />
      </>
    );
  } catch {
    return (
      <div className="text-red-600">
        Error cargando los libros.
      </div>
    );
  }
}
