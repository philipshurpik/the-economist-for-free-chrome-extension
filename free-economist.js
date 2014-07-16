/*global chrome, setInterval, document, alert */

(function freeEconomist() {
	var name = "ec_limit";

	function getCookie(name){
		var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
		return match ? match[1] : undefined;
	}

	function checkCookie() {
		var value = getCookie(name);
		if (value === "notallow") {
			document.cookie = name + "=allow; expires=Thu, 18 Dec 1970 12:00:00 GMT; path=/";
		}
	}

	checkCookie();
}());