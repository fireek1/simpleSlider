let left = 0;
document.querySelector('.next').onclick = () => {
    left === -768 ? left = 0 : left -= 256;
    document.querySelector('.slider').style.left = left + 'px';
}
document.querySelector('.prev').onclick = () => {
    left === 0 ? left = -768 : left += 256;
    document.querySelector('.slider').style.left = left + 'px';
}