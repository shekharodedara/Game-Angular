import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    square: any = [];
    xIsNext: boolean = true;
    winner: string = '';
    counter: number = 0;
    isDraw: any = '';
    freshPage: boolean = true;
    constructor() { }

    ngOnInit(): void {
    }

    newGame() {
        this.square = Array(9).fill(null);
        this.winner = '';
        this.isDraw = '';
        this.counter = 0;
        this.freshPage = false;
    }

    get player() {
        return this.xIsNext ? 'X' : 'O';
    }

    makeMove(id: any) {
        // console.log(id)
        if (!this.square[id]) {
            this.square.splice(id, 1, this.player);
            this.xIsNext = !this.xIsNext;
            this.counter++;
        }
        this.winner = this.calculateWinner();
        console.log(this.winner)
        if (!this.winner && this.counter == 9) {
            this.isDraw = 'yes';
        }
    }
    calculateWinner() {
        const line = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];
        for (let i = 0; i < line.length; i++) {
            const [a, b, c] = line[i];
            if (this.square[a] === this.square[b] && this.square[a] === this.square[c]) {
                return this.square[a];
            }
        }
    }

}
