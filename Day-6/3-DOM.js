var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.querySelector('button');
btn.onclick = function (e) {
    e.preventDefault();
    console.log("btn is clicked");
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x + y;
    var newP = document.createElement('p');
    // newP.innerHTML = result as unknown as string
    newP.innerHTML = result;
    document.body.appendChild(newP);
};
// let a:unknown = true
// let b:number = a
