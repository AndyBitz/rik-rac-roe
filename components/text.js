export const P = ({ children, ...rest }) => (
  <p {...rest}>
    { children }
  </p>
)


export const H = ({ children, ...rest }) => (
  <h1 {...rest}>
    { children }
  </h1>
)

export const H2 = ({ children, ...rest }) => (
  <h2 {...rest}>
    { children }
  </h2>
)

export const Center = ({ children, ...rest }) => (
  <div>
    { children }
    <style jsx>
    {`
      div {
        display: flex;
        justify-content: center;
      }
    `}
    </style>
  </div>
)