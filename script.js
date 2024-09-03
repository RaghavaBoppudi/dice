const rollBtn = document.getElementById("rollBtn");
rollBtn.addEventListener("click", ()=>{
    const userInput = document.getElementById("userInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let num  = 0; num < userInput; num++){
        const rollResult = Math.floor ( Math.random() * 6 + 1 );
        values.push(rollResult);
        images.push(`<img src="faces/${rollResult}.png" alt="Dice ${rollResult}">`);
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
})