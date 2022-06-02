var anim = 2, set1 = 0, set2 = 0;
document.getElementById('more').style.display = "none";
document.getElementById('box1').setAttribute('onclick', ' nextSlide(anim % 2)')
function nextSlide(state) {
    anim += 1;
    if (state) {
        set1 = "back"
        set2 = "front"
        document.getElementById('box1').setAttribute('onclick', ' nextSlide(anim % 2)')
        document.getElementById('box2').removeAttribute('onclick')
    }
    else {
        set1 = "front"
        set2 = "back"
        document.getElementById('box2').setAttribute('onclick', ' nextSlide(anim % 2)')
        document.getElementById('box1').removeAttribute('onclick')
    }
    document.getElementById('box1').classList.remove(set2)
    document.getElementById('box2').classList.remove(set1)
    document.getElementById('box1').classList.add(set1)
    document.getElementById('box2').classList.add(set2)
}
