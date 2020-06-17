import Vector2 from "../../Vector2";
import Canvas, { ITextStyles } from "../Canvas";
import GUIElement from "./GUIElement";
import GUITextElement from "./GUITextElement";

export default class GUI {
    public canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
    }

    public drawElement(element: GUIElement) {
        element.draw(this.canvas);
    }

    public createTextElement(text: string, position: Vector2, styles: ITextStyles): GUITextElement {
        return new GUITextElement(position, this, text, styles);
    }
}