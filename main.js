function Scroll_controller() {
  this.last_position = 0;
  // Bind the methods to the instance
  this.scroll_to_top = this.scroll_to_top.bind(this);
  this.return_to_last_position = this.return_to_last_position.bind(this);
  // Remove any existing scroll controller
  const existing_scroll_controller = document.querySelector('.scroll-controller');
  if (existing_scroll_controller) {
    existing_scroll_controller.remove();
  }
}

Scroll_controller.prototype.create_scroll_controller = function() {
  const scroll_controller_div = document.createElement('div');
  scroll_controller_div.className = 'scroll-controller';
  const scroll_up_div = document.createElement('div');
  scroll_up_div.id = 'scroll-controller-up';
  scroll_up_div.textContent = '▲';
  const scroll_down_div = document.createElement('div');
  scroll_down_div.id = 'scroll-controller-down';
  scroll_down_div.textContent = '▼';
  scroll_controller_div.appendChild(scroll_up_div);
  scroll_controller_div.appendChild(scroll_down_div);
  document.body.appendChild(scroll_controller_div);
  // Add event listeners
  scroll_up_div.addEventListener('click', this.scroll_to_top);
  scroll_down_div.addEventListener('click', this.return_to_last_position);
};

Scroll_controller.prototype.scroll_to_top = function() {
  this.last_position = window.scrollY;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

Scroll_controller.prototype.return_to_last_position = function() {
  window.scrollTo({
    top: this.last_position,
    behavior: 'smooth'
  });
};

document.addEventListener("DOMContentLoaded", function() {
  const sc = new Scroll_controller();
  sc.create_scroll_controller();
});
