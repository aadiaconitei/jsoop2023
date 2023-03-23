class TowersOfHanoi {
    constructor(discs, towerEls, solveBtn, restartBtn) {
        this.discs = discs;
        this.towerEls = towerEls;
        this.solveBtn = solveBtn;
        this.restartBtn = restartBtn;

        this.bindFunctions();
        this.initGame();
    }

    bindFunctions() {
        this.handleSolveFunc = this.handleSolve.bind(this);
        this.initGameFunc = this.initGame.bind(this);
        this.handleDiscClickFunc = this.handleDiscClick.bind(this);
    }

    initGame() {
        this.backtrackState = [];
        this.holdTower = null;
        this.moves = 0;
        this.movesHistory = []; // records users steps
        this.start = null; // animation

        this.initButtons();
        this.initTowers();

        this.drawTowers();
        this.displayMessage(
            "Scopul acestui joc este de a muta piesele din partea stângă pe tija din partea dreaptă. O mutare constă în deplasarea unei piese pe o altă tijă, cu condiţia ca în locul destinaţie ea să fie cea mai mică"
        );
    }

    initButtons(onlyRestart = false) {
        this.restartBtn.classList.add("clickable");
        this.restartBtn.addEventListener("click", this.initGameFunc);

        if (!onlyRestart) {
            this.solveBtn.classList.add("clickable");
            this.solveBtn.addEventListener("click", this.handleSolveFunc);
        }
    }

    initTowers() {
        this.towers = [[], [], []];

        for (let i = this.discs; i > 0; i--) {
            this.towers[0].push(i);
        }

        this.voidTowers();
        this.towerEls.forEach(towerEl => {
            towerEl.classList.add("clickable");
            towerEl.addEventListener("click", this.handleDiscClickFunc)
        });

        this.toString();
    }

    voidButtons() {
        this.solveBtn.classList.remove("clickable");
        this.solveBtn.removeEventListener("click", this.handleSolveFunc);
        this.restartBtn.classList.remove("clickable");
        this.restartBtn.removeEventListener("click", this.initGameFunc);
    }

    voidTowers() {
        this.towerEls.forEach(towerEl => {
            towerEl.removeEventListener("click", this.handleDiscClickFunc);
            towerEl.classList.remove("clickable");
        });
    }



    handleDiscClick(e) {
        const clickedElement =
            e.target.nodeName === "LI" ? e.target.parentNode : e.target;
        const clickedTower = clickedElement.dataset.tower;

        if (!this.holdTower) {

            if (this.isTowerEmpty(this.towers[clickedTower])) {
                return false;
            }

            this.holdTower = clickedTower;
            this.highlightHoldDisc(true);
            return true;

        } else {

            this.highlightHoldDisc(false);

        }

        const validMove = this.isDiscMoveValid(this.holdTower, clickedTower);

        if (!validMove) {
            const message = (validMove !== undefined)
                ? `Mutare incorecta`
                : `${this.moves} ${this.moves > 1 ? "Miscari" : "Miscare"}`;

            this.displayMessage(message);

            this.holdTower = null;
            return false;
        }

        this.executeUserMove(this.holdTower, clickedTower);

        if (this.isSolved()) {
            this.postWinCleanUp(`Ai castigat cu ${this.moves} miscari!`);
        }
    }

    executeUserMove(fromTower, toTower) {
        const fromIdx = parseInt(fromTower);
        const toIdx = parseInt(toTower);

        this.moveDisc(fromIdx, toIdx);
        this.moves += 1;
        this.movesHistory.push([fromIdx, toIdx]);


        this.drawTowers();
        this.displayMessage(`${this.moves} ${this.moves > 1 ? "Miscari" : "Miscare"}`);

        this.holdTower = null;
    }

    highlightHoldDisc(toggle) {
        const targetDiscEl = this.towerEls[this.holdTower].lastChild;
        targetDiscEl.style.backgroundColor = toggle ? "black" : "white";
    }



    // start of a mess of an area
    async handleSolve() {
        this.voidButtons();

        this.displayMessage("Rezolvat...");
        let solved;

        if (!this.moves) {
            solved = this.solve(this.discs, 0, 1, 2);

            solved.then(() => {
                this.postWinCleanUp("Nu a fost simplu?");
            });
        } else {
            solved = this.backtrack();
        }
    }

    async backtrack() {
        this.saveTowersOrder();

        this.displayMessage("Rezolvat...");
        const solved = this.solve(this.discs, 0, 1, 2);

        solved.then(async (value) => {
            if (value) {
                this.postWinCleanUp(`Rezolvat din ${this.moves} miscari + putin ajutor`);
                return true;
            }

            this.displayMessage("Punct mort - întoarcere...");

            const prevState = this.backtrackState;
            this.restoreTowersOrder(prevState);
            this.drawTowers();

            const prevMove = this.movesHistory.pop();
            await this.animateMovingDiscs(prevMove[1], prevMove[0], 500);

            this.backtrack();
        });
    }
    // end of a mess of an area

    async solve(t, a, b, c) {
        if (t === 1) {
            await this.animateMovingDiscs(a, c, 500);
        } else {
            await this.solve(t - 1, a, c, b);
            await this.solve(1, a, b, c);
            await this.solve(t - 1, b, a, c);
        }

        return this.isSolved();
    }

    moveDisc(fromIdx, toIdx) {
        this.towers[toIdx].push(this.towers[fromIdx].pop());
    }

    saveTowersOrder() {
        this.backtrackState = [];
        this.towers.map(tower => {
            this.backtrackState.push(tower.slice(0));
        });
    }

    restoreTowersOrder(order) {
        this.towers = [];
        order.map(tower => {
            this.towers.push(tower.slice(0));
        });
    }



    // Get/print functions
    getTopDiscValue(tower) {
        return this.isTowerEmpty(tower) ? undefined : tower[tower.length - 1];
    }

    isTowerEmpty(tower) {
        return !tower.length;
    }

    isDiscMoveValid(fromIdx, toIdx) {
        if (fromIdx === toIdx) {
            return undefined;
        }

        if (
            this.isTowerEmpty(this.towers[fromIdx]) ||
            this.getTopDiscValue(this.towers[fromIdx]) > this.getTopDiscValue(this.towers[toIdx])
        ) {
            return false;
        }

        return true;
    }

    isSolved() {
        return (
            this.isTowerEmpty(this.towers[0]) &&
            this.isTowerEmpty(this.towers[1]) &&
            this.towers[2].length === this.discs
        );
    }

    toString() {
        console.log({
            1: this.towers[0],
            2: this.towers[1],
            3: this.towers[2]
        });
    }



    // DOM related
    drawTowers() {
        this.towerEls.forEach((towerEl, index) => {
            while (towerEl.lastChild) {
                towerEl.removeChild(towerEl.lastChild);
            }

            this.towers[index].map(disc => {
                let li = document.createElement("LI");
                li.id = `disc-${disc}`;
                towerEl.appendChild(li);
            });
        });
    }

    async animateMovingDiscs(fromIdx, toIdx, delay) {
        // Delay
        const promise = new Promise(resolve => setTimeout(resolve, delay));

        await promise;

        if (this.isDiscMoveValid(fromIdx, toIdx)) {
            this.moveDisc(fromIdx, toIdx);
        }
        this.drawTowers();
    }

    displayMessage(message) {
        const messageBox = document.querySelector("#message");
        messageBox.innerHTML = message;
    }

    postWinCleanUp(withMessage) {
        this.voidTowers();
        this.voidButtons();
        this.displayMessage(withMessage);
        this.initButtons(true);
    }
}

const towers = document.querySelectorAll(".tower");
const solveBtn = document.querySelector(".solve");
const restartBtn = document.querySelector(".restart");

const toh = new TowersOfHanoi(5, towers, solveBtn, restartBtn);