function showModal(imgElement) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modalImg.src = imgElement.src; // 同じ画像を大きく表示
  modal.style.display = 'flex'; // モーダルを表示
}

function hideModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none'; // モーダルを閉じる
}