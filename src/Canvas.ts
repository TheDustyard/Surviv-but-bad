export default class Canvas {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {

        this.context = canvas.getContext("2d");

        this.initializeScreen();
        window.addEventListener("resize", () => this.initializeScreen);
    }

    private initializeScreen() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        console.log(this.canvas.width, this.canvas.height);
    }
}