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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3971f5dae17d4eb4413728f1e2ee0443"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c4f7f7c5ece19fd42eddba7e27003507"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","beb6fa3610f8107462f2d3c1b653d380"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a255a5dc987f444a723dd2156456ff61"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ad95d5b854cfb0f9a67eff990af1fd5f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f777ce972f042a62d6f87cf80212fb4f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e899d4204289d7b30d201309eedc83f8"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","237da14207196c575cb16d17f3b8b2d0"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","126a8f344fbcf4a84710ceb7a375594a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","12e81ad354cc1e2b52c1ebc049f3409f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","edce777c03deda27fbcbd54522298bb0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6d38e4586200e899cdf870a52898d03f"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","ab0fa0111ca65e871550940cbd2a1d6b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","deb3bf69145ffbad8926d9e4ab11d67c"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","239ac8973a60c2f3ca5dda8d6a1e1948"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","34152eafe78835ccabb7b34226a98f0f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ab0cb3d2279fcc0150308511b023df99"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","df1b40efa6b3b0f45c6d19a1d7cf4850"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","210bbb62e08d0ac0781dde6ec1b4e958"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b4552d5146cc90140efa0fd920d627de"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","8151b9e4146f8dc56a5d40a948070ba9"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6e393a513f5abc9fe8d27feb57f17b8a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","e64d84a6f6c17d50057c3014ec653a11"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","59aaaecbbfa969245d801119473d3007"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4cbe87ad1ae68bd0ca307454587a4bfe"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","832dcb5c8adb1df854bf98476cb9dd84"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","07d2e632bb775fa41da2dff9ebb51b35"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","290b1a59bb8ac1ea57bee9d9794e24d0"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","efa56850ab4d0029d7b153efb87f8fcc"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c563bd36010b3ab7aadbc677cb74c00a"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","95ffe45dd1109b1fcb01e6cd56de6642"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","8a892d117fcba6bff33566cf58948b98"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","074e7a02e33bb7aed69613bd0047862b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","93efe45c6430a8d5daa4b4fad351b35c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b1aa4b0af724565dbd102c81b2350e12"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","93d9b167366e885b891d2155262f879c"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","051dbdb0ca72ebeb37516b06a4d0c058"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","451ad2d562e3dfc95d0dc1f6cf532c3e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3a333a6498a6254ded219a436eb79989"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","d9be768255f089a1d6b6c1313c7e8017"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","cfc7c270488230cf64e7d7fa394fd67e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3fdebaec7a68a074d269dc766b316ff0"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ccffca01ed5a7b7f96493966ce8d7a43"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","9e3c652f5156bf4f29f5334a0a6ccccb"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","df3064445e63b9f4455a7c097345cfc2"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","9363cc70197cbe0840c9c7a31d8ff1e6"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","a4886bea457a46958e44db44b9882bf0"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","cd2c60ce7058873bae598b359c5c9461"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","97fd6b1b92055b44d137a4185a5ef841"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","14a3a9bcb696bdd738172fa4c11ddec9"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6b2006678ab38bd91937376e6d9caad6"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","60adf23cd891bd4ac77c87369a2563de"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","acf4d6f4a89a1051e3ca09a2202653d7"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6e064af28d130923585d9272e39354bd"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","324366819b808e4a93e7907080ffb23f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","1d829cc9663cddc43a0eefd4f30fe0f7"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","85853d205a6e4d4c9abd992330de76cb"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3ec391f83fa9433ad5b6347a38d246ce"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","458bd38f500abf40d5a51877bfa51342"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d3ddb0bca71520f2e2b8acd62e56d0db"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","0d60c274680c0b5f255abca09f79c51a"],["C:/lmislm.github.io/public/about/index.html","64810a869e867da5c3e9211686f32224"],["C:/lmislm.github.io/public/archives/2016/01/index.html","666b299e38b404eff358f5aa316b7c2c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","d4c1b866636c43466945e603251570b0"],["C:/lmislm.github.io/public/archives/2016/index.html","8e58c1ed32a6370360d6ef9a0159b3f9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","1cf4c81906a7197db0d0d565f0181b15"],["C:/lmislm.github.io/public/archives/2017/03/index.html","f21a9ff044f571a8b041151c51b404f4"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b1d22626dedb94181a3cfb7b17a292aa"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3a3f8c67ccadcc137926a5407bde7be3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","bed09e0346bc4d87449e5fdb7f95c850"],["C:/lmislm.github.io/public/archives/2017/index.html","b96934e6e36f5d16622b20dd77d77827"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","57c2b6abefe5996105706e5812269d70"],["C:/lmislm.github.io/public/archives/2018/01/index.html","626d401cf165e99abf53660f10753618"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f474f945ac08edda85ac2b7817bf505a"],["C:/lmislm.github.io/public/archives/2018/12/index.html","dcf84010833b97873d79f2e6aac24d78"],["C:/lmislm.github.io/public/archives/2018/index.html","95dfdc51ab94cd5453fad70f6e6679f8"],["C:/lmislm.github.io/public/archives/2019/01/index.html","280bfb4a172218955e4437307ebd7185"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8e085049a6d3f7c7932b27e8fac55139"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b51b2c8c5f3e5191756b4477ecea31c0"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3d7b0de57c40762719b07d670df3d0ca"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d4c98e44c4d23d9272c88d5f3ec325ac"],["C:/lmislm.github.io/public/archives/2019/index.html","3d52f8c1a495d747ed8109626ee3f92f"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","848801a88792ffe28d2024b8ce38c7e7"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","abcbc188697d590cbcccc084b39dbeb8"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8d814627ef6c83fbcfd63d7b7141b24c"],["C:/lmislm.github.io/public/archives/index.html","4c948e939d7a946d35c5135395c7e70e"],["C:/lmislm.github.io/public/archives/page/2/index.html","f6af1b7c716a8710fba037013bc3288b"],["C:/lmislm.github.io/public/archives/page/3/index.html","4aebbd6faff52e41fd77f5240650bdfb"],["C:/lmislm.github.io/public/archives/page/4/index.html","7ab0d3201ff39d544aefd7220c2735b1"],["C:/lmislm.github.io/public/archives/page/5/index.html","bc7f8ed869f4eb8a368b8fc43166f4b7"],["C:/lmislm.github.io/public/archives/page/6/index.html","11e24be80945d389f445f209fdb3944b"],["C:/lmislm.github.io/public/archives/page/7/index.html","60247553bb3f46d18b31b07b1b25124e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5425c3cdc354e25be62c38c9aa085a5f"],["C:/lmislm.github.io/public/categories/index.html","4f115222137c369997aaa44b255058ed"],["C:/lmislm.github.io/public/categories/学习/index.html","f11c38d74f5538b8f1c03ade26150c8d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f6275a6695e1ada64ce90c39a1a36346"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f32ac3376c2649d2af13f1284ac2f2d7"],["C:/lmislm.github.io/public/categories/工作/index.html","489a0fd09ca93a9d0ad8ed5e3946c709"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","edcb254240956a9ded54f9b3f66f1911"],["C:/lmislm.github.io/public/categories/技术/index.html","491404c4bd1a331bc0fe17eb8856be7b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","107b583f60e8d46357067ba4c0ff79c3"],["C:/lmislm.github.io/public/categories/生活/index.html","77d023d53c0f1a61899b9ff055e4256e"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","933474878af727399b3c587dbad4c097"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","271d4c380a6e97ead426f4f454c7ba54"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","fa9dfa7a73db862d4fbe87200a6a0b18"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","c054d3c33536473afe79de3e6ea82e7b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f355495ff013b62ea2d5d6227d090bdd"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","f4484d8e6e5e4e73934e136d97b9c0b9"],["C:/lmislm.github.io/public/page/3/index.html","6b9c5b38c3b6f52c05ca07bb503f2bd6"],["C:/lmislm.github.io/public/page/4/index.html","30674a1a3bead6326e6c27bd4d0a0e72"],["C:/lmislm.github.io/public/page/5/index.html","d1375077a55ddf81909012353ecb226b"],["C:/lmislm.github.io/public/page/6/index.html","dd196cb4ebc8dc455a16274b4cc03ddc"],["C:/lmislm.github.io/public/page/7/index.html","239bf54c09f0f0fd01ed608a716786be"],["C:/lmislm.github.io/public/tags/Interview/index.html","7d2375fcd7c0fb5ca8c9d1533f9654b7"],["C:/lmislm.github.io/public/tags/JS/index.html","63eca167a4983c99f5b7bafd2336e475"],["C:/lmislm.github.io/public/tags/acm/index.html","83cbd39c1a0c282c73ae2a2ce7fe5f00"],["C:/lmislm.github.io/public/tags/c/index.html","dd918b36ba83cfbd7975b46933310dbb"],["C:/lmislm.github.io/public/tags/codewars/index.html","1c6ba0b9983be3575375e0ccca0287dd"],["C:/lmislm.github.io/public/tags/css/index.html","c3e181fce80600410129847f98027fbc"],["C:/lmislm.github.io/public/tags/git/index.html","4ad5735a6568acc757aa9a68fa0c0416"],["C:/lmislm.github.io/public/tags/hexo/index.html","19d7ec40d6d746a98a737ae216f8b745"],["C:/lmislm.github.io/public/tags/index.html","0d80f70dbb4f7154470975b1690a2cd9"],["C:/lmislm.github.io/public/tags/markdown/index.html","ebf5282978ec1e062ec2c2d2b3b7d78d"],["C:/lmislm.github.io/public/tags/poj/index.html","e17750550757ba32e0e4319bd1ac8c7b"],["C:/lmislm.github.io/public/tags/shell/index.html","9568e9292c0102950878ef4ae0af3a69"],["C:/lmislm.github.io/public/tags/vue/index.html","a5ad226c9270e9f471c3c9d4046728e1"],["C:/lmislm.github.io/public/tags/前端/index.html","447149d33f12f379c8817a3aca105009"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7d1394616a541c2d9b1cd6b970795f0b"],["C:/lmislm.github.io/public/tags/展示/index.html","960057be299f7fd9d38e69382285fd58"],["C:/lmislm.github.io/public/tags/工具/index.html","12760e650523d435aaaaeb3879b8aeea"],["C:/lmislm.github.io/public/tags/感悟/index.html","f398e841493ca874eb27d8f685c0f963"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","a5dbafaf2a5236066999170c96e887b3"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","e0912bdc5f96c2a49265323e3414fb52"],["C:/lmislm.github.io/public/tags/练习/index.html","41ed126db2d907546c248ed3cdedd9dc"],["C:/lmislm.github.io/public/tags/编程/index.html","e76c068234258dce63211adf299d1522"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","48350c28b56a69b7660827f985fa253b"],["C:/lmislm.github.io/public/tags/运维/index.html","c88716e96f12a65362d51012b81ed1f3"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







