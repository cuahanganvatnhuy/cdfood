document.addEventListener('DOMContentLoaded', function() {
  const productsGrid = document.getElementById('productsGrid');
  const categoryList = document.getElementById('categoryList');
  
  // Sample product data - in a real app, this would come from an API
  let productsData = {};
  let categories = [];
  let currentCategory = 'all';
  
  // Fetch products from products.json
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      productsData = data;
      categories = Object.keys(data);
      
      // Display all categories and products
      displayCategories();
      displayProducts();
    })
    .catch(error => {
      console.error('Error loading products:', error);
      productsGrid.innerHTML = '<p class="error-message">Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.</p>';
    });
  
  // Display categories
  function displayCategories() {
    // Clear existing buttons first
    categoryList.innerHTML = '';
    
    // Add 'All' category button
    const allButton = document.createElement('button');
    allButton.className = `category-btn ${currentCategory === 'all' ? 'active' : ''}`;
    allButton.textContent = 'Tất cả';
    allButton.dataset.category = 'all';
    allButton.addEventListener('click', () => filterProducts('all'));
    categoryList.appendChild(allButton);
    
    // Add other categories
    categories.forEach(category => {
      const categoryName = formatCategoryName(category);
      const button = document.createElement('button');
      button.className = `category-btn ${currentCategory === category ? 'active' : ''}`;
      button.textContent = categoryName;
      button.dataset.category = category;
      button.addEventListener('click', () => filterProducts(category));
      categoryList.appendChild(button);
    });
  }
  
  // Format category name for display
  function formatCategoryName(category) {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Filter products by category
  function filterProducts(category) {
    currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    displayProducts();
  }
  
  // Display products based on current filter
  function displayProducts() {
    productsGrid.innerHTML = '';
    
    if (currentCategory === 'all') {
      // Show all products from all categories
      Object.entries(productsData).forEach(([category, products]) => {
        products.forEach((product, index) => {
          productsGrid.appendChild(createProductCard(product, category, index));
        });
      });
    } else if (productsData[currentCategory]) {
      // Show products from selected category
      productsData[currentCategory].forEach((product, index) => {
        productsGrid.appendChild(createProductCard(product, currentCategory, index));
      });
    }
    
    // If no products found
    if (productsGrid.children.length === 0) {
      productsGrid.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm nào.</p>';
    }
  }
  
  // Create product card element
  function createProductCard(product, category, index) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Extract product name from image filename
    let productName = product.image.replace(/\.(jpg|jpeg|png|gif)$/i, '');
    productName = productName.replace(/[-_]/g, ' ');
    
    // Show 'Liên hệ' instead of price
    
    productCard.innerHTML = `
      <img src="products/${category}/${product.image}" alt="${productName}" class="product-image" onerror="this.src='img/placeholder.jpg'">
      <div class="product-info">
        <span class="product-category">${formatCategoryName(category)}</span>
        <h3 class="product-name" title="${productName}">${productName}</h3>
        <div class="product-actions">
          <span class="product-contact">Liên hệ</span>
        </div>
      </div>
    `;
    
    return productCard;
  }
  
  // Add product to cart
  function addToCart(category, index) {
    const product = productsData[category][index];
    // In a real app, you would add the product to a shopping cart
    console.log('Added to cart:', product);
    alert('Đã thêm sản phẩm vào giỏ hàng!');
    
    // Update cart count
    updateCartCount();
  }
  
  // Update cart count
  function updateCartCount() {
    // In a real app, you would get the count from your cart state
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const currentCount = parseInt(cartCount.textContent) || 0;
      cartCount.textContent = currentCount + 1;
      cartCount.style.display = 'flex';
    }
  }
  
  // Initialize cart count
  updateCartCount();
});
