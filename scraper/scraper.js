const axios = require('axios');
const cheerio = require('cheerio');

const gloom = "https://boardgamegeek.com/boardgame/174430/gloomhaven";
const root = "https://boardgamegeek.com/boardgame/237182/root";
const exp = "https://boardgamegeek.com/boardgameexpansion/250337/gloomhaven-forgotten-circles";

async function run(){
    const res = await axios.get(exp);
    const $ = cheerio.load(res.data);
    let code;

    $('script').each(function(index, el){
        if(el.children[0] && el.children[0].data){
            if(!code){
                code = el.children[0].data;
            }
        }
    });

    eval(code);
    const game = GEEK.geekitemPreload.item;


    const isExpansion = game.subtype === "boardgameexpansion";
    const result = {
        name: game.primaryname.name,
        bggItemId: game.itemid,
        bggObjectId: game.objectid,
        bggHref: game.href,
        publishedYear: Number(game.yearpublished),
        minPlayers: Number(game.minplayers),
        maxPlayers: Number(game.maxplayers),
        minPlaytime: Number(game.minplaytime),
        maxPlaytime: Number(game.maxplaytime),
        description: game.description.replace(
            /href="(.*)"/g,
            "href='https://boardgamegeek.com$1' target='_blank'"
        ),
        source: "bgg",
        thumbnail: game.images.thumb,
        squareThumbnail: game.images.square200,
        isExpansion,
        boardGameId: isExpansion ? Number(game.links.expandsboardgame[0].objectid) : null
    }

    console.log(result);
}

run();