import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-gray-950/70  rounded-2xl shadow border-1 border-slate-700/75  p-4">
      <h2 className="font-bold text-lg text-blue-900">{ book.title }</h2>
      <p className="text-sm text-gray-600 font-extrabold">
        {book.author_name?.join(", ") || "Unknown author"}
      </p>

      <p className="text-sm mt-2 text-slate-400/55">
        Languages ({book.language?.length || 0}):
        {
          book.language?.map(lang => (
            <span key={lang} className="inline-block bg-slate-700/50 text-xs text-slate-300 rounded-full px-2 py-1 mx-1">
              {lang}
            </span>
          )) || " No languages available"
        }
      </p>

      <p className="text-xs text-slate-400 mt-2">
        Key: { book.key }
      </p>
    </div>
  );
}