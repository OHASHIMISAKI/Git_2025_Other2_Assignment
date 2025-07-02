// HTMLの要素を取得
const submitBtn = document.getElementById('submitButton');
const resultP = document.getElementById('result');

// ボタンがクリックされたら判定処理を行う
submitBtn.addEventListener('click', () => {
    // チェックされているラジオボタンを取得
    const checkedRadio = document.querySelector("input[name='answer']:checked");

    // 何も選択されていない場合はメッセージを表示
    if (checkedRadio === null) {
        resultP.textContent = '答えを選択してください。';
        return;
    }

    const correctAnswer = 'four';

    // 選択された答えが正解かどうかを判定
    if (checkedRadio.value === correctAnswer) {
        resultP.textContent = '正解';
    } else {
        resultP.textContent = '不正解';
    }
});