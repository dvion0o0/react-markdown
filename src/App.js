import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [value, setValue] = useState("# markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{value}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
