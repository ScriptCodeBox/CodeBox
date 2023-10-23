window.onload = function() {
  var copy = document.getElementById("copy");
  var active = document.getElementById("active");
  
window.oninput = async function loop(myInput) {
input = document.getElementById("myInput").value;
  const msgBuffer = new TextEncoder('utf-8').encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  var hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
if (hashHex == 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855') {hashHex = '';}
document.getElementById("out").innerHTML = hashHex;
copy.onclick = function() {
	navigator.clipboard.writeText(hashHex);
}}

active.onclick = async function() {
    for (let i = 1; i < 5; i++) {
			newWind = window.open("https://www.bing.com/search?q=" + i)
			setTimeout(function () {
				for (let o = 1; o < 5; o++) {
					newWind.close();
				}}, 500);
	}
}};