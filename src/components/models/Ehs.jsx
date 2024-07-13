
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as Three from "three"

export function Ehs(props) {
  const { nodes, materials } = useGLTF('models/Ehs.glb')


  const texture = useTexture('textures/ehsBake.jpg')
  texture.flipY = false
  texture.encoding = Three.sRGBEncoding

  const textureMaterial = new Three.MeshStandardMaterial({
    map: texture,
  })

  return (
    <group {...props} dispose={null}>
      <mesh name="NurbsPath" geometry={nodes.NurbsPath.geometry} material={textureMaterial} position={[-0.048, -0.079, 0.119]} />
    </group>
  )
}

useGLTF.preload('models/Ehs.glb')