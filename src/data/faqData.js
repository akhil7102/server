const faqData = [
    {
        id: 1,
        question: "What are the minimum system requirements for a Minecraft server?",
        answer: "For a basic server with 2-5 players, you need at least 2GB RAM, Java 17+, and a stable internet connection. For larger servers (10+ players), consider 4GB+ RAM and a dedicated machine."
    },
    {
        id: 2,
        question: "How do I make my server visible to friends outside my network?",
        answer: "You need to configure port forwarding on your router for port 25565 (default Minecraft port). Alternatively, consider using services like ngrok for temporary access or cloud hosting for permanent solutions."
    },
    {
        id: 3,
        question: "What's the difference between Vanilla, Spigot, Paper, and Fabric servers?",
        answer: "Vanilla is the official server software. Spigot adds plugin support and optimizations. Paper improves on Spigot with better performance. Fabric is a mod loader for client-side and server-side mods."
    },
    {
        id: 4,
        question: "Can I convert my single-player world to a multiplayer server?",
        answer: "Yes! Copy your world folder from saves/ in your Minecraft directory to your server folder. Update the level-name in server.properties to match your world folder name."
    },
    {
        id: 5,
        question: "How do I backup my server world?",
        answer: "Simply copy your world folder while the server is stopped. For automatic backups, consider plugins like WorldGuard or server management tools that include backup functionality."
    },
    {
        id: 6,
        question: "Why can't players connect to my server?",
        answer: "Common issues include: incorrect IP address, port forwarding not configured, firewall blocking connections, server not running, or version mismatches between client and server."
    },
    {
        id: 7,
        question: "How do I install plugins on my server?",
        answer: "You need a plugin-compatible server like Spigot or Paper. Download plugins from reputable sources, place .jar files in the plugins/ folder, and restart your server."
    },
    {
        id: 8,
        question: "What's the best way to manage multiple servers?",
        answer: "Use a proxy server like BungeeCord or Velocity to connect multiple backend servers. This allows players to move between different worlds or game modes seamlessly."
    }
];

window.faqData = faqData;
