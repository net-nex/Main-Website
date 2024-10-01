import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
// import loading from '../utils/loading.mp4'
export default function Preloader() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: "#000"
      },
      image: "/logo.svg",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "20%",
      opacity: 1
    },
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "repulse"
        },
        
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 250,
          duration: 2,
          mix: false,
          opacity: 0,
          size: 0,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 400,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: []
          }
        },
        slow: {
          factor: 3,
          radius: 200
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff"
              },
              stop: {
                value: "#000000"
              }
            },
            radius: 1000
          },
          shadow: {
            color: {
              value: "#000000"
            },
            length: 2000
          }
        }
      }
    },
    manualParticles: [],
    particles: {
  
      color: {
        value: "#ffffff",
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
       
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out"
        },
        random: true,
        size: false,
        speed: 1,
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {}
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080
        },
        limit: 0,
        value: 160
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1
        },
        value: {
          min: 0,
          max: 1
        },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
          minimumValue: 0
        }
      },
      reduceDuplicates: false,
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle"
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1
        },
        value: {
          min: 1,
          max: 3
        },
      },
      stroke: {
        width: 0
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    }
  } as ISourceOptions;

  return (
    <div className="]">
      <Particles id="tsparticles" options={options} init={particlesInit} className="z-[0]"/>
    </div>
  );
}