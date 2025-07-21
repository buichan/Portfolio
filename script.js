function showModal(imgElement) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption'); // キャプション要素を取得

  modalImg.src = imgElement.src; // 同じ画像を大きく表示
  modal.style.display = 'flex'; // モーダルを表示
  // キャプションをセット
  modalCaption.textContent = imgElement.getAttribute("data-caption") || "";
  modalCaption.innerHTML = imgElement.getAttribute("data-caption") || "";
}

function hideModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none'; // モーダルを閉じる
}