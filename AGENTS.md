## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## UI変更の画面証跡

UIに目に見える変化がある実装をしたら、報告前に必ず画面証跡を残す：

- 開発サーバーを立て、ブラウザで対象ページを開いて変化を確認する
- 変化点が分かるスクリーンショットを撮る（操作前後など最小限の枚数）
- インタラクティブな動作がある場合は短いデモ動画も収録する
- 成果物は `/opt/cursor/artifacts/` に分かりやすいsnake_case名で保存し、報告に画像・動画を添える
- 目に見える変化がない変更の場合は、その旨を報告に一言添える
