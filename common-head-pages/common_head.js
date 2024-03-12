
export function addCommonHead() {
    const headContent = `
    <script defer type="text/javascript" id="chatbot-initials-script" src="https://chat-bbl.noform.ai/script-chatbot.js"
    data-server-url="https://noform-ai-admin-git-nfa-468-support-widge-46647b-hembara-s-team.vercel.app"
    data-bot-id="659fcaa4d103a5bbb86a52ad"></script>
    `;
    document.head.innerHTML += headContent;
}

