import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function SkyBackground(props) {
  const ref = useRef();
  const texture = useLoader(TextureLoader, "pexels-chait-goli-2666598.jpg");
  texture.repeat.set(1, 1);

  return (
    <mesh {...props} position={[0, 0, -50]} ref={ref}>
      <pointLight position={[2, 0, -25]} intensity={0.5} />
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="rgb(40, 34, 30)" map={texture} />
    </mesh>
  );
}
