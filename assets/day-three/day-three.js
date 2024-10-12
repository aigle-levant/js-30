//AIGLE

function updateVar(element)
{
    let suffixValue = element.dataset.sizing || "";
    document.documentElement.style.setProperty("--" + element.name, element.value + suffixValue);
}
let input = document.querySelectorAll('.controls>input');

input.forEach((input) =>
{
    updateVar(input);
    input.addEventListener("input", () => updateVar(input));
});