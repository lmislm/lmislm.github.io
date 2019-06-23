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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","845d32e8438ec8a6ce0648c7ccef2f00"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","068227af7d855cf50dd9275b05c349a8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f4d170d70807e80e588174d8f865c3a5"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a84bd73356daabaa1c513f094c52dc5e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7cb2addfc7db067e3b42b570725a87f3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","767a4bf6e1a39563c6d1f76b88c095d2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","58ccb702c61915f11819bd6921236798"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","7bb4d670d57ec17b1e8b1dc67f86ff0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","6a98f8dc9a8d3cfce1d43d8fd91aaf9e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","99ded7b66a11e3f24c3820d591205dd1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","726b540ae6f9336920b7fce0531687a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e6e9e12d6afe7dd313a3862f69ff3b74"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","017c3f400ecb7cbd470942c22bda4698"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","6d93ec5bf3a90d8d53609f43ad1effc7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","d44f2f229309f15ad5bc3b94437062bb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","c7e08d2e690aca94cb51e466c2e84f25"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","3f64a8cb0de9c60d454fdeda213a122a"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","dee796d856158837c5044788d18a845d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","0290014271554f595f244240025090b8"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","c4d805806225f22606622787b44849bd"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","730281e0eee711b70c5793e2ac1c54a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3583ba7fcbfb99d62640e7e2868b6178"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9d4f332b8a4c66116d5309b56bf88e4c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","93133112c860e600ba77f6f821987a61"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","0b212f66134cff0911665e4c672b80c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d86d30182519d47ccc1cd6c542ec3903"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","56316461ce08c1c0a6fa46d127423f2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","b7d431e946a88d18dd26aa89c827a30d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","66ca78c95c3eaae2be5da17d385daabd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","23f73d8ae53dd4379155d57eb70a07f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d4f7c76d3f11b7d400bf2bae825de47d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","3b5b627586b8bcf3ee0424ae35769c17"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","21445afbd5a6ef9255da17b259a90338"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","5633d03b85a7886285fe4addea6772c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","13fa9694921765fa89ede1f41048fdb9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1014940bca8a910a220b7fc990f19c70"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f8c8a1dc3fa74e5c5ddb099eb98b154a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","dda0e6565afdf1e43da91f617e105a23"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","6d668db753d096cdb40e3dd919b614a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","427f8f63aef15ab594b695413396f955"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","43ac920a9716554501f79e2beda10ef4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","42e9ed98efde131a67aa361cce682fe9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1ae3152da5e7c78ea81839a002e8566a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","903f0e680fb4d0ba04ca027b80c3b718"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","4b4bcf11a689699c19b2069c345571da"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","8cc65e1ab7ce207d0d775005f3e68d0d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e0bd165a5797b519afe497020c55764c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c2ff7094d14c504f02991d9f18c0be38"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","52f3db305519c04907936fe7c5269928"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","909c4bcee5cbc2e4860e950daf8ac29d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","0c8632ca7b2794dfbee707251cd73337"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","8b07ddd861dcae986e519b7852b19891"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8307b6cd3b71efbc365ae2fa793f516d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a1792f0039dd3ca3e3973180eb84c289"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","a50d0d53048c805363306169bc3592de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","ed33e6d83b45627cdfede733c61b9c9e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","0df2a22a3f4a19649b80152d960d3ffb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","72a5d7b920475ebf18c6d95729ac5483"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","f5b0fc7df8fb2d2f0922c4b27db90894"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","0f090b273d83e221d6ebd993e5574156"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","35f6475b877f29e6b8976a4ee02860c5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","a3c7d466a74b4e8bdce25a202f166179"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","06133203461d6985d7cebcaa2056b5f9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","c86f98cb86b9fff70e8fdb52ef366d0d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","9b9299a0f61f91e35a04016fe40e7101"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","b1afcebeafafcb2d9b46bed2bc0e0ac2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","520353d9d93edd9dc6613910ef129add"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","1ddd5a969e6959e8b48e82ffa4ad4894"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","aab2053b8bb4a504e929fc32a43f3599"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","ea884ef75774c259402b26e1b0c009e7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","71bc54560f0910480d07e82ec9dd70f9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","9f0b53fa26e0fd8a8c315c3ba289f166"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","67f5d97324d13432f9335d85ca21f387"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","eefb49bb29392cd9cdbffda17cfe09cf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","573c9426f6aa1e48d99ea47a50715dfe"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","bf573bbb79fab51c18ad9a9f685222ed"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","97e66801bc693d2f49cfce8dc663a27d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","6fcfd0a4d036b414bdd9346571480ab0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","423687471cc2861f20313b8d4a93258c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","15f1976d9f9ede4bcad35a2eff986194"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","bea43aedb1462710ba7b8b80bbaa73c6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","d59e4f11ed9061fbd2d89a613126032c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","161b285375b639ec1737b059c5948a72"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","933f3ab46d2f805ef5d164e91e46508d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","8502775816ba0385abfe0dae5dfe349b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","7f5bd076ea2c30459d0b645a27b7088e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","40f54d640b6062d94901cf96e37fac07"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","cb02f969efc33ff44bfa1381f59d226c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","a80da5085a91b9d2998b0fe2e8eb1d40"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","206704d81a6a32d3cf017d5da89d3bb4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","b04c39abd400142e2101bfe4a4cb529b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","c3f30833354fb3a27878ebdc09bd65d0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","0931388fd0807c13fca6b7c1f0de7db9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","94fa85f3682b5f06a8b4e82c490afc73"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","25011376469cd5de77e8596b2f567242"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","a422540562bc993aebf334d53fed1d4f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","25489e688cbcba124089330d0f56bada"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","a36b62052245aecffa671cd95a638eaf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","ad73dc896cdf9fac6c44cd53f5234a84"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","68886fd64ed34783bd25a793cf70df0a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","24da3ca6ae13a6948b607cded38565aa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","0bcad5097fec95aaa5bc23fac14464ed"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","05e7aee84ecbfea966326b67174b0796"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","54b1f900f5e04153dd3f5270fab1af27"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","5f7892f5b13c420a2c331582879efddf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","9a98b7471d5cfef641178f6c703811a6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","b3cda24ac1a627bb71812d87e0f4afc5"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","7cef2fae0aa61be2e68b0e52f50e1f49"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","4a96c83299ac830b2b0a635fc8c6bf21"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","4f1e6f193fccb89794df5dbc402fcd02"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","78d23712140b6de7fbd604605de1a8ef"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","9361ab8dad56ce33d810325f26cef1c5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","d8c886a799cb0de2d46227d37161dd97"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","6cdd4fab86dd6c8075e44578119fb8f5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","4ca253b8ad0134d1265629d9db14107c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","d71e35fa34b1b722b95ccadfa4e8520f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","4ddd1d2fc7cb42804a9ea8692a7fe408"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","3b0d642f63e9301ef4030e67dc8b5d7c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","aa4785ea7c1b3f6f558253fd0601d0fd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","b017f7b7d4c9535c6684c6ba3673b424"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","97731b1f05f70f2235d733bc33043b3e"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","02b5f57db42ed6537261b81501da3569"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","5c34c6e5f7de2ace8742b4e8e53ad741"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","68b7403b51aa1ea00ffb5dc57730aeb3"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","65fa24255f252548c4a0afa15f96e763"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","05109fea4ad52b0df07da765a96f1955"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","d63c6e8d86c0c1fd48e7c3b7ff1bda42"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","b8dcf78151711937c0de58700f09a1c8"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","1734c51982e11c5a2e1bc43a546e5677"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","4e495f9ae74fb1870bf7946e57592c83"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","da6c3169c4fd2630b3fb43f88d0b312a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","54e9832ecae86339d11a1287b1c9b82a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","249b86bcabbff74138d2ad56ffcd1810"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","8bf00fd455ab4fdcb7f6033159bc2eec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","f4ee97af7a5624412efb4225beb70071"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","0f8989b31f664d959fad66df06fdb362"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","80cf3b634ae90434a06071c9b883da20"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","93236e50304087e8628712bda753a118"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","baaafbc5f205f8ddf767b527f165a98b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","eaa22aa9325cec91d217c04c47623c43"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","e4481ff5d6f30e6ea0a2fbcbb4e99832"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","0cba4ca1f341afc4eaf65358a68e1a87"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","81618296be752a60b26b56363c6f1488"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","3b70e062a92ba2c686e9d80f95a26a35"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","67c88c8f16bfbba638a9a2596b1a08c6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","eb2175676e69a599278600c208384bf6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","3923b0faf24417515261dc5cef5fbf9b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","b753ba81d45376c1173ae7e6adbf2939"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","dc367b6726081f7ee914631c8e478a14"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","0d0bd4d116fd78c8d32a71ca5e8938ad"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","9cc8060f238ed7921de20d3c3acdd305"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","428c93b580ce00ae3a920b367acce6cf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","ee09dca43fe02109bf7233eaed0a3735"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","d91ccd3cb9fd67c5bde37a7f47d7c831"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","9eb0abd9a47aa24c0330250bc792d76d"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







