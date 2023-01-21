import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function Background(props) {
  const ref = useRef();
  const texture = useLoader(TextureLoader, "/pexels-david-selbert-6468238.jpg");
  texture.repeat.set(1, 1);

  return (
    <mesh {...props} position={[0, 0, -50]} ref={ref}>
      <planeGeometry args={[70, 70]} />
      <meshStandardMaterial
        color="rgb(70, 64, 60)"
        map={texture}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
}
