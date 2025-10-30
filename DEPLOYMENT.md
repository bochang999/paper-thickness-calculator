# デプロイ手順

## GitHubリポジトリの作成とデプロイ

### 1. GitHubでリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名: `paper-thickness-calculator`
3. Description: `紙の枚数から厚みを予測するシンプルなWebアプリ`
4. Public を選択
5. **README、.gitignore、licenseは追加しない**（既にローカルにあるため）
6. 「Create repository」をクリック

### 2. ローカルリポジトリをプッシュ

このディレクトリで以下のコマンドを実行:

```bash
# リモートリポジトリを追加（<username>を自分のGitHubユーザー名に変更）
git remote add origin https://github.com/<username>/paper-thickness-calculator.git

# プッシュ
git push -u origin main
```

### 3. GitHub Pagesを有効化

1. GitHubのリポジトリページにアクセス
2. 「Settings」タブをクリック
3. 左側メニューから「Pages」を選択
4. 「Source」で `Deploy from a branch` を選択
5. 「Branch」で `main` ブランチを選択
6. フォルダは `/ (root)` のまま
7. 「Save」をクリック

### 4. アクセス

数分後、以下のURLでアプリが公開されます:

```
https://<username>.github.io/paper-thickness-calculator/
```

## Androidでホーム画面に追加

1. ChromeでアプリのURLにアクセス
2. 右上のメニュー（⋮）をタップ
3. 「ホーム画面に追加」を選択
4. アプリ名を確認して「追加」
5. ホーム画面にアイコンが追加され、アプリのように起動可能

## アイコンについて

現在、manifest.jsonでアイコンを指定していますが、実際のアイコン画像ファイル（icon-192.png、icon-512.png）はまだ作成していません。

アイコンを追加する場合:
1. 192x192pxと512x512pxのPNG画像を作成
2. `icon-192.png`と`icon-512.png`という名前で保存
3. このディレクトリに配置
4. Gitにコミット＆プッシュ

アイコンがなくても、ホーム画面への追加とアプリの動作には影響ありません。
