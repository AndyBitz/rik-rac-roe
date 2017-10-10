export default ({ children }) => (
  <span>
    { children }
    <style jsx>
    {`
      span {
        display: inline-flex;
        align-items: center;
      }
    `}
    </style>
  </span>
)