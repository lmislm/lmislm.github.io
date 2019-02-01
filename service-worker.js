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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c08a7764ad7085eb467f6a722343d1e6"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","20f1672d42d0b8ab72b1825cf354b820"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c0eaeb2d20238501fd34362cee4359f0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1ecde11f777eda71f546336946d03226"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","e3867b6eabd3abe1743256db7bfa3dd4"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4249162d7dbafc39a982d929e1ab467c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","23743479ca233071fc8868211cc5251a"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","d2047d553e798829db3c498356918562"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9849875417b91d5a9f5e3f56a99f75cd"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","db3fca8be82c60e0fb1a8d44bb9d3306"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","883934b7657666799805874e0a5d133e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","eb6dfa469997a5d81cf9d477aed87713"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","7fdcd23fdb402a948aeb4cfffcb66035"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8847de97da8ec43737fd9828ad2f7aed"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2786b2876fe52f48b443efe80cf40975"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c63bc6246e431d977c4d95224fdcf1a5"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c08ccbf13163bca76cd14744e8d1e465"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","dd0cda55f204502f139890ec5dcea52c"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","789cd72237d17fa2e1377377c7d0d5f9"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5732da0f2fd0cb34558c505258d14882"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","3ddbfd440fad646b02125a1e599b7293"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","66f644efb9f2b7c3855960b6e2e9449b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ae17f0641c0b68faa7332e7026993237"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","527f57bdc874102469e44d7eb7bff315"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","014cb2b1ff3308c27d7f776372835bdb"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c663714309ed952a680aecd90a3ba652"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a44c52a3335bf58f3aef60a9f71c1033"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","791a58d37d054760bc2a812f25323143"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","bee8372db59e899a585f7fd3429ce9d8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","99aad35c75db82d876da1f33fc3b5d28"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c0dbc9624430627ba1fc7cbfce819365"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4faf9201e6cac8866b39ad876889cacb"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a6de9fba595a54fa75ee4b9afa7e0806"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","7230d12cf6dee5a9212ebcbe7e17e478"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9b8d73554ec43ee85ee984a00c717f0b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","616df037d38a8fda3dc0b969168d8c9c"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","152200bab60d1b2662288912a794877f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","7da55e2e40b50e76137417a5de0424e3"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","4b4246d00d3a32c08336342e54b55d9a"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","28ed4fcaf78da6e3ed190c79438b5336"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0885f3e5fc210e2d9751954c4c726b34"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","a7c739109bf086454426a9aec019dcde"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","998aae5c76a566734ef4743cb886d813"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b544a6b78f6cd9afba84409523eeb7c3"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","19635da261913f3682c3bece547c3c6e"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1d19b0fb4e90e1e767f10ca0b9106b40"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","394bc2628636c0f8494a0ce95c9dbc06"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d024fe63205ef96fc2cf2b2fe1f0dfd1"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2728d9184fde1affaa21a73724d7c77a"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5bd697e36e9f9a3a767fd8342fdc32ca"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","77c09c34e55240c785289135c67737af"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","2d87281840a9a1a286d15162a6f1324c"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","49b039eaec508915ef13dda6c469e8d6"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","17ad1951541d493f05bee8111b9755fb"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","2a9d77d2201c5f343d8ca157f0f4c91a"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","6da97b785ffc9fc0e780f20129fa9445"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","6b951ed2c7965060d393cf426d64ce38"],["C:/lmislm.github.io/public/about/index.html","6fa29a644a5070a1134f38744afdc1b8"],["C:/lmislm.github.io/public/archives/2016/01/index.html","3ffd6c825cc8be354d8d3496abbb1231"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ae03a5a18ae8de81aaa634a121ad92b7"],["C:/lmislm.github.io/public/archives/2016/index.html","e83575d79811f867338e76123f7c0e32"],["C:/lmislm.github.io/public/archives/2017/01/index.html","a3504970e5b4f8128b00fd50bbb65e1e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","9fac06e13ab68bcdc202cc12d0d39a3a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d0f67ac3000426db94c7d75ffe4fe28f"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2778335fd987285183692f5e2bcf7796"],["C:/lmislm.github.io/public/archives/2017/07/index.html","37c0aefce743565f1f945afd6c83355d"],["C:/lmislm.github.io/public/archives/2017/index.html","e63e1cdf4ffc60bb753a1f8bc049f9a8"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","761f11deb616bf220194a92f022a6fb8"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e8cff849939b98d8b43fb1477c93f713"],["C:/lmislm.github.io/public/archives/2018/03/index.html","440d0d5e18a353fa7dca15a33958c547"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3a7a7d1b4ffe1f57a8d492cd4f7923d5"],["C:/lmislm.github.io/public/archives/2018/index.html","24399161238f96ddec64fda93b367218"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c317a7117bd74cb20267e75c06c74558"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1c27f16038002ed5eb312a8106f5a113"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","9ca6d61a09d68a97c8e958e74c967085"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","81d3a831d8bb1372d16c5b0fc0c1df7d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","711a6d4fb9a08a5ce8c8111d7157b530"],["C:/lmislm.github.io/public/archives/2019/index.html","c4a6c277d8a1e3f48b46cffea1d94e04"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f5412418346435392dd1ae21b59c90ea"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","316c3e0b093991eaf5ccb901b9fa6769"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","75405358fbd8293bcb1038374a06bbf5"],["C:/lmislm.github.io/public/archives/index.html","f04b70bc8d82dd7182a2b55b246d9e7b"],["C:/lmislm.github.io/public/archives/page/2/index.html","03096962f756398d837971b11e71162c"],["C:/lmislm.github.io/public/archives/page/3/index.html","0456d7ac7f8228ce70f4f701e85ec103"],["C:/lmislm.github.io/public/archives/page/4/index.html","5c33ae7b64480779cb65e1fd0ece7ca4"],["C:/lmislm.github.io/public/archives/page/5/index.html","8105ea354a5c482a135d49e4112278f5"],["C:/lmislm.github.io/public/archives/page/6/index.html","809eeaac65fed3958281373f8a8f1082"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","377f80d5bb02fa025d52334007bef3cd"],["C:/lmislm.github.io/public/categories/index.html","163872c324428420e6a9781e9d7a9fcf"],["C:/lmislm.github.io/public/categories/学习/index.html","ff13fe5d70cd6859afcf9e322a4a79f3"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","88f16d14dc15ace9b2d211cd20f9e173"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f6a852dfdc7447c931cd34dd5d829a60"],["C:/lmislm.github.io/public/categories/工作/index.html","327c628426f120b898ec8c135063b725"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","9fd1bc0b4e088a68ca1a2a92c40f081a"],["C:/lmislm.github.io/public/categories/技术/index.html","cf1a1d782fcea1dea1a63e77af8e2c4e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4631e4d397ac939ab0a964582a0c0436"],["C:/lmislm.github.io/public/categories/生活/index.html","7606a246c1b7f05542f16101379da029"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","5d0e0c2693a0121ee837d3995043a22f"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","6ad471e9676e3a026d619762792b2d77"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","40b3a0f25c1156fb4e50bc329d04a8af"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","de352443162df01f9a372ecc6e05da5f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","fe68f2a4d06c7aabe3c184ddfe73a96f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","fbb9f7d67983da8b0fe24f67ce5fd282"],["C:/lmislm.github.io/public/page/3/index.html","58508d0b715387e07c12ca41e3545b7c"],["C:/lmislm.github.io/public/page/4/index.html","802de0079af97f53defe83b1f22dc4cd"],["C:/lmislm.github.io/public/page/5/index.html","c9984785bc0859012db9d408b794b859"],["C:/lmislm.github.io/public/page/6/index.html","8031ba6a057e5d7984da375793e3cd3a"],["C:/lmislm.github.io/public/tags/Interview/index.html","26aee9a4f1eb59ff260b226b8f5639f4"],["C:/lmislm.github.io/public/tags/JS/index.html","8c9e264b8d5ae810016c3b6018c563dd"],["C:/lmislm.github.io/public/tags/acm/index.html","f9f5a2451e7b0e9b23f28e8d45e5423e"],["C:/lmislm.github.io/public/tags/c/index.html","eb6648cf79ee07c9ca6902f172b502a8"],["C:/lmislm.github.io/public/tags/codewars/index.html","c02b4fe568eda5757d49567d0c48e4eb"],["C:/lmislm.github.io/public/tags/css/index.html","d4e68b931b77e22d7cfef9672e73f3e1"],["C:/lmislm.github.io/public/tags/git/index.html","d115c99d600129b332c1598a09893260"],["C:/lmislm.github.io/public/tags/hexo/index.html","92ed7102bb4c81f116fc1a886b0485bb"],["C:/lmislm.github.io/public/tags/index.html","1fa60cde27816c6d3da91616beeda9ea"],["C:/lmislm.github.io/public/tags/markdown/index.html","50bade23142820efea0185b542b8a8b1"],["C:/lmislm.github.io/public/tags/poj/index.html","430e0058009df5fc6e6dd9db1c7deaec"],["C:/lmislm.github.io/public/tags/shell/index.html","6d805f7fadecac914449511c283a876a"],["C:/lmislm.github.io/public/tags/vue/index.html","0a4708ed711f661536d19842d824249f"],["C:/lmislm.github.io/public/tags/前端/index.html","6dea9061f8aa5eaeb7c382d80747f801"],["C:/lmislm.github.io/public/tags/小技巧/index.html","4a2972be621bbce201a5aacce1a61b8b"],["C:/lmislm.github.io/public/tags/展示/index.html","e55ae1bdb194f02a73fbaea984dbcd29"],["C:/lmislm.github.io/public/tags/工具/index.html","c3c585805ef84c9a9b6fd7b6076a4bf7"],["C:/lmislm.github.io/public/tags/感悟/index.html","a30f77c25b37346188ec834d91b2e254"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","7517d2534ff3c5d77246aa7acd20648e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","100ede09a9b5831df3c8ebaa6263936a"],["C:/lmislm.github.io/public/tags/练习/index.html","b0a278b1e3f03e32ddbec91470005a92"],["C:/lmislm.github.io/public/tags/编程/index.html","cc19fe9a91b6ecb2e8fdeeee73422a76"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3937e825fb8faefd7cfa70e47f6e2a6a"],["C:/lmislm.github.io/public/tags/运维/index.html","34d1fd5f53f6efc7887a4440c0c9bd12"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







