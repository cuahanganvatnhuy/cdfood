# CDFood - Website Thực Phẩm

Website bán thực phẩm trực tuyến với giao diện hiện đại, responsive.

## Tính năng

- ✅ Trang chủ với banner slider
- ✅ Phần ưu đãi trong tuần
- ✅ 5 danh mục sản phẩm:
  - Phô mai mozzarella
  - Bột phô mai
  - Thực phẩm đông lạnh
  - Bột gia vị
  - Viên thả lẫu
- ✅ Phân trang tự động (8 sản phẩm/trang desktop, 4 sản phẩm/trang mobile)
- ✅ Mobile menu sidebar với animation
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Hệ thống quản lý sản phẩm qua JSON

## Cấu trúc

```
web cdfood/
├── index.html          # Trang chính
├── style/
│   └── style.css       # CSS responsive
├── main/
│   └── app.js          # JavaScript logic
├── products/           # Thư mục chứa ảnh sản phẩm
│   ├── pho-mai-mozzarella/
│   ├── bot-pho-mai/
│   ├── dong-lanh/
│   ├── bot-gia-vi/
│   └── vien-tha-lau/
├── products.json       # Dữ liệu sản phẩm
└── img/                # Ảnh banner, logo

```

## Cách sử dụng

1. Clone repo
2. Mở `index.html` trong trình duyệt
3. Để thêm sản phẩm:
   - Copy ảnh vào thư mục `products/[danh-muc]/`
   - Thêm thông tin vào `products.json`
   - Chỉ cần nhập tên ảnh, hệ thống tự động thêm tên, giá, và đánh giá mặc định

## Responsive

- **Desktop:** 4 sản phẩm/hàng
- **Tablet:** 2-3 sản phẩm/hàng
- **Mobile:** 2 sản phẩm/hàng

## Công nghệ

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- Vanilla JavaScript
- JSON cho quản lý dữ liệu

## Liên hệ

- Phone: 0796579745
- Email: cdfood@gmail.com
