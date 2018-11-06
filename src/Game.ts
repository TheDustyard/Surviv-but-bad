import Camera from "./views/Camera";
import Canvas from "./views/Canvas";

abstract class Game {

    protected canvas: Canvas;
    protected camera: Camera;

    constructor() {
        this.canvas = new Canvas(document.getElementById("game") as HTMLCanvasElement, this.camera);

        window.requestAnimationFrame(this.loop);
    }

    private lastDraw: number;
    private lastUpdate: number;

    // The game loop
    private readonly loop = () => {
        // CLEAR
        this.canvas.clearRect();

        // DRAW
        if (this.lastDraw === undefined) {
            this.lastDraw = Date.now();
        }
        this.draw(Date.now() - this.lastDraw);

        // UPDATE
        if (this.lastUpdate === undefined) {
            this.lastUpdate = Date.now();
        }
        this.update(Date.now() - this.lastUpdate);

        window.requestAnimationFrame(this.loop);
    }

    /** Draw the scene */
    public abstract draw(deltat: number): void;
    /** Update the scene */
    public abstract update(deltat: number): void;
}

export default Game;