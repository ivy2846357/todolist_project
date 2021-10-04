//輸入框內容
const inputContent = document.querySelector('.list__input-box');
//清單
const list = document.querySelector('.list');
//全部事項
const allList = document.querySelector('.list__progress--all');
//待完成事項
const unfinishedList = document.querySelector('.list__progress--unfinished');
//已完成事項
const finishedList = document.querySelector('.list__progress--finished');
//待辦事項數量
const unfinishedNum = document.querySelector('.unfinished-num');
//新增事項按鈕
const addBtn = document.querySelector('.list__add-btn');
//移除事項按鈕
const deleteBtn = document.querySelector('.list__delete-btn');
let data = [{
    content: '把冰箱發霉的檸檬拿去丟'
  },
  {
    content: '打電話叫媽媽匯款給我'
  },
  {
    content: '整理電腦資料夾'
  }
];

function renderData() {
  let listContent = '';
  data.forEach(function (item, index) {
    listContent += `<li class="list__item">
        <label class="list__content">
          <input type="checkbox" class="list__checkbox">
          <span class="list__word">${item.content}</span>
        </label>
        <a href="#" class="list__delete-btn" data-num="${index}">
          <i class="fas fa-times"></i>
        </a>
      </li>`
  })
  list.innerHTML = listContent;
  unfinishedNum.textContent = data.length;
}
// 網頁初始化設定
renderData();
console.log(deleteBtn);

//新增待辦事項
addBtn.addEventListener('click', function (e) {
  if (inputContent.value.trim() == '') {
    alert('請輸入待辦事項');
  }
  let listObj = {};
  listObj.content = inputContent.value;
  data.push(listObj);
  renderData();
  inputContent.value = '';
});