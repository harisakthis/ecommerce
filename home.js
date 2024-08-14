function subscribe() {
    var emailInput = document.querySelector('input[name="email"]');
    var subscribeBtn = document.querySelector('.input-group-append button');

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
      // Valid email, reset input box content, update button content, and add animation
      emailInput.value = '';
      subscribeBtn.innerHTML = 'Subscribed<span class="party-emoji">🎉</span>';
      subscribeBtn.classList.add('subscribed', 'subscribe-animation');
      subscribeBtn.disabled = true;

      // You can also add an AJAX request here to handle subscription on the server.
      // For simplicity, I'm just displaying a message in the console.
      console.log('Subscribed successfully!');
    } else {
      // Invalid email, you may want to provide some feedback to the user.
      alert('Please enter a valid email address.');
    }
  }

  //carousel

 
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//signin btn
function openSignInPage() {
  // Add code here to open your sign-in page
  // For example, you can use window.location.href to navigate to the sign-in page
  window.location.href = 'C:\\Users\\SM.HARIHARASUTHAN\\3D Objects\\ecommerce\\Animated sign-in and sign-up page\\index.html';
}

