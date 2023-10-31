import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function Background(props) {
  const ref = useRef();
  const texture = useLoader(TextureLoader, "/back_3.png");
  texture.repeat.set(1, 1);

  return (
    <mesh {...props} position={[0, 0, -90]} ref={ref}>
      <planeGeometry args={[70, 70]} />
      <meshStandardMaterial
        color="rgb(80, 80, 80)"
        map={texture}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
}
