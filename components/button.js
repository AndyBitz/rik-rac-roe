export default ({ children, primary, ...rest }) => {

  if (primary) {
    rest.className = `${rest.className} primary`
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
          color: #fff;
          font-size: .8em;
          padding: .5em 1em;
          box-shadow: 0px 2px 2px 0px rgba(0,0,0,.2);
          cursor: pointer;
          outline: none;
          transition: box-shadow 200ms ease-out;
          position: relative;
        }

        button:hover {
          box-shadow: 0px 2px 4px 2px rgba(0,0,0,.2);
          background-color: #2a2a2a;
        }

        button.primary {
          background-color: #00aced;
        }

        button.primary:hover {
          background-color: #37b3e2;
        }
      `}
      </style>
    </button>
  )
}
