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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","064ef8d5726898771fcf17a576b8d8c8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","14d0566e01388bfeca4c28448c63c5d3"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","8a5ac0eba5461382f4a3267fa50d7c09"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b2462b82bb79e0ec2c03ef9998459b70"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ef365c6590ade8be4eb53bc1ee48e414"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","6fcc3f8eb295c7d3d3fc27473f708103"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e46414d5b93a96cc1a7214823907bdba"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c19caef24be9919b57b51808f6d25ba3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","ed4da8c2bb857284af125e62089d48c9"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","44f521d093ecb453b9a9df95d4af56de"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","de2ff8fb7b6854390ffccdd87b60e9e1"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f84723abbbfe3022eb69bce098bb0f4c"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","bbf1aa43601716e6df2831a310f8a926"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","226f5a79f8ff11a1dddcdbbdcf08a203"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","05f41dc6c028bb223fa3cc1faaaaf5a6"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","6c890465e42122c9b0b61f5e1f2a32c7"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e3f00ec0f14d2d19b86679e40993913d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","a129cf3e3ae7608af9a53a7ce1eda769"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","83c52ef7812eaf0b05ba36c6d690748d"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","6a3d45dba714747030c0ec87048c0b34"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","6f0bc27519f9d851b4c515dbb336f1dd"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","fcf55c64de77957b94e0ef12bc500319"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6886723811d438e3a7126f9017869145"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","ccaf78f8dfbf4ef6b10d899680acac86"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","83a07e4cd5b458d69e5a56473d40bac7"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","5d4439d2050be77546bee69856afe396"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","3f077235f57b289c9b7edb331f010426"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bd97b3831af64cce9de96da3554c5f8f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1186d26c2d50740076687507f8180f6b"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","90467a0061b9dda9a2dd0691fe5d089d"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","cf843991fed8c1e79538e10649efbc5d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6aede3821d568bf0fcb47814434eb5c0"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ca2c5b25a0583f0f08efce43a58b4902"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","89e565714dbccacef9cc255e1c19bdba"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0b041de28434caed4e5ac6946290784b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","3bd7ac602d3b03fffa7700341e97b0a4"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","adbe896deec0e37170d03cea7dd8253f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","86c8be908b7d085360a66dcce076e090"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","4959bf8fc730ca0179216cea84d138ff"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","9d3235e13526e25aa1d650ad8a918e87"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ebe542c164d96c3712a52e5a67b6e87b"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c7280f011f096c74aba23f43ea52742a"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","dfc3e23cbf737e2cd4d542a871480b5d"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5562d3b7e4a00a98bee3339616a21f7b"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c9f06f487d1987542a1c2fa43b8a529d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","3efd675abffdaa9e08c02a509405ab43"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","7a5d7b147cca427a8d60f4328a7a5da5"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","4887f894eb937531e8a2fc8c5e957612"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f65777e37a9be8d1b38394dd9f343bf5"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a890a56940d28ead59cd3e45b66217d5"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","568d27740c13802fa4b1cf5a578c939c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","8572e8d41ac5c708a5150156812a281a"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","ff09cbba7cc46a82ab99651c47eab80e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","72d3299d9691458b7ea816ac22a6c060"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","5c743a0132b6d8c31819aaabef4a3ee1"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e8a4da6f96a2118d20f0786fc979f5b8"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","1c19ec1f79172f6f46304c2072555ed8"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","94840298cf9b674f7b2d1df64d43d03c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","119a4eca74d32b0b4c8e49689d58e01f"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","915c4fb134ef26a476cabc2cc691bc99"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","c360d27409b5fe2563df8d9f8281b660"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","307e6533d9d3e7ed14cbb6cdec0c0601"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","10fdbc45592296afca23fe86cd1193e3"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","6eb2fed84e58f4537f2d6857f4044c30"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","d7a91be0f77ed793f26d04dec876f96a"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","def9f10152261adc40ade9097ee414df"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b9e439f41d1ea7b71c89bfb222b2394b"],["C:/lmislm.github.io/public/about/index.html","09ef965521600282bc597665403fbe41"],["C:/lmislm.github.io/public/archives/2016/01/index.html","a66343a0124ebd41ed7cac1c96bdcf47"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7885e0a369dcb5632ddea9410eb44f8b"],["C:/lmislm.github.io/public/archives/2016/index.html","1aa8a0329598608b5f7d6278955f32df"],["C:/lmislm.github.io/public/archives/2017/01/index.html","615b6886f1207f62e852a795993be7e0"],["C:/lmislm.github.io/public/archives/2017/03/index.html","211df9ac80c0d6c8bcd378ece357eaf9"],["C:/lmislm.github.io/public/archives/2017/04/index.html","fc87ea2e21f5735ff2e42dd8ac292b83"],["C:/lmislm.github.io/public/archives/2017/05/index.html","9898b06471977666782bef023a113a04"],["C:/lmislm.github.io/public/archives/2017/07/index.html","906a6c617a10b61d3a969aa429f5748f"],["C:/lmislm.github.io/public/archives/2017/index.html","4bfbd895dad8e8ebafd557a010dd8b91"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","26ce35bc407602f440849888cdc20187"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0172c81acc9f3f0f18ae3ea58a189264"],["C:/lmislm.github.io/public/archives/2018/03/index.html","aa23ef708f98df4e4d88c6852e98437d"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d5e25e652fc203cfc59d12b14c3a7b75"],["C:/lmislm.github.io/public/archives/2018/index.html","ecc5387999c8a82c513e4af668e9aeb4"],["C:/lmislm.github.io/public/archives/2019/01/index.html","077f7ec70c9038f0ab5172b2c065a6ad"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2e65fd5849974485ce78a635cb5975f6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f2e57032b2c97491288f412b04a7d502"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","f4082e7f61b55999fea13cc4003b30db"],["C:/lmislm.github.io/public/archives/2019/02/index.html","e2de528224b94578147946bd4931c20e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","2eb9612fa11fc8107d4aed09f8c09673"],["C:/lmislm.github.io/public/archives/2019/index.html","4daf4ed67a3e7ed135f650e90158f234"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","3ef65f10ff21690c453e3725f403472d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f972193ef8eeaf42fc25af5258c3b031"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9a9578973926b5a626dfcc0cdac22794"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","68e5b9be2cbf4941fb40e753332d8205"],["C:/lmislm.github.io/public/archives/index.html","0ed9fa7e66de6ce91809b2e2e9e282fa"],["C:/lmislm.github.io/public/archives/page/2/index.html","47a5932004006b0f9135111257813c57"],["C:/lmislm.github.io/public/archives/page/3/index.html","6d366c3b7bd3b48c79d785bcdb9a38d9"],["C:/lmislm.github.io/public/archives/page/4/index.html","ddf5995d707cdec372481bc50e62c707"],["C:/lmislm.github.io/public/archives/page/5/index.html","07ad688d96402454ad869abc7cce7c88"],["C:/lmislm.github.io/public/archives/page/6/index.html","f789f42841bdd34d383f7fa4e8e12c5f"],["C:/lmislm.github.io/public/archives/page/7/index.html","7ca0708eb4e8abfb821b5f23cd9c3b10"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","dfe2743f01669cb77e023e7904ab827e"],["C:/lmislm.github.io/public/categories/index.html","fd3a18d7d4c8f3146cec4042044d2094"],["C:/lmislm.github.io/public/categories/学习/index.html","6d5efba7a358b434390c7eea910f5c12"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","4c11fe59cf00e01e3202a987a108cd1b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","1756847025f5d42760446c27182723b8"],["C:/lmislm.github.io/public/categories/工作/index.html","1122eee7d948369197fd0c5aae91177f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a5750f3f08dd578bd50222f43ea3cfe4"],["C:/lmislm.github.io/public/categories/技术/index.html","8dd50b9dcbdac618433a722ed0e7dadc"],["C:/lmislm.github.io/public/categories/日常操作/index.html","e1986ea6277cd3954481370bbe6ea201"],["C:/lmislm.github.io/public/categories/生活/index.html","57af74c4fdc5b39f3b3873bd00c8a6e8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8ffec0222c70b99b09114c3868a3e7af"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","21d8ed19a0f63957ff697fdd3f52dc35"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","885856ee68eb5c8163c9c0cd1d9ef4f2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","1c6127a48d06672907e3b476094b6550"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","29cde17ff0e71b03f47fcaa8f28dbea8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ba958df9e287f7fa4da6d2d482da3fc7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","0b6de04165a88db57ba62d835f0519d6"],["C:/lmislm.github.io/public/page/3/index.html","8abc80b6bd13df78f9854ff55e766477"],["C:/lmislm.github.io/public/page/4/index.html","b7ec5a5913aa9e7e3250d275ba3e9ad7"],["C:/lmislm.github.io/public/page/5/index.html","f61bac8f22d9680ee80b9fb17189eea6"],["C:/lmislm.github.io/public/page/6/index.html","b96d6603af4d814453f41e9f914ae133"],["C:/lmislm.github.io/public/page/7/index.html","0b3f863d64465fc16baa6069ca94f0bb"],["C:/lmislm.github.io/public/tags/Interview/index.html","aa90e1cbf2851a631da332cbb6b52c0c"],["C:/lmislm.github.io/public/tags/JS/index.html","90534ee655528a5a9383a0ebb4ecf5ce"],["C:/lmislm.github.io/public/tags/acm/index.html","f8002b34e15e0e27ee309526359a3a2e"],["C:/lmislm.github.io/public/tags/c/index.html","ba609a1a7ec13b8a447c556706307a72"],["C:/lmislm.github.io/public/tags/codewars/index.html","4950ba68d1289c75145524e0a42a8ef5"],["C:/lmislm.github.io/public/tags/css/index.html","6c3f382e93be5649359b8e6b170d18bf"],["C:/lmislm.github.io/public/tags/git/index.html","4b93e4800b9d8f4810d8900ea41a4716"],["C:/lmislm.github.io/public/tags/hexo/index.html","774b4c7f57d0bb1734037eda772334b6"],["C:/lmislm.github.io/public/tags/index.html","743e4b3e5d4c76633ca9caa8c49d3b7e"],["C:/lmislm.github.io/public/tags/markdown/index.html","703983c9f12080a8861c8cbf48ee4ee2"],["C:/lmislm.github.io/public/tags/poj/index.html","7f4d39048f72fb6ae24de001041645e4"],["C:/lmislm.github.io/public/tags/shell/index.html","78041ae95fd4965bc77afe4490f6d42e"],["C:/lmislm.github.io/public/tags/vue/index.html","4b222fc766d8c0991bd3859f2873487a"],["C:/lmislm.github.io/public/tags/前端/index.html","8a21bc2b17d55a220123e57dcc4fdbc0"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e6b6d91241260a96fb7882a23f945d12"],["C:/lmislm.github.io/public/tags/展示/index.html","eec397e8bd0b93a5a526beac7f7be811"],["C:/lmislm.github.io/public/tags/工具/index.html","5211d889cfc018c1e406a0bc2c9d6256"],["C:/lmislm.github.io/public/tags/感悟/index.html","f24ff6562b77976b73576ad628dcc9cc"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","c93b765d23310b09c779b0f312ce5818"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ab6d1bfc0abe081dd18aa6901425d615"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4e85c15cbc66f20e982a87c3181cde55"],["C:/lmislm.github.io/public/tags/练习/index.html","fdb32d9ea66424c53e3786ea10b3edda"],["C:/lmislm.github.io/public/tags/编程/index.html","b65b3d708e045c001a0f4012bbadfbe3"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","b241d1e1a4ce59396a5d7e703f90c27e"],["C:/lmislm.github.io/public/tags/运维/index.html","8d8b67b9a7614d663d49aa4e3a269cce"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







