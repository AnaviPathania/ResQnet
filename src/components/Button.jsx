// A reusable Button component.
// "onClick" and "label" are PROPS passed down from whichever page uses this button.
function Button({ label, onClick, type = "button" }) {
  // type = "button" is a DEFAULT PARAMETER (ES6+ feature): if no type prop is
  // given, it defaults to "button" instead of the browser's default "submit".
  return (
    <button className="btn" type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;