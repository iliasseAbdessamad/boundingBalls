export class GameArea {

    static #ctx;
    static #areaBGColor = "rgba(0, 0, 0, 0.95)";
    static #gameStarted = false;

    static welcomeTextColor;


    static init({welcomeTextColor}){
        
        GameArea.welcomeTextColor = welcomeTextColor ?? "darkred";
        

        const canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = GameArea.#areaBGColor;

        document.body.style.padding = document.body.style.margin = "0";
        document.body.style.overflow = "hidden";
        document.body.append(canvas);

        GameArea.#ctx = canvas.getContext("2d");

        window.addEventListener("resize", (e) => {
            canvas.width = e.target.innerWidth;
            canvas.height = e.target.innerHeight;

            if(!GameArea.#gameStarted){
                GameArea._printWelcomeMsg();
            }
        });

        GameArea._printWelcomeMsg();
    }

    static _printWelcomeMsg(){
        let text = "Welcome, press any key to start the game";
        let xCenter = (window.innerWidth / 2);
        let yCenter = window.innerHeight / 2
        let textSize = GameArea._getAdjustedTextSize();

        GameArea.#ctx.beginPath();
        GameArea.#ctx.fillStyle = GameArea.welcomeTextColor;
        GameArea.#ctx.textAlign = "center";
        GameArea.#ctx.font = `${textSize} Roboto`;
        
        GameArea.#ctx.fillText("Welcome, press any key to start the game", xCenter, yCenter);
    }

    static _getAdjustedTextSize(){
        let textSize = "50px";
        if(window.innerWidth < 950){
            textSize = "40px"
        }
        if(window.innerWidth <= 800){
            textSize = "35px"
        }
        if(window.innerWidth <= 700){
            textSize = "30px";
        }
        if(window.innerWidth <= 600){
            textSize = "25px";
        }
        if(window.innerWidth <= 500){
            textSize = "20px";
        }
        if(window.innerWidth <= 400){
            textSize = "15px";
        }
        if(window.innerWidth <= 300){
            textSize = "12px";
        }

        return textSize;
    }

    get ctx(){
        return GameArea.#ctx;
    }

    
}