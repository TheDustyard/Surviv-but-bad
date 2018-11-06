import Canvas from "../Canvas";
import Shape from "../../shape/Shape";
import Vector2 from "../../Vector2";
import GUI from "./GUI";

abstract class GUIElement {
    public shape: Shape;
    public gui: GUI;

    constructor(shape: Shape, gui: GUI) {
        this.shape = shape;
        this.gui = gui;

        gui.canvas.addClickHandler(this.shape, () => this.click());
        gui.canvas.addHoverHandler(this.shape, () => this.hover());
    }

    public abstract draw(canvas: Canvas): void;
    public abstract click(): void;
    public abstract hover(): void;
}

export default GUIElement;