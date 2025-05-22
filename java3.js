const imagens = document.querySelectorAll('.galeria img');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    alert(`Você clicou em: ${img.alt}`);
  });
});