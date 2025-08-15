import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query; 

  return (
    <div className="w-screen">
      <section className="blue_container pattern-earth flex items-center justify-center">
        <h1 className="heading rounded-lg !text-cloud">pitch your startup!<br /> <br />connect with investors. <br /> 10x your growth.</h1>

        <p className="bg-black/5 sub-heading !font-extrabold !text-[25px] !text-cloud">Submit ideas, vote on pitches and get noticed as the next great unicorn!</p>

        <SearchForm query={query}/>

      </section>
    </div>
  );
}


// in every page, we have access to the searchParams for query parameters.