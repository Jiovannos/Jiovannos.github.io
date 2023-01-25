import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import rotationHelper from "./rotationHelper";
import * as THREE from "three";

export default function DiceGlb(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const threeState = useThree();
  const [pos, setPos] = useState({
    change: false,
    newPos: { x: 0, y: 0, z: 0 },
  });

  // If Focused is true, the object will rotate to the rot position
  const focused = props.focused ? props.focused : false;
  if (props.focused) {
    console.log(
      props.rotSide,
      props.sides,
      rotationHelper[props.sides][props.rotSide]
    );
  }

  const rot = props.focused
    ? rotationHelper[props.sides][props.rotSide]
    : { x: 0, y: 0, z: 0 };
  const zoom = props.zoom ? props.zoom : 1;
  // A function to make a smoother linear interpolation of a position or rotation
  function lerp(start, target, factor) {
    start.x = start.x + (target.x - start.x) * factor;
    start.y = start.y + (target.y - start.y) * factor;
    start.z = start.z + (target.z - start.z) * factor;
    return [start.x, start.y, start.z];
  }
  useEffect(() => {
    setPos({ change: true, newPos: props.newPosition });
  }, [props.newPosition]);

  // This writes the component into the scene's render loop
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
  // Loads the model from the .glb file
  const { nodes, materials } = useGLTF("/dice.glb");
  let geometry;
  let material;
  // Chooses the geometry and material from the .glb model based on the number of sides
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
  let Axes = new THREE.AxesHelper(1);
  Axes.position.set(0, 0, -25);
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
