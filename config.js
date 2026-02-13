// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Janhvi",

    pageTitle: "I’d travel from Kothrud to Kharadi in peak traffic just to see you smile. You’re more refreshing than a frullato shake and more flavourful than a biryani! Will you be my Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'], 
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "I’d travel from Kothrud to Kharadi in peak traffic just to see you smile. You’re more refreshing than a frullato shake and more flavourful than a biryani! Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // ============================================
    // 📸 IMAGE ADDED HERE FOR THE LAST PAGE
    // ============================================
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        // This adds your 'valen.jpg' to the final screen
        message: "Now come give me a big warm hug and a huge kiss! <br><br>,
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        // Pro Tip: If the music doesn't play, use the 'Embed' link instead of the watch link
        musicUrl: "<iframe width="560" height="315" src="https://www.youtube.com/embed/Gq2hcE4V7Jo?si=kZW2a_GVQtJ3czpk&amp;start=49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>", 
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
