# CHỌN CÁCH THÊM SẢN PHẨM

## ⚡ Cách 1: TỰ ĐỘNG - Dùng file JSON (KHUYÊN DÙNG)

**Ưu điểm:** Không cần chỉnh HTML, chỉ thêm vào file JSON
**Độ khó:** ⭐⭐ (Dễ)

### Các bước:
1. Copy ảnh vào thư mục `products/danh-muc/`
2. Thêm thông tin vào `products.json`
3. Làm mới trang → Xong!

👉 **Xem hướng dẫn:** `HUONG-DAN-THEM-SAN-PHAM-TU-DONG.md`

---

## 🚀 Cách 2: HOÀN TOÀN TỰ ĐỘNG - Dùng script Node.js

**Ưu điểm:** Tự động scan thư mục, tạo JSON
**Độ khó:** ⭐ (Rất dễ, nếu có Node.js)

### Yêu cầu:
- Cài Node.js (tải tại nodejs.org)

### Các bước:
1. Copy tất cả ảnh vào thư mục `products/danh-muc/`
2. Mở Terminal/CMD tại thư mục này
3. Chạy: `node scan-products.js`
4. Mở `products.json` để chỉnh tên và giá
5. Làm mới trang → Xong!

**Script sẽ tự động:**
- Quét tất cả ảnh trong thư mục products
- Tạo file products.json
- Tự động đặt tên sản phẩm từ tên file

---

## ✍️ Cách 3: THÊM THỦ CÔNG - Chỉnh trực tiếp HTML

**Ưu điểm:** Không cần JSON, full control
**Độ khó:** ⭐⭐⭐ (Trung bình)

### Các bước:
1. Copy ảnh vào thư mục `products/danh-muc/`
2. Mở `index.html`
3. Tìm section tương ứng
4. Copy code mẫu và thay thông tin
5. Lưu file → Xong!

👉 **Xem hướng dẫn:** `HUONG-DAN-THEM-SAN-PHAM.md`

---

## 💡 Nên chọn cách nào?

### Chọn **Cách 1** (JSON) nếu:
- Bạn có nhiều sản phẩm cần thêm
- Muốn dễ quản lý
- Không muốn chỉnh HTML

### Chọn **Cách 2** (Script) nếu:
- Bạn có rất nhiều ảnh
- Đã cài Node.js
- Muốn tự động 100%

### Chọn **Cách 3** (Thủ công) nếu:
- Chỉ thêm vài sản phẩm
- Muốn control hoàn toàn HTML
- Không muốn dùng JSON

---

## 📊 So sánh

| Tiêu chí | Cách 1 (JSON) | Cách 2 (Script) | Cách 3 (HTML) |
|----------|---------------|-----------------|---------------|
| Độ dễ | ⭐⭐ | ⭐ | ⭐⭐⭐ |
| Tốc độ | Nhanh | Rất nhanh | Chậm |
| Linh hoạt | Cao | Cao | Rất cao |
| Yêu cầu | Không | Node.js | Không |

---

## 🎯 KHUYẾN NGHỊ

**Mới bắt đầu:** Dùng **Cách 1** (JSON)  
**Có nhiều sản phẩm:** Dùng **Cách 2** (Script)  
**Muốn tùy biến:** Dùng **Cách 3** (HTML)
