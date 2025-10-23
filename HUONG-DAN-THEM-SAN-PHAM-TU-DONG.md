# HƯỚNG DẪN THÊM SẢN PHẨM TỰ ĐỘNG

## Cách hoạt động
Website sẽ **tự động đọc** file `products.json` và hiển thị sản phẩm.  
Bạn chỉ cần:
1. Copy ảnh vào thư mục danh mục
2. Thêm thông tin vào `products.json`
3. Làm mới trang → Sản phẩm tự động hiển thị!

---

## Bước 1: Copy ảnh vào thư mục

Copy ảnh vào đúng thư mục danh mục:
```
products/
  ├─ pho-mai-mozzarella/  → Phô mai
  ├─ bot-pho-mai/         → Bột phô mai
  ├─ dong-lanh/           → Đông lạnh
  ├─ bot-gia-vi/          → Bột gia vị
  └─ vien-tha-lau/        → Viên thả lẫu
```

Đặt tên file: **không dấu, viết thường, gạch ngang**
```
Ví dụ: Bột phô mai Hàn Quốc → bot-pho-mai-han-quoc.jpg
```

---

## Bước 2: Thêm vào products.json

Mở file `products.json`, tìm danh mục tương ứng và thêm:

```json
{
  "bot-pho-mai": [
    {
      "image": "bot-pho-mai-han-quoc.jpg",
      "name": "Bột phô mai Hàn Quốc 500g",
      "stars": 5,
      "price": "150.000đ"
    },
    {
      "image": "ten-san-pham-moi.jpg",
      "name": "Tên Sản Phẩm Mới",
      "stars": 5,
      "price": "Liên hệ"
    }
  ]
}
```

### Các trường thông tin:
- **image**: Tên file ảnh (đã copy vào thư mục)
- **name**: Tên hiển thị sản phẩm
- **stars**: Số sao (1-5)
- **price**: Giá (có thể là số hoặc "Liên hệ")

---

## Bước 3: Xem kết quả

1. Lưu file `products.json`
2. Mở (hoặc làm mới) `index.html` trong trình duyệt
3. Sản phẩm tự động hiển thị!

---

## Ví dụ đầy đủ

### 1. Copy ảnh
```
products/bot-gia-vi/bot-gia-vi-bbq.jpg
```

### 2. Thêm vào products.json
```json
{
  "bot-gia-vi": [
    {
      "image": "bot-gia-vi-bbq.jpg",
      "name": "Bột gia vị BBQ 500g",
      "stars": 5,
      "price": "95.000đ"
    }
  ]
}
```

### 3. Làm mới trang → Xong!

---

## Lưu ý quan trọng

⚠️ **File JSON phải đúng cú pháp:**
- Các item cách nhau bởi dấu phẩy `,`
- Item cuối cùng KHÔNG có dấu phẩy
- Dùng dấu ngoặc kép `"` cho string
- Kiểm tra bằng JSONLint.com nếu gặp lỗi

✅ **Đúng:**
```json
{
  "bot-gia-vi": [
    {"image": "sp1.jpg", "name": "SP 1", "stars": 5, "price": "100đ"},
    {"image": "sp2.jpg", "name": "SP 2", "stars": 4, "price": "200đ"}
  ]
}
```

❌ **Sai:**
```json
{
  "bot-gia-vi": [
    {"image": "sp1.jpg", "name": "SP 1", "stars": 5, "price": "100đ"},
    {"image": "sp2.jpg", "name": "SP 2", "stars": 4, "price": "200đ"},  ← Dấu phẩy thừa
  ]
}
```

---

## Cấu trúc file products.json

```json
{
  "pho-mai-mozzarella": [
    // Danh sách sản phẩm phô mai
  ],
  "bot-pho-mai": [
    // Danh sách sản phẩm bột phô mai
  ],
  "dong-lanh": [
    // Danh sách sản phẩm đông lạnh
  ],
  "bot-gia-vi": [
    // Danh sách sản phẩm bột gia vị
  ],
  "vien-tha-lau": [
    // Danh sách sản phẩm viên thả lẫu
  ]
}
```

---

## Troubleshooting

**Sản phẩm không hiển thị?**
1. Kiểm tra tên file ảnh có đúng không
2. Kiểm tra file JSON có lỗi cú pháp không
3. Mở Console trong browser (F12) xem lỗi

**Ảnh không load?**
- Kiểm tra đường dẫn: `products/danh-muc/ten-file.jpg`
- Kiểm tra ảnh có trong thư mục không
- Kiểm tra tên file có đúng (case-sensitive)
