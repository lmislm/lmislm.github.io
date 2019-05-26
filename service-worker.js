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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0b2b1bd7b116db6cf8e40c838ee7f1e8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2a0953ef80562dd810ad084b4460c913"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fe862fe16e79a6674dcc6482fa260086"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","f45b976d66f75948a5451a5ec121d518"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","007453f028939400189c6a7208509306"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","2c8d244981da4d2b68107e24554964c2"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c5906c76ecaa402d4001c79ff2190018"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","9fb7db1d28c2422b997aec1254c6ac31"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","44f414046e9a2ad1147036d330c506e6"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","0988521b962400c07742722979cf1a3f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2ea2d9e88362a81114a8392dba4cc8a6"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d81084df32736e595954a6abe75d95c7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","7723c6e437208176bb04fabc00b1a364"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","30d2b4a13e14015dada4d3c88b85cadb"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","efa7b8927fa6d9e8fd85a96f98c50cd6"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","091dd1f0fb561b971ddaec72b9dadb95"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","62ba7e25face5a6bc721047840de0ef7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7a0f634f5031aeb6f381eb84a96bec76"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","cb42932c4a10ce43ff9d35eb1a9e5863"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d5570043548ef3c4c3704eba507a8e51"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4c5aca8fba15e072e8854892cbac2879"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d2a26457193465c9f4270a0c0a3a7a92"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","88bbb8a2a7db4d21183c64394d97f013"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","17bdfd3a3cc908931f492f3df89bfe5d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2b4589db760326bf9d47be76d6561407"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c1de25418e45d910245d2ffa97acd88e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","887e9e40bb9bb8b1229ba9902ace4cd1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","032bda3bc6d5e3ba4bdf934f0aa7772f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b9b37d5683edc2525dbca2413da54ee8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bc6da3bb609434929f8aca1d648f14ab"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","60aaec38c82dd01e35d5d8aeb398a0ca"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","023070a32685681755d883df3f758548"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2bd842766e7378b81367c8b87bbb1f54"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","5387b80b2afc18aa6c381b775a5f804d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","abf5b08700b4d3b3515323b47d492ac2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","4098997c9d9f3e596fabd7075a3b56cd"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","36a5c69a01063aa016290e092936ef71"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","d6d23193957a621694fa92dd1553a90e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","357cc770b5db2cd0776098b9251c2d4f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","19875493b46dc6ab9ae567f102acc899"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0b1cb64d1c63df09040d782f33a8e149"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","666390de1cd8aa4f5c02e1443ea1ccf8"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","c8997bf4401a8a863f30e129cb81bbfa"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c33c12dc70c70cecfaaaf0451f3acba0"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b0392e62269f3f030eac17596e179397"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","01d401d65bbd6dfdf287e41ce43718cf"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","a051c7ae79a1829b53ca5d4629b3d87c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","5262b596d992d2e4eea39e2745b3eaa6"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","28d06c82efa5c2bd2d33610acc2f0429"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","90aa1421e99cf5385e89389c28a73b51"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b57693dbe7b0cfa3b743c024d4580374"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7bc24d97cba87727416a3b8fa56ea22e"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","bb1ddde95a40b9cd5fd7e0cc74df1056"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e157d71f6e151f626a62566919c15622"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","3a884704d06a9f8136b15b818a321b7d"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f02c7d8cf8e54fb3d7637d85a0d40bfb"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0a7edcbda02b9e709fe98a87ec780db5"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","f388f67ddeed22fe87b22f1696aa6cb3"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","ca7b8c0d2231060f2faeded3b25dd6d2"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","25fedffac47b18a246be4835482b12b7"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","184c7c25df44bbf1171c63e182fa154a"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ee5d652baeaf050c2afaa139b6ddd944"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","7c95e161f9d6ffd769978b02f5679570"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e92fc4919eab6f4a195736fb3e360506"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","97341e323831d086a8012030ec824aaa"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0fecba023726708f3317ed3b6a8c4d37"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c530b8fb3d54d21bbcaf3c871058dbb2"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","35557453842b5770fb3e97659300f8d2"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","4298113ecdc628a87e5a4d11b836bd77"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","2680dc671fe9c26292e90f93ad4acf70"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","6c69f4893dae64e37f3c5ff93a68b011"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","1918e3a7c1307e57c024b664ffc2787c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7f90b83745e61fb6dd5fb78767509137"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","0c15f781e6b7f93c231f0fb4c11b2c4a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","895e73dc53e31ef71ce4f1dd293612d9"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0c6cddc4cb1e24aed2e18cefb1206b2f"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b4989ff96c83c8fbcc7218248218ba57"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","0ab36f3a7fe64a4bd79fe587a1bc34e0"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","5195f2015c7fbae57998e24c59dd4090"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","3562800428af226cbe8c74092214c511"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","77d725c8ad021cf5f54a5430dc83f165"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d9a8804c5f621ef40eccf3a1738d1480"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","06de15d6698c9eb08cc2d90310528f22"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","737d4e869b2987795672b891b2838176"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","954ddea2a88348a92e66789763cf6257"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","8f6e6602163e9b50f749fe2265d370fb"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","731708a86abc61cc55c4846d286a92e9"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","ac5750aa85dc8bae3ab583d312ceea8f"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","9d47f78bc4adfc6ddec5b6521ce9ad6b"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","dfa343ec254165258a18db641f1f904f"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","89d439607b33979abe83f95a87eac8fd"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","ad89002dffdf600db62cb4f346046649"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","d35fa36b9b182b6d0a12e56c980f4341"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","bc3ae2f3256b4c54728112d957379ef3"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","2d148dea90208b6a81fdbf5ea93019d2"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","db3a6931c2ae8f31fa628ac20b899a72"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","1bb3fe0261679f99a9821f831d7baba9"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","7db2152a52d3593b76a79aa5368c6c44"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","cd80d6b84cd6f481c8e926bad76a9452"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","94d1c23dec327db3d76b4acb087ca6d7"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","70b3c8f05361a33e2386af0e5e1c4b20"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","56046cea428534eea5ae2886af442d94"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","5bb9107fe3d022ad7d107cdee2074486"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","635c9451bccb87c2fa35b936446aa5c2"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","2659878518be23e810218d21576a9888"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","f9dd968b470b128a5517872c09682e6e"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","6206177ac7506d7f1498e89ff1f32cf5"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","ee1497b234fbfeb6261820fed6a5bd8a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","c37c40a8aa16fc3b74f64f5d2c88016b"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","62971825700063bc84b1bdeb0b8c8084"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","8cde38663efe3f98d61886ae26caaa31"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","cda36d6888f36be72f025199853a9b09"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","77ca8058c5402e950440a20b3ab58159"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","4958515d26807b56dded9c24dc425713"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","2ef7f0f04162503d273c3bcb215c682f"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","ee4b11f119c7905b403f4ebd4079d85d"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","278fd5dd7850c40560421e9c920b0e84"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","fb2bf76adbd947ea7593b539202c49ee"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","d7b4c79febcdbfcb6e3d5ef64a7341dc"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","bda05a4ecb7a9fa710fd6556011fa404"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","bcf0abb2ed0e806ef16103cd79fd2445"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","8ba0efe1b82188de367f694cc235b45a"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","b78ba6b6508d364b0c207385fa229f53"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","2eb8875c1e8efd3d22f0b6b62f86050f"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","ca576e469ad14e312871c169d965a4d9"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","0c2d8bebc05cf6ac3e435475e5bb69ed"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","052c0f58793b37304dfd2a2382c805b0"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","346f9f43e177700e9acbf2c26e4a0142"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","22589bd3d1985460fa004240494e6cbe"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","015214f0bb757091f3899ea05c45ccd2"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","85dadfc4a2207753289be4f5cc782ef0"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","d3c312afccbf6a1e384df1fb067b41be"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","e3e8cb2e4158cfaf16a6a3fa37ec7665"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","385f7b4430ea431281dd242191e6745f"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","e0d9f1e67c0d448c4c35910399777103"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","869dca36f72d2ce84e863da3caee90a3"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","7f42e3982e51b0b354e07f6fbc9fe81b"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","c27aa1589f60709ac867fbeb143ffeb9"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","a04e753e18f41532d272607a721d8287"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","34c8f9fa7d8346aca18d97152426ce98"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","2cae98b088ba604eeffe6bdc01ab5a3c"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","03ea55972ca5016790b6399857e98c37"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","5b9d29277903bb8f406b32d927ff3658"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","52d11ec1e4793de184c147486623c2ce"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","ef774174c94fad98a1e45e24b2883be6"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","cae4def9f7ad5d63ab85fae775d28a6e"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","07bdecba18cee7709918cfaa13be9ce2"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","6f21c232e917af682bdfef7a889687ee"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","eb8a958b2d08e03501024d979019c1aa"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","891b405e424345377111a85a0401886c"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","4c02c04561ec2e1657de4baa4e4c79ac"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","57deaa8b5245f716b1bcc97aecac23b5"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","da1a34c15395afdba178135d6e47c8ed"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","2f25cf097d47c8c034468466aecadb8d"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","459d7535bd0bdde34661af9bdf10494c"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","d24f2f2dbffd210b798ad58ff50cab80"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","83466951c58f056a2c420d7f5bbfce65"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","c62c7e2a9807f2761c951c55cc805bad"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","9d33c0c81aeee9f4cee5f2520942255c"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","4da681cb6d68bba25304c3fb1630141d"],["C:/lmislm.github.io/public/about/index.html","17e8cfbcd5d14e41cc387aff153f17b1"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c38be635ed5e158c8321bbfaea904555"],["C:/lmislm.github.io/public/archives/2016/03/index.html","00b42e1924ffb8ec67ecd2ce8e2478e3"],["C:/lmislm.github.io/public/archives/2016/index.html","e8d738ec99f3e62ad363cf47fe0164eb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","6026a8bf0efca659cb5411a19077d0fb"],["C:/lmislm.github.io/public/archives/2017/03/index.html","27abc3c0b604558a0dadb39e95fe6d92"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b09afc032fe29caeff729ee92c48ac33"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0ae4fcf296708f7a75817569a10f41af"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a78824bb76f151044023026a08206b68"],["C:/lmislm.github.io/public/archives/2017/index.html","d576fda03681287749ad9518b1f72d15"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","74e007f09d1f416a315f3166f573cdb9"],["C:/lmislm.github.io/public/archives/2018/01/index.html","bc6350bb718f109bce76761728157934"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c756e22ef94aae25b9a287cfa00868ef"],["C:/lmislm.github.io/public/archives/2018/12/index.html","7851d6ab67f14c4bd9cb2fd2d6a7f053"],["C:/lmislm.github.io/public/archives/2018/index.html","0875f6016602982e8bb296b55140d9bf"],["C:/lmislm.github.io/public/archives/2019/01/index.html","400a7e3dd15478b9cdf255bba44b3b20"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","35d1b8c3578a86f77f584e4f5e1559b0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","7e3d9740c64aa8fcd3cc6098b56decc0"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","ce084e9074d97795a1010e4cddba1b10"],["C:/lmislm.github.io/public/archives/2019/02/index.html","c9ab876332276ca204743d02cdeb997a"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","a0b5c05d4d6be026079396de65897886"],["C:/lmislm.github.io/public/archives/2019/03/index.html","5354a3ca7fff24c7c1a9f9cab1956865"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","bde753c757e3057b309cbad8f1738e59"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","a0a0a4cfc5976712ae38e4c807ef57d0"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","aad02d0bfaadd65bb1f4a989dc70794c"],["C:/lmislm.github.io/public/archives/2019/04/index.html","7388fafa36ec491b0fa0c18938be3e5b"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","45fa0770ba081968b397f4b724b3bfc8"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","50605d691e063167b0bc9693da5fbe5e"],["C:/lmislm.github.io/public/archives/2019/05/index.html","e450a56c51323f7dd834ca474e773dd8"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","3d4f844929d4fa66c95bbb07020de9e5"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","df0b660bb3d957a3723ad08f8f3237f5"],["C:/lmislm.github.io/public/archives/2019/index.html","b913a2637facd2a154273b0687950b4d"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","a468820659ccb4209eac24f72226b945"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","56fe033d92e696a7d2aac0db7b188bc6"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","4dfa91ce94e27a319ecd37b15364ed17"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","a39c89d6199adf403cd4f1242f0f4640"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","2c6702e86bf35e1dd6f1f60af8bf1565"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","20964b315e2772533942bf3307fb9b8c"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0df11e1d7f33f80d871ced4d07ef438d"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0481174ab4ac0e240397e60b62b0f8eb"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","75e6bfce10dd88d4058fd8c725b0a606"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","38bf5ba186a5ae5d16e61cece7b15c82"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","0877c16ea93995b8aedc0e62a8769358"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","f99f3e36439712535eaae16b141ffe62"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","5aaca757beb6b730bf1b5618bcabba06"],["C:/lmislm.github.io/public/archives/index.html","bbd92426d7ba34fb30618a0057b2fd3e"],["C:/lmislm.github.io/public/archives/page/10/index.html","4a3f0b360e85dcb13a144b312825ff27"],["C:/lmislm.github.io/public/archives/page/11/index.html","29f5ccd96dce01a41932daebd3f71089"],["C:/lmislm.github.io/public/archives/page/12/index.html","8790413898e37c3e8a55e96ce9903517"],["C:/lmislm.github.io/public/archives/page/13/index.html","73d565958e282393f4b67bde2a324ad6"],["C:/lmislm.github.io/public/archives/page/14/index.html","92eb426d61a3d1773dc1740097184941"],["C:/lmislm.github.io/public/archives/page/15/index.html","78b752025ab63d6be9f8db7c34e5f7d5"],["C:/lmislm.github.io/public/archives/page/16/index.html","59c7d68858a6c56c86d438998a7ccce3"],["C:/lmislm.github.io/public/archives/page/2/index.html","0bb0089bf418aff0e5d78bc687c011de"],["C:/lmislm.github.io/public/archives/page/3/index.html","4ea4205cac5bbefb42872459d18a471b"],["C:/lmislm.github.io/public/archives/page/4/index.html","b7063a7cfd40401e0067ce2b49bfc7e1"],["C:/lmislm.github.io/public/archives/page/5/index.html","8df07ace3ce728d72aa71f0cdd573a20"],["C:/lmislm.github.io/public/archives/page/6/index.html","9f54a1f12054be59baf3f4b5c4d66797"],["C:/lmislm.github.io/public/archives/page/7/index.html","a6c9dec07c44ddc2128578fbd6b8d246"],["C:/lmislm.github.io/public/archives/page/8/index.html","2f5425f23b6cd15990f5acf2e880f868"],["C:/lmislm.github.io/public/archives/page/9/index.html","95d3690303b085bdf67608645a714114"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","2fce6e6e2830c97d04da554065157cbe"],["C:/lmislm.github.io/public/categories/index.html","fb631c1cf0354b99f5dadabac8870e1e"],["C:/lmislm.github.io/public/categories/xx/index.html","5af5ca9e90a66adb0d940ee9d0e81923"],["C:/lmislm.github.io/public/categories/学习/index.html","32b940cd593e70a00f574a208b6912c2"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","e82cacff793dd2ec10e02890f5c1dcfd"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","acaede7655de541618a517dab1349bb1"],["C:/lmislm.github.io/public/categories/工作/index.html","74be3a66db2185f44a23026de85aee6f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","eec09febe3eab18234bc7e3ea9fd967a"],["C:/lmislm.github.io/public/categories/技术/index.html","36e7b778c7c148e845c4c6232d0092bf"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c25d861eff36534f84b782248f5d21d0"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","51bae7d013a009831b84b32582fcc14a"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","28cd0c5f7cda067f3c9de67f007a2499"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","286c3362445d967ae88d6e13fabc58f2"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","98b7645646430005e21909395715e3f6"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","013dfa71a7a494261f1305fa6b1ede9c"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","e15d8ed21e923dd6f64bf870c5bdc804"],["C:/lmislm.github.io/public/categories/日常操作/index.html","71faad2c9a7cbdaf4130082e5a417bc7"],["C:/lmislm.github.io/public/categories/生活/index.html","45d022b2c59eb795e52fe3134a96f0cb"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","00cf8ee716cc658fb392779aa3e6e3e7"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","885c7fd95db414493bc4cc6d57ecc5fb"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b38c5137a6985a9010e0d4666a531cfb"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","475d701552a4ce3fdb045aefd272804b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","be4039a0aefc56053b7139b189506fa4"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","9796070bbd90e830f28733d2562f873d"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9b430a9d0872ad3f7415fa15f1fa9580"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","44c31c3bd1bcb3ede3713645fcf09ed3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","66336b60e85fa26227c84e5a9801f38d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","c5ce66b34fbcf72e90e7d657ffbde51d"],["C:/lmislm.github.io/public/page/11/index.html","679252da68d41c196f56b0b0b95ac04e"],["C:/lmislm.github.io/public/page/12/index.html","c5d63ebac4c4d442e95a9fb352e8ca7d"],["C:/lmislm.github.io/public/page/13/index.html","ab46f40a82fb55f756cfcd64426fa538"],["C:/lmislm.github.io/public/page/14/index.html","8a61ebc0ba069f7b8043d9a7d4790aa3"],["C:/lmislm.github.io/public/page/15/index.html","9076294e46171e76934bd40cc16722d6"],["C:/lmislm.github.io/public/page/16/index.html","942d047144d8dcb02e23d817730c9200"],["C:/lmislm.github.io/public/page/2/index.html","424ac339538883c51bbf444f1f2eb120"],["C:/lmislm.github.io/public/page/3/index.html","2137e2076d748d837fd05d08ec68b490"],["C:/lmislm.github.io/public/page/4/index.html","619e371238cd3463f8083536e41ff30a"],["C:/lmislm.github.io/public/page/5/index.html","f565e7936fc627019dfce7de3d0aaa73"],["C:/lmislm.github.io/public/page/6/index.html","8d48cadd4ef2e07506119b9a14103e90"],["C:/lmislm.github.io/public/page/7/index.html","7c6d5cc3a1dbdee59e9094c1f602112b"],["C:/lmislm.github.io/public/page/8/index.html","3e93d80c28c90ed09eba99f98be50982"],["C:/lmislm.github.io/public/page/9/index.html","fa8fa50379ea658648b1322694d3de73"],["C:/lmislm.github.io/public/tags/Interview/index.html","fce66bb89cf5bc7e4c69782f06cca7e4"],["C:/lmislm.github.io/public/tags/JS/index.html","5eb9b7f9288743e7b7ed282ba1833bcf"],["C:/lmislm.github.io/public/tags/acm/index.html","c11fdbd1811c418b203b2df0c3ea775a"],["C:/lmislm.github.io/public/tags/c/index.html","04c48227a9f50009ef1d5fce0fe650a8"],["C:/lmislm.github.io/public/tags/codewars/index.html","cb5f32919e8445c6645eba2a94c24188"],["C:/lmislm.github.io/public/tags/css/index.html","e3ca1530d0e4eaf3ffedb14fb3e6308b"],["C:/lmislm.github.io/public/tags/git/index.html","ce8d1bc60937213f243a626b1b8bda93"],["C:/lmislm.github.io/public/tags/hexo/index.html","2d71aed1d673d8de37e5ef68941d356b"],["C:/lmislm.github.io/public/tags/index.html","9bade1d782b3205d0d5cd4add0dc1155"],["C:/lmislm.github.io/public/tags/markdown/index.html","1fde48008ec49232db7ca2040f50d005"],["C:/lmislm.github.io/public/tags/poj/index.html","c2df4a84ab2ff2ff3f32d3c7325573a0"],["C:/lmislm.github.io/public/tags/shell/index.html","0ade29830d06cd7871c81b0521d4f799"],["C:/lmislm.github.io/public/tags/vue/index.html","03e84da232712c2e9560791af22088f6"],["C:/lmislm.github.io/public/tags/xx/index.html","acba1179dfbff73e0602339040f3e7a2"],["C:/lmislm.github.io/public/tags/前端/index.html","ffe6ee43e44156972e79ba7bffa39be5"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","34f062c25e792391c914319a577a62a2"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","631c562625285e030f17a915057a8e44"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","0d451f9d0bc257c359aee2d14ff697e3"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","d9eb8aba1b041e49d1daf9775b64553b"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","7e9e0a7eab6ed212f220babc0510146e"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","f1c9f1e01708aceb6fabb00113032d70"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","de383daa8c4ea91412df5af2330a1083"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f7e6da51fd0cd1a659e7046f0688ea90"],["C:/lmislm.github.io/public/tags/展示/index.html","2ad2f04301e86d79ec1cd40ce4bb1cff"],["C:/lmislm.github.io/public/tags/工具/index.html","1615fe30964caac11c10781e2bfd45b4"],["C:/lmislm.github.io/public/tags/感悟/index.html","13e5f552509d3308c12ce64f26b3c055"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","ec0eb47bfb5b4445929744b6b053bc6b"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","dbf0c64cd29faf14e589d98cd70e844f"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","796d6fe4e13262fc16dbed3bf173e25f"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","3736a526efa6c2f83acb9838c70c3212"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","b5924439d3c8560b0f85c97aef7b1aee"],["C:/lmislm.github.io/public/tags/练习/index.html","2c0b00a9785d87ebb3a571860ae682f5"],["C:/lmislm.github.io/public/tags/编程/index.html","ee4b37babebac2356278c53e3cc0b815"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e9979fe99f9d6f4186351649955aa5a3"],["C:/lmislm.github.io/public/tags/运维/index.html","84ef7b7dcca6d5674b5610e4d197b8fd"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







