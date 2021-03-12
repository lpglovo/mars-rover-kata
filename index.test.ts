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

  move(commands: string[]): Position {
    const command = commands[0];
    switch (command) {
      case "f":
        return {
          orientation: this.direction,
          point: { x: 0, y: this.position.y + 1}
        };
      case "b":
        return {
          orientation: this.direction,
          point: { x: 0, y: this.position.y - 1}
        };
      case "r":
        return {
          orientation: this.direction,
          point: { x: 0, y: this.position.y}
        };
      default:
        throw new Error("undefined command");
    }
  }
}

describe("mars rover", () => {
  it("should move forward by one tile", () => {
    const initialPosition: Point = { x: 0, y: 0};

    var newPosition = new Rover(initialPosition, "N").move(["f"]);

    expect(newPosition).toEqual({
      orientation: "N",
      point: { x: 0, y: 1 }
    });
  });

  it("should move forward by one when position is 0,1", () => {
    const initialPosition: Point = { x: 0, y: 1 };

    var newPosition = new Rover(initialPosition, "N").move(["f"]);

    expect(newPosition.point).toEqual({ x: 0, y: 2 })
  });

  it("should move forward by one when position is 0,1", () => {
    const initialPosition: Point = { x: 0, y: 1 };

    var newPosition = new Rover(initialPosition, "N").move(["b"]);

    expect(newPosition.point).toEqual({ x: 0, y: 0 })
  });

  it("should move turn right", () => {
    const initialPosition: Point = { x: 0, y: 1 };

    var newPosition = new Rover(initialPosition, "N").move(["r"]);

    expect(newPosition).toEqual({ orientation: "N", point: { x: 0, y: 1} });
  });
});
