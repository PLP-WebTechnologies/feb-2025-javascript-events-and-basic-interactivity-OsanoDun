// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const keypressInput = document.getElementById('keypressInput');
  const accordionToggle = document.querySelector('.accordion-toggle');
  const accordionContent = document.querySelector('.accordion-content');
  const galleryImage = document.getElementById('galleryImage');
  const nextImage = document.getElementById('nextImage');
  const signupForm = document.getElementById('signupForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailFeedback = document.getElementById('emailFeedback');
  const passwordFeedback = document.getElementById('passwordFeedback');

  // Gallery image array
  const images = [
    'https://www.pexels.com/photo/photo-of-person-walking-on-dessert-3889892/',
    'https://www.pexels.com/photo/photo-of-person-walking-on-dessert-3889892//ff7f7f',
    'https://www.pexels.com/photo/photo-of-person-walking-on-dessert-3889892/7fff7f',
    'https://www.pexels.com/photo/photo-of-person-walking-on-dessert-3889892//7f7fff'
  ];
  let currentImageIndex = 0;

  // Button click
  actionBtn.addEventListener('click', () => {
    actionBtn.textContent = 'Clicked!';
    actionBtn.style.backgroundColor = '#2ecc71';
  });

  // Button double-click
  actionBtn.addEventListener('dblclick', () => {
    alert('Secret double-click revealed!');
  });

  // Hover effects
  actionBtn.addEventListener('mouseenter', () => {
    actionBtn.textContent = 'Hovering...';
  });
  actionBtn.addEventListener('mouseleave', () => {
    actionBtn.textContent = 'Click Me!';
  });

  // Keypress detection
  keypressInput.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });

  // Accordion toggle
  accordionToggle.addEventListener('click', () => {
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
  });

  // Image gallery
  nextImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
  });

  // Email validation feedback
  emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailFeedback.textContent = emailRegex.test(emailInput.value) ? '' : 'Invalid email format';
  });

  // Password validation feedback
  passwordInput.addEventListener('input', () => {
    passwordFeedback.textContent = passwordInput.value.length >= 8 ? '' : 'Password must be at least 8 characters';
  });

  // Form validation on submit
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const passwordValid = passwordInput.value.length >= 8;

    if (emailValid && passwordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix errors before submitting.');
    }
  });
});
