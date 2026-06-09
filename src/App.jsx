import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./assets/components/DaisyNav/DaisyNav";
import NavBar from "./assets/components/NavBar/NavBar";
import PricingOptions from "./assets/components/PricingOptions/PricingOptions";
import ResultsChart from "./assets/components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./assets/components/MarksChart/MarksChart";


const pricingPromise = fetch('pricingData.json').then(res => res.json())
const marksPromise = axios.get('marksData.json')

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

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise} />
        </Suspense>

        <ResultsChart />
      </main>
    </>
  );
}

export default App;
