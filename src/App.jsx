import React, { useState } from "react"
import './App.css';

const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:10000" 
  : "https://verse-finder-api.onrender.com";

function App() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); 



  const handleSearch = async () => {
    setError("");
    setResults(null);
    if(topic != ""){
      setIsLoading(true);
      try{
        const response = await fetch(`${API_BASE_URL}/api/search`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({topic: topic})
      });

      const data = await response.json();

      if (response.ok){
        setResults(data);
      }else{
        setError(data.error || "Something went wrong.");
      }
    } catch (err){
      console.error("Search failed:", err);
    } finally {
      setIsLoading(false);
    }
  }else{
    setError("You must enter a topic!");
  }
}

  return (
    <div style={{padding: '20px'}}>
      <h1>Verse Finder</h1>
      <h3 style={{fontStyle: 'italic'}}>Enter a topic</h3>
      <input 
        type="text" 
        value={topic} 
        onChange={(e) => setTopic(e.target.value)} 
        placeholder="e.g. Verses on self control" 
      />
      <button
        onClick={handleSearch}>Search
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        {isLoading ? (
          <p>Loading</p>
          ):(
            results && results.passages && results.passages.map((passage, index) => (
          <div
            key={index}
            className="bible-verse"
            dangerouslySetInnerHTML={{__html: passage}}
            style={{marginBottom: '20px', borderBottom: '1px solid #ccc'}}
          />
            ))
          )
        }
      </p>
        
    </div>
    );
}

export default App
