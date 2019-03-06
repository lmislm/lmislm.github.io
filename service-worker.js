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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","1d82ffc9b50275652ba6f682dbf9f68e"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","0578b65ea10a45f11c912e3bacc0d8af"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","081499d891fbb4c690305f0cdcb4a199"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4c1e0a4b61b715e43d5547180d7a5e7f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0f2e4f9c37198f29c4ebaa0753da3141"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","45c6e253d150729ae5022ac6bdb1fb04"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6d44b013b6d6f24b83d2131d6e5ef51d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","349fd9fde6c4b6d1ea3d4bd8a20ba208"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","5e48f6d9dec96c6b62596d73877461a7"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","97d859b16c1be3c6ff2e0e7077edaaf5"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7573ec51e14b8a9a503bc22e5ac701cf"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","db43290c7f2f54bf091d80074274f4f6"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9e1ad4725cd486fca8fc4b35193a31f0"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e6da0c620fc3d5c8a87a5c6aea555908"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","05f8e4ccc8608742750116b23ff1584f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f48703ee85a8c625c3eb979bacc35f46"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2c1c09476fe146a6b6ea37d2b2e25176"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7e690f3bdb558e506fbc043ba469b909"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6c52b7737414055e5d81fad557759efd"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0bbb320b5343af626e2d3bec438492d8"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","8b9f7868553c243255e5b6a0cce9dd97"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a63bbecea52fefc2a7d4ded92deef6db"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1e9726acf74427ab26c4558e0bb9520c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","b15376bdb18a0aff310ec0cebd7572d0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c3702306155244da649e01083e44847f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","1b1c61c43dd2f1331ffdce5baf3f1ada"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f1a71757f6d5c6c51405c1f29d65de12"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","8d00faa985b4e8c81b388e45e87cbbdf"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","4e1edf26614b29a5c2cf736ae0232739"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9aca2c809ed68383b7d34a1f84ef22f7"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","4752371388c6679ecbd7528da262f66a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7d31a9306b632555ae52b338f6e2c091"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","abdc6ead1dde95127d6396f85b4c234e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","6b4d403d12c537813db7970aa9cc2f9a"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5913d23b23db598b77e89c2d4d5f2364"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","6fbcbf498e67d60c3286550056c350cb"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","e53cad3c3330f10afc536db98ba1e7cf"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8367afc12a72245a223f6c35a9708ee4"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0e1826261871dd264ddd3bf04a9ab865"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3434733fbdfe3bfe53ea77c91da2f2cd"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f6947be8a34c2aaf9d8c6793ff0d3fff"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fd0cd909700d7cafd408a86544274d4c"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d47488f87aa1a2db52886b125b1545cd"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","be801b5a32fb5941d47a32cd217d1418"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2c827b37c47b42e25182f23a9009aab9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","9fdf8295a2546c1aee8fe97068835cfb"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","58b5b998574eb610574deec0a0f4e142"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","371a380ad1b98d688922e5173b571b3d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","5c88684679d6615b91a33bcac4409498"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","8775b2030c717595cb19ed388b8429e7"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6a34e67f62cfa6c12a0e3633824ad8e0"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","6b89a9ada471033b02b189484b7c2bfe"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","7225b6f0aa05038ce7aa4a714d7ca96e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f43269e2164a045b54dccf4421dbc184"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","7f23dc479bc725be72afd57b9e75e96f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","81a3784bac27ddb660d17e68bd6ecda8"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e32c6b70096927cdc428e529ddfff506"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b76aa67da61aa263e623577cf5317a07"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2fc804b35d8d28412b7e826794c21134"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2162121ef35f73aa8a86ea84a6162df9"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","15c753449f52520b3a65f047d2214204"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","bcde467db918d53f81d7e4c0a08af804"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","d95d1e565aa57ed0e77175e58c52270a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","a1f84a2e8c8cbd715e13761308c0ff81"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","7edcd844af920c33a1d50b6946c50743"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","add457e5f9b61c52cb993663d9c57129"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","e436ac1c1083250284fd2905834a2908"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","dc68521ce2b3b2dfa6bf8bb6b4977f51"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","5112238d167afc9dcd863d76dc57925d"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","8835c17cfe9b0df9c86ae827a0692c67"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","8c8dc87e5acd424f8559368b936281ae"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","2bc2ede641bd7b5ff09b31cba682db33"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","ccf5732212265bb15c4d2756effab535"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","d96e5d52c0912d1a645f6a0d5df9e342"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","8bb92f1823ec2ef382eecead889b145a"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","b5d9dfbafba1a0ce163a0148fb8fb4d2"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","76e42628695d99cff5de89c39fb79cb7"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","a379431673b4bd9c3e79cd97aa1be7f4"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","cc2e634d7e1827336ae2a08aeb265af5"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","5100f05cc5813a720d5545e5d4ab99df"],["C:/lmislm.github.io/public/about/index.html","2d8dee710e3495d99cded721e4bf1cea"],["C:/lmislm.github.io/public/archives/2016/01/index.html","20740707f938aa0168b3b9946a758496"],["C:/lmislm.github.io/public/archives/2016/03/index.html","511162680e58c449a5658776efcc5bb1"],["C:/lmislm.github.io/public/archives/2016/index.html","05ec7c3bb3dd4878cc4b0c5b482c9160"],["C:/lmislm.github.io/public/archives/2017/01/index.html","9b5624cd1fc95caf161ab813d3ca9854"],["C:/lmislm.github.io/public/archives/2017/03/index.html","7bf328d304d539118b562f092771aa74"],["C:/lmislm.github.io/public/archives/2017/04/index.html","4b68c4fdc6c4b692354740f40365d6ac"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2b9a9a8eb2626bfebc8fba3439c87db1"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c136ff4b52e791a1cbafac9aaf86438d"],["C:/lmislm.github.io/public/archives/2017/index.html","dd07f54c5b6371683679d276f03e3852"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1d57b32663829f3d75c939f8f8b7679c"],["C:/lmislm.github.io/public/archives/2018/01/index.html","212707932506498c0c1988c6c29a6974"],["C:/lmislm.github.io/public/archives/2018/03/index.html","0c5a2d7da6101a30ceffdfd6e0bad210"],["C:/lmislm.github.io/public/archives/2018/12/index.html","85ee62f077596e6fd7ea2688e4793828"],["C:/lmislm.github.io/public/archives/2018/index.html","9fee95f551a64bea61149c64b4d45dc9"],["C:/lmislm.github.io/public/archives/2019/01/index.html","1d97038ff2b3af52702f8b234ae340f5"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","010804cae174b260275e6adddea603f8"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","fbd44db41902bf468b26e873a12d8455"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e0d2821b97396f82de687978b5b99b93"],["C:/lmislm.github.io/public/archives/2019/02/index.html","2dd7fc323e9563b60fc18f1e4153bbb9"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","c6f26a30d5b52662426a785542dc7d60"],["C:/lmislm.github.io/public/archives/2019/03/index.html","dcbbd659f58441f60d5329c9325a973f"],["C:/lmislm.github.io/public/archives/2019/index.html","65119499d7364dfa7157f129ed2ab41b"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9e9953beeee5db0d8e61dd76cb45f4c8"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","c028565b2cda806407f3c5f954c6f4a6"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","cc67825b1d08994fda4a58fff6ec11b1"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","394a2bfb02ae92cc755618ca37e95584"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","8be02814e8ebc3210addd8812ff2cd46"],["C:/lmislm.github.io/public/archives/index.html","52e417f6620da32e2350e60e461cacd1"],["C:/lmislm.github.io/public/archives/page/2/index.html","64feac629a689e2cc131ab837495dc26"],["C:/lmislm.github.io/public/archives/page/3/index.html","4b6771e0720a2e184b5dc0ebfd9d6c52"],["C:/lmislm.github.io/public/archives/page/4/index.html","e50b19eba5fbc4d3e1524366b2fc5a17"],["C:/lmislm.github.io/public/archives/page/5/index.html","5d64e7812be70e8ca755c6999ec97b0a"],["C:/lmislm.github.io/public/archives/page/6/index.html","3cd2bb3d2f6edc5eb9db066fb9b728a6"],["C:/lmislm.github.io/public/archives/page/7/index.html","0dae1edc9601033fb1754773ca12b28f"],["C:/lmislm.github.io/public/archives/page/8/index.html","6486deee3ff3e4b0f959fec74aa06684"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","952ff1a3dd4a20f480c556dc008a91fd"],["C:/lmislm.github.io/public/categories/index.html","8ee8d37d7d92bac32979949a5b94495a"],["C:/lmislm.github.io/public/categories/学习/index.html","5a82b7579e36cea4785b39e1c71662fc"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a06b167b9dac09f4926c28863405c216"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","3db14fde7b9b31fa4e98f2283d97126f"],["C:/lmislm.github.io/public/categories/工作/index.html","cb3790ccabe176549a2a55c0b1068ba3"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ee00fbdaaf9ef9ddfea32b1093fa8f5d"],["C:/lmislm.github.io/public/categories/技术/index.html","4a94e919684c8eaa1fc406074d173068"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b9b89f020e9a536048bcff769e0fe004"],["C:/lmislm.github.io/public/categories/日常操作/index.html","275f62da80f8967b3d2e562679dfebf9"],["C:/lmislm.github.io/public/categories/生活/index.html","bcfe5836c50cf856b43bbe3e4fb94f2f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1f23452160c6ebc8c82af0b4b501eb68"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","8d1eaffa9c51ebe1d6964c35a6f21fb4"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5cc1d855fb308b8a264e3200aa1b4c54"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3a91568abee846faba6f1e827099a61d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","602006a90699b9a8bcb4a139df587a5f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","4a6efa155a21307c8fde7ff11713ae0d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a2305732a36a009b5eb59ab33fbede9d"],["C:/lmislm.github.io/public/page/3/index.html","11567d9eaf7b4c931cb9446d1c4bd19c"],["C:/lmislm.github.io/public/page/4/index.html","3e6c5ddc8d5453bc5339541cfd839b80"],["C:/lmislm.github.io/public/page/5/index.html","413f12bf21957117285c40362a4dcae2"],["C:/lmislm.github.io/public/page/6/index.html","f825b5ad832319c351f299291b17c2f6"],["C:/lmislm.github.io/public/page/7/index.html","a1edd5260e70abfa3d6f7186a3c01b7e"],["C:/lmislm.github.io/public/page/8/index.html","d7a01a86d23ad1536d5b067065249471"],["C:/lmislm.github.io/public/tags/Interview/index.html","c733abe5c28c033147a87352101dd5a2"],["C:/lmislm.github.io/public/tags/JS/index.html","248548457aaf4ce110cf3359cacb5586"],["C:/lmislm.github.io/public/tags/acm/index.html","c8f03c756e2d542b45796f16ec5d201b"],["C:/lmislm.github.io/public/tags/c/index.html","2f0f5b63a5db101aa2b1af565bbf4db8"],["C:/lmislm.github.io/public/tags/codewars/index.html","a1d48486b483729fa8fee77b370bcd9d"],["C:/lmislm.github.io/public/tags/css/index.html","22242a2102f03bd0892fcb1c7890dd37"],["C:/lmislm.github.io/public/tags/git/index.html","e4678b91724da5a89d1f2a2067255ffd"],["C:/lmislm.github.io/public/tags/hexo/index.html","77d73e20252de8fc4d5f695b905701d0"],["C:/lmislm.github.io/public/tags/index.html","4d91bb2a888c0a4c07605d9eaa73711d"],["C:/lmislm.github.io/public/tags/markdown/index.html","be24f917c5fedaba8458890ebc4df835"],["C:/lmislm.github.io/public/tags/poj/index.html","60e6af8b5f0876160005e594f008c8db"],["C:/lmislm.github.io/public/tags/shell/index.html","065aff9337518b0b879b8612089b56b8"],["C:/lmislm.github.io/public/tags/vue/index.html","d75614e94010bf076d5801d8fb3fb1e6"],["C:/lmislm.github.io/public/tags/前端/index.html","2c9a87ba9dbaa08421f68e3384bc9f2e"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c83340919861a262986af2860acff004"],["C:/lmislm.github.io/public/tags/小技巧/index.html","1c995e4848d5e3638c9918a3b1dccad6"],["C:/lmislm.github.io/public/tags/展示/index.html","c2960a347d38d3aa63bb967edfd6c3fe"],["C:/lmislm.github.io/public/tags/工具/index.html","ba7b209f763b796ec4e832da8f48cdda"],["C:/lmislm.github.io/public/tags/感悟/index.html","b4d9654e7df60f6954355ea404723f32"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","0aca000e688c2fe51a8a2079f0884892"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","b7362e087cffa9e22fad6e1262bf9656"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1594a0bfd4f847aed1d0e62f05e9b6f9"],["C:/lmislm.github.io/public/tags/练习/index.html","d9884e220f2898d9509519cabe10e905"],["C:/lmislm.github.io/public/tags/编程/index.html","5f2aff99614be740abf784a96b553f7b"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","5c215a15690700be57f8ce590566d8ab"],["C:/lmislm.github.io/public/tags/运维/index.html","17809a0122b391744fe34ba99e32ea10"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







