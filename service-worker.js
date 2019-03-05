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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6c850cfcc06fa5fedac2740d30927464"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9f3516f39441de92ad5d6840a08e8a01"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","15806fde00983512e4956738ade2d287"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7d32f16e62fc952d64f51f917c1245c5"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","2fede51a219a5d735d818b1f56dc8178"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0ee09a51be91547750625f63db58bbc4"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","27bc22a04a75cd6243665f56823be4f8"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","eee58850f7dfea109bfce44bf4351553"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","3a61085391970e48c772563ac361841a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","eefff8b5d830fe3aff62322ea0339a6c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","05dcc65d11eb8210a4d141fce2502dba"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","46e4017edf104c4dc123f61e2dda32c3"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","5674e316b197ff73357007dd1c19068d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e1fe2dba52d8b01f18c93822381c2dbb"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","4de99f27cb124290070058d91440a3a2"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","39c31c836d4a6714714163a095de3a82"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","cfbb3a1e6724fbdc85f0fa594aae9703"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","fb9650e9519581eaa1156fc841b52247"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","8bea4af7fd6cc7e322ea175d40a881c6"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","32e4c1080f30a6a679ec77b6312cc392"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9d880fdaad84d3ba64d881dc2f2bd9cf"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","19042926c60bd54f5a128e594315d100"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","d469770d7ccde0f1310a7b4a586e69a4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","642fe7b7b3ca2711e6a7237a7aebb193"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6e1f7762ddbd6360148cd9aee92986c5"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","dbd53f9bd9af225dc670a5ecce2b6711"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","6740de397bf10db7fcfec4621fe73aad"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","a4569a85f82d5f906fde5bee0f5c8e55"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","a4bba3d53e2be8314c0dda527d85d5b0"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9d4e504e06bbd907d50ebd32fd251bc0"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","41b9bb53ddccfc2c9fb30b48437f3a10"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f8423a16f8b3fcae7bffbb2c90cebfd6"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","bdf59fd40130828f610d3697595f902b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","0654d72dad60f6dd5e0bfd9ef6217ff1"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a1dcfa0b209663949ece914773a6fbb8"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","9593546c6bc11570885d9e32f1338544"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7206df42cd8d95b878a1871ed8e49eb2"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","98cc3ee97fee0fb2424d276de93d6961"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","336249c45c0ebccef666f367ca0e56c9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1c34227fc338685a5ae129787947ad99"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","b6edb3aea72ee5c222d0391d669de558"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","8ce2cf983dac5a0bc429807eb5b8712f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e04ed8351998065fbbe9cd73b9e83dca"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2099d2bc44422bd2c7a6e110003d59cb"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","762f1405b325f2c718d1f905b1afe826"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","427d6da8b204af48722fdbcebae599e9"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","386f3c6aa0e7f0f3ecc1ed36d8457b8c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","274df1badeb157410f489ad80cbeda7a"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e7cd16c0032705debb02dd20a78f52b4"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","b970f4bd8f825455502974956a22f4ea"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","fb384df6b6b4c88a66c76d872af70c83"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","6dc8b02751b2089ab1f68ae798038bb5"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","08a4cd34689f50554d2b05e919315050"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","1a5bff8525abcad94a28762bf43479d7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","4787f30bd47a4a9c751bc1445e1b890e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8f6d7902658d2640cc96a4d162314d66"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","103aca8b760ef7a5b63ba641d29fdeff"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e3c9a8f5e7cdb7778a5e9d54f175d2a6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","664b6f2ac4da1b548005e9cc44ee5101"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","e8ad4d198c22d9026d611b6573a59e15"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","0eb59b11440e2055e803ad74525e3c5f"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","41a8e73289980e150a0fbee60161ff17"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","860f78145afa95b50b324f07c0a26af1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f1f7762dde8a2fa949856a5155b27574"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f55a9d06f86d3a94172dc73820bc2b69"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","e03e21937d17bde424c929dc879db76a"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b1bd62c2499d4757b2009eb286d396ea"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","9e2132dcafa4f16b31b7735d0f5a5153"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a904be0bb7cc9f9259c345068b540cbc"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1871bf68e1a98f8f7ef28d7d8ab63a53"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","be495d0fa923355302956075e27c9300"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5564006b738bbe27119e3c46caf70b3a"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","770d5709d2cbe3364b0523a1dbe3deb0"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","0bb442cfa710d0264e8b083668fae14a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d9f714bd556cc556ee8074fe6928ae34"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","dbaedba899d6a0b1bc885a2fde17f81a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","fba973fe4cca5bd1d16834f155df4895"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","782acd5889b009694a1ba478bb1f6bd3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","117372d7beadf27b99a3ceca526f5527"],["C:/lmislm.github.io/public/about/index.html","f9e6a3b492bb0ef7028034adc9992355"],["C:/lmislm.github.io/public/archives/2016/01/index.html","cc3fcbfecaf76f21630d988050b279b9"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a0b06c79039667085c45dd00d3f719ed"],["C:/lmislm.github.io/public/archives/2016/index.html","3540762a49db830b66b0c7f02b7b9aa7"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b0f5e7842b2170cd77eea7226bb601de"],["C:/lmislm.github.io/public/archives/2017/03/index.html","590b019c8f1acbb613a05fc0335e73a1"],["C:/lmislm.github.io/public/archives/2017/04/index.html","90ea3b8a80c7edf76db93636c07a0ad6"],["C:/lmislm.github.io/public/archives/2017/05/index.html","11adb09b63f3245c6bc365fef285f3d7"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b62edb0951c6803e678300c1493578d5"],["C:/lmislm.github.io/public/archives/2017/index.html","7c0bbb15b3f5040b4f36d33d9e06264d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","bc83e88a62e920bda9a34da8bede4014"],["C:/lmislm.github.io/public/archives/2018/01/index.html","36483860aac87467ebc05d3e695bbaa7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c9810a275087b75133b77ad761e8de1f"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2642d84a9121b628c837b6d6580756f6"],["C:/lmislm.github.io/public/archives/2018/index.html","0d820c7d73d8ce95bf9f8d5faf1490a4"],["C:/lmislm.github.io/public/archives/2019/01/index.html","58833d56f78ddce05b23f68641bd0c37"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","a631abfbef6194c32759726fc071d57a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","671fd611fcddd7423d053f1b0670b9c1"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","d8a640c3e0aebe12406847bd44df10df"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5686deda19b69e5b33fe92099ab0a467"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","62219a9e067aa34bdde7e5403ebda7a9"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2279610295f3d554678cb5c08ceb0ca2"],["C:/lmislm.github.io/public/archives/2019/index.html","142c27667112a1494275d2d1a5e2a16c"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","b4f74ee76d6c961900ffd01858e2b670"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","b414c2d6ff558858519f045524786b05"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","a9becfeb6e85e611209e30cbe2de0657"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","9c8a774dc30fd51eac0bc8994ef83605"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","20a1c748391dd81f235c90874df340d9"],["C:/lmislm.github.io/public/archives/index.html","58d4e5ddc9d41793a05147b6b6690af0"],["C:/lmislm.github.io/public/archives/page/2/index.html","da21482f8529be1be8aa243203ee1d87"],["C:/lmislm.github.io/public/archives/page/3/index.html","ee20457acdf327282c608f14eb6eca51"],["C:/lmislm.github.io/public/archives/page/4/index.html","6ff7814f3c2220cbdc1c519189201774"],["C:/lmislm.github.io/public/archives/page/5/index.html","ad34781b9b4fb33cf33f4740817034ed"],["C:/lmislm.github.io/public/archives/page/6/index.html","d5b4497bfcde9640b8ca867edd6418cf"],["C:/lmislm.github.io/public/archives/page/7/index.html","06fe719f26f0500f014db95e3d888c1c"],["C:/lmislm.github.io/public/archives/page/8/index.html","7866cb4a1f518ae738fa45cb6cb17e0c"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ae5faf5455527966b686ddd5015081c9"],["C:/lmislm.github.io/public/categories/index.html","d555310a3a4806c56630530b56d45135"],["C:/lmislm.github.io/public/categories/学习/index.html","6459668636f19ec85a53a4a38d65e05b"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","3b04281e9a8f92364d1441844a543d8f"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ab13af5a3f7f90c1063072127162384f"],["C:/lmislm.github.io/public/categories/工作/index.html","3d50620237feaaed4eb94055b4e24456"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","16bbb9f7288c8f1e0102acac345fa29f"],["C:/lmislm.github.io/public/categories/技术/index.html","f35867ba9d4afbaf92b296b29345d90e"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","f66c2a4c983f51a73cfba96a5bf58b01"],["C:/lmislm.github.io/public/categories/日常操作/index.html","a62e8865b9451442e8ea5632216f0dd7"],["C:/lmislm.github.io/public/categories/生活/index.html","a46f730103a3824d5a2b94d8a7876119"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","eec5480889c0f525d099a4160ee5486e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","63d29f12011db95a977ca3d965c7473d"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e1043c81d34d4aaae853e09623390593"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","99029f3b19ea5ab83e0e32694dc2192b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","beecd7ab320e0bdda8734b88c273ab33"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","7583b2bed19ee4b4acec8533bcf15db8"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","25416fd38509d17acce52147a9703c09"],["C:/lmislm.github.io/public/page/3/index.html","b1e2e11258569986487be6bb1c434cab"],["C:/lmislm.github.io/public/page/4/index.html","2e805c775b457d657f6ef7e9fe4eac07"],["C:/lmislm.github.io/public/page/5/index.html","a94c4db245da2f74a01aed0e0ce7175b"],["C:/lmislm.github.io/public/page/6/index.html","a2d38cd5fccb9b1db815233c700d4dbe"],["C:/lmislm.github.io/public/page/7/index.html","a0f13f7205793b83b012755c30daf847"],["C:/lmislm.github.io/public/page/8/index.html","f1265f9a23511b2f299f0087a622d28d"],["C:/lmislm.github.io/public/tags/Interview/index.html","21e9b3d5527a8adfadbb8023ea82da5b"],["C:/lmislm.github.io/public/tags/JS/index.html","e880860342148843c6b9aab468d5ac9f"],["C:/lmislm.github.io/public/tags/acm/index.html","899d1c8d0c53a4a40d2391bf0c239c16"],["C:/lmislm.github.io/public/tags/c/index.html","52eb1c5ef88080031addff5621e123a0"],["C:/lmislm.github.io/public/tags/codewars/index.html","e273338d66e74ad7b50b23139655ae1a"],["C:/lmislm.github.io/public/tags/css/index.html","c086e8d3fc73e98186d2941176166549"],["C:/lmislm.github.io/public/tags/git/index.html","61448c5d206b604fba2eb58fe50757f8"],["C:/lmislm.github.io/public/tags/hexo/index.html","57160fe2090b2a3319313d54dde08dd8"],["C:/lmislm.github.io/public/tags/index.html","62ba85f71d0d21e443c26f2c67120f55"],["C:/lmislm.github.io/public/tags/markdown/index.html","5901a8e11beb29777c7a330422bd9807"],["C:/lmislm.github.io/public/tags/poj/index.html","d307883db62db5289527c6a88d811819"],["C:/lmislm.github.io/public/tags/shell/index.html","fdc7b448d091cbc8f6088a858f3bf359"],["C:/lmislm.github.io/public/tags/vue/index.html","de08df2dbc28ab8ad75f22900a25873d"],["C:/lmislm.github.io/public/tags/前端/index.html","b1313d4a4da91e972c2027bc99eff5e6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","0d08eced1d1483d2b427d5f81b954517"],["C:/lmislm.github.io/public/tags/小技巧/index.html","973ca75ed8404a268115b7cd68827ded"],["C:/lmislm.github.io/public/tags/展示/index.html","68e31c8db313c5e417bda69c0e9847c2"],["C:/lmislm.github.io/public/tags/工具/index.html","f5a8ba27b8a76531784f1ccecdcf4a24"],["C:/lmislm.github.io/public/tags/感悟/index.html","fa1ba396cd5de9f3a3a4bd5c60f9a8fd"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","f6c3908dfe534a7f7c61f6ac533c18bf"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","2b489a11649bc9374f8567704f959504"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","76df87b20fa812ba3fd2950b2f6e2557"],["C:/lmislm.github.io/public/tags/练习/index.html","e1dd09a3d2135c423187f1b9cabb2346"],["C:/lmislm.github.io/public/tags/编程/index.html","31e3c25544250be62bf45616fc19c6a4"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3845dfbed210ecf06994f141e3a5fb59"],["C:/lmislm.github.io/public/tags/运维/index.html","8f092efab4f6f58a5e24cd41c6b75f03"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







