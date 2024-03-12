function addCommonHead() {
  const scriptTag = document.createElement("script");
  scriptTag.defer = true;
  scriptTag.type = "text/javascript";
  scriptTag.id = "chatbot-initials-script";
  scriptTag.src = "https://chat-bbl.noform.ai/script-chatbot.js";
  scriptTag.setAttribute(
    "data-server-url",
    "https://noform-ai-admin-git-nfa-468-support-widge-46647b-hembara-s-team.vercel.app"
  );
  scriptTag.setAttribute("data-bot-id", "659fcaa4d103a5bbb86a52ad");

  document.head.prepend(scriptTag);
}

document.addEventListener("DOMContentLoaded", addCommonHead);
