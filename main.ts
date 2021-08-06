makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
})
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
basic.forever(function () {
	
})
