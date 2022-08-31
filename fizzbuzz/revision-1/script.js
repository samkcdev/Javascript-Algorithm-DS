function createContentHTML(fizzBuzzArr) {
  const wrapper = document.createElement("div");
  const heading = document.createElement("h1");
  const ul = document.createElement("ul");

  heading.textContent = "FizzBuzz";

  fizzBuzzArr.forEach((element) => {
    const li = document.createElement("li");
    if (element == "FizzBuzz") {
      li.style.fontWeight = "bold";
    }
    li.textContent = element;
    ul.appendChild(li);
  });

  document.body.appendChild(wrapper);
  wrapper.appendChild(heading);
  wrapper.appendChild(ul);
}

function fizzBuzz(val) {
  let initialVal = 1;
  let valueArr = [];
  while (initialVal <= val) {
    if (initialVal % 3 == 0 && initialVal % 5 == 0) {
      valueArr.push(`FizzBuzz`);
    }
    if (initialVal % 3 == 0) {
      valueArr.push(`fizz`);
    } else if (initialVal % 5 == 0) {
      valueArr.push(`buzz`);
    } else {
      valueArr.push(initialVal);
    }
    initialVal++;
  }
  return valueArr;
}

createContentHTML(fizzBuzz(100));
