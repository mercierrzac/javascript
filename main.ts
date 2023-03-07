let MICROSEC_IN_A_SEC = 1000000
let DISTANCE_PER_SEC = 100
let  DEGREES_PER_SEC = 200

//@param degrees desired degrees to turn through
function turnLeft(degrees: number): void {
   let timeToWait = (degrees * MICROSEC_IN_A_SEC) /DEGREES_PER_SEC;
   pins.servoWritePin(AnalogPin.P1, 45);
   pins.servoWritePin(AnalogPin.P2, 45);
   control.waitMicros(timeToWait);
   pins.servoWritePin(AnalogPin.P1, 90);
   pins.servoWritePin(AnalogPin.P2, 90);
}

input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    turnLeft(90)
})

input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    driveForward(100)
})