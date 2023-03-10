import React from "react";
// import css from "./styles.module.css";
import TriangleSide from "../sides2d/TriangleSide";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three-stdlib";
import { useGLTF } from "@react-three/drei";

export default function DiceGlb(props) {
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
  const { nodes, materials } = useGLTF("dices.glb");
  let geometry;
  let material;
  const sidesToGlb = {
    4: {
      geometry: nodes.Object_4.geometry,
      material: materials.StingrayPBS17SG,
    },
    6: {
      geometry: nodes.Object_3.geometry,
      material: materials.StingrayPBS16SG,
    },
    8: {
      geometry: nodes.Object_5.geometry,
      material: materials.StingrayPBS18SG,
    },
    10: {
      geometry: nodes.Object_6.geometry,
      material: materials.StingrayPBS19SG,
    },
    12: {
      geometry: nodes.Object_2.geometry,
      material: materials.StingrayPBS15SG,
    },
    20: {
      geometry: nodes.Object_7.geometry,
      material: materials.StingrayPBS14SG,
    },
  };
  geometry = sidesToGlb[props.sides].geometry;
  material = sidesToGlb[props.sides].material;
  geometry.center();
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.015}
      position={props.initialPosition}
      receiveShadow={true}
      castShadow={true}
      geometry={geometry}
      material={material}
    />
  );
}
