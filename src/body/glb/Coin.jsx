import React from "react";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import rotationHelper from "./rotationHelper";

export default function Coin(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const threeState = useThree();
  const [pos, setPos] = useState({
    change: false,
    newPos: { x: 0, y: 0, z: 0 },
  });
  // If Focused is true, the object will rotate to the rot position
  const focused = props.focused ? props.focused : false;
  const zoom = props.zoom ? props.zoom : 1;

  const rot = props.focused
    ? rotationHelper[props.sides][props.rotSide]
    : { x: 0, y: 0, z: 0 };

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
    ref.current.rotation.x += delta / 2;
    ref.current.rotation.y += delta / 3;
    ref.current.rotation.z += delta / 4;

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
  const { nodes, materials } = useGLTF("/stylized_pirate_coin.glb");
  let geometry;
  let material;

  geometry = nodes.Object_2.geometry;
  material = materials.lambert1;
  geometry.center();
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.3}
      position={props.initialPosition}
      receiveShadow={true}
      castShadow={true}
      geometry={geometry}
      material={material}
    />
  );
}
