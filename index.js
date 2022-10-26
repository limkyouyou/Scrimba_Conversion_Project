const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputEl.value = 1

convertBtn.addEventListener("click", function(){
    lengthEl.innerHTML = `${inputEl.value} meters = ${MeIm(3.281)} feet | ${inputEl.value} feet = ${ImMe(0.305)} meters`
    volumeEl.innerHTML = `${inputEl.value} liters = ${MeIm(0.264)} gallons | ${inputEl.value} gallons = ${ImMe(4.546)} liters`
    massEl.innerHTML = `${inputEl.value} kilos = ${MeIm(2.205)} pounds | ${inputEl.value} pounds = ${ImMe(0.453592)} kilos`
})

function MeIm(inter) {
    let conv = inputEl.value * inter
    return Number(Math.round(conv + 'e2') + 'e-2') // round up to 2 decimal points
}

function ImMe(inter) {
    let conv = inputEl.value * inter
    return Number(Math.round(conv + 'e2') + 'e-2')
}