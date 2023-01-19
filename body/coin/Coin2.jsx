import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { NoToneMapping } from "three";

const t = 1 / Math.sqrt(3);

export default function Coin(props) {
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
    ref.current.rotation.x += delta / 2;
    // ref.current.rotation.y += delta / 2;
    // ref.current.rotation.z += delta / 2;
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
  texture.repeat.set(0.5, 0.5);
  texture.offset.set(0.1, 0.2);
  const geometry = new THREE.CylinderGeometry(1, 1, 0.2);
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    color: "gold",
    metalness: 0.5,
    roughness: 0.5,
    // bumpMap: texture,
    // bumpScale: 0.5,
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      position={props.initialPosition}
      receiveShadow={true}
      castShadow={true}
      geometry={geometry}
      material={material}
    ></mesh>
  );
}
