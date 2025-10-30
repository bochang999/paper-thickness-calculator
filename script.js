// DOM読み込み後に実行
document.addEventListener('DOMContentLoaded', () => {

    // 1. 要素を取得
    const sampleThicknessInput = document.getElementById('sample-thickness');
    const sampleSheetsInput = document.getElementById('sample-sheets');
    const setBaselineButton = document.getElementById('set-baseline');

    const predictSheetsInput = document.getElementById('predict-sheets');
    const predictedThicknessDisplay = document.getElementById('predicted-thickness');

    const settingsSummary = document.getElementById('settings-summary');
    const settingsDetails = document.getElementById('settings-details');

    // 2. アプリの状態（紙1枚あたりの厚み）
    let singleSheetThickness = 0;

    // 3. メインの計算関数
    function calculateAndUpdate() {
        // 予測したい枚数を取得（未入力なら0として扱う）
        const predictSheets = parseFloat(predictSheetsInput.value) || 0;

        // 厚みを計算
        const totalThickness = predictSheets * singleSheetThickness;

        // 結果を表示（小数点以下2桁にフォーマット）
        predictedThicknessDisplay.textContent = `${totalThickness.toFixed(2)} mm`;
    }

    // 4. イベントリスナーの設定

    // 「基準をセット」ボタンが押されたとき
    setBaselineButton.addEventListener('click', () => {
        const sampleThickness = parseFloat(sampleThicknessInput.value);
        const sampleSheets = parseFloat(sampleSheetsInput.value);

        // 有効な入力があるかチェック
        if (sampleThickness > 0 && sampleSheets > 0) {
            // 紙1枚あたりの厚みを計算・保存
            singleSheetThickness = sampleThickness / sampleSheets;

            // 基準表示を更新 (小数点以下4桁まで表示)
            settingsSummary.textContent = `▼ 基準設定を変更する (現在の基準: ${singleSheetThickness.toFixed(4)} mm/枚)`;

            // 設定エリアを閉じる
            settingsDetails.open = false;

            // メインの予測結果を再計算
            calculateAndUpdate();

        } else {
            alert('厚みと枚数の両方に有効な数値を入力してください。');
        }
    });

    // 「予測したい枚数」が入力されるたび（リアルタイム）
    predictSheetsInput.addEventListener('input', () => {
        calculateAndUpdate();
    });

});
