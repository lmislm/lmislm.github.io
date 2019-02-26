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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","789ad0c43041032e42ccdf204c485ca3"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","6b2bff289a8cfcdf066464fa582a4918"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","95e5e0665ae0a86d2a65e9743388f2ab"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","37774e305a9c7948e2c3713fa9176939"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1ab489e8bf284f7f4c3ba50bef672cc5"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","3d1b4b883604cb9dae4d80837f200d06"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","03c4f1493e12ac8c20a5ee5330ab0628"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7399198443d7c359bcca09132e30f80b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","634a41cf428ea7cbf5f193901320349b"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","51c2a4538a132fda63660fdd6f87f8c4"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0bbbcb30bbaf93041fa3545043ffa3f3"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a7464de6bb6f371922d30eb351ee5ea5"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","035fde5f2fcb6dadc221a9a1a5572129"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f30f72d98e9fa27231ffad21b0e4b0d3"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","c647450ede472f38c7ef969b07fa9047"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","09f2dff56e430c132d48195ef8a26ad2"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","32195cccba3ebc31ae416c2383a672a7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","71cbea37a783517d2589430c1c4f7885"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","724b5c19fe503e3e3b70ab7feae2406e"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","547ae571f4e9009614dc5c24ff74954e"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","91d5716acdfee68e1d36d927aac4afb6"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d0e3232ce6e9ae9ae0eb0ea4578a8693"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b39c8505705ae567aff9a8805b25741c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9d24424da3eb1c7cff2ea88cd94933a0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4426700f0fa713b8724f85fd300f52cb"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ca22bb539856979a8338f835a0f0b875"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","1ddf2d78218d101ba99ebd8c0d9b8781"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","07fdb7d91f9d7ff22bddff0edf744296"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","bc676349d99e4f35c7d0263aa4a7d187"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6a6fd7e91eec30501274b1570f84c118"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","f3fa179f300c180c4d08af319c64927c"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7d62a5372c2dbf2e0ed702364b2c3d71"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","750b6e7b7c0cfb5fcfb469d49ace09f0"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","49c3f54ebd5bc688bbf2f07e6c115d0b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","024ac05aa32562187389dfab9e8af844"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","4eaafa9dd1648c3faaf74862d6f7e2e7"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d24d4e9c01d9c183eb037a134bc0e7d1"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0d4a8328b4fcc6706624750c9370e1d7"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","55e24c305e11fb2381401677ae48a5eb"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a09851d78147c91aaec927ac916667b7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","5ad5748e68b35c34152755593059f81d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","aa1ed90ce32bedbcc4c261e6f75e445d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","1536f9fc9c8753107d83c8a65bfb92d3"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","fddc0a9e57749a8267e43967cfccaf7a"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","161b63ef8d79c46e1f413bd99b981cf5"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bd4c5f8a6c3a32676ea931271d6b553e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6817c88d7be387913e4ffb9dd60e2ef0"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","272b61da4502035598db57b199aa2c14"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","512ba4e3b4fc13726fb88ff0bc501b8a"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","3ad2107f49fdc385080b2e88cd589431"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d8fdec94bc9ead87f9fa3f48c5e08082"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","37d95fe804dcf9bd3f605aa2a9ac30c7"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","3d277d2186492a4b8288bd9f4601623e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8534b9ecaaebbb4ec78093396d479d59"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","586c6d93e63f1b9679276ad9553ece9c"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ba2587bb6d9360c5aba96e8ac0943711"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9d65b6d95f3a082ad056ad1962b8e91b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","cede1565241a976a3beb429a32ae0f39"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","6f31d05929e1d4970f9316d6f8316064"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9f3f5af99d617866f2976af8d5cac15f"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","395b268c3f5d3f77e654d267d80d5ab2"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","5b9f6b30a2bdd88eb5cbb36228659db7"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","b43939d92f4252c3603f21c3948e456c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f2406d3157149919eb5d8947a8afcadf"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","963e8b6dded6486d14bddd90a0df14df"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","637c4f8a2148b92c5a5407b9d1414103"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","a9498083bde62c550600f636a35b3e23"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","68e9f44d3b7c59c55a88fc3d450e3f32"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","48ab6c031f982bbd755efe30bd4d6aa7"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","832508947008b87ed57dfafacda164f1"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","98c55c39e4e3eb5bbe5d8690584814dc"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","419707c7d1fc8c049f38a0f8bd31c97c"],["C:/lmislm.github.io/public/about/index.html","d5a5e536fc542a07fa4ad08138e61a93"],["C:/lmislm.github.io/public/archives/2016/01/index.html","26a25a2001a2f13e92a418a2554abc2c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","0d1d10969756cb905b7bdcf6a66cebe1"],["C:/lmislm.github.io/public/archives/2016/index.html","906dab8267189be684df9b31bd21f034"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4ce0dd12f2518ab97f56584329afe195"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b5caa8af5a2a603c606e5009b2b6b883"],["C:/lmislm.github.io/public/archives/2017/04/index.html","23668192d5ea1e214c6593178f041770"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0a258052825b66c21ece7c51ee1cba9e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","6460c27513dfae3d5590a268968c04bb"],["C:/lmislm.github.io/public/archives/2017/index.html","cd0f6e599f6dc3e994a1ea91787809bc"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b32f4158024f2ae889fad9ce9a0fe77e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","a3c5af1dd582186704f24512424ff14a"],["C:/lmislm.github.io/public/archives/2018/03/index.html","bbd996810925017c275f90c800b6679e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","89d5cf88e5995f3aced1ab7b4d6c3bb2"],["C:/lmislm.github.io/public/archives/2018/index.html","3430cc2dea9662c5c89d6a4b271ffd62"],["C:/lmislm.github.io/public/archives/2019/01/index.html","6bb1d537ebbde73046d0fac76566e1a3"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ff7cceab7349b4054a202d008051ae03"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","e126ce2347dfb2b70da32621bf0e5952"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1380b019fd857ecb170522169d697eed"],["C:/lmislm.github.io/public/archives/2019/02/index.html","08e0e7c87b5d8f26630266bc5a7d8aba"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","55919734cff9ae1c3df8579db83bcf34"],["C:/lmislm.github.io/public/archives/2019/index.html","5b6df26d5a700cae44ac71121894c320"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","c07d2eac4244d3cc320ba81372c7d68b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","31ab84c8181bceac4f27ba78b0c7443e"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","e0c2031409532ff1abb034bc10b37963"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","dd24306b849e5fe6b1d697afc6bf05a3"],["C:/lmislm.github.io/public/archives/index.html","9a27a1785bf8c3569fd4bb5a5eed9e2d"],["C:/lmislm.github.io/public/archives/page/2/index.html","73bd4b78fc5ca032c46b77a7852fae1a"],["C:/lmislm.github.io/public/archives/page/3/index.html","eaf31c10ed0a2fd6bf5f1d377aa8f79a"],["C:/lmislm.github.io/public/archives/page/4/index.html","ee5a57531a2f4b516ea4f5fe423849d8"],["C:/lmislm.github.io/public/archives/page/5/index.html","a61e783a1cc8ed4e0339b1f93bda8670"],["C:/lmislm.github.io/public/archives/page/6/index.html","17fd1eb38cff7932b0c803b3afb1c212"],["C:/lmislm.github.io/public/archives/page/7/index.html","247c92c11ed0226736cbdf82e4a2f96e"],["C:/lmislm.github.io/public/archives/page/8/index.html","5e74d3bf834f0b6f682a152abfc3c40b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","44013712a51510af3c379b8e3cdde0ac"],["C:/lmislm.github.io/public/categories/index.html","27c072921e3fdb89101f0a84e4af4cbe"],["C:/lmislm.github.io/public/categories/学习/index.html","ce43180702e2fed8b43f2b72767de740"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f34cc8239fd13339e3a5427bcd6ff3ea"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","9edf72bf83d5481f7407b39c612d8e78"],["C:/lmislm.github.io/public/categories/工作/index.html","46913152e4f170633377cae3185e18d3"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8602b1b3493221e87c4a2f4f4b902bff"],["C:/lmislm.github.io/public/categories/技术/index.html","1f357c5a15f7417e362284c2c3a82bb7"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","081678d56b278962ecfc30f67dbd9401"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c6b2ea6904cdd6f258f23563b965eca6"],["C:/lmislm.github.io/public/categories/生活/index.html","881f0686a57c12bcbd226dbaf9e586ca"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","97ce7aeab701bddb3f5a3f9bdf79fbc2"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","cae33a27a124c7fe0d236a82cc7495a8"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","0e74c577279be9b7b5d46db8ace27497"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","93d763b314cc0fb5ef7e765f8ee7a469"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e148842f1243271bd063e1e1b77d1ba5"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5c54f897c801a76fc78b451bcd3e4312"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","2c06d6fc505d77b917d5f6eb787a9ef4"],["C:/lmislm.github.io/public/page/3/index.html","c12090cba8cee83a9e9580ab2432f87f"],["C:/lmislm.github.io/public/page/4/index.html","7a7b5ac7678062040af7e8f251ed0708"],["C:/lmislm.github.io/public/page/5/index.html","e0fce81384a81a54fac5640faa21b4a0"],["C:/lmislm.github.io/public/page/6/index.html","13d5a58292d3c1a66e6eb767e1d2e345"],["C:/lmislm.github.io/public/page/7/index.html","e0633c18802c1c0ef8efbb1ee9e7d721"],["C:/lmislm.github.io/public/page/8/index.html","2c3e9e7ddd5a5ea5201af4b62d4510e7"],["C:/lmislm.github.io/public/tags/Interview/index.html","8e7afc6392984545683d9622ce7f6214"],["C:/lmislm.github.io/public/tags/JS/index.html","80f2b3968ba9a72e24b154e912154f3c"],["C:/lmislm.github.io/public/tags/acm/index.html","1dcdbdf0791609b040e227dfc2f3581b"],["C:/lmislm.github.io/public/tags/c/index.html","55b466b7e2c5af2afb90b5496b8b16cd"],["C:/lmislm.github.io/public/tags/codewars/index.html","97a78d93f963ea02bf8bbff8c3902098"],["C:/lmislm.github.io/public/tags/css/index.html","569ba90ccc35cc8a8bacb4ac038edad5"],["C:/lmislm.github.io/public/tags/git/index.html","c30683a5eedfedf88c814c6f21c00d7c"],["C:/lmislm.github.io/public/tags/hexo/index.html","b2beb651a330d01b9eb72470fe2e63f0"],["C:/lmislm.github.io/public/tags/index.html","85d51372098ed1b159bf0e0e126a4ace"],["C:/lmislm.github.io/public/tags/markdown/index.html","f173cfb141ae19a5e7ea26cd314aa027"],["C:/lmislm.github.io/public/tags/poj/index.html","d2956f06ec278391633289fd8c36297e"],["C:/lmislm.github.io/public/tags/shell/index.html","7d78fe93031e8515dbeab3262bbff289"],["C:/lmislm.github.io/public/tags/vue/index.html","4358d71dab8b9d8b4aa5db618dccb8b9"],["C:/lmislm.github.io/public/tags/前端/index.html","5187eccaa210bb713c4db95dbb0b73f6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","1662cd2c43a67505fecabfac46deff11"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e213a32519809f5fec73922439b09e4c"],["C:/lmislm.github.io/public/tags/展示/index.html","5399c735485381fabfc2291f5a97dd05"],["C:/lmislm.github.io/public/tags/工具/index.html","64cbebf7dd2a25a55957c5b65fddf191"],["C:/lmislm.github.io/public/tags/感悟/index.html","519033697ca351a7bd9e967b95a79804"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","bf9d4ab8e7c5e0967bcf42f8a8653722"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6cad1ab8872e34e73e515cd9f61cdb92"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b0f205976f2a25002413c76a6d8883da"],["C:/lmislm.github.io/public/tags/练习/index.html","4b009cb42dfb4419095eb07fc52223cc"],["C:/lmislm.github.io/public/tags/编程/index.html","1513a79574a03407eb8aa7bcb4765a0d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0aeca9726261638a7deeb385e116f4a6"],["C:/lmislm.github.io/public/tags/运维/index.html","b7706b3b8ad51cbb3c738b03ce38709f"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







