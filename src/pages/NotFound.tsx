import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { JSX } from 'react/jsx-runtime'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import './NotFound.css';
import Header from '../components/Header'
import { useNavigate } from "react-router";

function Stars(props: JSX.IntrinsicAttributes) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}


const NotFound: React.FC = () => {
    const navigate = useNavigate();

    function Overlay() {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
                <a href="/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
                    retour à l'accueil —
                </a>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
                    <h2 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>404</h2>
                    <p>Page introuvable</p>
                </div>
            </div>
        )
    }
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#12071f' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            <Overlay />
            <Header />
        </div>
    );
};



export default NotFound;