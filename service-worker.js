/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a24480d9395ad72233280751c66d42f8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9204a6188d021aa873336142d2cde282"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ce619aa2a5f1bb9c7692f30184ea195e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c63cdca51d92b7f155b7e1db02ff3adb"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b9a0b1afb734cff6ebe3cb4357205e18"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d5577e55bfa3be03c95eecb3346b02ab"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","885272a54ceb0861e2ca5deefff583d2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","89b06fbb0dd321bb50910133b1e7e838"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","98ffd2f59f943d55b032d3d24a0736e2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","1485c9fca2b30df4ddcbc6692e80c296"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","dee081529a305224e177e1a5a36ae2ec"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","ca59109f4041be0f5b6b8d2e4f0e3039"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","fed91bf8796422c7c114fcc8820a92f2"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c6f2de52977daff625c203aa217b6bb2"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","02a9303e7b94eb1322ef85a56e53230b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","3397b9917a6a07d9395635bf659de94d"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e8e0a9743210cb11528bb62cc22d922e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d2a89357cbb33b2f3ee02389114a1150"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","5d1341b7c44387a7279857c896067750"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","89702408428d6d9e4d0c5270db021695"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","fa5c39c5e63332c4f999e110ce08a37e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","0496f9d2bf3894cff4bec670d9aa4e23"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1f18fb1d454324a1340ddfa4ef6254d5"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","de18f5fc435b74c4ef60040152cdbca3"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1b6785aa879b028b3e4dcae7260728bc"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f18f6156491605967527bdfee3622f2b"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4d1490dd8c8dbad14d0f2b7bc6f80447"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","a6c1a5d29868da6520810c65eb71641a"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","de16d21ffd1e975855005ffe5e93dcb6"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","830e25ee8aadd687b8824d60c78f3ecd"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","3d987f64f2a1aaef608688896f50ac9a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","fdd0fc86213f283b2328af17f544d7b5"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","c3fe01d2dc1a5d518b514600f63be099"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a7b1d304a45783c217ee331f4f70c22b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","eb62e6cd0560edb5e047393bf63b8703"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","71a41ff6cd109824137faadf65125b92"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","db5d20f4867c67495d7bcb26a1cb6b78"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","86128f3c7cf53526e2da9acdd49c917f"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","581053f31f419958c57048e965c65516"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","46751f403f6db639020a73c6973481c8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","01c9c76d97e5fd400a8a384543ed5181"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","a93506846a6f8c2cd4ad51d774c9c0a2"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ad0f7e50536cde86164fb596654bdce6"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","eb144352f9c631cd8fb9fab59de5fe8e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","422ef9191f6a90cbc88dceee13895b85"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d22cc069ceabf4052719dad641185897"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","ab58456a19c3f6f4d658e6698e8b1bcd"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","6b5214b0f5d1fec466100fc92a578613"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d76111911eb80eb9d394009ae89a0b3b"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","066a3b1f060e3904377e357072cc9a6b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","8abf1f85e180576f55f48d346dac716c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","3cf0a53c8e8afb145194e07b10b53068"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","c99702de4de1eb04ac6c882e8dd3a748"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","63c8231171e0e9dc03987ad9cdd67b97"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","1e85ba342b36188e0429e6c4c1132503"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","d0d20011993806e2f1af1d95fb2e1e78"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","8c940d893032d458c5faf38efbd63afb"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","d883f7c9044a55c6e03879511ea94318"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","4d61717143f6421fe9a1c366db81be27"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","040766fdc234a07c5465d0d51fd95c0a"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","08c2fa0117ba4695d8e9337610c00b6a"],["C:/lmislm.github.io/public/about/index.html","cd75eb1d6b62d8eb50370154804d6006"],["C:/lmislm.github.io/public/archives/2016/01/index.html","05925cb3f74acb24de660669b90c9a79"],["C:/lmislm.github.io/public/archives/2016/03/index.html","024930fad2ba432d9d7425d6402ecc06"],["C:/lmislm.github.io/public/archives/2016/index.html","37a657515b9739931b178e61e4ec8ffc"],["C:/lmislm.github.io/public/archives/2017/01/index.html","f760da78b1f7d3d285b68abdc1bc859d"],["C:/lmislm.github.io/public/archives/2017/03/index.html","070229efda06bb3c4e62ea41c05dea60"],["C:/lmislm.github.io/public/archives/2017/04/index.html","525531f3aefa8356cbe29499ed6169b1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","606c021dac9363887b951cca9ec1b63b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","5e6fbb0bf71ea977ec7b369aff4ee6f4"],["C:/lmislm.github.io/public/archives/2017/index.html","a917cae977cbc0c31b2aefa3f6db191c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","40b89c54b5fc925f7e84499418aad933"],["C:/lmislm.github.io/public/archives/2018/01/index.html","397f8a36959759a53e5b16f8e6b40e45"],["C:/lmislm.github.io/public/archives/2018/03/index.html","36df6a6338da330ff61863a5e9d17ae4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4fc98f88b04b8f5750476e65bde32842"],["C:/lmislm.github.io/public/archives/2018/index.html","f2882fc9865c5d6465a42779692b5535"],["C:/lmislm.github.io/public/archives/2019/01/index.html","ee44f4f36ef505df81fd01e476a0ba80"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3e662685708f9f2342aaadc90a1d3497"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","09c41c36d9bdb691b968e80b12bfbf98"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","39d4080b2ae96bcf538de446220b6834"],["C:/lmislm.github.io/public/archives/2019/02/index.html","786b14cce86fd8bbe4f33c95cb68f7b1"],["C:/lmislm.github.io/public/archives/2019/index.html","2612613297401b068e95a8da0dfe0313"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a5da5be28367f3abb734fe99c8b8720f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0bf69f23f204129ac85260d53cf2ad0f"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","5bf4275d02b71a215d9bfcf6e580de90"],["C:/lmislm.github.io/public/archives/index.html","2fbb0d8aec399a3e07cd9be6ac70c72b"],["C:/lmislm.github.io/public/archives/page/2/index.html","0b87e1fadc26e655318eae68963f60b0"],["C:/lmislm.github.io/public/archives/page/3/index.html","d8dc78c6861b206a581c7cc1806f0541"],["C:/lmislm.github.io/public/archives/page/4/index.html","cd625ca91dbec5cb67abab2443508859"],["C:/lmislm.github.io/public/archives/page/5/index.html","71df0aeabd28e3520e400af50e90cd8d"],["C:/lmislm.github.io/public/archives/page/6/index.html","ce153cae97c8eee8324c65cec6033324"],["C:/lmislm.github.io/public/archives/page/7/index.html","72406ee87ff4a2e367a3eb03aa114396"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6c12b78b298605b6e769dfa628a695bc"],["C:/lmislm.github.io/public/categories/index.html","b417cc3c0cf6f955800a867d3fa389ca"],["C:/lmislm.github.io/public/categories/学习/index.html","f53e3d967e18211f9ae444dfb98aed15"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","701f75b0906e233974633b8390425f55"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","752bf6c13a7fb776286f6ae092048dfa"],["C:/lmislm.github.io/public/categories/工作/index.html","d1fdab7aa8811b51c884fce820dc66e5"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","10487bfbe9374680ae3769aff97a9b70"],["C:/lmislm.github.io/public/categories/技术/index.html","8c2ba82419e4349a52597a69ed7d301f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3e19c50bb7b1a61dc61dda3997e46b66"],["C:/lmislm.github.io/public/categories/生活/index.html","03b7ae28658abfec222dc7599eee5376"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3c92f3a6513bda6963cbd2ef411aab85"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","8ed6bc3e23ccce7fe5ab393e3250595b"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","38b9b13421569e149e8ab636e0e56951"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","da9bbe62f0e897c1448adbefd5b556b1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","8512fde648cb6b1dc649fe546c9b2c8c"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","9d75ae885d6b8b16699b4d2bdbd8e150"],["C:/lmislm.github.io/public/page/3/index.html","5fe70f331d7176d796e2cf2035501839"],["C:/lmislm.github.io/public/page/4/index.html","6d96a972b4a4d792a3dc38fb49dc74c1"],["C:/lmislm.github.io/public/page/5/index.html","fc7e6e6779fa432e24cc25a05240feaf"],["C:/lmislm.github.io/public/page/6/index.html","e118c6c667aa6d0855f9bf8301ffac75"],["C:/lmislm.github.io/public/page/7/index.html","e00f134ec2550032ea218fd77286d873"],["C:/lmislm.github.io/public/tags/Interview/index.html","e452166d0578641111d2c52915519069"],["C:/lmislm.github.io/public/tags/JS/index.html","9ee9cf793395c0cfcfbb538aa5b820dc"],["C:/lmislm.github.io/public/tags/acm/index.html","6c676871c02b82483b2fcb9e13068f6e"],["C:/lmislm.github.io/public/tags/c/index.html","f4514c5727d723a947cb0cef0a01ca98"],["C:/lmislm.github.io/public/tags/codewars/index.html","c1c397c45751c94851c106f60825f0d1"],["C:/lmislm.github.io/public/tags/css/index.html","6e5663b0f2be414b583d7a1ac67a2c45"],["C:/lmislm.github.io/public/tags/git/index.html","7e0db6a250c4611b1f3dcb8c2dbb87cc"],["C:/lmislm.github.io/public/tags/hexo/index.html","e0f40b386944db07f22ed9888404d674"],["C:/lmislm.github.io/public/tags/index.html","d79f344569868d1feaf43d33a5ef4251"],["C:/lmislm.github.io/public/tags/markdown/index.html","7ed83efa1169e518dbf405958dd5500a"],["C:/lmislm.github.io/public/tags/poj/index.html","9bf126adba4318888d93a19274c6320e"],["C:/lmislm.github.io/public/tags/shell/index.html","62c0fee1911a3bc556d5f8a01f215457"],["C:/lmislm.github.io/public/tags/vue/index.html","ced60062959a43f2af161f36943d2c5c"],["C:/lmislm.github.io/public/tags/前端/index.html","5d801e24231d7518e1baac5091a4d87b"],["C:/lmislm.github.io/public/tags/小技巧/index.html","afdce944b74ca80c8de84da6783066bf"],["C:/lmislm.github.io/public/tags/展示/index.html","1ed1a7fb0d5318cabadb8fc8819213b8"],["C:/lmislm.github.io/public/tags/工具/index.html","a2e6258abac3958287030c93c45a2d12"],["C:/lmislm.github.io/public/tags/感悟/index.html","d3b31de0b296ac09386bf65f232ed534"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","19d5a6a8536a7c22e3176c290a39409f"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","462297e48ae442151bc99939d96e2184"],["C:/lmislm.github.io/public/tags/练习/index.html","b438b05faaefebedd7aa402e3423d05a"],["C:/lmislm.github.io/public/tags/编程/index.html","2866b05fe8ddc476a25e1b17ec4e08ac"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","bc1e0b2b638d615b21442bd0a01f2376"],["C:/lmislm.github.io/public/tags/运维/index.html","97aef75a52a33274cd5810f636ec71d2"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







