class Map {
    constructor(tiles) {
        this.tiles = tiles;
    }

    displa() {
        let i = 0
        rectMode(CORNER);
        for (let x = 0; x < this.tiles.length; x++) {
            for (let y = 0; y < this.tiles[x).length; y++) {
                let t = TILES[this.tiles[x][y][0]];
            }
        }
    }
}
