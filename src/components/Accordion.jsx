import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);
  const handleButton = (id) => {
    setActiveId((prev) => (prev === id) ? false : id)
  }
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((item) => {
          return (
            <FAQ
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onToggle={() => handleButton(item.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
