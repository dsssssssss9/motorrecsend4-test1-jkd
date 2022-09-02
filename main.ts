input.onButtonPressed(Button.A, function () {
    radio.sendString("d")
    basic.showString("A - d")
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    radio.sendString("b")
    basic.showIcon(IconNames.Butterfly)
    basic.clearScreen()
})
myModules.button3.onEvent(jacdac.ButtonEvent.Down, function () {
	
})
modules.rotaryEncoder1.onPositionChanged(function () {
    radio.sendNumber(modules.rotaryEncoder1.position())
    basic.showNumber(modules.rotaryEncoder1.position())
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("e")
    basic.showString("B-e")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(input.acceleration(Dimension.X))
    basic.showNumber(input.acceleration(Dimension.X))
    basic.showArrow(ArrowNames.East)
})
modules.button1.onEvent(jacdac.ButtonEvent.Hold, function () {
    radio.sendString("a")
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(input.acceleration(Dimension.X))
    basic.showNumber(input.acceleration(Dimension.X))
    basic.showArrow(ArrowNames.West)
})
modules.button2.onEvent(jacdac.ButtonEvent.Hold, function () {
    radio.sendString("c")
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
})
radio.setGroup(1)
radio.setTransmitPower(7)
