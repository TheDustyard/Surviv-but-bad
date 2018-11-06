import Rectangle from "../../shape/Rectangle";
import Vector2 from "../../Vector2";
import GUI from "./GUI";
import GUIElement from "./GUIElement";

export default class GUITextElement extends GUIElement {

    constructor(position: Vector2, gui: GUI, text: string, fontsize = 12) {
        super(new Rectangle(0, fontsize, position), gui);
    }

    public draw(): void {
    }

    public click(): void {
    }

    public hover(): void {
    }

}