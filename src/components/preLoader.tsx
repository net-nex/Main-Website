import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";
export default function Preloader() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
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
        }
      },
      modes: {
        bubble: {
          distance: 10,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 100,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        limit: 0,
        value: 200
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: {
          min: 0.05,
          max: 0.4
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 0,
        lineHeight : 5

      },
      enable: true,
      move: {
        radius: 10
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 1,
      type: "inline",
      url: "/nn.svg"
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  } as ISourceOptions;

  return (
    <div className="App z-[999]">
      <Particles id="tsparticles" options={options} init={particlesInit} />
    </div>
  );
}
