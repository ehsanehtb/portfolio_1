/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 .\public\models\Eletter.glb -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Eletter.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.001']} rotation={[1.594, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Eletter.glb')
