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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a798efe0e92731877822d081a2becbf6"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3c0ec056631666664357059e7d7f9ebd"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a834a09e54374faa004a745c684a69e0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","af6cb2d95e17c0f3805c0c1fa02f51a5"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","bd8446906c3c4d34f66753d94ae325d5"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9938130be44560e745545d3f9ab436a1"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6d36fe5a771d07c8f798bc4eaedae712"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","ff1d05ada577d6ca11c7f867c7f9b482"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","15684313303c58a2c90da445f27ce9f3"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","89866af3df011e2b4d77255f32adc121"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8aac0e18bd05618cce30829198ba75d7"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2e856dc868ed4cec066bb12a4294e712"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f1eaacc62f5376f87360f728d84694ab"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b2713b69dc6f03f1da15eedf700f5b92"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","b5b5482fa6be8f7b42c75cf145933f4f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5fd4cde9a2c53b624ce66d40fcbae832"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","7609452b733c18fd6df82b9c3921ad18"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8634cafb838c58182c945f69d860ea16"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","21d2770e8deb5e39ac2ff4d5a67620cb"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","30c9227a8f95913932e4f16d9b120849"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","dcf06e212804822029ae2f71d1114e11"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","0998e52b82519d4ec2d740d34c5941ec"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","d5c246cfdaf65ff5a7250e061deee17e"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9a81e19f5ffbe09dd1b3b72c7361a37d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","68d453eb29ed23525f99211405b67608"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","1bd56560cf949f4eebb15867e2a7ef11"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c2ba0013f2ab96dd7e9f513a39b54965"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","0f5236c17c8394217d525bb1c556d551"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5d333794a1d956098cb2bd959e5ba3c7"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0b5dccb38bc17c257b0c366f9b9d3fe3"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","6ae131942efe2455d191601faef7d2c6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","c31ea1392eb463fde10741ae19240a55"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ff9d4310a8b2fb647aa1489a64cc89eb"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","18473dff1c807d3c4b4bc3a37fb0d944"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","1f3c8d6af5b9facdb839ccbf1029cf08"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","edd86cbdfa5a0de5fc1daf7b6cd12d01"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","feb6de739644307588fb247bbcd47c60"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","993f90e3ab932183687f03142fcd3c97"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","c1bb599598ce205b48488757dff6c137"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","66aa8f7943f031ca7c12674930713a4a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3edcbbbbb244cc01d8eaa50bcf5773ac"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","6b73588c01936a89b3912446c9a85d18"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ae0f7939ece3e2e534f04e7693b15b7f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","8d686200d2f02cac6b1a02e13edd4e33"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d2c04d04c83eedd1c9604cc316c1e383"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","ce31ea352111fc8b9345036671f051b7"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","8b88c9e604bc7cd8584f44cb6afe496e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b9276f995c1ae2f4b7e6225ee3924db1"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6754894a3c15bbfa58b59aa4c197a079"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f20bf071d24eba119ef0ac9ab0325a04"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","83d7e78a5fe55355618b7ae2b904da8e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","067d9ab8284bdbb825438328b56b0378"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","ac6f2199c14875b7fb752845bb0bafed"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","515058ad17a6cc0a64f4aad0cc1c9762"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b9422894b4a8408e0b7abe3bc58a4a15"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e535873d60beec594b46d62160cc00cc"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","23e395f78d06ab7f4a2a90843acdc225"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","02b15069aa6982ec44b16d0a5f0d2f87"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","9acfd79313739db7f8c9400511c8ae4c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9c668e5ec17c6e25b5e40783cf1964f1"],["C:/lmislm.github.io/public/about/index.html","59962f5734cd3e2f54ca214c86f3aacb"],["C:/lmislm.github.io/public/archives/2016/01/index.html","e526c854b868ce92eac3b04ebef7a69f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a5ad4f575d4c33758dbef0daa3bdfd93"],["C:/lmislm.github.io/public/archives/2016/index.html","43cd58e0f9026149f1d99379cedcfa9e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","5af8930a2eb477cd907c7c165ae5293e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e8c553d7846439dc1e76350d5042ae56"],["C:/lmislm.github.io/public/archives/2017/04/index.html","89bbeb3f23ce17a127ff9f3e9a039d42"],["C:/lmislm.github.io/public/archives/2017/05/index.html","7a001899fa6d4ac9fbaa089e819a9ca1"],["C:/lmislm.github.io/public/archives/2017/07/index.html","89377910bfac5ad10f4402110244e101"],["C:/lmislm.github.io/public/archives/2017/index.html","e5d41d5edb63b5f0bf15ed725ba137c8"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","cccee0bc96e423f1f0d602c87c801c9e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","37ade1884eedf32504c3f434cfbf44da"],["C:/lmislm.github.io/public/archives/2018/03/index.html","6ea20bfa35ecbcb01e9b8871b2579048"],["C:/lmislm.github.io/public/archives/2018/12/index.html","15ce10438c96db40ff5c2606eddfdc67"],["C:/lmislm.github.io/public/archives/2018/index.html","4fb22e898be99607302b068bac5c8659"],["C:/lmislm.github.io/public/archives/2019/01/index.html","1df750f8888973f65d17906e6af0e316"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","181d862a4a69f76da08928729daaa839"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","c4de8f60c84d98dc9394361620b0bf5c"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","c7e9b22cef491bf0bac6ba98f49dd4c6"],["C:/lmislm.github.io/public/archives/2019/02/index.html","65a2762eeb176808965445c583487fc5"],["C:/lmislm.github.io/public/archives/2019/index.html","a0b2c9a2601079e4a4da2707019446b1"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d7961c3b238b8747c93c59b557c3e8e3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","691c557e2ac68ed665163d0db8857cdb"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8e81fcbc0d9890ead5bfc0d3a433af71"],["C:/lmislm.github.io/public/archives/index.html","ceb9d04783e32ecf62f9352a02a2aa70"],["C:/lmislm.github.io/public/archives/page/2/index.html","473824fe38644dd473e096273d96748d"],["C:/lmislm.github.io/public/archives/page/3/index.html","1814110ebd5dbf97e906e0678abca92c"],["C:/lmislm.github.io/public/archives/page/4/index.html","3be14c0396b9134d806b5c4dbbf1bbed"],["C:/lmislm.github.io/public/archives/page/5/index.html","e8aa4a98e4f2ea4b23ceda8b41b249cf"],["C:/lmislm.github.io/public/archives/page/6/index.html","c79ea8ba3dd029f7a11fc9a305b15fd7"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","978275d43c982fdbb384d62c6acafd86"],["C:/lmislm.github.io/public/categories/index.html","a3302bdf59a41e18cb48d99601c3758a"],["C:/lmislm.github.io/public/categories/学习/index.html","1d1860c9d114b233531a9ce0a563711c"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","7d99f0f516d51c3a9d41b4570c35fd33"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","fc5dcd80956dbc45d1ef52fc6b00e04a"],["C:/lmislm.github.io/public/categories/工作/index.html","5fc4c05e5c815556d7ce34500cbc7fae"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8f0f03b8347d7cfd0c9d9e843e810ec3"],["C:/lmislm.github.io/public/categories/技术/index.html","df2ab399709d622763abfdc49be22308"],["C:/lmislm.github.io/public/categories/日常操作/index.html","11fc5c907735347b4405bdac8010f914"],["C:/lmislm.github.io/public/categories/生活/index.html","e875c8140f2f68509032d021033062dd"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","777304c7aa460f67f6c507dadf0c8284"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","65492c6413afc338305bfe04efa7da96"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","91016a63d0deaee64707460117eb4b7e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8a4c2a2f6d5cf0ef48517251021457f1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ef451461c1b84309ae8ec401ca50188f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a80830f678ad82e466e79c66cec61927"],["C:/lmislm.github.io/public/page/3/index.html","8f1a49b15f612ee4693ad93deba1e078"],["C:/lmislm.github.io/public/page/4/index.html","74a7f80c0abb19a0869ab05db8358112"],["C:/lmislm.github.io/public/page/5/index.html","83130269a18fea186239c45abe8fa9ba"],["C:/lmislm.github.io/public/page/6/index.html","9326f7efc4913a4051e79ab6475dc1f5"],["C:/lmislm.github.io/public/tags/Interview/index.html","b8ffa34c80f229e9cf11dc62529d00a2"],["C:/lmislm.github.io/public/tags/JS/index.html","fc85bb1ec6fc5d52454d78c78b3d0770"],["C:/lmislm.github.io/public/tags/acm/index.html","2ce5a8f5086ca9b397d816a80504e3bb"],["C:/lmislm.github.io/public/tags/c/index.html","5ab2fbb20c256050dbe56b5cf2ac9dcc"],["C:/lmislm.github.io/public/tags/codewars/index.html","6c653c881c85d3283c7483983d9edaf3"],["C:/lmislm.github.io/public/tags/css/index.html","add4550ac404f82ac0976ecfcf4a688c"],["C:/lmislm.github.io/public/tags/git/index.html","193282e4abf940c784e1ccc1d5ae9f75"],["C:/lmislm.github.io/public/tags/hexo/index.html","1521b096f0010c6dd6bd5c7de5c02401"],["C:/lmislm.github.io/public/tags/index.html","a6da7ea0394d84b99830d236140a3ca4"],["C:/lmislm.github.io/public/tags/markdown/index.html","e2541f5ee4671e661efe8f7418aab648"],["C:/lmislm.github.io/public/tags/poj/index.html","d14e6bb788f66c4cbe48f638fbf14f06"],["C:/lmislm.github.io/public/tags/shell/index.html","d53b139a2e0ad7caa6a986d2160b0eaf"],["C:/lmislm.github.io/public/tags/vue/index.html","19713859c4a11eadea3e08c791bf4334"],["C:/lmislm.github.io/public/tags/前端/index.html","9240f24c186dab8e83dc9555cc8ae288"],["C:/lmislm.github.io/public/tags/小技巧/index.html","03cb8757b8fab5623cbde15e3b9a597b"],["C:/lmislm.github.io/public/tags/展示/index.html","0743f2ddc412b8eef547622d31fec739"],["C:/lmislm.github.io/public/tags/工具/index.html","47f4b03407fd1c6a3589978e7b324b2c"],["C:/lmislm.github.io/public/tags/感悟/index.html","eb80e6ec199df56ceca6821e613c227f"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","7c3f3edfda9f875a858227700df94982"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","e6c4ec487b9454a11239116ce1475f5c"],["C:/lmislm.github.io/public/tags/练习/index.html","f7d08b96cebca080a696b009d06b7e2d"],["C:/lmislm.github.io/public/tags/编程/index.html","7c796a7a7adea4f5fc762bda899a663e"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","37191c0030110979ee6c2ce074c8e2fd"],["C:/lmislm.github.io/public/tags/运维/index.html","653e62b005c091fa992821c978c1cef6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







