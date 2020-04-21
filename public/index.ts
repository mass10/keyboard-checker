namespace Index {

	function onLoadWindow(): void {
		console.log("[TRACE] <onLoadWindow()>");
		alert("load!");
	}

	export function main(): void {
		console.log("[TRACE] ### start ###");
		window.addEventListener("load", onLoadWindow);
		console.log("[TRACE] --- end ---");
	}
}

Index.main();
