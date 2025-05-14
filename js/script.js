// Add to cart button functionality
const cartItems = [];

const updateCartDisplay = () => {
  const cartTotal = document.getElementById("cart-total");
  if (cartTotal) {
    let total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total;
  }
};

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const name = product.querySelector("h3").textContent;
    const priceText = product.querySelector("p").textContent;
    const price = parseInt(priceText.replace("Ksh", "").trim());

    cartItems.push({ name, price });
    alert(`${name} added to cart!`);
    updateCartDisplay();
  });
});

// Contact form validation
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you for contacting us!");
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}
