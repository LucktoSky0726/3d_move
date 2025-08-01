/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/frozen.glb -o src/components/Frozen.jsx -r public 
Author: khyrallah2020 (https://sketchfab.com/khyralla1h2020)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/elsa-frozen-2052efd8a61f4d7b98215d0a857cb654
Title: Elsa Frozen
*/

import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Frozen(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/frozen.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
    useEffect(() => {
      console.log(actions)
      actions['level_win_01']?.reset().fadeIn(0.24).play();
      return () => actions?.['level_win_01']?.fadeOut(0.24);
    }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="elsa_modelfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="UICharacterModels" position={[700, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_7" position={[700, -525, 0]} rotation={[-Math.PI, 0, Math.PI]} scale={500} />
                    <group name="Object_12" position={[700, -525, 0]} rotation={[-Math.PI, 0, Math.PI]} scale={500} />
                    <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.elsaF2_outfit_MAT} skeleton={nodes.Object_8.skeleton} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.elsaF2_skin_MAT} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.elsaF2_eyelash_MAT} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.elsaF2_hair_MAT} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.elsaF2_hair_MAT} skeleton={nodes.Object_13.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/frozen.glb')
