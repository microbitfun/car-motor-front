radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.East)
        servos.P0.run(100)
    }
    if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.West)
        servos.P0.run(0)
    }
    if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.South)
        servos.P0.run(-100)
    }
    if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.North)
        servos.P0.run(100)
    }
    if (receivedNumber == 5) {
        basic.showIcon(IconNames.No)
        servos.P0.run(0)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.SmallDiamond)
