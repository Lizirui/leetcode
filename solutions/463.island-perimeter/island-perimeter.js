/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var countX = 0 //多少个1
    var countY = 0 //多少个岛内的黑边
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                countX++
                if (grid[i][j - 1] == 1 && j >= 1) {
                    countY++
                }
                if (i >= 1 && grid[i - 1][j] == 1) {
                    countY++
                }
            }

        }
    }
    return (countX * 4) - (countY * 2)
};