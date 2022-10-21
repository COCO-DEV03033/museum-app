
const lang = [{
    "vid1": "Four centuries of castle history",
    "vid2": "Wallpaintings reloaded",
    "puzzlegame": "Play! Restoration puzzle",
    "interationgame": "Use your fantasy! Interpretation game",
    "gametopic": "You can also be a mural painting restorer!",
    "subtitle": "We have already made the first step in the restoration process,",
    "subtitle0": " and uncovered the remains of the 17th century wallpainting from beneath many layers of plaster.",
    "conclude": "Now it's your turn to complete the picture with the missing details.",
    "gametopic2": "It still seems like a lot of missing details?",
    "gametopic20": "Well, according to the Venice Charter for the Conservation and Restoration of Monuments,",
    "gametopic21": "restoration must be carried out with respect to the original, and must stop at the moment where conjecture begins.",
    "subtitle2": "But this doesn't stop us from making our well documented assumptions on how the originals most probably looked like.",
    "conclude2": "The next level of the puzzle will reveal it to you!",
    "success1": "Congratulations, your painting is now restored!",
    "success11": "While restorers worked for months on the orignal, it only took you .... minutes",
    "success2": "Great work! Now you know how old wallpaitings are being restored.",
    "success21": "During this process of restoration and historical researching,",
    "success22": "we also found out a lot of interesting stories about the life of the Daniels.",
    "successs23": "Visit the rest of the exhibition to discover them."
}, {
    "vid1": "Castelul Daniel - 4 secole de istorie",
    "vid2": "Fresco reloaded",
    "puzzlegame": "Joacă-te de-a restauratorul!",
    "interationgame": "Folosește-ți imaginația!",
    "gametopic": "Devino și tu restaurator de picturi murale!",
    "subtitle": "Noi am făcut deja primele demersuri în minuțiosul proces de restaurare,",
    "subtitle0": "și am îndepărtat stratul gros de tencuială aplicat de-a lungul secolelor peste suprafețele pictate din anii 1680.",
    "conclude": "Acum e rândul tău să completezi imaginea.",
    "gametopic2": "Încă ți se pare că sunt multe detalii lipsă?",
    "gametopic20": "Potrivit Cartei de la Veneția a Conservării și Restaurării Monumentelor Istorice,",
    "gametopic21": "restaurarea trebuie să se bazeze pe respectul materialului original, și trebuie să se oprească acolo unde începe ipoteza.",
    "subtitle2": "Dar asta nu ne-a împiedicat să avem niște ipoteze bine documentate despre cum arătau originalele.",
    "conclude2": "Poți descoperi și tu, completând următorul nivel al puzzle-ului.",
    "success1": "Felicitări, ai reușit să restaurezi fresca în doar .... minute!",
    "success11": "Să știi că restauratorii au migălit timp de mai multe luni pe originale.",
    "success2": "Bravo! Acum ști și tu cum se restaurează o frescă.",
    "success21": "Dealungul procesului de restaurare și de cercetare istorică,",
    "success22": "am descoperit multe povești interesante despre viața Danielilor.",
    "success23": "Vzitează expoziția să le descoperi și tu."
}, {
    "vid1": "A Daniel-kastély 4 évszázada",
    "vid2": "Falképek újratöltve",
    "puzzlegame": "Játsz restaurálósdit!",
    "interationgame": "Vesd be a képzelőerőd!",
    "gametopic": "Légy te is falfestmény restaurátor!",
    "subtitle": "Mi már elvégeztük a felújítási folyamat első lépéseit,",
    "subtitle0": "és a sok réteg vakolat alól, aprólékos munkával feltártuk a 17. századi falkép maradványait.",
    "conclude": "Most rajtad a sor, retusáld a képet.",
    "gametopic2": "Úgy tűnik, hogy még mindig sok a hiányosság?",
    "gametopic20": "A műemlékek konzerválására és restaurálására vonatkozó Velencei Charta elveit követve,",
    "gametopic21": "a felújítás során tiszteletben kell tartani az eredeti alkotást, történelmi dokumentumok hiányában tilos az eredeti tárgy újboli létrehozása.",
    "subtitle2": "De ez nem akadályozott meg abban, hogy korabeli dokumentumok analógiája alapján megpróbáljuk elképzelni, hogy milyenek lehettek az olaszteleki falfestmények eredeti pompájukban.",
    "conclude2": " A kirakós következő szintjét megoldva te is megtudhatod.",
    "success1": "Gratulálunk, a falképed restaurálva van!",
    "success11": "Mig az eredetin hónapokig dolgoztak a restaurátorok, neked alig ..... percbe tellett.",
    "success2": "Nagyszerű munka! Most már te is tudod, hogyan restaurálják a falfestményeket.",
    "success21": "A felújítási folyamat része az alapos történeti kutatás is,",
    "success22": " mely alatt sok érdekes történetet fedeztünk fel a Danielek életéről.",
    "success23": "Nézd meg a kiállítás többi részét, iskerkedj meg velük."
}]

var v = new Array();
var nodeVideo = 0;
var videoN = 0;
var videostate = 0;
var introVideo = new Array();
introVideo = ["lib/video/video.mp4", ["lib/video/video2.mp4", "lib/video/video2.mp4", "lib/video/video2.mp4"]]

v[0] = [
    "./lib/video/ENG/2.mp4",
    "./lib/video/ENG/3.mp4",
    "./lib/video/ENG/4.mp4",
    "./lib/video/ENG/5.mp4",
    "./lib/video/ENG/6.mp4",
    "./lib/video/ENG/1.mp4"
];
v[1] = [
    "./lib/video/RO/2.mp4",
    "./lib/video/RO/3.mp4",
    "./lib/video/RO/4.mp4",
    "./lib/video/RO/5.mp4",
    "./lib/video/RO/6.mp4",
    "./lib/video/RO/1.mp4"
];
v[2] = [
    "./lib/video/HU/2.mp4",
    "./lib/video/HU/3.mp4",
    "./lib/video/HU/4.mp4",
    "./lib/video/HU/5.mp4",
    "./lib/video/HU/6.mp4",
    "./lib/video/HU/1.mp4"
];
function changeVid(num) {
    // console.log(num)
    // console.log("vid-Num", num)
    var video = document.getElementById('myvideo2')
    nodeVideo = num
    var videoSrc = v[localStorage.getItem('langState')][num]
    var index = num + 2
    console.log('here', video)
    for (let i = 0; i < 6; i++) {
        $(".Story" + Number(i + 1)).removeClass('activeVideo')
    }
    $(".Story" + index).addClass('activeVideo')
    videostate = 1;
    $("#intro2back").hide()
    $(".mask").hide()
    $("#myvideo2").show()
    // $("#intro2").hide('slow')
    video.setAttribute("src", videoSrc);
    video.load();
}
var introLang = [{
    's6' : "BETHLEN CASTLE",
    's5' : "XXI CENTRUY ",
    's1' : "1640-1649",
    's2' : "1669",
    's3' : "1680",
    's4' : "XIX-XX CENTURY"
},
{
    's5' : "Secolul XIX-XX",
    's1' : "1640-1649",
    's2' : "1669",
    's3' : "1680",
    's4' : "Secolul XIX-XX",
    's6' : "Castelul Bethlen"
},
{
    's5' : "XXI század",
    's1' : "1640-1649",
    's2' : "1669",
    's3' : "1680",
    's4' : "XIX-XX század",
    's6' : "Bethlen-kastély"
}]

var languageState = 0;
document.getElementById('playVid1').textContent = lang[languageState]['vid1']
document.getElementById('playVid2').textContent = lang[languageState]['vid2']
document.getElementById('puzzleGame').textContent = lang[languageState]['puzzlegame']
document.getElementById('interationGame').textContent = lang[languageState]['interationgame']
localStorage.setItem('langState', languageState)
function changeVideoL() {
    document.getElementsByClassName('Story1')[0].textContent = introLang[languageState]['s1']
    document.getElementsByClassName('Story2')[0].textContent = introLang[languageState]['s2']
    document.getElementsByClassName('Story3')[0].textContent = introLang[languageState]['s3']
    document.getElementsByClassName('Story4')[0].textContent = introLang[languageState]['s4']
    document.getElementsByClassName('Story5')[0].textContent = introLang[languageState]['s5']
    document.getElementsByClassName('Story6')[0].textContent = introLang[languageState]['s6']
}
function changeLang(num) {
    languageState = num
    document.getElementById('playVid1').textContent = lang[languageState]['vid1']
    document.getElementById('playVid2').textContent = lang[languageState]['vid2']
    document.getElementById('puzzleGame').textContent = lang[languageState]['puzzlegame']
    document.getElementById('interationGame').textContent = lang[languageState]['interationgame']
    localStorage.setItem('langState', num)
    // console.log($(".comentTitle")[0])
    var containersvge = document.getElementById("containerSvg");
    var svgDoc = containersvge.contentDocument;
    var delta1 = svgDoc.getElementsByClassName("comentTitle");
    delta1[0].textContent = lang[languageState]['gametopic'];
    var delta2 = svgDoc.getElementsByClassName("comentTitle1");
    var delta20 = svgDoc.getElementsByClassName("comentTitle10");
    delta2[0].textContent = lang[languageState]['subtitle'];
    delta20[0].textContent = lang[languageState]['subtitle0'];
    var delta3 = svgDoc.getElementsByClassName("comentTitle2");
    delta3[0].textContent = lang[languageState]['conclude'];

    var containersvge = document.getElementById("containerSvg1");
    var svgDoc = containersvge.contentDocument;
    var deltas1 = svgDoc.getElementsByClassName("comentTitles");
    deltas1[0].textContent = lang[languageState]['gametopic2'];
    var deltas10 = svgDoc.getElementsByClassName("comentTitles0");
    deltas10[0].textContent = lang[languageState]['gametopic20'];
    var deltas11 = svgDoc.getElementsByClassName("comentTitles01");
    deltas11[0].textContent = lang[languageState]['gametopic21'];
    var deltas2 = svgDoc.getElementsByClassName("comentTitles1");
    deltas2[0].textContent = lang[languageState]['subtitle2'];
    var deltas3 = svgDoc.getElementsByClassName("comentTitles2");
    deltas3[0].textContent = lang[languageState]['conclude2'];
}
//     console.log(delta1)
//     delta1.textContent = "asdfsdf";
//     var delta2 = svgDoc.getElementById("comentTitle1");
//     delta2.textContent = langs[languageState]['subtitle'];
//     var delta3 = svgDoc.getElementById("comentTitle2");
//     delta3.textContent = langs[languageState]['conclude'];
// });
document.getElementById("myvideo").addEventListener('ended', function () {
    // $("#intro").slideUp('slow')
    // $("#intro2").slideDown('slow')
            $(".mainMenu").show('slow')
            $(".markBox").show('slow')
});
document.getElementById("myvideo2").addEventListener('ended', () => {
    $('#myvideo2').hide()
    $(".mask").show()
    $('#intro2back').show()
    videostate = 0;
})
// document.addEventListener('click', (e) => {
//     console.log(e.target.className) 
//     if (e.target.className == 'customBtn videoMenu' || e.target.id == 'playVid2') { console.log("ok") }
//     else { $("#intro2").hide() }
// })

$("#backBtn1").click(function () {
    // window.location.reload();
    if (videostate == 0) {
        $("#intro").slideDown('slow')
        $("#intro2").slideUp('slow')
    }
    else if (videostate == 1) {
        $('#myvideo2').hide('slow')
        $(".mask").show('slow')
        $('#intro2back').show('slow')
        videostate = 0;
        
    }
})

function puzzleGame() {
    $("#intro").slideUp('slow')
    $('#container').slideDown('slow')
    // console.log("puzzleGame", languageState)
}
function interationGame() {
    // console.log('interation Game')
    window.location.href = './paint'
}
function playVid(vidNum) {
    videoN = vidNum;
    if (vidNum == 1) {
        $("#intro").slideUp('slow')
        $("#intro2").slideDown('slow')
        changeVideoL()
    }
    else {
        // console.log("vid-Num", vidNum)
        var video = document.getElementById('myvideo');
        var videoSrc = (vidNum == 1) ? introVideo[0] : introVideo[1][localStorage.getItem('langState')]
        if (vidNum == 2) {
            $(".mainMenu").hide('slow')
            $(".markBox").hide('slow')
        }
        video.setAttribute("src", videoSrc);
        video.load();
    }
    for (let i=0;i<6;i++) {
        $(".Story" + Number(i+1)).removeClass('activeVideo')
    }
    $(".Story" + Number(nodeVideo + 1)).addClass('activeVideo')

}
$("#backBtn").click(function () {
    // console.log('back to introduction')
    $("#intro").slideDown('slow')
    $('#container').slideUp('slow')
})
$("#backBtn2").click(function () {
    $("#intro").slideDown('slow')
    $('#container2').slideUp('slow')
})
$("#backBtn3").click(function () {
    document.location.reload(true)
})
$("#upBtn").click(function () {
    $("#container").slideUp('slow')
    $('#container2').slideDown('slow')
})

// $(".videoMenu").hover(( e ) => {
//     if (e.type == 'mouseenter') {
//         $("#intro2").show()
//     }
//     // if (e.type == 'mouseleave') {
//     //     $("#intro2").hide()
//     // }
// })

// $(".videoMenu").click(( e ) => {
//     if (e.type == 'mouseenter') {
//         $("#intro2").show()
//     }
//     if (e.type == 'mouseleave') {
//         $("#intro2").hide()
//     }
// })


// $("#intro2").hover( (e) => {
//     if (e.type == 'mouseenter') {
//         $("#intro2").show()
//     }
//     if (e.type == 'mouseleave') {
//         $("#intro2").hide()
//     }
// })