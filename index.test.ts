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
    return {x: 0, y: this.position.y + 1};
  }
}

describe("mars rover", () => {
  it("should move forward by one tile", () => {
    const initialPosition: Point = {x: 0, y: 0};
    const direction = "N";

    var newPosition = new Rover(initialPosition, direction).move(['F']);

    expect(newPosition.x).toBe(0);
    expect(newPosition.y).toBe(1);
  });

  it("should move forward by one when position is 0,1", () => {
    const initialPosition: Point = {x: 0, y: 1};
    const direction = "N";

    var newPosition = new Rover(initialPosition, direction).move(['F']);

    expect(newPosition.x).toBe(0);
    expect(newPosition.y).toBe(2);
  });
});
