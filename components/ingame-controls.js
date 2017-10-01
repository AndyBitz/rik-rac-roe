// components
import Button from './button'


export default ({ resetGame, undo }) => {
  return (
    <section>
      <Button onClick={() => resetGame()}>Reset</Button>
      <Button onClick={() => undo()}>Undo</Button>
      <style jsx>
      {`
        section {
          padding: 0 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}
      </style>
    </section>
  )
}