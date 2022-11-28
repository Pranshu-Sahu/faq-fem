const accordionHeaders = document.querySelectorAll("[data-accordion-header]")
function toggleNav(e) {
  closePreviousFaq()
  console.log(e.currentTarget);
  let target = e.currentTarget.parentElement.nextElementSibling;
  const expanded = e.currentTarget.getAttribute('aria-expanded') === 'true' || false
  e.currentTarget.setAttribute('aria-expanded', !expanded)
  target.setAttribute('aria-hidden', expanded)
}
function closePreviousFaq() {
  accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.setAttribute('aria-expanded',false)
    accordionHeader.parentElement.nextElementSibling.setAttribute('aria-hidden',true)
  })
}
accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', toggleNav)
})