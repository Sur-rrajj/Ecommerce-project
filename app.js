const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Amul Butter 500 g",
    price: 275.00,
    colors: [
      {
        code: "Yellow",
        img: "amul-butter-500-g.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Tomato Ketchup ",
    price: 94.00,
    colors: [
      {
        code: "Blue",
        img: "kissan-fresh-tomato-ketchup.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Maggi Atta Noodles",
    price: 74.00,
    colors: [
      {
        code: "Green",
        img: "maggi-nutri-licious-masala-veg-atta.webp",
      },
    ],
  },
  {
    id: 4,
    title: "McCain French Fries",
    price: 137.00,
    colors: [
      {
        code: "Red",
        img: "mccain-french-fries.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Dabur Honey",
    price: 349.00,
    colors: [
      {
        code: "gray",
        img: "dabur-honey.webp",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
