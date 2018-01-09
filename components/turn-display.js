export default ({ wins, turningPlayer }) => {

  const sign = (turningPlayer === 1) ? 'x' : 'o'

  return (
    <div className="game-status">
      <p><span>x &#x1f451;&nbsp;</span><span>{ wins.p1 }</span></p>
      <p><span>Player&nbsp;</span><span>{ sign }</span></p>
      <p><span>o &#x1f451;&nbsp;</span><span>{ wins.p2 }</span></p>

      <style jsx>
      {`
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: .5em;
          opacity: .5;
        }

        @media (min-width: 768px) {
          div {
            order: 1;
            height: 100%;
          }
        }

        p {
          display: inline-block;
        }

        span:first-child {
          color: rgba(255,255,255,.5);
          font-size: .75em;
          display: inline-block;
        }

        span:last-child {
          color: rgba(255,255,255,1);
          font-size: 1em;
          display: inline-block;
        }
      `}
      </style>
    </div>
  )
}