import { BookData } from "@/types/main/type";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `http://localhost:12345/book/random`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error();
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
