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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","469e6d86859aa86cb5957829c8e4b3a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e70e5f2e079974676944bbdabf824717"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","8851c03b8b5c026dc90ca4567424548e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3a19dfe70e32dff56e87938aadae0fc3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","8eb1719afb77ee5cb3970c37b074c79e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","1928185d7bb4bfa564c27242ffb3011a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8be5a0232c1a4e8621f0d87535acbd15"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","3a82061cb89353b68f57ee78d45d4fea"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","725d8fa640d09cb2a9af9ebd24d6b5e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","67e7ed6cb12abe379f38b1a68f055f63"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7a4abb99baf7aa246d084b907dbae63f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5cd172111829fa55432e4ca81f32b4db"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e5e29328dde771182478c9e7da6adfeb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5d19571b67445159bea56ebdb60cf345"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","084c56fef9d72593c3ebd0d6c145c2d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","a9879e9052a9aa51367eca654f30f0fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","de277955a37e6993f036e0194e3d716c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","608fe040e3e8f434c723692524aab815"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","67fe451717ef8c86e93f29ffb89fd7e6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","0d18018cf0682593089efb7f534ffcbb"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","3abf02169bf533b7cffb4ef8c4cf58f0"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","85c7f8757dec2b7111bbc8a42ad6841c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","90392699fc033a61a8e4b01766dfe109"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d12f528dcc2607e64e5ed1f58bcbe1b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ff6707f6b9b3b1b52ce5eb78e38d9d51"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","8628dd29840a1ca028e5102122998e71"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","ff434b8a30cd343db965958b6e1d5944"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","87e38b2dda88b4e0b2a8d0fcff402188"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f0bfd6dfb2c92c150ed3f55277687c3b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","0a8db8bb45548069ce6ea8ee3da5cc1e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","fb605df9637820b69750853aff5fb1a7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c5ce3c80fee3ac35e226da68d675888e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","841de9a7e4d445d4d061b597f954cec6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","07981f284a9b9482498927b4cceaeb55"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","30f486381486318c13965f9f87719a54"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2fa7cbc019a939b1d80b2eb57ab00757"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","59af9c5ea1e08a800fe5cec7aff50f76"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","89f04a917979d3c9f3190fbf3fe0ee23"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","cd822d281122b0a05c2ac404649d60c1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","6e73a4c504acb9af95d36c17a0286b57"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6fdf5caaf583b20778bba47b4172804b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","520dcaabe373f01fa3bab909e042b245"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d5947e385353d5dab9844d5f1f0f2ac8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","d75b37e74d0813a8be9c1f1d59adfe58"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","505796014e9c5148b7009014b2feefee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","8965b339703e9f03e69fc3440e91838f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","badd219266ef6580d6379bbabed4426d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","bde3cbc9d25d92fa743fc8077224b99e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","168e673b1c20352dcf1b21e0cd2dde34"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","aa57fc69e7668d747d9b7b0e61a91d9c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","787884a7a6101bd189db311d5444c63e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6defb268bf55b947e2696f3b69733758"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","c73116f71c7541a9cf275f278dbf988c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","6d2f541ed3cc8081951b769336ca553c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","f13780ee18c806e13ec819a6796cbdcc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","91ff52ced4d3945b5a99b33e6bb780d5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3720e44f3c3664c41619b18c7d1007b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ae59a292ff10724f16431e32791d7c22"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","2217eb6bf6a1d22f10c52766f952482f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","b7b8c83426a77826ccd6b2e496ef8ae2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","3f3e804aea3d2e704c1011b6ce3a9095"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","1a04bb4cf6c22f8f5372e75ba5d5d508"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","9966bdd87eb8fffbb44fdeeea944210a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","b793c80de06752e410362bcf43755178"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","361f8e33793a090679c20872dadfdc37"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","bf545324c2745c84531ba2ed4bed1c85"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","80021519f8a932c4fd55acc16879b43b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","e71e426af9d1ca43bd6c1ad14b421746"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","ec67187cc6df16269fa7798970cfbed0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","57867083b5b96397e3236e44c4a15782"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","b4f229976ef0b046c601939f02a65d47"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","ded3ac299c4ed47eee46ed1200834f37"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","88acc1489ddf316b8120396c3d7a0316"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","1ae2e9a6c318b644782973fe8d50d75a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","cc6d8e76f3382aed20d07594924a3567"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","a5d7a23e6b93a07236ceed61cc7414ed"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","c49c11481a4819cfea0c55756d9a7dd6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","0bbbad63acd66cec562532605cd349dd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","4b641df317395234c76489a83cae8057"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","5cc1a100e8f28cc7112297ffcdc52683"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","8e5762affb11aaae62e81f237af39efc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","c4e816c0b8c8d64c31b83977b1c9f2d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","3ddfa963bb4eb0105aede71d6a3f160e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","8e9a512325608c05d2b93446816cad4f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","9091f1551df5d535684a24e9abc2ffb6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","5ddae13064a624a468c03091ba3677fa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","d212ca9037e3988e73f1333ebad2ec0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","9c4be488a8a71800c48a88ccb656e91b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","27aed0f79d7fdd222215ec921f06c0ce"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","fbc4f8f1ec4e50b1ac2aa77f27ae1913"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","638a9ced68be581a48413d49fbfdb95c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","355e821e8e8fc2780bfef0e0186f61b8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","ecfcf8903dbe3b2f0c69602d1bd22ca0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","2ad6e0afac6c94c4cab681e6542887aa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","abc62ed354be370f71871208dd118b70"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","c233c2c98290510d986349f7a173c876"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","ea43d438b1314a1160efa1cdef152bef"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","82b9e5135007e3b00902493aca9fe747"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","f8a6f3684be905d33ef21e10e9edca3a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","0c62617a80809162013c8671f579ca31"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","cd7229f59c10f78a203683389e97b0d2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","9f288f12b3074746c937ae9006cd2727"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","c698def90dfea9b8d63570ecd55a3bca"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","4c332d38e5835eef2389754d07ec085c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","be2196e9a33d2aeeed06f68fe1fa938d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","465149457c4d5428cd3980724d97d0ea"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","5192c08fa61a2251b09be9ecbaa06e54"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","233a13e1bcfe348f1a5088f0b445601c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","67bb49896dd54f27a7d8f33e6b917fef"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","55c75f73ac2152fa886d73f3f679f5e8"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","fc78462479c1e3c4cdea9443f1514e40"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","d8dc5a289aa4cece3238c8b976d4d1ae"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","fe1b6f43c9894d99d1bfe8f99dddf7ba"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","95cdf01f8933b7c793f94a3694d79f38"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","645af402b00616b1598f9d3990523e02"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","901221a5eebe40aa088ae5551cf6f591"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","2a010af02f322e54c0145917dc657fd0"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","845ba705940a4de1dc22443d4e573b46"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","bc4b85c0698fe1a3262aa2137fa7ccf2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","56b1f016b6eec0f30893fa6125055f67"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","d1674affae531f286c74540db18a4677"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","e0a8964277343529df786712b91d3a5b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","ebf36f0afd98b971d12c48cc12ff4b41"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","55482d94714d36edba3973e5a7851fe9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","0badb25a3166ffaf1bcfe89295049086"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","f636033b44b7047bda0c1aa75d81be33"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","f1a9fa01340d068ea8b926542bd1b727"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","b7088741fda54db6cc3c23520850e423"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","4024c91cf5cdb0c28990eedc4c9082b8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","9e9b2d5d8bba45a2c266eac1cbbc6ad6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","521cbc6fcc7d475190c9228aed5483e4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","15f5b2e2b0b10297c1ce8e2c6556b574"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","788cf3ce71e5ef378927fc4c99b8ea06"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","9b3c54ec945438d234b648a3a91308b1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","6412406d3767ccdf9249d30c0b9b390f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","45272d5908329dd25b8dc8b076f6d410"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","e86615a0f842d64c4706adcf177ab12f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","451357f5bde00771387be4e1c7bc2fc2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","275176bd4d854f58e7513fb7c495b01a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","3d497e66cb6720258b75ded1e549abe3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","3ecfdfcdcb74b94965f49b234e106d2c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","37c5cb06d747cc1e8afa2d34a6eddd3b"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







