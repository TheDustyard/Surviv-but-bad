import Vector2 from "../Vector2";
import Shape from "./Shape";

export default class Circle extends Shape {
    public position: Vector2;
    public radius: number;

    constructor(radius: number, position: Vector2) {
        super(position);
        this.radius = radius;
    }

    public intersects(circ: Circle) {
        return circ.position.subtract(this.position).length() < circ.radius + this.radius;
    }

    public includes(point: Vector2): boolean {
        return point.subtract(this.position).length() < this.radius;
    }
}