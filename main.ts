radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P0.setAngle(0)
    } else if (receivedNumber == 0) {
        servos.P0.setAngle(90)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(1)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
    if (input.magneticForce(Dimension.Strength) > 40) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . . .
            # # # # #
            # # # # #
            `)
        music.playMelody("G B A G C5 B A B ", 360)
    }
})
servos.P0.setAngle(90)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        # # # # #
        `)
    music.setVolume(255)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
})
