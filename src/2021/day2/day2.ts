// https://adventofcode.com/2021/day/2

const movements = 'forward 1\n' +
    'down 9\n' +
    'down 4\n' +
    'forward 4\n' +
    'down 2\n' +
    'down 7\n' +
    'up 9\n' +
    'down 5\n' +
    'forward 9\n' +
    'forward 9\n' +
    'down 2\n' +
    'forward 7\n' +
    'forward 9\n' +
    'down 5\n' +
    'down 2\n' +
    'up 9\n' +
    'down 7\n' +
    'forward 6\n' +
    'down 6\n' +
    'down 6\n' +
    'up 1\n' +
    'down 2\n' +
    'forward 8\n' +
    'forward 8\n' +
    'forward 9\n' +
    'up 1\n' +
    'forward 4\n' +
    'up 1\n' +
    'forward 3\n' +
    'forward 5\n' +
    'up 3\n' +
    'up 7\n' +
    'down 4\n' +
    'down 1\n' +
    'forward 3\n' +
    'forward 4\n' +
    'up 3\n' +
    'forward 9\n' +
    'down 2\n' +
    'forward 5\n' +
    'up 2\n' +
    'up 1\n' +
    'up 5\n' +
    'forward 1\n' +
    'up 9\n' +
    'forward 6\n' +
    'up 4\n' +
    'down 4\n' +
    'forward 3\n' +
    'up 7\n' +
    'down 1\n' +
    'down 1\n' +
    'down 8\n' +
    'forward 3\n' +
    'forward 1\n' +
    'up 7\n' +
    'up 1\n' +
    'down 4\n' +
    'up 6\n' +
    'down 6\n' +
    'forward 8\n' +
    'down 3\n' +
    'down 9\n' +
    'down 6\n' +
    'up 8\n' +
    'forward 8\n' +
    'down 9\n' +
    'up 7\n' +
    'down 7\n' +
    'forward 8\n' +
    'down 8\n' +
    'up 6\n' +
    'down 7\n' +
    'down 4\n' +
    'up 7\n' +
    'forward 7\n' +
    'forward 7\n' +
    'forward 2\n' +
    'forward 5\n' +
    'down 5\n' +
    'down 9\n' +
    'down 8\n' +
    'down 5\n' +
    'up 3\n' +
    'down 3\n' +
    'down 6\n' +
    'down 6\n' +
    'forward 1\n' +
    'down 2\n' +
    'forward 2\n' +
    'down 5\n' +
    'up 2\n' +
    'forward 5\n' +
    'down 1\n' +
    'down 3\n' +
    'forward 4\n' +
    'down 2\n' +
    'forward 8\n' +
    'down 6\n' +
    'forward 3\n' +
    'forward 3\n' +
    'forward 9\n' +
    'down 9\n' +
    'down 4\n' +
    'down 8\n' +
    'down 7\n' +
    'down 3\n' +
    'up 6\n' +
    'down 7\n' +
    'forward 9\n' +
    'up 9\n' +
    'down 8\n' +
    'forward 9\n' +
    'forward 8\n' +
    'down 2\n' +
    'up 4\n' +
    'forward 8\n' +
    'up 7\n' +
    'down 2\n' +
    'forward 6\n' +
    'forward 7\n' +
    'down 5\n' +
    'up 4\n' +
    'down 3\n' +
    'down 3\n' +
    'down 5\n' +
    'down 2\n' +
    'down 5\n' +
    'forward 8\n' +
    'forward 8\n' +
    'down 5\n' +
    'up 4\n' +
    'down 6\n' +
    'forward 5\n' +
    'up 6\n' +
    'up 5\n' +
    'down 4\n' +
    'forward 7\n' +
    'forward 5\n' +
    'down 7\n' +
    'up 9\n' +
    'up 4\n' +
    'up 9\n' +
    'forward 8\n' +
    'down 8\n' +
    'down 8\n' +
    'down 2\n' +
    'down 8\n' +
    'down 8\n' +
    'up 6\n' +
    'forward 2\n' +
    'down 9\n' +
    'forward 5\n' +
    'forward 4\n' +
    'down 8\n' +
    'up 5\n' +
    'forward 3\n' +
    'forward 1\n' +
    'down 6\n' +
    'forward 9\n' +
    'forward 2\n' +
    'forward 1\n' +
    'up 5\n' +
    'down 2\n' +
    'forward 5\n' +
    'up 6\n' +
    'up 6\n' +
    'forward 9\n' +
    'up 3\n' +
    'forward 2\n' +
    'forward 9\n' +
    'down 9\n' +
    'down 5\n' +
    'up 4\n' +
    'up 7\n' +
    'up 8\n' +
    'forward 4\n' +
    'forward 3\n' +
    'down 7\n' +
    'down 5\n' +
    'forward 5\n' +
    'down 6\n' +
    'forward 9\n' +
    'up 4\n' +
    'up 6\n' +
    'down 2\n' +
    'forward 6\n' +
    'forward 7\n' +
    'up 9\n' +
    'up 5\n' +
    'down 4\n' +
    'up 5\n' +
    'down 2\n' +
    'forward 4\n' +
    'up 9\n' +
    'down 1\n' +
    'forward 7\n' +
    'down 9\n' +
    'forward 5\n' +
    'down 5\n' +
    'down 2\n' +
    'up 4\n' +
    'up 8\n' +
    'down 8\n' +
    'down 7\n' +
    'up 7\n' +
    'down 1\n' +
    'forward 5\n' +
    'forward 8\n' +
    'down 2\n' +
    'down 1\n' +
    'forward 8\n' +
    'down 7\n' +
    'up 6\n' +
    'forward 9\n' +
    'forward 4\n' +
    'down 8\n' +
    'forward 1\n' +
    'up 8\n' +
    'forward 3\n' +
    'up 4\n' +
    'forward 9\n' +
    'down 6\n' +
    'forward 5\n' +
    'forward 1\n' +
    'forward 8\n' +
    'forward 5\n' +
    'forward 8\n' +
    'down 4\n' +
    'forward 8\n' +
    'forward 2\n' +
    'forward 8\n' +
    'forward 3\n' +
    'down 3\n' +
    'forward 6\n' +
    'up 6\n' +
    'up 9\n' +
    'down 4\n' +
    'down 6\n' +
    'forward 6\n' +
    'down 9\n' +
    'up 2\n' +
    'down 8\n' +
    'down 6\n' +
    'down 1\n' +
    'forward 1\n' +
    'down 2\n' +
    'down 3\n' +
    'forward 5\n' +
    'forward 6\n' +
    'down 5\n' +
    'up 7\n' +
    'up 2\n' +
    'forward 2\n' +
    'down 4\n' +
    'down 4\n' +
    'forward 3\n' +
    'down 4\n' +
    'up 4\n' +
    'forward 1\n' +
    'down 4\n' +
    'forward 9\n' +
    'forward 7\n' +
    'forward 6\n' +
    'down 3\n' +
    'down 4\n' +
    'forward 3\n' +
    'forward 3\n' +
    'forward 3\n' +
    'up 6\n' +
    'forward 4\n' +
    'forward 7\n' +
    'forward 3\n' +
    'forward 5\n' +
    'forward 7\n' +
    'forward 4\n' +
    'down 1\n' +
    'up 2\n' +
    'up 7\n' +
    'forward 4\n' +
    'down 2\n' +
    'forward 2\n' +
    'up 7\n' +
    'down 7\n' +
    'forward 5\n' +
    'forward 9\n' +
    'down 8\n' +
    'forward 5\n' +
    'forward 5\n' +
    'down 9\n' +
    'forward 1\n' +
    'forward 6\n' +
    'down 2\n' +
    'down 3\n' +
    'down 1\n' +
    'down 7\n' +
    'down 3\n' +
    'up 3\n' +
    'down 3\n' +
    'forward 5\n' +
    'down 4\n' +
    'forward 6\n' +
    'forward 2\n' +
    'down 4\n' +
    'forward 4\n' +
    'up 5\n' +
    'up 3\n' +
    'forward 2\n' +
    'forward 5\n' +
    'down 7\n' +
    'up 9\n' +
    'up 5\n' +
    'down 3\n' +
    'forward 8\n' +
    'forward 4\n' +
    'down 8\n' +
    'up 4\n' +
    'forward 8\n' +
    'forward 7\n' +
    'forward 1\n' +
    'down 2\n' +
    'down 6\n' +
    'up 7\n' +
    'forward 9\n' +
    'down 2\n' +
    'down 4\n' +
    'down 3\n' +
    'down 8\n' +
    'up 4\n' +
    'down 2\n' +
    'up 3\n' +
    'forward 1\n' +
    'down 2\n' +
    'up 6\n' +
    'down 9\n' +
    'up 3\n' +
    'down 1\n' +
    'down 1\n' +
    'forward 4\n' +
    'down 2\n' +
    'forward 3\n' +
    'forward 5\n' +
    'forward 7\n' +
    'down 7\n' +
    'up 3\n' +
    'up 5\n' +
    'down 1\n' +
    'down 2\n' +
    'forward 4\n' +
    'down 1\n' +
    'down 1\n' +
    'down 7\n' +
    'up 4\n' +
    'forward 3\n' +
    'down 3\n' +
    'forward 2\n' +
    'down 3\n' +
    'up 7\n' +
    'down 1\n' +
    'up 5\n' +
    'down 7\n' +
    'forward 4\n' +
    'up 2\n' +
    'forward 5\n' +
    'up 4\n' +
    'down 4\n' +
    'down 3\n' +
    'forward 1\n' +
    'up 9\n' +
    'down 5\n' +
    'forward 9\n' +
    'forward 1\n' +
    'down 7\n' +
    'down 2\n' +
    'down 4\n' +
    'down 2\n' +
    'forward 3\n' +
    'down 1\n' +
    'down 2\n' +
    'up 9\n' +
    'forward 2\n' +
    'down 8\n' +
    'forward 1\n' +
    'forward 3\n' +
    'down 5\n' +
    'down 4\n' +
    'forward 2\n' +
    'forward 8\n' +
    'forward 9\n' +
    'down 9\n' +
    'down 6\n' +
    'up 3\n' +
    'forward 1\n' +
    'down 6\n' +
    'down 7\n' +
    'up 3\n' +
    'forward 9\n' +
    'down 2\n' +
    'up 4\n' +
    'forward 3\n' +
    'forward 6\n' +
    'forward 6\n' +
    'down 7\n' +
    'forward 7\n' +
    'forward 6\n' +
    'down 7\n' +
    'up 9\n' +
    'forward 7\n' +
    'down 1\n' +
    'down 8\n' +
    'down 2\n' +
    'down 2\n' +
    'down 9\n' +
    'down 6\n' +
    'forward 1\n' +
    'down 9\n' +
    'forward 9\n' +
    'forward 8\n' +
    'forward 6\n' +
    'forward 9\n' +
    'down 5\n' +
    'forward 9\n' +
    'forward 4\n' +
    'forward 4\n' +
    'down 6\n' +
    'forward 6\n' +
    'forward 5\n' +
    'forward 7\n' +
    'down 7\n' +
    'down 9\n' +
    'forward 4\n' +
    'down 9\n' +
    'up 5\n' +
    'forward 6\n' +
    'down 6\n' +
    'forward 9\n' +
    'up 7\n' +
    'forward 6\n' +
    'up 6\n' +
    'up 9\n' +
    'forward 9\n' +
    'up 4\n' +
    'down 3\n' +
    'up 9\n' +
    'down 8\n' +
    'down 2\n' +
    'forward 4\n' +
    'down 8\n' +
    'down 2\n' +
    'forward 2\n' +
    'down 5\n' +
    'up 3\n' +
    'down 1\n' +
    'forward 4\n' +
    'down 3\n' +
    'forward 3\n' +
    'down 9\n' +
    'forward 6\n' +
    'forward 6\n' +
    'down 9\n' +
    'forward 6\n' +
    'forward 1\n' +
    'down 5\n' +
    'up 1\n' +
    'forward 3\n' +
    'forward 1\n' +
    'forward 5\n' +
    'down 8\n' +
    'forward 7\n' +
    'forward 2\n' +
    'up 3\n' +
    'forward 8\n' +
    'forward 1\n' +
    'forward 7\n' +
    'down 1\n' +
    'down 4\n' +
    'forward 7\n' +
    'forward 9\n' +
    'forward 4\n' +
    'down 2\n' +
    'forward 5\n' +
    'forward 3\n' +
    'forward 9\n' +
    'forward 3\n' +
    'up 3\n' +
    'forward 9\n' +
    'down 3\n' +
    'forward 9\n' +
    'forward 3\n' +
    'forward 7\n' +
    'down 5\n' +
    'forward 6\n' +
    'down 6\n' +
    'forward 5\n' +
    'forward 1\n' +
    'down 1\n' +
    'forward 8\n' +
    'down 3\n' +
    'up 1\n' +
    'down 6\n' +
    'forward 7\n' +
    'up 5\n' +
    'up 7\n' +
    'down 3\n' +
    'forward 8\n' +
    'up 8\n' +
    'down 4\n' +
    'up 6\n' +
    'up 7\n' +
    'forward 1\n' +
    'forward 2\n' +
    'forward 7\n' +
    'down 1\n' +
    'forward 4\n' +
    'down 8\n' +
    'up 6\n' +
    'up 7\n' +
    'up 4\n' +
    'down 7\n' +
    'down 8\n' +
    'down 6\n' +
    'forward 5\n' +
    'forward 9\n' +
    'down 7\n' +
    'forward 8\n' +
    'down 9\n' +
    'down 9\n' +
    'forward 5\n' +
    'forward 2\n' +
    'up 4\n' +
    'down 2\n' +
    'forward 3\n' +
    'down 2\n' +
    'forward 1\n' +
    'down 7\n' +
    'down 6\n' +
    'forward 5\n' +
    'up 2\n' +
    'forward 4\n' +
    'down 4\n' +
    'forward 5\n' +
    'forward 7\n' +
    'up 5\n' +
    'down 7\n' +
    'forward 9\n' +
    'forward 3\n' +
    'forward 6\n' +
    'up 8\n' +
    'down 9\n' +
    'forward 1\n' +
    'up 8\n' +
    'forward 3\n' +
    'down 6\n' +
    'down 1\n' +
    'down 3\n' +
    'down 4\n' +
    'up 2\n' +
    'up 3\n' +
    'forward 8\n' +
    'up 7\n' +
    'down 2\n' +
    'forward 1\n' +
    'down 6\n' +
    'forward 1\n' +
    'down 8\n' +
    'forward 3\n' +
    'forward 5\n' +
    'forward 5\n' +
    'up 5\n' +
    'forward 4\n' +
    'forward 6\n' +
    'down 8\n' +
    'up 7\n' +
    'forward 8\n' +
    'up 6\n' +
    'forward 5\n' +
    'down 4\n' +
    'forward 8\n' +
    'down 3\n' +
    'forward 7\n' +
    'forward 9\n' +
    'forward 8\n' +
    'up 9\n' +
    'forward 4\n' +
    'up 5\n' +
    'up 8\n' +
    'down 8\n' +
    'forward 1\n' +
    'down 1\n' +
    'forward 3\n' +
    'forward 9\n' +
    'down 9\n' +
    'up 2\n' +
    'forward 5\n' +
    'down 1\n' +
    'down 6\n' +
    'forward 2\n' +
    'forward 2\n' +
    'down 2\n' +
    'down 8\n' +
    'forward 5\n' +
    'up 2\n' +
    'up 2\n' +
    'forward 3\n' +
    'down 6\n' +
    'up 2\n' +
    'down 2\n' +
    'down 1\n' +
    'up 9\n' +
    'forward 6\n' +
    'up 4\n' +
    'forward 4\n' +
    'down 2\n' +
    'forward 8\n' +
    'up 9\n' +
    'down 1\n' +
    'forward 9\n' +
    'up 3\n' +
    'up 7\n' +
    'forward 5\n' +
    'down 9\n' +
    'down 2\n' +
    'down 5\n' +
    'up 4\n' +
    'up 8\n' +
    'up 2\n' +
    'down 1\n' +
    'up 4\n' +
    'forward 8\n' +
    'forward 2\n' +
    'down 8\n' +
    'forward 9\n' +
    'forward 1\n' +
    'down 5\n' +
    'forward 3\n' +
    'down 6\n' +
    'forward 3\n' +
    'up 2\n' +
    'down 9\n' +
    'down 6\n' +
    'down 4\n' +
    'down 9\n' +
    'down 8\n' +
    'forward 2\n' +
    'forward 7\n' +
    'up 4\n' +
    'forward 8\n' +
    'up 9\n' +
    'up 6\n' +
    'forward 2\n' +
    'down 1\n' +
    'down 5\n' +
    'down 5\n' +
    'down 3\n' +
    'up 9\n' +
    'up 9\n' +
    'forward 9\n' +
    'forward 5\n' +
    'down 1\n' +
    'down 3\n' +
    'down 8\n' +
    'down 4\n' +
    'forward 5\n' +
    'up 4\n' +
    'down 2\n' +
    'down 5\n' +
    'down 4\n' +
    'down 8\n' +
    'down 2\n' +
    'forward 9\n' +
    'forward 7\n' +
    'up 9\n' +
    'forward 8\n' +
    'down 9\n' +
    'down 2\n' +
    'forward 5\n' +
    'down 9\n' +
    'forward 7\n' +
    'down 2\n' +
    'down 9\n' +
    'forward 4\n' +
    'up 7\n' +
    'down 9\n' +
    'forward 6\n' +
    'forward 2\n' +
    'down 1\n' +
    'down 9\n' +
    'down 3\n' +
    'down 7\n' +
    'down 8\n' +
    'down 5\n' +
    'down 9\n' +
    'down 1\n' +
    'up 9\n' +
    'down 7\n' +
    'forward 7\n' +
    'up 4\n' +
    'down 2\n' +
    'down 4\n' +
    'forward 6\n' +
    'forward 8\n' +
    'forward 1\n' +
    'forward 2\n' +
    'up 2\n' +
    'up 2\n' +
    'forward 9\n' +
    'down 9\n' +
    'forward 8\n' +
    'forward 6\n' +
    'forward 5\n' +
    'down 2\n' +
    'forward 7\n' +
    'up 3\n' +
    'up 8\n' +
    'forward 1\n' +
    'forward 5\n' +
    'down 7\n' +
    'down 7\n' +
    'forward 5\n' +
    'down 1\n' +
    'up 3\n' +
    'up 8\n' +
    'forward 5\n' +
    'forward 7\n' +
    'forward 3\n' +
    'down 6\n' +
    'up 7\n' +
    'forward 8\n' +
    'down 5\n' +
    'up 3\n' +
    'forward 7\n' +
    'down 2\n' +
    'down 1\n' +
    'down 1\n' +
    'forward 1\n' +
    'down 1\n' +
    'down 8\n' +
    'down 3\n' +
    'up 1\n' +
    'forward 8\n' +
    'forward 9\n' +
    'forward 5\n' +
    'forward 8\n' +
    'down 2\n' +
    'forward 3\n' +
    'down 5\n' +
    'up 9\n' +
    'down 9\n' +
    'down 5\n' +
    'forward 1\n' +
    'up 9\n' +
    'up 4\n' +
    'up 7\n' +
    'up 9\n' +
    'up 4\n' +
    'down 2\n' +
    'forward 6\n' +
    'forward 4\n' +
    'up 5\n' +
    'up 6\n' +
    'down 8\n' +
    'down 6\n' +
    'down 6\n' +
    'up 3\n' +
    'forward 3\n' +
    'down 9\n' +
    'down 5\n' +
    'down 5\n' +
    'forward 7\n' +
    'down 6\n' +
    'forward 7\n' +
    'down 9\n' +
    'down 8\n' +
    'down 3\n' +
    'down 7\n' +
    'down 4\n' +
    'down 1\n' +
    'forward 6\n' +
    'up 7\n' +
    'down 1\n' +
    'forward 7\n' +
    'down 2\n' +
    'forward 4\n' +
    'down 3\n' +
    'forward 6\n' +
    'up 7\n' +
    'forward 3\n' +
    'down 3\n' +
    'up 6\n' +
    'down 2\n' +
    'down 4\n' +
    'down 8\n' +
    'forward 6\n' +
    'down 4\n' +
    'forward 7\n' +
    'down 2\n' +
    'forward 9\n' +
    'down 3\n' +
    'down 6\n' +
    'down 3\n' +
    'down 6\n' +
    'forward 4\n' +
    'down 8\n' +
    'up 5\n' +
    'down 6\n' +
    'forward 6\n' +
    'down 6\n' +
    'forward 9\n' +
    'up 8\n' +
    'down 7\n' +
    'up 1\n' +
    'forward 4\n' +
    'up 3\n' +
    'forward 9\n' +
    'up 6\n' +
    'forward 4\n' +
    'up 8\n' +
    'forward 2\n' +
    'down 7\n' +
    'down 7\n' +
    'forward 1\n' +
    'up 9\n' +
    'up 7\n' +
    'forward 3\n' +
    'down 1\n' +
    'up 5\n' +
    'forward 3\n' +
    'forward 1\n' +
    'forward 3\n' +
    'forward 7\n' +
    'down 6\n' +
    'down 1\n' +
    'forward 9\n' +
    'up 1\n' +
    'up 1\n' +
    'down 8\n' +
    'down 7\n' +
    'forward 1\n' +
    'up 8\n' +
    'up 6\n' +
    'down 8\n' +
    'forward 1\n' +
    'up 3\n' +
    'down 7\n' +
    'forward 7\n' +
    'down 7\n' +
    'forward 4\n' +
    'forward 6\n' +
    'up 2\n' +
    'down 9\n' +
    'forward 9\n' +
    'down 4\n' +
    'up 2\n' +
    'forward 7\n' +
    'forward 4\n' +
    'up 8\n' +
    'up 5\n' +
    'down 8\n' +
    'forward 7\n' +
    'forward 6\n' +
    'down 1\n' +
    'up 5\n' +
    'up 5\n' +
    'down 3\n' +
    'forward 7\n' +
    'forward 1\n' +
    'forward 7\n' +
    'forward 1\n' +
    'down 3\n' +
    'forward 3\n' +
    'forward 4\n' +
    'forward 6\n' +
    'down 3\n' +
    'up 4\n' +
    'up 5\n' +
    'down 8\n' +
    'up 3\n' +
    'forward 4\n' +
    'forward 6\n' +
    'forward 8\n' +
    'forward 4\n' +
    'forward 7\n' +
    'down 9\n' +
    'up 3\n' +
    'down 1\n' +
    'up 4\n' +
    'forward 8\n' +
    'forward 5\n' +
    'forward 4\n' +
    'forward 1\n' +
    'down 2\n' +
    'down 7\n' +
    'down 6\n' +
    'forward 4\n' +
    'forward 2\n' +
    'up 2\n' +
    'down 2\n' +
    'forward 2\n' +
    'forward 2\n' +
    'up 6\n' +
    'forward 6\n' +
    'forward 1\n' +
    'forward 8\n' +
    'up 7\n' +
    'forward 4\n' +
    'forward 2\n' +
    'down 2\n' +
    'down 1\n' +
    'forward 4\n' +
    'down 4\n' +
    'up 7\n' +
    'up 2\n' +
    'up 3\n' +
    'down 5\n' +
    'forward 2\n' +
    'forward 9\n' +
    'down 2\n' +
    'down 9\n' +
    'down 4\n' +
    'down 8\n' +
    'up 9\n' +
    'up 5\n' +
    'up 2\n' +
    'forward 6\n' +
    'down 6\n' +
    'forward 9\n' +
    'forward 7\n' +
    'forward 8\n' +
    'forward 4\n' +
    'up 9\n' +
    'forward 9\n' +
    'down 8\n' +
    'down 2\n' +
    'forward 5\n' +
    'down 8\n' +
    'down 8\n' +
    'forward 8\n' +
    'forward 6\n' +
    'forward 7\n' +
    'down 8\n' +
    'forward 1\n' +
    'forward 6\n' +
    'down 4\n' +
    'forward 1\n' +
    'down 3\n' +
    'forward 1\n' +
    'down 8\n' +
    'forward 2\n' +
    'down 4\n' +
    'down 6\n' +
    'down 4\n' +
    'up 9\n' +
    'forward 6\n' +
    'up 3\n' +
    'down 7\n' +
    'forward 3\n' +
    'down 8\n' +
    'forward 6\n' +
    'forward 3\n' +
    'down 1\n' +
    'forward 1\n' +
    'up 6\n' +
    'down 1\n' +
    'down 2\n' +
    'forward 5\n' +
    'down 3\n' +
    'up 5\n' +
    'forward 6\n' +
    'forward 7\n' +
    'forward 2\n' +
    'forward 9\n' +
    'down 7\n' +
    'up 4\n' +
    'forward 6\n' +
    'forward 8\n' +
    'down 6\n' +
    'down 7\n' +
    'down 4\n' +
    'down 5\n' +
    'down 6\n' +
    'down 3\n' +
    'up 1\n' +
    'forward 2\n' +
    'forward 3\n' +
    'down 1\n' +
    'down 7\n' +
    'up 8\n' +
    'forward 1\n' +
    'forward 6\n' +
    'up 3\n' +
    'down 1\n' +
    'up 6\n' +
    'down 2\n' +
    'up 1\n' +
    'up 7\n' +
    'forward 3\n' +
    'up 8\n' +
    'forward 7\n' +
    'forward 5\n' +
    'forward 5'

export function move(movements: string) {

    const steps = movements.split('\n')
    let forward = 0
    let depth = 0
    steps.forEach(step => {
        const command = step.split(' ')[0]
        const value = step.split(' ')[1]


        if (command === 'forward') {
            forward += Number(value)
        } else if (command === 'down') {
            depth += Number(value)
        } else if (command === 'up') {
            depth -= Number(value)
        }
    })



    console.log(steps)
    console.log(depth * forward)
}

move(movements)
