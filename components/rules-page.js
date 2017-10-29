// components
import { P, H } from './text'


export default ({ open=false, toggleRulesPage }) => (
  <article className={open ? 'open' : ''}>
    <div className="bg" />
    <section onClick={toggleRulesPage}>
      <div onClick={(e) => e.stopPropagation()}>
        <H>Rules</H>

        <P>There are nine grids. Every grid has nine fields.</P>
        <P>To win the game one player has to own three grids in a row.</P>
        <P>A grid will be owned when a row of three fields within a grid belong to the same player.</P>
        <P>If all fields of a grid are set, but no one has a row of three, no one will be owner.</P>
        <P>At the start every grid is selectable.</P>
        <P>After a field was set, only the grid connected to the field will be available for the next move.</P>
        <P>For example: In the 2nd grid, the 4th field got set by 'x'. Player 'o' can only set in grid 4 then.</P>
        <P>If the connected field has a owner or already has an owner, all fields without an owner and free fields will be available.</P>

      </div>
    </section>
    <style jsx>
    {`
      article {
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        overflow-x: hidden;
        pointer-events: none;
      }

      section div {
        margin: auto;
        max-width: 670px;
        background-color: #4e4e4e;
        padding: 15px 30px;
        position: relative;
        z-index: 10;
      }

      section {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        opacity: 0;
        transform: translateX(100%);
        transition: all 200ms 40ms ease-in-out;
      }

      div.bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.4);

        opacity: 0;
        transform: translateX(-100%);
        transition: all 200ms ease-in-out;
      }

      article.open {
        pointer-events: auto;
      }

      article.open section {
        opacity: 1;
        transform: translateX(0);
      }

      article.open div.bg {
        opacity: 1;
        transform: translateX(0);
      }
    `}
    </style>
  </article>
)
