export default ({ children, ...rest }) => (
  <button {...rest}>
    { children }
    <style jsx>
    {`
      button {
        border: none;
        border-radius: 3px;
        background: none;
        background-color: #1c1c1c;
        color: #ccc;
        font-size: .8em;
        padding: .5em 1em;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.2);
        cursor: pointer;
        outline: none;
        transition: all 200ms ease-out;
      }

      button:focus, button:hover {
        
      }
    `}
    </style>
  </button>
)
