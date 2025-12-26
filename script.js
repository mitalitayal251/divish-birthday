// 🛠️ DEV MODE (set to false for final version)
const DEV_MODE = false;
if (DEV_MODE) {
  window.addEventListener("load", () => {
    // Hide overlays & videos
    const mainOverlay = document.querySelector(".overlay");
    const cakeOverlay = document.getElementById("cakeVideoOverlay");

    if (mainOverlay) mainOverlay.style.display = "none";
    if (cakeOverlay) cakeOverlay.style.display = "none";

    // Hide background videos
    document.getElementById("countdownVideo")?.remove();
    document.getElementById("confettiVideo")?.remove();

    // Show reasons section directly
    const reasonsSection = document.getElementById("reasonsSection");
    reasonsSection.classList.remove("hidden");

    // Enable scroll
    document.body.style.overflow = "auto";

    // Jump to section
    reasonsSection.scrollIntoView({ behavior: "instant" });
  });
}

// 🎂 Birthday: 2nd January 2026
const birthday = new Date(2026, 0, 2, 0, 0, 0);

const countdownEl = document.getElementById("countdown");
const birthdayContent = document.getElementById("birthdayContent");
const countdownVideo = document.getElementById("countdownVideo");
const confettiVideo = document.getElementById("confettiVideo");
const birthdayMessage = document.getElementById("birthdayMessage");
const cakeBtn = document.getElementById("cakeBtn");

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    // Switch background videos
    countdownVideo.style.display = "none";
    confettiVideo.classList.remove("hidden");
    confettiVideo.play();

    // Switch content
    countdownEl.style.display = "none";
    birthdayContent.classList.remove("hidden");
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${d}d ${h}h ${m}m ${s}s<br><span style="font-size: 6rem;">until Divish Day!</span>`;
}

/* 💌 Show message first, cake button after 10 seconds */
function showMessage() {
  birthdayMessage.classList.remove("hidden");

  setTimeout(() => {
    cakeBtn.classList.remove("hidden");
  }, 1000); // 5 seconds
}

/* 🎬 Play cake-cut video FULLSCREEN exactly 3 times */
function playCakeVideo() {
  const cakeOverlay = document.getElementById("cakeVideoOverlay");
  const cakeVideo = document.getElementById("cakeVideo");
  const reasonsSection = document.getElementById("reasonsSection");

  let playCount = 0;

  // Show fullscreen cake video
  cakeOverlay.classList.remove("hidden");
  cakeVideo.currentTime = 0;
  cakeVideo.play();

  cakeVideo.onended = () => {
    playCount++;

    if (playCount < 1) {
      cakeVideo.currentTime = 0;
      cakeVideo.play();
    } else {
      // Hide cake video
      cakeOverlay.classList.add("hidden");
      cakeVideo.onended = null;

      // 🎉 SHOW 25 REASONS SECTION
      reasonsSection.classList.remove("hidden");

      // Optional smooth scroll
      reasonsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
}
// ===============================
// ❤️ 25 REASONS DATA
// ===============================
const reasonsData = {
  love: {
    title: "25 Things I Love About You",
    items: [
      "Firstly, I love YOUUUU",
      "Your cute little little small small eyes",
      "Your pyaariest smile, I love the way you smile",
      "Your biggyyy pakoda nose",
      "Yourrrr beard, I just fall for it",
      "Your curly hair, that I love to fix and keep my hands in",
      "Your cute ears, which you don’t use to listen to me",
      "I love your looks",
      "I love your personality",
      "I love how kind you are always",
      "I love how you care for me, for others",
      "I love how you always listen to me (but never implement 😌)",
      "I love how you support me",
      "I love how you understand me",
      "I love watching you dance like crazy",
      "I love how you walk",
      "I love when you talk moreeee (very rare view)",
      "I love watching you enjoyyy",
      "I love watching you drive",
      "I love watching you watch me",
      "I love it when you are shy",
      "I love your presence around me, I want it all the time",
      "I love how being with you feels like peace",
      "I love you — not for what you do, but for who you are",
      "I love how you care for people who matter to you",
    ],
  },
  dontLike: {
    title: "25 Things I Don’t Like About You",
    items: [
      "That you say ‘5 minutes’ and take forever",
      "That you never listen properly (but pretend you do)",
      "That you steal my food without asking",
      "That you act extra cute when you know you’re wrong",
      "That you don’t reply on time",
      "That you never follow my advice",
      "That you don’t express your feelings openly",
      "That you act too cool sometimes",
      "That you underestimate yourself",
      "That you don’t see how amazing you are",
      "That you hide your emotions",
      "That you don’t take care of yourself properly",
      "That I can’t actually dislike you at all 😌",
      "That you make me miss you so easily",
      "That you don’t say ‘I love you’ enough",
      "That you don’t miss me enough",
      "That you get too busy sometimes",
      "That you don’t share your dreams with me",
      "That you act innocent after clearly being guilty",
      "That you don’t pamper me",
      "That you don’t let me become part of your life",
      "That you don't include me in your life",
      "That you don’t share your likings with me",
      "That you dont do- whatever I say 😌",
      "That you dont do- Try this, this is my fav thing to eat/do",
    ],
  },
  special: {
    title: "25 Reasons Why You’re Special",
    items: [
      "You are special simply because you are you — no list, no count, and no words could ever fully define it. Your existence itself is the reason.",
    ],
  },

  adore: {
    title: "25 Versions of You",
    items: [
      "Sleepy you (always) 💤",
      "Shy you 🙈",
      "Overthinking you 🤯",
      "Silent but judging you 😌",
      "Happy you ✨",
      "Stubborn you 😤",
      "Soft emotional you 🥺",
      "Serious mode you 🧐",
      "Lazy you 🛋️",
      "Hyper excited you 🤩",
      "Lost-in-thoughts you 💭",
      "Caring you 🤍",
      "Annoyed you 😒",
      "Clingy you (rare view) 🫶",
      "Romantic you (very rare view) 💖",
      "Sarcastic you 😏",
      "Protective you 🛡️",
      "Childish you 🧸",
      "Responsible you (rare view) 🧠",
      "Jealous you (just a little) 😤",
      "Quiet observer you 👀",
      "Comfort-zone you ☕",
      "Confident you 😎",
      "Tired-but-still-trying you 🫂",
      "My favourite you — always 💕",
    ],
  },
  memories: {
    title: "25 Facts About You",
    items: [
      "If it’s about favorite food, it’s definitely rajma chawal 🍛",
      "If something interesting is happening, Divish will be found gossiping in a corner 😌",
      "If a DJ is playing music, the one dancing with full madness is you 💃",
      "If pampering me was a task, you’d say ‘later’ and fall asleep",
      "If a party has great music, it’s probably because of you 🎶",
      "If people are laughing loudly, you’re somewhere nearby 😄",
      "If someone needs company, you’re already there 🤍",
      "If food arrives, you’re the first one to notice 👀",
      "If plans are made, you somehow cancel everytime ✨",
      "If my message has a special notification sound, you’ll still miss it 😌",
      "If there’s a group photo, you’re the one looking the hottest 📸",
      "If jokes are being cracked, the bad one is definitely yours 😌",
      "If a gossip is happening, it’s definitely coming to me if you heard it 😌",
      "If there’s even a 10-minute chance to sleep, you’re already asleep",
      "If something is bothering you, you pretend everything is fine",
      "If replying on time was required, you’d still reply late",
      "If love had to be shown romantically, you’d pretend not to know how",
      "If laziness was a personality trait, you’d proudly own it 😌",
      "If shopping is involved, you suddenly have all the energy 🛍️",
      "If jealousy is involved, you pretend not to care (but that rare jealous version? I love it 😏)",
      "If being carefree was an art, you’d be a master",
      "If romance needed initiative, you’d say ‘next time’",
      "If there are two versions of you — one with me and one with others — you’ll still deny it 😌",
      "You’re always the first one I turn to when my life needs fixing.",
      "If despite all this… I still love you — that’s on me 💖",
    ],
  },
  grateful: {
    title: "25 Reasons I’m Grateful for You",
    items: [
      "For always being there when I need you",
      "For being a constant in my life",
      "For making me feel safe without trying",
      "For staying, even when things aren’t perfect",
      "For listening in your own quiet way",
      "For caring more than you show",
      "For supporting me when I need it most",
      "For being patient with me",
      "For understanding me without many words",
      "For making hard days feel lighter",
      "For being someone I can rely on",
      "For calming me when I feel overwhelmed",
      "For being honest with me",
      "For accepting me exactly as I am",
      "For never making me feel like too much",
      "For standing by me",
      "For bringing comfort into my life",
      "For showing love through actions",
      "For making me feel valued",
      "For being someone I can trust",
      "For choosing me every day",
      "For making me feel at peace",
      "For being my safe place",
      "For being part of my life",
      "For being you 🤍",
    ],
  },
};

function openModal(type) {
  const modal = document.getElementById("reasonModal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("modalList");

  title.innerText = reasonsData[type].title;
  list.innerHTML = "";

  reasonsData[type].items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("reasonModal").classList.add("hidden");
}
function showLove() {
  const overlay = document.getElementById("loveOverlay");
  const message = document.querySelector(".love-message");

  overlay.classList.remove("hidden");

  // Show message after video starts
  setTimeout(() => {
    message.classList.remove("hidden");
  }, 2000); // 2 seconds
}

setInterval(updateCountdown, 1000);
updateCountdown();
