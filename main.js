
const $switcherInput = document.getElementById("switcher-input");
const $lowerPrice = document.getElementById("lower-price");
const $biggerPrice = document.getElementById("bigger-price");
const $showedPrice = document.getElementById("output");
const $switcherFirst = document.getElementById("switcher-1");
const $switcherSecond = document.getElementById("switcher-2");
function switcher() {
    $showedPrice.style.opacity = 0;
    const inputChecked = $switcherInput.checked;
    if (inputChecked == false) {
        biggerPrise();
    } else if (inputChecked == true) {
        smallerPrice();
    } else {
        document.getElementById("swithcer-2").classList.remove("bold-class");
    }
}

const $annuallyPay = document.querySelector("#switcher-1"); 

function biggerPrise() {
        $switcherFirst.classList.add("bold-class");
        $switcherSecond.classList.remove("bold-class");
        $biggerPrice.classList.remove("bigger-price-checked");
        $lowerPrice.classList.add("lower-price-checked");
}

function smallerPrice() {
    document.getElementById("switcher-1").classList.remove("bold-class");
    document.getElementById("switcher-2").classList.add("bold-class");
    $lowerPrice.classList.remove("lower-price-checked");
    $biggerPrice.classList.add("bigger-price-checked");
}
$annuallyPay.addEventListener("click", function(){
    $switcherInput.checked = false;
    biggerPrise();
});

$switcherSecond.addEventListener("click", function(){
    $switcherInput.checked = true;
    smallerPrice();
});

$lowerPrice.addEventListener("click", function(){
    $switcherInput.checked = true;
    smallerPrice();
});

$biggerPrice.addEventListener("click", function(){
    $switcherInput.checked = false;
    biggerPrise();
});
