import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LiquidPlane = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      // Modulate waves based on page scroll speed/position
      materialRef.current.uniforms.uScroll.value = window.scrollY * 0.0015;
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColorA: { value: new THREE.Color('#070708') },
    uColorB: { value: new THREE.Color('#3b82f6') }
  }), []);

  return (
    <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, -5]}>
      <planeGeometry args={[60, 60, 96, 96]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          uniform float uScroll;
          varying vec2 vUv;
          varying float vElevation;

          // GPU-accelerated wave equation
          float calculateWave(vec2 pos) {
            float waveVal = sin(pos.x * 0.12 + uTime * 0.7 + uScroll) * cos(pos.y * 0.12 + uTime * 0.5 + uScroll);
            waveVal += sin(pos.x * 0.25 - uTime * 0.4) * 0.3;
            return waveVal;
          }

          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = calculateWave(pos.xy);
            pos.z += elevation * 3.5; // Elevate vertices
            vElevation = elevation;

            vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            gl_Position = projectionMatrix * viewPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            // Mix colors based on vertex elevation heights
            float mixStrength = (vElevation + 1.5) / 3.0;
            vec3 finalColor = mix(uColorA, uColorB, clamp(mixStrength, 0.0, 1.0));
            
            // Fade out the mesh towards the outer edges so it blends beautifully
            float borderFade = smoothstep(0.0, 0.4, vUv.x) * smoothstep(1.0, 0.6, vUv.x) *
                               smoothstep(0.0, 0.4, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
            
            gl_FragColor = vec4(finalColor, borderFade * 0.5);
          }
        `}
        transparent
        depthWrite={false}
        wireframe={true} // Renders a futuristic 3D blueprint contour map
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fof: 60 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <LiquidPlane />
    </Canvas>
  );
};

export default HeroScene;
