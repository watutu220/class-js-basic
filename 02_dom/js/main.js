console.log('success!');
// シングルクオーテーションはテンプレートリテラル

// HTML: <h1 id="main-title">JavaScriptで画面を動かそう</h1>

const changeText = document.getElementById('btn-text');
const themeTitle = document.getElementById('theme-title');
const themeDesc = document.getElementById('theme-desc');
const changeTheme = document.querySelector('body');
let isToggled = false; // 状態を保存するフラグ
const lightTheme = document.getElementById('btn-light');
const darkTheme = document.getElementById('btn-dark');


changeText.addEventListener('click', () => {
    if (!isToggled) {
        themeTitle.style.color = '#7bc'; // 1回目の処理
        isToggled = true;
    } else {
        themeTitle.style.color = '#ff3366'; // 2回目の処理（元に戻す）
        isToggled = false;
    }
});
// 文字色を変更する
themeTitle.style.color = '#ff3366';

lightTheme.addEventListener('click', () => {
    changeTheme.style.backgroundColor = '#fff';
    themeDesc.style.color = '#000';
    themeTitle.style.color = '#000';
});

darkTheme.addEventListener('click', () => {
    changeTheme.style.backgroundColor = '#000';
    themeDesc.style.color = '#fff';
    themeTitle.style.color = '#fff';
});


console.log(themeTitle); // <h1 id="main-title">JavaScriptで画面を動かそう</h1>

// ID名で取得（CSSと同じく # が必要）
const title = document.querySelector('#main-title');

// // 1. タグのHTML構造を確認したいとき
// console.log(title);
// // 出力: <h1 id="main-title">JavaScriptで画面を動かそう</h1>

// // 2. その要素が持っている「詳しい情報や設定値の一覧」を確認したいとき
// console.dir(title);
// // 出力: h1#main-title のツリー（textContent, style, id, innerHTML などがズラリと並ぶ）

// console.log(document.body);

// console.log(document.documentElement);

// クラス名で取得（CSSと同じく . が必要）
const introText = document.querySelector('#intro');
console.log(themeTitle.innerHTML);

const day = 12;
const week = '月曜日';

introText.innerHTML = `今日は${day}日の<br>${week}です。`;

// タグ名で取得
const heading = document.querySelector('h1');

// 1. テキストを読み取る（参照）
console.log(mainTitle.textContent); // "JavaScriptで画面を動かそう"

// 2. 新しいテキストで上書きする（代入）
mainTitle.textContent = 'yawora404';
