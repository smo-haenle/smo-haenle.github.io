namespace L02_Blackmail {

    let chosenCharacter: string = "A";
    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
            let mail: HTMLElement = document.querySelector("div#mail");
            mail.addEventListener("click", placeCharacter);
            document.addEventListener("keydown", chooseCharacter);
    }
    function placeCharacter(_event: MouseEvent): void {
            let x: number = _event.offsetX;
            let y: number = _event.offsetY;
           
            let mail: HTMLElement = <HTMLElement> _event.target;
            let letter: HTMLSpanElement = document.createElement ("span");
            mail.appendChild(letter);
            
            letter.textContent = chosenCharacter;
            letter.style.left = x + "px";
            letter.style.top = y + "px";

            letter.addEventListener("click", deleteLetter);
        }

    function chooseCharacter(_event: KeyboardEvent): void {
            chosenCharacter = _event.key;
    }

    function deleteLetter (_event: MouseEvent): void {
            let target: Node = <Node> _event.target;
            let parent: Node = <Node> target.parentNode;
            parent.removeChild(target);
    }



    }

