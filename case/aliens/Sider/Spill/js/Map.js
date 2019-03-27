class Map {
    constructor(tileSheet, world,) {
        this.tileSheet = tileSheet;
        this.world = world;
        this.tilesCache = [];
    }

    render() {
        for (let index = world.map.length - 1; index > -1; index--) {
            var value = world.map[index];

            var sourceX = (value % world.columns) * tileSheet.tileWidth;
            var sourceY = floor(value / tileSheet.columns) * tileSheet.tileHeight;

            var destinationX = (index % world.columns) * tileSheet.tileWidth;
            var destinationY = floor(index / world.columns) * tileSheet.tileHeight;

            let i = this.getTileImage(sourceX, sourceY);
            image(i, destinationX, destinationY);
        }
    }

    getTileImage(sourceX, sourceY) {
        if (this.tilesCache[sourceX] && this.tilesCache[sourceX][sourceY]) {
            return this.tilesCache[sourceX][sourceY];
        }

        const tileImage = tileSheet.image.get(
            sourceX, sourceY,
            this.tileSheet.tileWidth, this.tileSheet.tileHeight);
        if (!this.tilesCache[sourceX]) this.tilesCache[sourceX] = [];
        this.tilesCache[sourceX][sourceY] = tileImage;
        return tileImage;
    }
}