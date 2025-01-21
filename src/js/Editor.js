import { Color, HemisphereLight, PerspectiveCamera, Scene, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Cube } from './Cube';
import { Selector } from './Selector';
import { UI as $ } from './UI';

class Editor {
	constructor() {
		this.scene = new Scene();
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
		this.camera.position.z = 5;
		this.clipboard = [];
		this.keys = { ShiftLeft: false };
		this.mode = 'object'; // 2 modes: "object" and "edit"
		this.mouseDelta = { x: 0, y: 0 };
		this.isMouseDown = false;
		this.movementSpeed = 0.1;
		this.rotationSpeed = 0.002;
	}

	update(renderDelta, renderAlpha, physicsDelta) {
		this.handleCameraMovement();
	}

	init(game) {
		this.game = game;

		this.controlsTransform = new TransformControls(this.camera, this.game.renderer.domElement);
		this.controlsTransform.pointer = new Vector3();
		this.setTransformMode('translate');

		this.controlsOrbit = new OrbitControls(this.camera, this.game.renderer.domElement);
		this.controlsOrbit.enableRotate = false;
		this.controlsOrbit.mouseButtons = { LEFT: 2, MIDDLE: 2, RIGHT: 2 };
		this.controlsOrbit.zoomSpeed = 3;

		this.selector = new Selector(this.camera, this.scene, this.game.renderer);

		this.game.outlinePass.edgeStrength = 3;
		this.game.outlinePass.edgeGlow = 0;
		this.game.outlinePass.edgeThickness = 0.25;
		this.game.outlinePass.visibleEdgeColor = new Color('#E8BE7F');
		this.game.outlinePass.hiddenEdgeColor = new Color('#E8BE7F');
		this.game.outlinePass.selectedObjects = [this.selector.selectedObjects];

		this.addEventListeners();
		this.test();
	}

	addEventListeners() {
		window.addEventListener('pointerdown', (e) => this.handleInput(e), false);
		window.addEventListener('pointermove', (e) => this.handleInput(e), false);
		window.addEventListener('pointerup', (e) => this.handleInput(e), false);
		window.addEventListener('keydown', (e) => this.handleInput(e), false);
		window.addEventListener('keyup', (e) => this.handleInput(e), false);
		window.addEventListener('selectObject', (e) => this.selectObjectEvent(e));

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

	// (Remaining methods like test, duplicateSelected, deleteSelected, etc., stay as-is)
}

export { Editor };
