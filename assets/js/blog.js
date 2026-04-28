document.querySelectorAll('.content img').forEach(image => {
  const caption = document.createElement("figcaption");
  caption.textContent = image.getAttribute("alt");

  const figure = document.createElement('figure');
  image.parentNode.insertBefore(figure, image);
  figure.appendChild(image);
  figure.appendChild(caption);
});
