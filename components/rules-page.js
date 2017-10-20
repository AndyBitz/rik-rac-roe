// components
import { P, H } from './text'


export default () => (
  <article>
    <div>
      <H>Rules</H>

      <P><strong>1. Three wins</strong></P>
      <P>Three wins</P>

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
