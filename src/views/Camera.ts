import Rectangle from "../shape/Rectangle";
import Vector2 from "../Vector2";

export default class Camera {
    public rectangle: Rectangle;

    public get position() {
        return this.rectangle.position;
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

    // TODO: zoom
    constructor(size: Rectangle) {
        this.rectangle = size;
    }

    /** Convert map coordanants to screen coords */
    public mapToScreenPos(map: Vector2): Vector2 {
        return map.subtract(this.rectangle.position);
    }

    /** Convert map coordanants to screen coords */
    public mapToScreenRect(map: Rectangle): Rectangle {
        return new Rectangle(map.width, map.height, map.position.subtract(this.rectangle.position));
    }
}