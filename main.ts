radio.onReceivedNumber(function (receivedNumber) {
    groupnumber = receivedNumber
    if (groupnumber == 70) {
        kitronik_servo_lite.turnRight(90)
    } else if (groupnumber == 33) {
        kitronik_servo_lite.driveForwards(7)
    } else if (groupnumber == 28) {
        kitronik_servo_lite.driveBackwards(7)
    } else if (groupnumber == 71) {
        kitronik_servo_lite.turnLeft(90)
    }
})
let groupnumber = 0
radio.setGroup(25)
kitronik_servo_lite.setDistancePerSecond(7)
kitronik_servo_lite.setDegreesPerSecond(90)
basic.showIcon(IconNames.Happy)
