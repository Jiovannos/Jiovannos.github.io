import React from "react";
import css from "./styles.module.css";
import BoxPlane from "./BoxPlane";
import { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

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

export default function Box(props) {
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
  // useFrame((state, delta) => {
  //   if (isRotating) {
  //     ref.current.rotation.x += delta / 2;
  //     ref.current.rotation.y += delta / 2;
  //     ref.current.rotation.z += delta / 2;
  //     threeState.camera.position.x += delta / 2;
  //     threeState.camera.position.y += delta / 2;
  //     threeState.camera.position.z += delta / 2;
  //   }
  //   // console.log(isFixed, "isFixed");
  //   if (isFixed) {
  //     threeState.camera.position.lerp({ x: 0, y: 0, z: 7 }, 0.05);
  //     [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z] =
  //       lerp(ref.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0.1);
  //     threeState.camera.position.lerp({ x: 0, y: 0, z: 1 }, 0.05);
  //   } else {
  //     threeState.camera.position.lerp({ x: 0, y: 0, z: 10 }, 0.05);
  //   }
  // });

  return (
    <mesh
      className={css.Box}
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
    >
      <BoxPlane position={[0, 0, 0.5]} color="blue" />
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
      />
    </mesh>
  );
}
