import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class GameStore {
    constructor() {
        makeAutoObservable(this)
    }

    leaderBoard = localStorage.getItem("LEADER-BOARD") === null ? [] : JSON.parse(localStorage.getItem("LEADER-BOARD"))

    score = 0
    timerInSeconds = 60
    isGameOver = false;

    rowSize = 5 // default value
    columnSize = 5  //default value
    cellSize = 12
    cellGap = 1

    robotX = Math.floor(this.columnSize / 2) //default values
    robotY = Math.floor(this.rowSize / 2) //default values
    targetX = this.columnSize - 1 //default values
    targetY = this.rowSize - 1 //default values

    robotDirection = 0
    rotateRobot = (degreesToRotate) => {
        this.robotDirection = ((this.robotDirection + degreesToRotate) + 360) % 360
    }

    checkPosition = () => {
        //if out of bounds, game over
        if (this.robotX >= this.columnSize || this.robotX < 0 || this.robotY >= this.rowSize || this.robotY < 0){
            this.gameOver()
        } else if (this.robotX == this.targetX && this.robotY == this.targetY){
        //if === position of target, regenerate game, add 1 point
            this.addScore()
            this.generateNewGame()
        }
        //else return;
        return
    }

    moveForward = () => {
        switch(this.robotDirection){
            case 0:
                this.robotY -= 1
                this.checkPosition()
                break;
            case 90:
                this.robotX += 1
                this.checkPosition()
                break;
            case 180:
                this.robotY += 1
                this.checkPosition()
                break;
            case 270:
                this.robotX -= 1
                this.checkPosition()
                break;
            default:
                console.log("should never get here", this.robotDirection)
        }
    }

    gameOver = () => {
        this.addToLeaderboard()
        this.isGameOver = true
        this.leaderboard = this.leaderBoard.sort((a, b) => b.score - a.score)
    }

    addScore = () => this.score += 1 

    playAgain = () => {
        this.score = 0
        this.generateNewGame()
        this.isGameOver = false
    }

    generateRandomIndex = (maxlength) => {
        return Math.floor(Math.random() * maxlength)
    }

    generateRandomRobotCoordinate = () => {
        this.robotX = this.generateRandomIndex(this.columnSize)
        this.robotY = this.generateRandomIndex(this.rowSize)
    }

    generateRandomTargetCoordinate = () => {
        do {
            this.targetX = this.generateRandomIndex(this.columnSize)
            this.targetY = this.generateRandomIndex(this.rowSize)
        } while (this.targetX === this.robotX && this.targetY === this.robotY)
    }

    generateNewGame = () => {
        this.generateRandomRobotCoordinate()
        this.generateRandomTargetCoordinate()
    }

    addToLeaderboard = () => {
        this.leaderBoard.push({"gameNumber": this.leaderBoard.length, "user": "user-1", "score": this.score})
        localStorage.setItem("LEADER-BOARD", JSON.stringify(this.leaderBoard))
    }
}

export const gameInstance = new GameStore()
export default createContext(gameInstance)