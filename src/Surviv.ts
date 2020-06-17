import Game from "./engine/Game";
import Rectangle from "./engine/shape/Rectangle";
import Vector2 from "./engine/Vector2";

export class Surviv extends Game {
    public init(deltat: number): void {
        // throw new Error("Method not implemented.");
    }
    public draw(deltat: number): void {
        this.canvas.fillMapRect(new Rectangle(100, 100, Vector2.zero), "red");

        this.canvas.fillText("hello", new Vector2(10, 0), {
            fontSize: 50
        });
    }

    public update(deltat: number): void {
        // throw new Error("Method not implemented.");
    }
}