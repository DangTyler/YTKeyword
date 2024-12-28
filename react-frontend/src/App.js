import React from "react";

const App = () => {
  const [keyword, setKeyword] = React.useState('');
  const [results, setResults] = React.useState([]);

  const searchVideos = () => {
    // Mock results for now
    setResults([{ title: "Sample Video", id: "abc123" }]);
  };

  return (
    <div>
      <h1>Video Search App</h1>
      <input 
        type="text" 
        placeholder="Search keyword" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={searchVideos}>Search</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
