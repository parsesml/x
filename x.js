    (async()=>{
        await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
ig.game.attachmentManager=Deobfuscator.object(ig.game, "slots", false);
    speechstuff=Deobfuscator.object(ig.game, "abc", true);
    nlx=Deobfuscator.function(ig.game[speechstuff], "l;", true);
    speecharray=Deobfuscator.keyBetween(ig.game[speechstuff][Deobfuscator.function(ig.game[speechstuff], "_~", true)], "&this.", ".sh");
    shoutmotion=Deobfuscator.function(ig.game[speechstuff], "shout", true);
rhtw=false;
intad=Deobfuscator.keyBetween(EntityInteract.prototype.tidyUp, "=this.", "&&\n");
setInterval(()=>{
    if(rhtw==true){
        numbgr=Infinity;
ig.game[players].betweenDefaultAndPlayer.forEach(b=>{if(numbgr>ig.game.player[Deobfuscator.function(ig.game.player.__proto__, "b*b", true)](b)){numbgr=ig.game.player[Deobfuscator.function(ig.game.player.__proto__, "b*b", true)](b); intxd=b.thingTypeId}});
ig.game[players].betweenDefaultAndPlayer.forEach(b=>{
if(b.thingTypeId==intxd){
    ig.game.websocket.wssend(ig.game.websocket.ws, "nv", {eid:b[intad], throws:itemsa})
    }
})
    }
}, 100);
    newline=function(){ig.game[speechstuff][nlx](); ig.game[speechstuff][speecharray]=[]};
    cleanr=function(a, b){a=a.replace(b, "");a=a.slice(0, a.length-1); return a};
    ig.game[speechstuff][shoutmotion]=function(b) {
        switch(b) {
            case "ACIDTIME!":
                rhtw=true; setTimeout(()=>{rhtw=false}, 5000); newline(); break;
        }
    }
    })();
