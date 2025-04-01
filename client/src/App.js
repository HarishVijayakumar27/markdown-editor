
import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter markdown here..."
        />
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
}

export default App;
