import React from "react";
import css from "./styles.module.css";
import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { DoubleSide } from "three";

export default function BoxPlane(props) {
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
    // ref.current.scale = scale;
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => {
        if (event.faceIndex === 0) {
          console.log("I clicked the", props.color);
          console.log(event);
          console.log(ref);
          setScale({ x: 2, y: 2, z: 2 });
        }
      }}
      //   scale={clicked ? 1.5 : 1}

      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
      rotateZ={props.rotateZ}
    >
      <planeGeometry />
      <meshBasicMaterial
        className={css.plane}
        color={props.color}
        // side={DoubleSide}
        //   opacity={props.opacity}
        //   transparent
        visible={props.visible}
        //   map={texture}
      />
    </mesh>
  );
}
