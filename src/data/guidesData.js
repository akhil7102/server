const guidesData = {
    basics: [
        {
            id: 1,
            title: "Setting Up Your First Minecraft Server",
            description: "Learn how to convert your single-player world into a multiplayer server",
            difficulty: "Beginner",
            readTime: "10 min",
            image: "https://pixabay.com/get/g369fe82e9ff3b9fe24d4d9a8ed6a7ee7d868544fe77cdc77cbee3f0adb147d3baf5b26484467158213df74ee54275236cc9e73684578e387472b0c88bea9fdf3_1280.jpg",
            content: `
# Setting Up Your First Minecraft Server

## Prerequisites
- Java 17 or higher installed
- At least 2GB RAM available
- Basic understanding of file management

## Step 1: Download Server Files
1. Visit minecraft.net/downloads/minecraft-server
2. Download the latest server.jar file
3. Create a new folder for your server

## Step 2: Initial Setup
1. Place server.jar in your server folder
2. Create a new text file and rename it to 'start.bat'
3. Add the following content:
   \`\`\`
   java -Xmx2G -Xms2G -jar server.jar nogui
   pause
   \`\`\`

## Step 3: First Run
1. Double-click start.bat
2. Accept the EULA by editing eula.txt
3. Set eula=true and save the file

## Step 4: Configuration
1. Edit server.properties to customize your server
2. Set online-mode=false for LAN play
3. Configure max-players, difficulty, and gamemode

Your server is now ready! Players can connect using your local IP address.
            `
        },
        {
            id: 2,
            title: "Port Forwarding for Public Access",
            description: "Make your server accessible to friends over the internet",
            difficulty: "Intermediate",
            readTime: "15 min",
            image: "https://pixabay.com/get/gee629a079f59dd8df889ce3de21480c20ca31bb7ca108bc75c9d1be8271319600d536443025f495f59e1792243ebec6d2f87598ac2833c4828afa9cd26ad1976_1280.jpg",
            content: `
# Port Forwarding for Public Access

## Understanding Port Forwarding
Port forwarding allows external connections to reach your Minecraft server through your router.

## Step 1: Find Your Router's IP
1. Open Command Prompt
2. Type \`ipconfig\` and press Enter
3. Note the Default Gateway IP

## Step 2: Access Router Settings
1. Open a web browser
2. Navigate to your router's IP address
3. Log in with admin credentials

## Step 3: Configure Port Forwarding
1. Find Port Forwarding or Virtual Server settings
2. Create a new rule for Minecraft
3. Set internal IP to your computer's local IP
4. Set port range to 25565-25565
5. Protocol: TCP/UDP or Both

## Security Considerations
- Only forward necessary ports
- Consider using a whitelist
- Keep your server software updated
- Use strong passwords for admin accounts
            `
        }
    ],
    plugins: [
        {
            id: 3,
            title: "Installing Spigot Plugins",
            description: "Enhance your server with custom plugins and modifications",
            difficulty: "Beginner",
            readTime: "8 min",
            image: "https://pixabay.com/get/g58a12a56adba356873b2ea1ecaf9868244c1bbae4c1c2226422454defefff600e88f785659a010689f45fb92f8cee07ac966d68a00d5d07657e3a2079a5bd480_1280.jpg",
            content: `
# Installing Spigot Plugins

## What are Spigot Plugins?
Spigot plugins extend your server's functionality with custom features, commands, and gameplay mechanics.

## Step 1: Download Spigot
1. Visit BuildTools documentation
2. Download and run BuildTools.jar
3. Wait for compilation to complete

## Step 2: Server Setup
1. Replace server.jar with spigot.jar
2. Update your start script accordingly
3. Start the server to generate plugin folder

## Step 3: Installing Plugins
1. Download plugins from SpigotMC.org
2. Place .jar files in the plugins folder
3. Restart your server

## Popular Starter Plugins
- EssentialsX: Core commands and features
- WorldEdit: World manipulation tool
- Vault: Economy and permissions API
- LuckPerms: Advanced permission management

## Plugin Configuration
Most plugins create config files in plugins/PluginName/ folder for customization.
            `
        }
    ],
    mods: [
        {
            id: 4,
            title: "Setting Up Fabric Mod Server",
            description: "Create a modded server using the Fabric mod loader",
            difficulty: "Intermediate",
            readTime: "20 min",
            image: "https://pixabay.com/get/gce2c1089906bd8e48c549bc9e0ab741bbf236f2efee516deef4af7fb1874ce625e23d9c3036359e895556d31305e9380fdd581819b7b599c55cb91e7e90ae355_1280.jpg",
            content: `
# Setting Up Fabric Mod Server

## What is Fabric?
Fabric is a lightweight mod loader that allows you to run mods on your Minecraft server.

## Step 1: Download Fabric Installer
1. Visit fabricmc.net
2. Download the Fabric installer
3. Run the installer and select "Server"

## Step 2: Server Installation
1. Choose your Minecraft version
2. Select installation directory
3. Click Install to download server files

## Step 3: Installing Mods
1. Download compatible mods from Modrinth or CurseForge
2. Place mod files in the mods folder
3. Ensure Fabric API is installed if required

## Step 4: Configuration
1. Edit server.properties as needed
2. Configure individual mods through their config files
3. Test compatibility between mods

## Important Notes
- Players need the same mods installed
- Always backup your world before adding mods
- Check mod compatibility with your Fabric version
            `
        }
    ],
    advanced: [
        {
            id: 5,
            title: "BungeeCord Network Setup",
            description: "Connect multiple servers with BungeeCord proxy",
            difficulty: "Advanced",
            readTime: "30 min",
            image: "https://pixabay.com/get/g9829281d0a6978047c8f77e106dfc424ab101ec77de386e07d020399b9a37c2441be2a4062c75d79ca208818db58d401d601fd79ca3e8360b8f5fdcfd52e8309_1280.jpg",
            content: `
# BungeeCord Network Setup

## What is BungeeCord?
BungeeCord is a proxy server that allows players to connect to multiple Minecraft servers seamlessly.

## Network Architecture
- Proxy server handles player connections
- Backend servers run your actual worlds
- Players can switch between servers with commands

## Step 1: Download BungeeCord
1. Visit ci.md-5.net/job/BungeeCord
2. Download the latest BungeeCord.jar
3. Create a new folder for your proxy

## Step 2: Proxy Configuration
1. Run BungeeCord once to generate config.yml
2. Configure server list in config.yml
3. Set up proper IP addresses and ports

## Step 3: Backend Server Setup
1. Set online-mode=false in server.properties
2. Install BungeeCord plugins on backend servers
3. Configure server-specific settings

## Step 4: Testing the Network
1. Start all backend servers first
2. Start the BungeeCord proxy
3. Connect through the proxy IP
4. Test server switching with /server command

## Advanced Features
- Custom MOTDs per server
- Player synchronization
- Cross-server chat and commands
            `
        }
    ]
};

window.guidesData = guidesData;
