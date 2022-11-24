import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import Solar from "./components/SolarSystem";

function App() {
  return (
    <AppContainer>
      <div className="CanvasContainer">
        <Canvas>
          <Suspense fallback={null}>
            <Solar />
          </Suspense>
        </Canvas>

        <div className="canvas_body">
          <h4>What is Lorem Ipsum?</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <button type="button">Full screen</button>
        </div>
      </div>
      <div className="CanvasContainer">
        <Canvas>
          <Suspense fallback={null}>
            <Solar />
          </Suspense>
        </Canvas>

        <div className="canvas_body">
          <h4>Why do we use it?</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <button type="button">Full screen</button>
        </div>
      </div>
      <div className="CanvasContainer">
        <Canvas>
          <Suspense fallback={null}>
            <Solar />
          </Suspense>
        </Canvas>

        <div className="canvas_body">
          <h4>Where can I get some?</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>

          <button type="button">Full screen</button>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  .CanvasContainer {
    width: 100%;
    height: 100vh;
    background: #00030f;
    border-bottom: thin solid #fff3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    scroll-snap-align: start;
    user-select: none;
    -webkit-user-drag: none;

    &:last-child {
      height: 100vh;
      border-bottom: none;
    }

    .canvas_body {
      color: #cdcdcd;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 1rem 4rem 1rem 1rem;

      h4,
      p {
        margin-bottom: 1rem;
        font-size: 1.75em;
      }

      p {
        font-size: 1.25em;
      }

      button {
        border: thin solid #cdcdcd;
        color: #cdcdcd;
        box-shadow: 0 0 0 0 #cdcdcd7f;
        background: none;
        padding: 0.5rem 1.5rem;
        font-size: 1.25em;
        border-radius: 0.25rem;
        transition: 150ms linear;

        &:hover {
          box-shadow: 0 0 2px 1px #cdcdcd;
        }
      }

      @media (max-width: 1023px) {
        padding: 1rem 2rem 1rem 1rem;
      }

      @media (max-width: 767px) {
        padding: 1rem;

        p {
          -webkit-line-clamp: 3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-size: 1em;
        }
      }
    }

    @media (max-width: 767px) {
      align-items: flex-start;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }
  }
`;
