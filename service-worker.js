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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b4a14b4ede790a68954cac9686f5bea0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","259ba509612478e6f89efc6f93804051"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","dfc4ecd76e7d3f37705ba67daf1c745b"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7832406a75ed28e17e6e9567d38a6220"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","09451d86cd2e26c24b02bca214ca1839"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","49144fea20e6255864bb31302b270df6"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6f889e28ac9cf29e9053bfce23cf32dd"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","dfee17f24386d4d33f8789aca61b1a39"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","8dfc741e91a40c5b10aa73c507dd074d"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3d7e07d33a220115e22db81193eb5687"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d144bbfe548210fc6ded367aa0c4e735"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5ecaf2b6df97e9f60b9a265f250394a5"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","97eca2c063304067c8c81f23661a4b22"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bdb41a91d2e01d572f23f3cc85acdceb"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","13c2ded8a8e830af1cc0297bba78a3ed"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0392be85724df9cc87c6bef4d9f9777f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2564a1f3ff0ebd61dd921e8dfcfaa3d2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e8392524c9ba24254b3170f225b28036"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f3750f107dbdb62c551cee9bbc58f011"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","55f79dae1704820da09fcb7122603b2d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","98bd9e740b2bdbc90537e7e5368ec086"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e12543a3af5db046e766f2f69ab4e4e5"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","84101133149ba9586e4c686aa6d17ccf"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ff394cee0aac87e85f4e93fec0a77e70"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6097c83c7fabb0a2d2a90ec85bea176a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","565d03d68124f19dca90e1d3fe52d413"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","e41cee339973df77beadd4017d94d91d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","cda28846a325d14d37855ece056c77d2"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0859fa3915d1afd6542dcc525e317622"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","48127f0007b2ec5ecc1ff90d76b96209"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","0e04a4551bdbb36e105c730b5253daaf"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1c205a69051aeb8b00b5c0a66062cc08"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","97e2a26602d8b49a1ff954a6ad62b9e7"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","2851e05ad9134b565f3b3793f6797959"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","dad86cb2b39ebe713ad56478c779860e"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2cf90a9e86c7ce31e5408e73d34d4672"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","167793d0f2bfb5817d486f425aac0164"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","eb8d85d92161f696ad2246dd7a6bcaed"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6a3e131db85c05deb01597563d5173bd"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","92b31149632ed048faad26f2731b2a70"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","1e76e43a7f82e1a0dc4bff749570d356"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5de4786c270d467a2584c2cb7ecdf692"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","4358f4a6634082b9fddc0ea2eb5432e8"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","05f7de9b85cbc66ef49701e558f120c5"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","38fb1f1fb161b3967cd94ffffed71ff8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f3ffe771fa2f3c5e5b69c4ee15f86880"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","99d53dcdca6a10466578c3af8b12ec32"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","86522eaa729c017d7907371c4a2f6052"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","75a757e85f77014413df16929c14ed74"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","8132496b57964e2918a39c4a30a7e8a5"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","f61660fe664a00eb58598135d9e6ffbc"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","55b74ce30c117bf47162d88de5e04420"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1039c95e2c5ddd3efa75879dba075ca6"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e5d6c3d7248afb067ffe0539c2077fee"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3bdf1e591b4236eeab00887d2bd2f560"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","1b0e442c29ca265983b6cb58758b7a45"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a679601cc962695e62ad7414ef3273b3"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b1203cc0262f040c9576a9fdb1e304f4"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","81c9c1bea32ca2c3269e97d3dabb897b"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","bce1f5f0395d5efeaa6d46d507c1dc60"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","93baad55c875cc603d41eb43ce28ecb1"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","c23d8282e2c499b4cac14ffab59fb513"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","9d300c8f43dd9bdeaf507f47f2912ca8"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","7f8ac1d0aa07b7aa22d758e06b8d01ba"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","3652e5569961c4af241b9012f4ee3449"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","ff0e076b741d9ae8ba1a01aea69c6001"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d80713bd1b40c1eb52dfee2ab051e876"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","46967790f01b59041ae21135eabec444"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c7db47177d492883c710b4183717e990"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","5ddb99fd1f69dde9df91b42c3937f1aa"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","cbe631aa5eac9eab9dacdc012cae3d7f"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","f4d71ff1b7556cd533bc17e9fdd6cd8c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","b8e7f9372d60adfc6f66c10d31cbf58d"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","7959857a2ce266c9f3c712e45e96d6ab"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","849f50daa73c5c090008920b2ce4ddad"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","b631c62ed64952460255a16af8e24bd9"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","ae3953fb21a91f9262051a605a2f9cc7"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","4df29d0b5d69ffd68f52901b8cd0ad3b"],["C:/lmislm.github.io/public/about/index.html","0076d2522de04a953e4741cc0ca90d59"],["C:/lmislm.github.io/public/archives/2016/01/index.html","93bcfbfeedd5c0be05e8c9af55b1856b"],["C:/lmislm.github.io/public/archives/2016/03/index.html","62359a56c3f45b7848ffb139dffa9205"],["C:/lmislm.github.io/public/archives/2016/index.html","36f0d2f1dc8581a82a396611c3728f67"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4fa16a61d931a50731d5804696dd3d56"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b8ba977bd6ffcbedd6cdbf68dddbfa58"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1b31e2fadfb2b325cb749296569b0a02"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4e8da9ba7a44dff0b07865e0129012fa"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7b6744b20cd2e7361da3bf8170d5d162"],["C:/lmislm.github.io/public/archives/2017/index.html","a0cbe7fd0df1d6b8fc42b2bf0b500340"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","5e2027b4257c5f71b9f5b485ef090311"],["C:/lmislm.github.io/public/archives/2018/01/index.html","086a83cdfda3ee705e835808ee151aea"],["C:/lmislm.github.io/public/archives/2018/03/index.html","6b1f8a96e0e226c603290e0ec319028e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","1a54867c25c6f9a92547c4adf94e2a93"],["C:/lmislm.github.io/public/archives/2018/index.html","09f45dc59d30d30703171d4b0dd6c7ac"],["C:/lmislm.github.io/public/archives/2019/01/index.html","80c288222d626e172676f4adbd7b802c"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","382c12ef5232d06305c7c54e7530d2b9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","91476491239d574916b6b2c08a1bde55"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","29bcc92f50b2177db76da60b1c11e167"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5d2e75301653964105d89e9b3b74dda7"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","253e861d006fb524a50a34245652772a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","a3f7dcc4c6dfa188a0d093a293b06400"],["C:/lmislm.github.io/public/archives/2019/index.html","508ccc6a76092306a30a6d6eafffcdd5"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9d992e35948572ce5cdac80085c2dcc2"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","738ef1f0f3a2025ad6aeeb87cc4ed950"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","7018a5b122bf7a0e527b890c73e8f183"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5e0493c2167774819d42f7c5a8617de6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","6082d6f94759443b7dc4199f983618bc"],["C:/lmislm.github.io/public/archives/index.html","5aa77b8380b7acb79d50c0a7eff42e6a"],["C:/lmislm.github.io/public/archives/page/2/index.html","fbab7204bb50b5bc55aacc4bf8be83a1"],["C:/lmislm.github.io/public/archives/page/3/index.html","e6618869fb44d58cb87ee1b522fd693c"],["C:/lmislm.github.io/public/archives/page/4/index.html","f772918b78eb37aa86be84764b94589f"],["C:/lmislm.github.io/public/archives/page/5/index.html","acf1926d26ba5a6ec4e5b8707ca73d54"],["C:/lmislm.github.io/public/archives/page/6/index.html","0393f4b2eadbe4ab2e053435e3dc1065"],["C:/lmislm.github.io/public/archives/page/7/index.html","6611cc69173ef770b1023eff265c1374"],["C:/lmislm.github.io/public/archives/page/8/index.html","590e8182d7fcc2f3eaee59b87a15620d"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d77cfef6dc07e1dea71c3752d21f96b4"],["C:/lmislm.github.io/public/categories/index.html","06628456734766b45e3c74fd3b12744f"],["C:/lmislm.github.io/public/categories/学习/index.html","6a146bae680ecf47bcaa705b73050b37"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","bc06fa01ea26ce5c03e799b9180e28ec"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","0c3af8b1bffc048d935fe0e3822bb4f2"],["C:/lmislm.github.io/public/categories/工作/index.html","ed66974b4d3c6eff36d4ceb086e35bf8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b741726a13d38b5a544178481c951ebb"],["C:/lmislm.github.io/public/categories/技术/index.html","427e86af68d355cc16f4d4f69c12cc8d"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c01cd6164a7d609e096323c79d2e381b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","96149acd1d6118d3b1c7947e9bbd3f5d"],["C:/lmislm.github.io/public/categories/生活/index.html","ad94efa91431df60f12b82685c95f277"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e5f68a1488f32786a9146db443dc93ca"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","77228c5dcdc4da92877ca234362767dd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","9124ed0e12dfe3b2406768a62857176c"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","4ad1c5ca60d6bff694fa39f7697faff4"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","1dcdec6ba4e69f88f803982762131bd0"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","19fd57a20dc820ce771fdce77170c469"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","359a1a3df039f164af5a9af786505a29"],["C:/lmislm.github.io/public/page/3/index.html","30109d333de3800d7d8339a6dc70e4e2"],["C:/lmislm.github.io/public/page/4/index.html","d6360e37c114248f2a4c6231300edc8e"],["C:/lmislm.github.io/public/page/5/index.html","44f9292e827d93fb9e81ce1d82482423"],["C:/lmislm.github.io/public/page/6/index.html","d3c80b1ba7a92eb8bcbb8a6a2818afa3"],["C:/lmislm.github.io/public/page/7/index.html","21b0a31ce5419a9e5464c8ad2d42f676"],["C:/lmislm.github.io/public/page/8/index.html","a43c448949554db4c27dd3d44080ccf9"],["C:/lmislm.github.io/public/tags/Interview/index.html","45d753878ccb5900be52e27b120239d2"],["C:/lmislm.github.io/public/tags/JS/index.html","8ba71791a00d8ff9f64dd8aa6f8833bd"],["C:/lmislm.github.io/public/tags/acm/index.html","fc77ef9e1cdf59a869ed4f3327e7a8b4"],["C:/lmislm.github.io/public/tags/c/index.html","a3a05472f9e40a8057e54e4cab918741"],["C:/lmislm.github.io/public/tags/codewars/index.html","4126983128ac383a669bc2c841f23aa0"],["C:/lmislm.github.io/public/tags/css/index.html","8a638292a53e13b1b5a7ab9121232cac"],["C:/lmislm.github.io/public/tags/git/index.html","cde75da1526a092e5e1d984bb79a970e"],["C:/lmislm.github.io/public/tags/hexo/index.html","f24facbb737d73d22edd5950123e3427"],["C:/lmislm.github.io/public/tags/index.html","fb3b77044e4d11565a63289a90b7fbd1"],["C:/lmislm.github.io/public/tags/markdown/index.html","07a2c568604d328a32addc28a90f2bf7"],["C:/lmislm.github.io/public/tags/poj/index.html","f3426dba6a6f04ac6a00522f184551db"],["C:/lmislm.github.io/public/tags/shell/index.html","c673780e54ebb4dd5798f862bf112198"],["C:/lmislm.github.io/public/tags/vue/index.html","d7d342ede6d67d58da45df56a202fc96"],["C:/lmislm.github.io/public/tags/前端/index.html","d677ca05ebd9100607d6dee1778d3c01"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b1d221d9ebf472791dc7ce2943305a31"],["C:/lmislm.github.io/public/tags/小技巧/index.html","5977f450b337d0e4d1c1521cf14c2b7d"],["C:/lmislm.github.io/public/tags/展示/index.html","0692c4c0ea30954cf334acb2b84f9a62"],["C:/lmislm.github.io/public/tags/工具/index.html","a44fe1ea16a14a0b4969c11f10fd5626"],["C:/lmislm.github.io/public/tags/感悟/index.html","7f96fecc1599b50589df928ef3b79001"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","da11d1dc4103a265489fe3c38895bb92"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","3a1f0113d3adc6f04d726b2302482c1b"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","fc08add32b86623079a555d37ff3d334"],["C:/lmislm.github.io/public/tags/练习/index.html","10a0f6945092a2e737ceeb3172fdb02c"],["C:/lmislm.github.io/public/tags/编程/index.html","020e30b421b125e233ea91dcd51be55b"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","7b93a0bbf82664efb1d5efc4a37ff092"],["C:/lmislm.github.io/public/tags/运维/index.html","b013915b23abfde205791e9f2b6e5baa"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







