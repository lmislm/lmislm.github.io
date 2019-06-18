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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d463b6d7653dfabc89a93a309fa7b6c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","1e50a7e65dadb1bf1dda8834b77a32d9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5a77b600f6eb09bebb493d0210631602"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","5973397e37fd2225b6be65ebffe491c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","30c2d6bcd7e747e9d5ff1d18338f389d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","ef669ffff930c0c819505a8d7f6fc68a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","10c09b63a81b3848c3ee2e47f01ea32a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","1dd27457c7b026264dd1c4eacb9e25e6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","5913e2b5bb197e3773ccaf424f3fc154"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","57847024d6d57383a5e03278605a2d3d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","cb487f0aa40ef0b42ad4e2087ea687f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9850624e58ec702a3b119915b2dc7ff2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e208af0d1c153bad7c54ea82f6a9ff2c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9e4669f87191849fcec169ab4abdeb26"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","796349bf941e5adae34e0a035013cd74"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","cf44d9eb34fa04e567bc5d16ca4d9dad"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f68755f30842b25e0a4585f7bf28e573"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e33c37cb440d8c64562fef652260149e"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","5fb1162790828d94e9df282bace8d3bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","cb666b26623a4aabd68c5ae14e39c1b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","e18f504ca6b5a8cffca1ae1ca10a46a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1f21494c25f23de1d4fb340e5bec7571"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","e5ef3e741d8929d73e69aa7d40027135"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c4a494a61928e93fd1bd1c7a0748a755"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","24533b7ea7a95ae476e19b75a0043f5b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","13c20e61356ad1e2cb94bc8106856ad6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","f01a3144a5cba9357f0286de40e959f2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","24def183932f4e1e3e1a5225f76db6d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","bbf6ac1303d45145d7890dd114ba7838"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","003aa409a099e0e11b52e41f9342214f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","4933e18bbe3dec1424db66cd6eab82aa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b46cef2aee3182971e93217733eb086a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2f4585480e731e22878e3676e038c864"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","ccc50dd3ed02193067e0533927fa5ec8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1136213b2ae7b370fb5bd6329ca38905"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0ee523ea14d50093ebdd135f66d93bd3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","64677adb5bf570eed20706b0c5a6eb45"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","212e0db3fff5cf3fc6c881b8fd3bc22d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2d772d0381771ce143f0a373b3773f5f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d7e181ff82d2a760b7f23f38b5eeb855"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e15f015ebf607b4745cafd2e1bd773d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c1345915f15d45087694764654b76feb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","a3be2ede94edc2b4b525681083d4397f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","f154fbf1165eec18f7f968bca9b3e67b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","33b7b846d68150c4b6ca11b849892eea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9300d9427043d04cfb944564c56e002c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","352d16222e74864c0c81d48580ab1c31"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","2c21811d9217359c370593d9ba8d4f6f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7c36632bc02b7f816c3ffb6ae54e0670"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","a6ea40efabbac78277e21fdddb3adb15"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6417bf8df5e03278c4bf385288529e6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","47ce61c6912abb9f1a160d441a01bb2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4a9babf0c0298a9bf4f4190f84b8d0dd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","af7985d21751583522a484a3b9821388"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","15a6daa3bfbab467946c32ab0871b710"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","903e7a1b52453a9f072fa7c3a31b8849"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","938059d461074788fe00971e7ee1c71a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","0e3c81f598a9c1f44cda89d3a4d810fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","c2bc7171cb8757d4f05452f3a6b1871d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","6ec10b62dfea1fe6b1bd4e2bfaef8de8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","143059aa9d1863413fa105d45a8cbe91"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","38a833b099a08cb9d5c810592c5f2c44"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","7d7742f6eb0894efa77f6ebcba6a934f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","04c1444fe92e422fac04a0e2400896ff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","8b8f42ca76c06328c7bc9f5e1dedaa17"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","40b5c3a3cbb868a5727e04816142a293"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","50d3fb3142abdd8de389d7159d188123"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","722b4664842fc3f91a090f594fb6fcca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","81a0c98759595d908820abda7c2f5d74"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","86d8d47a3f67de95a18a977f676255bc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","440e1513a9aeb253ac28cc9ac8e456ac"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","a89d4842b69b310ff46a40a99940a996"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","8b5c4ab3adda34c775119c786703573c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","183170a6f8a08bea3be1dbe5f19892e6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","da3c7890d846ad11f1cc101a6048fa75"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","6f39f49c3b83af385f89dbfb753eee92"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","280e622e06f5ea2356804331ace83f8f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","966ddc6d49054c75c3592945a11fc9b3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","c63a82dcd6049a960f6898ad67a23f15"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","439b3a3b77a66e69dcb23e248239c96d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","ad0fe21bc3582a12c94e3827e32d54cf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","1f3b75d90f069a7d5b5404f135d23442"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","e353832f1d6eb479e9774bd618d5723c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","51bbcd6be2ced6654410f0ce8ff85731"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","2aeb3048ff3316fce2b51b2100e9294a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","a705aa24da8032d6e86a4d41b48c9a01"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","4e125392f84e800eee4ab395a6b7246c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","d6fb819c5c0c0fedcf7d267c40bb310b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","ec3fd1c96ff7fc6a4c91f48376f19152"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","10759717ccb033ed353d802e47d95ec1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","3eff6c1696590ef46ae8625ee19a55b5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","a490f6f769276fa75308a11d555aeba4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","60129f047d7dace32517d93ddf0a6e31"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","40550a4fb09cb0432b06a5a4021741db"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","b92627ab25dea878aca69df91a262eee"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","9f2f60fab35702d73744355353078c06"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","e2ca09054b918afa7ef5f7be01e00900"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","eaf5085df682ad4670c760640d7548c3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","ca2ebc53f65da4c43775b4e0c335deb7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","b88babaf7378fa5060c01448a25a3840"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","26e102575b18597b2af11fd40cd6d904"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","88b560fb001cbde0d02e5efe0e688761"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","1824b2394fbf9516848ec3e51fe2da45"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","26ddfb30b6a2e1f1c5bf681b7f11e501"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","89aff4d6354dee7c8ca1d6f4f0669990"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","1bcdf2e8688241a924e3c48f52615176"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","815e05d689f0b301c9c347b5553cc781"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","a1672cc3de83ad5f480816134d1781c4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","3e544ddd0e424402da98fd662c69fdce"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","be22b13075a9bb96e49779bc13ac1133"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","dc6a527056a398927b8f0cb210a5b6a9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","46bf14e2eee5ea0dfdc9cbffaf2e713f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","d02483fb61ebb06e7d7ac299d112994c"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","1b34ebaaa895bbb643f69c70c66b8fbb"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","d0013c14a588372a139287d54702a8b8"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","c51a56cb0df91c382efe2bfae9eecaf0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","27e9621a343d39e5f8bc4a6a6d790a07"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","7907e762b10ad24e081e3343fc57dffd"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","01591200a27b69dfeda99549b8e8ec27"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","b4c203c1f8bb791d689b4b260e602769"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","cf9203f2ae6327e8dda3969c6a938813"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","abe5973a31e0c2c1569b67091a6474e8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","3abc2492ae96f8447f2c70cfda651e1e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","584545aea71d252e5b31303ed421e0f3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","b0961b967bfcc5e478fc2c06c2238ab8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","ba1a588fa95c1317d33b328fc45b0172"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","b0d9bd81fc9af94c08602fcda81afbff"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","e637b0ef958e33b72f0024635df0b035"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","2bdf3a1e021c1ac3cc0df46adad5a8fb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","0348f8eab627d4cc30b45f8ae282f14d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","67f10c1b797e675c41711264aa855f17"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","d1e590e8044f7699600e59aeb3274d10"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","de5becaa9ccde23b6b5fb2d1089390e6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","b13f6a121b12fa7f3723e55bb8a6dbf5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","a5a902aef0a5afa0044e4ea4cc6f7ac5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","a45ef6f4a74311418b293f7233a67f4b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","451660ac42f74bc4f4930fe486628a8d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","d3814d4821fb87fa2265647d0fef4447"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","faa6303e6c5644d762445079ee926785"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","3f1853794c54a0b6ee69ead25875cb14"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","df5507a1c9ad17ee697cbe4e5cbe15b8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","e1cacc38da7d972da10177ad70683692"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","eb7948e0d85a805c03b437b66dd1fbd3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","0b30b452b07faa22cef15f337d002498"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","18373f7ab6e04d542e3c3d6fbcb874b9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","d95dbc2a01f9536cca1cc47d48f244e8"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







