"use strict";

var uploadArea = document.querySelector(".upload-area");
var uploadAreaContainer = document.querySelector(".upload-area-container");
var uploadAreaContainer2 = document.querySelector(".upload-area-container2");
var videoContainer = document.querySelector(".upload-area-video-container");
var UPLOADEFFECT = "upload-area-effect";
var isFileDroped = false;

var changeUploadArea = function changeUploadArea() {
  uploadAreaContainer.style.display = "none";
  uploadAreaContainer2.style.display = "flex";
};

var handleFileDrop = function handleFileDrop(e) {
  isFileDroped = true;
  changeUploadArea();
  var file = e.dataTransfer.files[0];
  var video = document.createElement("video");
  video.src = URL.createObjectURL(file);
  video.setAttribute("controls", "controls");
  videoContainer.appendChild(video);
};

var handleAddEffect = function handleAddEffect() {
  uploadArea.classList.add(UPLOADEFFECT);
};

var handleRemoveEffect = function handleRemoveEffect() {
  uploadArea.classList.remove(UPLOADEFFECT);
};

var preventEvent = function preventEvent(event) {
  event.preventDefault();
};

var init = function init() {
  ["dragenter", "dragover", "dragleave", "drop"].forEach(function (event) {
    uploadArea.addEventListener(event, preventEvent);
  });
  ["dragenter", "dragover"].forEach(function (event) {
    uploadArea.addEventListener(event, handleAddEffect);
  });
  ["dragleave", "drop"].forEach(function (event) {
    uploadArea.addEventListener(event, handleRemoveEffect);
  });
  uploadArea.addEventListener("drop", handleFileDrop);
};

init();