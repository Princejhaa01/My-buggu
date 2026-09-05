const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

/* 💌 OPEN ENVELOPE */
function openEnvelope() {
  
  envelope.classList.add("open");
  
  setTimeout(() => {
    letter.classList.add("show");
    typeLetter();
  }, 800);
  
}

/* 📜 TYPE LETTER */
const message = `
I love you buggu ji 💌,



mujhe aapki yaaad aarhi h 😞
aap kab jaoge nani ke yaha se

aur haa aap yaha see jana to mujhe unblock kr dena tb tk me aapka wait kr rha hu and ,
.

Thank you for staying with me through everything.

  Aap hamesha mere sath rhi 
  jab aapke ander kooi feelings nhi tha tab bbi mere rone ke wajah se aap mere sath relationship me aayi 
  aur aaj bhi apan sath h 
  aapne hamesha mera khayal rkha h me kuchh bhi krlu but me aapka ye ehsan nhi chuka paunga 
  love you antraa 🥺

I love you 💋💋💋💋💋
❤️ 💌💌💌💌🌸🌷🪷
🌸🌺🪷
Thank you for being my peace, my joy, and my home.

aapki yaad aarhi h bahut 🥺🥺
and unblock kr hi dena jane ke baad 
aur paani peete rehna 
take care, and junk food abhi avoid krha 
I love you endlessly.

Ummmmmaaaaaah 💋💋💋💋

`;

let i = 0;

function typeLetter() {
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;
    
    if (i >= message.length) {
      clearInterval(t);
      setTimeout(showProposal, 800);
    }
  }, 40);
}

/* 💍 SHOW PROPOSAL */
function showProposal() {
  letter.classList.remove("show");
  proposal.classList.add("show");
  
  music.play; 
  
  /* ring animation */
  setTimeout(() => {
    ring.classList.add("show");
  }, 600);
}

/* 💍 TAKE RING */
function takeRing() {
  
  ring.style.transform = "scale(1.3)";
  ring.style.filter = "drop-shadow(0 0 40px gold)";
  
  setTimeout(() => {
    alert("love you sooo much my buggu 💌💋");
  }, 1000);
  
}
