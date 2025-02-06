import FAQs from "./components/main/faq/page";
import Hero from "./components/main/hero/page";
import Headbar from "./components/main/navbar/page";

export default function Home() {
  return (
    <div>
      <Headbar/>
      <Hero/>
      <FAQs/>
    </div>
  );
}
