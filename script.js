let uploadedImage;

document.getElementById("upload").addEventListener("change", function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    uploadedImage = reader.result;
    document.getElementById("preview").src = uploadedImage;
  };

  reader.readAsDataURL(file);
});

async function processImage() {
  if (!uploadedImage) {
    alert("Upload image first!");
    return;
  }

  alert("App working! (API add later)");
}
