// Define variables
const minusIcons = document.querySelectorAll('.faq-title-icon-minus');
const plusIcons = document.querySelectorAll('.faq-title-icon-plus');

// Event listener to each minus icon
minusIcons.forEach(function (minusIcon) {
  minusIcon.addEventListener('click', function () {
    // hide next paragraph
    const nextParagraph = minusIcon.parentElement.nextElementSibling;
    nextParagraph.classList.add('hide');
    // display icon plus
    minusIcon.previousElementSibling.classList.remove('hide');
    // remove icon minus
    minusIcon.classList.add('hide');
  });
});

// Event listener to each plus icon
plusIcons.forEach(function (plusIcon) {
  plusIcon.addEventListener('click', function () {
    // show next paragraph
    const nextParagraph = plusIcon.parentElement.nextElementSibling;
    nextParagraph.classList.remove('hide');
    // display icon minus
    plusIcon.nextElementSibling.classList.remove('hide');
    // hide icon plus
    plusIcon.classList.add('hide');
  });
});
