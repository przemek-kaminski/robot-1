makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    if (policja == 0) {
        policja += 1
    } else if (policja == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        music.stopAllSounds()
        policja += -1
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    } else {
    	
    }
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    }
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Released, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    }
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    if (blokada == 1) {
        music.stopAllSounds()
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    }
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    if (blokada == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
let policja = 0
let blokada = 0
blokada = 0
let która_strona = 0
for (let wiersz = 0; wiersz <= 4; wiersz++) {
    for (let index = 0; index <= 4; index++) {
        basic.pause(100)
        led.plot(wiersz, index)
    }
}
basic.showIcon(IconNames.Happy)
basic.pause(100)
music.playMelody("A - A - - - - - ", 352)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
policja = 0
let szybkość = 200
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
loops.everyInterval(1000, function () {
    if (input.lightLevel() < 3) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
loops.everyInterval(1, function () {
    if (policja == 1) {
        music.playMelody("A G A G A G A G ", 200)
    }
})
loops.everyInterval(2, function () {
    if (policja == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(99)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        basic.pause(99)
    }
})
