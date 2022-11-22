import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project coded by Mariia Kushnir and is{" "}
          <a
            href="https://github.com/MariiaChitra/react-dictionary-search-engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/delightful-pithivier-31e5d9/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
