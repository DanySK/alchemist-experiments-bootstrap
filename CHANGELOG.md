## [1.1.3](https://github.com/DanySK/alchemist-experiments-bootstrap/compare/1.1.2...1.1.3) (2023-01-29)


### Bug Fixes

* **release:** move pushes with refreshed versions to the publish phase ([c185161](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/c1851619d8e302165c6eaeaf66ae52c561e1a54c))


### Documentation

* **readme:** add a way to re-run the charts generation without re-running experiments ([56c8965](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/56c8965fa8c8f9cff91e99455056392386e37440))
* **readme:** prepare a readme stub ([e7d7432](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/e7d743218d65a27dad7c463ca2b0c2f83d07ecc0))


### Dependency updates

* **deps:** update python docker tag to v3.11.1 ([77f15c1](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/77f15c137c30bd23c948c17e32ec708ce7d88e3c))


### Build and continuous integration

* always rebuild the container images ([6a1037a](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/6a1037a5a902e85093f4c2d8a22c7adde31bce53))
* validate the Gradle wrapper on Linux only ([8846942](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/8846942331bc06bec28d440b42be31054bf07a33))

## [1.1.2](https://github.com/DanySK/alchemist-experiments-bootstrap/compare/1.1.1...1.1.2) (2023-01-24)


### Bug Fixes

* **release:** add a preparatory commit for the version updates ([f811f3d](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/f811f3d876b776baf6529dddd36f37cada4236b9))
* **release:** push the updated files after version calculation ([0311e56](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/0311e56a5110d883c2c71a8a7002445fdbf9adf6))


### General maintenance

* **release:** update version descriptors to 1.1.2 ([298c888](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/298c88848084eb3b9af658e867d736bec4e01496))


### Build and continuous integration

* **release:** skip the CI process for release commits ([8a0732f](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/8a0732f82b17f5dc85382c4de2716f4d6a10f486))

## [1.1.2](https://github.com/DanySK/alchemist-experiments-bootstrap/compare/1.1.1...1.1.2) (2023-01-24)


### Bug Fixes

* **release:** add a preparatory commit for the version updates ([f811f3d](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/f811f3d876b776baf6529dddd36f37cada4236b9))
* **release:** push the updated files after version calculation ([0311e56](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/0311e56a5110d883c2c71a8a7002445fdbf9adf6))

## [1.1.1](https://github.com/DanySK/alchemist-experiments-bootstrap/compare/1.1.0...1.1.1) (2023-01-24)


### Bug Fixes

* **release:** move the preparation commands to the prepare phase ([ee52de2](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/ee52de20fa26653febcfdc158884b38ad2a209d8))

## [1.1.0](https://github.com/DanySK/alchemist-experiments-bootstrap/compare/1.0.1...1.1.0) (2023-01-24)


### Features

* run simulations with more variables to make decent charts ([77e6d6d](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/77e6d6d64b2ce74992c2c9cd35b75a2860571a50))


### Bug Fixes

* **build:** remove deprecated variable assignment ([6099baf](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/6099baf6f9e666e066f8fd7623a6198521eb46b4))
* **build:** remove generated data after the simulation container build ([a79dab4](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/a79dab48e41dfc09b213afcae7e29f9767fb9079))
* **build:** switch to modern JSON effects ([a0ede3b](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/a0ede3bb2bfa5a868d3d918e2b59d2edd95dd39c))
* **ci:** read the docker password from the CI secrets ([689a3a4](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/689a3a40fef2e65a9dc6eaab3a07378af955b510))
* **ci:** use a separate concurrency group for the container check job ([d06f389](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/d06f3894edb14f67693aa8da043f670cdbb4a2b3))
* **release:** publish the images built in CI ([4c7d849](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/4c7d8495adfac26818aa87cab08cc25f954d59aa))


### Dependency updates

* **deps:** update alchemist to v25.7.2 ([00b615a](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/00b615ae14b62f677b7410886fef189a61c9645c))
* **deps:** update dependency xarray to v2023 ([32cc855](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/32cc85583d6967e1d2e740a9641c5011997bb979))


### Build and continuous integration

* add a docker check job ([ca6ac93](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/ca6ac934f5e3aeb63eb3350a2d4bdc22ea7cb056))
* prepare a containerized version of the experiment ([d0ff60e](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/d0ff60eec241b67a43064796fdc24f930d698394))


### General maintenance

* **build:** remove aggressive heap settings ([a40d0be](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/a40d0be30b95ec93b5e8baaa32961211d5d6c706))
* delete Eclipse settings ([807f8d0](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/807f8d0835162d4bf96baf81b4dd686c60abbd67))
* ignore idea, spyder, gradle, and charts folder ([d92b6e8](https://github.com/DanySK/alchemist-experiments-bootstrap/commit/d92b6e8d52c9cfe0d83de9dc5a03cf26e93d18e6))

## [1.0.1](https://github.com/DanySK/Alchemist-experiments-startup/compare/1.0.0...1.0.1) (2023-01-19)


### Documentation

* clarify the need for the DEPLOYMENT_TOKEN in the readme ([534533b](https://github.com/DanySK/Alchemist-experiments-startup/commit/534533b7826dce6ebf3304fdea2807aa1c9d982b))


### Build and continuous integration

* cancel in-progress charts rendering on new pushes ([a377004](https://github.com/DanySK/Alchemist-experiments-startup/commit/a3770040cdc89b8a3805961d5774f8bddeb2c7b7))
* cancel in-progress simulation checks on new pushes ([0e37030](https://github.com/DanySK/Alchemist-experiments-startup/commit/0e37030dae0c91f615b5fa2c3bedf2d18aca2194))
* **deps:** update dependency macos github actions runner to v12 ([e219ab1](https://github.com/DanySK/Alchemist-experiments-startup/commit/e219ab16b0ceb4c8ca75795660c5d3b4fba9a3f9))
* **deps:** update dependency windows github actions runner to v22 ([238a30d](https://github.com/DanySK/Alchemist-experiments-startup/commit/238a30dda649405d7a5e3fd8729d8182df499d4d))
* limit the concurrency of the release jobs ([6b3c238](https://github.com/DanySK/Alchemist-experiments-startup/commit/6b3c238de08c2f9b9501c21f75ecb2001f0294a8))
* recover the build functionality ([6197c5c](https://github.com/DanySK/Alchemist-experiments-startup/commit/6197c5cc5ecd23272d7dbe82765a3a5b8c06d419))


### Dependency updates

* **deps:** update alchemist to v25.7.1 ([b54e7c5](https://github.com/DanySK/Alchemist-experiments-startup/commit/b54e7c5e7930c35772d55ebb19c2c163f5e85aec))
* **deps:** update plugin com.gradle.enterprise to v3.12.2 ([4513d0f](https://github.com/DanySK/Alchemist-experiments-startup/commit/4513d0feb288272453a4ff1b9643bfa802f907ac))
* **deps:** update plugin gitsemver to v1 ([87b688e](https://github.com/DanySK/Alchemist-experiments-startup/commit/87b688ee5c2fe3072f8f3107686d25aa6f6749a2))
* **deps:** update plugin tasktree to v2.1.1 ([761aded](https://github.com/DanySK/Alchemist-experiments-startup/commit/761aded54c3f9da7f35e1a035920b859d79d6bbf))
* **deps:** update python docker tag to v3.11.1 ([920a338](https://github.com/DanySK/Alchemist-experiments-startup/commit/920a338227325a047a8d5ab309e6f92390168e1a))

## 1.0.0 (2023-01-19)


### Bug Fixes

* **charting:** convert Java's 'Infinity' to a Python-friendly 1e30000 ([f432fae](https://github.com/DanySK/Alchemist-experiments-startup/commit/f432fae470f7bc6ade3c572d3e794acc620059c3))
* **deps:** update alchemist to v24.1.2 ([a39e289](https://github.com/DanySK/Alchemist-experiments-startup/commit/a39e28918a9bfdcf2bdbc5c95c4def2ca9baf7a7))


### General maintenance

* delete unused scripts folder ([d20f7c5](https://github.com/DanySK/Alchemist-experiments-startup/commit/d20f7c56a30bd5e6e8e8faa8b00542ce128b616e))
* delete unused version.properties ([068028c](https://github.com/DanySK/Alchemist-experiments-startup/commit/068028c2e3679ce47a100bdbc1750509e8da3a3a))


### Dependency updates

* **deps:** update alchemist to v18 ([7620fbd](https://github.com/DanySK/Alchemist-experiments-startup/commit/7620fbd05268f2b0bc8e678e017ab86b90c55389))
* **deps:** update alchemist to v19 ([8a6073f](https://github.com/DanySK/Alchemist-experiments-startup/commit/8a6073f51376617aaf2b5ff2547ec31125048e2e))
* **deps:** update alchemist to v19.0.1 ([34d2fbe](https://github.com/DanySK/Alchemist-experiments-startup/commit/34d2fbe1af969fe05204f1be5a4859764c8534d7))
* **deps:** update alchemist to v19.0.2 ([cefb051](https://github.com/DanySK/Alchemist-experiments-startup/commit/cefb0510c26df3ec20a63f5c368adcc5abc67876))
* **deps:** update alchemist to v19.0.3 ([88da774](https://github.com/DanySK/Alchemist-experiments-startup/commit/88da7743c4dc58ecb471a245ccf75d030b159ae2))
* **deps:** update alchemist to v19.0.4 ([e7a2544](https://github.com/DanySK/Alchemist-experiments-startup/commit/e7a2544dcf6459594ff64cae09dce511776f907e))
* **deps:** update alchemist to v19.1.0 ([5614547](https://github.com/DanySK/Alchemist-experiments-startup/commit/56145479ccd56fcec4f72e3852ae5edcaa8e7c13))
* **deps:** update alchemist to v19.1.1 ([9fa0a33](https://github.com/DanySK/Alchemist-experiments-startup/commit/9fa0a339b787a927e3c0fcd48e86a47fb690f578))
* **deps:** update alchemist to v19.2.0 ([8bf0669](https://github.com/DanySK/Alchemist-experiments-startup/commit/8bf0669c08db14e75072605faa09de4596e78168))
* **deps:** update alchemist to v20 ([aa28f14](https://github.com/DanySK/Alchemist-experiments-startup/commit/aa28f146f6320da547e8de526d498190ef3e2e51))
* **deps:** update alchemist to v20.0.1 ([4d2ee2c](https://github.com/DanySK/Alchemist-experiments-startup/commit/4d2ee2cc3e16c08edae585cfda0cef831b4b631d))
* **deps:** update alchemist to v21 ([f2e52c2](https://github.com/DanySK/Alchemist-experiments-startup/commit/f2e52c258b29acebc339189fbef720c64b09eaf7))
* **deps:** update alchemist to v21.0.1 ([a46aaae](https://github.com/DanySK/Alchemist-experiments-startup/commit/a46aaae1d7c6fbbcea1e547440c7a50c4c6cf71e))
* **deps:** update alchemist to v21.0.8 ([7ab2a39](https://github.com/DanySK/Alchemist-experiments-startup/commit/7ab2a397b1216267e3d3552cae91f9b6be8b1a8a))
* **deps:** update alchemist to v22 ([ed65e60](https://github.com/DanySK/Alchemist-experiments-startup/commit/ed65e607777043cc457b4508e6e62434e09b327d))
* **deps:** update alchemist to v23 ([2c10f27](https://github.com/DanySK/Alchemist-experiments-startup/commit/2c10f2730bbeb827344d16943f56ea1a83175e44))
* **deps:** update alchemist to v24 ([2114e88](https://github.com/DanySK/Alchemist-experiments-startup/commit/2114e886b9f6621ec9516a674fd27f15b6553a1a))
* **deps:** update alchemist to v24.0.3 ([85abe2e](https://github.com/DanySK/Alchemist-experiments-startup/commit/85abe2eb86ccdd205b14059f7a9b5044a2116c63))
* **deps:** update alchemist to v24.0.4 ([3ecee08](https://github.com/DanySK/Alchemist-experiments-startup/commit/3ecee08b71f5e12864de0b50a37d4152887a7dcf))
* **deps:** update alchemist to v24.0.5 ([6ba51e2](https://github.com/DanySK/Alchemist-experiments-startup/commit/6ba51e2b9045b3e58e92b2b022764f2f3f67884b))
* **deps:** update alchemist to v24.0.7 ([71c2035](https://github.com/DanySK/Alchemist-experiments-startup/commit/71c2035ad3d302ec225911de30defe42e41cfefa))
* **deps:** update alchemist to v24.0.8 ([2bdf0d2](https://github.com/DanySK/Alchemist-experiments-startup/commit/2bdf0d2637b61ac8c7948561ff65da17df75bfd3))
* **deps:** update alchemist to v24.1.0 ([ee1726b](https://github.com/DanySK/Alchemist-experiments-startup/commit/ee1726bfd66e8031ba0a23b0f957445c112c849b))
* **deps:** update alchemist to v24.1.1 ([5d7702e](https://github.com/DanySK/Alchemist-experiments-startup/commit/5d7702e6e2aa4bb445954407a5f8c2b37ddb039f))
* **deps:** update alchemist to v24.1.10 ([62b199d](https://github.com/DanySK/Alchemist-experiments-startup/commit/62b199da2af78bf2cb75bce8f1e6cc539ca17f15))
* **deps:** update alchemist to v24.1.11 ([96c5277](https://github.com/DanySK/Alchemist-experiments-startup/commit/96c5277a8b080ae5b8c887b9410eeb4771610095))
* **deps:** update alchemist to v24.1.12 ([ac4e62e](https://github.com/DanySK/Alchemist-experiments-startup/commit/ac4e62e1988bb220f63411834ef330f6699ca01b))
* **deps:** update alchemist to v24.1.13 ([f5c0199](https://github.com/DanySK/Alchemist-experiments-startup/commit/f5c0199016bf02ce482fcf20596256758fac0140))
* **deps:** update alchemist to v24.1.14 ([fc92d67](https://github.com/DanySK/Alchemist-experiments-startup/commit/fc92d6708f8bc8e628f044af59dace2fb6995d09))
* **deps:** update alchemist to v24.1.15 ([16c3926](https://github.com/DanySK/Alchemist-experiments-startup/commit/16c3926759d394155e16c1028f77108199268feb))
* **deps:** update alchemist to v24.1.16 ([a46b725](https://github.com/DanySK/Alchemist-experiments-startup/commit/a46b7259e90967517ae59b939b0e89ba5beecfb1))
* **deps:** update alchemist to v24.1.3 ([c568d69](https://github.com/DanySK/Alchemist-experiments-startup/commit/c568d694057cfe2ea910b8c8c4cf96e2a51aa3a7))
* **deps:** update alchemist to v24.1.4 ([b8e0ccd](https://github.com/DanySK/Alchemist-experiments-startup/commit/b8e0ccdb0b9fee66855aeb70cdc73e4cee4b2571))
* **deps:** update alchemist to v24.1.5 ([7878a29](https://github.com/DanySK/Alchemist-experiments-startup/commit/7878a299014d19b27616a63d14a81538a74d5a61))
* **deps:** update alchemist to v24.1.6 ([d8a385c](https://github.com/DanySK/Alchemist-experiments-startup/commit/d8a385cd5a214dd7439163999a338e2c96e84e65))
* **deps:** update alchemist to v24.1.7 ([37f4d79](https://github.com/DanySK/Alchemist-experiments-startup/commit/37f4d79a245970988e15fc6deda95102638e75fe))
* **deps:** update alchemist to v24.1.9 ([f7984a9](https://github.com/DanySK/Alchemist-experiments-startup/commit/f7984a960d3bbf5906d10474cffe4dac0657d673))
* **deps:** update alchemist to v25 ([7db2f48](https://github.com/DanySK/Alchemist-experiments-startup/commit/7db2f48b4f4842511221efeb9eeab977e49f8294))
* **deps:** update alchemist to v25.2.0 ([880b5b9](https://github.com/DanySK/Alchemist-experiments-startup/commit/880b5b9aac081194bddf469a27cf480a99898285))
* **deps:** update alchemist to v25.2.1 ([5b7309e](https://github.com/DanySK/Alchemist-experiments-startup/commit/5b7309e3beb4c4544d61597ef68df2748572f32a))
* **deps:** update alchemist to v25.3.0 ([2d6fab5](https://github.com/DanySK/Alchemist-experiments-startup/commit/2d6fab591f2f55f447650a9d49dae2e3a8f362f1))
* **deps:** update alchemist to v25.4.0 ([6ac914a](https://github.com/DanySK/Alchemist-experiments-startup/commit/6ac914a735e1ed0edb06f3e957ccba54dd99593b))
* **deps:** update alchemist to v25.4.1 ([0e9be1f](https://github.com/DanySK/Alchemist-experiments-startup/commit/0e9be1fbe96420e43f844d8c7ebab6a44ac488aa))
* **deps:** update alchemist to v25.4.2 ([fe0b221](https://github.com/DanySK/Alchemist-experiments-startup/commit/fe0b2211a9ded5b05baf3a7791731fa9c4a1cbf1))
* **deps:** update alchemist to v25.5.0 ([71da78f](https://github.com/DanySK/Alchemist-experiments-startup/commit/71da78fb38d07a46c2b72939507cebf4295e5ce9))
* **deps:** update alchemist to v25.6.0 ([7ec8059](https://github.com/DanySK/Alchemist-experiments-startup/commit/7ec805978ff925f3622007e26870c3b08f2fd603))
* **deps:** update alchemist to v25.7.0 ([6cdf812](https://github.com/DanySK/Alchemist-experiments-startup/commit/6cdf812d480927c85447f260a2809d5dc8c71703))
* **deps:** update dependency gradle to v7.3 ([f3627dd](https://github.com/DanySK/Alchemist-experiments-startup/commit/f3627ddb0809bfb9fc12e8e6de993ebaccdd704d))
* **deps:** update dependency gradle to v7.3.1 ([0fd0ada](https://github.com/DanySK/Alchemist-experiments-startup/commit/0fd0ada3dec2c76b4380448ea08b63488bf1c2ff))
* **deps:** update dependency gradle to v7.3.2 ([0858784](https://github.com/DanySK/Alchemist-experiments-startup/commit/0858784f9558fb8ad18524ed6712245bd0b10037))
* **deps:** update dependency gradle to v7.3.3 ([702a7ea](https://github.com/DanySK/Alchemist-experiments-startup/commit/702a7ea31643bb1c1e044dfb64f8e59ff6f64e1e))
* **deps:** update dependency gradle to v7.4 ([f7b2f02](https://github.com/DanySK/Alchemist-experiments-startup/commit/f7b2f02856ae0dd30b86df4920ef3bb90b866d32))
* **deps:** update dependency gradle to v7.4.1 ([77907fb](https://github.com/DanySK/Alchemist-experiments-startup/commit/77907fbc092c97e7144902c6edf70adf49f8287b))
* **deps:** update dependency gradle to v7.4.2 ([219e503](https://github.com/DanySK/Alchemist-experiments-startup/commit/219e50312aaee11b4c73f38d7bbd190e7ef6177c))
* **deps:** update dependency gradle to v7.5 ([e4f1202](https://github.com/DanySK/Alchemist-experiments-startup/commit/e4f1202216a80c263a810e22a0f815a795397826))
* **deps:** update dependency gradle to v7.5.1 ([75a2c8c](https://github.com/DanySK/Alchemist-experiments-startup/commit/75a2c8ca4ebde5e4115d3672d5a6ba502358ecda))
* **deps:** update dependency gradle to v7.6 ([cf5df22](https://github.com/DanySK/Alchemist-experiments-startup/commit/cf5df22f1501a3155e121d5e60ea97a25c791229))
* **deps:** update dependency it.unibo.alchemist:alchemist to v12.0.3 ([a2cfa21](https://github.com/DanySK/Alchemist-experiments-startup/commit/a2cfa2148b05bcebd1dc5d0fa39bada6a69dcc8b))
* **deps:** update dependency it.unibo.alchemist:alchemist to v13.0.3 ([7633167](https://github.com/DanySK/Alchemist-experiments-startup/commit/7633167bb89c1e9ebda2c6287c5774a261f39a40))
* **deps:** update dependency it.unibo.alchemist:alchemist to v13.0.6 ([f2f19e4](https://github.com/DanySK/Alchemist-experiments-startup/commit/f2f19e4cebbefabfcfb4440baf1adc47c7f65ad1))
* **deps:** update dependency it.unibo.alchemist:alchemist-incarnation-protelis to v12.0.4 ([fbd0a74](https://github.com/DanySK/Alchemist-experiments-startup/commit/fbd0a74a566dd47c981baf5df7bdb43b10f9a487))
* **deps:** update dependency it.unibo.alchemist:alchemist-incarnation-scafi to v12.1.7 ([f6e9704](https://github.com/DanySK/Alchemist-experiments-startup/commit/f6e9704bc27ef3b6de2a946cc031b35bdff4cf24))
* **deps:** update dependency it.unibo.alchemist:alchemist-incarnation-scafi to v13.0.4 ([7a36e21](https://github.com/DanySK/Alchemist-experiments-startup/commit/7a36e21c2968853b418d7cfa9132f897b99ba54a))
* **deps:** update dependency matplotlib to v3.5.0 ([6fedce4](https://github.com/DanySK/Alchemist-experiments-startup/commit/6fedce4e0a9b8f5d46897d53d4b4c92e3e3164af))
* **deps:** update dependency matplotlib to v3.5.1 ([005ec60](https://github.com/DanySK/Alchemist-experiments-startup/commit/005ec60a73d66ccb9f5521562294011e2ee811f6))
* **deps:** update dependency matplotlib to v3.5.2 ([b8fa622](https://github.com/DanySK/Alchemist-experiments-startup/commit/b8fa62294ca02f4cac35b9802018924715cad146))
* **deps:** update dependency matplotlib to v3.5.3 ([2937750](https://github.com/DanySK/Alchemist-experiments-startup/commit/293775015498cf425084d6019a967ae22712c1c5))
* **deps:** update dependency matplotlib to v3.6.0 ([8b261a2](https://github.com/DanySK/Alchemist-experiments-startup/commit/8b261a253460df5e0106fb8a84ca49f264781504))
* **deps:** update dependency matplotlib to v3.6.1 ([bb6219d](https://github.com/DanySK/Alchemist-experiments-startup/commit/bb6219d80b1303812da26d84cd7396728a6c3aae))
* **deps:** update dependency matplotlib to v3.6.2 ([2c3cb99](https://github.com/DanySK/Alchemist-experiments-startup/commit/2c3cb994f870559041935997030ece2cee4a3afa))
* **deps:** update dependency matplotlib to v3.6.3 ([8c446fd](https://github.com/DanySK/Alchemist-experiments-startup/commit/8c446fd048cd6a1a4258b78d270be14242e704dd))
* **deps:** update dependency openjdk to v18 ([43e2783](https://github.com/DanySK/Alchemist-experiments-startup/commit/43e278310b5797e8c6ee4fdeb54e1978e61524b4))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.7.0 ([79f1b47](https://github.com/DanySK/Alchemist-experiments-startup/commit/79f1b47ba31cda8db54ab11b0b0ef5c416d36c3e))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.7.10 ([e9e4155](https://github.com/DanySK/Alchemist-experiments-startup/commit/e9e4155eb1fcad2557a746381d9015a451ff9530))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.7.20 ([5437b3e](https://github.com/DanySK/Alchemist-experiments-startup/commit/5437b3e30d0ceb34ff9b437aa0a2d64d671d68ea))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.7.21 ([7c64e39](https://github.com/DanySK/Alchemist-experiments-startup/commit/7c64e395255d21a5c5902263f0a34beefe957404))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.7.22 ([bbeeb01](https://github.com/DanySK/Alchemist-experiments-startup/commit/bbeeb0138c169147f8818d76fb9c41e05254ff33))
* **deps:** update dependency org.jetbrains.kotlin.jvm to v1.8.0 ([95a34dd](https://github.com/DanySK/Alchemist-experiments-startup/commit/95a34dd8180aa2a689cc4256a9f2628014370ba2))
* **deps:** update dependency python to v3.10.4 ([f4d6713](https://github.com/DanySK/Alchemist-experiments-startup/commit/f4d67134b9d1f38869d8d4d6430217188739c223))
* **deps:** update dependency xarray to v0.20.2 ([17f722d](https://github.com/DanySK/Alchemist-experiments-startup/commit/17f722df695d8912f6432e0767b7fe73a790890b))
* **deps:** update dependency xarray to v0.21.0 ([255c118](https://github.com/DanySK/Alchemist-experiments-startup/commit/255c118b8d1cec68c36899ea5d7b81d585384274))
* **deps:** update dependency xarray to v0.21.1 ([62f342d](https://github.com/DanySK/Alchemist-experiments-startup/commit/62f342d5ad872c2783f9ca1357a925ec668acf2a))
* **deps:** update dependency xarray to v2022 ([29e742b](https://github.com/DanySK/Alchemist-experiments-startup/commit/29e742b0a246048c584a130bab2b81ece70c448a))
* **deps:** update dependency xarray to v2022.10.0 ([bc3ef08](https://github.com/DanySK/Alchemist-experiments-startup/commit/bc3ef08bf8895dffd04f4b1ae8eda8f9546fdf13))
* **deps:** update dependency xarray to v2022.11.0 ([45c4b38](https://github.com/DanySK/Alchemist-experiments-startup/commit/45c4b389d46f5f0904aacef519972fa7cf94cd9e))
* **deps:** update dependency xarray to v2022.12.0 ([e032eab](https://github.com/DanySK/Alchemist-experiments-startup/commit/e032eabae1ea7d6b516ee9fedd34c3b4372cb825))
* **deps:** update dependency xarray to v2022.6.0 ([7d278b6](https://github.com/DanySK/Alchemist-experiments-startup/commit/7d278b6a3cff33f1262797ebc1df03b8eedf0386))
* **deps:** update dependency xarray to v2022.9.0 ([f81445d](https://github.com/DanySK/Alchemist-experiments-startup/commit/f81445d91b3136c9c68bdb8981e6d17b2b824907))
* **deps:** update it.unibo.alchemist ([ec982b1](https://github.com/DanySK/Alchemist-experiments-startup/commit/ec982b13114dbfde7ac8f50b99b0d9c42637dff3))
* **deps:** update it.unibo.alchemist to v12 ([b23827c](https://github.com/DanySK/Alchemist-experiments-startup/commit/b23827c2e3352c31e05e837477112f57939b022a))
* **deps:** update it.unibo.alchemist to v12.1.2 ([d3552b0](https://github.com/DanySK/Alchemist-experiments-startup/commit/d3552b02a26fcf3a60675ff1280ee553e6450b15))
* **deps:** update it.unibo.alchemist to v12.1.3 ([6adf430](https://github.com/DanySK/Alchemist-experiments-startup/commit/6adf43017abb5df131e35ff6ceb029ec65f74951))
* **deps:** update it.unibo.alchemist to v12.1.4 ([f9b8a53](https://github.com/DanySK/Alchemist-experiments-startup/commit/f9b8a538458c374bd858d324f7ca264f40ccfd3b))
* **deps:** update it.unibo.alchemist to v12.1.5 ([5e1b2ab](https://github.com/DanySK/Alchemist-experiments-startup/commit/5e1b2ab5a1c3b3abccaf33674097302ec60a0e0f))
* **deps:** update it.unibo.alchemist to v12.1.6 ([5bc3492](https://github.com/DanySK/Alchemist-experiments-startup/commit/5bc34926e79881e0de8b21df6fde415d27d438bb))
* **deps:** update it.unibo.alchemist to v12.2.0 ([841b7f5](https://github.com/DanySK/Alchemist-experiments-startup/commit/841b7f594061c3fc177c25c2e6743080efb599c8))
* **deps:** update it.unibo.alchemist to v12.2.1 ([58a2e7f](https://github.com/DanySK/Alchemist-experiments-startup/commit/58a2e7f3640fa5b566041cd79bd39b7d01e17cde))
* **deps:** update it.unibo.alchemist to v12.2.10 ([81d9e84](https://github.com/DanySK/Alchemist-experiments-startup/commit/81d9e84f84e4a8e3f334ad499346aaa02cc2f159))
* **deps:** update it.unibo.alchemist to v12.2.11 ([2c8228d](https://github.com/DanySK/Alchemist-experiments-startup/commit/2c8228d25518357ed27648ee71c59c979900223f))
* **deps:** update it.unibo.alchemist to v12.2.7 ([9b6fedc](https://github.com/DanySK/Alchemist-experiments-startup/commit/9b6fedc7e498d0c691d25ee31df57281f72eaeb2))
* **deps:** update it.unibo.alchemist to v12.2.8 ([c2011eb](https://github.com/DanySK/Alchemist-experiments-startup/commit/c2011eb89c391480ec5f9c54a7c6c24a5347e425))
* **deps:** update it.unibo.alchemist to v12.2.9 ([523b91e](https://github.com/DanySK/Alchemist-experiments-startup/commit/523b91ebe35055987a5e5d5546988a43c8de9d55))
* **deps:** update it.unibo.alchemist to v13 ([d378116](https://github.com/DanySK/Alchemist-experiments-startup/commit/d378116296ef7fcb4996fb5e58bfb96326333b73))
* **deps:** update it.unibo.alchemist to v13.0.1 ([9140444](https://github.com/DanySK/Alchemist-experiments-startup/commit/9140444a7be9f0fe6afb8e75b6a03ee0969e211d))
* **deps:** update it.unibo.alchemist to v13.0.2 ([53d19c6](https://github.com/DanySK/Alchemist-experiments-startup/commit/53d19c64ccbc16cf48a8518e1991b647dae4bc7b))
* **deps:** update it.unibo.alchemist to v13.0.5 ([612f656](https://github.com/DanySK/Alchemist-experiments-startup/commit/612f656d0a2f3c30b8e6b5ab414fda28df03995c))
* **deps:** update it.unibo.alchemist to v14 ([b0e5e2d](https://github.com/DanySK/Alchemist-experiments-startup/commit/b0e5e2d69687337203a045d6085203e98ba80cf3))
* **deps:** update it.unibo.alchemist to v14.0.1 ([7ddb5bc](https://github.com/DanySK/Alchemist-experiments-startup/commit/7ddb5bc2f9da615572bcbc8f5e98d59b482241b3))
* **deps:** update it.unibo.alchemist to v14.0.2 ([2514a57](https://github.com/DanySK/Alchemist-experiments-startup/commit/2514a5717385b7a125808053c270568a362496d0))
* **deps:** update it.unibo.alchemist to v14.1.0 ([26f2cf2](https://github.com/DanySK/Alchemist-experiments-startup/commit/26f2cf2f8870cd06deb059d6d361bf2b19dd1ef8))
* **deps:** update it.unibo.alchemist to v15 ([19668e9](https://github.com/DanySK/Alchemist-experiments-startup/commit/19668e96caab03bff6028033157fda5912454b30))
* **deps:** update it.unibo.alchemist to v15.0.2 ([fee8256](https://github.com/DanySK/Alchemist-experiments-startup/commit/fee825694d769f5a6abe611309f3d0eb9643c276))
* **deps:** update it.unibo.alchemist to v15.0.3 ([17fe54c](https://github.com/DanySK/Alchemist-experiments-startup/commit/17fe54cf33fa96e25060ba084ffda3c93e636793))
* **deps:** update it.unibo.alchemist to v15.0.4 ([7ac83ed](https://github.com/DanySK/Alchemist-experiments-startup/commit/7ac83ed6db6ce22537f78258a6a2f9cc9508c6d9))
* **deps:** update it.unibo.alchemist to v16 ([e89b90e](https://github.com/DanySK/Alchemist-experiments-startup/commit/e89b90e664d809bace7a295b1f4691ea0fdba630))
* **deps:** update it.unibo.alchemist to v17 ([2174d33](https://github.com/DanySK/Alchemist-experiments-startup/commit/2174d3313a78092d368864631b7edd779d02a0b3))
* **deps:** update it.unibo.alchemist to v17.0.1 ([92b76f0](https://github.com/DanySK/Alchemist-experiments-startup/commit/92b76f07582c7db224ab4674113c673a9f06f5d5))
* **deps:** update it.unibo.alchemist to v17.0.2 ([e9ed64d](https://github.com/DanySK/Alchemist-experiments-startup/commit/e9ed64d1e6b01d438db1d4c8d7754c04d7e1ca94))
* **deps:** update it.unibo.alchemist to v17.0.4 ([00b0890](https://github.com/DanySK/Alchemist-experiments-startup/commit/00b0890e14d1ba4fd43f9ecd0d4a05e32db9bde4))
* **deps:** update plugin com.gradle.enterprise to v3.10 ([ec84f24](https://github.com/DanySK/Alchemist-experiments-startup/commit/ec84f24b85438a672a8c15ed36e1fa06410ff14c))
* **deps:** update plugin com.gradle.enterprise to v3.10.1 ([dc0eb15](https://github.com/DanySK/Alchemist-experiments-startup/commit/dc0eb156b0f9e7eacd898627b17ef22442efb539))
* **deps:** update plugin com.gradle.enterprise to v3.10.2 ([540fb9e](https://github.com/DanySK/Alchemist-experiments-startup/commit/540fb9e22d52d7edf0228e1730b2d4c0d37836df))
* **deps:** update plugin com.gradle.enterprise to v3.10.3 ([93639c8](https://github.com/DanySK/Alchemist-experiments-startup/commit/93639c854cd8917efe5fca7ae8320ec064c062f1))
* **deps:** update plugin com.gradle.enterprise to v3.11 ([39303c0](https://github.com/DanySK/Alchemist-experiments-startup/commit/39303c0da12622934bc8e47ea56acc616cc764da))
* **deps:** update plugin com.gradle.enterprise to v3.11.1 ([377af6a](https://github.com/DanySK/Alchemist-experiments-startup/commit/377af6a419a3a5638b59a11824c8304364b567de))
* **deps:** update plugin com.gradle.enterprise to v3.7.2 ([9d81f38](https://github.com/DanySK/Alchemist-experiments-startup/commit/9d81f388168eaa5b1d837bccc41390d9c35af922))
* **deps:** update plugin com.gradle.enterprise to v3.8 ([c8e51a1](https://github.com/DanySK/Alchemist-experiments-startup/commit/c8e51a17c19f398df874e5bf56b63d45af0cedc0))
* **deps:** update plugin com.gradle.enterprise to v3.8.1 ([36c0696](https://github.com/DanySK/Alchemist-experiments-startup/commit/36c0696ba4bf633bb3b4eef8531795f7566c42fe))
* **deps:** update plugin com.gradle.enterprise to v3.9 ([d5709bd](https://github.com/DanySK/Alchemist-experiments-startup/commit/d5709bdd5bd23eac4ca586930d951a21f03e1f06))
* **deps:** update plugin kotlin-jvm to v1.6.0 ([f8e974e](https://github.com/DanySK/Alchemist-experiments-startup/commit/f8e974e861aef31157c3581c7fc8b59d55da3f36))
* **deps:** update plugin kotlin-jvm to v1.6.10 ([bcaf3d2](https://github.com/DanySK/Alchemist-experiments-startup/commit/bcaf3d2487aaeeb2df9e5fcd3b3f259218d2f27d))
* **deps:** update plugin kotlin-jvm to v1.6.20 ([62c8e30](https://github.com/DanySK/Alchemist-experiments-startup/commit/62c8e309d221950b6c550a5c8377e5c5db0d3bfc))
* **deps:** update plugin kotlin-jvm to v1.6.21 ([db462dc](https://github.com/DanySK/Alchemist-experiments-startup/commit/db462dcf7610cdec80014d73b19d8e6610847768))
* **deps:** update plugin kotlin-qa to v0.10.0 ([de04a9e](https://github.com/DanySK/Alchemist-experiments-startup/commit/de04a9e3e83b07eb6a6ffcc4b24abda90233f2b7))
* **deps:** update plugin kotlin-qa to v0.10.1 ([672035b](https://github.com/DanySK/Alchemist-experiments-startup/commit/672035b121e00ded00dcb72e8b6558d860269d89))
* **deps:** update plugin kotlin-qa to v0.12.0 ([555a314](https://github.com/DanySK/Alchemist-experiments-startup/commit/555a3144327f7b0171a349489afd72a7b3ca2d58))
* **deps:** update plugin kotlin-qa to v0.12.1 ([3a24bfe](https://github.com/DanySK/Alchemist-experiments-startup/commit/3a24bfe93330f90441f4fa72f5ea683001a717c3))
* **deps:** update plugin kotlin-qa to v0.13.0 ([1b700a7](https://github.com/DanySK/Alchemist-experiments-startup/commit/1b700a78ea6495bf6f3a692a84ee0685de02853f))
* **deps:** update plugin kotlin-qa to v0.14.0 ([a1102a3](https://github.com/DanySK/Alchemist-experiments-startup/commit/a1102a32e1f5d8b1b95fc2dedbea34e4408c1633))
* **deps:** update plugin kotlin-qa to v0.14.1 ([ebd110e](https://github.com/DanySK/Alchemist-experiments-startup/commit/ebd110e2b8cf59e7d447e8d0fba08ddf83a0a23c))
* **deps:** update plugin kotlin-qa to v0.14.2 ([b7a65a7](https://github.com/DanySK/Alchemist-experiments-startup/commit/b7a65a781351ded97da5368860e6511a8c990dff))
* **deps:** update plugin kotlin-qa to v0.15.0 ([cfe3149](https://github.com/DanySK/Alchemist-experiments-startup/commit/cfe31497e4371435638cdd09c4149e6480efacf7))
* **deps:** update plugin kotlin-qa to v0.15.1 ([ede2be3](https://github.com/DanySK/Alchemist-experiments-startup/commit/ede2be36f8f56f5928dd50175467ef2363592760))
* **deps:** update plugin kotlin-qa to v0.16.0 ([588dd5f](https://github.com/DanySK/Alchemist-experiments-startup/commit/588dd5fc0247989a0fa677eece61751ca72f9890))
* **deps:** update plugin kotlin-qa to v0.16.1 ([91ba758](https://github.com/DanySK/Alchemist-experiments-startup/commit/91ba7587e6b1895092e28258a660222e79d1c185))
* **deps:** update plugin kotlin-qa to v0.18.0 ([2db181e](https://github.com/DanySK/Alchemist-experiments-startup/commit/2db181ef56fa17d9016f0f8e7d6c07adebdca705))
* **deps:** update plugin kotlin-qa to v0.19.0 ([404a320](https://github.com/DanySK/Alchemist-experiments-startup/commit/404a32037ce4155419ea20cbc3e7749a35245508))
* **deps:** update plugin kotlin-qa to v0.19.1 ([accc86a](https://github.com/DanySK/Alchemist-experiments-startup/commit/accc86ae1aef39c8136db17aaa7609796c956c3a))
* **deps:** update plugin kotlin-qa to v0.20.3 ([20b6c3a](https://github.com/DanySK/Alchemist-experiments-startup/commit/20b6c3a70ba545d93e8ca1c20f23dec9d27e0060))
* **deps:** update plugin kotlin-qa to v0.20.4 ([7c80ac8](https://github.com/DanySK/Alchemist-experiments-startup/commit/7c80ac8a889a8eda61cb94dcd57875ed01e574a0))
* **deps:** update plugin kotlin-qa to v0.21.0 ([32ee127](https://github.com/DanySK/Alchemist-experiments-startup/commit/32ee127ffaae2c1795d7ebc83c3ad468529fad92))
* **deps:** update plugin kotlin-qa to v0.22.0 ([58b0895](https://github.com/DanySK/Alchemist-experiments-startup/commit/58b0895e6dd89f2c5be46b6f048bf43fc4a2c65d))
* **deps:** update plugin kotlin-qa to v0.22.1 ([80b81ae](https://github.com/DanySK/Alchemist-experiments-startup/commit/80b81ae42952d9b3fa9468ff02049c027c41e5ff))
* **deps:** update plugin kotlin-qa to v0.22.2 ([4eb7ca9](https://github.com/DanySK/Alchemist-experiments-startup/commit/4eb7ca953c1029cf8bbda6bc339307c9eea5ebe7))
* **deps:** update plugin kotlin-qa to v0.23.0 ([d8ad7ad](https://github.com/DanySK/Alchemist-experiments-startup/commit/d8ad7ad8b6b7734ceaafd5983c04de2ad0d1386d))
* **deps:** update plugin kotlin-qa to v0.23.1 ([a8d508a](https://github.com/DanySK/Alchemist-experiments-startup/commit/a8d508aff0cd04ec94d80f75b5916fc50fbe03bd))
* **deps:** update plugin kotlin-qa to v0.23.2 ([02d79e9](https://github.com/DanySK/Alchemist-experiments-startup/commit/02d79e986fb15aef33df920e6b517d6958f0da78))
* **deps:** update plugin kotlin-qa to v0.24.0 ([4e83b40](https://github.com/DanySK/Alchemist-experiments-startup/commit/4e83b40b12f49c366fc18a9301305498cf6caded))
* **deps:** update plugin kotlin-qa to v0.25.0 ([790e4a4](https://github.com/DanySK/Alchemist-experiments-startup/commit/790e4a4e32453fdb27aad7340d3b24b7028c5d5a))
* **deps:** update plugin kotlin-qa to v0.25.1 ([6fcd004](https://github.com/DanySK/Alchemist-experiments-startup/commit/6fcd004a27e8fa62cbd675694420987906c3b646))
* **deps:** update plugin kotlin-qa to v0.26.0 ([3f7147d](https://github.com/DanySK/Alchemist-experiments-startup/commit/3f7147dcc3845fc797bd1cce1d7fcccc59ed059c))
* **deps:** update plugin kotlin-qa to v0.26.1 ([6f3fb07](https://github.com/DanySK/Alchemist-experiments-startup/commit/6f3fb075a037bb201c85386c9aba8604207585fb))
* **deps:** update plugin kotlin-qa to v0.27.0 ([07ce777](https://github.com/DanySK/Alchemist-experiments-startup/commit/07ce77747b4c1b73a19afafc2130481ba0825976))
* **deps:** update plugin kotlin-qa to v0.27.1 ([4eba7e3](https://github.com/DanySK/Alchemist-experiments-startup/commit/4eba7e3277d0d93b96f9bb748a862ade29250781))
* **deps:** update plugin kotlin-qa to v0.28.0 ([52b6e27](https://github.com/DanySK/Alchemist-experiments-startup/commit/52b6e274164ac5f9723a146db4771667bcba2510))
* **deps:** update plugin kotlin-qa to v0.29.0 ([51f7ca3](https://github.com/DanySK/Alchemist-experiments-startup/commit/51f7ca385bc53abda5eb436d2a06a67635d97328))
* **deps:** update plugin kotlin-qa to v0.29.1 ([0f8edc6](https://github.com/DanySK/Alchemist-experiments-startup/commit/0f8edc62ab6664368f6992f6f0547ec3cdcc59cf))
* **deps:** update plugin kotlin-qa to v0.29.2 ([05bbfd7](https://github.com/DanySK/Alchemist-experiments-startup/commit/05bbfd7e4399dc12d3f76157927370e50ca8c93b))
* **deps:** update plugin kotlin-qa to v0.31.0 ([8cf8127](https://github.com/DanySK/Alchemist-experiments-startup/commit/8cf8127ec08544f7832921583f0f92103c694178))
* **deps:** update plugin kotlin-qa to v0.6.0 ([6be1e1e](https://github.com/DanySK/Alchemist-experiments-startup/commit/6be1e1e14e2616e31f752bed2c2bf69cfbc893b3))
* **deps:** update plugin kotlin-qa to v0.7.0 ([5ca5d1d](https://github.com/DanySK/Alchemist-experiments-startup/commit/5ca5d1d91c3e42631b2af5b0be33d9004ea03f8f))
* **deps:** update plugin kotlin-qa to v0.7.1 ([9319000](https://github.com/DanySK/Alchemist-experiments-startup/commit/9319000ac69b75c5e259216b7b5f57096f679512))
* **deps:** update plugin kotlin-qa to v0.8.0 ([b9c4870](https://github.com/DanySK/Alchemist-experiments-startup/commit/b9c4870dbc440b10c25bc0020fc979559c85ebb0))
* **deps:** update plugin kotlin-qa to v0.8.1 ([b81c36f](https://github.com/DanySK/Alchemist-experiments-startup/commit/b81c36f0f790f377babf8047dfab29d3fbd000df))
* **deps:** update plugin kotlin-qa to v0.8.2 ([e5f44f3](https://github.com/DanySK/Alchemist-experiments-startup/commit/e5f44f314560d0f8c9e3b674fc562260f764ca69))
* **deps:** update plugin kotlin-qa to v0.8.3 ([894f1f9](https://github.com/DanySK/Alchemist-experiments-startup/commit/894f1f97766f28c3913e8564070ea78488767e77))
* **deps:** update plugin kotlin-qa to v0.9.0 ([684ca18](https://github.com/DanySK/Alchemist-experiments-startup/commit/684ca18945fd2071c1e1bb1ef021e64d7f5c7a7e))
* **deps:** update plugin multijvmtesting to v0.2.0 ([42dee20](https://github.com/DanySK/Alchemist-experiments-startup/commit/42dee200a3100e1b7876daec1ed9cce6a910dbff))
* **deps:** update plugin multijvmtesting to v0.2.1 ([45964c5](https://github.com/DanySK/Alchemist-experiments-startup/commit/45964c568352c7f7425cc5a4e6ffc9f2513eda4e))
* **deps:** update plugin multijvmtesting to v0.2.2 ([e13d083](https://github.com/DanySK/Alchemist-experiments-startup/commit/e13d0838a202bf2732510b856b753983fcd6c441))
* **deps:** update plugin multijvmtesting to v0.3.0 ([74c8c3b](https://github.com/DanySK/Alchemist-experiments-startup/commit/74c8c3b7ae67e6ad33138d99ed7c194a72680334))
* **deps:** update plugin multijvmtesting to v0.3.1 ([ba70006](https://github.com/DanySK/Alchemist-experiments-startup/commit/ba70006cc17ae665725f72fe83b87a97ba1fadb3))
* **deps:** update plugin multijvmtesting to v0.3.2 ([d34d6ca](https://github.com/DanySK/Alchemist-experiments-startup/commit/d34d6ca93e56b25b729765a7b4195fa5b15e1e5a))
* **deps:** update plugin multijvmtesting to v0.3.3 ([847eee9](https://github.com/DanySK/Alchemist-experiments-startup/commit/847eee948f9c2dcfbaa224242ddc6fecbe16d7e0))
* **deps:** update plugin multijvmtesting to v0.3.4 ([6696eb9](https://github.com/DanySK/Alchemist-experiments-startup/commit/6696eb936cee87d3930cbd0dc1968156ee115148))
* **deps:** update plugin multijvmtesting to v0.3.5 ([9231d50](https://github.com/DanySK/Alchemist-experiments-startup/commit/9231d508b35b999c1bbee84b201fbb5f3a550c87))
* **deps:** update plugin multijvmtesting to v0.3.6 ([6f148e1](https://github.com/DanySK/Alchemist-experiments-startup/commit/6f148e10ffc0aa662d7bc089ea6cbd6f262ea07b))
* **deps:** update plugin multijvmtesting to v0.3.7 ([edfe125](https://github.com/DanySK/Alchemist-experiments-startup/commit/edfe1251670a8e5ae97fb21f0b6754c44fb7f2fe))
* **deps:** update plugin multijvmtesting to v0.4.0 ([019b8d6](https://github.com/DanySK/Alchemist-experiments-startup/commit/019b8d601893ff635a670e02c72db458ed4bf79e))
* **deps:** update plugin multijvmtesting to v0.4.10 ([5532ae5](https://github.com/DanySK/Alchemist-experiments-startup/commit/5532ae5ed538f7b109624f52a33bb91b4d59c2bb))
* **deps:** update plugin multijvmtesting to v0.4.11 ([5f9b2bd](https://github.com/DanySK/Alchemist-experiments-startup/commit/5f9b2bdb8b4e09a2b3452e4945fe4bc01feecfdb))
* **deps:** update plugin multijvmtesting to v0.4.12 ([2d85f9a](https://github.com/DanySK/Alchemist-experiments-startup/commit/2d85f9ad7033cb8304b30dca8f63bd3c5404ba2a))
* **deps:** update plugin multijvmtesting to v0.4.13 ([c02123a](https://github.com/DanySK/Alchemist-experiments-startup/commit/c02123ab6266c91491edf5f940096a2e01f7f750))
* **deps:** update plugin multijvmtesting to v0.4.14 ([2528431](https://github.com/DanySK/Alchemist-experiments-startup/commit/252843130a6685532fa6d2b9473d2c417f8d7a98))
* **deps:** update plugin multijvmtesting to v0.4.15 ([96fb9b5](https://github.com/DanySK/Alchemist-experiments-startup/commit/96fb9b53f689e129968c6fa79cfb189202d444ed))
* **deps:** update plugin multijvmtesting to v0.4.2 ([ba3a73a](https://github.com/DanySK/Alchemist-experiments-startup/commit/ba3a73a90b1ccdd86504c1e04c895c72d5c0ba3e))
* **deps:** update plugin multijvmtesting to v0.4.3 ([ef7d9b8](https://github.com/DanySK/Alchemist-experiments-startup/commit/ef7d9b85cb5cb10c50552f3c08249a2d8f887b47))
* **deps:** update plugin multijvmtesting to v0.4.4 ([9a84920](https://github.com/DanySK/Alchemist-experiments-startup/commit/9a849209036728d7e590cd3828f6d77bcc185879))
* **deps:** update plugin multijvmtesting to v0.4.5 ([3e8720b](https://github.com/DanySK/Alchemist-experiments-startup/commit/3e8720b6654bf692ce347d49c052a1448dd4c89a))
* **deps:** update plugin multijvmtesting to v0.4.6 ([168f727](https://github.com/DanySK/Alchemist-experiments-startup/commit/168f7272229926cb00cf369bea890135ad040f4b))
* **deps:** update plugin multijvmtesting to v0.4.7 ([0935925](https://github.com/DanySK/Alchemist-experiments-startup/commit/0935925bf1bb9577823753e87d6e4785641d9d6e))
* **deps:** update plugin multijvmtesting to v0.4.8 ([62c0918](https://github.com/DanySK/Alchemist-experiments-startup/commit/62c0918a4790a214eba1491acfa5b602777e0a12))
* **deps:** update plugin multijvmtesting to v0.4.9 ([14648ea](https://github.com/DanySK/Alchemist-experiments-startup/commit/14648eaf59eac187d7f8e91e850cd5a848e9a541))


### Build and continuous integration

* add missing checkout ([717cb24](https://github.com/DanySK/Alchemist-experiments-startup/commit/717cb240fc603f78e162bf8da310f47ba6714658))
* add pipeline summary job ([d7ed0ed](https://github.com/DanySK/Alchemist-experiments-startup/commit/d7ed0ed194ed307d6032a25136dcd67dd1d8088a))
* add the mergify config from Alchemist ([dc1905a](https://github.com/DanySK/Alchemist-experiments-startup/commit/dc1905a5ff8eb3d8f32bbb91699ef038312d9ff5))
* allow release updates in case of re-runs ([eb85b63](https://github.com/DanySK/Alchemist-experiments-startup/commit/eb85b633407d9cd28deb268ff28c405ae451e3b0))
* create .python-version ([34a9263](https://github.com/DanySK/Alchemist-experiments-startup/commit/34a926301656bcc9543e1353f9d4772608dacec0))
* **deps:** update actions/cache action to v3 ([9413833](https://github.com/DanySK/Alchemist-experiments-startup/commit/94138335d5a21ba48eeae9feac2d1f9e4372f3d9))
* **deps:** update actions/checkout action to v3.0.2 ([249cb0b](https://github.com/DanySK/Alchemist-experiments-startup/commit/249cb0bfea74e44d857f169ab6dac00c64534b62))
* **deps:** update actions/checkout action to v3.1.0 ([c7de7d2](https://github.com/DanySK/Alchemist-experiments-startup/commit/c7de7d2c691d9c3378407a3c2ceb556cd8b2dc45))
* **deps:** update actions/checkout action to v3.2.0 ([80f5c95](https://github.com/DanySK/Alchemist-experiments-startup/commit/80f5c952f28806839dd85a840cee187ff11fa1fd))
* **deps:** update actions/checkout action to v3.3.0 ([a2711e6](https://github.com/DanySK/Alchemist-experiments-startup/commit/a2711e6aa739a60aab291bb3d34eaa7e7237ae7b))
* **deps:** update actions/setup-python action to v3 ([a1bafd2](https://github.com/DanySK/Alchemist-experiments-startup/commit/a1bafd298800ff2977c3994ce1a39e10d38f3edc))
* **deps:** update danysk/action-checkout action to v0.2.1 ([9851f1a](https://github.com/DanySK/Alchemist-experiments-startup/commit/9851f1a9cef812c2c55d912668b5b1b1b23bc82d))
* **deps:** update danysk/action-checkout action to v0.2.2 ([212e6b3](https://github.com/DanySK/Alchemist-experiments-startup/commit/212e6b3889991b2b0dc556991c7fd6757f3d7e42))
* **deps:** update danysk/action-checkout action to v0.2.3 ([b1435e3](https://github.com/DanySK/Alchemist-experiments-startup/commit/b1435e32fb297f042a054f2e7989ee9fc878958f))
* **deps:** update danysk/action-checkout action to v0.2.4 ([c072c7d](https://github.com/DanySK/Alchemist-experiments-startup/commit/c072c7d5fb3fdceb2b47173d2b125ab285cb6601))
* **deps:** update danysk/action-checkout action to v0.2.5 ([66265ec](https://github.com/DanySK/Alchemist-experiments-startup/commit/66265ece7c2341a63941ca7f84bc9c38ac10bf56))
* **deps:** update danysk/build-check-deploy-gradle-action action to v1.2.15 ([4b12b50](https://github.com/DanySK/Alchemist-experiments-startup/commit/4b12b50ea93ad5444a3da8a1ebf34a683567a5c3))
* **deps:** update danysk/build-check-deploy-gradle-action action to v1.2.16 ([8c8ae77](https://github.com/DanySK/Alchemist-experiments-startup/commit/8c8ae773659b080bcb106b2647b8530d3dab3314))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2 ([c8db7aa](https://github.com/DanySK/Alchemist-experiments-startup/commit/c8db7aa052f5825a9d9c59de258d5ecd6a3c8f8a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.0.1 ([d34c473](https://github.com/DanySK/Alchemist-experiments-startup/commit/d34c473463ef2664e29a7aa26032c12925e136f6))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.0.2 ([8c89e08](https://github.com/DanySK/Alchemist-experiments-startup/commit/8c89e08c1cab3daad604b678dbf7dd0c9da73a75))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.0.3 ([003595d](https://github.com/DanySK/Alchemist-experiments-startup/commit/003595d73f8dd0df24b0e36b1db93f738dc77c7c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.0 ([4d83e97](https://github.com/DanySK/Alchemist-experiments-startup/commit/4d83e97f4da4670d3c3bcb905f882e806c1d814b))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.1 ([ebb39c1](https://github.com/DanySK/Alchemist-experiments-startup/commit/ebb39c1a23c56791de8ab16e3dac378497d659cd))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.10 ([f8eeb58](https://github.com/DanySK/Alchemist-experiments-startup/commit/f8eeb58179dda2cc76da3f8009fbe0a1e18a4a2e))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.11 ([1891808](https://github.com/DanySK/Alchemist-experiments-startup/commit/1891808d79c80965e79261692a0c702b34bfb970))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.12 ([60abb21](https://github.com/DanySK/Alchemist-experiments-startup/commit/60abb21d188e57f5a06cfc97ce0372f8443c2b48))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.13 ([26c174a](https://github.com/DanySK/Alchemist-experiments-startup/commit/26c174a3d7eb64f458eb8cbcf4e2ad1985e5b574))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.14 ([bb7ec31](https://github.com/DanySK/Alchemist-experiments-startup/commit/bb7ec31c6331611c697a5ac7e4d8129f65d67a5e))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.15 ([cd750a1](https://github.com/DanySK/Alchemist-experiments-startup/commit/cd750a116f08000dca16cbc3be56a03ade987a58))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.16 ([ce873e6](https://github.com/DanySK/Alchemist-experiments-startup/commit/ce873e61160ab150d7a91b24d66b65aafd9bd319))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.17 ([06227b0](https://github.com/DanySK/Alchemist-experiments-startup/commit/06227b0356812ca8cc10cf11aec48674e3975fa4))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.18 ([1c62c01](https://github.com/DanySK/Alchemist-experiments-startup/commit/1c62c01eee12cb3e9cbae41fa89c58fdf7fff98d))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.19 ([4bde933](https://github.com/DanySK/Alchemist-experiments-startup/commit/4bde933dd11e6af7fc28c71dade92db33e4abf5a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.2 ([732c44f](https://github.com/DanySK/Alchemist-experiments-startup/commit/732c44f9d3779168a7df2884e5418ce144b84751))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.20 ([4556faa](https://github.com/DanySK/Alchemist-experiments-startup/commit/4556faab5b5e49f412de9c801fab3caa65145508))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.21 ([a201334](https://github.com/DanySK/Alchemist-experiments-startup/commit/a2013343d7942371add70856fc92d0a34c489ea1))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.3 ([ce5b522](https://github.com/DanySK/Alchemist-experiments-startup/commit/ce5b522750372a56c6e4f982582415c89c1d2afb))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.4 ([b2080f1](https://github.com/DanySK/Alchemist-experiments-startup/commit/b2080f176adec0d4d7e79ff045101ef15e283f33))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.5 ([3d31154](https://github.com/DanySK/Alchemist-experiments-startup/commit/3d311544a477889589ebe5330688189ca8069036))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.6 ([93d0390](https://github.com/DanySK/Alchemist-experiments-startup/commit/93d0390a85af99f841a917e808b3cc58bd3e7e7b))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.7 ([9a4496f](https://github.com/DanySK/Alchemist-experiments-startup/commit/9a4496ff104fd5d5e8b00e591726c5f17a047975))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.8 ([f14fe7d](https://github.com/DanySK/Alchemist-experiments-startup/commit/f14fe7dcdc6b6d6b8436f48c59bfec41c9759287))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.9 ([ff2ba6e](https://github.com/DanySK/Alchemist-experiments-startup/commit/ff2ba6ee3a284b65848faf6945daa32b43ded171))
* **deps:** update gabrielfalcao/pyenv-action action to v10 ([5d87ce8](https://github.com/DanySK/Alchemist-experiments-startup/commit/5d87ce8486e0245db464a4f6069827d7134abd1f))
* **deps:** update gabrielfalcao/pyenv-action action to v11 ([97a8ae6](https://github.com/DanySK/Alchemist-experiments-startup/commit/97a8ae6669f7bc7223cc30b882a8e94ea73ef3c7))
* **deps:** update ncipollo/release-action action to v1.10.0 ([8603573](https://github.com/DanySK/Alchemist-experiments-startup/commit/8603573b92d23dc87a0c8409406b59138c3a7385))
* **deps:** update ncipollo/release-action action to v1.10.1 ([906a6af](https://github.com/DanySK/Alchemist-experiments-startup/commit/906a6af4fa8fbad9f8b23251a451e6f5304c242d))
* **deps:** update ncipollo/release-action action to v1.11.0 ([483dd66](https://github.com/DanySK/Alchemist-experiments-startup/commit/483dd668ad497ab0070501d1611a9605a77089d1))
* **deps:** update ncipollo/release-action action to v1.11.1 ([e0633ce](https://github.com/DanySK/Alchemist-experiments-startup/commit/e0633ceb47fd45d56dcc86c238277e2c60935376))
* **deps:** update ncipollo/release-action action to v1.11.2 ([620a298](https://github.com/DanySK/Alchemist-experiments-startup/commit/620a298b321058038c5c3615b8507c01aac44f4f))
* **deps:** update ncipollo/release-action action to v1.12.0 ([45bd721](https://github.com/DanySK/Alchemist-experiments-startup/commit/45bd721c65861dd991d51cb1523b1d2d47cce8fe))
* disable codecov ([a25f6cf](https://github.com/DanySK/Alchemist-experiments-startup/commit/a25f6cfb25860945d3f86cd05da1caba50b386fe))
* lock the version of ncipollo/release-action ([c575905](https://github.com/DanySK/Alchemist-experiments-startup/commit/c5759051e6016a04477b178d088de58e672ba9ec))
* re-enable the multi-OS ([d866012](https://github.com/DanySK/Alchemist-experiments-startup/commit/d866012f5df216b874b38ed100605b4e891fb1bd))
* revamp the build ([15412b0](https://github.com/DanySK/Alchemist-experiments-startup/commit/15412b0f7342c441db3bb4b9f4f9563634a75030))
* switch to actions/setup-python ([52e6d41](https://github.com/DanySK/Alchemist-experiments-startup/commit/52e6d41699e3b7a691ba15f527817d2fe1109437))
* switch to pyenv ([b65d7dc](https://github.com/DanySK/Alchemist-experiments-startup/commit/b65d7dc3a57ec5be0f274ada921da0266be9928a))
* switch to the stable action for Gradle jobs ([9ceba67](https://github.com/DanySK/Alchemist-experiments-startup/commit/9ceba673a2ba1482bd2cce020c537907f425c1a6))
