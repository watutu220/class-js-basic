console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'クリックされました';
    mainTitle.computedStyleMap.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('load', () => {
    console.log('ページの読み込みが完了しました！');
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidthText = document.getElementById('window-width');

// 画面を開いた瞬間の幅を表示
windowWidthText.textContent = window.innerWidth;

// ウィンドウがリサイズされるたびに数値を更新
window.addEventListener('resize', () => {
    windowWidthText.textContent = window.innerWidth;
});

btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active', 'is-open');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');

});
