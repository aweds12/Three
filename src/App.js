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
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  display: table;

  .CanvasContainer {
    width: 100%;
    height: 100%;
    /* aspect-ratio: 16 / 9; */
    background: #00030f;
  }
`;
