import Vector2 from "./Vector2";

export default class Circle {
    public position: Vector2;
    public radius: number;

    constructor(radius: number, position: Vector2) {
        this.radius = radius;
        this.position = position;
    }

    public intersects(circ: Circle) {
        return circ.position.subtract(this.position).length() < circ.radius + this.radius;
    }
}