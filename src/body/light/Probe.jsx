import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Probe(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  useFrame((state, delta) => {
    if (props.isRotating) {
      ref.current.rotation.x += delta / 6;
      ref.current.rotation.y += delta / 6;
      ref.current.rotation.z += delta / 6;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      //   material={texture}
    >
      <pointLight position={[-5, 5, -5]} intensity={1} color={props.color} />
    </mesh>
  );
}
