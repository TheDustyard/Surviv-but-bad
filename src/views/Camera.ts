import Rectangle from "../shape/Rectangle";
import Vector2 from "../Vector2";

export default class Camera {
    public rectangle: Rectangle;

    // TODO: zoom
    constructor(size: Rectangle) {
        this.rectangle = size;
    }

    /** Convert map coordanants to screen coords */
    public mapToScreen(map: Vector2): Vector2 {
        return map.subtract(this.rectangle.position);
    }
}