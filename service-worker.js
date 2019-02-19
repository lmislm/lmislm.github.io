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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d4ce765d99c17b49b07d045f48864d8d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","170317afd48a3501204faaa9f2a50bc4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","9744f14bbc52289077f4ac5ec9a1b156"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","438343fef82819c7e89ceedc5c0f66da"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d77fe836729b0d8c7dce1d7b2adfbf9d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","7079ba834fc6d5c70d082a862f78aa60"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","5fbc1d5cbf504797852fdf299f71d1b0"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f418021d1ee255cd3f31cfccd63237d6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","8cacf330dab6e520f9149a2285abec91"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","154f1740d2c246cfb42d5ecd67eecdb3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","93caa31961c25351b9dcbc2ac5cfe3ce"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6202da49a474b33a2f8d8cd969c42203"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4e4394c2ffa7d9566ee9f1cf72a96ccc"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d30e8ebfcf28bf655da5507ff7ac5e19"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","5423985ebffd465c3d2786de5314d44c"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","befa93930b61bf36338d1f24bbb2ab1a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","0aa823472c6f8d9b0956de048e93ce93"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","23bf494afa02f1c9b42ed5477815aea8"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f18a1d80b2de81781fab889bc06cac95"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4b357302d10f75560f876f9e63302f11"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","9d1a3aa31a39b110549fd54507c7f941"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7286fb1e1be30375a930f2a60ec99bec"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","21428a7e5df9eba684dc4bf67b0cf695"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","6f28fb806264541ddaaccedd92608244"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d0c686ecbc9a61df4103933bf268886b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d9fc0bf28cf11008e212857ea633c1d1"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d3052ac91edde01d30694409cc056a74"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","dd737f680ce1caaf6a5ee3642ac4742e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c6ed197b35c46f894e24e31a295eed71"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","799c73b94ca909f5ecc35c37314875c5"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","91277f6ff919a8f75a986af5509620aa"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","28032d07d631963209960931ba90241b"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","503e0a89665ffcd68b60ec7a2453f16a"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","15df767e9bd5e082b070593d8d95a802"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a6e5c512de98d4fec93b7ddf20ab894b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","ed106551b143411ef208b95292e3c17e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","9b68cec18135a4480da13255a91c3729"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6ed9a112e4bc27df4405dcf57ee6b729"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7ad03c5c7110d53e313ac00c90bcc5bd"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3a48db7997563f49709f634e4adff996"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","c253a4ebddc38b4a977049e9ebcad3ad"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9052ec41ddaf45b0ff506b2dc0d60fc6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","051308b61f15c4a45cc9a893d566d976"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","3a02b7ab8ba0b5ee3a5be67427b81462"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","02088f83592ecde45e3d4d98755dc615"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bf415615dba1a60c73a1df80b76e7d2a"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e740580565be98173a2fb358dae88b75"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","1b18f50dcce70e84f94902d4c6a025fe"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","eced1de15cce0b8f39fa95beffae2ec0"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","03ddc67321f77a38552e3b2dd9214255"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a53bdaa423e39aa3715d6da10076f9a1"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","05bd9309984cab53b3ffa23e01dcf486"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","492b54c9e9e61daaa23f501d5cdc6806"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f3aecef702d76c8c6356c1fe303861fc"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","acfa81740948424973e31cfdcc32bcba"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8a10a4c9ae6c38edf3aff9de7c36f66c"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b0fd0219b98daab24745ec7b2f9188e1"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","4437d9498705e8e87e243f7f96f8ce2f"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","e37cb76d671767aa5ef3e9a94c372e60"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","12d88fe4f79ea16e7ab25f3068a79d53"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","fbdfa54de278977fbfde340547dab0af"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","77d2a993c16b2938d75d41eb564f4d71"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","038094ea1931e6fd47d5d172e6f5f518"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","0b0eb44b192650b0fd4c46b40692b57f"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6f5702d24ae396a0f5e38ee11a94966c"],["C:/lmislm.github.io/public/about/index.html","a8203e86b5107978380bb7683d76ca28"],["C:/lmislm.github.io/public/archives/2016/01/index.html","f82d53492ac5c4d072bc8f45c00803ca"],["C:/lmislm.github.io/public/archives/2016/03/index.html","cc9fd69ab70e91c9440369e32d3e81ad"],["C:/lmislm.github.io/public/archives/2016/index.html","fcb12c237abc0e25cb3356d7b3b06de2"],["C:/lmislm.github.io/public/archives/2017/01/index.html","7c9a02372447a39c56010510c97f1e8f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","05933301c2b804d440c45d8afc88d9a3"],["C:/lmislm.github.io/public/archives/2017/04/index.html","9a636072884eef12dae6be161d566b51"],["C:/lmislm.github.io/public/archives/2017/05/index.html","6e358d18fec113196ba24f400374a350"],["C:/lmislm.github.io/public/archives/2017/07/index.html","8b7b5bb6af9d5c0678551dd287eb948a"],["C:/lmislm.github.io/public/archives/2017/index.html","8471c92cf125492829a12e2763669004"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","7883c25adc31e81f40e6fd6597c65c6b"],["C:/lmislm.github.io/public/archives/2018/01/index.html","63bc22c386788ffa6bdb8eff8ff46173"],["C:/lmislm.github.io/public/archives/2018/03/index.html","b0cbd78fdae7d47e01f525626b3bb0e0"],["C:/lmislm.github.io/public/archives/2018/12/index.html","0b91daa6c39914c137af06fbcaba9378"],["C:/lmislm.github.io/public/archives/2018/index.html","141e91eb2137c96b1b45b6712a382229"],["C:/lmislm.github.io/public/archives/2019/01/index.html","79453aef7bafb1ed859caac2d6492aed"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","dc4110b70c33e37fc7937818ac8dd905"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b7a902cda34f0f5cc2e4341aa5ffb62a"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","d2e4846614ca69579ed58c59024c86df"],["C:/lmislm.github.io/public/archives/2019/02/index.html","bcd548ae3543e6a9a963de8b3d96407f"],["C:/lmislm.github.io/public/archives/2019/index.html","3b26b938f3b53a463e875309d1c10294"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","39d3c2279ed899dce1c865d858422223"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0d51e6dc6693eb6a7c0bf687c1877c09"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","10ea02df2e52b12d05d880b96c4ed7a7"],["C:/lmislm.github.io/public/archives/index.html","70300de76d1a08c00badde8eebc5d0c3"],["C:/lmislm.github.io/public/archives/page/2/index.html","c95ffd8fb506d73d8bc56c6b569b52a5"],["C:/lmislm.github.io/public/archives/page/3/index.html","4546a014a269e65571df44bfc4560149"],["C:/lmislm.github.io/public/archives/page/4/index.html","dbf31cf3166a5328e985c105da93ae2c"],["C:/lmislm.github.io/public/archives/page/5/index.html","db67a9b5ca0e497777b532efe93e3ead"],["C:/lmislm.github.io/public/archives/page/6/index.html","c366a94aa002f5b87a619c4b0ba11124"],["C:/lmislm.github.io/public/archives/page/7/index.html","041ea6af433f9a83c2f3ad21c8e3ee26"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","fd2c08705f072dd730d4fe68ba8f9a09"],["C:/lmislm.github.io/public/categories/index.html","b8a8e307a074c51c182166d7f8c7e047"],["C:/lmislm.github.io/public/categories/学习/index.html","6fe9825f5b1223a2a6af95a2bb5eee2e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","10280c7df890ef0864e8ae5a3509242b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","a37dec3ad4e668402ef2dff61ea85bf3"],["C:/lmislm.github.io/public/categories/工作/index.html","cdcb22681f32e53e9ff944b8045e4177"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8b51d7b310140e53b5a28c405e44ff84"],["C:/lmislm.github.io/public/categories/技术/index.html","3ed56a9d0fa7228122ae0ab236322ed6"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4f4627e1eb356022634f5cf8d775769f"],["C:/lmislm.github.io/public/categories/生活/index.html","a6340b51071f15ea8baa86bc1757050c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","0c8347ffb40fef1674744c8b2ba08ef0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","10309f527b09a616f4c71f9c0a867066"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","9b8fc75d1aa8833cc3ee7d2ec26319b4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","b70d93229ce1b42b7d3019e17a090680"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6763ea62e36cce26554329027cfa1c69"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f169a46220b98c13bc81361a9eb406c0"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","b8dfc13274d121475e80885d381ce205"],["C:/lmislm.github.io/public/page/3/index.html","20b7f838a6f196d0a1d2d9aa49cd3d92"],["C:/lmislm.github.io/public/page/4/index.html","68e5c24ac1abe8d95157afd92743cbde"],["C:/lmislm.github.io/public/page/5/index.html","f284140fad2a757e67b713efbf1d7b66"],["C:/lmislm.github.io/public/page/6/index.html","ebbe39dde7d3d25ebf52199eea60cef2"],["C:/lmislm.github.io/public/page/7/index.html","b3c08664cad7ba2fa3ac6585e565ee7a"],["C:/lmislm.github.io/public/tags/Interview/index.html","5aef88c7b42077152143287ce4e690b6"],["C:/lmislm.github.io/public/tags/JS/index.html","e004c7bf8f29b763c0c7b754c582eecf"],["C:/lmislm.github.io/public/tags/acm/index.html","4cd31874b7c351682b64528b4f3a98fa"],["C:/lmislm.github.io/public/tags/c/index.html","3f14939673431a4b379bc482c5d04aa5"],["C:/lmislm.github.io/public/tags/codewars/index.html","8ff30ad4ec3a6a820f10ec389b3369fb"],["C:/lmislm.github.io/public/tags/css/index.html","abd9ec8f22445b706f043999f30b339a"],["C:/lmislm.github.io/public/tags/git/index.html","10a0bab51f2ac33680f8ca1b977ce83c"],["C:/lmislm.github.io/public/tags/hexo/index.html","c67c99706cb78cc17504e842f2d846fb"],["C:/lmislm.github.io/public/tags/index.html","0b919d38b6b6d8b3dfdb42ec424ce7da"],["C:/lmislm.github.io/public/tags/markdown/index.html","5539044e96e3f23da4f66e62c32a2380"],["C:/lmislm.github.io/public/tags/poj/index.html","34591c60efe37dfe876d85018b314633"],["C:/lmislm.github.io/public/tags/shell/index.html","3f8f43558bd91a42f178f127bc458e98"],["C:/lmislm.github.io/public/tags/vue/index.html","fac9d1700380c0f7cf364b13ea3bb627"],["C:/lmislm.github.io/public/tags/前端/index.html","bca5488b08ffe7b1a29dcc74d9e26365"],["C:/lmislm.github.io/public/tags/小技巧/index.html","8229813610b0218e918651d6d9e754e5"],["C:/lmislm.github.io/public/tags/展示/index.html","a766a978409ff20df40ec6ea8a982f13"],["C:/lmislm.github.io/public/tags/工具/index.html","698bc216805b0c945e0e39b8cc20762d"],["C:/lmislm.github.io/public/tags/感悟/index.html","ece993b01f2a3beb726deb419d7ec489"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3447465b75ae4bc52b3ad57244b79dac"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","1e0f7c613aa6357dab25d547db9b6b71"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4da49bb6e10c7e2c311c5c39ffea31d3"],["C:/lmislm.github.io/public/tags/练习/index.html","edfe2a86f57aea297db60873926c16a0"],["C:/lmislm.github.io/public/tags/编程/index.html","60d87d42e8cff7c54d1d9a6efe67fb20"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3aa2fd9b3651b4d1881bfaf3454092c9"],["C:/lmislm.github.io/public/tags/运维/index.html","da3868908f85e1630e5933b5cacf90d7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







