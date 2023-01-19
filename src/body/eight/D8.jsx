import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const t = 1.4142135623730951;

function DirecitonalLightHelper(props) {
  const light = new THREE.DirectionalLight(0xffffff);
  return <directionalLightHelper args={[light, 5]} />;
}

export default function D8(props) {
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
    ref.current.rotation.x += delta / 6;
    ref.current.rotation.y += delta / 6;
    ref.current.rotation.z += delta / 6;
    if (ref.current.rotation.x > 6.28) {
      ref.current.rotation.x = 0;
    }
    if (ref.current.rotation.y > 6.28) {
      ref.current.rotation.y = 0;
    }
    if (ref.current.rotation.z > 6.28) {
      ref.current.rotation.z = 0;
    }

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
        color="aquamarine"
        texture={texture}
        points={[
          [1, 1, 0],
          [1, -1, 0],
          [0, 0, t],
        ]}
      />
      <TriangleSide
        color="beige"
        texture={texture}
        points={[
          [1, -1, 0],
          [-1, -1, 0],
          [0, 0, t],
        ]}
      />
      <TriangleSide
        color="black"
        texture={texture}
        points={[
          [-1, -1, 0],
          [-1, 1, 0],
          [0, 0, t],
        ]}
      />
      <TriangleSide
        color="blue"
        texture={texture}
        points={[
          [-1, 1, 0],
          [1, 1, 0],
          [0, 0, t],
        ]}
      />
      <TriangleSide
        color="blueviolet"
        texture={texture}
        points={[
          [1, 1, 0],
          [1, -1, 0],
          [0, 0, -t],
        ]}
      />
      <TriangleSide
        color="brown"
        texture={texture}
        points={[
          [1, -1, 0],
          [-1, -1, 0],
          [0, 0, -t],
        ]}
      />
      <TriangleSide
        color="chartreuse"
        texture={texture}
        points={[
          [-1, -1, 0],
          [-1, 1, 0],
          [0, 0, -t],
        ]}
      />
      <TriangleSide
        color="gray"
        texture={texture}
        points={[
          [-1, 1, 0],
          [1, 1, 0],
          [0, 0, -t],
        ]}
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
