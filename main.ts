input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let wacht = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (game.score() == 20) {
        game.pause()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showString("gewonnen!")
        basic.showString("druk op a+b")
    }
})
basic.forever(function () {
    if (game.score() == 19) {
        wacht = 100
    }
})
basic.forever(function () {
    if (game.score() == 1) {
        wacht = 230
    }
})
basic.forever(function () {
    if (game.score() == 2) {
        wacht = 210
    }
})
basic.forever(function () {
    if (game.score() == 0) {
        wacht = 250
    }
})
basic.forever(function () {
    if (game.score() == 5) {
        wacht = 170
    }
})
basic.forever(function () {
    if (game.score() == 3) {
        wacht = 190
    }
})
basic.forever(function () {
    if (game.score() == 4) {
        wacht = 180
    }
})
basic.forever(function () {
    if (game.score() == 7) {
        wacht = 160
    }
})
basic.forever(function () {
    if (game.score() == 9) {
        wacht = 150
    }
})
basic.forever(function () {
    if (game.score() == 12) {
        wacht = 140
    }
})
basic.forever(function () {
    if (game.score() == 15) {
        wacht = 130
    }
})
basic.forever(function () {
    if (game.score() == 17) {
        wacht = 120
    }
})
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(wacht)
})
