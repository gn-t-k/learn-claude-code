# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a new repository for learning Claude Code. The codebase is currently empty and ready for development.

## Development Environment

This repository is configured with Claude Code permissions in `.claude/settings.local.json`.

## Code Comments

- コードコメントは基本的に日本語で書く。
- コードから自明なものについてはコメントは書かない。コードから読み取れない情報（なぜこうなっているのか）をコメントに書く。

## React Components and Functions

- Reactコンポーネントは以下の形式で記述する：
  - Propsがある場合: `type Props = { ... }; export const Foo: FC<Props> = ({ ... }) => { ... };`
  - Propsがない場合: `export const Foo: FC = () => { ... };`
- 関数は可能な限り`function`ではなくアロー関数を使用する。
- アロー関数の記述例: `export const functionName = (args) => { ... };`

## packages/react-components

- アプリケーションに依存しないReactコンポーネントをexportするpackage
- packages/stylesにあるTailwindの設定を参照してスタイリングを行う
- Reactのコンポーネントとstorybookをセットで実装する
- アクセシビリティ確保のため、react-ariaやradix-uiを積極的に活用する
- コンポーネントファイルとstorybookファイルはコロケーションさせる（例：src/components/button/button.tsx、src/components/button/button.stories.tsx）
