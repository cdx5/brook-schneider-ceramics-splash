var images = ["b18.gif", "black-7.png", "blush.gif", "carved.gif", "chainvase.png", "halo.PNG", "lilac.gif"];

for (var i = images.length-1; i>=0; i--) {
    var select = Math.floor(Math.random()*images.length);
    var id = 'position-' + (i + 1);
    console.log(id);
    document.getElementById(id).innerHTML = '<img src="assets/imgs/' + images[select] + '">';
    images.splice(select, 1);
    console.log(images);
}