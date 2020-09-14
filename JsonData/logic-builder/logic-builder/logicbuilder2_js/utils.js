
   function align(pos,spr)
    {
        switch (pos)
        {
            case "c":
                spr.anchor.set(0.5);
                break;
            case "tl":
                spr.anchor.set(0);
                break;
            case "tr":
                spr.anchor.set(1,0);
                break;
            default:
                break;
        }
    }
    function xPos(pos) {
       
        return gameWidth * pos
    }
    
    function yPos (pos) {
        return gameHeight * pos
    }
function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}