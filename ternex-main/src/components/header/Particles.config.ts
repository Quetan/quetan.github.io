import { ISourceOptions } from "@tsparticles/engine";
import map from "../../assets/contourMap.svg";

export const particlesConfig: ISourceOptions = {
	autoPlay: true,
	background: {
		color: {
			value: "transparent",
		},
		image: `url('${map}')`,
		position: "center",
		repeat: "no-repeat",
		size: "contain",
		opacity: 1,
	},
	backgroundMask: {
		composite: "destination-out",
		cover: {
			color: {
				value: "#fff",
			},
			opacity: 1,
		},
		enable: false,
	},
	clear: true,
	defaultThemes: {},
	delay: 0,
	fullScreen: {
		enable: false,
		zIndex: 0,
	},
	detectRetina: true,
	duration: 0,
	fpsLimit: 120,
	interactivity: {
		detectsOn: "window",
		events: {
			onClick: {
				enable: true,
				mode: "repulse",
			},
			onDiv: {
				selectors: [],
				enable: false,
				mode: [],
				type: "circle",
			},
			onHover: {
				enable: true,
				mode: "bubble",
				parallax: {
					enable: true,
					force: 60,
					smooth: 10,
				},
			},
			resize: {
				delay: 0.5,
				enable: true,
			},
		},
		modes: {
			trail: {
				delay: 1,
				pauseOnStop: false,
				quantity: 1,
			},
			attract: {
				distance: 200,
				duration: 0.4,
				easing: "ease-out-quad",
				factor: 1,
				maxSpeed: 50,
				speed: 1,
			},
			bounce: {
				distance: 200,
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
					selectors: [],
				},
			},
			connect: {
				distance: 80,
				links: {
					opacity: 0.5,
				},
				radius: 60,
			},
			grab: {
				distance: 400,
				links: {
					blink: false,
					consent: false,
					opacity: 1,
				},
			},
			push: {
				default: true,
				groups: [],
				quantity: 4,
			},
			remove: {
				quantity: 2,
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
					selectors: [],
				},
			},
			slow: {
				factor: 3,
				radius: 200,
			},
			light: {
				area: {
					gradient: {
						start: {
							value: "#ffffff",
						},
						stop: {
							value: "#000000",
						},
					},
					radius: 1000,
				},
				shadow: {
					color: {
						value: "#000000",
					},
					length: 2000,
				},
			},
		},
	},
	manualParticles: [],
	particles: {
		bounce: {
			horizontal: {
				value: 1,
			},
			vertical: {
				value: 1,
			},
		},
		collisions: {
			absorb: {
				speed: 2,
			},
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			enable: true,
			maxSpeed: 50,
			mode: "bounce",
			overlap: {
				enable: true,
				retries: 0,
			},
		},
		color: {
			value: "#ffffff",
			animation: {
				h: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				s: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				l: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
			},
		},
		effect: {
			close: true,
			fill: true,
			options: {},
			type: [],
		},
		groups: {},
		move: {
			angle: {
				offset: 0,
				value: 90,
			},
			attract: {
				distance: 200,
				enable: false,
				rotate: {
					x: 3000,
					y: 3000,
				},
			},
			center: {
				x: 50,
				y: 50,
				mode: "percent",
				radius: 0,
			},
			decay: 0,
			distance: {},
			direction: "none",
			drift: 0,
			enable: true,
			gravity: {
				acceleration: 9.81,
				enable: false,
				inverse: false,
				maxSpeed: 50,
			},
			path: {
				clamp: true,
				delay: {
					value: 0,
				},
				enable: false,
				options: {},
			},
			outModes: {
				default: "out",
				bottom: "out",
				left: "out",
				right: "out",
				top: "out",
			},
			random: false,
			size: false,
			speed: {
				min: 0.1,
				max: 1,
			},
			spin: {
				acceleration: 0,
				enable: false,
			},
			straight: true,
			trail: {
				enable: false,
				length: 10,
				fill: {},
			},
			vibrate: false,
			warp: false,
		},
		number: {
			density: {
				enable: true,
				width: 1920,
				height: 1080,
			},
			limit: {
				mode: "delete",
				value: 0,
			},
			value: 180,
		},
		opacity: {
			value: {
				min: 0.1,
				max: 0.65,
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
			},
		},
		reduceDuplicates: true,
		shadow: {
			blur: 0,
			color: {
				value: "#000",
			},
			enable: false,
			offset: {
				x: 0,
				y: 0,
			},
		},
		shape: {
			close: true,
			fill: true,
			options: {},
			type: "circle",
		},
		size: {
			value: {
				min: 1,
				max: 3,
			},
			animation: {
				count: 0,
				enable: false,
				speed: 5,
				decay: 0,
				delay: 0,
				sync: false,
				mode: "auto",
				startValue: "random",
				destroy: "none",
			},
		},
		stroke: {
			width: 3,
		},
		zIndex: {
			value: 0,
			opacityRate: 1,
			sizeRate: 1,
			velocityRate: 1,
		},
		destroy: {
			bounds: {},
			mode: "none",
			split: {
				count: 1,
				factor: {
					value: 3,
				},
				rate: {
					value: {
						min: 4,
						max: 9,
					},
				},
				sizeOffset: true,
				particles: {},
			},
		},
		roll: {
			darken: {
				enable: false,
				value: 0,
			},
			enable: false,
			enlighten: {
				enable: false,
				value: 0,
			},
			mode: "vertical",
			speed: 25,
		},
		tilt: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: "clockwise",
			enable: false,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.25,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
		wobble: {
			distance: 5,
			enable: false,
			speed: {
				angle: 50,
				move: 10,
			},
		},
		life: {
			count: 0,
			delay: {
				value: 0,
				sync: false,
			},
			duration: {
				value: 0,
				sync: false,
			},
		},
		rotate: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: "clockwise",
			path: true,
		},
		orbit: {
			animation: {
				count: 0,
				enable: false,
				speed: 1,
				decay: 0,
				delay: 0,
				sync: false,
			},
			enable: false,
			opacity: 1,
			rotation: {
				value: 45,
			},
			width: 1,
		},
		links: {
			blink: false,
			color: {
				value: "#fff",
			},
			consent: false,
			distance: 160,
			enable: true,
			frequency: 1,
			opacity: 1,
			shadow: {
				blur: 5,
				color: {
					value: "#000",
				},
				enable: false,
			},
			triangles: {
				enable: false,
				frequency: 1,
			},
			width: 1,
			warp: true,
		},
		repulse: {
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1,
		},
	},
	pauseOnBlur: true,
	pauseOnOutsideViewport: true,
	responsive: [],
	smooth: false,
	style: {},
	themes: [],
	zLayers: 100,
	name: "t.me/KorkinK",
	motion: {
		disable: false,
		reduce: {
			factor: 4,
			value: true,
		},
	},
};
