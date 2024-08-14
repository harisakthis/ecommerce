//change content //not in use 1

function changeContent(heading) {
    var contentt = document.getElementById("pro"); // Fix typo here pro kodtha taan itu work akum
    if (heading == 'heading1') {
      contentt.innerHTML = `<div class="shop ">
      <div class="food-box ">
        <div class="pic">
          <img src="WholeCloves.png" class="food-img">
        </div>
        <h2 class="food-title">Whole Cloves</h2>
        <span class="food-price">Rs.40</span>
        <ion-icon name="cart" class="add-cart"></ion-icon>
      </div>

      <div class="food-box">
        <div class="pic">
          <img src="GroundRedPepper.png" class="food-img">

        </div>
        <h2 class="food-title">GroundRedPepper</h2>
        <span class="food-price">Rs.40</span>
        <ion-icon name="cart" class="add-cart"></ion-icon>
      </div>

      <div class="food-box">
        <div class="pic">
          <img src="GroundHabanero.png" class="food-img">
        </div>
        <h2 class="food-title">GroundHabanero</h2>
        <span class="food-price">Rs.40</span>
        <ion-icon name="cart" class="add-cart"></ion-icon>
      </div>

      <div class="food-box">
        <div class="pic">
          <img src="GroundRedJalapeno.png" class="food-img">
        </div>
        <h2 class="food-title">GroundRedJalapeno</h2>
        <span class="food-price">Rs.40</span>
        <ion-icon name="cart" class="add-cart"></ion-icon>
      </div>
      <div class="food-box">
        <div class="pic">
          <img src="GroundStarAnise.png" class="food-img">
        </div>
        <h2 class="food-title">GroundStarAnise </h2>
        <span class="food-price">Rs.40</span>
        <ion-icon name="cart" class="add-cart"></ion-icon>
      </div>
    </div>
  </div>`

    } else if (heading == 'heading2') {
      contentt.innerHTML = `<div class="row container m-5">
            <div class="col-lg-4 col-md-4 col-12">
              <div class="card">
                <img src="img13.png" class="card-img-top">
                <div class="card-body text-center">
                  <h5 class="card-title">Cloves powder </h5>
                  <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
              
            <div class="col-lg-4 col-md-4 col-12">
              <div class="card">
                <img src="img14.png" class="card-img-top">
                <div class="card-body text-center">
                  <h5 class="card-title">Cinnamon powder</h5>
                  <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
        
            <div class="col-lg-4 col-md-4 col-12">
              <div class="card">
                <img src="img15.png" class="card-img-top">
                <div class="card-body text-center">
                  <h5 class="card-title ">Garlic powder</h5>
                  <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>`;
    }
  }
  
  //clicl border effect //not in use 2

  //const head = document.querySelector('.head1'); //head 1
 // const headin = document.querySelector('.head2'); //head 2 eduthite html


  //head.addEventListener('click', () => {
   // head.style.borderBottom = '2px solid green';
   // headin.style.borderBottom  = ''; // Reset box shadow for headin
  //});
  
 // headin.addEventListener('click', () => {
 //   headin.style.borderBottom = '2px solid green';
 //   head.style.borderBottom = ''; // Reset box shadow for head
 // });

  //

  const btnCart=document.querySelector("#carticon");
  const cart=document.querySelector(".cartt");
  const btnClose=document.querySelector(".cartt-close");

  btnCart.addEventListener('click',()=>{
    cart.classList.add('cartt-active');
  });

  btnClose.addEventListener('click',()=>{
    cart.classList.remove('cartt-active');
  });

  document.addEventListener('DOMContentLoaded',loadFood);

  function loadFood(){
    loadContent();
  }

  function loadContent(){
    //remove item from cart
    let btnRemove=document.querySelectorAll(".cartt-remove");
    btnRemove.forEach((btn)=>{
      btn.addEventListener('click',removeItem);
    });

    //product item change
    let qtyElements=document.querySelectorAll(".cartt-quantity");
    qtyElements.forEach((input)=>{
      input.addEventListener('change',changeQty);
    });

      //product cart
      let cartBtns=document.querySelectorAll('.add-cart');
      cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
      });

      updateTotal();
  }



  //removeitem
  function removeItem(){
    if(confirm('Are You Sure to Remove')){
      let title=this.parentElement.querySelector('.cartt-food-title').innerHTML;
      //console.log(title);
      itemList=itemList.filter(e=>e.title!=title);
      this.parentElement.remove();
      loadContent();
    }
  }
  //changequantity

  function changeQty(){
    if (isNaN(this.value)||this.value<1){
      this.value=1;
    }
    loadContent();
  }

// cart
let itemList=[];

//addcart
function addCart(){
  let food=this.parentElement;
  let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
  //console.log(title,price,imgSrc);

let newProduct={title,price,imgSrc}

//check product already exist in cRT
if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }

 let newProductElement=createCartProduct(title,price,imgSrc);
 let element=document.createElement('div');
 element.innerHTML=newProductElement; 
 let cartBasket=document.querySelector('.cartt-content');
 cartBasket.append(element);
 loadContent();
}

function createCartProduct(title,price,imgSrc){
  return `
   <div class="cartt-box">
  <img src=${imgSrc} class="cartt-img">
  <div class="detail-box">
    <div class="cartt-food-title">${title}</div>
    <div class="price-box">
      <div class="cartt-price">${price}</div>
      <div class="cartt-amt">${price}</div>
    
    </div>
    <input type="number" value="1" class="cartt-quantity"id="number">

  </div>
  <ion-icon name="trash" class="cartt-remove"></ion-icon>
</div>`;
}


function updateTotal()
{
  const cartItems=document.querySelectorAll('.cartt-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cartt-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cartt-quantity').value;
    total+=(price*qty);
    product.querySelector('.cartt-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;

  //add product count
  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if (count==0){
    cartCount.style.display="none";

  }else{
    cartCount.style.display="block";

  }
}

//placeorder


  function checkout() {
    const cartItems = document.querySelectorAll('.cartt-box');

    if (cartItems.length === 0) {
      alert('Your cart is empty. Add items to the cart before checking out.');
      return;
    }

    let totalAmount = 0;

    // Calculate the total amount
    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector('.cartt-amt').textContent.slice(3));
      const quantity = parseInt(item.querySelector('.cartt-quantity').value);
      totalAmount += price * quantity;
    });

    // Display the alert message with the total amount
    alert('Checkout complete! Total amount: Rs.' + totalAmount.toFixed(2));
    window.location="form.html";

   

  }



//video

let isYouTubeApiReady = false;

function createYouTubePlayer(containerId, videoId) {
  let player;

  function checkYouTubeApiReady() {
    if (isYouTubeApiReady) {
      onYouTubeIframeAPIReady();
    } else {
      setTimeout(checkYouTubeApiReady, 100);
    }
  }

  function onYouTubeIframeAPIReady() {
    player = new YT.Player(containerId, {
      height: '360',
      width: '640',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'disablekb': 1,
        'enablejsapi': 1,
        'loop': 1,
        'showinfo': 0,
        'rel': 0,
        'mute': 0
      },
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  function onPlayerReady(event) {
    console.log('Player is ready for ' + containerId);
    document.getElementById(containerId).querySelector('.play-button').style.display = 'none';
  }

  document.getElementById(containerId).addEventListener('click', function () {
    player.playVideo();
  });

  checkYouTubeApiReady();
}

function onYouTubeIframeAPIReady() {
  isYouTubeApiReady = true;
}

const scriptTag = document.createElement('script');
scriptTag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(scriptTag);

createYouTubePlayer('video-container-1', 'EQtnCjeZc3w');
createYouTubePlayer('video-container-2', '1NbBBGISfuI');
createYouTubePlayer('video-container-3', 'kHyqVYQv_E0');

