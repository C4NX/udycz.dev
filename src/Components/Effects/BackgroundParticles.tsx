import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import Particles from "react-particles";
import { isMobile } from "react-device-detect";

export default function BackgroundParticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadLinksPreset(engine);
    }, []);

    return <Particles id="tsparticles" init={particlesInit} params={{
        "preset": "links",
        "autoPlay": true,
        "background": {
            "color": "rgb(10,10,25)"
        },
        "particles": {
            "number": {
                "value": isMobile ? 10 : 150
            }
        },
        "interactivity": {
            "detect_on": "parent",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "detectRetina": true,
    }} />
}