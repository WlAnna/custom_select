console.log('aaa')

let dropdownList = document.getElementById("list");
dropdownList.style.display = "none";

function openDropdown() {
    if (dropdownList.style.display != "none") {
        dropdownList.style.display = "none";
    } else {
        dropdownList.style.display = "block";
    }
}

const currencyItems = document.getElementsByClassName("currency-wrapper");
const currencyItemsLength = currencyItems.length;
for (let i = 0; i < currencyItemsLength; i++) {
    const item = currencyItems[i];
    console.log(item)
    item.addEventListener("click", (e) => {
        const select = document.querySelector('#dropdown');
        select.value = item.childNodes[3].innerHTML

        dropdownList.style.display = "none";
    })
}