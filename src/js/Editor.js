import { Color, HemisphereLight, PerspectiveCamera, Scene, Vector3 } from 'three';

class Editor {
	constructor() {
		this.scene = new Scene();
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
		this.camera.position.z = 5;

		this.keys = {};
		this.mouseDelta = { x: 0, y: 0 };
		this.isMouseDown = false;

		this.movementSpeed = 0.1;
		this.rotationSpeed = 0.002;
	}

	update(renderDelta) {
		this.handleCameraMovement();
	}

	init(game) {
		this.game = game;

		this.addEventListeners();

		const hemisphere = new HemisphereLight('#ffffff', '#000000', 1);
		hemisphere.position.set(0, 1, 2);
		this.scene.add(hemisphere);
	}

	addEventListeners() {
		window.addEventListener('keydown', (e) => (this.keys[e.code] = true), false);
		window.addEventListener('keyup', (e) => (this.keys[e.code] = false), false);

		window.addEventListener('mousedown', () => (this.isMouseDown = true), false);
		window.addEventListener('mouseup', () => (this.isMouseDown = false), false);

		window.addEventListener('mousemove', (e) => {
			if (this.isMouseDown) {
				this.mouseDelta.x += e.movementX;
				this.mouseDelta.y += e.movementY;
			}
		});
	}

	handleCameraMovement() {
		if (this.isMouseDown) {
			this.camera.rotation.y -= this.mouseDelta.x * this.rotationSpeed;
			this.camera.rotation.x -= this.mouseDelta.y * this.rotationSpeed;
			this.mouseDelta.x = 0;
			this.mouseDelta.y = 0;
		}

		this.camera.rotation.x = Math.max(
			-Math.PI / 2,
			Math.min(Math.PI / 2, this.camera.rotation.x)
		);

		const direction = new Vector3();
		if (this.keys['KeyW']) direction.z -= this.movementSpeed;
		if (this.keys['KeyS']) direction.z += this.movementSpeed;
		if (this.keys['KeyA']) direction.x -= this.movementSpeed;
		if (this.keys['KeyD']) direction.x += this.movementSpeed;

		direction.applyEuler(this.camera.rotation);
		this.camera.position.add(direction);
	}
}

export { Editor };
