import Camera from "./Camera";
import Canvas from "./Canvas";

export abstract class Game {

    protected canvas: Canvas;
    protected camera: Camera;

    constructor() {
        this.canvas = new Canvas(document.getElementById("game") as HTMLCanvasElement);

        // window.requestAnimationFrame()
    }

    private lastDraw: number;
    private lastUpdate: number;

    // The game loop
    private loop = () => {
        // DRAW
        if (this.lastDraw === undefined) {
            this.lastDraw = Date.now();
        }

        // TODO: Only draw if in camera view
        this.draw(Date.now() - this.lastDraw);

        // UPDATE
        if (this.lastUpdate === undefined) {
            this.lastUpdate = Date.now();
        }

        // TODO: allways update, mabye add a unload distance
        this.update(Date.now() - this.lastUpdate);

    }

    /** Draw the scene */
    public abstract draw(deltat: number): void;
    /** Update the scene */
    public abstract update(deltat: number): void;
}