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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","800695ad78c7753e6c80eb9f53cd7ead"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","85f81cd075bd29b5e48ff1f419b48030"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3c0ba23c52229442e74a71182f988b77"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","161f4b433f591c8b1e0488c094f6c507"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","8ba8dc6f9aa65460bbc246c3c85ba5f8"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","acfb80e8d58bdfc9fce6739771a51bd8"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","42e72f5dc55917cac5d1951b0df31ba6"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","fca27cfafb310183fec9d1ac417dce83"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","2afcea8fa9c137bd4cf00b9f410d0ecd"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","bc491ef9cb2fffa41f5d7a90297de35e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6ab2164f57793938277f9c3073cc2095"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","7841a4676c88a112599b9ab08663052d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","6f9c79bbec2059b908e130262804ca26"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","7f8bf01c57f0434e3116870224adefa6"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","244ec418cb77fb0dd27fb0cc6eee1054"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","d03b087f612ab3a9f2c57621bf04f204"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","940f2d6b4104bb3d95495eebaa3d5117"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","34143b3c63b5d958c298146641c10e7a"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","d04a2c4ecd982c43e40024cfe0ddc63b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9d63ed5a1f7a44873b0a3ff78e2a242a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","a8eead19b23452beb8a314efcc88d7a8"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","4c4159075e82496df7247ba560c9d013"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1b11c54f879688188e1f62c7848c6474"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","dbd2d5d471fc2e2f6d559ae67e7a713f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","54dd225e8fd9a91642e1a8567f9746e3"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","dffb43eed90a97b062e621b2be460ab6"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d31417cbc8db7719388e0a8af428334c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","71c6a93fd2ac8ee2326fcc9e77fb8635"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","78567198b088c8e3d59d3511fabd5c1a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c6699ac0a18071041b8c13aa4b123757"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","b14c2b5d7f1e91d77021f0848d263549"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","ebf1406b921b392fb100a198eb0e52b4"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","df94389b23cc8c7ffaba80647641d8c6"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","436538d318d4f65b3fdbe7a4e20b9e50"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","021315ed16f0f387ee60d6900f953b88"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","682e0a87e86b9fefefbd994e860681a9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","9ea1b32a9eeea865457fc560b3464975"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3c4f1375053dd61743bdb51cd0b835a8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1bd87579b0685dceadd5f4b19c60d699"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","773d14cb8b02e0934a640d7316e189a0"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a4627e962c5da75f39e71468dcc6cdf7"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","12440222f3ad09cece66643f4cdefcef"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","21f02683b2c5cce062d16fb0f201c729"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","131635629087256fb8c8a85e825fb849"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","f3870c30ddf1b5c76230620006f37424"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","08265733ef25d94c503559b7e97e1dea"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0bcfd36b238f0cc9ab3eb7e83d1489aa"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b0f17c17a4b1ca58b367f3b8421385c5"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","0c9279cef3de542d017850a557988260"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","1a23a71fe30ac6a7f7a661053b4aba32"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","59c3c2faed0ef1a62bcf6733f28aad31"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","69dae57a1bf2e696f7ec8f42f04a74c8"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f14aff1e85370661fc643b20c57c8e11"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8dff968ea618bf2d9445dbf5d7699019"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","d2905bb9e92aa2e75059f357a88f8bd8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","554c18594b431cf86a1c5afaea35c6eb"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","7a18aaaac3fc7e05e74d2062888ba1d9"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ae234fa18e58d58c04c64ae811c6fd52"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","488dabe4d5dd8cb2d3b2b6c2296c1dae"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","db277b631229b7b7344785260afb55af"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e41a691f4309fa8ad1ed8636a5252b11"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","07aab1acd5c6736619c16ada1b872d5a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2362c27510e0104c277f1dce20f5ae7e"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","2576de66769f810be3c45483d9c3d0b2"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","53472ce287f2ebb125a3d40f63d36d13"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","97e019993bb5810aba44e5fbb821e512"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","5de2e7ece96d3e439b227ba6c0ae3197"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f78148496b1703102e888b44e2bfef08"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c0eb0e92705bd6767315ca5fa954f09e"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","8e09c1f8ac60373841b2171e342539c6"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","64b5ce5be26282023213ca9801066186"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7c7beccd564a83db773c0aee346d3535"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","cf816af5f9f39714b14e76d505582e53"],["C:/lmislm.github.io/public/about/index.html","7be31f26051a5d96c984cf5215536851"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c0d7738b24bc4c88c2f89933d31e958f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","fe7c2788bb760f097e74e8570e43d59b"],["C:/lmislm.github.io/public/archives/2016/index.html","df44a637ec7636ecc3b83b3c4ef0bea1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","feb1b09b3f9d0fabf0bd1b43205c50b4"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0aa89b3ff107988b8331d963fee8117d"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1ea946dc9c74e6b4bcee6adc630024c2"],["C:/lmislm.github.io/public/archives/2017/05/index.html","72c5eeaf51c59d2d4f60f5181806f8ce"],["C:/lmislm.github.io/public/archives/2017/07/index.html","11b296fd3b1dfc69b1810eac93469a92"],["C:/lmislm.github.io/public/archives/2017/index.html","ef176a62d737ab4196db84f3abf5de54"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","30bbd6507ee0a899a13e3d3838bafc5c"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e949312172671ec6c36856d31dad36fb"],["C:/lmislm.github.io/public/archives/2018/03/index.html","9e59297bf3b6190b129027b78815b9df"],["C:/lmislm.github.io/public/archives/2018/12/index.html","736ab834642845abde43a08f12eca656"],["C:/lmislm.github.io/public/archives/2018/index.html","4ca4e0964f9b3db43899c2b4c7d8c18c"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e62a90ed8bb818b0db36e6440b322b48"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3093b27fc7a0765526d23b10fc251dc9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","935efc53f77bbfd2f7b4a10a80209aa3"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","cc600254305526be5ed9990c09ed39ef"],["C:/lmislm.github.io/public/archives/2019/02/index.html","3516dca77f75de949a2a90eda4d9fb85"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","aca2ceeff6d4d7d01065a243c107a1a9"],["C:/lmislm.github.io/public/archives/2019/index.html","b8eff389853d4898ba5e52456c4c7c31"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2e6f163e4c89f1df5eb77bc213fb0b41"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","418f71b4eab55e8186fcf8684428dc59"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","c44ec71f07c1fa13dd9095fd01e44880"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f2ee04797dfaa60419f6f056d7c83043"],["C:/lmislm.github.io/public/archives/index.html","712d96d34244b4b451ea237fd670495e"],["C:/lmislm.github.io/public/archives/page/2/index.html","68c0b0de1017abe38b69cf34f324b180"],["C:/lmislm.github.io/public/archives/page/3/index.html","81d45cf84289fc075fecef54d8312d18"],["C:/lmislm.github.io/public/archives/page/4/index.html","e45b39888c7c9de69b9110ee14a3a257"],["C:/lmislm.github.io/public/archives/page/5/index.html","92a43447b4ccea1bf8ca75e9726648c3"],["C:/lmislm.github.io/public/archives/page/6/index.html","a3d8a735dec14bd8cea23da09ae41de9"],["C:/lmislm.github.io/public/archives/page/7/index.html","0fba23b4d5d44bbd9b18c1eb08b43e7d"],["C:/lmislm.github.io/public/archives/page/8/index.html","9df14ae4faa613ecf24926cbcffef249"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","645ab08e4d5f53e32f3b7b3674e275e4"],["C:/lmislm.github.io/public/categories/index.html","c6c2f3b7f6bfff24f6c2277f570336df"],["C:/lmislm.github.io/public/categories/学习/index.html","024f600ce9f3327834182897ca0d9fa0"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","afebdb28487738a59f85b54d663736b7"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","539f78a2cc407467d9f8593b996f6497"],["C:/lmislm.github.io/public/categories/工作/index.html","c8459f0e2bbb4cc82300656e08174325"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","18601ecfeaa8f19515f9c965f386ab0f"],["C:/lmislm.github.io/public/categories/技术/index.html","664a17319a9d372b186e10b1bc221d2e"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","f238d1abde1fb0688a97194f30ca35d7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","9fe39df8955bdb8522bff758bd3ae2e1"],["C:/lmislm.github.io/public/categories/生活/index.html","88084c0b512902e14f170d20ed29290f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","cece0ba92f7ea02adaa2b0f61dc49a8e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4101ac23fca3fcfe465d0db1313dd4fc"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","d0fe6215904f0e0da346bd18e4573fe7"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","663da2b406a3d1f1d04fefb4354df508"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6d009bb60e3ebbb2b2095b929508a171"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","769c51267a76ade4c7302a5cb49b1091"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","2583fef3c204fb7c707bc454405b2c16"],["C:/lmislm.github.io/public/page/3/index.html","92244f3972adb73a9469e245be56bf0f"],["C:/lmislm.github.io/public/page/4/index.html","105b92c225961a77a8aabfb2a1ca3cc1"],["C:/lmislm.github.io/public/page/5/index.html","2bca0f2a9eb763a26a19f7e3f2f94864"],["C:/lmislm.github.io/public/page/6/index.html","9128d07b65650c98843126438b50beb6"],["C:/lmislm.github.io/public/page/7/index.html","9fbfd2b9d6100797f58b8fdaccfa91f1"],["C:/lmislm.github.io/public/page/8/index.html","b70f3e254c9f1ca0bb07576b3f0d282a"],["C:/lmislm.github.io/public/tags/Interview/index.html","4b59424b62559d4e9bbe5b511587bc7e"],["C:/lmislm.github.io/public/tags/JS/index.html","a6dc62f7e69d77a0c3e1c93a8dbd0b9c"],["C:/lmislm.github.io/public/tags/acm/index.html","239bcb148958cb398120077ff6e4b06f"],["C:/lmislm.github.io/public/tags/c/index.html","e83f4a172b6b20c848a6680d89e249da"],["C:/lmislm.github.io/public/tags/codewars/index.html","578afdfdc00208ddbf8955de61062a6e"],["C:/lmislm.github.io/public/tags/css/index.html","eb8b4d6b110838702a2e7c8286c5edb0"],["C:/lmislm.github.io/public/tags/git/index.html","61eb1eb9242c078fc82d084532ab86ad"],["C:/lmislm.github.io/public/tags/hexo/index.html","82e27a4583912adeab1f61e98573cda6"],["C:/lmislm.github.io/public/tags/index.html","b598db2cc1c988dd2dcead3856823ee8"],["C:/lmislm.github.io/public/tags/markdown/index.html","eda5e393fd45e3d0e8b50cb78557cfdc"],["C:/lmislm.github.io/public/tags/poj/index.html","1b97a450c3be2ec4ee306b5ec245c912"],["C:/lmislm.github.io/public/tags/shell/index.html","9c65e7420d6bf4eddb9b327e193b00ea"],["C:/lmislm.github.io/public/tags/vue/index.html","02e53eb56359e80f0b6fd786fcd9b61b"],["C:/lmislm.github.io/public/tags/前端/index.html","1395548bbb34ae787b0d8798d8e53b36"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","7bdfb3c2d1a4de1e3ba8ae036ec126ab"],["C:/lmislm.github.io/public/tags/小技巧/index.html","1ac42b2887ac9024e357046e7f9c007b"],["C:/lmislm.github.io/public/tags/展示/index.html","347bfc062fce65eb10cae915483224c0"],["C:/lmislm.github.io/public/tags/工具/index.html","9e4b036a3cd6986ac71df6be38a422d3"],["C:/lmislm.github.io/public/tags/感悟/index.html","cb60b89b0d3dbee93bfc8877c58a30c8"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","48c91147663d97f94878bb14ec538ee9"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","1c7d6b655d643b3512a3579676c5c616"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","96e0f51793a8d85ad36243f46d720191"],["C:/lmislm.github.io/public/tags/练习/index.html","0df5988c5772588e1f74ee7eb440178e"],["C:/lmislm.github.io/public/tags/编程/index.html","b70bf4d2522fca481c8f3f06b6b33cfb"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","704dfd978b7fffe41bcd6f9687dae2b2"],["C:/lmislm.github.io/public/tags/运维/index.html","ae9a6fed3a5a1e8597520b7b556be58b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







