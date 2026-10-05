const types = ["North American River Otter", "Sea Otter", "Giant Otter", "Congo Clawless Otter"];

const input = document.getElementById("user-name");
const form = document.getElementById("otter-form");
const result = document.getElementById("otter-result");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = input.value.trim();
    result.textContent = name + ", you seem like a " + types[Math.floor(Math.random() * types.length)] + " to me!";
});