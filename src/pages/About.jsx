import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <p>In this assignment, you must create a Pokédex using React!</p>
        <p>A Pokédex is a catalog of Pokémon, that a trainer can browse to get detailed information about any Pokémon.</p>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Requirements:</p>
        <div className="aboutlist">
          <ul>
            <li>Pokémon information must be retrieved from PokéAPI, which you should already be familiar with.</li>
            <li>The Pokédex must display a list of Pokémon and support simple pagination (e.g. “next” and “previous” buttons to get the next/previous page of Pokémon), such that not all Pokémon are displayed at the same time.</li>
            <li>When a user clicks on a specific Pokémon, additional information about that Pokémon must be displayed. E.g. type(s), stats, abiltities, height and weight.</li>
            <li>The application must contain multiple pages (e.g. "pokedex" and "about") and utilize React Router to route between them.</li>
            <li>The application must be developed using Vite.</li>
          </ul>
        </div>
        <p>Feel free to expand on the requirements. If you'd like to create something different from a Pokedex, you are welcome to find another Web API to work with. Just ensure that you meet all the requirements outlined above (pagination, a detailed view and multiple pages)!</p>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          <h3>PokéAPI</h3>
        </a>
      </div>
    </div>
  )
}

export default About