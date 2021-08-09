makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 202)
    }
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    hasło(1, 5)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    hasło(0, 9)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    hasło(3, 8)
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
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    hasło(-1, 0)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    hasło(-1, 0)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    hasło(-1, 0)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        if (jaki_skręt == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 200)
        }
    }
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    hasło(2, 4)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Released, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    }
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    if (blokada == 4) {
        music.stopAllSounds()
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    hasło(-1, 0)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    if (jaki_skręt == 0) {
        jaki_skręt += 1
    } else {
        jaki_skręt += -1
    }
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        if (jaki_skręt == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 200)
        }
    }
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    if (blokada == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
function hasło (kolejniść: number, co_wyświetlić: number) {
    if (kolejność == kolejniść && blokada <= 4) {
        blokada += 1
        kolejność += 1
        basic.clearScreen()
        basic.showNumber(co_wyświetlić)
        music.stopAllSounds()
        music.playMelody("C - - - - - - - ", 120)
    }
    koniec += 1
}
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    hasło(-1, 0)
})
let koniec = 0
let policja = 0
let blokada = 0
let kolejność = 0
let jaki_skręt = 0
jaki_skręt = 0
kolejność = 0
let która_strona = 0
blokada = 0
for (let wiersz = 0; wiersz <= 4; wiersz++) {
    for (let index11 = 0; index11 <= 4; index11++) {
        basic.pause(100)
        led.plot(wiersz, index11)
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
    if (led.point(0, 4)) {
        if (led.point(1, 2)) {
            if (led.point(2, 3)) {
                if (led.point(3, 0)) {
                    if (led.point(4, 1)) {
                        blokada = 1
                    }
                }
            }
        }
    }
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
loops.everyInterval(100, function () {
    if (koniec == 4 && blokada <= 3) {
        basic.clearScreen()
        koniec = 0
        blokada = 0
        kolejność = 0
        music.playMelody("C5 C5 C5 - - - - - ", 120)
    }
})
