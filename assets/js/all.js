"use strict";

//輸入框內容
var inputContent = document.querySelector('.list__input-box'); //清單

var list = document.querySelector('.list'); //全部事項

var allList = document.querySelector('.list__progress--all'); //待完成事項

var unfinishedList = document.querySelector('.list__progress--unfinished'); //已完成事項

var finishedList = document.querySelector('.list__progress--finished'); //待辦事項數量

var unfinishedNum = document.querySelector('.unfinished-num'); //新增事項按鈕

var addBtn = document.querySelector('.list__add-btn'); //移除事項按鈕

var deleteBtn = document.querySelector('.list__delete-btn');
var data = [{
  content: '把冰箱發霉的檸檬拿去丟'
}, {
  content: '打電話叫媽媽匯款給我'
}, {
  content: '整理電腦資料夾'
}];

function renderData() {
  var listContent = '';
  data.forEach(function (item, index) {
    listContent += "<li class=\"list__item\">\n        <label class=\"list__content\">\n          <input type=\"checkbox\" class=\"list__checkbox\">\n          <span class=\"list__word\">".concat(item.content, "</span>\n        </label>\n        <a href=\"#\" class=\"list__delete-btn\" data-num=\"").concat(index, "\">\n          <i class=\"fas fa-times\"></i>\n        </a>\n      </li>");
  });
  list.innerHTML = listContent;
  unfinishedNum.textContent = data.length;
} // 網頁初始化設定


renderData();
console.log(deleteBtn); //新增待辦事項

addBtn.addEventListener('click', function (e) {
  if (inputContent.value.trim() == '') {
    alert('請輸入待辦事項');
  }

  var listObj = {};
  listObj.content = inputContent.value;
  data.push(listObj);
  renderData();
  inputContent.value = '';
});
//# sourceMappingURL=all.js.map
