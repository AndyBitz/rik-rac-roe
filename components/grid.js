export default () => (
  <section>
    <svg viewBox="-10 -10 170 170" height="250" width="250">
      { /* Vertical */ }
      <line x1="50" y1="0" x2="50" y2="150" className="grid-lines" />
      <line x1="100" y1="0" x2="100" y2="150" className="grid-lines" />

      { /* Horizontal */ }
      <line x1="0" y1="50" x2="150" y2="50" className="grid-lines" />
      <line x1="0" y1="100" x2="150" y2="100" className="grid-lines" />

      { /* Fields */ }
      <rect width="40" height="40" x="5" y="5" className="grid-rect" />
      <rect width="40" height="40" x="55" y="5" className="grid-rect" />
      <rect width="40" height="40" x="105" y="5" className="grid-rect" />

      <rect width="40" height="40" x="5" y="55" className="grid-rect" />
      <rect width="40" height="40" x="55" y="55" className="grid-rect" />
      <rect width="40" height="40" x="105" y="55" className="grid-rect" />

      <rect width="40" height="40" x="5" y="105" className="grid-rect" />
      <rect width="40" height="40" x="55" y="105" className="grid-rect" />
      <rect width="40" height="40" x="105" y="105" className="grid-rect" />

      { /* Content */ }
      <g transform="translate(15, 15)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(65, 15)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(115, 15)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>

      <g transform="translate(15, 65)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(65, 65)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(115, 65)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>

      <g transform="translate(15, 115)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(65, 115)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
      <g transform="translate(115, 115)">
        <line x1="0" y1="0" x2="20" y2="20" stroke="#000000" />
        <line x1="0" y1="20" x2="20" y2="0" stroke="#000000" />
      </g>
    </svg>

    <style jsx>
    {`
      .grid-lines {
        stroke: #000000;
        stroke-width: 3;
        stroke-linecap: round;
      }

      .grid-rect {
        fill: hotpink;
        cursor: pointer;
      }
      .grid-rect:hover {
        fill: grey;
      }
    `}
    </style>
  </section>
)
