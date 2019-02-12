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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","fa0e2f86e9938cd7cfe048a94ed42972"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e1ab36bb407e0128664f2a269ece37fb"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","37b86b1a8eb3c2bbcd47e67a7bd9ac5d"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e0bbe9f4bbaf3286216367b26cfb6138"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","bb10dc00f01bb5e2dafaa8c5ac90e112"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0bba4647b2157871127f7ae432de6764"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0ee81d3521c5b5ff844952a88388e870"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","731964d4ed64451c3058cd7369a4fa9b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","0fdeb0f040c7031d8408fa9cd162da11"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b71d9b658eacc1e6b373e6f403b96bd4"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e0ca328ddbc6e3230bd26f27d480af05"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5400026688e6b0cb2a1c63dd60648392"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f56ed556ca10f01f85c796e8de72c80d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a205378ffabc6abbcfa578091169f898"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","bb24c0b8440d6abd7b3eb25079df54c0"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","80647141c0f36d26ee9dba7a852fb3ff"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f3608450328ae9a78ea3ab07c0e859d2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","62192943a1132cd31b06ea53523acb04"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","55e28eae99ab60f41ca50718966a28e8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0ff2c8fb9d3fa95494425b7f86e5113a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1436fdf509372f8a1fd301667393a26e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d521e9ace648d40dae2a5cec4956a6d3"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1533785a5f47ca5935d941707c855f64"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","694e6c2d971063d246d4812c29479176"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","ba941b4ffa6b16102ddd8e04705c2126"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ecbb88d731d5a5fd4f43593fe4db0337"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","7acd058a63e27876bf13956f8e62caa3"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9ba2ea575a1c449154c17ecc37c80ca3"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c9a2e93756f7e1bb33d6b9e6d72a0c81"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","222db5bd3d5f2d3c5d4476c0f80cd9be"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","518d8238e856e69dc35b2b97424f48ef"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1263c805a3bcb4df3e8ad4e9fdaaa2de"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1dac44fa39646bc0ca61fcdcea0b6538"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","6e929a535b68cc607234b18db0125028"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","7da126ce28d65dd7ebadbe7918dbc9b0"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","4fd265fc8437916fcfa53a2c35ff3214"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","6801c2fa64c781b934a132e547444c29"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f48c2cb067526aa3abf103dd9e6bdb03"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","9a8bffe8f4a7f539eb0676e4beb476ce"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","c21f5a35fd814f30af2b0060fd8e46ef"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","72671b47214241cf64c56e2c5bfbc2ca"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","32fb86c1158b948a2582424835637380"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d48da62f7959779d4c0e1ef325a6497c"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","1f1e2bdad38172bbd42f2364eea0e501"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fc731c3822efad84dc4f4552d92858fa"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7617a1781fa3f239a035dfe0cc5a3e0b"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","d87f9a69858670a13bcbff1df0d00fd6"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","69c0424c8ca84981afe543f91baf1c26"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ad372ba7da636de34b91083954079bfb"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","872266206a40941cfd1cf0ee3c46d578"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","ad47c27475f1437028133683fbbec6ea"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b76449097ce3bf99c0768145c0c4f003"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","6275194ff5780756d7a597d623b45628"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","7c4786e25445fc8096319b88ed852ca8"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","8a6059cf52508665f50d3e91d9005c72"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","1494cd82a3ae625f57ca7670913b6c8b"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a81d6025ae4ca3bad394e8d5e4b90ac4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","9f3f442869139caca37fc16c59e4b1e4"],["C:/lmislm.github.io/public/about/index.html","00529f82f9269e216ad1e3973159ee2a"],["C:/lmislm.github.io/public/archives/2016/01/index.html","341197653212282d0b6f37085c065b65"],["C:/lmislm.github.io/public/archives/2016/03/index.html","6ee588c767da55f451c86bffba8d62f4"],["C:/lmislm.github.io/public/archives/2016/index.html","7d61d5818ce9d0e54c2be196abc16d91"],["C:/lmislm.github.io/public/archives/2017/01/index.html","5736014615caba2e8526f1b5523ad41e"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5a59972dcf4142bf7129ecd646722168"],["C:/lmislm.github.io/public/archives/2017/04/index.html","0ec4e0dac957ba9a57543af0bb5fd294"],["C:/lmislm.github.io/public/archives/2017/05/index.html","143071f1d67eaa885358bb2b5d8749dd"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2aeb451ef62ec48b110d2f5aa07e3c99"],["C:/lmislm.github.io/public/archives/2017/index.html","b4226b7153c2b7941b435c68e575f9c0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1d8a1620cbbc541c9e2aa61365278995"],["C:/lmislm.github.io/public/archives/2018/01/index.html","43d9adf33c283ba4cba22d3e90a23ac7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e71c302412f2826df93e84dd174483a5"],["C:/lmislm.github.io/public/archives/2018/12/index.html","514187c9f4c06c25ee8d6f5b026b97f7"],["C:/lmislm.github.io/public/archives/2018/index.html","8b0ea9f33798d179aeeca8dccf4f0568"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5010228d22fe3b78a9437e26c38d49b2"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8ed4dbd6cb18921044da70289f3fecd1"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","8331223b0d02a185622f68c9d3789086"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","f3ffef2461ca0c03fd8b4357131ef011"],["C:/lmislm.github.io/public/archives/2019/02/index.html","39b617e1dd684ea61d3b1478b34c7c36"],["C:/lmislm.github.io/public/archives/2019/index.html","281ab7e84748abd1a1e0ad66837266e4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","c2813f03f2323c9ef6af1ed015f749d9"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f816ffadd9eb23692448a4d71c6a6c01"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","2693eb7937ebd7678a1ffcbb049c454b"],["C:/lmislm.github.io/public/archives/index.html","ab3f32a411310e536bb953d4a15b9292"],["C:/lmislm.github.io/public/archives/page/2/index.html","4cd6d93fdb401a76d084e55199e2d750"],["C:/lmislm.github.io/public/archives/page/3/index.html","28a617e7fe82ecd6d138c1f53ff33d05"],["C:/lmislm.github.io/public/archives/page/4/index.html","274337c3efcf1735a70803c8e32e05a6"],["C:/lmislm.github.io/public/archives/page/5/index.html","b6adbc22e8491ab0939c6776cd232c05"],["C:/lmislm.github.io/public/archives/page/6/index.html","b9c4d498f7329cc460d70377e4c86f80"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a5b18252238d0f334c6e0ab4e3f21695"],["C:/lmislm.github.io/public/categories/index.html","77807807c560f3b2656749e7011e10ac"],["C:/lmislm.github.io/public/categories/学习/index.html","8cf7e9ac799bd35027b9cef49f82d42d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","3fe3f68992318da9d39787aa50a00527"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","62fa0b17f0eaa887576c795e471c7c34"],["C:/lmislm.github.io/public/categories/工作/index.html","dac21a9ddc0ded308b5677e39184a9af"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8ef120c6344e3ef37700358466739808"],["C:/lmislm.github.io/public/categories/技术/index.html","84c26a5df96b60571b252d160bc36aad"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6e6c494601d1d4e776ba4267c18ff038"],["C:/lmislm.github.io/public/categories/生活/index.html","dcd8ee06b6a64e229f3cfe5324b3d921"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ed0eb15c51837114d5d8ac2c90efe98b"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","8b8aebca063a7592db36fcdea992ce42"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","4548b26a53439b1a9b7bc3d567c0d8d0"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8a898a66aab80a59f13406cad16c6e38"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","2d089fe07f334046d47fbd7c01bc0b1e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","fd5f424c8358ec401ffed936e9e64bf1"],["C:/lmislm.github.io/public/page/3/index.html","4b355a1f6c7d6de9b31bcbb47267a615"],["C:/lmislm.github.io/public/page/4/index.html","f871e7bfe4f843b936fc590b9f827c36"],["C:/lmislm.github.io/public/page/5/index.html","b0748157554a8bd3531739653b56c433"],["C:/lmislm.github.io/public/page/6/index.html","1e8f191bd404c62de80acb3723aa29c6"],["C:/lmislm.github.io/public/tags/Interview/index.html","89b3209ddcf4134ee493946274b8910a"],["C:/lmislm.github.io/public/tags/JS/index.html","a97cb532f8422552fa3887280dc0e34e"],["C:/lmislm.github.io/public/tags/acm/index.html","8ca3276a591d6dd0a0c006d17eb78cae"],["C:/lmislm.github.io/public/tags/c/index.html","336d1647296ce4d67184557602136b54"],["C:/lmislm.github.io/public/tags/codewars/index.html","c3dcd7c2cb9282b7b5dbbbcc404ebb80"],["C:/lmislm.github.io/public/tags/css/index.html","6a6c99944333768990775a6d41645f9b"],["C:/lmislm.github.io/public/tags/git/index.html","cf3baca53b564f63c21bd08c663ac435"],["C:/lmislm.github.io/public/tags/hexo/index.html","e97dbf4f2b5e88db25021225071bcd85"],["C:/lmislm.github.io/public/tags/index.html","807ff59efb1ed09f687a5e2637455bf8"],["C:/lmislm.github.io/public/tags/markdown/index.html","0753a85081b417a86b1296adfb607de1"],["C:/lmislm.github.io/public/tags/poj/index.html","03cfabc938be85b3b5fc79a7373a75c8"],["C:/lmislm.github.io/public/tags/shell/index.html","09e0efea4df885113c47a99f6ca05500"],["C:/lmislm.github.io/public/tags/vue/index.html","7e82e61b340ceae5c7be34a61e48f3b7"],["C:/lmislm.github.io/public/tags/前端/index.html","523ab2617255e4e9c69c44db537afcce"],["C:/lmislm.github.io/public/tags/小技巧/index.html","806a2af73b38c1a787db1d39e8cf5b21"],["C:/lmislm.github.io/public/tags/展示/index.html","05f1435852bec4c2ff22cdf1c23f4d1b"],["C:/lmislm.github.io/public/tags/工具/index.html","58526ac70b9bf11290c7ebea94aadfe4"],["C:/lmislm.github.io/public/tags/感悟/index.html","dba14acfe6580d16381d6f8836748aba"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","39b83b1594038c88e52116d11980d536"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","d61ba77bafa32c11117e59c4bc7b4f41"],["C:/lmislm.github.io/public/tags/练习/index.html","8184fc8dbe37baf02fb66ea0beef6ea7"],["C:/lmislm.github.io/public/tags/编程/index.html","7128663079ca819cf1dbc34d54f84a55"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","dc52d8de5b774c0e5f7ea1e357c12c7b"],["C:/lmislm.github.io/public/tags/运维/index.html","9abb409c54a46dcac500a8aac0719fb5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







