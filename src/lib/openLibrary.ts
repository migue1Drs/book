
const BASE_URL = "https://openlibrary.org/search.json";
const USER_AGENT = "MyAppName/1.0 (sdlrsmiguel@gmail.com)";
import { Book } from "../types/book";

export async function searchBooks(area: string): Promise<Book[]> {
    const params = new URLSearchParams({
        q: area,
        limit: "10",
        fields: "key,title,author_name,editions,language,edition_count",
    });


    const response = await fetch(`${BASE_URL}?${params.toString()}`, {
        headers: {
            "User-Agent": USER_AGENT,
        },
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error("Error cargando información");
    }

    const data = await response.json();

    console.log(data);
    return data.docs;
}