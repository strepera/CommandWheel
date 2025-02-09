import Wheel from "./wheel.js";
import { Keybind } from "../KeybindFix";
import { buttons } from "./buttons.js"

const wheel = new Wheel();
wheel.options = buttons;

const openKeybind = new Keybind("Open Command Wheel", Keyboard.KEY_NONE, "Command Wheel");
openKeybind.registerKeyDown(() => {
  wheel.open();
})

export default Wheel;