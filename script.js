// Lấy phần tử container cho trái tim và thông điệp cuối
const heartsContainer = document.getElementById("hearts-container");
const message = document.getElementById("message");

// Hàm tạo trái tim bay
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Vị trí ngẫu nhiên cho trái tim
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 2; // Thời gian delay ngẫu nhiên

    heart.style.left = `${xPos}%`;
    heart.style.top = `${yPos}%`;
    heart.style.animationDelay = `-${delay}s`;

    // Thêm trái tim vào container
    heartsContainer.appendChild(heart);

    // Sau khi hiệu ứng hoàn tất, ẩn trái tim
    setTimeout(() => {
      heart.remove();
    }, 4000); // Thời gian là 4s
  }
}

// Hàm hiển thị thông điệp cuối
function showFinalMessage() {
  setTimeout(() => {
    message.style.display = "block";
  }, 4000); // Hiển thị thông điệp sau khi các trái tim bay xong
}

// Khởi tạo các hiệu ứng
window.onload = function () {
  createHearts(); // Tạo trái tim bay
  showFinalMessage(); // Hiển thị thông điệp sau 4s
};
