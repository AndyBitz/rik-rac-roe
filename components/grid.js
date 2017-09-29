const RenderGroups = (item, index) => {

  const row = (index > 5) ? 2 : (index > 2) ? 1 : 0
  const col = index - row*3

  let x = col*50 + 5
  let y = row*50 + 5

  return (
    <g key={index} transform={`translate(${x}, ${y})`} onClick={() => { item.set() }}>
      <rect width="40" height="40" x="0" y="0" className="grid-rect" />
      <style jsx>
      {`
        rect {
          fill: rgba(0,0,0,.3);
          cursor: pointer;
        }
      `}
      </style>
    </g>
  )
}

export default ({ fields }) => (
  <section>
    <svg viewBox="-10 -10 170 170" height="100%" width="100%">
      { /* Vertical */ }
      <line x1="50" y1="0" x2="50" y2="150" className="grid-lines" />
      <line x1="100" y1="0" x2="100" y2="150" className="grid-lines" />

      { /* Horizontal */ }
      <line x1="0" y1="50" x2="150" y2="50" className="grid-lines" />
      <line x1="0" y1="100" x2="150" y2="100" className="grid-lines" />

      { /* Content */ }
      { fields.map(RenderGroups) }
    </svg>

    <style jsx>
    {`
      .grid-lines {
        stroke: #ffffff;
        stroke-width: 3;
        stroke-linecap: round;
      }

      g line {
        stroke: #ffffff;
      }
    `}
    </style>
  </section>
)
