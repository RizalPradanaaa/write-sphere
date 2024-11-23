import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Search from "@/components/Search";


export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <Navbar />
      <Search/>
      <Hero/>
      <Posts/>
    </div>
  );
}
