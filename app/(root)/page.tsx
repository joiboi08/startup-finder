import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <div className="w-screen">
      <section className="blue_container">
        <h1 className="heading ">pitch your startup!<br /> <br />connect with investors. <br /> 10x your growth.</h1>

        <p className="sub-heading !max-3xl">Submit ideas, vote on pitches and get noticed as the next great unicorn!</p>

        <SearchForm />
      </section>
    </div>
  );
}
