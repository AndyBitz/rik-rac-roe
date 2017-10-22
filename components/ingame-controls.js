// components
import Button from './button'


export default ({ resetGame, resetScores, undo }) => {
  return (
    <section className="game-controls">
      <Button onClick={() => resetGame()}>Reset Game</Button>
      <Button onClick={() => resetScores()}>Reset Scores</Button>
      <Button onClick={() => undo()}>Undo</Button>
      <style jsx>
      {`
        section {
          padding: 0 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          section {
            order: 2;
            height: 100%;
            justify-content: flex-start;
          }

          section :global(button) {
            margin: 0 4px;
            margin-bottom: .5em;
          }

          section :global(button:nth-child(1)) {
            order: 2;
          }

          section :global(button:nth-child(2)) {
            order: 3;
          }

          section :global(button:nth-child(3)) {
            order: 1;
          }
        }
      `}
      </style>
    </section>
  )
}