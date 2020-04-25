namespace Index {

	function onLoadWindow(): void {
		console.log("[TRACE] <onLoadWindow()>");
	}

	function convertKey(e: KeyboardEvent): string {
		if (e.code == "Digit1") return "1";
		if (e.code == "Digit2") return "2";
		if (e.code == "Digit3") return "3";
		if (e.code == "Digit4") return "4";
		if (e.code == "Digit5") return "5";
		if (e.code == "Digit6") return "6";
		if (e.code == "Digit7") return "7";
		if (e.code == "Digit8") return "8";
		if (e.code == "Digit9") return "9";
		if (e.code == "Digit0") return "0";
		if (e.code == "Minus") return "-";
		if (e.code == "Equal") return "^";
		if (e.code == "IntlYen") return "IntlYen";
		if (e.code == "KeyQ") return "Q";
		if (e.code == "KeyW") return "W";
		if (e.code == "KeyE") return "E";
		if (e.code == "KeyR") return "R";
		if (e.code == "KeyT") return "T";
		if (e.code == "KeyY") return "Y";
		if (e.code == "KeyU") return "U";
		if (e.code == "KeyI") return "I";
		if (e.code == "KeyO") return "O";
		if (e.code == "KeyP") return "P";
		if (e.code == "BracketLeft") return "@";
		if (e.code == "BracketRight") return "[";
		if (e.code == "Enter") return "Enter";
		if (e.code == "KeyA") return "A";
		if (e.code == "KeyS") return "S";
		if (e.code == "KeyD") return "D";
		if (e.code == "KeyF") return "F";
		if (e.code == "KeyG") return "G";
		if (e.code == "KeyH") return "H";
		if (e.code == "KeyJ") return "J";
		if (e.code == "KeyK") return "K";
		if (e.code == "KeyL") return "L";
		if (e.code == "Semicolon") return ";";
		if (e.code == "Quote") return ":";
		if (e.code == "Backslash") return "]";
		if (e.code == "KeyZ") return "Z";
		if (e.code == "KeyX") return "X";
		if (e.code == "KeyC") return "C";
		if (e.code == "KeyV") return "V";
		if (e.code == "KeyB") return "B";
		if (e.code == "KeyN") return "N";
		if (e.code == "KeyM") return "M";
		if (e.code == "Comma") return ",";
		if (e.code == "Period") return ".";
		if (e.code == "Slash") return "/";
		if (e.code == "IntlRo") return "IntlRo";
		if (e.code == "Space") return "Space";
		return "";
	}

	function onKeyDown(e: KeyboardEvent) {
		const keycode = convertKey(e);
		if (keycode === "") {
			console.log("[ERROR] <onKeyDown()> Unknown key.", e);
			return;
		}
		console.log(`[TRACE] <onKeyDown()> [${e.code}] >> [${keycode}]`);
		const element = document.getElementById(keycode);
		if (!element) {
			return;
		}
		element.style.borderColor = "#b06060";
		element.style.backgroundColor = "#ffe0e0";
	}

	function onKeyUp(e: KeyboardEvent) {
		const keycode = convertKey(e);
		if (keycode === "") {
			console.log("[ERROR] Unknown key.");
			return;
		}
		const element = document.getElementById(keycode);
		if (!element) {
			return;
		}
		element.style.borderColor = "#b0b0b0";
		element.style.backgroundColor = "";
	}

	export function main(): void {
		console.log("[TRACE] ### start ###");
		window.addEventListener("load", onLoadWindow);
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("keyup", onKeyUp);
		console.log("[TRACE] --- end ---");
	}
}

Index.main();
