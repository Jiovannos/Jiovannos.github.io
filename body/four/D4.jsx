import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const t = 1 / Math.sqrt(3);

export default function D4(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const threeState = useThree();
  const [pos, setPos] = useState({
    change: false,
    newPos: { x: 0, y: 0, z: 0 },
  });

  const focused = props.focused ? props.focused : false;
  const rot = props.rot ? props.rot : { x: 0, y: 0, z: 0 };
  const zoom = props.zoom ? props.zoom : 1;

  function lerp(start, target, factor) {
    start.x = start.x + (target.x - start.x) * factor;
    start.y = start.y + (target.y - start.y) * factor;
    start.z = start.z + (target.z - start.z) * factor;
    return [start.x, start.y, start.z];
  }

  useEffect(() => {
    setPos({ change: true, newPos: props.newPosition });
  }, [props.newPosition]);

  useFrame((state, delta) => {
    if (ref.current.rotation.x > 6.28) {
      ref.current.rotation.x = 0;
    }
    if (ref.current.rotation.y > 6.28) {
      ref.current.rotation.y = 0;
    }
    if (ref.current.rotation.z > 6.28) {
      ref.current.rotation.z = 0;
    }
    ref.current.rotation.x += delta / 6;
    ref.current.rotation.y += delta / 6;
    ref.current.rotation.z += delta / 6;

    threeState.camera.zoom = zoom;
    if (pos.change) {
      [ref.current.position.x, ref.current.position.y, ref.current.position.z] =
        lerp(ref.current.position, pos.newPos, 0.02);
    }

    if (focused) {
      [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z] =
        lerp(ref.current.rotation, rot, 0.1);
    }
  });
  const texture = useLoader(TextureLoader, "pexels-milo-textures-2850515.jpg");
  // let crossProduct = (a, b) => {
  //   return [
  //     a[1] * b[2] - a[2] * b[1],
  //     a[2] * b[0] - a[0] * b[2],
  //     a[0] * b[1] - a[1] * b[0],
  //   ];
  // };
  // let dotProduct = (a, b) => {
  //   return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  // };
  // let a = [1, -t, -t];
  // let b = [0, 2 * t, -t];
  // let c = [0, 0, 2 * t];
  // let ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  // let bc = [c[0] - b[0], c[1] - b[1], c[2] - b[2]];

  // let xaxis = [1, 0, 0];
  // let yaxis = [0, 1, 0];
  // let zaxis = [0, 0, 1];
  // let crossP = crossProduct(ab, bc);
  // let angleX = Math.acos(
  //   (dotProduct(crossP, xaxis) /
  //     Math.sqrt(crossP[0] ** 2 + crossP[1] ** 2 + crossP[2] ** 2)) *
  //     Math.sqrt(xaxis[0] ** 2 + xaxis[1] ** 2 + xaxis[2] ** 2)
  // );
  // let angleY = Math.acos(
  //   (dotProduct(crossP, yaxis) /
  //     Math.sqrt(crossP[0] ** 2 + crossP[1] ** 2 + crossP[2] ** 2)) *
  //     Math.sqrt(yaxis[0] ** 2 + yaxis[1] ** 2 + yaxis[2] ** 2)
  // );
  // let angleZ = Math.acos(
  //   (dotProduct(crossP, zaxis) /
  //     Math.sqrt(crossP[0] ** 2 + crossP[1] ** 2 + crossP[2] ** 2)) *
  //     Math.sqrt(zaxis[0] ** 2 + zaxis[1] ** 2 + zaxis[2] ** 2)
  // );
  // console.log("crossP", crossP, angleX, angleY, angleZ);

  return (
    <mesh
      // className={css.Box}
      {...props}
      ref={ref}
      scale={1}
      position={props.initialPosition}
      receiveShadow={true}
      castShadow={true}
    >
      <TriangleSide
        color="red"
        texture={texture}
        points={[
          [1, -t, -t],
          [0, 2 * t, -t],
          [-1, -t, -t],
        ]}
      />
      <TriangleSide
        color="green"
        texture={texture}
        points={[
          [1, -t, -t],
          [0, 2 * t, -t],
          [0, 0, 2 * t],
        ]}
      />
      <TriangleSide
        color="white"
        texture={texture}
        points={[
          [0, 2 * t, -t],
          [-1, -t, -t],
          [0, 0, 2 * t],
        ]}
      />
      <TriangleSide
        color="blue"
        texture={texture}
        points={[
          [1, -t, -t],
          [-1, -t, -t],
          [0, 0, 2 * t],
        ]}
      />
    </mesh>
  );
}
