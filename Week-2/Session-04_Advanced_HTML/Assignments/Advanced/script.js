// Define the restaurant objects
const mainstreetcafe = {
    id: 'mainstreetcafe',
    name: 'Main Street Cafe',
    reviews: []
  };
  
  const greekhouse = {
    id: 'greekhouse',
    name: 'Greek House',
    reviews: []
  };
  
  
  // Add submit event listener to the form
  document.getElementById('reviewForm').addEventListener('submit', submitReview);
  
  // Function to submit the review
  // Function to submit the review
function submitReview(e) {
    e.preventDefault(); // Prevent form submission

    const restaurantSelect = document.getElementById('restaurant');
  
  // Add restaurant options to the dropdown
  const restaurantOptions = [mainstreetcafe, greekhouse];
  
  restaurantOptions.forEach((restaurant) => {
    const option = document.createElement('option');
    option.value = restaurant.id;
    option.text = restaurant.name;
    restaurantSelect.appendChild(option);
  });
  
    // Get the selected restaurant from the dropdown
    const selectedRestaurant = restaurantSelect.value;
  
    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const rating = document.getElementById('rating').value;
    const details = document.getElementById('details').value;
  
    // Create a new review object
    const review = {
      name,
      date,
      rating,
      details
    };
  }
  
  