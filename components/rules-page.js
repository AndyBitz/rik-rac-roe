// components
import { P, H } from './text'


export default () => (
  <article>
    <div>
      <H>Rules</H>

      <P>There are nine grids. Every grid has nine fields.</P>
      <P>To win the game one player has to own three grids in a row.</P>
      <P>A grid will be owned when a row of three fields within a grid belong to a player.</P>
      <P>If all fields of a grid are set, but no one has a row of three, no one will be owner.</P>
      <P>At the start every grid is selectable.</P>
      <P>After a field was set, only the grid connected to the field will be available for the next move.</P>
      <P>For example: In the 2nd grid, the 4th field got set by 'x'. Player 'o' can only set in grid 4 then.</P>
      <P>If th connected field has a owner or already has an owner, all fields without an owner and free fields will be available.</P>

    </div>
    <style jsx>
    {`
      article {
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        z-index: 10;
      }

      div {
        margin: auto;
        max-width: 670px;
        background-color: #4e4e4e;
        padding: 15px 30px;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.2);
        transform-origin: top center;
        animation: open 200ms forwards ease-out;
      }

      @keyframes open {
        from {
          transform: scaleY(0);
        }
        to {
          transform: scaleY(1);
        }
      }
    `}
    </style>
  </article>
)
