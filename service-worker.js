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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","55a7a8ca16a113fee397bfd5b785ecf0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2922f952a2de92b6320f38c9b8ceb7d8"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a7da612e3010571e3480ada4060eefaa"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","11e2e3575e1c6eb9cc0db7903ce29b36"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","02704bcfd7e7aeb495dcd3add5dfb167"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","60c706c3581c1336f6f25c2fe5eebd0e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","726f4b1e9b43011f1115a566b0f9a303"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","5c2da71b89776183ead4f730336326c3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e5b6aeeed728c2acb073d7ec22a41f64"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","558f1a49fe0c191537f755b7705fef2e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c46f76daa28e6359b39816d70618d29a"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","950e8470f2b4ca18df825c79269450fd"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","0b9c816636f4b735325ca293fab3b19f"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","1366b28fd805be9d0be3e3d23a0f3251"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","fbca1808df342e8dd074c6be852a810d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f910b5fe27302c7e6546c4c641d5b270"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","aa51d43eef7ce191ca5622bd4224861a"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","13f701b1094b9f69b478a7ed297de4e7"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b1682fd4841f8999318cdd43aab74038"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","1b03ba310f543273e51e38201ff56f6d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b21aae1bd2d1db0e812d73d5117c240c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","bcc30f5b5972e4b54d3058c959cc15e9"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","25bf246def80daabcca1eed099ba81ab"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","4f49bdc14cfcae28062fa6fb0646e697"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","173dbfdedf49a99ba74ec14b460eb1d0"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","eb937af6858d8a0cfc8efff3095758eb"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","b26b73fd4fc5042de1db6524f09befcb"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","f9e8d1457cc7cabbee9a3a3768eb0cdb"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","f10787866d9d1e710b46c254486fa75f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bd6f62aeaf521c2ffd717b7f5d9bb626"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","417240b61194062cffe099a1c5730016"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","168613398010183b020afb70868088e7"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","47ee3cb9defafe2d7cb96e19b92d1d47"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","24b85bf12034c372e5a0b3ab6a8fa1ce"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f8f9fdb419d479fa37303103273128a4"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d4b3f86fdf953675c6b67d0a41d268ae"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3ad857fd5a170cdd74edcac843e6e193"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","fbaf58439b44754cdb20dca6f3b38d97"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ebcc05a0ef764bda1f7f4763ce0cdb2b"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","96106ab0ff911db86f1f8b6e81e0aee8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3fab7e7ffdc3c5f47d67c8d83fca3f1a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5afbdb5746e6ecbe065d53f0b8f7c8e7"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","30648276fee458a7a8a71ebad73936ca"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","08677266d4e2b4fc1cc54674274989b3"],["C:/lmislm.github.io/public/about/index.html","900f1da67105be5581d67fa4464c8c25"],["C:/lmislm.github.io/public/archives/2016/01/index.html","301076bde513cb397097d242f4543d55"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a2e10648a0bc0a4ab237c95f364984ca"],["C:/lmislm.github.io/public/archives/2016/index.html","1d74370d2763bb19a1cd34b6d0addf5b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d88dcef3530ebd8bf9ab4c4a9bd36020"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ef8bce073cf3f4788e011833f69bf1cd"],["C:/lmislm.github.io/public/archives/2017/04/index.html","75b4aaaa5b664f1d752b6cb4d33514b9"],["C:/lmislm.github.io/public/archives/2017/05/index.html","a54954690797a995bdf849f3d70aa48c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a79618463eab84252467bdf41df9bec3"],["C:/lmislm.github.io/public/archives/2017/index.html","9dec77f7132d34c1f71b1d59f1bdb374"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","a0b922c93d9179d8728fb96f50969fbe"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7e611a247c60ac4ac67e5999d3095c61"],["C:/lmislm.github.io/public/archives/2018/03/index.html","3de2c364aa8ae6a0c9108ab458f3a328"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4de1c5b50580aac7d9d2f6cd089ad53c"],["C:/lmislm.github.io/public/archives/2018/index.html","c031e2855d56e5093070442913c75cb3"],["C:/lmislm.github.io/public/archives/2019/01/index.html","ce2c3ee002cabdabbf7a0dfee06ad791"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","153d58b5bb3f2c46566a9d8d62d33dc8"],["C:/lmislm.github.io/public/archives/2019/index.html","73ebfeb3d4dc9e9884062a8f2314b2f4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","69afa33c1a4414f87ce60602808559d2"],["C:/lmislm.github.io/public/archives/index.html","b6d5fc57d3142b22a254b0157aa107ac"],["C:/lmislm.github.io/public/archives/page/2/index.html","6c41e3efd7090b007bfa262030b24245"],["C:/lmislm.github.io/public/archives/page/3/index.html","68ed1641c0fd3d620f6343d7f6fc3ec1"],["C:/lmislm.github.io/public/archives/page/4/index.html","84b4d7566fc9f8aabc9d77fd4ba02556"],["C:/lmislm.github.io/public/archives/page/5/index.html","3dc29cd348db158c4df0e93574be01e5"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6a74cbee4b694af7e313f884a919beff"],["C:/lmislm.github.io/public/categories/index.html","1f10b2fa94f0477bfd69b69cfa34daf1"],["C:/lmislm.github.io/public/categories/学习/index.html","e6fbf6af12eead53be3913f1b70883f7"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","c4ee257dd95cb7c8de371c638b380698"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","9104d30be73577b60f994e21932216cb"],["C:/lmislm.github.io/public/categories/工作/index.html","8523f1b15e2f171975f69c1261cac4c7"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","14ef38753061c309c753b77735525185"],["C:/lmislm.github.io/public/categories/日常操作/index.html","f9b2c51d64eabc7b10696ec37b60ce3c"],["C:/lmislm.github.io/public/categories/生活/index.html","b34e081528db66e6a470ed56b7ea5a6b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","d71e1b068d0b03d9a3f175d0cab68636"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a535239a565c577f74743d095aee09a7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","ad100478df6de5d897a1e00815bded77"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","2beda973806139d94f420c3727d6270e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","134109658bec9a70f8c98d3581e764c5"],["C:/lmislm.github.io/public/page/3/index.html","979b926fa8a20bebb9ebad6be5a75cf1"],["C:/lmislm.github.io/public/page/4/index.html","61e0504ea1d0d61e5ab9732b6cddd718"],["C:/lmislm.github.io/public/page/5/index.html","35db7abf2ecfbf3b0db8329c95a77673"],["C:/lmislm.github.io/public/tags/Interview/index.html","28a57cc11f03fb42c2d7f101fee75448"],["C:/lmislm.github.io/public/tags/JS/index.html","3b6621abc4acf9f68dac0bb6a6d5c794"],["C:/lmislm.github.io/public/tags/acm/index.html","67c8845c3bb97becd455a8e8d8d46e32"],["C:/lmislm.github.io/public/tags/c/index.html","191bf9d6659e2b3519b931ce21047dea"],["C:/lmislm.github.io/public/tags/codewars/index.html","defe1ce25acdf2b5ad57c14b8917e3d1"],["C:/lmislm.github.io/public/tags/css/index.html","894da0fd70ce9dbba99dcbbd3329761e"],["C:/lmislm.github.io/public/tags/git/index.html","d305ab695eac83898bf3948abf05fa87"],["C:/lmislm.github.io/public/tags/hexo/index.html","c6f9a913089339db74829ce118f1f453"],["C:/lmislm.github.io/public/tags/index.html","a0be00f6c7bd0c105a3aca62fdb4c20b"],["C:/lmislm.github.io/public/tags/markdown/index.html","5d561d4ed81ee90856d3fd64f85c1f44"],["C:/lmislm.github.io/public/tags/poj/index.html","9b06f9308f19f0d2422e3a0f52f4957e"],["C:/lmislm.github.io/public/tags/shell/index.html","f3adc7bf31c89373c727c93809acb315"],["C:/lmislm.github.io/public/tags/vue/index.html","40dc89fb043712743f2ccb27541446b0"],["C:/lmislm.github.io/public/tags/前端/index.html","b4b171f3d38999d69a527f2349ca346c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","066457790f9458e2995077c10be136a6"],["C:/lmislm.github.io/public/tags/展示/index.html","aac696de141ed9c9603a26efad2e10f2"],["C:/lmislm.github.io/public/tags/工具/index.html","42626b19d62d02a347a36430545a2d26"],["C:/lmislm.github.io/public/tags/感悟/index.html","605c5402eb6af35025a8d6210db32d4f"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","281c9e652fd41f9c500110f3e1c69336"],["C:/lmislm.github.io/public/tags/编程/index.html","7e8c61f9bef97c0eeae1b9437da5be58"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a33492b89fef37e23379192536c245bb"],["C:/lmislm.github.io/public/tags/运维/index.html","5a23d0fab45c829e7f6c81a68f6720da"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







