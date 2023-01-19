import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import PentagonalSide from "../sides2d/PentagonalSide";
import { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

// function calcStep(cameraRef) {
//   let stepX =
//     (cameraRef.position.x - cameraRef.startingPosition.x) / cameraRef.factor;
//   let stepY =
//     (cameraRef.position.y - cameraRef.startingPosition.y) / cameraRef.factor;
//   let stepZ =
//     (cameraRef.position.z - cameraRef.startingPosition.z) / cameraRef.factor;
//   console.log(
//     cameraRef.position.x,
//     cameraRef.startingPosition.x,
//     cameraRef.position.y,
//     cameraRef.startingPosition.y,
//     cameraRef.position.z,
//     cameraRef.startingPosition.z,
//     cameraRef.factor,
//     "stepX, stepY, stepZ",
//     stepX,
//     stepY,
//     stepZ
//   );
//   return { stepX, stepY, stepZ };
// }
const t = (1 + Math.sqrt(5)) / 2;
const points = [
  [1, 1, 1],
  [1, 1, -1],
  [1, -1, 1],
  [1, -1, -1],
  [-1, 1, 1],
  [-1, 1, -1],
  [-1, -1, 1],
  [-1, -1, -1],
  [0, t, 1 / t],
  [0, t, -1 / t],
  [0, -t, 1 / t],
  [0, -t, -1 / t],
  [1 / t, 0, t],
  [1 / t, 0, -t],
  [-1 / t, 0, t],
  [-1 / t, 0, -t],
  [t, 1 / t, 0],
  [t, -1 / t, 0],
  [-t, 1 / t, 0],
  [-t, -1 / t, 0],
];
const pointMap = {
  a: [1, 1, 1],
  b: [1, 1, -1],
  c: [1, -1, 1],
  d: [1, -1, -1],
  e: [-1, 1, 1],
  f: [-1, 1, -1],
  g: [-1, -1, 1],
  h: [-1, -1, -1],
  i: [0, t, 1 / t],
  j: [0, t, -1 / t],
  k: [0, -t, 1 / t],
  l: [0, -t, -1 / t],
  m: [1 / t, 0, t],
  n: [1 / t, 0, -t],
  o: [-1 / t, 0, t],
  p: [-1 / t, 0, -t],
  q: [t, 1 / t, 0],
  r: [t, -1 / t, 0],
  s: [-t, 1 / t, 0],
  t: [-t, -1 / t, 0],
};
function DirecitonalLightHelper(props) {
  const light = new THREE.DirectionalLight(0xffffff);
  return <directionalLightHelper args={[light, 5]} />;
}

export default function D12(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const threeState = useThree();
  const [step, setStep] = useState({ stepX: 0, stepY: 0, stepZ: 0 });
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [cameraRefs, setCameraRefs] = useState({
    startingPosition: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 5 },
    factor: 5,
  });

  function lerp(start, target, factor) {
    start.x = start.x + (target.x - start.x) * factor;
    start.y = start.y + (target.y - start.y) * factor;
    start.z = start.z + (target.z - start.z) * factor;
    return [start.x, start.y, start.z];
  }
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  async function handleFixed() {
    if (isFixed === false) {
      setIsFixed(!isFixed);
      await delay(3000);
      setIsFixed(false);
      setIsRotating(true);
    } else {
      setIsFixed(!isFixed);
    }
  }
  useFrame((state, delta) => {
    if (isRotating) {
      ref.current.rotation.x += delta / 6;
      ref.current.rotation.y += delta / 6;
      ref.current.rotation.z += delta / 6;
      threeState.camera.lookAt(0, 15, 0);
      threeState.camera.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
      // threeState.camera.position.x += delta / 2;
      // threeState.camera.position.y += delta / 2;
      // threeState.camera.position.z += delta / 2;
    }
    // console.log(isFixed, "isFixed");
    // console.log(threeState.camera.lookAt);
    if (isFixed) {
      threeState.camera.position.lerp({ x: 0, y: 10, z: 0 }, 0.05);
      [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z] =
        lerp(ref.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0.1);
      // threeState.camera.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
      // console.log(threeState.camera);
      // threeState.camera.lookAt(0, 25, 0);
    }
  });

  return (
    <mesh
      // className={css.Box}
      {...props}
      ref={ref}
      scale={2}
      onClick={(event) => {
        setIsRotating(!isRotating);
        handleFixed();
        // cameraTransition();
        setCameraRefs({
          startingPosition: threeState.camera.position,
          position: { x: 0, y: 0, z: 15 },
          factor: 5,
        });
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      receiveShadow={true}
      castShadow={true}
    >
      {/* <DirecitonalLightHelper position={[80, 4, 4]} intensity={100} /> */}
      <spotLight position={[0, 20, 0]} intensity={8} penumbra={0.1} />
      {/* <pointLight position={[0, 15, 0]} intensity={10} color="blue" /> */}
      {/* <spotLight position={[0, 10, 0]} intensity={1} />
      <spotLight position={[5, 15, 0]} intensity={1} />
      <spotLight position={[-5, 15, 0]} intensity={1} /> */}
      <PentagonalSide
        color="beige"
        points={[
          [1, 1, 1],
          [1 / t, 0, t],
          [1, -1, -1],
          [t, -1 / t, 0],
          [t, 1 / t, 0],
        ]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.q, pointMap.r, pointMap.e, pointMap.n, pointMap.b]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.d, pointMap.k, pointMap.l, pointMap.e, pointMap.r]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.e, pointMap.l, pointMap.h, pointMap.p, pointMap.n]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.l, pointMap.h, pointMap.t, pointMap.g, pointMap.k]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.k, pointMap.d, pointMap.m, pointMap.o, pointMap.g]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.a, pointMap.i, pointMap.j, pointMap.b, pointMap.q]}
      />
      <PentagonalSide
        color="beige"
        points={[pointMap.a, pointMap.m, pointMap.o, pointMap.e, pointMap.i]}
      />{" "}
      <PentagonalSide
        color="beige"
        points={[pointMap.e, pointMap.i, pointMap.j, pointMap.f, pointMap.s]}
      />{" "}
      <PentagonalSide
        color="beige"
        points={[pointMap.b, pointMap.j, pointMap.f, pointMap.p, pointMap.n]}
      />{" "}
      <PentagonalSide
        color="beige"
        points={[pointMap.p, pointMap.f, pointMap.s, pointMap.t, pointMap.h]}
      />{" "}
      <PentagonalSide
        color="beige"
        points={[pointMap.t, pointMap.s, pointMap.e, pointMap.o, pointMap.g]}
      />
      {/* <BoxPlane position={[0, 0, 0.5]} color="blue" />
      <BoxPlane position={[0, 0, -0.5]} color="black" rotateX={Math.PI} />
      <BoxPlane
        position={[0, 0.5, 0]}
        color="white"
        rotateX={Math.PI / 2}
        rotateY={Math.PI}
      />
      <BoxPlane position={[0, -0.5, 0]} color="purple" rotateX={Math.PI / 2} />
      <BoxPlane position={[0.5, 0, 0]} color="green" rotateY={Math.PI / 2} />
      <BoxPlane
        position={[-0.5, 0, 0]}
        color="orange"
        rotateY={(Math.PI * 3) / 2}
      /> */}
    </mesh>
  );
}
