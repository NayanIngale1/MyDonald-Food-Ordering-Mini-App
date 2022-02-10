var parent = document.querySelector(".container");
var item = parent.querySelectorAll('input[type ="checkbox"]');
// console.log(item)
document.querySelector("#button").addEventListener("click", OrderFood);
var order = [];

const menu = {
  Burger : 'https://content.fortune.com/wp-content/uploads/2019/05/mcdonalds_bigvegants.jpg',
  
  Frenchfrise : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPQSe5yh-e17XDa8KTWp0hlyENNaiQEWn4A&usqp=CAU',
  
  CocaCola : 'https://assets3.thrillist.com/v1/image/2004418/828x610/flatten;crop;webp=auto;jpeg_quality=70',
  
VegPizza : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwe7U5YS5dKkr1gEF_txgo2iEupncUBuI4Vw&usqp=CAU',
 Coffee : 'https://content.fortune.com/wp-content/uploads/2016/10/94648598.jpg',
}
// console.log('menu:', menu);

let timer;
let GivePromise;
function OrderFood() {
  alert("Order Successfull ..!  Wait for some time...")
  order = [];
  item.forEach(function (element) {
    if (element.checked) {
      let Data = element.value;
      order.push(Data);
      // console.log(order);
    }
  });

  timer = setTimeout(() => {
    serveFood(order);
  }, 5000);
}

const serveFood = async () => {
  try {
    let res = await order;
    displayOrder(res);
  } catch (error) {
    //   console.log('error:', error)
  }
};

const displayOrder = (data) => {
  // console.log('data:', data)
 
  // display.className = "display";
  
  parent.innerHTML = "";

  let info = document.createElement("div");
  info.className='info'
  let title = document.createElement("h1");
  let Id = Math.floor(Math.random(25)*25)
  title.innerText = `Please Collect Your Order .!`;
  let orderId = document.createElement('p');


  orderId.innerText = `Order Id : ${Id}`;
  info.append(title, orderId);
  parent.append(info);

  let btn = document.getElementById("button2");
  
  btn.style.display = "block";

   let display = document.querySelector(".display");

  data.forEach((el) => {

   
    // console.log('display:', display)

    let url;
    for (const key in menu) {
      if (key == el) {
        url = menu[key];
      }
    }
    let img = document.createElement("div");
    img.style.backgroundImage = `url(${url})`;
    img.className = "order";



    display.append(img);
    // console.log('display:', display)
    // parent.append(display);
  })


  clearTimeout(timer);
};


const reload = () => {
  window.location = "index.html";
}
