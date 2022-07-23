const inputEl = document.querySelector("#validation-input");
console.log(inputEl)


const inputLength = inputEl.getAttribute('data-length')
console.log(inputLength);


inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    this.classList.add("invalid");
    if (event.target.value.length === Number(inputLength)) {
        this.classList.remove("invalid");     
        this.classList.add("valid");

    } 

}


