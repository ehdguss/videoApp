"use strict";

var uploadArea = document.querySelector(".upload-area");
var UPLOADEFFECT = "upload-area-effect";
var HIDE = "hide";

var handleFileDrop = function handleFileDrop() {};

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
  }); // uploadArea.addEventListener("drop", handleFileDrop);
};

init();