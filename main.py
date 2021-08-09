def on_ir_button_right_released():
    if blokada == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 201)
makerbit.on_ir_button(IrButton.RIGHT,
    IrButtonAction.RELEASED,
    on_ir_button_right_released)

def on_ir_button_number_8_pressed():
    for index in range(1):
        for index2 in range(5):
            led.plot(index2 + 0, index2)
makerbit.on_ir_button(IrButton.NUMBER_8,
    IrButtonAction.PRESSED,
    on_ir_button_number_8_pressed)

def on_ir_button_left_released():
    if blokada == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 200)
makerbit.on_ir_button(IrButton.LEFT,
    IrButtonAction.RELEASED,
    on_ir_button_left_released)

def on_ir_button_number_1_pressed():
    global policja
    if policja == 0:
        policja += 1
    elif policja == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
        music.stop_all_sounds()
        policja += -1
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
    else:
        pass
makerbit.on_ir_button(IrButton.NUMBER_1,
    IrButtonAction.PRESSED,
    on_ir_button_number_1_pressed)

def on_ir_button_number_4_pressed():
    for index3 in range(1):
        for index4 in range(1):
            led.plot(index4 + 3, index4)
makerbit.on_ir_button(IrButton.NUMBER_4,
    IrButtonAction.PRESSED,
    on_ir_button_number_4_pressed)

def on_ir_button_number_5_pressed():
    for index5 in range(1):
        for index6 in range(2):
            led.plot(index6 + 4, index6)
makerbit.on_ir_button(IrButton.NUMBER_5,
    IrButtonAction.PRESSED,
    on_ir_button_number_5_pressed)

def on_ir_button_number_6_pressed():
    for index7 in range(1):
        for index8 in range(3):
            led.plot(index8 + 1, index8)
makerbit.on_ir_button(IrButton.NUMBER_6,
    IrButtonAction.PRESSED,
    on_ir_button_number_6_pressed)

def on_ir_button_left_pressed():
    if blokada == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 200)
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 0)
makerbit.on_ir_button(IrButton.LEFT,
    IrButtonAction.PRESSED,
    on_ir_button_left_pressed)

def on_ir_button_number_7_pressed():
    for index9 in range(1):
        for index10 in range(4):
            led.plot(index10 + 2, index10)
makerbit.on_ir_button(IrButton.NUMBER_7,
    IrButtonAction.PRESSED,
    on_ir_button_number_7_pressed)

def on_ir_button_number_1_released():
    DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
makerbit.on_ir_button(IrButton.NUMBER_1,
    IrButtonAction.RELEASED,
    on_ir_button_number_1_released)

def on_ir_button_down_pressed():
    if blokada == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 100)
makerbit.on_ir_button(IrButton.DOWN,
    IrButtonAction.PRESSED,
    on_ir_button_down_pressed)

def on_ir_button_down_released():
    if blokada == 1:
        music.stop_all_sounds()
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
makerbit.on_ir_button(IrButton.DOWN,
    IrButtonAction.RELEASED,
    on_ir_button_down_released)

def on_ir_button_up_pressed():
    if blokada == 1:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 200)
makerbit.on_ir_button(IrButton.UP, IrButtonAction.PRESSED, on_ir_button_up_pressed)

def on_ir_button_right_pressed():
    if blokada == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.RED)
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 200)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 0)
makerbit.on_ir_button(IrButton.RIGHT,
    IrButtonAction.PRESSED,
    on_ir_button_right_pressed)

def on_ir_button_ok_pressed():
    if blokada == 1:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 0)
makerbit.on_ir_button(IrButton.OK, IrButtonAction.PRESSED, on_ir_button_ok_pressed)

policja = 0
blokada = 0
która_strona = 0
blokada = 0
for wiersz in range(5):
    for index11 in range(5):
        basic.pause(100)
        led.plot(wiersz, index11)
basic.show_icon(IconNames.HAPPY)
basic.pause(100)
music.play_melody("A - A - - - - - ", 352)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
policja = 0
szybkość = 200
makerbit.connect_ir_receiver(DigitalPin.P16, IrProtocol.NEC)

def on_every_interval():
    global blokada
    if led.point(0, 4):
        if led.point(1, 2):
            if led.point(2, 3):
                if led.point(3, 0):
                    if led.point(4, 1):
                        blokada = 1
    if input.light_level() < 3:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.YELLOW)
    else:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
loops.every_interval(1000, on_every_interval)

def on_every_interval2():
    if policja == 1:
        music.play_melody("A G A G A G A G ", 200)
loops.every_interval(1, on_every_interval2)

def on_every_interval3():
    if policja == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.BLUE)
        basic.pause(99)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.BLUE)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.RED)
        basic.pause(99)
loops.every_interval(2, on_every_interval3)
