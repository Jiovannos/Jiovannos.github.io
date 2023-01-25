import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PointLightProbe(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (props.isRotating) {
      ref.current.rotation.x += delta / 6;
      ref.current.rotation.y += delta / 6;
      ref.current.rotation.z += delta / 6;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <spotLight position={[0, 0, -40]} intensity={4} color={props.color} />
    </mesh>
  );
}
