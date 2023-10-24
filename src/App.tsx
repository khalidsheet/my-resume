import "./App.css";
import { Education } from "./components/Education/Education";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Hero/Hero";
import { WorkExp } from "./components/Work/WorkExp";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WorkExp />
      <Education />
    </>
  );
}

export default App;
