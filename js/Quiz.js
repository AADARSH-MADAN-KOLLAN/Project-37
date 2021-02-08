class Quiz {
    constructor() {
    }
    getState() {
        database.ref('gameState').on("value", function (data) {
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            question = new Question();
            question.display();
        }
    }
    play() {
        question.hide();
        background("skyblue");
        Player.getPlayerInfo();
        if (allPlayers !== null) {
            var display_position = 260;
            for (var plr in allPlayers) {
                var correctAns = "3";
                if (correctAns === allPlayers[plr].answer)
                    fill("green");
                else
                    fill("red");
                display_position += 30;
                textFont('timesnewroman');
                textSize(20);
                text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120, display_position)
            }
        }
        console.log("Game Over. Option 3 is correct");
    }
}