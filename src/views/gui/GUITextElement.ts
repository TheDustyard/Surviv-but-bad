import Rectangle from "../../shape/Rectangle";
import Canvas from "../Canvas";
import GUI from "./GUI";
import GUIElement from "./GUIElement";
import Vector2 from "../../Vector2";

export default class GUITextElement extends GUIElement {
    constructor(position: Vector2, gui: GUI, text: string, fontsize = 12) {
        super(new Rectangle(0, fontsize, position), gui);
    }

    public draw(canvas: Canvas): void {
        canvas.
    }

    public click(): void {
    }

    public hover(): void {
    }

}