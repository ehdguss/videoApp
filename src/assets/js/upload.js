const uploadArea = document.querySelector(".upload-area");
const uploadComplete = document.querySelector(".upload-area-complete");

const UPLOADEFFECT = "upload-area-effect"; 

// const handleFileDrop = (e) => {
//     const file = e.dataTransfer.files[0];
//     const video = document.createElement("video");

//     video.src = URL.createObjectURL(file);
//     video.setAttribute("controls", "controls");

//     videoArea.appendChild(video);
// };

const handleFiles = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let video = document.createElement("video");
        video.src = reader.result;
        uploadComplete.appendChild(video);
    };
};

const handleFileDrop = (e) => {
    uploadArea.classList.add("hide");
    uploadComplete.classList.remove("hide");

    const dt = e.dataTransfer;
    const file = dt.files[0];

    handleFiles(file);
};

const handleAddEffect = () => {
    uploadArea.classList.add(UPLOADEFFECT);
}

const handleRemoveEffect = () => {
    uploadArea.classList.remove(UPLOADEFFECT);
}

const preventEvent = (event) => {
    event.preventDefault();
};


const init = () => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
        uploadArea.addEventListener(event, preventEvent);
    });

    ["dragenter", "dragover"].forEach(event => {
        uploadArea.addEventListener(event, handleAddEffect);
    });
    ["dragleave", "drop"].forEach(event => {
        uploadArea.addEventListener(event, handleRemoveEffect);
    });

    uploadArea.addEventListener("drop", handleFileDrop);
};

init();


// const uploadArea = document.querySelector(".upload-area");
// const uploadAreaContainer = document.querySelector(".upload-area-container");
// const uploadFileInput = document.querySelector("#upload-file");
// const uploadForm = document.querySelector(".upload-form");

// // const uploadAreaContainer2 = document.querySelector(".upload-area-container2");
// // const videoContainer = document.querySelector(".upload-area-video-container");

// const UPLOADEFFECT = "upload-area-effect";

// let isFileDroped = false;

// // const handleFileDrop = (e) => {
// //     isFileDroped = true;
// //     changeUploadArea();

// //     const file = e.dataTransfer.files[0];
// //     const video = document.createElement("video");

// //     video.src = URL.createObjectURL(file);
// //     video.setAttribute("controls", "controls");

// //     videoContainer.appendChild(video);
// // };

// const handleSubmit = () => {
//     uploadForm.submit();
// };

// const handleFileDrop = (event) => {
//     uploadFileInput.addEventListener("onchange", handleSubmit());
// };

// const handleAddEffect = () => {
//     uploadArea.classList.add(UPLOADEFFECT);
// }

// const handleRemoveEffect = () => {
//     uploadArea.classList.remove(UPLOADEFFECT);
// }

// const preventEvent = (event) => {
//     event.preventDefault();
// };


// const init = () => {
//     ["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
//         uploadArea.addEventListener(event, preventEvent);
//     });

//     ["dragenter", "dragover"].forEach(event => {
//         uploadArea.addEventListener(event, handleAddEffect);
//     });
//     ["dragleave", "drop"].forEach(event => {
//         uploadArea.addEventListener(event, handleRemoveEffect);
//     });

//     uploadArea.addEventListener("drop", handleFileDrop);
// };

// init();