// CDFood small interactions
(function(){
  const q = (sel,root=document)=>root.querySelector(sel);
  const qa = (sel,root=document)=>Array.from(root.querySelectorAll(sel));

  // Banner slider auto rotate with slide effect
  const banners = qa('.banner-img');
  if(banners.length > 0){
    let currentIndex = 0;
    setInterval(()=>{
      const current = banners[currentIndex];
      current.classList.remove('active');
      current.classList.add('prev');
      
      currentIndex = (currentIndex + 1) % banners.length;
      const next = banners[currentIndex];
      next.classList.remove('prev');
      next.classList.add('active');
      
      // Clean up prev class after animation
      setTimeout(()=>{
        current.classList.remove('prev');
      }, 800);
    }, 4000); // Change every 4 seconds
  }

  // Mobile menu toggle
  const btn = document.createElement('button');
  btn.className = 'menu-toggle';
  btn.setAttribute('aria-label','Menu');
  btn.innerHTML = '☰';
  const topbar = q('.topbar .actions');
  if(topbar){
    topbar.prepend(btn);
  }
  const nav = q('.nav .menu');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  }

  // Star rating paint for cards without JS libraries
  qa('[data-stars]').forEach(el=>{
    const n = parseInt(el.getAttribute('data-stars')||'5',10);
    el.textContent = '★★★★★☆☆☆☆☆'.slice(5-n,10-n);
  });

  // Auto render products from JSON with pagination
  let ITEMS_PER_PAGE = 8; // 2 rows × 4 columns (desktop)
  
  // Adjust items per page based on screen width
  function getItemsPerPage() {
    if (window.innerWidth <= 480) {
      return 4; // 2 rows × 2 columns (mobile)
    } else if (window.innerWidth <= 768) {
      return 6; // 3 rows × 2 columns (tablet)
    }
    return 8; // 2 rows × 4 columns (desktop)
  }
  
  const categoryPages = {}; // Track current page for each category
  
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      Object.keys(data).forEach(category => {
        const section = q(`#${category}`);
        if(!section) return;
        const grid = section.querySelector('.grid');
        if(!grid) return;
        
        const products = data[category];
        if(products.length === 0) return;
        
        // Initialize pagination
        categoryPages[category] = 1;
        const itemsPerPage = getItemsPerPage();
        const totalPages = Math.ceil(products.length / itemsPerPage);
        
        // Create pagination container
        const paginationDiv = document.createElement('div');
        paginationDiv.className = 'pagination';
        paginationDiv.style.cssText = 'display:flex;gap:10px;justify-content:center;align-items:center;margin-top:20px;';
        
        // Function to render products for current page
        function renderPage(page) {
          grid.innerHTML = '';
          const currentItemsPerPage = getItemsPerPage();
          const start = (page - 1) * currentItemsPerPage;
          const end = start + currentItemsPerPage;
          const pageProducts = products.slice(start, end);
          
          pageProducts.forEach(product => {
            // Auto-generate name from image filename if not provided
            let productName = product.name;
            if (!productName && product.image) {
              const nameWithoutExt = product.image.replace(/\.[^/.]+$/, '');
              productName = nameWithoutExt
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            }
            
            // Default values
            const stars = product.stars || 5;
            const price = product.price || 'Liên hệ';
            
            const article = document.createElement('article');
            article.className = 'product';
            article.innerHTML = `
              <div class="thumb"><img src="products/${category}/${product.image || product}" alt="${productName}" /></div>
              <div class="name">${productName}</div>
              <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5-stars)}</div>
              <div class="price">Giá: ${price}</div>
            `;
            grid.appendChild(article);
          });
          
          // Update pagination buttons
          updatePagination();
        }
        
        // Function to update pagination UI
        function updatePagination() {
          const currentItemsPerPage = getItemsPerPage();
          const currentTotalPages = Math.ceil(products.length / currentItemsPerPage);
          
          if(currentTotalPages <= 1) {
            paginationDiv.style.display = 'none';
            return;
          }
          
          paginationDiv.innerHTML = '';
          const currentPage = categoryPages[category];
          
          // Previous button
          const prevBtn = document.createElement('button');
          prevBtn.textContent = '‹ Trước';
          prevBtn.className = 'pagination-btn';
          prevBtn.disabled = currentPage === 1;
          prevBtn.onclick = () => {
            if(currentPage > 1) {
              categoryPages[category]--;
              renderPage(categoryPages[category]);
            }
          };
          paginationDiv.appendChild(prevBtn);
          
          // Page info
          const pageInfo = document.createElement('span');
          pageInfo.textContent = `Trang ${currentPage}/${currentTotalPages}`;
          pageInfo.style.cssText = 'font-weight:600;color:#1f2937;';
          paginationDiv.appendChild(pageInfo);
          
          // Next button
          const nextBtn = document.createElement('button');
          nextBtn.textContent = 'Sau ›';
          nextBtn.className = 'pagination-btn';
          nextBtn.disabled = currentPage === currentTotalPages;
          nextBtn.onclick = () => {
            if(currentPage < currentTotalPages) {
              categoryPages[category]++;
              renderPage(categoryPages[category]);
            }
          };
          paginationDiv.appendChild(nextBtn);
        }
        
        // Insert pagination after grid
        grid.parentNode.insertBefore(paginationDiv, grid.nextSibling);
        
        // Render first page
        renderPage(1);
      });
    })
    .catch(err => console.log('Products JSON not found, using static HTML'));

  // Mobile menu toggle
  const mobileMenuToggle = q('.menu-toggle');
  const mobileMenuSidebar = q('#mobileMenuSidebar');
  const mobileMenuOverlay = q('#mobileMenuOverlay');
  const mobileMenuClose = q('#mobileMenuClose');

  if(mobileMenuToggle && mobileMenuSidebar && mobileMenuOverlay) {
    // Open menu
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuSidebar.classList.add('open');
      mobileMenuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    // Close menu
    function closeMenu() {
      mobileMenuSidebar.classList.remove('open');
      mobileMenuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    mobileMenuClose.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    qa('#mobileMenuSidebar .menu a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
})();
