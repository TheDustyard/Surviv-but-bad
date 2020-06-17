import Shape from "../../shape/Shape";
import Canvas from "../Canvas";
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

    public get position() {
        return this.shape.position;
    }

    public get x() {
        return this.position.x;
    }
    public set x(value) {
        this.position.x = value;
    }

    public get y() {
        return this.position.y;
    }
    public set y(value) {
        this.position.y = value;
    }

    public abstract draw(canvas: Canvas): void;
    public abstract click(): void;
    public abstract hover(): void;
}

export default GUIElement;