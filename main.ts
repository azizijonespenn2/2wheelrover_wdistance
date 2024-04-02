hummingbird.startHummingbird()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 7) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 300), music.PlaybackMode.UntilDone)
        basic.pause(500)
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.Two, 0)
        basic.pause(2000)
        hummingbird.setRotationServo(FourPort.One, -50)
        hummingbird.setRotationServo(FourPort.Two, -50)
        basic.pause(500)
        hummingbird.setRotationServo(FourPort.One, -50)
        hummingbird.setRotationServo(FourPort.Two, 50)
        basic.pause(500)
    } else {
        hummingbird.setRotationServo(FourPort.One, 50)
        hummingbird.setRotationServo(FourPort.Two, -50)
    }
})
