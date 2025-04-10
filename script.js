// Booking Form Submission
function handleBooking(event) {
  event.preventDefault();
  const dates = Array.from(document.querySelectorAll('input[type="date"]')).map(input => input.value);
  const pickup = document.querySelector('input[type="text"]').value.trim();
  const adultCount = parseInt(document.querySelector('input[type="number"]').value) || 0;
  const email = document.querySelector('input[type="email"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value.trim();
  const agreed = document.querySelector('input[type="checkbox"]').checked;

  if (dates.filter(Boolean).length < 3) {
    alert("Please select 3 departure dates.");
    return false;
  }
  if (!pickup || adultCount < 1 || !email || !phone || !agreed) {
    alert("Please fill in all required fields and agree to the T&Cs.");
    return false;
  }

  const originalPrice = 388;
  const discount = 20;
  const sellingPrice = originalPrice - (originalPrice * discount / 100);

  console.log("Booking:", { dates, pickup, adultCount, email, phone, sellingPrice });
  alert("Thank you! We'll contact you once the tour is confirmed.");
  return true;
}

// Tour Filter by Country
function filterTours(country) {
  const cards = document.querySelectorAll('.country-tours .tour-card');
  cards.forEach(card => {
    const match = country === 'all' || card.dataset.country === country;
    card.style.display = match ? 'block' : 'none';
  });
}

// Optional: Pause carousel on hover
const carousel = document.querySelector('.carousel-images');
if (carousel) {
  carousel.addEventListener('mouseover', () => carousel.style.animationPlayState = 'paused');
  carousel.addEventListener('mouseout', () => carousel.style.animationPlayState = 'running');
}
