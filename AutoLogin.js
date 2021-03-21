/// api_version=2
var script = registerScript({
    name: "AutoLogin",
    version: "1.0.0",
    authors: ["Luna Child"]
});

function debugLoger(str) {
    if (Setting.isDebug.get()) {
        Chat.print("[DEBUG] "+str);
    }
}

Setting.boolean({
    name: "isDebug",
    default: true
});

Setting.text({
    name: "LoginCommand",
    default: "/login 000000"
});

// Registe a module
cript.registerModule({
    name: "AutoLogin",
    category: "Misc", // Movement, Misc, Combat, Fun, Player, Exploit, World, Render
    description: "Run a customed command upon entering the server to login"
}, function (module) {
    ////////////////////////////////////////////////////////
    module.on("enable", function() {
        Chat.print("AutoLogin enabled~");
        debugLoger("Debug mode enabled");
    });
    module.on("session", function() {
        // to test what is session change
        Chat.print("[DEBUG] Session change detected");
    });
});