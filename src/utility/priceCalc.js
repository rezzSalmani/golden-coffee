export const calculateTotalPrice = userCart => {
  let totalPrice = 0;
  for (const product of userCart) {
    const productPrice = product.discountedPrice;
    const productQuantity = product.cartQuantity;
    const productTotalPrice = productPrice * productQuantity;
    totalPrice += productTotalPrice;
  }
  return totalPrice;
};
export const calculateDiscount = (price, discountPercent) => {
  const percent = (price * discountPercent) / 100;
  // Calculate the discounted price

  const discountedPrice = price - percent;
  return discountedPrice;
};
