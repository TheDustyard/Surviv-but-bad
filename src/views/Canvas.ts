import Circle from "../shape/Circle";
import Rectangle from "../shape/Rectangle";
import Shape from "../shape/Shape";
import Vector2 from "../Vector2";
import Camera from "./Camera";

interface IStyles {
    line?: ILineStyles;
    text?: ITextStyles;
    fill?: IFillStyles;
    stroke?: IStrokeStyles;
}

interface ILineStyles {
    /** Width of lines. Default `1.0` */
    lineWidth?: number;
    /** Type of endings on the end of lines. Possible values: `butt` (default), `round`, `square`. */
    lineCap?: "butt" | "round" | "square";
    /** Defines the type of corners where two lines meet. Possible values: `round`, `bevel`, `miter` (default). */
    lineJoin?: "round" | "bevel" | "miter";
    /** Miter limit ratio. Default `10`. */
    miterLimit?: number;
    /** The current line dash pattern. */
    lineDash?: number[];
    /** Specifies where to start a dash array on a line. */
    lineDashOffset?: number;
}

interface ITextStyles {
    /** Font setting. Default value `10px sans-serif.` */
    font?: string;
    /** Text alignment setting. Possible values: `start` (default), `end`, `left`, `right` or `center`. */
    textAlign?: "start" | "end" | "left" | "right" | "center";
    /** Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`. */
    textBaseline?: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
    /** Directionality. Possible values: `ltr`, `rtl`, `inherit` (default). */
    direction?: "ltr" | "rtl" | "inherit";
}

/** Color or style to use inside shapes. Default: `#000` (black). */
type IFillStyles = string;

/** Color or style to use for the lines around shapes. Default `#000` (black). */
type IStrokeStyles = string;

export default class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
    private readonly camera: Camera;

    public styles: IStyles = {
        fill: "",
        line: {},
        stroke: "",
        text: {}
    };

    constructor(canvas: HTMLCanvasElement, camera: Camera) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.initializeScreen();
        window.addEventListener("resize", this.initializeScreen);
    }

    private readonly initializeScreen = () => {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        console.log(this.canvas.width, this.canvas.height);
    }

    /** Runs a drawing function with the given styles */
    private runWithStyles<T>(fn: () => T, styles?: IStyles): T {
        // Save the default state
        this.context.save();

        // Set options
        if (styles !== undefined) {
            if (styles.line !== undefined) {
                this.context.lineWidth = styles.line.lineWidth !== undefined ? styles.line.lineWidth : this.styles.line.lineWidth;
                this.context.lineCap = styles.line.lineCap !== undefined ? styles.line.lineCap : this.styles.line.lineCap;
                this.context.lineJoin = styles.line.lineJoin !== undefined ? styles.line.lineJoin : this.styles.line.lineJoin;
                this.context.miterLimit = styles.line.miterLimit !== undefined ? styles.line.miterLimit : this.styles.line.miterLimit;
                this.context.setLineDash(styles.line.lineDash);
                this.context.lineDashOffset = styles.line.lineDashOffset !== undefined ? styles.line.lineDashOffset : this.styles.line.lineDashOffset;
            }
            if (styles.text !== undefined) {
                this.context.font = styles.text.font !== undefined ? styles.text.font : this.styles.text.font;
                this.context.textAlign = styles.text.textAlign !== undefined ? styles.text.textAlign : this.styles.text.textAlign;
                this.context.textBaseline = styles.text.textBaseline !== undefined ? styles.text.textBaseline : this.styles.text.textBaseline;
                this.context.direction = styles.text.direction !== undefined ? styles.text.direction : this.styles.text.direction;
            }
            if (styles.fill !== undefined) {
                this.context.fillStyle = styles.fill !== undefined ? styles.fill : this.styles.fill;
            }
            if (styles.stroke !== undefined) {
                this.context.strokeStyle = styles.stroke !== undefined ? styles.stroke : this.styles.stroke;
            }
        }

        let output = fn();

        // Restore the default state
        this.context.restore();

        return output;
    }

    /** Sets all pixels in the rectangle relitive to the map to transparent black, erasing any previously drawn content. */
    public clearMapRect(rectangle: Rectangle) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.clearRect(maprect);
    }
    /** Sets all pixels in the rectangle to transparent black, erasing any previously drawn content. */
    public clearRect(rectangle: Rectangle) {
        this.context.clearRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }

    /** Draws a filled rectangle relitive to the map with the given styles */
    public fillMapRect(rectangle: Rectangle, fill?: IFillStyles) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.fillRect(maprect, fill);
    }
    /** Draws a filled rectangle with the given styles */
    public fillRect(rectangle: Rectangle, fill?: IFillStyles) {
        this.runWithStyles(() =>
            this.context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height),
            { fill }
        );
    }
    /** Paints a rectangle relitive to the map onto the canvas, using the current stroke style. */
    public strokeMapRect(rectangle: Rectangle, stroke?: IStrokeStyles) {
        let maprect = this.camera.mapToScreenRect(rectangle);
        this.strokeRect(maprect, stroke);
    }
    /** Paints a rectangle onto the canvas, using the current stroke style. */
    public strokeRect(rectangle: Rectangle, stroke?: IStrokeStyles) {
        this.runWithStyles(() =>
            this.context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height),
            { stroke }
        );
    }

    /** Draws (fills) a given text at the given position on the map. */
    public fillMapText(string: string, point: Vector2, text?: ITextStyles, fill?: IStrokeStyles) {
        let mapPoint = this.camera.mapToScreenPos(point);
        this.fillText(string, mapPoint, text, fill);
    }
    /** Draws (fills) a given text at the given position. */
    public fillText(string: string, point: Vector2, text?: ITextStyles, fill?: IStrokeStyles) {
        this.runWithStyles(() =>
            this.context.fillText(string, point.x, point.y),
            { fill, text }
        );
    }

    /** Paints a rectangle onto the canvas, using the current stroke style. */
    public strokeMapText(string: string, point: Vector2, text?: ITextStyles, stroke?: IStrokeStyles) {
        let mapPoint = this.camera.mapToScreenPos(point);
        this.strokeText(string, mapPoint, text, stroke);
    }
    /** Paints a rectangle onto the canvas, using the current stroke style. */
    public strokeText(string: string, point: Vector2, text?: ITextStyles, stroke?: IStrokeStyles) {
        this.runWithStyles(() =>
            this.context.strokeText(string, point.x, point.y),
            { stroke, text }
        );
    }

    /** Measure a given string with the given styles */
    public measureText(string: string, text?: ITextStyles): number {
        // Measure the text
        return this.runWithStyles(() =>
            this.context.measureText(string),
            { text }
        ).width;
    }

    // EVENTS
    public addClickHandler(shape: Shape, handler: EventListener) {
        this.canvas.addEventListener("click", (e) => {
            let position = new Vector2(e.x, e.y);

            if (shape.includes(position)) {
                handler(e);
            }
        });
    }

    public addHoverHandler(shape: Shape, handler: EventListener) {
        this.canvas.addEventListener("mousemove", (e) => {
            let position = new Vector2(e.x, e.y);

            if (shape.includes(position)) {
                handler(e);
            }
        });
    }
}