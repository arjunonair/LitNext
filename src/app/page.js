import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  
  const res = await fetch(
    `https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1`,
    // {
    //   next: { revalidate: 100000 },
    // }
  );

  if (!res.ok) {
    throw new Error("Failed To Load Movie Data");
  }

  const data = await res.json();
  console.log(data);
  return (
    <>
      <div>
        
      </div>
    </>
  );
}
