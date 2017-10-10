export const P = ({ children, ...rest }) => (
  <p {...rest}>
    { children }
    <style jsx>
    {`
      p {

      }
    `}
    </style>
  </p>
)


export const H = ({ children, ...rest }) => (
  <h1 {...rest}>
    { children }
    <style jsx>
    {`
      h1 {

      }
    `}
    </style>
  </h1>
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