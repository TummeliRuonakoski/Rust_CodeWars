export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
  return fuelLeft * mpg >= distance;
};



import {zeroFuel} from "./solution";
import {assert} from "chai";

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});
