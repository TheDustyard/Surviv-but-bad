import Rectangle from "../../shape/Rectangle";
import Vector2 from "../../Vector2";
import Canvas, { ITextStyles } from "../Canvas";
import GUI from "./GUI";
import GUIElement from "./GUIElement";

export default class GUITextElement extends GUIElement {
    public text: string;
    public styles: ITextStyles;

    constructor(position: Vector2, gui: GUI, text: string, styles: ITextStyles) {
        super(new Rectangle(0, styles.fontSize, position), gui);

        this.text = text;
        this.styles = styles;
    }

    public draw(canvas: Canvas): void {
        canvas.fillText(this.text, this.position, this.styles);
    }

    public click(): void {
        alert("h");
    }

    public hover(): void {
        alert("h");
    }

}