import Rectangle from "./shape/Rectangle";
import Vector2 from "./Vector2";
import Canvas from "./views/Canvas";

abstract class Game {
    protected canvas: Canvas;

    constructor() {
        this.canvas = new Canvas(document.getElementById("game") as HTMLCanvasElement);
    }

    private started = false;
    public start() {
        if (this.started) {
            throw new Error("The game is already running");
        }

        this.started = true;
        window.requestAnimationFrame(this.loop);
    }

    private lastDraw: number;
    private lastUpdate: number;

    // The game loop
    private readonly loop = () => {
        // CLEAR
        this.canvas.clearRect(new Rectangle(this.canvas.width, this.canvas.height, Vector2.zero));

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

    /** Initialize the game */
    public abstract init(deltat: number): void;
    /** Draw the scene */
    public abstract draw(deltat: number): void;
    /** Update the scene */
    public abstract update(deltat: number): void;
}

export default Game;