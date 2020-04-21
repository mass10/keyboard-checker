namespace Index {

	function onLoad(): void {
		console.log("[TRACE] <onLoad()>");
	}

	export function main(): void {
		console.log("[TRACE] ### start ###");
		window.addEventListener("load", onLoad);
		console.log("[TRACE] --- end ---");
	}
}

Index.main();
