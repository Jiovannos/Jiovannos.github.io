import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import TetragonalSide from "../sides2d/TetragonalSide";
import { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

function rotatePoint(point, angle) {
  let cos = Math.cos(angle);
  let sin = Math.sin(angle);
  let x = point[0];
  let y = point[1];
  let z = point[2];
  return [x * cos - y * sin, x * sin + y * cos, z];
}
const pi = Math.PI;
const [c1, c2, s1, s2] = [
  Math.cos((2 * pi) / 5),
  Math.cos(pi / 5),
  Math.sin((2 * pi) / 5),
  Math.sin(pi / 5),
];
const t = 0.2;

const pointMap = {
  a: [0, 1, -t],
  b: [s1, c1, -t],
  c: [s2, -c2, -t],
  d: [-s2, -c2, -t],
  e: [-s1, c1, -t],
  f: rotatePoint([0, 1, t], -(2 * pi) / 5),
  g: rotatePoint([s1, c1, t], -(2 * pi) / 5),
  h: rotatePoint([s2, -c2, t], -(2 * pi) / 5),
  i: rotatePoint([-s2, -c2, t], -(2 * pi) / 5),
  j: rotatePoint([-s1, c1, t], -(2 * pi) / 5),
  k: [0, 0, 1],
  l: [0, 0, -1],
};
function DirecitonalLightHelper(props) {
  const light = new THREE.DirectionalLight(0xffffff);
  return <directionalLightHelper args={[light, 5]} />;
}

export default function D10(props) {
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
    // if (isRotating) {
    //   ref.current.rotation.x += delta / 6;
    //   ref.current.rotation.y += delta / 6;
    //   ref.current.rotation.z += delta / 6;
    //   threeState.camera.lookAt(0, 15, 0);
    //   threeState.camera.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
    //   // threeState.camera.position.x += delta / 2;
    //   // threeState.camera.position.y += delta / 2;
    //   // threeState.camera.position.z += delta / 2;
    // }
    // console.log(isFixed, "isFixed");
    // console.log(threeState.camera.lookAt);
    threeState.camera.lookAt(0, 15, 0);
    threeState.camera.zoom = 3;
    if (isFixed) {
      threeState.camera.position.lerp({ x: 0, y: 10, z: 0 }, 0.05);
      [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z] =
        lerp(ref.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0.1);
      // threeState.camera.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
      // console.log(threeState.camera);
      // threeState.camera.lookAt(0, 25, 0);
    }
  });
  const pointMap = {
    a: [0, 1, -t],
    b: [s1, c1, -t],
    c: [s2, -c2, -t],
    d: [-s2, -c2, -t],
    e: [-s1, c1, -t],
    f: rotatePoint([0, 1, t], (2 * pi) / 5),
    g: rotatePoint([s1, c1, t], (2 * pi) / 5),
    h: rotatePoint([s2, -c2, t], (2 * pi) / 5),
    i: rotatePoint([-s2, -c2, t], (2 * pi) / 5),
    j: rotatePoint([-s1, c1, t], (2 * pi) / 5),
    k: [0, 0, -t - 1],
    l: [0, 0, t + 1],
  };
  threeState.camera.lookAt(0, 15, 0);
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
      <TetragonalSide
        color="beige"
        points={[pointMap.a, pointMap.f, pointMap.b, pointMap.k]}
      />
      {/* <TetragonalSide
        color="red"
        points={[pointMap.b, pointMap.g, pointMap.c, pointMap.k]}
      /> */}
      {/* <TetragonalSide
        color="beige"
        points={[pointMap.c, pointMap.h, pointMap.d, pointMap.k]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.d, pointMap.i, pointMap.e, pointMap.k]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.e, pointMap.j, pointMap.a, pointMap.k]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.f, pointMap.b, pointMap.g, pointMap.l]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.g, pointMap.c, pointMap.h, pointMap.l]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.h, pointMap.d, pointMap.i, pointMap.l]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.i, pointMap.e, pointMap.j, pointMap.l]}
      />
      <TetragonalSide
        color="beige"
        points={[pointMap.j, pointMap.a, pointMap.f, pointMap.l]}
      /> */}
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
