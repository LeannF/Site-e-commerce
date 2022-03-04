import Particles from "react-tsparticles";
import ParticleConfig from './config/particlesjs-config'

const ParticleBackground = () => {
    return(
        <div >
            <Particles options={ParticleConfig} />
        </div>
    )
}
export default ParticleBackground;