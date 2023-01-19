import React from "react";
import css from "./styles.module.css";
import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  DoubleSide,
  BufferGeometry,
  Float32BufferAttribute,
  PropertyBinding,
  PlaneGeometry,
  BoxGeometry,
} from "three";
import * as THREE from "three";

export default function TriangleSide(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  //   const texture = useLoader(TextureLoader, "/images/wood.png");
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [scale, setScale] = useState({ x: 1, y: 1, z: 1 });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state) => {
    if (props.rotateX) ref.current.rotation.x = props.rotateX;
    if (props.rotateY) ref.current.rotation.y = props.rotateY;
    if (props.rotateZ) ref.current.rotation.z = props.rotateZ;
  });

  let points = props.points;

  const flatten = (arr) =>
    arr.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
      []
    );
  const geometry = new BoxGeometry().setFromPoints(points);
  geometry.setAttribute(
    "position",
    new Float32BufferAttribute(flatten(points), 3)
  );
  geometry.computeBoundingSphere();
  const texture = useLoader(TextureLoader, "../../../p3591557.jpg");
  texture.repeat.set(0.5, 0.5);

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      // material={texture}
      onClick={(event) => {
        if (event.faceIndex === 0) {
          console.log("I clicked the", props.color);
          console.log(event);
          console.log(ref);
          //   setScale({ x: 2, y: 2, z: 2 });
        }
        click(!clicked);
      }}
      // scale={hovered ? 1.3 : 1}
      receiveShadow={false}
      castShadow={false}
      geometry={geometry}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
      rotateZ={props.rotateZ}
    >
      <meshStandardMaterial
        // wireframe
        color={props.color}
        // color={"red"}
        fog
        side={DoubleSide}
        map={props.texture}
        roughness={0.8}
        metalness={0.6}
        // bumpMap={texture}
        // bumpScale={0.1}
      />
    </mesh>
  );
}
