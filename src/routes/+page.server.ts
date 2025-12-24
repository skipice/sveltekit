// +page.server.ts
import { db } from "$lib/server/db";
import { books } from "$lib/server/db/schema";

export async function load() {
  try {
    console.log("hi");
    const dbData = await db.select().from(books);
    console.log(dbData);

    return {
      booksData: dbData,
    };
  } catch (error) {
    console.log(error, "hi catch");
    return {
      booksData: [],
    };
  }
}
