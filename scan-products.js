// Script để tự động scan thư mục products và tạo file products.json
// Chạy: node scan-products.js

const fs = require('fs');
const path = require('path');

const categories = [
  'pho-mai-mozzarella',
  'bot-pho-mai',
  'dong-lanh',
  'bot-gia-vi',
  'vien-tha-lau'
];

const productsData = {};

categories.forEach(category => {
  const categoryPath = path.join(__dirname, 'products', category);
  
  // Kiểm tra thư mục có tồn tại không
  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Thư mục không tồn tại: ${category}`);
    productsData[category] = [];
    return;
  }

  // Đọc tất cả file trong thư mục
  const files = fs.readdirSync(categoryPath);
  
  // Lọc chỉ lấy file ảnh (jpg, png, jpeg, webp)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
  });

  console.log(`✅ Tìm thấy ${imageFiles.length} ảnh trong ${category}`);

  // Tạo danh sách sản phẩm từ tên file
  productsData[category] = imageFiles.map(file => {
    // Tự động tạo tên sản phẩm từ tên file
    const nameWithoutExt = path.parse(file).name;
    const productName = nameWithoutExt
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      image: file,
      name: productName,
      stars: 5,
      price: 'Liên hệ'
    };
  });
});

// Ghi ra file products.json
const jsonContent = JSON.stringify(productsData, null, 2);
fs.writeFileSync(path.join(__dirname, 'products.json'), jsonContent, 'utf8');

console.log('\n✅ Đã tạo file products.json thành công!');
console.log('📝 Mở file products.json để chỉnh sửa tên và giá sản phẩm.');
