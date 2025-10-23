# HƯỚNG DẪN THÊM SẢN PHẨM

## 1. Cấu trúc thư mục ảnh
Thư mục `products` đã có 5 thư mục con cho 5 danh mục:
```
C:\Users\HP\Downloads\web cdfood\products\
  ├─ pho-mai-mozzarella/     (Phô mai mozzarella)
  ├─ bot-pho-mai/            (Bột Phô Mai)
  ├─ dong-lanh/              (Thực phẩm Đông lạnh)
  ├─ bot-gia-vi/             (Bột gia vị)
  └─ vien-tha-lau/           (Viên thả lẫu)
```

## 2. Quy tắc đặt tên file ảnh
- **Bỏ dấu tiếng Việt**
- **Viết thường toàn bộ**
- **Dấu cách thành gạch ngang `-`**

### Ví dụ:
| Danh mục | Tên sản phẩm | Tên file ảnh |
|---------|-------------|--------------|
| Bột Phô Mai | Bột phô mai Hàn Quốc | `bot-pho-mai/bot-pho-mai-han-quoc.jpg` |
| Phô mai mozzarella | Phô mai Anchor 2.5kg | `pho-mai-mozzarella/pho-mai-anchor-2-5kg.jpg` |
| Viên thả lẫu | Viên thả lẫu bò | `vien-tha-lau/vien-tha-lau-bo.jpg` |

## 3. Copy ảnh vào thư mục
Copy ảnh vào **thư mục con tương ứng**:
- Sản phẩm Phô mai mozzarella → `products/pho-mai-mozzarella/`
- Sản phẩm Bột Phô Mai → `products/bot-pho-mai/`
- Sản phẩm Đông lạnh → `products/dong-lanh/`
- Sản phẩm Bột gia vị → `products/bot-gia-vi/`
- Sản phẩm Viên thả lẫu → `products/vien-tha-lau/`

## 4. Thêm sản phẩm vào HTML
Mở file `index.html`, tìm section muốn thêm (ví dụ: `#pho-mai-mozzarella`)

Copy đoạn code này:
```html
<article class="product">
  <div class="thumb"><img src="products/thu-muc-danh-muc/ten-san-pham.jpg" alt="Tên Sản Phẩm" /></div>
  <div class="name">Tên Sản Phẩm</div>
  <div class="stars" data-stars="5">★★★★★</div>
  <div class="price">Giá: Liên hệ</div>
</article>
```

Thay:
- `products/ten-san-pham.jpg` → đường dẫn ảnh thật
- `Tên Sản Phẩm` → tên hiển thị
- `data-stars="5"` → số sao (1-5)
- Giá nếu có

## 5. Ví dụ đầy đủ

**Danh mục:** Bột Phô Mai  
**File ảnh:** `products/bot-pho-mai/bot-pho-mai-han-quoc.jpg`

**Code HTML (thêm vào section `#bot-pho-mai`):**
```html
<article class="product">
  <div class="thumb"><img src="products/bot-pho-mai/bot-pho-mai-han-quoc.jpg" alt="Bột phô mai Hàn Quốc" /></div>
  <div class="name">Bột phô mai Hàn Quốc 500g</div>
  <div class="stars" data-stars="5">★★★★★</div>
  <div class="price">Giá: 150.000đ</div>
</article>
```

## 6. Vị trí các section trong HTML

| Danh mục | ID trong HTML |
|----------|---------------|
| Phô mai mozzarella | `#pho-mai-mozzarella` |
| Bột Phô Mai | `#bot-pho-mai` |
| Thực phẩm Đông lạnh | `#dong-lanh` |
| Bột gia vị | `#bot-gia-vi` |
| Viên thả lẫu | `#vien-tha-lau` |

Tìm dòng `<!-- Thêm sản phẩm của bạn ở đây -->` trong mỗi section để biết chỗ thêm sản phẩm.
