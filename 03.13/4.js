let likeButton = document.querySelector('.like');
let likeCount = 0;

// Check if like count exists in localStorage
if (localStorage.getItem('likeCount')) {
  likeCount = localStorage.getItem('likeCount');
  likeButton.textContent = `Unlike ${likeCount}`;
}

likeButton.addEventListener('click', () => {
  if (likeButton.textContent === 'Like') {
    likeCount++;
    likeButton.textContent = `Unlike ${likeCount}`;
    localStorage.setItem('likeCount', likeCount); // Save to localStorage
    console.log(true);
  } else {
    likeButton.textContent = 'Like';
    localStorage.removeItem('likeCount'); // Remove from localStorage
    likeCount = 0;
    console.log(false);
  }
});


