import Vector2 from "../Vector2";

abstract class Shape {
    public position: Vector2;

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

    constructor(position: Vector2) {
        this.position = position;
    }

    public abstract intersects(shape: Shape): boolean;
    public abstract includes(point: Vector2): boolean;
}

export default Shape;