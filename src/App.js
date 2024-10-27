import Header from "./components/header/Header";
import {
  HeroSection,
  NewArrivals,
  SponsorsSection,
  TopSelling,
} from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SponsorsSection />
      <NewArrivals />
      <TopSelling />
    </div>
  );
}

export default App;
