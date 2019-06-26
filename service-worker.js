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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","53a721b6f85e96e829afdcf9d1741a70"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","b892e727c52e201d23223e460b8dd305"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","646cdec374cbc00e940739e21d434e7d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8375e925292c8aa6e0d511236f255809"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","90e27bc36971f70c764bf45925deb87b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","8652fa711f46e02c5d4f97115fb9ea8b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3e52b08d4f40d520679ccff4fa92241b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","01cbdc7f6a226ceb87e8c879cbc9b564"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","ae44130cab928c0521575c484b7e146d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","9eb0c93ae837de4d56b872dd43aad952"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ecaa6a8ee0df9832db19782390212c71"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","cd799de6e9494589a5dcc2ef9116aba4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","49e3294f837e219b849d930ad30aee09"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f7603ca6537f7ac0403ca5ad215d1f84"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","912a6ab0be03b34fdd54af5076ce6a02"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","4f551b4b672479c23d5f2499431c42f9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9915b4cd10db59f37287994ece5c7a86"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9c9f02f8ff952c431dedb765cbf13321"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","e92daa4a7da6b8de939c1d7e2074bd6c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","0bc4d60b3f3dc91172a1786328ee1402"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","41d21f7d24b34a373dd615b8761a4c6d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","279a812360e0271535f292af1ce47a17"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","fbd35be09912482d443cea17b2343f50"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","56dab87afe4cbae08e9db1b0dc116c5c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2ad6810d0792d9bd50472d86827fb5e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","9a8e0f4c5a4ddea7b27fc469d08d4004"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d43af4d485588c1b95ce9577a7cdfd2a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","df0b6fdea93f6e084e307e0f3c7adbdd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","21ff07e70328bf8eea944f7f1c630750"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","407a3b692ab0ffec47d9a9a5cbd39ef0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ea7fef5b74fcc7989b9441c327c9ece1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","8568b66409fc315acc599500a8b48faa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","679a0d07d7ff44fa9c314a7035af4290"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","a46ad0fb72b2b4bd94c8d554b28c537c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","d68a5f5b20d2b90d2de258d1d7f32010"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7a56b2c642e20a13b353e68d1b994e22"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","54968450c9a6e0d9ebea712e84574c7d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0402dc05e15ff5e39001bd063d017b17"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","53423e8f6999b8d605f8e00b3b6a2fd5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b94782dd83600cf7a1b5ccc59123e16c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f1374840f7c4f58663c42d404b4572b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","be71770aca3a1bc798ddcccafb812c82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","75b0439f2b60fa02f0cfd82b062dcae8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","cd23a1cbebce6938b90a9ab1bea88921"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","5eaab2a59b5fbc28eb90ce443bf4f526"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","10de1f2b160511803997c6c889b47aea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e7cb8187162bd53eb97d75da6798bd38"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","4292752a03e56481eef7adc1a307d755"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","f36f6b3c28ea65848318293d8884f731"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4f1cc7499276e451ea28189d7bc5591f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","dea2d4342adff91e1876bf0234a59e45"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3d4464830ff9df51ccc4a0ecb0a36900"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","b304ef1cb248d59017d1a57aef521241"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","d2c834b1c7ce759c4b94dd7e603ad728"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","bed4619de849f058cff0c7033d22c021"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2f632978960ae826b1a0cd52247e1fd2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","18d6d8cb3f4e756b913103b4ea54f348"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d089e4eb0eb6fd331af9ad5d7f508b0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","a9edb7a6ba46316e81f9ffc5cf1c22bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","c2716e91f8cf761e12158c1d9a2809ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","cbf707aa9e38e75060b22fc2ecf47605"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","66397168e2ac488e26f6155da9d86fe5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","e385752e941cea433bb3ce9fab29772b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","745707715883d3d1405aaa32162a261d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","04890ba18533f3de5681e3b268e619a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","cb776e96c05d48de6e0fa7d93de02412"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","75775a4e1f148507ff254825a06d8407"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","eb0f3b84b2f8ac297bd3bc6d11d7e275"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","a7fb28e0242a8320654094b690da598b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","ab277d154877161fbcd98c872fbd720f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","bd4f64b44dea5f46cfc56b35fcdf4fac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","43173ee5e1b3dbe78af28f58aee737b4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","d8f204fe250c956a1189cf66076600e9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","d06cacb01ceda3db9b29ff13c32df339"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","d453d25f5a961c3d974bb2996573bb3e"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","bdc4c9f2fe7489547d27a65c9b950014"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","09a47ea65da7de6039642cd0343e03fd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","b83302f3191660cfc22ac1c855b2f7e6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","493b3494ae1e1ed6c2702502b6eaa0d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","9297a07b735e299c67aede04e4661576"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","11ef725104934ec1275500ce9c084005"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","197bc241d045c962ad9ba829081d7a57"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","81899c6265702a9cb8e34975ee90e716"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","0b83a8df228327abd3eca78c73a12e19"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","5416262733ef0af38906e95bf9bee344"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","6c36a989672cb2a4bb59fb7781aa7a0d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","103c15b0e74bd23cd7678388d35ee00f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","c90decaa56bebfdb68570c555b33d89c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","c9e2160c983893536d66a065570f8615"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","ff989ee3b2abccf76820ee08937e99c5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","c12d178697d4d3f0aa3fd4bec1f5fa0f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","eae64951ffc317b6db9442f8bb3b6dca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","86608a1565044308569e5b9af9b721b4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","fbb633aee4113cfb8cc533fc78abd0e2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","b1a8fa5c7ce3be176b5722210fcafd65"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","1423e49b199c77261ca8903797228171"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","d286769a3669ae4bdfec231a1f1ec42e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","3b85176901517edad87717d1c662c911"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","7bf51032595c70f0dad253d921737319"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","ad24b4647109a6c412396f10e8c597fa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","62e4299207cb86412cc6f27b70207943"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","5ffb9cc6dd5d8be4e75f6996dd0e9409"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","e571cddbc4cd5837bd3bfa1eda1c4349"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","4dd3ece013f5503e75bd94525b411b33"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","c5f7305d2482b39f96d1c84afeecf027"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","22ae69d9a44d19f1e2511afc80c49fb7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","2011a49935f82bf3dd7658d059b6e677"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","3b3ac3b680f0eedae0aab97da9badf02"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","a177aa6b2ee899672ca5c12f8ec6d3fb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","8eddc9393768c12af5b0a065bc8d71fb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","26ffef85c8dbede9144f2d2c61aee6a5"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","694440beb6b7e395cf3b3495344202cf"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","7d331b2e9457e0423ca007933eae4d2e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","ea1f953796407eef19552e04ef50adea"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","3a76a56723874cfdeac7345f1c344c82"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","014700dfc630d87f86221c86026cb4e6"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","c6134837bf20aef2bc37089eb73cc765"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","ca974b62b677df896cf7bcd0f59fe684"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","4a42beb41d9419e1d4bc96a1bd5e4d46"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","8ff282c5d5329015086487cca6bbd859"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","b6dfa6928476f75b42fd37fc04fe7674"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","33087308e8a7f814164651e54efcb22a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","e21b2500ae10e6da65c131de74e90a5e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","57611c8a478fd28be49e676280f03764"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","e2d13af31e7b1af7a3cf1a883046209a"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","499d1275973ae6b3073e0dea51de8df5"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","72f0d3741c01da179038c8a83bc0716f"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","06ae01665589c82189508c8ed4f16112"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","b8b99f3382f3dd4354803a336c10c55c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","bbb211f68fe5ee1abcf628697294d00a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","e6bfb7e0c821817f67a5f207a2f37f03"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","997acc08889c616d65766c44b1acf865"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","caeb3c92e5783c51aa5188429d236514"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","bd25a15fcdeb4b0436cc2bf6c9cb4f95"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","0064ccfbfa9f51e621dbc8426a8e3f1d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","4ff20f7e3ee1ff1c7fdba15ef5c5ac80"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","e43ab1ae0b4a81926bf6409f20a7bec2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","4619b0fa2916a0fa3cbd03d19d35741d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","430986f943e33caeb2bd077821965cee"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","be17f6e23f1db9afc731b13ae9da8597"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","4e1eaedcbd1228cb73e261f902fa6c2b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","7808f8250d869a7c822624194fe61630"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","6b3e8cf8edd4c86136e31ae36a2b0692"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","e2715ee18c37cb1ff300cfce5618858f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","6e405c5df95cb34e8aa6937b8ce71fa0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","db2d80f0c8aaa1c165a677d76695082e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","70812d92d404aee811d1ed45cabbd6fa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","ef8b0f3f32c5090e786c7bc5e1b2b1d8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","d0f39d4f6f2d96c2e09a912d00773c2e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","aa57161963e9545d618b1fc3d85f7263"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","c668fbc86ff342d6b5da5c91a3b87e55"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","f0308b8d9c3e68cd714b33bc02ab690a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","178eafa0d4d45d2fcd2bdc68ad6960ff"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","b385e8ea497241eafe71911eb50c3e94"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","5ff2435fd3f3b5396f6d6c3ddd658e02"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","264d4fbfc59d25a4f14f8f9b0cf4478e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","df8d524eb6c49297bae0733e41f31ffc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","1a487ebf0c89d853dc4041531af36c78"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","c130afcc45bde9db8807c90ac8bb9c76"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","7e9ff5438088b1645be37fb67c7e4c0d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","f4673dea626cc6e9775e5f886545fbfd"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







