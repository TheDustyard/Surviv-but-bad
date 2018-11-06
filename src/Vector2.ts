export default class Vector2 {
    public x: number;
    public y: number;

    constructor(x: number, y?: number) {
        if (y === undefined) {
            this.x = x;
            this.y = y;
        } else {
            this.x = x;
            this.y = y;
        }
    }

    public static readonly one = new Vector2(1, 1);
    public static readonly zero = new Vector2(0, 0);
    public static readonly unitX = new Vector2(1, 0);
    public static readonly unitY = new Vector2(0, 1);

    public add(vector: Vector2) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    public subtract(vector: Vector2) {
        return new Vector2(this.x - vector.x, this.y -= vector.y);
    }

    public multiply(vector: Vector2) {
        return new Vector2(this.x * vector.x, this.y * vector.y);
    }

    public divide(vector: Vector2) {
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }

    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize() {
        let length = this.length();

        if (length === 0) {
            return Vector2.unitX;
        } else {
            return this.divide(new Vector2(length, length));
        }
    }
}