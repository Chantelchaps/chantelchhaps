/**
* Template Name: Kelly
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  // Function to toggle light/dark mode
function toggleTheme() {
  // Get the current theme
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // Toggle between 'light' and 'dark'
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Set the new theme
  document.documentElement.setAttribute("data-theme", newTheme);

  // Optionally save the theme to localStorage
  localStorage.setItem("theme", newTheme);
}

// Add event listener to the toggle button
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Load the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});


  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();

// Get the Scroll-to-Top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to display or hide the button based on scroll position
window.onscroll = function () {
  toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block"; // Show the button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button
  }
}

// Smooth scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {

  // Reference to the clock display element
  const clockElement = document.getElementById('clock');

  // Function to update the clock every second
  function updateClock() {
      // Get the current time
      const now = new Date();

      // Format hours, minutes, and seconds with leading zero if necessary
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Pad hours, minutes, and seconds with leading zeros if single digit
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // Set the time in the clock element
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Call the updateClock function once to immediately show the time when page loads
  updateClock();

  // Use setInterval to update the clock every second (1000 ms = 1 second)
  setInterval(updateClock, 1000);
});
function updateClock() {
  const now = new Date();
  console.log(now);  // This will log the current time in the console every second
}
console.log("JavaScript Loaded");

document.addEventListener("DOMContentLoaded", function() {
    // ... the rest of your clock code
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect form data
  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: {
          country: document.getElementById('country').value,
          addressLine1: document.getElementById('addressLine1').value,
          addressLine2: document.getElementById('addressLine2').value,
          street: document.getElementById('street').value,
          city: document.getElementById('city').value,
          state: document.getElementById('state').value,
          postalCode: document.getElementById('postalCode').value,
      },
      serviceType: document.getElementById('serviceType').value,
      serviceDetails: document.getElementById('serviceDetails').value,
      stylistPreference: document.getElementById('stylistPreference').value,
      appointmentDate: document.getElementById('appointmentDate').value,
      additionalNotes: document.getElementById('additionalNotes').value,
      serviceRating: Number(document.getElementById('serviceRating').value),
      stylistRating: Number(document.getElementById('stylistRating').value),
      appointmentRating: Number(document.getElementById('appointmentRating').value),
      paymentMethod: document.getElementById('paymentMethod').value
  };

  // Calculate the average of numeric attributes
  const averageRating = (
      (formData.serviceRating + formData.stylistRating + formData.appointmentRating) / 3
  ).toFixed(2);

  // Display results in the console
  console.log(formData);
  console.log(`Average Rating: ${averageRating}`);

  // Display the results on the webpage
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
      <h2>Form Data</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Address:</strong> ${formData.address.addressLine1}, ${formData.address.addressLine2}, ${formData.address.street}, ${formData.address.city}, ${formData.address.state}, ${formData.address.postalCode}, ${formData.address.country}</p>
      <p><strong>Service Type:</strong> ${formData.serviceType}</p>
      <p><strong>Service Details:</strong> ${formData.serviceDetails}</p>
      <p><strong>Stylist Preference:</strong> ${formData.stylistPreference}</p>
      <p><strong>Appointment Date:</strong> ${formData.appointmentDate}</p>
      <p><strong>Additional Notes:</strong> ${formData.additionalNotes}</p>
      <p><strong>Payment Method:</strong> ${formData.paymentMethod}</p>
      <p><strong>Average Rating:</strong> ${averageRating}</p>
  `;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to validate data first

  // Collect form data
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;
  const addressLine1 = document.getElementById('addressLine1').value;
  const addressLine2 = document.getElementById('addressLine2').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const postalCode = document.getElementById('postalCode').value;
  
  const serviceRating = parseFloat(document.getElementById('serviceRating').value);
  const stylistRating = parseFloat(document.getElementById('stylistRating').value);
  const appointmentRating = parseFloat(document.getElementById('appointmentRating').value);

  // Email validation (basic regex check)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; // Stop form submission
  }

  // Phone number validation (only allow 10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  // Address validation (check that all address fields are filled)
  if (!street || !addressLine1 || !city || !state || !postalCode || !country) {
      alert("Please complete the full address.");
      return;
  }

  // Concatenate the address into a single string
  const fullAddress = `${street}, ${addressLine1} ${addressLine2}, ${city}, ${state} ${postalCode}, ${country}`;
  console.log('Full Address:', fullAddress);

  // Calculate average rating
  const avgRating = (serviceRating + stylistRating + appointmentRating) / 3;

  // Create result text
  const resultText = document.createElement('p');
  resultText.textContent = `Average Rating: ${avgRating.toFixed(1)}`;

  // Format the text color based on the rating
  if (avgRating <= 3.4) {
      resultText.style.color = 'red'; // Red for low ratings
  } else if (avgRating <= 7.1) {
      resultText.style.color = 'orange'; // Orange for mid-range ratings
  } else {
      resultText.style.color = 'green'; // Green for high ratings
  }

  // Display the result text on the page
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';  // Clear previous results
  resultsDiv.appendChild(resultText);

  // Optional: Display additional data in the console or UI as needed
  console.log('Form Data:', {
      firstName,
      lastName,
      email,
      phone,
      fullAddress,
      serviceRating,
      stylistRating,
      appointmentRating
  });
});

/*Light/Dark Mode Toggle
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mode-toggle');
  const body = document.body;

  // Check if the button exists
  if (!toggleButton) {
    console.error("Light/Dark mode toggle button not found!");
    return;
  }

  // Default to Light Mode
  body.classList.add('light-background');

  // Toggle the Light/Dark Mode on button click
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-background')) {
      body.classList.remove('light-background');
      body.classList.add('dark-background');
    } else {
      body.classList.remove('dark-background');
      body.classList.add('light-background');
    }
  });
});