document.addEventListener('DOMContentLoaded', function() {
  // Load services data
  fetch('data/services.json')
    .then(response => response.json())
    .then(data => {
      renderServices(data.services);
    });

  // Function to render services
  function renderServices(services) {
    const serviceSections = [
      'section5', 'section6', 'section9', 'section10', 'section11', 'section13'
    ];
    
    services.forEach((service, index) => {
      if (index < serviceSections.length) {
        const section = document.querySelector(`.${serviceSections[index]}`);
        if (section) {
          // Update title
          const title = section.querySelector('h3');
          if (title) title.textContent = service.title;
          
          // Update description
          const desc = section.querySelector('p');
          if (desc) desc.textContent = service.description;
          
          // Update features list
          const list = section.querySelector('ul');
          if (list) {
            list.innerHTML = service.features.map(item => `
              <li>${item}</li>
            `).join('');
          }
          
          // Update image
          const img = section.querySelector('img');
          if (img) img.src = service.image;
        }
      }
    });
  }
  
  // Generic function to handle all modal operations
  function setupModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }
    });
    
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  }
  
  setupModals();
});
