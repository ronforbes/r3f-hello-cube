import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Box(props) {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}
