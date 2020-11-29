var _a;
// Boolean 类型
var isDone = false;
// isDone = 123
var count = 12;
var nickName = 'jl';
var people = Symbol('pi');
var sym = Symbol();
var obj1 = (_a = {},
    _a[sym] = 'jl',
    _a);
console.log(obj1[sym]);
// array
// let listA: number[] = [1, 2, 3]
var listA = [1, 2, 3];
// Enum
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["EAST"] = 0] = "EAST";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["WEST"] = 2] = "WEST";
    Direction[Direction["NORTH"] = 3] = "NORTH";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
