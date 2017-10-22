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
          max-width: 700px;
          margin: auto;
        }
      }

      @media (min-width: 1440px) {
        section {
          max-width: 800px;
        }
      }

      @media (min-width: 1920px) {
        section {
          max-width: 1200px;
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