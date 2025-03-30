// src/components/TestCube/index.tsx
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

const TestCube = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <Box>
        <meshStandardMaterial color="blue" />
      </Box>
    </Canvas>
  )
}

export default TestCube