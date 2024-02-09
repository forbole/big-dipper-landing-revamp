/**
 * "When the user clicks the button, scroll to the top of the page."
 *
 * The window.scrollTo() method scrolls the window to a particular place in the document. The top
 * property tells the browser to scroll to the top of the page.
 * The behavior property tells the browser
 * to smoothly scroll to the top of the page
 */
export default function handleScrollToTop() {
  window.scrollTo({ behavior: "smooth", top: 0 });
}
