import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

export const GalaxyParticles = ({ count = 5000 }) => {
  const particles = useRef();
  const timeRef = useRef(0);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.4, 1, 0.7);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, [count]);

  useFrame(({ clock }) => {
    if (particles.current) {
      timeRef.current += 0.01;
      particles.current.rotation.y = timeRef.current * 0.2;
      particles.current.rotation.x = Math.sin(timeRef.current * 0.5) * 0.1;
    }
  });

  return (
    <Points ref={particles} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.2}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export const SpaceWave = () => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      mesh.current.rotation.z = time * 0.1;
      const geom = mesh.current.geometry;
      const positionAttr = geom.attributes.position;

      for (let i = 0; i < positionAttr.count; i++) {
        const x = positionAttr.getX(i);
        const y = positionAttr.getY(i);
        const wave = Math.sin(x * 2 + time) * Math.cos(y * 2 + time) * 0.3;
        positionAttr.setZ(i, wave);
      }
      positionAttr.needsUpdate = true;
    }
  });

//   return (
//     <mesh ref={mesh} position={[0, 0, -5]}>
//       <planeGeometry args={[155, 155, 64, 64]} />
//       <meshStandardMaterial
//         color="#4f46e5"
//         transparent
//         opacity={0.1}
//         wireframe
//         emissive="#6366f1"
//         emissiveIntensity={0.8}
//       />
//     </mesh>
//   );
};

export const GalaxyBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#4f46e5" />
      <Environment preset="night" />
      <GalaxyParticles count={15000} />
      <SpaceWave />
    </Canvas>
  );
};