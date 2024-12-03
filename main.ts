input.onButtonPressed(Button.A, function () {
    自分の手 += 1
    if (自分の手 == 4) {
        自分の手 = 1
    }
    if (自分の手 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (自分の手 == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (自分の手 == 3) {
        basic.showLeds(`
            . # # # .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (自分の手 == 1 && 相手の手 == 1) {
        basic.showString("  opponent")
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("draw")
    }
    if (自分の手 == 2 && 相手の手 == 2) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("draw")
    }
    if (自分の手 == 3 && 相手の手 == 3) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # # # .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("draw")
    }
    if (自分の手 == 1 && 相手の手 == 2) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("win")
    }
    if (自分の手 == 2 && 相手の手 == 3) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # # # .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("win")
    }
    if (自分の手 == 3 && 相手の手 == 1) {
        basic.showString("  opponent")
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("win")
    }
    if (自分の手 == 3 && 相手の手 == 2) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("lose")
    }
    if (自分の手 == 1 && 相手の手 == 3) {
        basic.showString("  opponent")
        basic.showLeds(`
            . # # # .
            # # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("lose")
    }
    if (自分の手 == 2 && 相手の手 == 1) {
        basic.showString("  opponent")
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("lose")
    }
})
let 相手の手 = 0
let 自分の手 = 0
自分の手 = 1
相手の手 = randint(1, 3)
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    `)
