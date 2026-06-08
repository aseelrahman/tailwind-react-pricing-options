import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./assets/components/DaisyNav/DaisyNav";
import NavBar from "./assets/components/NavBar/NavBar";
import PricingOptions from "./assets/components/PricingOptions/PricingOptions";
import ResultsChart from "./assets/components/ResultsChart/ResultsChart";


const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {
  return (
    <>
      <header>
        <NavBar />
        {/* <DaisyNav /> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>

        <ResultsChart />
      </main>
    </>
  );
}

export default App;
