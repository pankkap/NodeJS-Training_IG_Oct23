const num1 = document.getElementById('num1') as HTMLInputElement
const num2 = <HTMLInputElement> document.getElementById('num2')
const btn:HTMLButtonElement = document.querySelector('button')!

btn.onclick = (e:Event)=>{
    e.preventDefault()
    console.log("btn is clicked");
    let x:number =parseInt( num1.value)
    let y:number =parseInt( num2.value)
    let result:number = x + y;

    let newP:HTMLParagraphElement = document.createElement('p')
    // newP.innerHTML = result as unknown as string
    newP.innerHTML = <string><unknown>result
    document.body.appendChild(newP)
}



// let a:unknown = true
// let b:number = a