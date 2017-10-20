export default ({ children }) => (
  <section>
    { children }
    <style jsx>
    {`
      section {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 768px) {
        section {
          flex-direction: row;
          max-width: 1200px;
          margin: auto;
        }
      }
    `}
    </style>
  </section>
)


export const GameInfoLayout = ({ children }) => (
  <section>
    { children }
    <style jsx>
    {`
      @media (min-width: 768px) {
        section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      }
    `}
    </style>
  </section>
)