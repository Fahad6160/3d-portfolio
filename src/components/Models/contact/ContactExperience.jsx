import { OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import Particles from "../../HeroModels/Particles";

const ContactExperience = () => {
  return (
    <>
        <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                receiveShadow
                position={[0, -2.5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                >
                <planeGeometry args={[30, 30]} />
                {/* <meshStandardMaterial color="#a46b2d" /> */}
                <meshStandardMaterial color="#000" />
                </mesh>
            </group>

            <Particles count={80} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={2.5} position={[0, 0, 0]} castShadow>
                    <Earth />
                </group>
            </Float>
        </Canvas>
    </>
  );
};

export default ContactExperience;