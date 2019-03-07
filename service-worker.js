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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","30371050a9ffcceaeeee382d3e16a94a"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c3bf7e5b969c3cd5f2a15cd9486cf266"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5c1425e0ce6d97d7c58aad0adb7ff645"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b66e2df71ca4baa41c8df77977bd7d65"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c320b0186d06d11d23a0e1e4630fcdd2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","6efd5b98010497aee72396b48ed97808"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","cebb532d30222eea138ad88e3bb8324d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","0ada6bf637c757b405925dbbea13a209"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","58778ba8748f879948655f62b7860de1"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e5f89df04d97b61dbbb1b8de7ee49c0d"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","b69e5f7c4083e65d514c651b3d739770"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","410a17a6932186141533f8beb813e681"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","a4be68092663da0890641c52806ffaee"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","945a3e09f7ac0a7617c8f85e2c08e2d8"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6fff4e259b69565bf38af6601c53c3a4"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f4b05fedd2e94d7acbf062753d7674bc"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2148f4e98dd70cbc4fab75689bf71476"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7e37357480989847f85fda42de7bb576"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","8268acf5a6ff8c338724e0d00c2728cd"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8fef84d31b5c8a75a28cf0cae9df6c74"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","319db47c6d72b85aafaedbf2a4058264"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","22df62928f5af16c5be7217767822cf4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","db53bcf65628a2ccf1c5ee90fd938430"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ab40d1bc9d844186ad8a0aa336f46fdc"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","bb10c1e4ed8c2b420f8a84bea199108f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ed6b68d9b01c1bed7b355fe8a14d07dc"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","88473dbfa4298cd2d78a3441928177d9"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","65b81bc7e8c1dbc92f35a1f96d7dfa6f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0dd75a4e73b587adfe5d9fcd701f3821"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a2ea5204aeb3cf8f63078fd116b3b903"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","afaa5f271ece2978ac37662aecfc186f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","32951f7b5c9949c1cad9cec36953e5bf"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","60b212c12cb307ef7ef2dd1114b5bf66"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","6678a81ececd8130b49c8ea9bf99f6f2"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2a67bf4d1bcf64eb31c26c89613b759a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8d9a3adc39813aa4f77c3d12270f88a1"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","2b216743d2bac2d2e8b0d45e9b75e81d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","b35f969e1d25628eebfb5bd37f3cfd46"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6fb05070faa626f221135337567fce6c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","bb6116284689b1946449e4acef0dc5de"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","b895a777cd2563a7ee4a6fd73c92278f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","f5b993f4db0a3ff954e6c4eaecb3c6cd"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","edb2be1f948781615c66cf8daa5c9dab"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c6b1d55fcebf88421df31f263e59786c"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b564f39f5b1bdfd2ac7cce86d3642e4c"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","615eb07dc218ba6ef12691ef5869a8bb"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","682f7f6ad29ef954a84155faad33115e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b369f9bb1bfa1a92e103bed2f0cd0c1b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a967b77d702ba0a4b1ae9ca5e4eb7bad"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","4467ee87f822f924d8efec94df4d648b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","7a80c202320cc06ec9eb49b3ff1b3928"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d152787176fd970e7d5a04f82cdc07c0"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","a71e913b1ce42ca8e01ef00e5f8d6023"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8a519093624cf63f1f2b0ae687964a41"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","67bbec5e2478ea1942237d7ec091e7b4"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","7d6ecbbef461c38d5d69f4c618683197"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","881ba5da85397e31a53386d00cb6adf0"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","dd7d4545dcba76500feea38018cfd996"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","52372d0330d9f0529664ccd48eeb684b"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9d5a6aa2ba94a40141edb9fb64d64844"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","2d1a7175352671d1ca211f548a04f642"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","de5c4d8010f8cc25a2ea775d3904f879"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","1c186a206d60e8772f8a0fbb2f714a02"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","30652283a2b5090f4e46867b28bed69a"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","e1e715efd6eb26a8ef29b8c04e5cedf5"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0012b10d4f1d4744f93c0625204e7eeb"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","9f68d6b20febe23b9dcd6aafd083a6fa"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","3f31ee42f66a3e42d00d48f2cf8af96e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3a89d99f7fa60ed03d7a8ba8d556588b"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","a8450ae619d0223662248c31384859fb"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","1d0314b0155f82583ddea2fe0c80e192"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7d7737128bc907212001f5fc0b1216ca"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7ceeba78b04135bd78bfc72e7689b95f"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b28cafb36df7f38fd9d8661987154569"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","337bea43842aa668745d6f589c180244"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","363b13996e056b4fbc799792678fe029"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","22be8f04d6966b0d4a0eccba306fcfa1"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","1244664a7904f479a17518f68c7f9b73"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","fdb32f63307c66eb97ffefed37f6d838"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","4b7cff2f4139d1e6bfdc13a7966a019d"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f5438fa9e0fa9b85f5b7ef24f49578c6"],["C:/lmislm.github.io/public/about/index.html","491d26ab2c692d9c70dc996c0bc36101"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d35f304240b744fac1e63ffa2d677dd0"],["C:/lmislm.github.io/public/archives/2016/03/index.html","3919f5ed23badcd0aac3d247a86a79cd"],["C:/lmislm.github.io/public/archives/2016/index.html","f2a13484534863a34fd64aec69a75ef1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","722ff4bc5dd5fe57f1502305682d873e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","148d97ecb4409e75709f06487e06327c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","0b82c937315d7a206074dafea36926c0"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4226a5f029ba6e77bfe07f84d3649856"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b64d411cca5575a6042f9e46698982ee"],["C:/lmislm.github.io/public/archives/2017/index.html","fd056a511faa78dbe28fd773ac9d9223"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f53a3a7bb07339dee69e64f1cddaa5b0"],["C:/lmislm.github.io/public/archives/2018/01/index.html","29aff4377a9e3158a43a16f4b3be5292"],["C:/lmislm.github.io/public/archives/2018/03/index.html","3299aa33aa704636d819035ea0118049"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d62da29175156cfd714f0de8133c5bec"],["C:/lmislm.github.io/public/archives/2018/index.html","2c71607b46504b0752e906ad44f1a234"],["C:/lmislm.github.io/public/archives/2019/01/index.html","1f4855641872b9d55fa8e24f3059759c"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","306bd8ce02d016682c29907f77a3dd5e"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","43cfca476f4cb2051f05a025fa9425fd"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","0c22f6eb7bc29b58198c4b6076b54415"],["C:/lmislm.github.io/public/archives/2019/02/index.html","ce6215ac65abd1cc61b45ca3055f314c"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","26998b98c9d374e71031f857e9f71bd3"],["C:/lmislm.github.io/public/archives/2019/03/index.html","0c4c5a05700e1236c7f0f778bbd5b53e"],["C:/lmislm.github.io/public/archives/2019/index.html","127c21fcd5d78b9e4123d341abb49624"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","3fdc925f5bd43dfd63d4e73e9e114602"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","805a43be0c6ae9c0cc7041e6580638b4"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","24f83f1ad5eccb48c114e05404328175"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f4c402cfbad52315b56a7abd73244bbc"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","19bfec56c32b73a682ee1cf9f045c6be"],["C:/lmislm.github.io/public/archives/index.html","f41d811f50efc826d833fba1e3ceb84f"],["C:/lmislm.github.io/public/archives/page/2/index.html","ad65a8302aeb28ac7f30c43c32bd99ac"],["C:/lmislm.github.io/public/archives/page/3/index.html","549d69374deae2df6c3e0ac0ede7e6b5"],["C:/lmislm.github.io/public/archives/page/4/index.html","03e74de40d13679b4c5f517957772b74"],["C:/lmislm.github.io/public/archives/page/5/index.html","4d6c395e05a42d801a6843f43d009233"],["C:/lmislm.github.io/public/archives/page/6/index.html","8556f6b48e4ee8f3175ba14dddcd6ac8"],["C:/lmislm.github.io/public/archives/page/7/index.html","ae058b5724011275b1ea1dbe2bfa1f58"],["C:/lmislm.github.io/public/archives/page/8/index.html","9db2e422985c60d6e1506188ac267806"],["C:/lmislm.github.io/public/archives/page/9/index.html","73d80f7e30669bc9470b4bc26bfbbccb"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b1e67b477291ba13803b7a6caf1cc6a5"],["C:/lmislm.github.io/public/categories/index.html","263f1d2d080a36fc35481831372a6b90"],["C:/lmislm.github.io/public/categories/学习/index.html","6da850119ce2a5d7446922ef0c259c39"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9ec8ed95a501045d2dd1a8b631cbe313"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","01cc1f27bfa2180a4451b21a05470714"],["C:/lmislm.github.io/public/categories/工作/index.html","3b639a2931ff275a5c6188e07cef2d9c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","adfb1ff017081e22bc263db9fe485e5e"],["C:/lmislm.github.io/public/categories/技术/index.html","5084343dbda437d66d33738e78cc0595"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","00db9cab4a256c2983ba4102e379e5a1"],["C:/lmislm.github.io/public/categories/日常操作/index.html","60877c014db52dd54dd5f9d54f77e679"],["C:/lmislm.github.io/public/categories/生活/index.html","301ed3456e57b9aa90ac29cd15b82bef"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","12308b3136f503acdc6a8914aaab206f"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f0b5693415db6d65f342395db77531e3"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","86bef77fa59ee7621ccd1a4b28daa0f2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","be233e5ea6887f2cee8c05f770a800d9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","137ce6b98d911cf3506eab787b5247c3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5e4c52d918b3b81bb1402860dae632af"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","ecf8d16f7c4a63f72fc46575f9fcb23f"],["C:/lmislm.github.io/public/page/3/index.html","93e8493ea898a89941e90eec8db16c4d"],["C:/lmislm.github.io/public/page/4/index.html","2c26569d59f9786b7471494cb9f55aeb"],["C:/lmislm.github.io/public/page/5/index.html","d8e587d7063bc14705f92c81bb5b3bbe"],["C:/lmislm.github.io/public/page/6/index.html","78059dafa4974f4918ab23301d440b31"],["C:/lmislm.github.io/public/page/7/index.html","b3c13dc184f470b70b878c81b87c7af1"],["C:/lmislm.github.io/public/page/8/index.html","205e42abc9cfbc71925676c5b85a3267"],["C:/lmislm.github.io/public/page/9/index.html","75baa1deb8bfb49e96c3060c74b1b976"],["C:/lmislm.github.io/public/tags/Interview/index.html","919185d62efe501ffafa0f0cd608e31f"],["C:/lmislm.github.io/public/tags/JS/index.html","7fe158a175082e4607deed5fc9be1813"],["C:/lmislm.github.io/public/tags/acm/index.html","79dfe468ef1af9b8286143ead727144a"],["C:/lmislm.github.io/public/tags/c/index.html","9757747517127448e7e832a267a2afdf"],["C:/lmislm.github.io/public/tags/codewars/index.html","dff1f500ffef7d8ec155c8767f9f420c"],["C:/lmislm.github.io/public/tags/css/index.html","31a89620d7a4c1dc1797de970fb51b6c"],["C:/lmislm.github.io/public/tags/git/index.html","19b186bb348a930d3160924503d27c75"],["C:/lmislm.github.io/public/tags/hexo/index.html","599d3c5a0dc307c893ba18484bdb8e54"],["C:/lmislm.github.io/public/tags/index.html","29c325bcf8111d215d93724688db0c8b"],["C:/lmislm.github.io/public/tags/markdown/index.html","317609ae0e349862b0b22b78aa24fa07"],["C:/lmislm.github.io/public/tags/poj/index.html","f09d7a0418bb9ecc5b0b28567f8786d8"],["C:/lmislm.github.io/public/tags/shell/index.html","e783bc8a5d2eae8a816c1aacdd8ef028"],["C:/lmislm.github.io/public/tags/vue/index.html","d6c1c6b756617013d00c5a7362359afe"],["C:/lmislm.github.io/public/tags/前端/index.html","1eef620e897a9d5bc3b7ef33c4c40aee"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","157c4d913b48e34ce87e39991ee4511b"],["C:/lmislm.github.io/public/tags/小技巧/index.html","20a2117c406f82290912877b4061efb2"],["C:/lmislm.github.io/public/tags/展示/index.html","3cee6430a5368a035987b012e984f3e4"],["C:/lmislm.github.io/public/tags/工具/index.html","fcf70bb67d9a853c1ab3406c9b6acdbd"],["C:/lmislm.github.io/public/tags/感悟/index.html","76fb07c1a832d50406cade743e6c5556"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","74a2f6aec80c390be02c6369be320ba5"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","564ba99b8d8af8820edb3de475e71a66"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4984a155c8845e6aed5de9b3ef0b7e9a"],["C:/lmislm.github.io/public/tags/练习/index.html","3bc01995368bee135d951df57c2d8215"],["C:/lmislm.github.io/public/tags/编程/index.html","846dc0629acc53c3ed3cafe6099315cf"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e4a4bcad1e10ff3f7c536c80f463e9ef"],["C:/lmislm.github.io/public/tags/运维/index.html","092ad7385719ca5aa30fc4c522b2be29"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







