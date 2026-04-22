import { useState } from "react";
import Navbar from "../components/Navbar"
import DetailBox from "../components/DetailBox"
import CardTable from "../components/CardTable"
import Pagination from "../components/Pagination"
import { Link } from "react-router-dom"

function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <div>
      <Navbar />
        <div className="layout">
          <div className="left">
            <DetailBox receivedPokemon={selectedPokemon}/>
          </div>
          <div className="right">
            <CardTable sendPokemon={setSelectedPokemon} />
          </div>
        </div>
    </div>
  )
}

export default Home