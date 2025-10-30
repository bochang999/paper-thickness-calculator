# 紙の厚み予測 Webアプリ

枚数を入力するだけで、紙束のおおよその厚み(mm)を瞬時に計算するシンプルなWebアプリケーションです。

## 機能

### メイン機能：厚みの予測
- 予測したい枚数を入力
- リアルタイムで厚みを計算・表示

### 基準設定（折りたたみ式）
- サンプルの厚み(mm)を入力
- サンプルの枚数を入力
- 「基準をセット」ボタンで1枚あたりの厚みを計算・保存

## 技術スタック

- HTML5
- CSS3
- Vanilla JavaScript
- PWA (Progressive Web App)

## ファイル構成

```
paper-thickness-calculator/
├── index.html      # メインHTML
├── style.css       # スタイルシート
├── script.js       # JavaScript ロジック
├── manifest.json   # PWAマニフェスト
└── README.md       # このファイル
```

## ローカルでの実行

1. このディレクトリで簡易HTTPサーバーを起動:
   ```bash
   python3 -m http.server 8000
   ```
   または
   ```bash
   npx http-server -p 8000
   ```

2. ブラウザで `http://localhost:8000` にアクセス

## GitHub Pagesへのデプロイ

1. GitHubに新しいリポジトリを作成
2. このディレクトリの内容をプッシュ
3. Settings > Pages で `main` ブランチを公開
4. `https://<username>.github.io/<repo-name>/` でアクセス可能

## スマホのホーム画面に追加

1. AndroidのChromeでアプリにアクセス
2. 右上メニュー（⋮）をタップ
3. 「ホーム画面に追加」を選択
4. ホーム画面からアプリのように起動可能

## 使い方

1. **初回設定**: 基準設定を展開し、サンプルの厚みと枚数を入力して「基準をセット」
2. **日常使用**: メイン画面で枚数を入力すると、即座に厚みが表示されます

## Issue

Linear Issue: BOC-150
