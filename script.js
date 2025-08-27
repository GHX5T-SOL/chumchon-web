// Starfield background
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, stars;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    stars = Array.from({ length: Math.min(600, Math.floor(width * height / 5000)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
    }));
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      const size = s.z * 1.6;
      ctx.fillStyle = `rgba(${60 + s.z * 200}, ${180 + s.z * 40}, ${255}, ${0.7 * s.z})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
      ctx.fill();
      s.x += 0.02 + s.z * 0.2;
      if (s.x > width + 2) s.x = -2;
    }
    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  resize();
  render();
})();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) e.target.classList.add('visible');
}, { threshold: 0.2 });
reveals.forEach(el => io.observe(el));

// Parallax on hero art
const parallax = document.querySelector('.parallax');
if (parallax) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    parallax.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();


