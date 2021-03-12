/* input:
starting point x,y
direction: N,W,S,E
commands: string[]

output:
f, b - forward backward
l, r - left, right
*/

class Rover {
  private position: Point;
  private direction: string;
  constructor(position: Point, direction: string) {
    this.position = position;
    this.direction = direction;
  }

  move(commands: string[]) {
    const command = commands[0];
    switch (command) {
      case "f":
        return {
          x: 0,
          y: this.position.y + 1,
          orientation: this.position.orientation,
        };
      case "b":
        return {
          x: 0,
          y: this.position.y - 1,
          orientation: this.position.orientation,
        };
      case "r":
        return {
          x: 0,
          y: this.position.y,
          orientation: this.position.orientation,
        };
      default:
        throw new Error("undefined command");
    }
  }
}

describe("mars rover", () => {
  it("should move forward by one tile", () => {
    const initialPosition: Point = { x: 0, y: 0, orientation: "N" };

    var newPosition = new Rover(initialPosition, "N").move(["f"]);

    expect(newPosition).toEqual({
      x: 0,
      y: 1,
      orientation: "N",
    });
  });

  it("should move forward by one when position is 0,1", () => {
    const initialPosition: Point = { x: 0, y: 1, orientation: "N" };

    var newPosition = new Rover(initialPosition, "N").move(["f"]);

    expect(newPosition.x).toBe(0);
    expect(newPosition.y).toBe(2);
  });

  it("should move forward by one when position is 0,1", () => {
    const initialPosition: Point = { x: 0, y: 1, orientation: "N" };

    var newPosition = new Rover(initialPosition, "N").move(["b"]);

    expect(newPosition.x).toBe(0);
    expect(newPosition.y).toBe(0);
  });

  it("should move turn right", () => {
    const initialPosition: Point = { x: 0, y: 1, orientation: "N" };

    var newPosition = new Rover(initialPosition, "N").move(["r"]);

    expect(newPosition).toEqual({ x: 0, y: 1, orientation: "N" });
  });
});
