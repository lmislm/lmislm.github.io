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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","41e3a8a165cbc8b576b1feaefb7e1b7c"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f229549f6fbf56e44c55c640a397b294"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","77d7d84d1025c613da7c3fa92e67b280"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","6c87fa88fdd1a17d2246a57adc3863ba"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","34a4e10b19f686f75bf2988fa5e514cf"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","20400e0bc0dc96dab7fb26b7b865dc72"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","812ea0245b30dc9d3646c9120684ef15"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3d4216302ff56586d6d5e134c7be5930"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a65afd12bd849294f3eedafab05388e0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b63d6476bfa03dbb049084d1c16c3b3f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0e63a41596ea88e458e312e897b5e375"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a4e9f1166ee515cc6d3f4e9ee419c03a"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","992c9af50711810a2cf4456f03dd64f9"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b348c1a894748db809a0898a8f899b9f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d030db97ecd6ef15c5d9ca194f34191f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","02b4a3865a3570716af0fca0ca69e1c8"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","8787f50201c5ffc21751ebbff289301f"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e88a28070c7b13b6ab636fc46c44af21"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","ea3cc9a9cb17225e3c724e9f66f6eeea"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","205f6d76141d70bdc65456b4fd9fa71a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","d5df34702808ee6c0a568c7181a3e1b3"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8c1329c2576481867fad47d137fb08e6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0f0af4ae4f8b1daf967e519f17bc3ab9"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9fe954e2b3f2de780d6de9826d38ab4a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d1733d093ad444bec08f986c8114bd39"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","78c096255130f7b74aa3b18b592cde29"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","e9db8d233d3ee7e3c56eec200bf8de4e"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2c6982ce117b677f1f73d0a9f15a4d28"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","41a0b860ae8067efa0147d8a12251032"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","f542d854584316c3f21ddab14d74f2c0"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a0347481ef703c8f4f3cc1eaac826ba7"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2d74426ce364249f82c4114fdb317065"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e4e3a53bad4eda8edd38de43b6a7d2c6"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8108250d96cb8db2fda29021f76f827b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","989d0ec6370c9c9da89ac1646e563dd2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","bd24b9296c714d0c082b139e1cbc27af"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","8f52a9ef0de94d6cbfe3c108dac390fb"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","41d389baf9b70d4786e4ab9364690c37"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5ddf0ca68eb66eff5c7c2e29ef3573a9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","da1b6604805ff03e0f7119f7f1127e45"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","d20beebe951ff3f48977ca749d44d027"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c4faf60bb47bf713fdd949ca2879804a"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","813e2517ea41227004054f8cec2fef33"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","d8279634ab424afc76ccdbf555f02d41"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ff64a8c12741f644a1dda257f9f04e7a"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","08ee210236f8a8be8d9cf86fb6522f00"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0f67f0679d504b4dadf54e054fc451f3"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","5665464465c35e59f8f55776be0d1102"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6537ae1156619fd711f67cab76b0fd33"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","4f1be2666d9bbb9f053366a1841be42d"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","34f87e5ebca8e2b8d9a7005932a15b2d"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","84f3759c947131b4d7fce37e77040a7b"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","d4f8e573a9c0fc7c048f1e73c3a99522"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8cd4c2ba27407508877c7cdbdf513b38"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","03f373067943d977fd400563a1c686cd"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","6e9ecb0d562cb74bf4947379b1098d39"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","00451dc410822df25fab9b3ba19a3033"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","55aac943d57b23f32739cbd9063fa611"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","54f619c43d5a02d4362f026ee5f55435"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","413227e981458ecd13cff347f649bb2f"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","937bb63fea3a4002eac1b7132bea71cb"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","7040057566e13db238cd7f21a60203f4"],["C:/lmislm.github.io/public/about/index.html","ff8ee6a9b311743c56ab7a82f3384d20"],["C:/lmislm.github.io/public/archives/2016/01/index.html","673b85312a2da82c21fba0937276be80"],["C:/lmislm.github.io/public/archives/2016/03/index.html","546c0b238f7069fa0ddde44c55a55e66"],["C:/lmislm.github.io/public/archives/2016/index.html","c81fee5f8df51bee40ebf1fff6ffc614"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0137a4d78f831cd1d9418153ba16e9d5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","da0ed23e40c76c18706378f8aa08c256"],["C:/lmislm.github.io/public/archives/2017/04/index.html","fc8e3754b758e72a880c375ab0ffb59d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","47b8828d7bb6293f4bc550b6af1c431e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","e3da62a8128000cc1a680702180a45e6"],["C:/lmislm.github.io/public/archives/2017/index.html","46247f9e569d2d56ef268bbe4c21d97c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b4836348e7eb906e5e45d148bc673004"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ec5feff073fb09c7af3052c1229f1332"],["C:/lmislm.github.io/public/archives/2018/03/index.html","de631fcaa232063a2d94e0bd6e093bbb"],["C:/lmislm.github.io/public/archives/2018/12/index.html","63c07df9f59dc7ee2b514ba3b3f0860f"],["C:/lmislm.github.io/public/archives/2018/index.html","4dda56c0d6d481b651bfcd9845999e38"],["C:/lmislm.github.io/public/archives/2019/01/index.html","83b729ba1e4c519198c9ad54ff204222"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","97c690a73544ea4006bae7e47cef4de9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","8d1b8ebda28261b61fd2f5eafb25fa25"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","c93bb798d6646e54c2a19d644454a8a7"],["C:/lmislm.github.io/public/archives/2019/02/index.html","cfc06dc5d8efdca79ee4d5f023a3c462"],["C:/lmislm.github.io/public/archives/2019/index.html","655d33dc53fa195fcdd5462c9db7f9da"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","3f280c8b0d061034515ea826898502d7"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","a8e8b654d29740d3e117b5c72fd179fa"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","a57e814897e98bb9312393b366e8105e"],["C:/lmislm.github.io/public/archives/index.html","dbd00c6d9e3c7dff9ca22d831ad89861"],["C:/lmislm.github.io/public/archives/page/2/index.html","d0c1022c823e434a7e7f821a13083bf3"],["C:/lmislm.github.io/public/archives/page/3/index.html","683d97297870ceef58c0dee73d9895f9"],["C:/lmislm.github.io/public/archives/page/4/index.html","fda2f26f805b19935591c956f5cf5eda"],["C:/lmislm.github.io/public/archives/page/5/index.html","5e2ec00d8d7718d77f12d954826baf39"],["C:/lmislm.github.io/public/archives/page/6/index.html","d893124d41f1e9772f040404f53a43c8"],["C:/lmislm.github.io/public/archives/page/7/index.html","31058cba0dc0a180f84b8ec9d02b8929"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","094a7dd611b0ae364bf1cc00021cbce4"],["C:/lmislm.github.io/public/categories/index.html","a00fbf481bc983263d4a19de92c69eeb"],["C:/lmislm.github.io/public/categories/学习/index.html","f03cfa5b1bf5117411ad02d14153ec1b"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d0f54d6f439609d1ca6205902f204069"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","79aceb9bcc01e75d9b74a2aacc4bbede"],["C:/lmislm.github.io/public/categories/工作/index.html","926952fdbe1e160d361edf8659c81cdf"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b7f1008ee1b5805e0fb273ace62d3b9e"],["C:/lmislm.github.io/public/categories/技术/index.html","79a6fa835898d99dc49ba7b5e8af3ab7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","68e396a88c5f7a6b161715598db006ab"],["C:/lmislm.github.io/public/categories/生活/index.html","5dce9592fc30628833cebc86a146a428"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","f391ff017d4ccb7a619b2c119ad37a77"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","cfb16706701122c956320acb5f030ced"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f58c52f2731fea32d1f1dd10e29623e0"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","70ecae1374a97ef25f3350e93bdd8139"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d1df1a8bb943191778538e5cba54b013"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","66f9469799a0873ab8fcdb26e67cb400"],["C:/lmislm.github.io/public/page/3/index.html","04dfe3c5968c759f3ba7ee6b4b42c60f"],["C:/lmislm.github.io/public/page/4/index.html","d02165bd49927a071e07ebd41f8e25ba"],["C:/lmislm.github.io/public/page/5/index.html","f83601fdb6944b03b162629459c4a03c"],["C:/lmislm.github.io/public/page/6/index.html","c92c7d5fbbc923ad6229aefb51b7942e"],["C:/lmislm.github.io/public/page/7/index.html","c69319a0e84d8f285065e72ee02675b6"],["C:/lmislm.github.io/public/tags/Interview/index.html","83b75fa0e85eeb24762fd6b3ec1ed6a4"],["C:/lmislm.github.io/public/tags/JS/index.html","d13b5f7b5b47e1acf99fc03f16d877c9"],["C:/lmislm.github.io/public/tags/acm/index.html","fcd91ce3fe787b3b028c21127ef71257"],["C:/lmislm.github.io/public/tags/c/index.html","921a2d9712a5ec9e64f6f806d21f2e45"],["C:/lmislm.github.io/public/tags/codewars/index.html","feb6c7942f33149fbe183d569b91967f"],["C:/lmislm.github.io/public/tags/css/index.html","e3ed40f7c9e3fce4d383383f21746590"],["C:/lmislm.github.io/public/tags/git/index.html","b02102db4f0e1a3387c404c54a1bee8d"],["C:/lmislm.github.io/public/tags/hexo/index.html","830e3cb8ba2f5e0ef96dff573add9be1"],["C:/lmislm.github.io/public/tags/index.html","7a5359fe0129050723a1204327a552cc"],["C:/lmislm.github.io/public/tags/markdown/index.html","05e70c42791bc7816c33fee980b12cde"],["C:/lmislm.github.io/public/tags/poj/index.html","dac1d8ba935e09126fee7efaed6bbfa7"],["C:/lmislm.github.io/public/tags/shell/index.html","447bade5586660de9437f6a35f9e2cb3"],["C:/lmislm.github.io/public/tags/vue/index.html","8e063b08622ffd97628544fdd43aef50"],["C:/lmislm.github.io/public/tags/前端/index.html","dee02ce6c91ee93c382c7e058a571d97"],["C:/lmislm.github.io/public/tags/小技巧/index.html","33adcabc8dbb30095c3e70382469bd72"],["C:/lmislm.github.io/public/tags/展示/index.html","14de2db3b41b12c905c2303b4b9442c0"],["C:/lmislm.github.io/public/tags/工具/index.html","654acbd43b2a76a5f795fd683acae751"],["C:/lmislm.github.io/public/tags/感悟/index.html","29eda8d6e1bc670ed9d0202cf6c6d449"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","af74dfd9c5fae25a144e871378cb6f29"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","e220610dea2d0cfcf6bf75e126a8cd69"],["C:/lmislm.github.io/public/tags/练习/index.html","ac3a084c4e4e4b80f4b8854d6cb21912"],["C:/lmislm.github.io/public/tags/编程/index.html","c8b509a6bab61a5650648701091f21c4"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","17a5b3036d4046bc99de9059f1572abe"],["C:/lmislm.github.io/public/tags/运维/index.html","0adf71e8f5723fe98f3f62025ddce463"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







