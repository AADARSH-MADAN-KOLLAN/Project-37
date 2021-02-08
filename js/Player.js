class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.answer = null;
    }
    getCount() {
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            answer: this.answer
        });
    }
    static getPlayerInfo() {
        database.ref('players').on("value", (data) => {
            allPlayers = data.val();
        })
    }
}