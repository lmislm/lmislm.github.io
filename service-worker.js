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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","9e4eafdd035c32a90204bb4af8c9cb41"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","05c598877815184d96b7b222abdc9ee2"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3c68aa61da3d18ba787d2cd12d038bb2"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2b39d0d8cd7cb1ad65a101407a828939"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ab8bc7b25edf4534c6f3aeaf99879f86"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a3a1ce3487d858dbc23fa6b31ec89a5e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","1e5402423add6035be5123dd267a631b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f6323822a919574bbc06e0f95c86a406"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","6c70ae264586e1a2483131f0b0338c01"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9a5267ee8cb7f08a1f6dd0e3125961a3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ac93da8d404491efbbef7470107d4f2f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f218501e78afaf9d88bef5800550828c"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3237f5607a74456cbcd5a88ef5e375cc"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8de3421ec1ebb7626a44843e03391257"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","4e3b9ee4ca697fbee6e34c46b5b2e126"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cc1b702e3bc57982628fc68f7c34a89a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","331c58cf50ddfedb641d529ff7cef1bb"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","fd69eea627352c58c9a61b4992d38ffa"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","ad1bb2278f927e946422754f2b39f30e"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2db80f10b5bc1492435b7482b14f5e88"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","51d08796e387bc5057d9544995319a02"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","86ad758225df457469848cda6d2d855c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","781ab65dd09143454a0bd86ab8b84c84"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d5c558939208693c580bb100716498b6"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","dcd7d73323d85c92f6c48f6d8b2cee01"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","84309e7b8e7df242e106a1c433df4e84"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d31857f1b5406a326aca0e833faca59c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","0228912f64a45c0c8d782ef3ae7463c0"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","68f204d409026860b99d018b2752cd35"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","041d7f442829d8c6e1a630ea96e8028c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","dcf93edb1bbd2e7cfbf8e9ff1c4d335f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b39a8fcbeb188ff975f643d97525f063"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8f41841ab11e4e1b2bd969aed094a67b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","58e425158b9bf9ebd7c5808cef2ef0e7"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2029229906c2d5a50bfed521f8cc1126"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","08f9878e6f035297cb8ce71aecbbe6e4"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b1145cc77ef40a5f31fcbdfcaeb4c4b6"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ecb07e67fe0c49824fc216d74c3a77f6"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5d351f1a8445fb551f6ba8305e5e17b7"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","8a7a690702ebc6f980f10aef2fad13c8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","22dbe0cfa0fb1b3df9af079143150cfe"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","29e1a5c8c7184bc69568de7aceecc60f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b84d295954ef2aa6eb15097ce6f0a32e"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","65d8a0d914f794e23d33d69c59bf0cce"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","111b83565f698fbcc59fc778cecc3083"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c06c076cffe0a204103384dafd6e1a48"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4c56b75e94fb441f744873e54185a7cd"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","345da2c41942b38fbbef8ee7b3b2ebc5"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","4fe643ebc3530f9f831d45f7b0f0b7a6"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9b3e7ffd72b233c50854f4999b5a18f5"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","bd7e1d891b1d70dabafbc5a559b1a5a7"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","085df243ef9febbefb84c317766d48a4"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f521dd4ae01e195fc52e22f40d7d5641"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4ff82beebffb35b694d09f482bfb0f8d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b0069db1e1fc52523d58ad0423394d23"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","63a27bc7d75783e200387a6795b08084"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","41bd03b2d728dbcb1553a8911c90f9ac"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0a9e1fb6032d5ed3d81e19b9c9a75b9c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","8191e43ab668add41ce615c48c0292b9"],["C:/lmislm.github.io/public/about/index.html","478db2dc415f41c6c95265f2ac1b1f1d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","208e58a91fe7df3570dd615226159b33"],["C:/lmislm.github.io/public/archives/2016/03/index.html","be33d50aad5117b0a4380b2701c993e6"],["C:/lmislm.github.io/public/archives/2016/index.html","efc425aa4481f6bf26608a8b682b0b69"],["C:/lmislm.github.io/public/archives/2017/01/index.html","5a53820bc7ba487d3957491caeb2458b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5af0a864b3b7550fd2e60592643c7371"],["C:/lmislm.github.io/public/archives/2017/04/index.html","8b60922ff4824690f5fc83c54d79d9bc"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3fc6379dea8176a441e8490178774458"],["C:/lmislm.github.io/public/archives/2017/07/index.html","3617cac5ae8aca10a1c9ead48560b146"],["C:/lmislm.github.io/public/archives/2017/index.html","a45d64fce8132d2aed2da98c22e46b05"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","26dbc3a39f80b34c6a2c29c98c2c36e2"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ac17e3f5efb177544be655600de961c0"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ce1b2cebc0a37c2867d982c93f11a1ea"],["C:/lmislm.github.io/public/archives/2018/12/index.html","54a096d3f2aa7e2167c757ce26260d79"],["C:/lmislm.github.io/public/archives/2018/index.html","e861763691161f23fa1fe1333d81e7fc"],["C:/lmislm.github.io/public/archives/2019/01/index.html","7832924b9cc99cc8933def54506d23dd"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","b910d75c4d462c5ce0129f51dec57983"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","9b8f56abe7c6a75b8c7d0179c9e761f5"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1b344dbb260107542cee401f4a807d6d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","03576a5fcdad09b6473b31c35ef3b823"],["C:/lmislm.github.io/public/archives/2019/index.html","97480b034c21cb26bf036f423d4c0adb"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","c2e5352b8c35a3ea8b53e7659952d231"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","5af50f1330cff3579c75b6bc75bfcac9"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","715784e5dc66608be5e6f3e155ef46df"],["C:/lmislm.github.io/public/archives/index.html","c2d6b2b1c69ffa3e694f02afd9a9f7a8"],["C:/lmislm.github.io/public/archives/page/2/index.html","576277c6b8ee80f3231b9baeeca6e4f0"],["C:/lmislm.github.io/public/archives/page/3/index.html","8f7425257f806043a3a0de8084c74107"],["C:/lmislm.github.io/public/archives/page/4/index.html","aa581f3902fb072b02adf352bc1a5226"],["C:/lmislm.github.io/public/archives/page/5/index.html","6a8cb65b7c6a19011ae6576301796d47"],["C:/lmislm.github.io/public/archives/page/6/index.html","c253b9b9143f2c0d1ee1cb987fafc201"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","29ed2d341a2420f883037d1d3e199677"],["C:/lmislm.github.io/public/categories/index.html","251134fa34860d4dcfc1d66f640e99a7"],["C:/lmislm.github.io/public/categories/学习/index.html","6a086b1a5fe1a41839714f5ea4f2398f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b189bd194c1a1dfa26eee44a732c8d02"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","384c0a767ffb6409900ef7fe27bc7e78"],["C:/lmislm.github.io/public/categories/工作/index.html","0b425daa4cbb08705317ee422c13eac7"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","03491cf82ffc27ba7eb34069c2482072"],["C:/lmislm.github.io/public/categories/技术/index.html","8ac44c7f5f104b7ce4de506363b5f21b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b8b2f3cf9d6a1ddb7dcdd51d91d30689"],["C:/lmislm.github.io/public/categories/生活/index.html","c8b917e08776fd7565507292afbe8a61"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3858e422e15a4a14b9d4eca57e69422b"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0e477ef54df602423053db1662a65402"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f8c3d1a730938c1de649f921cab6cde6"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7d1765a25fa86ebccaeb94c9e2cfa54e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","9c5eac149efc1255d8fd2d886c44205b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a385c44ed60801978c9dce9fc8d7120b"],["C:/lmislm.github.io/public/page/3/index.html","cf3bc7a258fc22f2191309bed26be947"],["C:/lmislm.github.io/public/page/4/index.html","52fe24cba96080360b26239013576934"],["C:/lmislm.github.io/public/page/5/index.html","2d23383f8c6f6605c85b1dffdf9618cd"],["C:/lmislm.github.io/public/page/6/index.html","6660212e9df63e5cd10c57278cd80c12"],["C:/lmislm.github.io/public/tags/Interview/index.html","a6330aadf693562cb0f308d886380ad2"],["C:/lmislm.github.io/public/tags/JS/index.html","44f692f92786ef45223d8a83a7214e5a"],["C:/lmislm.github.io/public/tags/acm/index.html","f64691a448007e8f63e4cb84a4c072ce"],["C:/lmislm.github.io/public/tags/c/index.html","3b5e23921028b2062af8f95d04489db1"],["C:/lmislm.github.io/public/tags/codewars/index.html","37e8a27a5d64b45cf759ca8bbfdf7e0d"],["C:/lmislm.github.io/public/tags/css/index.html","b6720fb493b7bce3a44afbee4903c5ac"],["C:/lmislm.github.io/public/tags/git/index.html","bc2976f2737e075501d301da027c305b"],["C:/lmislm.github.io/public/tags/hexo/index.html","f6a5b2466baf4675955abad4f92c647b"],["C:/lmislm.github.io/public/tags/index.html","85762d42c6959e5832d603bc8c6c3768"],["C:/lmislm.github.io/public/tags/markdown/index.html","cfe7cf0aa7e3b92bfddb3069f5047787"],["C:/lmislm.github.io/public/tags/poj/index.html","020546358aeb6d0ab82b1db8d53def92"],["C:/lmislm.github.io/public/tags/shell/index.html","e55209ae3e8e3290a079cfad1aaa233a"],["C:/lmislm.github.io/public/tags/vue/index.html","9390ce369a01db4fb061a4216eb358dd"],["C:/lmislm.github.io/public/tags/前端/index.html","e780e3a6016e0276db24031988779877"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e7ad5f32ba8f0357d6666018b82a04b2"],["C:/lmislm.github.io/public/tags/展示/index.html","859ad44544e0e23835f7880e35223c2f"],["C:/lmislm.github.io/public/tags/工具/index.html","0dab170afdaa64a329e1a37733fd0563"],["C:/lmislm.github.io/public/tags/感悟/index.html","f3c3bace70f2eaea74b052323d1ca0a0"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","0fda2826b9b472d566b052ba80861c22"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ae14c9cf843116cfe76321d19759111b"],["C:/lmislm.github.io/public/tags/练习/index.html","434a7cd6172f8a84ad60bf8dd1b856d5"],["C:/lmislm.github.io/public/tags/编程/index.html","385f1ebd082abc8c7ae582b11537d3fc"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","4401b374c48aba7db8d5ebd31dd80fdb"],["C:/lmislm.github.io/public/tags/运维/index.html","d03c4d7318bce6c2b3796e3bb9a0b5d6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







