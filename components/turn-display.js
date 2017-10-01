export default ({ turningPlayer }) => {

  const sign = (turningPlayer === 1) ? 'x' : 'o'

  return (
    <div>
      <span>Player&nbsp;</span><span>{ sign }</span>
      <style jsx>
      {`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: .5em 0;
          opacity: .5;
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