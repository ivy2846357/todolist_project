"use strict";

//輸入框內容
var inputContent = document.querySelector('.list__input-box'); //清單

var list = document.querySelector('.list'); //全部事項

var allList = document.querySelector('.list__progress--all'); //待完成事項

var unfinishedList = document.querySelector('.list__progress--unfinished'); //已完成事項

var finishedList = document.querySelector('.list__progress--finished'); //待辦事項數量

var unfinishedNum = document.querySelector('.unfinished-num'); //新增事項按鈕

var addBtn = document.querySelector('.list__add-btn'); //移除已完成事項

var clearFinishedBtn = document.querySelector('.list__clear-finished');
var data = [{
  content: '把冰箱發霉的檸檬拿去丟',
  checked: false
}, {
  content: '打電話叫媽媽匯款給我',
  checked: false
}, {
  content: '整理電腦資料夾',
  checked: false
}];

function renderData() {
  var listContent = '';
  data.forEach(function (item, index) {
    listContent += "<li class=\"list__item\">\n        <label class=\"list__content\">\n          <input type=\"checkbox\" class=\"list__checkbox\">\n          <span class=\"list__word\">".concat(item.content, "</span>\n        </label>\n        <a href=\"#\" class=\"list__delete-btn\">\n          <i class=\"fas fa-times\" data-num=\"").concat(index, "\"></i>\n        </a>\n      </li>");
  });
  list.innerHTML = listContent;
  unfinishedNum.textContent = data.length;
} // 網頁初始化設定


renderData();
console.log(data); //新增待辦事項

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
list.addEventListener('click', function (e) {
  // let checkboxList = document.querySelectorAll('li');
  // if (e.target.nodeName == 'SPAN') {
  //   console.log('11111');
  // } else {
  //   return;
  // }
  if (e.target.nodeName == 'I') {
    var num = e.target.getAttribute('data-num');
    data.splice(num, 1);
    renderData();
  } else {
    return;
  }
});
//# sourceMappingURL=all.js.map
