// components
import Button from './button'


export default ({ winner, rematch, undo }) => (
  <section>
    <div>
      <h2>{ winner === 1 ? 'x' : 'o' }</h2>
      <p><span className="win">won</span> the game</p>
      <div>
        <Button onClick={rematch}>Rematch</Button>&nbsp;
        <Button style={{backgroundColor: '#3c3c3c'}} onClick={undo}>Undo</Button>
      </div>
    </div>
    <style jsx>
    {`
      section {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.6);
        font-size: 1.2em;
      }

      section>div {
        background-color: #2C2C2C;
        border-radius: 3px;
        padding: 1em;
      }

      div>div {
        display: flex;
        justify-content: space-between;
        margin-top: .5em;
      }

      span.win {
        color: #5e9a5e;
      }

      h2 {
        color: rgba(255,255,255,1);
        font-size: 2em;
        margin: 0;
        text-align: center;
      }

      p {
        color: rgba(255,255,255,.5);
        text-align: center;
        margin: 0;
        font-size: 1.2em;
      }
    `}
    </style>
  </section>
)
