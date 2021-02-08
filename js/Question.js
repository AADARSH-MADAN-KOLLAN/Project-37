class Question {
    constructor() {
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.name = createInput("Enter Name here...");
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.submit = createButton("submit")
        this.answer = createInput("Enter the correct option no.");
    }
    hide(){
        this.name.hide();
        this.submit.hide();
        this.title.html("Quiz Results");
        this.title.position(width/2 - 30, 10)
        this.answer.hide();
    }
    display() {
        this.title.html("Quiz");
        this.title.position(width / 2 - 20, 10);
        this.question.html("If Bianca's dauhter is my dauhter's mother, what am I to bianca?");
        this.question.position(width / 2 - 300, 60)
        this.name.position(width / 2 - 160, 300);
        this.option1.html("1: I am Bianca");
        this.option1.position(width / 2 - 300, 120);
        this.option2.html("2: I am Bianca's mother");
        this.option2.position(width / 2 - 300, 150);
        this.option3.html("3: I am Bianca's daughter");
        this.option3.position(width / 2 - 300, 180);
        this.option4.html("4: I am Bianca's granddaughter");
        this.option4.position(width / 2 - 300, 210);
        this.submit.position(width / 2 - 20, 350)
        this.answer.position(width /2 +15, 300)

        this.submit.mousePressed(() => {
            player.name = this.name.value();
            player.answer = this.answer.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }
}