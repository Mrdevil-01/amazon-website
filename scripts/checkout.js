import {cart,deleteCart} from '../data/cart.js';
import {products as product} from '../data/products.js';
import {decimalFormat} from '../utils/money.js';
let html="";
function renderPage(matchingItem,items){
  html +=`<div class="cart-item-container js-cart-${matchingItem.id}">
  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchingItem.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchingItem.name}
      </div>
      <div class="product-price">
        $${decimalFormat(matchingItem.priceCents)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${items.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingItem.id}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      <div class="delivery-option">
        <input type="radio" checked
          class="delivery-option-input"
          name="delivery-option-${matchingItem.id}">
        <div>
          <div class="delivery-option-date">
            Tuesday, June 21
          </div>
          <div class="delivery-option-price">
            FREE Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingItem.id}">
        <div>
          <div class="delivery-option-date">
            Wednesday, June 15
          </div>
          <div class="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingItem.id}">
        <div>
          <div class="delivery-option-date">
            Monday, June 13
          </div>
          <div class="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}
cart.forEach((items)=>{
  let productId = items.id;
  let matchingItem;
  product.forEach((item2)=>{
    if(item2.id===productId){
      matchingItem = item2;
    }
  })
    console.log(matchingItem);
   renderPage(matchingItem,items);
   
  })

document.querySelector(".order-summary").innerHTML=html;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener('click',()=>{
    deleteCart(link.dataset.productId);
    const removeContainer = document.querySelector(`.js-cart-${link.dataset.productId}`);
    if(removeContainer){
    removeContainer.remove();
    }
    })
  }); 
//    const productId = link.dataset.productId;
//     deleteCart(productId);
    
//     let matchingItem = ''; 
//     product.forEach((item2) => {
//       if (item2.id === productId) {
//         matchingItem = item2;
//       }
//     });

//     const removeContainer = document.querySelector(`.js-cart-${matchingItem.id}`);
//     if (removeContainer) {
//       removeContainer.remove();
//     }
//   });