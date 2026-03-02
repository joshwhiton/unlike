// Hits Select → checks 27 posts → Unlikes → repeat
// You'll need to confirm click 'unlike' once per batch.
// I found the IG website errored out if I did more than 27 but your mileage could vary.
// window.STOP_UNLIKE = true to pause

(async function autoUnlike() {
const BATCH = 27;
const RELOAD_WAIT = 10000;
let totalUnliked = 0;

while (!window.STOP_UNLIKE) {
// Click "Select"
const selectSpan = [...document.querySelectorAll('span')].find(s => s.textContent.trim() === 'Select' && s.children.length === 0);
if (!selectSpan) {
console.log('No "Select" found. Maybe no more likes?');
break;
}
selectSpan.parentElement.click();
await new Promise(r => setTimeout(r, 500));

// Select up to BATCH circles
const grid = document.querySelector('main') || document.querySelector('article');
if (!grid) { console.log('No content container'); break; }
const circles = grid.querySelectorAll('div[style*="height: 24px"][style*="width: 24px"]');

let clicked = 0;
for (const circle of circles) {

if (window.STOP_UNLIKE || clicked >= BATCH) break;
const btn = circle.closest('div[role="button"]');
if (!btn || btn.querySelector('svg')) continue;
btn.click();
clicked++;
await new Promise(r => setTimeout(r, 30));
}
if (clicked === 0) {
console.log(`No more to select. Total unliked: ${totalUnliked}`);
break;

}
console.log(`Selected ${clicked}. Clicking Unlike...`);
await new Promise(r => setTimeout(r, 500));
// Click "Unlike" span's parent div

const unlikeSpan = [...document.querySelectorAll('span')].find(s => s.textContent.trim() === 'Unlike' && s.children.length === 0);
if (!unlikeSpan) {

console.log('Unlike button not found!');
break;
}
unlikeSpan.parentElement.click();
totalUnliked += clicked;
console.log(`Unliked ${totalUnliked} total. Waiting ${RELOAD_WAIT/1000}s for reload...`);
await new Promise(r => setTimeout(r, RELOAD_WAIT));

}
})();
