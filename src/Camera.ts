import Rectangle from "./math/Rectangle";

export default class Camera {
    public rectangle: Rectangle;

    // TODO: zoom
    constructor(size: Rectangle) {
        this.rectangle = size;
    }
}