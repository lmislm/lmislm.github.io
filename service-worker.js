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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","cb30d3b454ac81beec23e2cd53e9018c"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","467ece016b9f2b574f537d8c7c2ab1ad"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","4dd34d6a95df77a3e14a5b86ac9059bb"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","87cdeaebf5077a4fb42bac6595d466c2"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","5fccdb1a9ec18c41e3c78ff50f8b767c"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9c5448afddf47d7b13ffe5af5f7695f1"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","75421f06d663a64abe8131b8a42687f9"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","8339076b9ef32590be4369b019ca9d3c"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","789a699b4fd735e294d526ec71c1dd5b"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","6c569b7e21c4376e7c64ae7816c86f98"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","3679f8bb33871aa47ecf0a325b5547aa"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d2442962ac2ed017da2ffa20fd8dfd61"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","61321494b2dc60acf7042d0b1c2817c7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e085e8c41dbbf4deacba0b7f75511e91"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2e3664fa879ba45294656bb2025ca3fa"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","1600f99467fc89b6c58a28f1e6173e01"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","5820ff77972432e7af6ca17e5704ae6d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7b2aa4148ce4c8b6702f83267f46eedf"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","82671d78dcfa94aaa4220e54b40dbd12"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","a2644cfe7ab3db9d7a265218fe4dcc3a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","3a8022089b1cf01110667ccf025d79c5"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","f1409efcfd4ed0f95eaad5eb941d8faf"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","d0e12967ed7ac8d547a0601dfc9516a0"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e71ccf8b0052e7ea3bb1bcf36d2cc95c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","28c9a39babfb05d9b22306f0b08a9f11"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2c07ac6e31a5d51ca21033bd661ae30a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d83c23f3f58615b7096bbfd3952cebb8"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","fee3910b10be7754719e6652c99d9b56"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","8766b66eacf0b737c338b0e6960b5fce"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","12b3a49523351d5e0eb4d721c2257b28"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","1e9063b0254ba440bfa9be78fcc12493"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a1b5fb30e1ad52978070dd42b749f04f"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a124ea32cc968f43050e5a34f8ce5855"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","b5965167f0b19afb46cbb7223eb5834e"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","add25ae94749ebf23e61f390bf0cff0c"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b7cecd5ef330c337c72daa8b07b8e720"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0538f69ff733379033748d924d21ae08"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","494faa66e9719d56ccf094e669ec400d"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7c304eefb43c3e74ddf56689208a532d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","61adc688756d98fb72e301a21055e780"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ecb3b3fcaa287ec0c00981ef25d93e82"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","00037b7db7ab07d9280c703213fcbc22"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","6f3c47c544cb9d3a57cc3e97b9947352"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7db4b9899fc36119af71079448ed65a2"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fb83a8a5fff924690d8031a4216d3fb2"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d244d0ff2a09a96b272084affc7534c6"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3c94c3ca487fae4d3919eb949524cd7c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","cc480cc53a3f03f9230e83957e73f348"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","8ef349db063891c77b6310d134da17f0"],["C:/lmislm.github.io/public/about/index.html","05f577bc9b132930d34d015db520f0b7"],["C:/lmislm.github.io/public/archives/2016/01/index.html","98faf74fef19f232e9621f64f4e1cd70"],["C:/lmislm.github.io/public/archives/2016/03/index.html","c8f3712de3e36856382edfe03d2904db"],["C:/lmislm.github.io/public/archives/2016/index.html","839fb9a6c87eb5e328d0768b3e6b998f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","95a452eb6b5d9254a99062733f287929"],["C:/lmislm.github.io/public/archives/2017/03/index.html","facc5f773a124c9db472fb00d46be24a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c3c8cc93703d0d8fc6915ddc7b6ced6f"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8d3d1fecfb055209daa9ca74ad6f3725"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b6233c1a5e8a905fbe7d7747d51a9cc1"],["C:/lmislm.github.io/public/archives/2017/index.html","6c32365bfd6ddf8c157bc607c5e107c0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","815f1ca1fd74b71c65bd28ed3d1462bb"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e0e4d6cfa1cc0fdb1ad9ec7f6bda363d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","337f70ed02ded300ecf5e45db99a2aaa"],["C:/lmislm.github.io/public/archives/2018/12/index.html","bbfc2f544fc3372d97b0c1aa54547cb2"],["C:/lmislm.github.io/public/archives/2018/index.html","a9cdde93503119db776735b18c287a09"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d1a19acc800a5843d3a625b1ed417766"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8a6e28ed579f73b8e3b4dfbb971fd06f"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0dc36310a857b2b73fd0368e53527b9a"],["C:/lmislm.github.io/public/archives/2019/index.html","2b168c9718af893085cc726c1e661a39"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","05dda8892573f5dfdf7083298e51d58b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d880693997bdf2fd970964734b6c6c56"],["C:/lmislm.github.io/public/archives/index.html","b96305e285605681f0686a9ffbdd7598"],["C:/lmislm.github.io/public/archives/page/2/index.html","c9fee6af022f779f71e3ba548c748c6c"],["C:/lmislm.github.io/public/archives/page/3/index.html","50f5d529278345cbfcec4eaff5aee4a1"],["C:/lmislm.github.io/public/archives/page/4/index.html","bb5b241dcf69f3a7513cf7445d4ebb26"],["C:/lmislm.github.io/public/archives/page/5/index.html","3aedef492b3deb78f93a3bda1fa02ea1"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a746651bf2b1fa48a78a242921e3d82c"],["C:/lmislm.github.io/public/categories/index.html","8d54b7a6ef942210a69d6180d6f86ca3"],["C:/lmislm.github.io/public/categories/学习/index.html","4e5c5848975e03e9509f563c7168dd68"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a172ce49516ca5f06fad1bc803868846"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","b1a100b7af231acac146cdb671e28e73"],["C:/lmislm.github.io/public/categories/工作/index.html","5a6218db55d49872d192a5ee4396740b"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c95ba4f11b83a0f4cc9ac9a2a07b1974"],["C:/lmislm.github.io/public/categories/技术/index.html","ae364f4bfb932859fee908de2058247d"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ac7ef68768833adf3914b37384280b6a"],["C:/lmislm.github.io/public/categories/生活/index.html","22058e4c474c94bad4418be2ba396b61"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3b10662de72c14ddd1a3051c922722fa"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","fdbc640a7f6bf8546a1fba9598df71e1"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9f34254164307b122447d49bbd3159a1"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","44211881536418e087d8e758218a2041"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5adfbf9efb6c39dc31dd3f977fd072d2"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","9b85c015e6c15f31d01128b8b772b417"],["C:/lmislm.github.io/public/page/3/index.html","8dd161266ef823dbc93bac3b3d42f689"],["C:/lmislm.github.io/public/page/4/index.html","05f2d05f6f018aa7d292cc1b64e2dada"],["C:/lmislm.github.io/public/page/5/index.html","a24cfa3d3cb65430aa4fd1dcbcec89c9"],["C:/lmislm.github.io/public/tags/Interview/index.html","56d15c9b1224b300434c5de9d7ef2ec8"],["C:/lmislm.github.io/public/tags/JS/index.html","c2eccfeacb53c253b8ab87d4c99f08d2"],["C:/lmislm.github.io/public/tags/acm/index.html","20ada2008525fa7c8768fef19934878c"],["C:/lmislm.github.io/public/tags/c/index.html","b4db92fbef86e31f1cf80f93f4593465"],["C:/lmislm.github.io/public/tags/codewars/index.html","7a5d35e886eaf85bbab2821b7a02ed09"],["C:/lmislm.github.io/public/tags/css/index.html","957f7f4016690051e1d0186cc0089461"],["C:/lmislm.github.io/public/tags/git/index.html","0ac7a0e044f6a4eeede11d2d9c6863d4"],["C:/lmislm.github.io/public/tags/hexo/index.html","58c48fe7b44901e83e48fb63487127c8"],["C:/lmislm.github.io/public/tags/index.html","befc44392960f9c04598b5a32d81a0f5"],["C:/lmislm.github.io/public/tags/markdown/index.html","75446814a36ab6adc979717a99dad93b"],["C:/lmislm.github.io/public/tags/poj/index.html","1ed5f7e39607fd7308a798bd1d7f4b3c"],["C:/lmislm.github.io/public/tags/shell/index.html","136089a54fae7766c9be65c404a39642"],["C:/lmislm.github.io/public/tags/vue/index.html","4a7d9b2dcfe527d903f4436b5fd0ad62"],["C:/lmislm.github.io/public/tags/前端/index.html","d76d033610f5416024ba6fb251b9b719"],["C:/lmislm.github.io/public/tags/小技巧/index.html","38cbdf1a22ed4e6293c0bbd3e44c69ed"],["C:/lmislm.github.io/public/tags/展示/index.html","141d43a1239c4e7e07f355ec7942cda1"],["C:/lmislm.github.io/public/tags/工具/index.html","514e9215b52610aaa12b60c789530b1f"],["C:/lmislm.github.io/public/tags/感悟/index.html","43a950a903fe18e739d79413a6bda0e8"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3a01604f33496b7d31d714340f4cdfcf"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","82f25cb4c73fbe774b14d84a8de765cc"],["C:/lmislm.github.io/public/tags/编程/index.html","c9d08623f6be449f027c4ced04ef5172"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","2eb2e2e99e9137ec0dc3849d89943b4c"],["C:/lmislm.github.io/public/tags/运维/index.html","b9da45fa1906ba97ae8b0dbf995e3a55"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







