// Author: Cody Gima

/**
 * Provides functionality to the dropdown button that displays
 * the different months
 *
 **/
$(document).ready(function () {
  $(".dropbtn").on("click", function () {
    $(".dropdown-content").toggle(); // Toggle dropdown visibility
  });

  $(".dropdown-content li").on("click", function () {
    const selectedMonth = $(this).text();
    $(".dropbtn").text(selectedMonth); // Update button text
    $(".dropdown-content").hide(); // Hide dropdown
  });
});
