export default ({ children, primary, ...rest }) => {

  if (primary) {
    rest.style = Object.assign(
      {}, rest.style, { backgroundColor: '#00aced' }
    )
  }

  return (
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
          position: relative;
        }

        button:focus, button:hover {
          box-shadow: 0px 2px 4px 2px rgba(0,0,0,.2);
        }
      `}
      </style>
    </button>
  )
}
