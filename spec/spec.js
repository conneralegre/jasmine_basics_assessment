var code = require('./../grader.js');

describe("letterGrader()", function() {
  it("turns a number grade into a letter", function() {
    expect(code.letterGrader(93)).toEqual("A");
    expect(code.letterGrader(85)).toEqual("B");
  });
});
describe("averageScore()", function() {
  it("gets the average number in an array", function() {
    expect(code.averageScore([39, 30, 21, 33, 95])).toEqual(43);
    expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
    expect(code.averageScore([284, 481, 48, 28, 1, 84])).toEqual(154);
  });
});
describe("median()", function() {
  it("finds the median number", function() {
    expect(code.median([1, 2, 3, 5, 7])).toEqual(3);
    expect(code.median([1, 7, 8, 3, 43])).toEqual(7);
    expect(code.median([52, 80, 80, 86, 94])).toEqual(80);
  });
});
describe("mode()", function() {
  it("finds the mode in an array", function() {
    expect(code.mode([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual([92]);
    expect(code.mode([77, 38, 92, 37, 41, 59, 9, 17, 77, 12, 13, 77])).toEqual([77]);
    expect(code.mode([38, 29, 30, 12, 30, 12, 77, 9])).toEqual([12, 30]);
    expect(code.mode([38, 29, 30, 35, 30, 35, 77, 9, 77])).toEqual([30, 35, 77]);
  });
});
