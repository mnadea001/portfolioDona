import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RenderTexture, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'


function Cube() {
    const textRef = useRef()
    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map" anisotropy={16}>
                    <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                    <color attach="background" args={['#1501FF']} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} />
                    <Text ref={textRef} fontSize={4} color="#D5FF3C">
                        404
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

const NotFound: React.FC = () => {

    return (
        <>
            <Canvas camera={{ position: [4, 4, 4], fov: 25 }}>
                <ambientLight intensity={0.5} />
                <Cube />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="#1501FF" />
            </Canvas>
        </>
    );
};



export default NotFound;
