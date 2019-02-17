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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e3addc1b0eadce4799952a6dcb4143fb"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","1157b68f51d6ee5b38143bc1521fc827"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","8f103cff5e339ccbc2fde10fcd5158e0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","5e8b95119ce31824f8675105dc770886"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c9dee69e12bee79f18ab42b31595508c"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b734b1c3bbb9b5d831130e48c26c26b0"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","db527391e909831103ebb754e98b9683"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6f2b4575d5b35208c89c7a9755d952cd"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","131aaa0c83937ee95dfb7f1bdc0cffdb"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9bb9b49bbcdd0c07f0e041fccfbd5bdf"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8b5edad667f48381a127ace171651e32"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d1fbbf61d92a9ec2a7c2c7c432ee3079"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","24bf60ac7c285fbdfb43606454da17ac"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","87d9b2abfbda12031046577b2f7eff28"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","740ae03e29c050b7409ba514c9e72b03"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c248bd6b87a0b233d04aa3abe2c40f80"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f9b40a7c2fd31924e983f18de8668f40"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6953d5f646021a42c5a3720272332da5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","d4b7ca4d3a5516a80295e0578d5fc2c4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8cd2c15834ba0d421d5aa5d2a2674043"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c6d51c24919934e8bdd747088e33fb3d"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","b20e99cded68bcb9cc3bb3509dfdb968"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","e800ea391e047a473428c6a66e678532"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","543c5cda84fc165ce05924724230f3c1"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2fdf42aa60e8a868371adbf99f0b76f4"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7db75eae85b4c0a7a9aeef397ccd7c8e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","e5e20b7ebfa9d010a3dcb501dccbff7a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b4272463592593852d9fc5bbca24c7fb"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2b911073dfb939abbd6a5c6dd8c83b3f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","5ce3190ca062b4e5d838facf3461dbcb"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a5be7ffd9c9181bc687fcc97dfea1989"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","cad601cc67c808266119721c5c39553e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","6acc7b8f41766236d8037864b5fc8e6a"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9611644cedfdcc91bb72636255ae96c9"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","e673a1d3543596c066f3a0d34b8d8d2f"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","c497f6d6fd3e0f745cc83bd1363edc71"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","33f83a3f28693c1c7b9730557d5c809d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f4c597c2938b3026d8495502ec2caa9e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","c2f58872cf70db34979e74c9083c5153"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f5b8f500db18c5761f5ff26724f85327"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","bc6856a026722a94ed6b1cf46b51937f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","b0b8ed7e9ad34cb0cdad896c06a44eb6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a8cd5bbc975bde0350e4f8430adbc843"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","1ffb1ddfd22a3bc72c8317320641dafe"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","555e9c1918092a95cefb5f2227946e2e"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","75a6e3a960c074c5754f0f825f8ff6d4"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","566d36fa5fa636ad136b4b383abbd31a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","4c79a3521de154eb2509f2338f2bd02c"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","21f374edcb8b8d486c5389533e7113b9"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","000573a01eb246943c283b9fdbe747af"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6cdd0375ae0f92695c25cb5f055e7b4f"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","45d658af4a55a8741532e8fe0e939f10"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4530f5d6503e463b8060137acb1f4ed1"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","fa27a4b34428298d1a291bdc32f17cea"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","05b7daed27fa848b4ed009258224230e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8ce8a982f67a23b4327ad3f8b1bad3e9"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","1c3ffd866deafbad0a7c4f82cdab1c35"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5a40fda3b2347da5ad819265c31ea5fe"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","a4fe06768332ed21f1495eb31a348ef3"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a853c3515b9b3b9748ad93dfb20e1b40"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","17130566de9d0fd834e141c1dd4dce6e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","6ce30a108c644b951b35a5db7b178982"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","4afbd1e7b528eff71b6e7a487ddbfc3f"],["C:/lmislm.github.io/public/about/index.html","3ea5e9b9e2642ca523c49a2043d53c27"],["C:/lmislm.github.io/public/archives/2016/01/index.html","64b2c0c5040bee21a6d6222d8f206247"],["C:/lmislm.github.io/public/archives/2016/03/index.html","fcbb11b050e385614ed3758ff7ed9242"],["C:/lmislm.github.io/public/archives/2016/index.html","99b70aeafd040c50d5110f6b1004b88a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","82212922c3dea3d547a2ff13b7c07e50"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0dc01f25ee3a9ce736779e49a73bfcec"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f0bacfe2b05f025f2b2089a52b925af7"],["C:/lmislm.github.io/public/archives/2017/05/index.html","441ad5a0e4db6575438a8f450b2c4433"],["C:/lmislm.github.io/public/archives/2017/07/index.html","5f55c5dd3569832a98971b1dfbd1df36"],["C:/lmislm.github.io/public/archives/2017/index.html","3e7005efd4b83b53c04edea99c129044"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","03dc10d097b938fa3566ed6906cdb269"],["C:/lmislm.github.io/public/archives/2018/01/index.html","8dc68d6fc27b4e514c0a5cbaa965d51b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8c9d217e785ee7b98ee92bba36de01aa"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9b680dcf0ee69e370b228905f142fd7d"],["C:/lmislm.github.io/public/archives/2018/index.html","f5264331d933acfaeb646371eb9ed5f7"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d1e0f92e26808f16565cdea290dfd543"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","270d91a4f3b8df23a5e8c74ee0f29c7e"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","c9a0a5e4b3b0a0558afba4e6fb092238"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","d815bf97e9cd5ee6b2d283e612d93889"],["C:/lmislm.github.io/public/archives/2019/02/index.html","6c1bcc7e24e24c8c8f1e0a0ae13586d7"],["C:/lmislm.github.io/public/archives/2019/index.html","5758ea76bfe8297cd7d5a8eb3eefeba6"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","b52faccf457b69ca1888ceb16dae15e1"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","24092088fe899469d56bd8079b93846f"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","47adcd3a872d6c6729b0cb7a46dd15c8"],["C:/lmislm.github.io/public/archives/index.html","c81945d849a18f5c586a2ce7913a7247"],["C:/lmislm.github.io/public/archives/page/2/index.html","fe2fd0307c31439ec001201886089471"],["C:/lmislm.github.io/public/archives/page/3/index.html","625e67097bcc24613f5e48ac3c896de8"],["C:/lmislm.github.io/public/archives/page/4/index.html","1b9c6330ecad58a391caea4c94721cb7"],["C:/lmislm.github.io/public/archives/page/5/index.html","5c2701f3c144445af712f3e63738eb85"],["C:/lmislm.github.io/public/archives/page/6/index.html","272aaccf27aeb276567ee261244ecffe"],["C:/lmislm.github.io/public/archives/page/7/index.html","6b68924fd4f4100fc72c57cced43b6d3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","989593d5e739a13fd8a2aef9476cd0d1"],["C:/lmislm.github.io/public/categories/index.html","5254822b0934503e4b490ac34fe9ba4d"],["C:/lmislm.github.io/public/categories/学习/index.html","0c9b718c6ba157ec342b58d798d49597"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9af95e7f0dea958fd4a4630cf0c9ea88"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","469b830dada0d5627812ab456210a1dd"],["C:/lmislm.github.io/public/categories/工作/index.html","9de4a9b99327dda3aae33a4e6e5f860c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","266a501d96619be30a3b0700cd624737"],["C:/lmislm.github.io/public/categories/技术/index.html","ee80dba88a2b4911b75dc34ab96f4801"],["C:/lmislm.github.io/public/categories/日常操作/index.html","871341b97809118661daca2566b25b94"],["C:/lmislm.github.io/public/categories/生活/index.html","8e4f73ad70ba55a5838dc2dba7196380"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8ca4ff51e9ee0e1c6ddefa725170f1dd"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","c28b2fb5647b697b1aa7ef0b237ef0a9"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","4dd87dbf604d308618139598a4982aca"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","7bbb9ef104af77d6c3d95df8afb2a6e9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8e7222fb77e8f0469d934ab4fb01b9dd"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","9d99d055e5fd06d300bb77d82b3ccf7e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a36828721c227cdfa5d310c641a42e34"],["C:/lmislm.github.io/public/page/3/index.html","8c8677ebf5615160b48fc1041651f9d0"],["C:/lmislm.github.io/public/page/4/index.html","fe1363087ce288b7833dc40415a44c29"],["C:/lmislm.github.io/public/page/5/index.html","01aaa33557069a35e9ecb05b5c7385be"],["C:/lmislm.github.io/public/page/6/index.html","f3940f132c969e03642bb8ae8052cf9c"],["C:/lmislm.github.io/public/page/7/index.html","43384766f40852c57e44857e6b1267ae"],["C:/lmislm.github.io/public/tags/Interview/index.html","c21806eaf88e2969e81f2f77fbc6b5a6"],["C:/lmislm.github.io/public/tags/JS/index.html","faf374fa87d254f1222b7d19940deec4"],["C:/lmislm.github.io/public/tags/acm/index.html","dbeb8eb28433b9d5820c316e4d512264"],["C:/lmislm.github.io/public/tags/c/index.html","cda2bddd25629ee9e330f6caa6bd9ef0"],["C:/lmislm.github.io/public/tags/codewars/index.html","2cdeabc0957791bfd3e6bc0dcd8b9adb"],["C:/lmislm.github.io/public/tags/css/index.html","4b3cc02a9b073f652d1ac101ed93d2ed"],["C:/lmislm.github.io/public/tags/git/index.html","e2b62cd2ff2a7a83783b53b4faaccc61"],["C:/lmislm.github.io/public/tags/hexo/index.html","b48282b551fd7480abb7eaa516c00f02"],["C:/lmislm.github.io/public/tags/index.html","9b50eaffdd3da7098f2f3b921bff746d"],["C:/lmislm.github.io/public/tags/markdown/index.html","c6007a504ed4162c4b6104c89bfbd246"],["C:/lmislm.github.io/public/tags/poj/index.html","b57fff66443c80c78d53de67d742ded7"],["C:/lmislm.github.io/public/tags/shell/index.html","e4e121e0c25bcb23139f403d65fe5f9c"],["C:/lmislm.github.io/public/tags/vue/index.html","6be1c0a4c1a5921e057e9dd785baf222"],["C:/lmislm.github.io/public/tags/前端/index.html","9a1bfff1dc8c9adfafc7ea77bab4994f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","774ecb1b3e4ba307b909db68a552ad8d"],["C:/lmislm.github.io/public/tags/展示/index.html","4defc580ec2b80e1c4cb72f289bec51e"],["C:/lmislm.github.io/public/tags/工具/index.html","e5444b06daa365ffabb556ddd353ac29"],["C:/lmislm.github.io/public/tags/感悟/index.html","7a1671484503fb5f34be9e236bdde3fb"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","279bf7c4e84fe179e7e6c81447eceb81"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","c738bbf0d99895969814cb17048e7326"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1180773f9ce84cd92ac1a4886f9fdb65"],["C:/lmislm.github.io/public/tags/练习/index.html","054858209cacd295f7a0c50dd136bbf7"],["C:/lmislm.github.io/public/tags/编程/index.html","a9751e7471d7210ec3bd796f43eb4c12"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","938def42330afd8c69aa2d7259c30ac5"],["C:/lmislm.github.io/public/tags/运维/index.html","977c68fc8dffea6321ed45ffc9489674"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







