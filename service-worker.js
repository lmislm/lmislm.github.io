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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","5645ae1e37203e59b5091a0b3c37e906"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","bb849c3ce173779d5185579b90668770"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","51e06c2f3b7e7bb289607179a40e6076"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","882be30d0006c6ce0c62090105ccb059"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6de02c0d5655738761de4c497a2f7d5e"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b6b1ca1525f7ca8c1aff198cc37b1fda"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8e384903f7f2866c6cafcf8eed0ab5fa"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1cd7ab2735f8085fb5de883f6710ac2f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","4a5e9bf4fab119883dfbe84b025ad1e0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","496248b2457c82f940c5818ccb4b9516"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","b65e7cd1793d0e0dd0a86b6e28927787"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","969f26fa214ac8c963c9090afaf71d02"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3bf27b2575042d1d107f1a94ac6c5745"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","0eae179de2b4d3d51050bc01ba76a4ab"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1c3a158b05852d0f5c8fd3b67acf856d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c17c9609512229064405fc19b127f790"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","44f562fcba05a6b902ce9a93bc753cc4"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d388327c5d9f935b9e945db946195f80"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","1c9c70006c5fa078917fa3fe6aced3f5"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","ba6dfc96b148f6f9d5beebd31d15246b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b2f34c1fe5afa1b0d55c32e54c1fed6c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","93d6457db41bfde6edc0ce44a4e6cd30"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1d81aae99440387ccf495c423f41d067"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","276da8f5637a997872aa2c7af10500b3"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a7d19529fe85310dae5e43dfb89003ab"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c717836c3b783dd4e26d855ea843b5e3"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","29d873a8b70f82b3332b6539db2175b5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","f0cd0426838ab86f29ed78d77a7d8845"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","7dd15457e64c87f863faef568e7aac5e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","553ca002a0a26120199f2c6c04aaa7bf"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","88fa718938dbe5ae3a041602d43e4f3a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","455452774c092b87a029c57c11eb597f"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","26a69640a238f7a01e2222bfe91909d6"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","24e4b5c810283c2de52675b96982bc7b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","4f7709df6deaa3fa3468580d9fd364e2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d56e3638e9a85dd97dbc59b15a76f123"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d4b7bbe4dbe8e8b8381540c3d2048c1a"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5c0cb0bb514b9afabe967e6d4483c6b8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","137409a9363e8474f3e085b5066b7461"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f2b31f9408a08eff5443f3719ed1e4a8"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a19a8fc1c4665c5be765a0c4e97d70c1"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","87b7d11fcea5ddf7088f7a26b4d430c9"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d863eb14c90aae16334628c2c802185f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","802b79c32675d055aa68ebffc197bcd4"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c8fbd84bc820befc36f1f2221bb4d821"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7b41b800b8492fe7a259487689aa3854"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","30d2d3376ebaee27dfe31041a18b81e0"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8d2666e6e81a15b9dff8947933797518"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ff1e3f184d512cfd21904c51b6c07c60"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a9fe4a1d7b270d905f1813eb3c068333"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e829f72bfb976e21dcd2e2db027954ea"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","c06ab6e731b2d1434c863390dfa064f0"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","79188d8fab8b3582a626ca1671d7f88e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","bedf9d68a4ada83d49584f1e7379c21b"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","920ab756767e27df91cfb41be07af307"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ba24dd86e198ecbefba782ca04e4c5ee"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","d1a2d79efc7bc7fa3d60807de67395e7"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","469e789d411b1ad275747fe11e8293dd"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","73e5f7cb79ff6ad1a850f6fc0e80e63e"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","a23c6ef99af88a08e49eae34b63cd4dd"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","704d7015d4c1189a8e47c59b2de66966"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","46437cb5cda629f1b57ea2813872eac6"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","5ab9ad1ec63f07d9b9d9da49b3e31502"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","183d3a30f87549b0eb5eda429d7da6f7"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f399d5e08ce1ae3c0f89318af55156e0"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","097de64baf9b60631e20c94c6cbd4034"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","28434e3f193fda24e5846dc53e01e54d"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","51064e39798a68117a0628daccbe08e2"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","af23daf1606cbcd8d1ef277fa59253c0"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","ce5233ebd54a757ba66804747fad6822"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2a7d4ba0c8c34a1c926d108c61646976"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","7fa67adb0021780cabb8d77d60f4a06d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","be4bda969c404e92f84b212057141b98"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","f6c0c037ca26d894c395ab1ef5145331"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","01aeef2562d6c4b3ef16967d85a1fd18"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c540e9f7c32aa32dfc19d28260a82226"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","77643b475f887e5010d80373641417ce"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","9ae555d9629b151ec5621ae09f527393"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","79739e348ca233e8851bfaa7a1bf1ff6"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","ecf6b11d9c2f21799c84b64e936bfe63"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","4d2a8b0d3df0782c536ba708a88f7927"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","a84187d80e5bd1372aa4da101589edee"],["C:/lmislm.github.io/public/about/index.html","88f89bdc4236b82105d2ccc95af1e5c2"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ab3305e3e17a434888fba07388b9efc0"],["C:/lmislm.github.io/public/archives/2016/03/index.html","69df2d524821471e7b0e74fae62133c7"],["C:/lmislm.github.io/public/archives/2016/index.html","16c7c3f2bfe1742f7a8dfd319fa81340"],["C:/lmislm.github.io/public/archives/2017/01/index.html","9f321832e69c0d5277be298118911dcb"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5254e6b76642cabc4d5602396901c55c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","bb395b9ee575a4a15c04d5e51be83d25"],["C:/lmislm.github.io/public/archives/2017/05/index.html","25da56eed2b32b0e60cf4a19671efcda"],["C:/lmislm.github.io/public/archives/2017/07/index.html","ad1afe135ddd57f1092dc0c79a019df0"],["C:/lmislm.github.io/public/archives/2017/index.html","de1471468f537e46a3e978e9490a8db4"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c0887d3fd73fccbfd74f188accb82926"],["C:/lmislm.github.io/public/archives/2018/01/index.html","de60633d26aeec8f5e6bd9a8077f38e3"],["C:/lmislm.github.io/public/archives/2018/03/index.html","962477ddae5713e2329baa1382aec62e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3620d0b7a39fe8bccc91538c8fce817f"],["C:/lmislm.github.io/public/archives/2018/index.html","e0e1cb2839e3698e07e1b20b2ec3893f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5b0ea7496650425bbbcbf34b68acbab3"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","f242f3dd9c80e1e0f77f32ab37ad5bdd"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f427079228a43cea942f11afcc597e19"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","bf01d36db514020f98e780988e64034f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d1b126cf3020e556cbfdb2a13c263720"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d673d33a8b808b8d335415f6163da3fc"],["C:/lmislm.github.io/public/archives/2019/03/index.html","e12079c62c4ad8cde218fee60b4946a2"],["C:/lmislm.github.io/public/archives/2019/index.html","17ffdde0758977e565467f3fd77718ea"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a218d9b69ff70ce4fd34fe0aab788933"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f670368c36b0a023213f9b3e8de10326"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","36a46a5c39bbc426b515d24758c7ed25"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","0d71d215ce92c165366bdb028042623a"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","1a4e6667db4af9beca9664892df62c33"],["C:/lmislm.github.io/public/archives/index.html","29e009417054c2442abf098929476fe5"],["C:/lmislm.github.io/public/archives/page/2/index.html","cdd9597c40b1f9202fdf0ec925a16c3b"],["C:/lmislm.github.io/public/archives/page/3/index.html","95ae98cbe043732437926e22d9dbfecf"],["C:/lmislm.github.io/public/archives/page/4/index.html","8adb7ad973d8c3e0f6da07550d287f25"],["C:/lmislm.github.io/public/archives/page/5/index.html","e6f9edc4c8af3766dea27ad48f09c455"],["C:/lmislm.github.io/public/archives/page/6/index.html","f3ec93f5e5486f5d6159406cebd87a2d"],["C:/lmislm.github.io/public/archives/page/7/index.html","d1c27c54cbb49a650754395466a6e995"],["C:/lmislm.github.io/public/archives/page/8/index.html","394b02d5f041f0f564b6c82b18b5b2a2"],["C:/lmislm.github.io/public/archives/page/9/index.html","debc310179da0d599f7c2f35fc06b46d"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","cc2e0604ffc45aca5798b8115330f084"],["C:/lmislm.github.io/public/categories/index.html","7f27b6e6b0cc76a57d674cbc9bd67808"],["C:/lmislm.github.io/public/categories/学习/index.html","5394a87be23cdfdae8e454a67b14587f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","edb39d6ddea90c11543334152d835f05"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","225222cca085e1570e1dd4c044a0f796"],["C:/lmislm.github.io/public/categories/工作/index.html","2a26d9761d9dfd44511ef706f65ad57e"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","887ec1ee1c46944191e6ab50a27f3e30"],["C:/lmislm.github.io/public/categories/技术/index.html","ad5358f140843f6e59b312fb5d40a07b"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","09059c62ef908abc77a8a9c0293130b7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","57c51686a4006099366b3e8d2f32bb46"],["C:/lmislm.github.io/public/categories/生活/index.html","f25499cf6646ad6f5c81c0081cc8574c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","6f52040c691890030d69cfc01e998300"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","72d430b451de6ff95a90bc4be9e8d171"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b814cc15662dfd9fb54b7e509c841701"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","885682b1c1772892a11ecdb2beebaf2f"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","93eb51e85bb81d08339678d832b8bbd7"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","94fea7862655f8166322eeace61074d4"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","1d9c1baee236898801f99a4e8a7d6841"],["C:/lmislm.github.io/public/page/3/index.html","6cb086c77a868d82e58d10fd6e92f9ca"],["C:/lmislm.github.io/public/page/4/index.html","0247d39fa03d9a617586c52e3350ab87"],["C:/lmislm.github.io/public/page/5/index.html","d8bcdc22a70355044041fe3ea734755e"],["C:/lmislm.github.io/public/page/6/index.html","3a6042a569b9deccb8548c83a8edbdf1"],["C:/lmislm.github.io/public/page/7/index.html","2ac5f2d8c8a0672ca3b24c3fbd376c81"],["C:/lmislm.github.io/public/page/8/index.html","4173afbea479d97ce287f8e84debc450"],["C:/lmislm.github.io/public/page/9/index.html","c4a62e45654ba0f6b0c7cadde360354e"],["C:/lmislm.github.io/public/tags/Interview/index.html","712184c125d4457bd68b1c1ea2e098eb"],["C:/lmislm.github.io/public/tags/JS/index.html","adaafee3cc03a0582c316a09dc84d7fe"],["C:/lmislm.github.io/public/tags/acm/index.html","1372aa7ce0d67598220bc04d5e423880"],["C:/lmislm.github.io/public/tags/c/index.html","31e1c756cd472833979ab6c5f7ee7cd8"],["C:/lmislm.github.io/public/tags/codewars/index.html","a94ad90d98b8c5f3f02e93cc0bbde5db"],["C:/lmislm.github.io/public/tags/css/index.html","3d2d96646047a04434f271d4e9326f50"],["C:/lmislm.github.io/public/tags/git/index.html","0f75f1a584f957c020bfeddcdad90d70"],["C:/lmislm.github.io/public/tags/hexo/index.html","008b9867800af242fe26815dd5531e20"],["C:/lmislm.github.io/public/tags/index.html","fcd5010c07482c5ea61d60c4573ffc39"],["C:/lmislm.github.io/public/tags/markdown/index.html","b54f0a9e6df5efd7b6057aa26e449b23"],["C:/lmislm.github.io/public/tags/poj/index.html","985491917c85bad48ddfbf54a3848db9"],["C:/lmislm.github.io/public/tags/shell/index.html","57349ef2ef66d7f1c5346e3c457693b9"],["C:/lmislm.github.io/public/tags/vue/index.html","09d2c3825da8d398f0a510eda3bbdde5"],["C:/lmislm.github.io/public/tags/前端/index.html","5e4151b80af7226f7aa51d97bb10e59d"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","8e805125941e51f344cd416f88a858e1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","5c31a6416dea8866b65bd80300b25193"],["C:/lmislm.github.io/public/tags/展示/index.html","18a1dae15ef830eb7d2ca4c2c9d3f6a2"],["C:/lmislm.github.io/public/tags/工具/index.html","e5fc07095d7bdbcefd007119c8653281"],["C:/lmislm.github.io/public/tags/感悟/index.html","1c04ed8c43b87fb70f3e10e68c957cdb"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","50d68c866c45ac04f30dbd09a810791e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","a3a5342f653caf5d817821b10db95380"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8338b47b58d43500b902d3082ecb0297"],["C:/lmislm.github.io/public/tags/练习/index.html","56d05f6d982d981ed9d1bff67d9d4c36"],["C:/lmislm.github.io/public/tags/编程/index.html","db14ffea7cac0148e6ec5dff9687e7c1"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","432e5eb41c899c331c39f89f83869ccf"],["C:/lmislm.github.io/public/tags/运维/index.html","70a8484657fa9ca4fa957ccad22647c0"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







