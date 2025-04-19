# Ứng dụng thời tiết đơn giản

Ứng dụng web đơn giản hiển thị thông tin thời tiết của các thành phố trên thế giới bằng Node.js.

## Tính năng

- Tìm kiếm thời tiết theo tên thành phố
- Hiển thị nhiệt độ, độ ẩm, tốc độ gió và cảm giác thời tiết

## Thư viện sử dụng

- express: tạo web server
- ejs: hiển thị giao diện
- axios: gọi API
- dotenv: đọc biến môi trường

## Cài đặt

1. Cài đặt các thư viện:

   ```
   npm install
   ```

2. Tạo file `.env` với nội dung:

   ```
   PORT=3001
   OPENWEATHER_API_KEY=your_api_key_here
   ```

   Đăng ký API key tại [OpenWeatherMap](https://openweathermap.org/api)

3. Chạy ứng dụng:

   ```
   npm start
   ```

   Hoặc chạy với nodemon:

   ```
   npm run dev
   ```

4. Mở trình duyệt ở địa chỉ `http://localhost:3001`

## Cách sử dụng

1. Nhập tên thành phố
2. Nhấn nút "Get Weather"
3. Xem kết quả thời tiết hiện tại

## Cấu trúc project

- `app.js` - mã chính khởi động server
- `views/index.ejs` - giao diện HTML
- `public/css/style.css` - CSS cho ứng dụng
- `.env` - cấu hình API key và port
