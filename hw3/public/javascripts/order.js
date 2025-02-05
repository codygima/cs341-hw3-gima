// Author: Cody Gima

/**
 * Provides functionality to the order button on the page
 *
 **/
$(document).ready(function () {
  // Event listener for the "Order" button
  $("form").on("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const notes = $("#notes").val();
    const topping = $("input[name='topping']:checked").val();
    const quantity = $("#quantity").val();

    if (notes && notes.toLowerCase().includes("vegan")) {
      alert("Warning this cheesecake has dairy.");
    } else {
      // Replace the form with a confirmation message
      $("form").replaceWith(`
        <div>
          <h3>Thank you! Your order has been placed.</h3>
          <p><strong>Topping:</strong> ${topping}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Notes:</strong> ${notes}</p>
        </div>
      `);
    }
  });
});
