import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Stage} from '@react-three/drei'
import {useSprings} from '@react-three/drei'


function Model(props){
    const {scene} = useGLTF('./bitcoin.glb')
    return <primitive object={scene} {...props}/>

}


// function TouchActionExample() {
//     const [springs, api] = useSprings(4, () => ({ x: 0 }))
  
//     const bind = useDrag(
//       ({ down, movement: [x], args: [index] }) => api.start((i) => i === index && { x: down ? x : 0 }),
//       {
//         axis: 'x'
//       }
//     )
  
//     return springs.map(({ x }, i) => <animated.div {...bind(i)} style={{ x, touchAction: 'pan-y' }} />)
//   }


const OurModel = () => {
  return (
    <div>
           <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{position:"absolute", top:"8%"}}  >
        
        <color attach="background" args={['#101010']} /> 
        <ambientLight intensity={-1}  />
  
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]} >
          <Stage environment={null} >
          <Model scale={0.01} /> 
          </Stage>
        </PresentationControls>
      </Canvas>

    
    </div>
  )
}

export default OurModel