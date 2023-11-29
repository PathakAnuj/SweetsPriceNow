document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const shops = document.querySelectorAll('.shops');
  
    shops.forEach(shop => {
      const shopName = shop.querySelector('div').innerText.toLowerCase();
      shop.style.display = shopName.includes(searchValue) ? 'block' : 'none';
    });
  });

  
 