// FAQ Accordion with Accessibility and Keyboard Navigation
class FAQAccordion {
  constructor() {
    this.faqButtons = document.querySelectorAll('.faq-title');
    this.init();
  }

  init() {
    // Add event listeners to each FAQ button
    this.faqButtons.forEach((button, index) => {
      // Click event
      button.addEventListener('click', () => this.toggleFAQ(button));

      // Keyboard events
      button.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });
  }

  toggleFAQ(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const answer = button.nextElementSibling;
    const plusIcon = button.querySelector('.faq-title-icon-plus');
    const minusIcon = button.querySelector('.faq-title-icon-minus');

    if (isExpanded) {
      // Collapse the FAQ
      button.setAttribute('aria-expanded', 'false');
      answer.classList.add('hide');
      plusIcon.classList.remove('hide');
      minusIcon.classList.add('hide');
    } else {
      // Expand the FAQ
      button.setAttribute('aria-expanded', 'true');
      answer.classList.remove('hide');
      plusIcon.classList.add('hide');
      minusIcon.classList.remove('hide');
    }
  }

  handleKeydown(event, currentIndex) {
    const key = event.key;

    switch (key) {
      case 'Enter':
      case ' ': // Spacebar
        event.preventDefault();
        this.toggleFAQ(event.target.closest('.faq-title'));
        break;

      case 'ArrowDown':
        event.preventDefault();
        this.focusNextFAQ(currentIndex);
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.focusPreviousFAQ(currentIndex);
        break;

      case 'Home':
        event.preventDefault();
        this.focusFirstFAQ();
        break;

      case 'End':
        event.preventDefault();
        this.focusLastFAQ();
        break;
    }
  }

  focusNextFAQ(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.faqButtons.length;
    this.faqButtons[nextIndex].focus();
  }

  focusPreviousFAQ(currentIndex) {
    const prevIndex =
      currentIndex === 0 ? this.faqButtons.length - 1 : currentIndex - 1;
    this.faqButtons[prevIndex].focus();
  }

  focusFirstFAQ() {
    this.faqButtons[0].focus();
  }

  focusLastFAQ() {
    this.faqButtons[this.faqButtons.length - 1].focus();
  }
}

// Initialize the FAQ accordion when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FAQAccordion();
});
