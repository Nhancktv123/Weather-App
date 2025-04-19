const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");

dotenv.config();

const app = express();

// Cài đặt middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const apiKey = process.env.OPENWEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Xử lý form tìm kiếm thời tiết
app.post("/weather", async (req, res) => {
  const city = req.body.city;

  try {
    // Call API lấy thời tiết
    const weatherResponse = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric", // Nhiệt độ theo độ C
      },
    });

    const data = weatherResponse.data;

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: data.main.feels_like,
    };

    // Render trang với data
    res.render("index", { weather: weatherData, error: null });
  } catch (error) {
    console.log("Lỗi khi lấy dữ liệu thời tiết:", error.message);

    const errorMessage =
      error.response && error.response.status === 404
        ? "Không tìm thấy thành phố. Kiểm tra lại tên thành phố."
        : "Lỗi khi lấy dữ liệu thời tiết. Thử lại sau.";

    res.render("index", { weather: null, error: errorMessage });
  }
});

// Chạy server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
