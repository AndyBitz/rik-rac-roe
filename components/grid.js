const RenderGroups = ({avail, fields}) => {
  return fields.map((item, index) => {
    const row = (index > 5) ? 2 : (index > 2) ? 1 : 0
    const col = index - row*3

    let x = col*50 + 5
    let y = row*50 + 5

    let content = null

    if (item.owner === 1) {
      // player one
      content = <text transform="translate(15, 25)">x</text>
    } else if (item.owner === 2) {
      // player two
      content = <text transform="translate(15, 25)">o</text>
    }

    const handler = avail
      ? () => { item.set() }
      : null

    return (
      <g key={index} transform={`translate(${x}, ${y})`} onClick={handler}>
        <rect width="40" height="40" x="0" y="0" className={avail ? '' : 'rect-disabled'} />
        { content }
        <style jsx>
        {`
          :global(text) {
            fill: white;
          }

          rect {
            fill: rgba(0,0,0,0);
            cursor: pointer;
          }

          .rect-disabled {
            cursor: default;
          }
        `}
        </style>
      </g>
    )
  })
}

export default ({ fields, owner, avail }) => {

  // show owner of field if there is one
  if (owner) {
    return (
      <section>
        <svg viewBox="0 0 100 100" height="100%" width="100%">
          <text transform="translate(50, 50)">{ owner === 1 ? 'x' : 'o' }</text>
        </svg>
      </section>
    )
  }

  // render field
  return (
    <section className={avail ? '' : 'disabled'}>
      <svg viewBox="-10 -10 170 170" height="100%" width="100%">
        { /* Vertical */ }
        <line x1="50" y1="0" x2="50" y2="150" className="grid-lines" />
        <line x1="100" y1="0" x2="100" y2="150" className="grid-lines" />

        { /* Horizontal */ }
        <line x1="0" y1="50" x2="150" y2="50" className="grid-lines" />
        <line x1="0" y1="100" x2="150" y2="100" className="grid-lines" />

        { /* Content */ }
        <RenderGroups
          avail={avail}
          fields={fields}
        />
      </svg>

      <style jsx>
      {`
        section {
          transition: all 200ms ease-out;
        }
        section.disabled {
          opacity: .6;
          transform: scale(.8);
        }
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
}