// ---------- Component-based architecture / Component composition ----------
// Card is a REUSABLE component. It doesn't know anything about donors,
// hospitals, etc. It just displays whatever is passed into it as "children".
// This is called "component composition": building bigger UI by combining
// small, simple components together.

// "props" is an object; here we destructure "children" straight out of it (ES6+ destructuring).
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;