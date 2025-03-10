const btn = document.querySelector(".btn_change_currency");

let price = document.querySelectorAll(".price");
console.log(price);
const cource = 90;

let value = document.querySelectorAll(".CurrencyValue");
console.log(value)

let currency = true; // доллар

btn.addEventListener("click", function () {
  if(currency == true) {
    btn.textContent = "₽";
  } else {
    btn.textContent = "$"
  }


  price.forEach((element) => {
    let priceText = element.textContent; // 8
    if (currency == true) {
      // если валюта доллар
      let newPrice = priceText * cource; // 720
      element.innerHTML = newPrice;
    } else {
      // если currency == false если валюта рубль
      let rub = priceText / cource;
      element.innerHTML = rub;
    }
  });

  value.forEach((elem)=>{
    let symbol = elem.textContent; //$
    if(currency == true){
      symbol = "₽";
      elem.innerHTML = symbol;
    }else {
        symbol = "$"
        elem.innerHTML = symbol
      }
  })

  currency = !currency;
  console.log(currency);
});

