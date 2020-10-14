const uploadInput = document.querySelector("#upload-file");
const uploadArea = document.querySelector(".upload-area");
const uploadComplete = document.querySelector(".upload-area-complete");
const uploadFileName = document.querySelector(".upload-fileName");

const handleFileChange = (e) => {
    const fileName = e.target.files[0].name;

    uploadFileName.innerHTML = fileName;

    uploadArea.classList.add("hide");
    uploadComplete.classList.remove("hide");
};

const uploadVideo = () => {
    uploadInput.addEventListener("input", handleFileChange);
};

if(uploadInput) {
    uploadVideo();
}