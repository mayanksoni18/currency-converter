console.log("this is working")

const populate = async (value, currency) => {
    let mystr = ""
    URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_CVUYAmV2RtTpIw70UZJQ1nKxDqPYy6ZfrE7QQYgr&base_currency=" + currency
    let response = await fetch(URL)
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"

    // console.log(key)
    for (let key of Object.keys(rjson["data"])) {
        mystr += `
    <tr>
    <td>${key}</td>
    <td>${rjson["data"][key]["code"]}</td>
    <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
    </tr>
    `
    }
    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = mystr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = (document.querySelector("select[name='currency']").value);
    populate(value, currency)
})

