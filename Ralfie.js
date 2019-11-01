(function() {
    alert('You are about to be Ralfed up to your Ralfies with Ralf! Prepare for it!');
})();

function changeSourceAll() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src.indexOf('placeholder.png') !== -1) {
            images[i].src = images[i].src.replace("placeholder.png", "https://img.haikudeck.com/mi/0fe581cde7f38b104945fc6017a1f1b9.jpeg");
        }
    }
}
changeSourceAll();

