import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function AccordionII() {
  const [currOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((elem, index) => (
        <Item
          item={elem}
          pos={index}
          key={elem.title}
          onClick={setIsOpen}
          currOpen={currOpen}
        />
      ))}
    </div>
  );
}

function Item(props) {
  const isOpen = props.pos === props.currOpen;

  function handleClick() {
    props.onClick(isOpen ? null : props.pos);
    console.log("inside handler");
    console.log(isOpen);
  }

  return (
    <div className={`item ${isOpen ? "highlighted" : ""}`}>
      <div className="title" onClick={handleClick}>
        <p>0{props.pos + 1}</p>
        <p>{props.item.title}</p>
        <button>{isOpen === true ? "-" : "+"}</button>
      </div>
      <div className={`text ${isOpen ? "" : "hidden"}`}>{props.item.text}</div>
    </div>
  );
}
