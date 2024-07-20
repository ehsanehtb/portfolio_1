/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 .\public\models\Room.glb -k 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Room.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Node_0" position={[0, 3.255, 0]} scale={0.01}>
        <group name="desk-relation" position={[-300.235, -147.227, 107.426]}>
          <group name="books" position={[123.879, -136.32, 69.492]} rotation={[0, 0, Math.PI / 2]} scale={0.738}>
            <mesh name="Cube_3001" geometry={nodes.Cube_3001.geometry} material={materials['Material.003']} position={[-15.222, 2.953, 27.334]} rotation={[0.439, 0.09, -0.033]} scale={[0.596, 1.199, 0.888]}>
              <mesh name="Cube_3002" geometry={nodes.Cube_3002.geometry} material={materials['Material.021']} position={[16.804, 0.601, -9.117]} />
            </mesh>
            <mesh name="Cube_4001" geometry={nodes.Cube_4001.geometry} material={materials['Material.004']} position={[-57.174, 138.424, 61.931]} rotation={[2.308, -0.007, 0.003]} scale={[0.589, 0.872, 0.716]}>
              <mesh name="Cube_4002" geometry={nodes.Cube_4002.geometry} material={materials['Material.021']} position={[17.511, 0.449, -9.595]} />
            </mesh>
            <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.005']} position={[-57.924, 6.999, 18.63]} rotation={[2.357, 0, 0]} scale={[1.022, 1.309, 0.933]}>
              <mesh name="Cube_2003" geometry={nodes.Cube_2003.geometry} material={materials['Material.021']} position={[16.715, 0.601, -8.949]} />
            </mesh>
          </group>
          <group name="cup" position={[40.223, -8.773, -4.594]}>
            <mesh name="Cube_2004" geometry={nodes.Cube_2004.geometry} material={materials['Material.020']} position={[-55.545, 0, 4.101]} rotation={[-Math.PI / 2, 0, 0.357]} />
            <mesh name="Cube_3003" geometry={nodes.Cube_3003.geometry} material={materials['Material.020']} position={[-33.342, 1.797, -2.857]} rotation={[0, 0.357, 0]} />
          </group>
          <group name="desk" position={[-33.073, -104.752, -18.737]}>
            <mesh name="Cube_2005" geometry={nodes.Cube_2005.geometry} material={materials['Material.011']} position={[-161.462, -4.668, 65.245]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
            <mesh name="Cube_3004" geometry={nodes.Cube_3004.geometry} material={materials['Material.011']} position={[-161.462, -4.668, -63.476]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
            <mesh name="Cube_4003" geometry={nodes.Cube_4003.geometry} material={materials['Material.011']} position={[56.858, -4.668, -63.476]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
            <mesh name="Cube_4004" geometry={nodes.Cube_4004.geometry} material={materials['Material.011']} position={[56.858, -4.668, 65.245]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
            <mesh name="Rectangle001" geometry={nodes.Rectangle001.geometry} material={materials['Material.011']} position={[-51.146, 60.696, -0.475]} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
          <group name="document" position={[-94.939, -17.721, 16.807]} rotation={[-Math.PI / 2, 0, -2.531]}>
            <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[41.703, -45.069, 12.112]} scale={0.861} />
            <mesh name="Rectangle_2003" geometry={nodes.Rectangle_2003.geometry} material={materials['Material.005']} position={[35.713, -24.003, -3.622]} scale={[0.861, 0.861, 0.601]} />
            <mesh name="Rectangle_3002" geometry={nodes.Rectangle_3002.geometry} material={materials['Material.003']} position={[46.992, -28.89, -2.101]} rotation={[0, 0, 0.209]} scale={[0.861, 0.861, 0.601]} />
            <mesh name="Rectangle_4" geometry={nodes.Rectangle_4.geometry} material={materials['Material.004']} position={[41.962, -47.098, -0.364]} scale={[0.861, 0.861, 0.601]} />
          </group>
          <group name="plant" position={[-17.091, 78.243, -75.424]}>
            <mesh name="Cube_2002" geometry={nodes.Cube_2002.geometry} material={materials['Material.007']} position={[-52.007, -85.486, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials['Material.009']} position={[-43.092, 68.332, -2.539]} rotation={[0, 0, 0.047]} />
            <mesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['Material.008']} position={[-45.425, 46.53, -1.342]} rotation={[-0.052, 0.007, -0.125]} />
            <mesh name="Cube_5" geometry={nodes.Cube_5.geometry} material={materials['Material.008']} position={[-59.96, 12.187, 0.73]} rotation={[-Math.PI, 0, 2.705]} />
          </group>
          <mesh name="Rectangle_5" geometry={nodes.Rectangle_5.geometry} material={materials['Material.003']} position={[40.749, -185.539, 146.646]} rotation={[-Math.PI / 2, 0, -3.059]} scale={[0.861, 0.861, 0.601]} />
        </group>
        <group name="lamp" position={[-150.881, -21.818, -560.139]}>
          <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['Material.006']} position={[-0.247, -296.915, 0.707]} />
          <mesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={materials['Material.006']} position={[-0.532, -36.516, 1.567]} />
          <mesh name="Cylinder_4" geometry={nodes.Cylinder_4.geometry} material={materials['Material.022']} position={[0.247, 247.415, -0.707]} />
          <mesh name="Cylinder_5" geometry={nodes.Cylinder_5.geometry} material={materials['Material.001']} position={[-0.224, 197.598, -0.707]} />
          <mesh name="Cylinder_6" geometry={nodes.Cylinder_6.geometry} material={materials['Material.022']} position={[-0.224, 296.266, -0.707]} />
        </group>
        <group name="people" position={[54.843, 0.518, 141.556]}>
          <group name="chair" position={[-322.32, -255.492, -411.307]} rotation={[0, -Math.PI / 6, 0]} scale={[1.34, 0.629, 1.125]}>
            <mesh name="Cube_8001" geometry={nodes.Cube_8001.geometry} material={materials['Material.011']} position={[-2.379, 97.156, 2.31]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} />
            <mesh name="Cube_9001" geometry={nodes.Cube_9001.geometry} material={materials['Material.011']} position={[-2.31, 98.833, -2.379]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
            <mesh name="Cylinder_2002" geometry={nodes.Cylinder_2002.geometry} material={materials['Material.011']} position={[3.248, 110.662, 3.319]} scale={1.241} />
            <mesh name="Cylinder_4001" geometry={nodes.Cylinder_4001.geometry} material={materials['Material.011']} position={[67.271, -2.732, -67.316]} rotation={[0.086, 0.015, 0.087]} scale={1.241} />
            <mesh name="Cylinder_5001" geometry={nodes.Cylinder_5001.geometry} material={materials['Material.011']} position={[-67.325, -2.732, 67.316]} rotation={[-0.087, 0, -0.087]} scale={1.241} />
            <mesh name="Cylinder_6001" geometry={nodes.Cylinder_6001.geometry} material={materials['Material.011']} position={[67.316, -2.732, 67.271]} rotation={[1.396, -1.484, 1.484]} scale={1.241} />
            <mesh name="Cylinder_6002" geometry={nodes.Cylinder_6002.geometry} material={materials['Material.011']} position={[-67.316, -2.732, -67.325]} rotation={[-Math.PI / 2, -1.484, -1.658]} scale={1.241} />
          </group>
          <group name="computer" position={[-323.467, -128.355, -417.455]} rotation={[-0.015, 0.52, 0.003]} scale={[0.642, 0.698, 0.698]}>
            <mesh name="Rectangle_2008" geometry={nodes.Rectangle_2008.geometry} material={materials['Material.016']} position={[0, -0.214, -81.435]} rotation={[-Math.PI / 9, 0, 0]} />
            <mesh name="Rectangle_3007" geometry={nodes.Rectangle_3007.geometry} material={materials['Material.018']} position={[0, -66.851, 15.835]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name="Rectangle_4003" geometry={nodes.Rectangle_4003.geometry} material={materials['Material.012']} position={[0, -62.816, -3.881]} rotation={[Math.PI / 2, 0, 0]} scale={0.833} />
            <mesh name="Rectangle_5003" geometry={nodes.Rectangle_5003.geometry} material={materials['Material.012']} position={[0, -66.011, 62.638]} rotation={[Math.PI / 2, 0, 0]} scale={0.833} />
            <mesh name="Rectangle002" geometry={nodes.Rectangle002.geometry} material={materials['Material.018']} position={[0, -5.445, -85.575]} rotation={[-Math.PI / 9, 0, 0]} />
          </group>
        </group>
        <group name="plant2" position={[433.531, -87.111, -382.344]} rotation={[0, -0.611, 0]}>
          <mesh name="Cube_10" geometry={nodes.Cube_10.geometry} material={materials['Material.008']} position={[-64.81, 78.494, 34.464]} rotation={[-1.471, 0.44, 1.743]} />
          <mesh name="Cube_11" geometry={nodes.Cube_11.geometry} material={materials['Material.008']} position={[46.206, 165.041, 10.761]} rotation={[-1.095, -0.64, -0.958]} />
          <mesh name="Cube_6" geometry={nodes.Cube_6.geometry} material={materials['Material.019']} position={[20.84, -175.712, -6.26]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh name="Cube_7" geometry={nodes.Cube_7.geometry} material={materials['Material.008']} position={[15.169, 90.028, -91.428]} rotation={[-1.222, 0, 0]} />
          <mesh name="Cube_8" geometry={nodes.Cube_8.geometry} material={materials['Material.008']} position={[109.129, 90.028, -28.276]} rotation={[-1.477, -0.337, -1.293]} />
          <mesh name="Cube_9" geometry={nodes.Cube_9.geometry} material={materials['Material.008']} position={[-15.535, 98.582, 70.891]} rotation={[-1.98, 0.447, 2.554]} />
        </group>
        <mesh name="Floor" geometry={nodes.Floor.geometry} material={materials['Material.014']} position={[-140.582, -329.822, -472.999]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.133, 0.271, 1]} />
      </group>
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.017']} position={[3.812, 9.421, 1.302]} rotation={[0, 0.533, 0]} scale={2.828} />
    </group>
  )
}

useGLTF.preload('/Room.glb')