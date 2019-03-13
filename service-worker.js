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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3d3a37707f53cf5d3a52c5dffbdd8779"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","b06780abe892c3de6982cf53a36ef739"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c150e429044fd1cbf8d3a7f0281f8d4b"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","17897a17a2be4cbbb4a4ce23cf39fd56"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6d4fec7f93a05cceb5209374636223e3"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d280ad0b577539fc99936f12af141b20"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","d2387af55302567b89cbe0b47060e3f2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f47cca26a3ca1532e051ec4f09226a7d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c8abf7073ca16df309bbe11f8c2c8d19"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f14789ee6b46cb8826d05e7604d1c740"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ba5aa21b0c3398b1fd7b181f83c167de"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","8385122584493454b643ff1762c94e14"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2501e4ec0e7b49432615887c55c098c4"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b26fee6821e44c5c58c30ea0d539510c"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e523d5f8931a1da112adaaaeb6e49df1"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","56daaaad1d7a68c9e9e814c25d100e8b"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","b2f343827183bf76f257b36f0b7d7a8d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","27af41a4d7af1aca82d1444d62e09e40"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","bde5db6cef7affc0d90a43318250711c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","44295573daafb32fe6d3afab317e606d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","396898f0c2d4306dd56d7571eb729a7e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e5daa73f407537a8508ea3fa433c1fea"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","127aea28908e7cf06f7327b7a8cd96d2"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","7bd3e6b4e5606f21ea6176924023399e"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7bf2dd8ec88a549831bd8dddaae7e94b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","51b1271ccb4497e8ef27508857ab5410"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5ae6d4e72fc0c930bebfefb2ca856dfd"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b29b5f39a0712777ca891dc06c5a82cb"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","bb8d7a88ac29a7527a86edc2b434957c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d7274d8dd8b3da90f86b87a2a58e7500"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","54d2050723f6d5acb72731b0df2f4e33"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2b8e0d0e06ca305f5604e86806034c73"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e9b9c4a95b7560ee15fdae756070bddd"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d57e731282668ad78f99d797ea0736a0"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0298e33967eb9414b220e2f63de189ce"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","65bbdb7cb3bfb8148c0037ee354729e0"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","561d45a8d9243ed72911ce81165b46f4"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6de2232831099e72e73d9d5a112136a8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","d10f1147af5542c0a8a811932f357ee7"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","77c18257589bb6a41e38f6f068aa9643"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","563bd8b8020348889594ea8cf7d1b45e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9db3daf18f6664b476aa265d3b035910"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","c384c2ab04ec879c4b0a3c52e587ecb6"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2576831e9bb2f4a1ce88bcd2a4dd42d6"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","3afdeaf216f461f6f4ce50d52a86b60f"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5352160059e1946874f868ab1209fccc"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2f80199662e14e998c2f7a1ff5cd9175"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","306af0f504e2425abf1c5ec2d23679ca"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","403f481ca39d269d99ff10b2ad357862"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f44d75991eea1b2edf235f31895fbd09"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","55643f61c59c69d825bdd1910fa49f7d"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","6d1b3d06e74c2d8774e3913f0e9b2f84"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","30fece6074d48d6574d44305ab4d86f8"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f471a23e468c0161f07d168ce0d33587"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","eb1bf56f2b83e7cafb9be4eaaca71f26"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","576306e35e8104b0dd73f832aae67367"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","842c88247a1f154c97f6ea288c894f82"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","2711ceac32d161aa6c648bc0b2e0c876"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2c4de40ddba3ef3020db37062c05ae2a"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","8defbf03c45d36bff9f70cf4108c28cd"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7b8377203a27213597406bbaed3e1850"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","01f2bb9073a36acdce4151c7d805c5c5"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6f488171261d9588fbf4ae0087bc3346"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","518b757c20f165143c9a8c7e99f9c834"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","4a24585cc31e47cd0628476e632d612c"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","1390c59f8a81652b31edab55fe64acdb"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d75efc059a873717666d77e6557363a7"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","7291dd2303716001ae50b3893e0111b0"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","cbcd6f0d5c54a53b0711727ff69fdd2b"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","e2e0cf395db2bab6ea4a8d869a774b44"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","6dbc5254de64c5a649c341584234a2a8"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","21edd1e94a2e42dd56c9d0f8cd4f4417"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","4b63c56f6e9778705bb8b9ea26bcbb90"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","17f5834e1887c9d2e72c9f9a6682dce6"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","cb08b36713cd9fd011bb43b2c48fa20c"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","1a867df4a773dc37b427e361ba6332f0"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","14bfbc9c1cda38d74268cd12216f7546"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","4853b943771c876ea030e712cd15f4e1"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","251210a1e7a7049bcd84a29b73a5331e"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","7162bb362390fac4dbbb3ad57df4a38c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","4c18a1f8b47f0f7f955185e58bfb20c1"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","47e08bae4f9946d85634a49f5fc897fb"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c4663bb0a45815ff1552edd79f36d31e"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","5c82a995cd5f453eced24935853c66fa"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","c4cff001b22b576f813f6b4887ebae9c"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","a867b2dc3f501370eafca0fb6cc7c7db"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","9c2d0d949c07ee4418dac39a42281aee"],["C:/lmislm.github.io/public/about/index.html","4d9052226362843bb56952255b6f03ac"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c87d0287f704ace1b407c33f029cf72f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","01b95fee7a3285b96838e808614d304e"],["C:/lmislm.github.io/public/archives/2016/index.html","40beada80a326d253bee679cb79a0a86"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ec85f8f3c08db2009301ea29ff2dff3b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","212580400b6fd1b37367ed56f4a09ae3"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f192af901129d45dc54f98756e8216af"],["C:/lmislm.github.io/public/archives/2017/05/index.html","1d0c37d426dd460bc949ea28d674c3a9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0f74afb0b77bd61e2aa283e7cdef5307"],["C:/lmislm.github.io/public/archives/2017/index.html","12945036c50aedd1b90695cbde489bf2"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","37d1ccaa6cd5a0fbcb1785f989aef435"],["C:/lmislm.github.io/public/archives/2018/01/index.html","37730702153209a06b80b16532f93f53"],["C:/lmislm.github.io/public/archives/2018/03/index.html","67940ba609453e4186a530cdae76edf0"],["C:/lmislm.github.io/public/archives/2018/12/index.html","f06aa138f51dd234e0413a8ac4fc1838"],["C:/lmislm.github.io/public/archives/2018/index.html","ae245b4ec50ad7879ded3ef94b12a2f3"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a54cf362bb99588efaaee0276d6b1ea0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","78e8ce45fd727b01c3115710bb772aed"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","a66c540f928b787dea8a1e106f69f564"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","d8842c4d67f99f06a61ad6bcbc4275d2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","11074784ef405077a76b64245178c458"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","1b39c0761adc069521d5c680de1e9fcc"],["C:/lmislm.github.io/public/archives/2019/03/index.html","9d77091cf6ada3266a96b66bf06c5b9d"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","81a33c2599de00679b2f3d2ea855c238"],["C:/lmislm.github.io/public/archives/2019/index.html","ce08ae0bda3f6f33e4c339cf741c510e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","131390c33a2fcd4faadc6960dcfb7e77"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","c3cce36b16cd83977a6a32b42dad22a5"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9bda9dfe2d851de6e041ae422247f4ff"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e6727dafc74a2fa6cf288872fcb9c517"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","eb7c824b277a2f5c9e184b1e824525e3"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","41ff359c8f2a761b96830a092e82b18b"],["C:/lmislm.github.io/public/archives/index.html","7a278588d21ec7e37ced06518ac006cf"],["C:/lmislm.github.io/public/archives/page/2/index.html","8d8311c4adf0256f93bee26a7c1d4bca"],["C:/lmislm.github.io/public/archives/page/3/index.html","cb2499a53b5560b8fb04415e3eb82858"],["C:/lmislm.github.io/public/archives/page/4/index.html","c43cf074a12883a44942e22f45aeabb2"],["C:/lmislm.github.io/public/archives/page/5/index.html","b1967b198b60fb59869b2aad17f36264"],["C:/lmislm.github.io/public/archives/page/6/index.html","0d113a127121d55d25b19d13e2cb1874"],["C:/lmislm.github.io/public/archives/page/7/index.html","bfb80be4fcf14b6b8fd82ff8ea3aa479"],["C:/lmislm.github.io/public/archives/page/8/index.html","cabddd1a391ea5a0ceba4399984e083c"],["C:/lmislm.github.io/public/archives/page/9/index.html","063e210563b507071327fded9d5480e5"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b2ab31bbd69af2ed946130fd47fd9889"],["C:/lmislm.github.io/public/categories/index.html","9d9fbe0ec8bcd5fad6847b02d299f1d7"],["C:/lmislm.github.io/public/categories/学习/index.html","1dacea363290664c38576b383af360e7"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","939e78c8c4227b53ae17392f0a2dcf2b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ca4e6ea65a317330bf72de14c2558892"],["C:/lmislm.github.io/public/categories/工作/index.html","8ef41956fe0181b3c575f872163a547a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","d74a02163539180b30c604a1a6fc6802"],["C:/lmislm.github.io/public/categories/技术/index.html","1dbb091ceb439890521251ba9a0dce00"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c749a9ab69b40697de7d5f6b784dbe04"],["C:/lmislm.github.io/public/categories/日常操作/index.html","2eb63a7da05cd9e35ae965f9d7f65d14"],["C:/lmislm.github.io/public/categories/生活/index.html","0af4539fb122c2f5062a7daddebb6fcd"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1b8cae109fcf50e76c07d3da7bd542d4"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f26a217c96ddb53c67e08bc6ad8162f3"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","53580c726fd1083e2643a488a6e936f4"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","0bf89c74f387645b6dca2038200becae"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f47ba67174b7636ff3c902843a1a594f"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7dd9f141d258ceafd458605000d63096"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","7fd730fc82de8bbc7ee9f22a9cb4b226"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","69b68ef6b5261124d2fb1265b8b66f19"],["C:/lmislm.github.io/public/page/3/index.html","6cccca37fd6d4abe4b3167cdf5edabdc"],["C:/lmislm.github.io/public/page/4/index.html","e82995f66942f4b49e7d5c27b62ec729"],["C:/lmislm.github.io/public/page/5/index.html","1f01520b173992b0a2fefeb726552e1a"],["C:/lmislm.github.io/public/page/6/index.html","7ff627fa459ed304dc0d5617192491c1"],["C:/lmislm.github.io/public/page/7/index.html","65367018667e96d88a41435765e4f957"],["C:/lmislm.github.io/public/page/8/index.html","3ce6d52415ce6715c31147c8b9a1f2bc"],["C:/lmislm.github.io/public/page/9/index.html","850acd1469ca9820ad8957b881d55098"],["C:/lmislm.github.io/public/tags/Interview/index.html","e854c8df1e02d6576baf27ca7b7750bd"],["C:/lmislm.github.io/public/tags/JS/index.html","fe99cf71b23073898e8fad29c97fef70"],["C:/lmislm.github.io/public/tags/acm/index.html","5bfc776919d7c90b4cd1d50d7d903ab5"],["C:/lmislm.github.io/public/tags/c/index.html","957be241c49927721146245562b81659"],["C:/lmislm.github.io/public/tags/codewars/index.html","23da86007589685d86d52214c9348a6e"],["C:/lmislm.github.io/public/tags/css/index.html","8cd8d7461348ceea858cc89902ad0655"],["C:/lmislm.github.io/public/tags/git/index.html","22e4d5220e96865622fcb70327fedf1f"],["C:/lmislm.github.io/public/tags/hexo/index.html","a62a82263cd6134dba41366dc90906aa"],["C:/lmislm.github.io/public/tags/index.html","e5c413a6ad061ab285427ec5559f577b"],["C:/lmislm.github.io/public/tags/markdown/index.html","27073370961dfd863ae07d8519598917"],["C:/lmislm.github.io/public/tags/poj/index.html","686b2a80f7e6934055280d1b318ea6c8"],["C:/lmislm.github.io/public/tags/shell/index.html","bd50be6dfdd369faac3c7ba3d801af38"],["C:/lmislm.github.io/public/tags/vue/index.html","3a6f25a08a097292ff9115b78df62d47"],["C:/lmislm.github.io/public/tags/前端/index.html","4d2581445eea2b2b9d00407b6ec40f59"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","20ff4a7aa7505292ae7bd4260a0927b7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","583dc651b779f0e28dba562aef74b131"],["C:/lmislm.github.io/public/tags/展示/index.html","9d26b481bfc928be121b7e8fc80add1a"],["C:/lmislm.github.io/public/tags/工具/index.html","50120064b0570120f24aa210fefc9e54"],["C:/lmislm.github.io/public/tags/感悟/index.html","983b06fcc177d90594bb89ab1b07ccb3"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e4d98c33df231a5f9c4504bacb188a6a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","d0d5cf1ce3ede526c073197b95daa4e5"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e33b2bee93c81d6b7564b4ddcdc45b33"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","219e420dfe26d6dad14b8924425e2eb3"],["C:/lmislm.github.io/public/tags/练习/index.html","e22856fc8646f57761e63e9bcb331775"],["C:/lmislm.github.io/public/tags/编程/index.html","3241e2ab45d8c5cfb5ad6fdc651d7056"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","bfcbfa4953072e4db144adaeffc182e8"],["C:/lmislm.github.io/public/tags/运维/index.html","6e38b1819ceaa848ccf4e5a9c57eb61f"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







