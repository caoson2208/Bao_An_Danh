const btNewPost = document.querySelector("._btnAddNote_2vs8i_48");
const newPostDiv = document.querySelector("._bodyRight_2vs8i_90");
const desc = document.querySelector("._bodyRightContent_2vs8i_141");
const title = document.querySelector("._headerTitle_2vs8i_110");
const chil = document.querySelector("._leftItem_2vs8i_22._active_2vs8i_26");
const d = new Date();

let postArr = [];
var ost = {
  title: "",
  desc: "",
  time: "",
  name: "",
};

function Post(title, desc, time, name) {
  this.title = title;
  this.desc = desc;
  this.time = time;
  this.name = name;
}

btNewPost.addEventListener("click", function () {
  var postTemp = document.querySelector(".postnews");
  if (postTemp != null) {
    postTemp.remove();
  }
  desc.innerHTML = `Welcome to our note-taking app! This app is designed to help you keep track of all your important notes and ideas in one convenient place. With this app, you can easily create, organize, and access your notes from anywhere and at any time. Now, you can focus on what matters most to you.`;

  title.innerHTML = `Welcome to our note-taking app!`;
  newPostDiv.style.display = "block";
});

function createPost() {
  let month = d.getMonth() + 1;
  var today = d.getDate() + "/" + month + "/" + d.getFullYear();
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  const desc = document.querySelector("._bodyRightContent_2vs8i_141").innerHTML;
  const title = document.querySelector("._headerTitle_2vs8i_110").innerHTML;
  postArr.push(new Post(title, desc, today + "," + time, "Sơn Cao"));
  index = postArr.length - 1;
  let st = `
       <li class="_leftItem_2vs8i_22 _active_2vs8i_26" onclick="ShowPost(${index})"><h6 class="_leftItemTitle_2vs8i_30">${title}</h6><p class="_leftItemText_2vs8i_39">${desc}</p></li>
        `;
  let ts = document.querySelector(".list");
  ts.style.display = "none";
  ts.insertAdjacentHTML("afterend", st);
  newPostDiv.style.display = "none";
  ShowPost(index);
}

function ShowPost(index) {
  newPostDiv.style.display = "none";
  var postTemp = document.querySelector(".postnews");
  console.log(postTemp);
  if (postTemp != null) {
    postTemp.remove();
  }
  let h = `
    <div class="_bodyRight_2vs8i_90 postnews">
      <div class="_bodyRightHeader_2vs8i_99">
        <div class="_headerLeft_2vs8i_107">
          <h5 contenteditable="plaintext-only" class="_headerTitle_2vs8i_110">${postArr[index].title}</h5>
          <div class="_headerTime_2vs8i_117">
            Created at ${postArr[index].time} by ${postArr[index].name}
          </div>
        </div>
        <div class="_headerRight_2vs8i_123" onclick=removePost(this,${index})>
          <button class="_headerRightDelete_2vs8i_126">
            <i class="fa-solid fa-trash"></i><span>Delete</span>
          </button>
        </div>
      </div>
      <div contenteditable="plaintext-only" class="_bodyRightContent_2vs8i_141">${postArr[index].desc}</div>

      <div class="_comments_2vs8i_149">
        <div class="_cmtHeader_2vs8i_158">
          <i class="fa-solid fa-caret-right _icon_2vs8i_172"></i
          ><span onclick = "showComment()">Add comment</span>
        </div>
          <div class="_wrapInpCmt_2vs8i_193" style="display: none">
            <input class="_cmtInp_2vs8i_180"></input>
            <button class="_btnSendCmt_2vs8i_198" type="submit" onclick="addComment()">Send</button>
          </div>
      </div>
      
    </div>

    
    `;
  let t = document.querySelector("._bodyLeft_2vs8i_13");
  t.insertAdjacentHTML("afterend", h);
}

const btnRemove = document.querySelector("._headerRight_2vs8i_123");

//REMOVE
function removePost(element, data) {
  var index = postArr.length - data - 1;
  var listPost = document.querySelectorAll("._leftItemTitle_2vs8i_30");
  listPost[index].parentElement.style.display = "none";
  element.parentElement.parentElement.remove();
  postArr.splice(data, 1, "");
}

function showComment() {
  const icon = document.querySelector("._icon_2vs8i_172");
  const comment = document.querySelector("._wrapInpCmt_2vs8i_193");
  if (comment.style.display == "none") {
    icon.style.transform = "rotate(90deg)";
    comment.style.display = "block";
  } else {
    icon.style.transform = "rotate(0deg)";
    comment.style.display = "none";
  }
}

function addComment() {
  let month = d.getMonth() + 1;
  var today = d.getDate() + "/" + month + "/" + d.getFullYear();
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  let inputs = document.querySelector("._cmtInp_2vs8i_180").value;
  let h = `
    <div class="_wrapper_14aty_1">
      <div class="_header_14aty_8">
        <div class="_headerLeft_14aty_15">
          Created at ${today}, ${time} by Sơn Cao
        </div>
      </div>
      <div class="_content_14aty_36">${inputs}</div>
    </div>
  `;

  let t = document.querySelector("._wrapInpCmt_2vs8i_193");
  t.insertAdjacentHTML("afterend", h);
  const icon = document.querySelector("._icon_2vs8i_172");
  const comment = document.querySelector("._wrapInpCmt_2vs8i_193");
  icon.style.transform = "rotate(0deg)";
  comment.style.display = "none";
}
