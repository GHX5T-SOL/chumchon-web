# Chumchon — The Degen Toolkit

![Chumchon Logo](https://i.ibb.co/8nSwLf94/chumchon.png)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fchumchon.app&label=website&up_message=online&down_message=offline&color=00d4aa)](https://chumchon.app)
[![Stars](https://img.shields.io/github/stars/GHX5T-SOL/chumchon?style=social)](https://github.com/GHX5T-SOL/chumchon/stargazers)
[![Issues](https://img.shields.io/github/issues/GHX5T-SOL/chumchon)](https://github.com/GHX5T-SOL/chumchon/issues)
[![Last Commit](https://img.shields.io/github/last-commit/GHX5T-SOL/chumchon)](https://github.com/GHX5T-SOL/chumchon/commits/main)
[![License](https://img.shields.io/badge/license-Proprietary-red)](LICENSE)
[![X (Twitter) Follow](https://img.shields.io/twitter/follow/chumchon_app?style=social)](https://x.com/chumchon_app)

![Solana](https://img.shields.io/badge/Solana-Blockchain-00FFA3?logo=solana&logoColor=white&labelColor=4E44CE)
![Anchor](https://img.shields.io/badge/Anchor-0.31.1-7F5AF0)
![Rust](https://img.shields.io/badge/Rust-Programs-b7410e?logo=rust)
![React Native](https://img.shields.io/badge/React%20Native-Expo%2053-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![IPFS](https://img.shields.io/badge/IPFS-Off--chain%20assets-65c2c8?logo=ipfs)
![Arweave](https://img.shields.io/badge/Arweave-Storage-222222)
![Jupiter](https://img.shields.io/badge/Jupiter-v6%20DEX%20Aggregator-f59e0b)

---

## Overview

Chumchon is a decentralized social network and messenger engineered for Solana’s high‑throughput runtime. Built for crypto‑native communities, it replaces fragile, bot‑ridden chat apps with verifiable, token/NFT‑gated spaces; ECIES‑encrypted DMs; and on‑chain primitives for trading, tipping, and reputation. Sub‑second finality comes from Solana’s Proof‑of‑History (PoH) and Tower BFT; seamless mobile UX rides on Solana Mobile Stack (SMS) with Mobile Wallet Adapter (MWA) and SIWS.

Visit the home site: https://chumchon.app

## Key Features

- **On‑chain identity & gating**: SPL Token/NFT checks and PDAs enforce membership and roles for spam‑resistant groups.
- **ECIES‑encrypted DMs**: X25519 + HKDF‑SHA256 + ChaCha20‑Poly1305. Ciphertexts live on‑chain/IPFS; only recipients decrypt.
- **Whale‑grade OTC escrow**: Atomic CPI to SPL settles swaps via escrow PDAs with all‑or‑nothing safety.
- **Realtime DeFi integrations**: Jupiter v6 routes swaps; DexScreener websockets stream prices; Cabalspy powers PnL leaderboards.
- **Reputation & invites**: PDA‑stored scores combine posting, tips, and participation; sharable invite codes gate growth.
- **Mobile‑first**: SMS + MWA for wallet auth, signing, and cached re‑authorization; SIWS for domain‑bound signatures.

## Architecture

- **Frontend**: React Native (Expo 53), TypeScript, React Navigation 7, React Query. Dark cyberpunk UI built for mobile first.
- **On‑chain programs**: Rust + Anchor 0.31.1. State in PDAs; SPL Token for gating; events for realtime UX.
- **Storage model**: PDA metadata on‑chain; large payloads on Arweave/IPFS with on‑chain integrity hashes.

<details>
<summary>Crypto details</summary>

- Wallet keys (ed25519) mapped to X25519 for Diffie‑Hellman.
- Sessionless ECIES for DMs with AEAD and nonce discipline.
- Reputation formula: `posts*1 + tips/1000 + groups*5` (PDA‑backed).
- Escrow PDAs: `["escrow", initiator, counterparty, timestamp]`.

</details>

## Quick Links

- 🚀 **Android Demo**: https://expo.dev/accounts/ghxstxbt/projects/chumchon/builds/1f8f002d-9350-45a9-8402-79dbe442214d
- 📱 **Web Demo**: https://chumchon--demo.expo.app/
- 📄 **Technical Whitepaper**: https://drive.google.com/file/d/12ti28SJwCDthR6AAxyG7Uj4m3909FOqb/view
- 🐙 **GitHub**: https://github.com/GHX5T-SOL/chumchon
- 𝕏 **Twitter/X**: https://x.com/chumchon_app
- ✉️ **Contact**: chumchon@proton.me
- 🍎 iOS demo app — coming soon

## Screenshot

![Chumchon hero](hero-image.svg)

## Contributing

Contributions are welcome! Please open an issue or pull request on `main`. For larger proposals, start a discussion to align on scopes and interfaces.

## License

This repository is released under the Chumchon Proprietary License. Use,
modification, redistribution, and use of the Chumchon name or logo are
prohibited without prior written permission. See [LICENSE](LICENSE).

---

Built on Solana. Designed for degens. 💜💙


