import React, { Suspense, lazy } from "react";
import css from "./styles.module.css";
import DiceGlb from "./glb/DiceGlb";
import Probe from "./light/Probe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useSelector } from "react-redux";
import Background from "./background/Background";
import PointLightProbe from "./light/PointLightProbe";
import Coin from "./glb/Coin";

export default function Scene() {
  const spaceState = useSelector((state) => state.space);
  const contentsState = spaceState.contents;
  const projectsState = spaceState.projects;
  const stacksState = spaceState.stacks;
  const aboutState = spaceState.about;
  return (
    <Canvas className={css.Canvas}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <PerspectiveCamera makeDefault position={[0, 0, 0]} fov="20" />
        {/* <DiceGlb
          name="stacksDie"
          sides={8}
          newPosition={stacksState.dicePosition}
          initialPosition={[-15, 0, 0]}
          rotSide={stacksState.rotation}
          focused={stacksState.focus}
          zoom={stacksState.zoom}
        /> */}
        {/* <DiceGlb
          name="contentsDie"
          sides={4}
          newPosition={contentsState.dicePosition}
          initialPosition={[0, 0, -25]}
          rotSide={contentsState.rotation}
          focused={contentsState.focus}
          zoom={contentsState.zoom}
        /> */}
        <DiceGlb
          sides={12}
          name="projectsDie"
          newPosition={projectsState.dicePosition}
          initialPosition={[15, 0, 0]}
          rotSide={projectsState.rotation}
          focused={projectsState.focus}
          zoom={projectsState.zoom}
        />
        <Coin
          name="aboutDie"
          // sides={12}
          newPosition={aboutState.dicePosition}
          initialPosition={[-15, 0, 0]}
          rotSide={aboutState.rotation}
          focused={aboutState.focus}
          zoom={aboutState.zoom}
        />
        <Probe color="white" />
        <PointLightProbe color="white" isRotating />
        <Background />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
