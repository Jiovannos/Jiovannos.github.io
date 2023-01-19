import React from "react";
import css from "./styles.module.css";

import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

export default function aboutCard(props) {
  return (
    <div>
      <h1 className={css.title}>Portfolio Project</h1>
      <div className={css.content}>
        <p className={css.shortDescription}>
          FrontEnd Web Application - React and Three.js.
        </p>
        <p className={css.description}>
          This is a portfolio project to showcase all the projects I have made.
          The idea was inspired from the classic Pen n Paper RPGs where the dice
          represent the random factor that contributes to a given result when
          added to your abilities.
        </p>
        <p className={css.section}>
          <div className={css.lowerTitle}>Challenges:</div>
          <div>
            This was the first time dealing with 3d animation. As dice were
            created as a group of faces, for utility reasons, calculating
            geometry plus nessecary rotations were a bit tricky.
          </div>
        </p>
        <p>
          <div className={css.lowerTitle}>Sample Code:</div>
          <div className={css.code}>
            <CopyBlock
              className={css.code}
              text={`import React from "react";
import TriangleSide from "../sides2d/TriangleSide";
import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const t = (1 + Math.sqrt(5)) / 2;

export default function D20(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const threeState = useThree();
  const [pos, setPos] = useState({
    change: false,
    newPos: { x: 0, y: 0, z: 0 },
  });

  const focused = props.focused ? props.focused : false;
  const rot = props.rot ? props.rot : { x: 0, y: 0, z: 0 };
  const zoom = props.zoom ? props.zoom : 1;

  function lerp(start, target, factor) {
    start.x = start.x + (target.x - start.x) * factor;
    start.y = start.y + (target.y - start.y) * factor;
    start.z = start.z + (target.z - start.z) * factor;
    return [start.x, start.y, start.z];
  }

  useEffect(() => {
    setPos({ change: true, newPos: props.newPosition });
  }, [props.newPosition]);

  useFrame((state, delta) => {
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

  const texture = useLoader(
    TextureLoader,
    "../../../pexels-mitchell-luo-3707669.jpg"
  );

  return (
    <mesh
      // className={css.Box}
      {...props}
      ref={ref}
      scale={2}
      position={props.initialPosition}
      receiveShadow={true}
      castShadow={true}
    >
      <TriangleSide
        color="aquamarine"
        texture={texture}
        points={[
          [1, t, 0],
          [0, 1, t],
          [-1, t, 0],
        ]}
      />
      <TriangleSide
        color="beige"
        texture={texture}
        points={[
          [0, 1, t],
          [-1, t, 0],
          [-t, 0, 1],
        ]}
      />
      <TriangleSide
        color="black"
        texture={texture}
        points={[
          [0, 1, t],
          [1, t, 0],
          [t, 0, 1],
        ]}
      />
      <TriangleSide
        color="blue"
        texture={texture}
        points={[
          [0, 1, t],
          [0, -1, t],
          [t, 0, 1],
        ]}
      />
      <TriangleSide
        color="blueviolet"
        texture={texture}
        points={[
          [0, 1, t],
          [0, -1, t],
          [-t, 0, 1],
        ]}
      />
      <TriangleSide
        color="brown"
        texture={texture}
        points={[
          [-1, -t, 0],
          [0, -1, t],
          [-t, 0, 1],
        ]}
      />
      <TriangleSide
        color="chartreuse"
        texture={texture}
        points={[
          [-1, -t, 0],
          [0, -1, t],
          [1, -t, 0],
        ]}
      />
      <TriangleSide
        color="gray"
        texture={texture}
        points={[
          [1, -t, 0],
          [0, -1, t],
          [t, 0, 1],
        ]}
      />
      <TriangleSide
        color="darkblue"
        texture={texture}
        points={[
          [1, t, 0],
          [0, 1, -t],
          [-1, t, 0],
        ]}
      />
      <TriangleSide
        color="darkred"
        texture={texture}
        points={[
          [0, 1, -t],
          [-1, t, 0],
          [-t, 0, -1],
        ]}
      />
      <TriangleSide
        color="pink"
        texture={texture}
        points={[
          [0, 1, -t],
          [1, t, 0],
          [t, 0, -1],
        ]}
      />
      <TriangleSide
        color="darkgreen"
        texture={texture}
        points={[
          [0, 1, -t],
          [0, -1, -t],
          [t, 0, -1],
        ]}
      />
      <TriangleSide
        color="darkcyan"
        texture={texture}
        points={[
          [0, -1, -t],
          [0, 1, -t],
          [-t, 0, -1],
        ]}
      />
      <TriangleSide
        color="darkmagenta"
        texture={texture}
        points={[
          [-1, -t, 0],
          [0, -1, -t],
          [-t, 0, -1],
        ]}
      />
      <TriangleSide
        color="orange"
        texture={texture}
        points={[
          [-1, -t, 0],
          [0, -1, -t],
          [1, -t, 0],
        ]}
      />
      <TriangleSide
        color="white"
        texture={texture}
        points={[
          [1, -t, 0],
          [0, -1, -t],
          [t, 0, -1],
        ]}
      />
      <TriangleSide
        color="deeppink"
        texture={texture}
        points={[
          [t, 0, -1],
          [1, t, 0],
          [t, 0, 1],
        ]}
      />
      <TriangleSide
        color="firebrick"
        texture={texture}
        points={[
          [t, 0, -1],
          [1, -t, 0],
          [t, 0, 1],
        ]}
      />
      <TriangleSide
        color="gold"
        texture={texture}
        points={[
          [-t, 0, 1],
          [-1, -t, 0],
          [-t, 0, -1],
        ]}
      />
      <TriangleSide
        color="indigo"
        texture={texture}
        points={[
          [-t, 0, 1],
          [-1, t, 0],
          [-t, 0, -1],
        ]}
      />
    </mesh>
  );
}

`}
              language={"javascript"}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
              codeBlock
              wrapLines
            />
          </div>
        </p>
      </div>
      <div className={css.hashTags}>
        <div className={css.tag}>#JavaScript</div>
        <div className={css.tag}>#React</div>
        <div className={css.tag}>#Three.js</div>
        <div className={css.tag}>#HTML</div>
        <div className={css.tag}>#CSS</div>
        <div className={css.tag}>#3DAnimation</div>
        <div className={css.tag}>#Redux</div>
      </div>
    </div>
  );
}
