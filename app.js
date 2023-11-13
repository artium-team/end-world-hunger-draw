// const firebaseConfig = {
//     apiKey: "AIzaSyCY7jOiZrPTKR62X0d5apUpLKyBRg66KxE",
//     authDomain: "r-color.firebaseapp.com",
//     projectId: "r-color",
//     storageBucket: "r-color.appspot.com",
//     messagingSenderId: "1054869912373",
//     appId: "1:1054869912373:web:2c599764b8923bc702ea7c",
//     measurementId: "G-QW327CGHW1",
//     databaseURL: "https://r-color-default-rtdb.asia-southeast1.firebasedatabase.app",
// }

const firebaseConfig = {
    apiKey: "AIzaSyAxwcKhN0wdgiE_0mNWZxWUk-XBikg-c-o",
    authDomain: "endworldhunger-f5fdc.firebaseapp.com",
    projectId: "endworldhunger-f5fdc",
    storageBucket: "endworldhunger-f5fdc.appspot.com",
    messagingSenderId: "659488879578",
    appId: "1:659488879578:web:6633ff8a5419f3bf0486e3",
    measurementId: "G-D1KZZHVC2J"
};

firebase.initializeApp(firebaseConfig)

var points = []

var col = 0

var canvas

function setup() {

    // pointsData.remove()

    canvas = createCanvas(300, 300)
    background(255)
    fill(col)
    noStroke()

    mousePressed = drawPoint
    mouseDragged = drawPoint

    $("canvas").detach().prependTo("#main");
}

function draw() {
    background(255)

    for (var i = 0; i < points.length; i++) {
        var point = points[i]
        fill(point.color)
        circle(point.x, point.y, point.size)
    }
}

async function drawPoint() {
    points.push({ x: mouseX, y: mouseY, color: col, size: Math.floor(Math.random() * 15) + 5 })
}

function clearDrawing() {
    points = []
}

function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    return random_number;
}

const storage = firebase.storage();
previousURI = null

function uploadToFirebase() {
    const ref = storage.ref(getRandomFileName() + '.png');
    const png = canvas.elt.toDataURL('image/png');

    if (previousURI == png) return

    previousURI = png

    console.log(png)
    ref.putString(png, 'data_url').then(snapshot => { document.getElementById("donate").innerHTML = "Thank you for donating your art!" })
}