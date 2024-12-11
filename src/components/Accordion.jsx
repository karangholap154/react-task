import React, { useState } from "react";

const Accordion = () => {
  const data = [
    { id: 1, title: "Section 1", content: "This is section 1 content." },
    { id: 2, title: "Section 2", content: "This is section 2 content." },
    { id: 3, title: "Section 3", content: "This is section 3 content." },
  ];
  const [openId, setOpenId] = useState(null);

  return (
    <div className="app-container">
      <h2>Accordion</h2>
      {data.map(({ id, title, content }) => (
        <div key={id}>
          <button onClick={() => setOpenId(openId === id ? null : id)}>
            {title}
          </button>
          {openId === id && <p>{content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
