import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query; 

  // later get posts data directly from Sanity
  const posts = [{
    _createdAt: new Date(),
    views: 69,
    author: {
      _id : 1, 
      name: "John Grimshaw"
    }, 
    _id: 1,
    description: "The first of his name, Startup 1.", 
    image: "https://cdn.dribbble.com/userupload/21196589/file/original-761d401b5dfba165790ec9b62b4572d6.jpg?resize=752x&vertical=center",
    category: "Robots",
    title: "I, Robot" 
  },{
    _createdAt: new Date(),
    views: 100,
    author: {
      _id : 2,
      name: "Igris Swordwind"
    }, 
    _id: 2,
    description: "BallBuster FC has launched their new app!", 
    image: "https://media.craiyon.com/2025-07-24/PxfbCz3pQNqMpli36oCANg.webp",
    category: "Sports",
    title: "The Ball Busters FC" 
  }]

  return (
    <div className="w-screen">
      <section className="blue_container pattern-earth flex items-center justify-center">
        <h1 className="heading rounded-lg !text-cloud">pitch your startup!<br /> <br />connect with investors. <br /> 10x your growth.</h1>

        <p className="bg-black/5 sub-heading !font-extrabold !text-[25px] !text-cloud">Submit ideas, vote on pitches and get noticed as the next great unicorn!</p>

        <SearchForm query={query}/>

      </section>

      <section className="section_container"> 
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" :` : "All startups :"}
        </p>

        <ul className="mt-7 card_grid">  
          {
            posts?.length > 0 ? (
              posts.map(
              (post: StartupCardType) => {
              
                return (
                  <StartupCard key={post?._id} post={post}/>
                )
            }
            )
            ): (
              <p className="no-result">"No startups found"</p> 
            )
          }
        </ul>
        
      </section>
    </div>
  );
}


// in every page, we have access to the searchParams for query parameters.