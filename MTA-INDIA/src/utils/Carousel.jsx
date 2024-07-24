import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";
import { upComingBatches } from "../Data/upComingBatches";

const Carousel = () => {
  const groupRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite scroll logic
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    groupRef.current.rotation.y = elapsedTime * 0.1; // Adjust rotation speed here
  });

  const radius = 10;
  const angle = (2 * Math.PI) / items.length;

  return (
    <div className="w-full h-64 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <group ref={groupRef}>
          {upComingBatches.map((item, index) => (
            <mesh
              key={index}
              position={[
                radius * Math.sin(index * angle),
                0,
                radius * Math.cos(index * angle),
              ]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <planeGeometry args={[2, 2]} />
              <meshBasicMaterial
                map={new THREE.TextureLoader().load(item.image)}
              />
            </mesh>
          ))}
        </group>
      </Canvas>
    </div>
  );
};

export default Carousel;
