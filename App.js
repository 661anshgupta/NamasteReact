// This object is the place where you will give attribute to your tag

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world!"
);
console.log(heading);

//   There must be some root here react will render it's content
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);

/**
 <div id='parent'>
  <div id='child'>
    <h1>I am h1 tag</h1>
    <h2> I am h2 tag</h2>
  </div>
</div>;
 * 
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
