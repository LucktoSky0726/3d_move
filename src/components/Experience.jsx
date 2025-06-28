import { Environment, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

import { CharacterController } from "./CharacterController";
import { Frozen } from "./Frozen";
import { Map } from "./Map";
import { Kris } from "./Kris";

const maps = {
  // castle_on_hills: {
  //   scale: 3,
  //   position: [-6, -7, 0],
  // },
  // animal_crossing_map: {
  //   scale: 20,
  //   position: [-15, -1, 10],
  // },
  // city_scene_tokyo: {
  //   scale: 0.72,
  //   position: [0, -1, -3.5],
  // },
  de_dust_2_with_real_light: {
    scale: 0.3,
    position: [-6, -3, 13],
  },
  // medieval_fantasy_book: {
  //   scale: 0.4,
  //   position: [-4, 0, -6],
  // },
};

export const Experience = () => {
  const rb1 = useRef();
  const character = useRef();
  const shadowCameraRef = useRef();
  const { map } = useControls("Map", {
    map: {
      value: "de_dust_2_with_real_light",
      options: Object.keys(maps),
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics key={map} debug>
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
        <RigidBody colliders={false} lockRotations ref={rb1}>
          <group ref={character}>
            <Frozen
              scale={0.12}
              position-y={-1}
              position-x={0.5}
              position-z={1.3}
            />
          </group>
          <CapsuleCollider args={[0.3, 0.15]} position={[1.35, -1.2, 1.35]}/>
        </RigidBody>
        {/* <Kris
          animation = {"idle"}
              scale={50}
              position-y={-1}
              position-x={1.5}
              position-z={1.3}
            /> */}
      </Physics>
    </>
  );
};
