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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7dfa8dbff6dc79f238626c4e8fbc24f8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4a3def94cb2c6ab2fd257fd17fcd265d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","77dda7639fd9697578538ebfbfbf83be"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","34a4d5219664ca6e2a2783a8cebd63d1"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","f550a1e77b34f13831eef09c5a83ec70"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b2bbc2428965de960efd73d35438cad4"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","05d57e50d27a470458623973096ad70a"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","15b34456b09e27c20034cdb4653912c1"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","3d462ef8125552884b225ea5b49990d6"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","91f63ab28e756fa2b0dda5775dff099f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6f8731eee956743b07e93927971169f5"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2de20aeffcd483c38ed124f8639ef4be"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","54e53625f200fbe7647d2f4f1dd022e4"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","4382d62a996347fee6c24c67da687d3d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","f622c7654afd9e42686f8b01025f8836"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","2c86b38b64717343935e9d268638189d"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1ece5472563fc763d78a38fb8cca11e3"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","89df52640a681bf4ead0c7758095555f"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","66cc419bc4769b67d774c5b528e480df"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","f1ee0426876dd152ddc9963d9404e57f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","25f2ddac923bf2b4bab2e5f22e35b544"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e684ea9ab5b3ef8f8ae5dde6495a6650"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","85a44f3f081dedd8caea37ad3486d2af"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e356d78696baa2375fefa762f8964b53"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2c416e02cb082655f32f42776a3c9511"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","1ae0089ccf1ae45e19f4a9594f47a40c"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d80a23434adb624766f99ec1be26a483"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c54066ef48d3bc831498a1959ae5ed89"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","44dea499c77edfd96a46d3af09fbaf11"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e34ecb2680a7fd30600cc569e2bbc1ed"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","1b54759b508b764af0e4c1894e0a4282"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","80801cd97bbfba462d027c3b3be8c9af"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","c1b6741fcd0f9cc584eaf6da56c3d47f"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","25221bffcdccb296edec8f0b3d098893"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","cb1beaeabc01a4ef593a304ef83fa375"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8eb0c8ed9604ae18444b35b7f0508d03"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0fec3a6601453658a44683bdd5040383"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3a223fd2d433410956f4728c9b2e5af0"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","523518df3991f81990a823a191cda261"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","d6a9776f438a0f786d6a4a8cc6075172"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","05e75d8a9b1dd32e0219809bbf999d98"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c0e6ca19eaf9666e5a07d7d3abea3cdf"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bc750b5bbd92bf318c08fa9f2e1fe39d"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f341d4f0a0c290a3078ce37e3042d19f"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b929cc27b4e682795a370631885b0af5"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","fb670bbc6286e68b99beedc3b7d76292"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","43f4d556b191e5f1dbbac43a0b99a8c7"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ba85915cabdd347793f101b729d7f3f8"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9b7b2fd684cd02682530dbca9b1ee7bc"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d15dd9d76fed8c261c4fd1b1c62941b2"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d2ff6c14b387c4b1e8e55b4403c3e61a"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","331feefa0d1330750be061bbb80c5779"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e646a0f6bd9d7167f65ae70ad1d759f0"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","3b0dd0cd13a5ae98e9c0ca744c92b654"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","5bec503baaeb8a122e0aa194df2b768e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","84b3df9bded70f7d154230ad76f87c0d"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","5809f21d792ab85be5ee8448e1c8376f"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","12a50fecfd87ea6f04490dc245f9db43"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","32527ffd6ec811ace40650ff03af174b"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","847f0aa7e17916598751f7c5d5d0fc92"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","2e6ccdb01ae36951c4d2a5400cf908d2"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a97313a43af4918df69a7ff80645d2d8"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","d287edb66eeff56396319ba5de2ac0ae"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","3e4cd4beee2e3f4e13b42f066f696b1f"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6d920d5ae3302ad84cd2e54bf0085f29"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","c772861a87db65193b98ecc4e4aca7c1"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","529cbd35504d60567e7180685380482d"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","a0bcf8b47e9ef3f1f49ea1f46397ecf1"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","335261b6863e5a294c68ac0850ae2cd4"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","9a7a7b59f99be7ed74b239e87f39cdc4"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","4875b83a290a0b46492af3e008565603"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","b40659b6510261270508968d0eab58a8"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","473604c4197c1dd57868fe0ed6f14a9d"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","25dc658fac46757064cf2a534a3bd87a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","b45dafcabc9a323e6e60a35672a9d49f"],["C:/lmislm.github.io/public/about/index.html","eb82db7852e8002da60f5745fa1bafa4"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4a105f3cb17c7a860dff41eca17c3a45"],["C:/lmislm.github.io/public/archives/2016/03/index.html","516d90bdc99b6fe1a55b758036d9f763"],["C:/lmislm.github.io/public/archives/2016/index.html","6091f53e897bca2036cb49c8b25d19b9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","a758e2050f4ca5cc6072f0d8a8fae522"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0ac92c8cd22122acb36c836d842b677b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","10a1a21e1d4c293447a951e90ac754bb"],["C:/lmislm.github.io/public/archives/2017/05/index.html","55177b576afe79c367ae8217a23c9faf"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4b1a2852a0368845386c7a0f430ac7f4"],["C:/lmislm.github.io/public/archives/2017/index.html","b8a61afb7305b30ac30e665196fa4288"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","6c88068d995c7b42432a14939201102b"],["C:/lmislm.github.io/public/archives/2018/01/index.html","01765a72b59cb2e8db9dd7e1d49d4942"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a7a867e12d85d502dd1891f579f3e008"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2bcb47dc8ed157ee27c1264c5e7c2b00"],["C:/lmislm.github.io/public/archives/2018/index.html","7935579f3bbd59cee133b078fcf6a7b0"],["C:/lmislm.github.io/public/archives/2019/01/index.html","0994e9adb3d61f34124a59a37ae5903d"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","dd2db21251744d32d29a3fadbac07b8a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","fedec2912454b0bea59b75f7d1c5fe9f"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","b939d0779c512216117f630950225efd"],["C:/lmislm.github.io/public/archives/2019/02/index.html","1c1fc760c453102603b07af1333d2349"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","ad36c3a34bb5d7e1e3368a18e1a5492c"],["C:/lmislm.github.io/public/archives/2019/03/index.html","0fd133033b43ddf0e14b8dd6e0947274"],["C:/lmislm.github.io/public/archives/2019/index.html","296bfdc60ec277379adc607ff9bed8f4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","771d3cbf9198a19ef2e98388d7260a68"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d953cd0490efe4a6617accb2eb2b0458"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","eac0af2247cad282ef685caa0ce647ae"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f1e3d1f5843052768419663ec7b64c89"],["C:/lmislm.github.io/public/archives/index.html","a0c2d36b1bb5d6d0289340738b6513ee"],["C:/lmislm.github.io/public/archives/page/2/index.html","54161a70cf358dd64376810b955e1836"],["C:/lmislm.github.io/public/archives/page/3/index.html","ebac56d100311b8c50b0d84d18c151fa"],["C:/lmislm.github.io/public/archives/page/4/index.html","6ac3d3623ea73b284cbb6be410e3a018"],["C:/lmislm.github.io/public/archives/page/5/index.html","56d31a1a51074739be85c7dd4b00e50a"],["C:/lmislm.github.io/public/archives/page/6/index.html","de303fdb83df32ff3c4f08d99126eb1c"],["C:/lmislm.github.io/public/archives/page/7/index.html","b976eb881531edc6acca81fbe6b1bb81"],["C:/lmislm.github.io/public/archives/page/8/index.html","3ecb37733e43937efc79e04b5b58b4e9"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","476c65778a8ac2d0a33384ed319ab862"],["C:/lmislm.github.io/public/categories/index.html","29492a85b2d4a79694dafab39a179a9b"],["C:/lmislm.github.io/public/categories/学习/index.html","03e636f1cfe1214d7c9621821dc36973"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","fcbc9459b23e372ae54e5b30a7c7563b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","bb1676e64ea22d355bcb858f53b1f92e"],["C:/lmislm.github.io/public/categories/工作/index.html","5e7b4efdf2f1ca2e067e822279c79296"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","46c92ec55a56e52a04d0fa03dfabe07f"],["C:/lmislm.github.io/public/categories/技术/index.html","7e1031dc99d75b7b904710378d18f0b4"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b7a757e956c3783886939dfccba041a5"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d38857d44ab6dfeb98c05af03dd920c1"],["C:/lmislm.github.io/public/categories/生活/index.html","a3f36a4ba4ae01d8334a39d0c3293978"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","b0f04525f61e072863f560e4f2299ea3"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","ca939853f15de12752f7ecd3e133879c"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","a2b7af2a76d4fede38aef4805e58519d"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","b0e8cb547d5c3db4695af7e34156923b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2ce88a0e1dabad3ea66c4eee10091482"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","27ae0c76eba8898cdf3bd14dbb482a59"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","bd11d0102cef802d1755e00d6d6b1f02"],["C:/lmislm.github.io/public/page/3/index.html","8a7616300eda5aa90e3beb36545af08b"],["C:/lmislm.github.io/public/page/4/index.html","82a3fc976996e728f2db07eded4bb510"],["C:/lmislm.github.io/public/page/5/index.html","2f3a3817c5971be879154158975fe3db"],["C:/lmislm.github.io/public/page/6/index.html","4407546b4ce628db81cead0402c5a52c"],["C:/lmislm.github.io/public/page/7/index.html","f7895d1dc7a16d693508786e9b86490b"],["C:/lmislm.github.io/public/page/8/index.html","49ef0d6df5e22d2148cad5e448e6c4d9"],["C:/lmislm.github.io/public/tags/Interview/index.html","d3cae7dcbd171b04fd6b6a53026aa347"],["C:/lmislm.github.io/public/tags/JS/index.html","2a58096998b40248cecb86684940e011"],["C:/lmislm.github.io/public/tags/acm/index.html","17ed0977b6d437914e098e58b37f576f"],["C:/lmislm.github.io/public/tags/c/index.html","31714d3df4c2db739bb25957e8a9a5ec"],["C:/lmislm.github.io/public/tags/codewars/index.html","b68f14156a56bee96e59c0c97acc2f35"],["C:/lmislm.github.io/public/tags/css/index.html","ae458700767a1e29a5862c0d874435c6"],["C:/lmislm.github.io/public/tags/git/index.html","4e7b911e7422582937895de5e43edba4"],["C:/lmislm.github.io/public/tags/hexo/index.html","02d423af3bdda94a0de9db3e540b6986"],["C:/lmislm.github.io/public/tags/index.html","8614aa3ec598c7f6ba97d8a2a30604fa"],["C:/lmislm.github.io/public/tags/markdown/index.html","129c0790b25a7e10e1a9e40b7eae7d63"],["C:/lmislm.github.io/public/tags/poj/index.html","1324cb714531e7ef7ee6bad4095273c4"],["C:/lmislm.github.io/public/tags/shell/index.html","b5c4e67483f7a1e14666d51214847722"],["C:/lmislm.github.io/public/tags/vue/index.html","4bdcf80298f1df1d2ce3757a9d98d518"],["C:/lmislm.github.io/public/tags/前端/index.html","22dfe6cacc2987cd3c034bf04f1cc620"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","46e452478904dd2a53f7c730f7975685"],["C:/lmislm.github.io/public/tags/小技巧/index.html","fb5761442ee26cc623bfb2a75f1ad7f7"],["C:/lmislm.github.io/public/tags/展示/index.html","583f12fbf79efada00753a646f344a90"],["C:/lmislm.github.io/public/tags/工具/index.html","d30d9862f8d3b4113e166372c48c6e68"],["C:/lmislm.github.io/public/tags/感悟/index.html","975f884fcbc245e38e593f5d116d9bfb"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a96fd59c9a7e0615c3a6eff09c9227d3"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","f80300b2a72bf60174b3306cd6a22c49"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","ce77216d3afa67038fa5109a4edce610"],["C:/lmislm.github.io/public/tags/练习/index.html","674268640e377858407483e6eba6aa85"],["C:/lmislm.github.io/public/tags/编程/index.html","cf074ec86cb4f2345533a5b166c9475e"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","d8d8af37aa94da416b1d2bf32934c37b"],["C:/lmislm.github.io/public/tags/运维/index.html","b3eefc998988f851fde99d15f2acbd22"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







