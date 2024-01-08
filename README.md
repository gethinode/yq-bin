# yq-bin

<!-- markdownlint-disable MD033 -->
<!-- Tagline -->
<p align="center">
    <b>Binary wrapper for yq</b>
    <br>
</p>

<!-- Badges -->
<p align="center">
    <a href="https://www.npmjs.com/package/%40gethinode/yq-bin">
        <img src="https://img.shields.io/npm/v/%40gethinode/yq-bin" alt="npm package">
    </a>
    <a href="https://github.com/gethinode/yq-bin/commits/main">
        <img src="https://img.shields.io/github/last-commit/gethinode/yq-bin.svg" alt="Last commit">
    </a>
    <a href="https://github.com/gethinode/yq-bin/issues">
        <img src="https://img.shields.io/github/issues/gethinode/yq-bin.svg" alt="Issues">
    </a>
    <a href="https://github.com/gethinode/yq-bin/pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/yq-bin.svg" alt="Pulls">
    </a>
    <a href="https://github.com/gethinode/yq-bin/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/gethinode/yq-bin" alt="License">
    </a>
</p>

<!-- Table of Contents -->
<p align="center">
  <a href="#about">About</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>
<!-- markdownlint-enable MD033 -->

## About

[yq][yq_repo] is a lightweight and portable command-line YAML, JSON, and XML processor. It is written and maintained by [Mike Farah][mikefarah]. Inspired by [hugo-bin][hugo-bin], this package publishes yq as [npm][npm] binary.

## Prerequisites

This package requires `npm`. You are recommended to install [Node.js][nodejs], which includes `npm`.

## Installation

Run the following command to install `yq-bin` as development dependency in your current project.

```bash
npm install @gethinode/yq-bin --save-dev
```

## Usage

Use `npx yq` to run the embedded `yq` binary. When `npx` is unavailable, you can run `./node_modules/.bin/yq` instead.

## Notes

This package is derived from [fenneclab/hugo-bin][hugo-bin]. The underlying code does not recognize computers with Apple Silicon properly. Instead, an Intel-based binary is used, which may affect performance.

## Credits

This package is based on the following repository:

- [fenneclab/hugo-bin][hugo-bin]

## License

The `yq-bin` codebase is released under the [MIT license][license].

<!-- MARKDOWN PUBLIC LINKS -->
[nodejs]: https://nodejs.org
[npm]: https://www.npmjs.com
[hugo-bin]: https://github.com/fenneclab/hugo-bin
[mikefarah]: https://github.com/mikefarah
[yq_repo]: https://github.com/mikefarah/yq

<!-- MARKDOWN MAINTAINED LINKS -->
[license]: https://github.com/gethinode/hinode/blob/main/LICENSE
