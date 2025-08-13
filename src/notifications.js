class NotificationSystem {
  constructor(containerId = 'notification-container') {
    this.container = document.getElementById(containerId);

    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = containerId;
      document.body.appendChild(this.container);
    }

    this.container.classList.add('notification-container');
  }

  show(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerText = message;

    this.container.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, duration);
  }

  success(message, duration) {
    this.show(message, 'success', duration);
  }

  error(message, duration) {
    this.show(message, 'error', duration);
  }

  warning(message, duration) {
    this.show(message, 'warning', duration);
  }

  info(message, duration) {
    this.show(message, 'info', duration);
  }
}