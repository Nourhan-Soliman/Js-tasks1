let mainBox = document.querySelector(".msg-box");
let theAddButton = document.querySelector(".msg-box button");
let theInput = document.querySelector(".msg-box input");
let messagesContainer = document.querySelector(".messages-container");

window.onload = function () {
    theInput.focus();

      // Load tasks from local storage
      if (window.localStorage.getItem('messagesContainer')) {
        messagesContainer.innerHTML = window.localStorage.getItem('messagesContainer');
    }
    
    
   
};

theAddButton.onclick = function () {
    if (theInput.value === "") {
        console.log("empty");
    } else {
        let addedMsg = document.createElement("span");

        let text = document.createTextNode(theInput.value);
        addedMsg.appendChild(text);

        messagesContainer.appendChild(addedMsg);

        theInput.value = "";
        theInput.focus();
        window.localStorage.setItem('messagesContainer', messagesContainer.innerHTML);

    }
};



