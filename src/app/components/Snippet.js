"use client";
import React from "react";

function Snippet({ children }) {
  const [showSnippet, setShowSnippet] = React.useState(false);

  return (
    <>
      {showSnippet ? (
        children 
      ) : (
        <div className="reveal">
          <button onClick={() => setShowSnippet(!showSnippet)}>
            Reveal Content
          </button>
        </div>
      )}
    </>
  );
}

export default Snippet;
