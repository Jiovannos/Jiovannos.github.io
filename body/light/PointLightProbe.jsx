import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PointLightProbe(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  useFrame((state, delta) => {
    if (props.isRotating) {
      ref.current.rotation.x += delta / 6;
      ref.current.rotation.y += delta / 6;
      ref.current.rotation.z += delta / 6;
    }
  });
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state) => {
    // if (props.rotateX) ref.current.rotation.x = props.rotateX;
    // if (props.rotateY) ref.current.rotation.y = props.rotateY;
    // if (props.rotateZ) ref.current.rotation.z = props.rotateZ;
    // console.log(ref.current.rotation.x);
    // ref.current.rotation.x = 2.5;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      //   material={texture}
    >
      <spotLight position={[0, 0, -40]} intensity={4} color={props.color} />
    </mesh>
  );
}
