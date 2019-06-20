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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","11aa74c30637b475e4f3cb089a2321b1"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","8fefea01c9ea79936efa2e747fb65bc7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f909d86bd5d4e040fe0f1ee484fb8bef"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3684a0aab1d936edcf137a2d773fa15b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6436195da4c8e8ca4d8d37ea6172b7ca"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","dfb6c821fabd35e1db3e1bfe4395a1ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","035eedf5c3b0e3e8344bfd46e6ec53cb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","60deecf075f9865e27d4a795139ca78c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","cdc793dee7fe3c8655f0e12ef62d305d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","387d45d0210d8f8e4da64f25ec746cd3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","147f1badba58d0816dab6c70e00a8201"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a205bd419e3b2e12e5e16e36c87aa9d4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","19b11883ce140057dd47d0413b2ce536"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","47994894b581ef382ac8da97e646d46e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","f7c02850aa5023eb8a05716151997c43"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","0e8f0125da1fca5a852d10fbd47a7765"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","38c01e72f05eeaa4d896cd7bca1c83c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","77d6e63bd0aacffd24ea7876cbc78fb6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","fa9f4089aa4efbd3d0ddce2fe9a88787"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","f7d0af372c159542f300f5f11040a0d3"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","f81463e45dffcfceb1f24c02a01675a6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d1bff4d04bbe181ff64257bfdf3d6f0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","995bb3b28dfc48239cbed7d483c8ec05"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","dd0e5b387ce9c6bb16e2c44537d0d06c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","a0aa0bac05459ca64439a1ffa3eec9fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1a805247a89c3014c787f43c52be3a19"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","929e20215772eee85ee0f4d9f7dcba78"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","fe0991fc4e992ebe08478e4709b02efe"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","852cae0bba17c2055896043e08ecb30c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","10b8279caaaaadb946d729df538551ad"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","85db21f8c217d5fa5ab82562145d65be"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b436d8056fae3ef6561b7a5059ee3a1d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","ec4d21ab7a9851d41d360b916650939e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","1c2e4da6a697cd1af8b6543faca6a824"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","35fed88527553c8f591b5e0dbb5041b3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ade9fd8988c9b231233c1586a85800f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","67f14b6784dde0e859be1f2f711e4966"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a1b0b7b1127997f7699e8ec7bb53b5ac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","b2e3107012622d7989a470395e5de76b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","dd4ee5a535154de4a8d18608051276a6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0152cedc67cda0c08141cff3f5f953a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","3559d7d2882c0049969a34fea8e8bba5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","af2d095d136ecd41f5423af76d500530"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2d5725ecd020174cfc2f2e7805a747ac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","1eb461a176fe24b2d1cf966c5bde632e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","c0489510b94ce77629936ebd996bce13"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0b7bf0e8db4d7b752e69b218550faf7c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","98968d337485f1353382b561f133aff8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","412af13dd96b1843fd6beb6e6e7c0730"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","548aea627857a9876c24e6297843841f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","7b26d1ba3e86023f6aeff343f062e7fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","16d4d660bc8b6211964e6f260273d0c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","daa3f72b5d11a51831afe2c19409ccff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","fac5052caaac8040fe5a203adbf5aa9a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","255e55a4929d1ad29e1f3fdc805029a9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","93b95f8daae10d96633e9deb5def9db1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3c4367cdd9eda68c79d621895d847384"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","337d6665cd2d414cf669b39e9fd55944"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","07e980b66eeda5cf89bbde5b8f51596b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","5d222cf3728c1a99abaef391a06d041e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","433f32bb07c3401a433034ef4b268289"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","b850327143d3e8b7dfb8fe75358a8b92"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","9940fca7349a5c42bd3b047c65b83374"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","937ddf6e2ce8ece6a9fd9cf79fe47800"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","171e97747dc3f9e26bd12bddc2545626"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","c26e390e2c0a179a8c819fbeb950f638"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","70544343fa63ea36b710632bf738fe4e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","402a0fbb3381836e8f994ab32da3a6cf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","113886df94123466a6e420a0cf812d58"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","7495876ff09451bf9738e8b67e5c39f0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","a746deb6c047552e7b37eeb587b860ca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","3f25c8518baa059a73323f6654045f5b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","fb0ecdb4edf19dad777df83154112d40"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","4624415084a140320f85a5671002c325"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","7c9b10817579021e3964a4bd59261c38"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","888e68c6c49f7f2ce05c5204bd63f103"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","048b4e7a67bd588e2ece33d9b9062852"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","3ec1605bf63a064776c744b016e75722"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","d949abeab34a98006e7a6da835ad5751"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","7a24e1e9b932be093fbbdc8376dad3b5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","6b8b6b90f195b42457059e12ba483bf1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","b231560e901476144b8a7f182371f5b0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","831e7d138cd91ed4848971c3b7e6e085"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","4acc0a79d534c3c7dfbcb64edd59e532"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","5a8c2e8208c52a89100aa609493f37e3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","7e389fc766c6da6c6c7cfaf443f63a93"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","f57d99441db95d486b427344ba1b0048"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","aa7850fa0de0a42ff96aee24339bf5e7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","bc271aded9b98eec04c5329ed2737f21"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","27dabef84909b8f31ef37a14f5a3c641"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","8c8eea92decd3d3fcee646e01e69b771"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","db2b7e3025a96676b36fc577adcb428c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","310fb1abfb9faa96afc4d1cb3f3c83b8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","a81669e91f37b4eec9f9069319296e31"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","a1a5f06803b3ac567467a4306e7c54c9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","a52bd8d1fe6b456748a40c86901d83d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","2aad2a90a2d5393baf17064092173cfb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","ad873e0905a656ff26bfac25698c31d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","f8dfd1528c066c6676f08bc2c1afe81b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","faaf4759a5adf6516e16508729b537eb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","5c1bcfdac4d1d851c649a66d75f41441"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","09ad4f551fc9b095abd77d5d8a6bb52d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","a0bbe48224f1d11901174708d4fffe86"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f168ad1412fffe1521ce3e14b8f3e5a0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","ccde46322e959c5e541ad9083f7e2b48"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","f5f0ba718360623ce4bbeb612fecbae0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","408591df008aa29c1e49b01a4323c1ca"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","2c072b5efb30c36e822f5d54c527570d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","06fe898e2f4941e047d227bac27b956c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","2a3869486669494ef216c2d4bffb6087"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","89f6a54e62fd67a32ce36a65e775ccf1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","bfe88bfa8ea0645d4f6ba0c1f18e13a4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","79bca4f3ddbb333dfdc9854cf32b5787"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","6cbee0dd1f3b62e63a20799a4ae2fb70"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","87c82caf0884334519745ee2566eebe8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","b5f3094e7bc336b44ee9cf6b43a9f3cc"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","542933019ace47905e8db9208860d697"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","c0d6f88f15e35fd9bfdb7bf7b5b15f19"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","5666656ade5a5f4537f529ec3d5509c9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","c9c44c8de488fc9fea0645e8f91e98e9"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","a127afc4e719f596f2d8c4c19ea6702a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","5c1ecb7473c718fbfcf0c92db2105029"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","6f6370858684a1723b14467d21847bb6"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","921b0b46d9ff5fd2e7752ba5cc0a5ced"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","752b774d0034ea09f9428ffc0cd5f196"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","30cb803c3017de384f424f796e87a828"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","4113a35d661162b9e81a11fc2b80fbb6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","1c80cd31aff86fc2eb0e0e5fe3c28408"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","ed51251b6fb9b6b3df631b8bab2e9f23"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","7fb4c1955e140aefba9911d888375d18"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","ddffabd5017cde3a482a0a3a06580706"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","a0e3df516abdbf508879ff7583151ba5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","76441263f4ae8433d3be5d37e50dd809"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","1f64725b5f9f57784afc39b0466e6fce"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","a673bb83101d97be102cfbdee26a28f4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","847c1612fc9ef8e58503139ad8847f37"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","83569f6ecff64f5d85df83d5c533c0f3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","dedd2b1eeccad5285c191934ff432223"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","3df17bf064377206b4448af878d76eb4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","8ab5554fcb7ec2078f02bbba641f4546"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","6bc161fb973c196fef899c9669baa33c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","2842230f0983e6e491af9f7d74bedfc8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","12760994197c276f3142e938f96f66d3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","f6110d7fdaa6f9c0cf10513abcac917c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","61c395f39d02a19ed996c1c03068ebed"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","77c82968b8341c7d774e744d2578bb96"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","2240bec89759658fa7daa0d0ad3ea416"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","29979fc1f67d87c9697436a743f90850"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","7401c3ea25fef0106bcb0fc9c51bb1e8"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







