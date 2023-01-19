import React from "react";
// import css from "./styles.module.css";
// import TriangleSide from "./TriangleSide";
import { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const t = (1 + Math.sqrt(5)) / 2;
const points = [
  [-1, 0, 0],
  [1, t, 0],
  [-1, -t, 0],
  [1, -t, 0],
  [0, -1, t],
  [0, 1, t],
  [0, -1, -t],
  [0, 1, -t],
  [t, 0, -1],
  [t, 0, 1],
  [-t, 0, -1],
  [-t, 0, 1],
];

export default function D20Solid(props) {
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
      ref.current.rotation.x += delta / 2;
      ref.current.rotation.y += delta / 2;
      ref.current.rotation.z += delta / 2;
    }
    // console.log(isFixed, "isFixed");
    if (isFixed) {
      [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z] =
        lerp(ref.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0.1);
    }
  });
  const geometry = new THREE.IcosahedronGeometry(t, 0);
  const texture = useLoader(
    TextureLoader,
    "../../../dice_20/textures/LowPoli_baseColor.jpeg"
  );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.center = new THREE.Vector2(0.2, 0.2);
  texture.repeat.set(1, 1);

  // texture.rotation = Math.PI / 2;

  return (
    <mesh
      // className={css.Box}
      {...props}
      ref={ref}
      scale={3}
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
      geometry={geometry}
    >
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
