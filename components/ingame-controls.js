// components
import Button from './button'


export default ({ resetGame, resetScores, undo }) => {
  return (
    <section className="game-controls">
      <Button onClick={() => resetGame()}>Reset</Button>
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
            justify-content: center;
          }

          section :global(button) {
            margin: 0 4px;
          }
        }
      `}
      </style>
    </section>
  )
}