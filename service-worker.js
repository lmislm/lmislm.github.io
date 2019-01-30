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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","83b977794396b9c5f08a9e789b9cf479"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ff9927f7d588810815a6fa013128ca8a"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","485bdc6f45e70c99f3a0d24639521531"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d999cbbde7557e4267dcdf9489100584"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","83c7d40036933e37c1487ec3de4d0c21"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","dbc41e772371129fb919423c789dd794"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3551f1ce28a62c98b07b4b975d744b43"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","4d5f51d0386f4935b1087d3ca40dab0b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","96c20cdaa1fcf3197b1998de424e46e3"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","da50cd43a93ed8906d771854f0797001"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","99f704a2bfeb5e97abdf90f762004f2e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","56e98106c94042520f4bd158677988c2"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9db35f5010f3df5efc0915669ae4bc45"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b45ee0a297c380e52016fe4d2e74f247"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","df45fca97c52e60604829324a077a781"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e746ac914160c02eb97a2db9a1f7dc24"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","fd474b514f2629fbdd815c808b6c4aa7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","ee91e5d2cfbce9a57aa735c753eed5cb"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","a25693dc6bd8115cc267a7aa2fadccbd"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","7e6b8d99f8f63f8f044fcf4694140966"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4ce6f0eb8ce3ae1d4f8e70715dc260d6"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8d7f4ab581199cdebff1c70037a72852"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","13ad1feb1388059ae13b3dd45f5feb9c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","fce9a3478a1a8494fc0fd3705a54e019"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","cb4891a5a947b6a55465741cbd37e92f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","cb0998d5514bed241169f70afc27ece9"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","10a7f59ed9b1f5d1c4189973f08cdf4c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","4d8d61093ed666dafac97ef2c01a0b99"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ca50ba1b4283e072238ae8d24b5f6766"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3e0099580101caf83d8e79a4e7d43908"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","de738065f0aed406f9ec39642f71a5a9"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","700c8bd6678e38cbdd6c44918f26e603"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","c3494cf86a043863c327cf80e40058dd"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d3c87898392d1e0b09327924e055a9d0"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","57e6faa73a9031f02e24dfa35dc01295"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","af3da7ac367f3cff142ef64811a26111"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d053b9f2fa17aea27ba92b7543ef7265"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8b5222a21a51117cd8f342e66496a37a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2b41f2ba510a17c5f90ee9634d47f1a6"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","dd4c9ac1900cf370ae08c95838a91492"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","98d88c1150e4c0f5fa72d5d7f195e983"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ff1d8bcab615ce9555012c7ec4282b07"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","eabd47e04d65f71495e636a6773b6ce3"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","bbd44504dd21df4ca0219f06f2dca11b"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b9c901875ddf724064b1d49c58bff081"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","31a3ff2751aac53738eaa82a3879ecab"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","17cab1dfbed08b7875900f4095fe9165"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d82d8a5a7ae4317ea7c00c93f63edec7"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","47b66296aef70167e3c96318ade41e5d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a92d7d4a332b0a1130bdadda1edfaeed"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","472a7e7a8bc1c2a029d241130d5904f6"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c098613e6fb757a62fc3e503c3bb4aa2"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","21ce4298b0f84baba67c5597ea9a202a"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","35bdb629f7bf28ea658c3085491b07f2"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","fd79af2b1dc7d27114e314840c578144"],["C:/lmislm.github.io/public/about/index.html","684255eb4501043b3a660855adc56fc9"],["C:/lmislm.github.io/public/archives/2016/01/index.html","782d38d6e5824f63be9576535f94e095"],["C:/lmislm.github.io/public/archives/2016/03/index.html","bd7e015f8dd304afe619899da7689b5c"],["C:/lmislm.github.io/public/archives/2016/index.html","dd2aafb70cbf26f9a6632f77f14a683e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","64008d6cb3c088abbb4cc69d92055b50"],["C:/lmislm.github.io/public/archives/2017/03/index.html","12ab4e4357583942a881a1285fa4e285"],["C:/lmislm.github.io/public/archives/2017/04/index.html","8442429e7a5bdf276420f0f7089472ff"],["C:/lmislm.github.io/public/archives/2017/05/index.html","60be575d5fc6b9a109b2da3001c8d3c6"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c989ecfbe5d3f3faab5a061e2369902b"],["C:/lmislm.github.io/public/archives/2017/index.html","f7c8a18494539e5a5677eaf4c065476a"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","824632c05b3af288a06e49fb0040fec8"],["C:/lmislm.github.io/public/archives/2018/01/index.html","35df5bd9890730946b36d4f6c942786c"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8e54345784c15d25459be72542c5dcd0"],["C:/lmislm.github.io/public/archives/2018/12/index.html","eaf5bd184bb1fa5d388eb75abe5c968f"],["C:/lmislm.github.io/public/archives/2018/index.html","4a1db34ba0150785dfe7a388726a3dd1"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e3b5671310e871e1970dacc51aae4a6e"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ae49b9ed1f8f861f34d22518695e1c93"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","57825452c0d9444a478eecfd8f92bc28"],["C:/lmislm.github.io/public/archives/2019/index.html","7397ae3f4b35b0e1ead9a833453f247f"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f9d6914f2c7847e07a2f7813dee92d6d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f52bd9e4a4cc0600c49d23511acc383f"],["C:/lmislm.github.io/public/archives/index.html","3b566c0e7f84846c6b782d907a3b49a5"],["C:/lmislm.github.io/public/archives/page/2/index.html","956d0c7f9c9a282fce7ee5260a886183"],["C:/lmislm.github.io/public/archives/page/3/index.html","c576b9ea9a1ba2072c1bd183b67fd288"],["C:/lmislm.github.io/public/archives/page/4/index.html","904277f2096c5ede333d538a4887bcfa"],["C:/lmislm.github.io/public/archives/page/5/index.html","dc22f5fa9a07946aee2cc3bc88514092"],["C:/lmislm.github.io/public/archives/page/6/index.html","cf18b4b8de136d2dd704379a7e055a40"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","98918d686cc5a99d5baedefb255b66c9"],["C:/lmislm.github.io/public/categories/index.html","e55548e3547c20016e699904d17ffda9"],["C:/lmislm.github.io/public/categories/学习/index.html","78508d0529fd97189ff86d34f3d610df"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","be3fc2aee94193b75f5a4e1ffcecc20d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ac4f83d741a61f2d458fe0087fd49db5"],["C:/lmislm.github.io/public/categories/工作/index.html","a47f0de58b569a3eabe3d2e650ef699c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","4ce194dd54996d7e813d0bcf23d33def"],["C:/lmislm.github.io/public/categories/技术/index.html","38c570087231b088e8d61df8ed0fd8dd"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d6aa0bf60d1b6141fbf7edca730c765f"],["C:/lmislm.github.io/public/categories/生活/index.html","9419db1d83fabbf72f7da4c13f3400e9"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","b0b565f449911d97556179d9e077edd0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0deacf5ad2a8a637f830841bde78620e"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","17ae4cc82e8380144696003485f370f3"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7b5b676fbe6bea989c072c89f4c99814"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","17e19b8f649ba2e71c25c07b751a37b9"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","24ddb24addb268b7a73d7e79ea58a25f"],["C:/lmislm.github.io/public/page/3/index.html","1298e50dcb3a268861edd53cebd2fe0b"],["C:/lmislm.github.io/public/page/4/index.html","0498b9d64c42f074346f4b39340b833c"],["C:/lmislm.github.io/public/page/5/index.html","5765f64798674b0c59409863deed9fef"],["C:/lmislm.github.io/public/page/6/index.html","27a4f0ea99f568e4252532c62086079e"],["C:/lmislm.github.io/public/tags/Interview/index.html","a3b3d5568f366fbd4d12778b22b9cfe4"],["C:/lmislm.github.io/public/tags/JS/index.html","3997904f7b8d8dc5a0ceb42d26ec4e1a"],["C:/lmislm.github.io/public/tags/acm/index.html","471e1468ad8fa0517aea1e824c49f24a"],["C:/lmislm.github.io/public/tags/c/index.html","28c2e1582561a6e4dba45da73575d650"],["C:/lmislm.github.io/public/tags/codewars/index.html","252626db4ed7bfedf55e75fd0d7a19e2"],["C:/lmislm.github.io/public/tags/css/index.html","b8b7e1db0b553de4564b23cb52de661d"],["C:/lmislm.github.io/public/tags/git/index.html","7510a49f83c1df8aad0daa2923879e1f"],["C:/lmislm.github.io/public/tags/hexo/index.html","57bc601e8a0f28c1241c96b46b1fa41a"],["C:/lmislm.github.io/public/tags/index.html","e4f4867b350ec7223a42724d22e2e4f2"],["C:/lmislm.github.io/public/tags/markdown/index.html","6e32960a28e7b5ee58838e4f279d19e2"],["C:/lmislm.github.io/public/tags/poj/index.html","fdb91dc3e575cf8495bfccf0530eb6e5"],["C:/lmislm.github.io/public/tags/shell/index.html","4add2fc62100eb1569158e49d17cc2f5"],["C:/lmislm.github.io/public/tags/vue/index.html","ac042b506a0d5149ef496d435fc1ff76"],["C:/lmislm.github.io/public/tags/前端/index.html","4e6a20817a35af172856cb64a3c0df1e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","4be6e4c11369fc6e001b6d75466d6c44"],["C:/lmislm.github.io/public/tags/展示/index.html","bd857ae3c455489b84137a6ad56982f7"],["C:/lmislm.github.io/public/tags/工具/index.html","fa56388b079eac97efc68927abe68608"],["C:/lmislm.github.io/public/tags/感悟/index.html","b5bef1d1e7c0d735acc7de8a4fba1f2b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","5105aedb5cb8b99f575a0fa691e04eca"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","3dd4563b938f33dcfcf8a69567ad3d2c"],["C:/lmislm.github.io/public/tags/编程/index.html","e899e3e400da2c9725cdb0bb139afecc"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e649bf0aee815604326613d371ff58fc"],["C:/lmislm.github.io/public/tags/运维/index.html","38261d8c469fdf51582b200bd37b9e0e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







