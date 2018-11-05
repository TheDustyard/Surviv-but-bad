import Vector2 from "./Vector2";

export default class Rectangle {
    public position: Vector2;
    public width: number;
    public height: number;

    public get top() {
        return this.position.y;
    }
    public set top(value) {
        this.position.y = value;
    }

    public get left() {
        return this.position.x;
    }
    public set left(value) {
        this.position.x = value;
    }

    public get bottom() {
        return this.position.y + this.height;
    }
    public set bottom(value) {
        this.position.y = value - this.height;
    }

    public get right() {
        return this.position.y + this.width;
    }
    public set right(value) {
        this.position.x = value - this.width;
    }

    constructor(width: number, height: number, position: Vector2) {
        this.width = width;
        this.height = height;
        this.position = position;
    }

    public intersects(rect: Rectangle) {
        return !(
            ((this.top + this.height) < (rect.top)) ||
            (this.top > (rect.top + rect.height)) ||
            ((this.left + this.width) < rect.left) ||
            (this.left > (rect.left + rect.width))
        );
    }
}