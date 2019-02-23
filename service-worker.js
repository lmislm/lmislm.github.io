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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6d177514ef70a2f6746e8caebc149d91"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ffda01a6cecfada9f5584957714acf7c"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6536383a6d7150ca12058ec41b876910"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2825d87490f0ce55810c86a45dc0d32c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","f5a0c2febda7d0389e53cc4e863897ec"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","2d42d260c5a0e1a1203c702ac4d52c04"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0689f64bbb641b6126723ce1b562dd9c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1f5f0ef11e807d5a08fdd2371c0979eb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9be1db7eca6f13fa059d2cadca59e87e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","fc36649bec5f33d8a7d62b34b0000f5c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","5c4b02ebbd09f047bc3222c568d82e8a"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e967e22d861600201a8592e9a9678856"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","699ac98e2a3fd585e6915d8204cb7604"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8db3b94cdfccd93b89f9896176371849"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6d92e0097f574419f995f9632b367edf"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0e0e1abb83ec9ed32fa5d7640873cca0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1c3d1c3818781f009b8bf2f9953439fe"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7626a18364d6f55adeb124a6022263ae"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","034e3ce01873e711a488c05806e36cfa"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9ace3a4eb1cb40a17b45bb75755faefb"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","5d9dc5e274576315f2ae34e098db93a7"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6ad38c8fe54422747ce3218e7cb127ee"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b4e68dd45332da41d71b8a3697fc7514"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","8dcce3f2bde13bfa7777c70d96b2f89a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6b92cef3e80ea8cf1efb79c9fbdd773c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a8e3b36cd2af2fc3fe5e5cfa1130120a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","de9e7e08c736f161b9023870b31b842a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c3419f73ca0db984560798176da72463"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","849d88f8232fbfb733ddd4a0a1362355"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c1032c62d0b1e76501324734983a1694"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","705a465869640ed293af25b74c4cae7d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1e88db4b1b9654e835b1d4381cf88eca"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2e59ddc36f085445f060eec692d5ee9b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","14e402b640a544e26e807318b9f41e89"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","851a478d2754467c306a4672235479b4"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","188f42c8527e3f1671812ccb0dfc7554"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","78b0a769263870e356c3513b2e440d89"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8bb11dc394de74743e34dfa12b97ca98"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3f47337e5a9037063965b7baa8faf25e"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1eca0c05dc739754ba360346464efe45"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","86ce958974480c0040daadedbabce466"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","dee5be7ce4bf5ba37bf02ea41800450f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","43c4adef0fdfb69a093fa9418d7415ca"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f257dcb69dd81c9ef55309f0db843b88"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d53ec2d8a3cd86bb04504ff720b123d8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","a59e78d1900d22c4e9f40ab15d924b08"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","b446b52e2110c89b3b78b5c41f543279"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","903499cc3324088cf2179803c825f09e"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e515011e29a091e1b71a1aefdf7843b7"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a7062ec4796ca8cf4c370d9e147cde8c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","37152287ecb312ad62e12159e1bb8286"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c61036e529e4b78731df997f747611bc"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9645949ffb7d3784d12fd908acfcc834"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","0f4bfeea8d5c43b72822e7ababfa08d7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e66384d96c77b97098ad725ba29d9f1d"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","db7217295af1b5c3268a72f834dbeb42"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","5700a11bacc31e48b0005ca908263898"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b27eee31be2a135cba992dfb630b3ab6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5a1aaae2924c801e515510c7e7111efb"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","7c7ae382958cb19aa6c6361efad3fe60"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","039038032830ca52df7a650eeec5c7ce"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","c157fcf23eee34386cbd0073541aacf8"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","d6e4f93fdaea77e4222c67e5b39649a1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","0caa85d5615e910f083f199a89e56b19"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","c9e5afeef15f261270726736d7710457"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","acc3f9bfcf2016c8622cef2afc8e14c8"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","db6edd403164224f06b16693c88d7120"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5b373f6fd19c0facd63fee0eafd50b4e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1cf33c45d7365b0d4b55f8c6c3c95e76"],["C:/lmislm.github.io/public/about/index.html","032bcecb162cdb5fb6757ec2f25af60d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","239de0b9bc955fbfdb5a127c138e116a"],["C:/lmislm.github.io/public/archives/2016/03/index.html","35ff29ec563f8fc8cc0a7783ea3d4ab8"],["C:/lmislm.github.io/public/archives/2016/index.html","1fe62a17c060b1536b0dff9ebff41d94"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d3366d0cf6c35f865af12116bd015d62"],["C:/lmislm.github.io/public/archives/2017/03/index.html","fdf01deb6e83e193b0b6a29c4da60598"],["C:/lmislm.github.io/public/archives/2017/04/index.html","9b02b6063a090ff5c03ab41e15e24a0d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","7697893637f0540263286cf89394d4a5"],["C:/lmislm.github.io/public/archives/2017/07/index.html","54be13032a2c99a2eb58c161cd90924f"],["C:/lmislm.github.io/public/archives/2017/index.html","7092a167b5c1b93b723b94e81f1428a4"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b1060e906a433929a061d3e6f5585aa5"],["C:/lmislm.github.io/public/archives/2018/01/index.html","80d10fc3a302ef458296ea8fdf2cf15e"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c492c89262811d7a018fd7feb20a5421"],["C:/lmislm.github.io/public/archives/2018/12/index.html","bb89609a0d84d4cd880721c7f085c5f7"],["C:/lmislm.github.io/public/archives/2018/index.html","63c0af9d1609901af64cb43451aa8521"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5cc04732a766c0b88453be1df7470908"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","144ba8cf744004165a562f684f62e15c"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","1627f3c32080ee619bedffebbb18ec0b"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","b3afb855fb7728e27e8779e4bbd28d21"],["C:/lmislm.github.io/public/archives/2019/02/index.html","57c524d4546912ad643d89cfea4805f5"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","349d251c0db6535f8b0f242fbebcd53c"],["C:/lmislm.github.io/public/archives/2019/index.html","d4f952998c63a07a2d37c7c8d8bca453"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a9c749f3e2153b0ec6f11fe0c74b34bb"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","37f185a019a7be6136ecf4fe4737f123"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","aab8604e1c27d45212b545fecfec7acc"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","4913da26469d019889be308215e5002c"],["C:/lmislm.github.io/public/archives/index.html","feb8225ac9fb9f67130b3c272ec00653"],["C:/lmislm.github.io/public/archives/page/2/index.html","b1301594542805ce7a0a27eb46282296"],["C:/lmislm.github.io/public/archives/page/3/index.html","ba8ff9babd8cc96ccc9207e829aa9ca6"],["C:/lmislm.github.io/public/archives/page/4/index.html","b75ca1134faaca1d824abceefcb28506"],["C:/lmislm.github.io/public/archives/page/5/index.html","2667fb358836464cc924c374c2e3bafc"],["C:/lmislm.github.io/public/archives/page/6/index.html","0d6fc5632d6fd44c304a3f0bf472e0ab"],["C:/lmislm.github.io/public/archives/page/7/index.html","26c6badd2aaa5fe1e7bff5d6108cf9aa"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","37c7743dc1fccf63d427c8fbbd0c83e3"],["C:/lmislm.github.io/public/categories/index.html","68007eca96ad62e62bb693bdfe13326f"],["C:/lmislm.github.io/public/categories/学习/index.html","3ded4f44d26357a5c5c5adf41214a34d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9d5bbb61dca2b433465c9b8c961ac80f"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","621c7173db07f16307848acd1388c313"],["C:/lmislm.github.io/public/categories/工作/index.html","8871d1a32290d3ffddda45967b2b3455"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","dafdd2bb09895c84135fc21092f652a7"],["C:/lmislm.github.io/public/categories/技术/index.html","6aa020ae1e6569bf893ca94e83cf923a"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","3a8c58c72e03bb073ac8edb32a694750"],["C:/lmislm.github.io/public/categories/日常操作/index.html","795ec6e6207efad7e36a10009d66cd13"],["C:/lmislm.github.io/public/categories/生活/index.html","78be895f38286149564c5333591fe3eb"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","464b0c16e2d1d690e1ff83fa5c2226d8"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7a35c0bfe0891bdccba4076b34c68734"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","7c33e20e0f667d815d37e55f5c5fed1f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0928bd1b5125e9f54a5afcde35232602"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","3832d82fad8c1a80920a6a47650c6de4"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e6350c74bd6bc1835ce6a9d43629d597"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","b2332989828151ff3c092db4276f7a9d"],["C:/lmislm.github.io/public/page/3/index.html","8e73c0407336afed24e07974e966ad02"],["C:/lmislm.github.io/public/page/4/index.html","dadc20086143480f30478a48bb5a495d"],["C:/lmislm.github.io/public/page/5/index.html","327553454ee6f0851c8529047d8cba39"],["C:/lmislm.github.io/public/page/6/index.html","f3d4335cd32f81a7f1c169e9dd381f13"],["C:/lmislm.github.io/public/page/7/index.html","c7406487e0211298ee82327e235b8be9"],["C:/lmislm.github.io/public/tags/Interview/index.html","0a29c8845793b1f38c4dfb335ee157e0"],["C:/lmislm.github.io/public/tags/JS/index.html","383c73ad60b54df8bd79af795e1ce502"],["C:/lmislm.github.io/public/tags/acm/index.html","c572742b176d09c5a6e0a525be033111"],["C:/lmislm.github.io/public/tags/c/index.html","cb52dcad528a9caa22e1b584f4f28a94"],["C:/lmislm.github.io/public/tags/codewars/index.html","eabb6fac67832941d36424778e702064"],["C:/lmislm.github.io/public/tags/css/index.html","d6c646a8718769bb90025c4fd8e5d0c9"],["C:/lmislm.github.io/public/tags/git/index.html","3dc8f81d04a661fe154919ff23630e63"],["C:/lmislm.github.io/public/tags/hexo/index.html","4a328523b8fb388c07a2c75ddb75d167"],["C:/lmislm.github.io/public/tags/index.html","7518856dd8ef0bc2b604dbf9f3c624fb"],["C:/lmislm.github.io/public/tags/markdown/index.html","40ac11909dcaded5f21ed00867c68615"],["C:/lmislm.github.io/public/tags/poj/index.html","5d242cd4eed72c4dcc858abbec5d555b"],["C:/lmislm.github.io/public/tags/shell/index.html","20a7e0807751aadc42b428e876298366"],["C:/lmislm.github.io/public/tags/vue/index.html","fade8b6ac263eaa22cb4d67f59830f6e"],["C:/lmislm.github.io/public/tags/前端/index.html","5f0e0998fad4c623beedf70f15382151"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c26d4e438f3111b836cdf4bd77c94628"],["C:/lmislm.github.io/public/tags/小技巧/index.html","c05d6e4d3c626ae608cf028de013e896"],["C:/lmislm.github.io/public/tags/展示/index.html","4c30ff69a45b501bbc37bc8bbd5c6ba4"],["C:/lmislm.github.io/public/tags/工具/index.html","f1aa8e39a256a6a451240bc060da84b6"],["C:/lmislm.github.io/public/tags/感悟/index.html","ae6706c76d3b95f690d2ccf225f9fc02"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e964c4d6c454752d4da6e24214402510"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","67d531f62f328badbbe93b02c7dce3e0"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8e0c33eca1ddb846939e3ea0e3bf3be3"],["C:/lmislm.github.io/public/tags/练习/index.html","8799d6e06b8641547a8d73dad42e2b28"],["C:/lmislm.github.io/public/tags/编程/index.html","5da692a755fec28f893133f641751557"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","996abadd31eb6e93268b84926455f3a9"],["C:/lmislm.github.io/public/tags/运维/index.html","8d640aa1931fdbdbcdb1c4271df88a2e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







