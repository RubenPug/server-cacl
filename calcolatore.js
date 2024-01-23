

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "uguale") {
      //display.innerText = eval(display.innerText);
        const query="http://localhost:3333/calcolatore?display="+ encodeURIComponent(display.innerText);
        fetch(query)
        .then(response=>{
          return response.json();
        })
        .then(message=>{
          console.log(message);
          const result=message.result;
          display.innerText+=`${item.innerText}${result}`;
        })

    }else if (display.innerText == "" && item.id == "uguale") {
      display.innerText = "Hello World!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "radice") {
      let root=Math.sqrt(display.innerText);
      display.innerText=root.toFixed(4);
    } else if (item.id == "perc") {
      let p=display.innerText/100;
      display.innerText=p.toFixed(5);
  
    } 
    else {
      display.innerText += item.id;
    }
  };
});

