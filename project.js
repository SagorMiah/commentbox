const valueText = document.querySelector(".addmbox")
const addlist = document.querySelector(".messbox");
const ulcontent = document.querySelector(".mesimg");
const submform = document.querySelector(".addmess");

addlist.scrollTop = addlist.scrollHeight

const cratemess = (text) => {
    let createbox = `
        <li class="mesimg">
            <div class="userimg">
                <image class="mimage" src="unnamed.gif"/>
                <div class="imageicon"
                    <i class="fas fa-check micon"></i>
                ></div>
            </div>
            <div class="chinfo">
                <h4 class="mtitle">Anday William</h4>
                <div class="titleicons">
                    <i class="fas fa-circle titleicon"></i>
                </div>
                <span class="mtext">${text}</span>
            </div>
        </li>
    `
    addlist.innerHTML += createbox
    valueText.value = ""
}

submform.addEventListener("submit", e => {
    e.preventDefault();
    let scrollbot = cratemess(valueText.value)
    scrollbot.scrollTop = scrollbot.scrollHeight
})
