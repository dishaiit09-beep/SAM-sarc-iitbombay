import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "./CityGlobe.css";

const cityPositions = {
  Mumbai: [-1.55, -0.42, 0.95],
  Pune: [-0.75, -0.8, 0.95],
  Jaipur: [-0.5, 1, 0.98],
  Delhi: [-0.25, 1.45, 0.82],
  Indore: [-0.55, 0.55, 0.9],
};

function ConnectionLine({ to }) {
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(to[0], to[1], to[2]),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [to]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#3abef9" transparent opacity={0.45} />
    </line>
  );
}

function CityPin({ city, position, onCitySelect }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.055, 24, 24]} />
        <meshStandardMaterial
          color="#a7e6ff"
          emissive="#3abef9"
          emissiveIntensity={1.4}
        />
      </mesh>

      <Html distanceFactor={7}>
        <button
          className="globe-city-label"
          onClick={() => onCitySelect(city)}
        >
          {city.city}
        </button>
      </Html>
    </group>
  );
}

function GlobeScene({ cities, onCitySelect }) {
  const globeRef = useRef();

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={2.2} color="#a7e6ff" />
      <pointLight position={[-4, -2, 2]} intensity={1.4} color="#3572ef" />

      <Stars
        radius={45}
        depth={28}
        count={900}
        factor={3}
        saturation={0}
        fade
        speed={0.6}
      />

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
        <group ref={globeRef}>
          <mesh>
            <sphereGeometry args={[1.25, 64, 64]} />
            <meshStandardMaterial
              color="#050c9b"
              metalness={0.45}
              roughness={0.22}
              emissive="#3572ef"
              emissiveIntensity={0.2}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[1.48, 0.012, 16, 160]} />
            <meshStandardMaterial
              color="#3abef9"
              emissive="#3abef9"
              emissiveIntensity={0.8}
            />
          </mesh>

          <mesh rotation={[0.9, 0.25, 0.4]}>
            <torusGeometry args={[1.62, 0.01, 16, 160]} />
            <meshStandardMaterial
              color="#a7e6ff"
              emissive="#a7e6ff"
              emissiveIntensity={0.6}
            />
          </mesh>

          <mesh rotation={[1.15, 0.9, 0.2]}>
            <torusGeometry args={[1.78, 0.008, 16, 160]} />
            <meshStandardMaterial
              color="#3572ef"
              emissive="#3572ef"
              emissiveIntensity={0.5}
            />
          </mesh>

          {cities.map((city) => {
            const position = cityPositions[city.city] || [0, 0, 1.3];

            return (
              <React.Fragment key={city.city}>
                <ConnectionLine to={position} />
                <CityPin
                  city={city}
                  position={position}
                  onCitySelect={onCitySelect}
                />
              </React.Fragment>
            );
          })}
        </group>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.4}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function CityGlobe({ cities, onCitySelect }) {
  return (
    <div className="city-globe-shell">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 45 }}>
        <GlobeScene cities={cities} onCitySelect={onCitySelect} />
      </Canvas>
    </div>
  );
}