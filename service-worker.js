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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","2c4a29c166d46d565a3c8d93723bb91f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c46f01dd0b41dd8d0090f3fccdd43c09"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","2d472ea7d03675aaa405a549b25563b0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e91f2b806f27f173c7750e5a5f0a6db0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","4fa37b5a2b066a2c394b9cda9b91793a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","00649d51ebfff28c6f0f3914eeb086a8"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","f42cae7f1d941bea55f76e507176e68a"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a5d44fbcd16d09004b08c2e4fe975b01"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","34e32f329d12f7dcace90b3e981dc52e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","aa978207be60281d778856d8ab4d1baf"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7026239fcd55f53969814e5c608a5f12"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","49e5e0f20bd353b8aeeeef2c24b977c6"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","45213214b5e5d0d299b69ca131aa7b44"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d8ebd2d2c8645e9c839ea2d142cf2922"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","04e28cf98f26613cfe3f9ccc637f7fbb"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","402a2b1675c2c586cfb65cdd369302bc"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ae1edc7d90af1ea2fcc99134630b74f2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bcd64c74e331d340c811eebd20dc1c99"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","55e42d38c2d2294c5f53683f5665b4ee"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d9a2b681ea3416217c16f1b75ba32a6a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","8485499b64f419eca1f74c3de95534e1"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8ec09dbe3d8237f5b8eac315c364ec94"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7c892e17d443610e28b1071dbc53ea82"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","487195e2ffc2551bb7b738a567c48f97"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a30c5bf30cfd5e3772eeaed40981b674"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","95d33a9f533e2f4c26e350cae887a016"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","21a75578449896281fd1d0ef4272cdb6"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","cc890e99307c2c1529883afce47fdc60"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5dc812f44f1a14b2d7809fe01786e17f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","132b1657f45d98a9bbdbb178cacf0fb8"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","2739852e0bfa656fe1f0ffe622ead72a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","143d7c55ca33288cab76a50b9a7ce55b"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","7ef42590be47877c722f335f34aa88e1"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","5a63e9fbec1e24ba7d533efc939a31a3"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0d4387c100ec1e1426859fdef299ffca"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fe6d48dd31712a1e5a99de893606b758"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","bf8b7d988c46465467e5554f5622dc3b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","dec02368ef188faa84d6a2bde55c353a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","a5ebe6172f8a33f8ac5986ea3202c181"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","250a7133605d165b7ade5ecd84605cb4"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","ee516b42e143863b004a107fa9ba5def"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","649f559dfae1d31cd76d6a3ec7388323"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b55e38447a58dead7fd27873a6d2fefa"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7d9d90fb34e5e5d7a779b74b76efa8b8"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","767f1d531932117336cf56bade2d7b6c"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5c2adbec1f32861fd0db8950bb36e116"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0e3f304d8da19087febf3c0897e2a598"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0a4d2f8d81f2363a9a18ab85e1fbbd6f"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e6aed6086fa1550a3f4eb3bd83d18da0"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","3510c983acf789a53500b1b7a240ccbc"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cf7d2b85fae8f37809c4594e1c6509ef"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b81b5dd455936fe07e08ef8abc83b219"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","ed50ff9d3a859428d770401281890983"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b143cf5acb1afee9bef45c6075c5f03b"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","1144bab1af488341fb89413f2a8174db"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","50bce80e5bc93a18761604806f47d734"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b4b75456842de9b515f9e3d75a43f307"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ca0d40036d134dc1f52c0f966de48675"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","b1bc3ff571afbbd83d7cab4c53b76049"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","115473aa49621203e1623c3b7d8cb8d3"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f84152e733e0706f7cb4f9726a8d619e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","fdc7fc2345296afd74fd1280d9fb2980"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","1758a213fff05a03d80d84ddd331d74b"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","53f9264fae9be6a494beb95c6d164182"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","9f0a2c8da8a89bf4f0c213b4b1ad4d5f"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","98c44d2d88c9b17bbd2397065acbdd1e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","e3aba3f3c3fc8cb9af4070057ee4d086"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e862d8a60a86c51b5de54d6e571b8e22"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a4653e0cf0c60d82dee796f83956fbe1"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","384e10575ae3d1047cd4a0f7ab975018"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","cc6f016f2b618cff88682db019b74006"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","d85e5b7a17bed63c0b4ecdd6244a473a"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","fcf701508f53cef480138651d3db5f5e"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","2950ff1146fc304fc92d83684ca73c99"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","9b7c048028e3be27294f08a8dc640b1e"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","a528b1eb20d05eb421f239f4ff3d21b7"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","fd49932b9cfaed599f7e436b9507eec8"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","5bcd2bcaf90765013939d4ac6e4cc9e4"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","60d47a380fc7294cc74de4d1654116ce"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","7409d422d70421975fad6d66d097bb02"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","3265ccf4dbd122d152e786d637cd5016"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5bede5a016c6d8ae1ed6f800cd442ddc"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","4cc1e7822cf8c11e6eed85fabba9defa"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","0bf4a1c9a3f6ad8bf386c03c4bee08b8"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","24bb27749836eab89eaea846e135253a"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","c7c7042b7879a803f360e5896ce0205a"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0a07d74d19469a76f3b2511e90eade51"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","d47b71a89e167687ad471370c29ade6c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","48991bd5cb3d6b4311d43a975f55ca21"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","7742529ffeab8007c603d99d0d81f144"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","bbb3e9459fdeffa92ff354a176efb76e"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","6c65d22410df2275bcfbc4371e27c94b"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","4bf05f124d4ce22549e6f9fb6e1f3960"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","476a9044d45c850cd92e980fbe439379"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","11419ee7371224aab3a90b76b9f28c27"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","f6462ac3ad97a717738bf2ff8551fd5f"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","fb1cb6d5b38bbfe2071519a7cf7d42a7"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","6347a6f32174d15f897270a2ef61f82d"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","89967a3296194f7092b1c9421cd2148a"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","d3ba8a1199f8c0a1212131e1b6f5921d"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","42f2061b9c57121f0fe6003d6686494c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","e7339bdb964334fa100fd54c229f4292"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","60e541d9e7c0095e6b0c056d8f3e27d0"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","e2612953fc05160d52b5754cb5849458"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","fd33af6add9d9ccc419db0ca4ed0ff4c"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","ed81983c97df3027e408fac3688a81e7"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","5ffa3b7a8c75c0ce80c9af864e701a3f"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","796bfeee686c957a3f1b5e53202460c5"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","dd3f075341e8dd69c608e7cfae46e116"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","4f7da8fd4efd997e82df9e35f71890f2"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","f74a7b710bb33e886b3df7adb7e525a3"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","2a908cde653d36efc137d2c8a8c5b29e"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","8e74ebb8adf51d8d6809939c40ac5ed6"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","9128391c5cf3fab164248e58a9f827c6"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","1334d73eb5da4b50cdd49fb484c62419"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","eaeb9c9cb75a3ec67dfaf50ed6b0face"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","786a8374cd2ab4d81410f51bbd92a5a7"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","6258160deb97d6fceaca186c985df9a9"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","6b7ee81a60971357989cf55e4775a2b1"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","7a3f696b44c94be4ff2f400919e648db"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","2ec33c2fa1bc1b92ad85a19db519f6cc"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","3b71f96cc10cac1685253980f57308eb"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","e548f0e3b70336a136c9400ac85f6145"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","eb70a12535fa663c763d381295b30a64"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","fcc197b7d070e655c9e30a7d5bcfb89f"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","c91841f0d21ac33381e4c87b20113e6e"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","466737b10ce748ded4b8053449084bf6"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","12a6a4142f44bc7fa064c4a04a0c2d02"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","31526aa3d601ea77d08b47c4de26d1df"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","ab13fa86c895355ad4c7c07672567caa"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d952d5e5ad1c6486af14d68eb618a176"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","008c307bbb9f327dd59b235dc51e7735"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","70a648304debc8c8cd623a6e527f8534"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","547ad2c5a76098f364448de099a6be05"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","eb91412e7d2dd2bd9c7ac71d314313e6"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","18092335ce878402027429da0653a135"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","cd528a591c4bac9f7c3492e08025cbae"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","05b67aacae930939d0c244fb62ff589b"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","bcf43599354055467ee32e1d97f94e03"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","2d25ef8de7d1e17144e1de6a5b090be3"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","ee155bed19f4022ac9460a2bcc6ad847"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","aaa26c2690e77262a18cd73754e4c8b4"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","29246e3d068653a1ec170e4f426f4fb3"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","4a1637c02ba4f735cfd4ec1e61325401"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","89fd44588e6d6a3e0dbacdfe99837f04"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","7f948f8873f47261800afbed028cb02e"],["C:/lmislm.github.io/public/about/index.html","a72562f8ebbfc10be666721ee4ee1304"],["C:/lmislm.github.io/public/archives/2016/01/index.html","cde28140ac1e0b96381c051e625c39d2"],["C:/lmislm.github.io/public/archives/2016/03/index.html","3fbe5c603b223677a7fdf3e2cec55b4a"],["C:/lmislm.github.io/public/archives/2016/index.html","ec13c0fcaeae2f3f1e36996be6228d9a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d3aaa879377d6f933afe26c83c33fc54"],["C:/lmislm.github.io/public/archives/2017/03/index.html","75e3a62d01e71f3829b6afbf855812f2"],["C:/lmislm.github.io/public/archives/2017/04/index.html","cf2b675f3c5708e98d4a4d3260934ea8"],["C:/lmislm.github.io/public/archives/2017/05/index.html","adef4096e0ef396eb6419c028f15efd0"],["C:/lmislm.github.io/public/archives/2017/07/index.html","fa3023b388f7285a21a3d853d1beabcf"],["C:/lmislm.github.io/public/archives/2017/index.html","45d03b95146149ede2b71316b04b4806"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","8c2ae88cb7300034dfc1e31dd1a100be"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e03b09ebe25aa70f3b29de80cb884348"],["C:/lmislm.github.io/public/archives/2018/03/index.html","137696114df0093de1cd47e38c9cccaf"],["C:/lmislm.github.io/public/archives/2018/12/index.html","423730684c659cabc89c0b1ecdc664ea"],["C:/lmislm.github.io/public/archives/2018/index.html","c772d0ebe09e36d2eafe705ffc06ce5f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e76982f3be58e60f47958bd351596eee"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","12037e368f193a298f429c7df3a63cc0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","ef7d41c2748999f930ee76eac0b0a27a"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","c304c15e5ca622b2d12e9d9e6e47d1c2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","42d4ee45d94b614033860a5a233c80d5"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","4559231abc45e3730e63564c58cc7128"],["C:/lmislm.github.io/public/archives/2019/03/index.html","79089de0c1c668c6869dd06f9976addc"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","b3c7925b7b8e71f759d74d942c82940e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","d354c78a8a2846f582b284da7b5e9b89"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","345df4438ef372684d1d7a1672c9105d"],["C:/lmislm.github.io/public/archives/2019/04/index.html","1e3214c84d10b4374729b7711f186bca"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","997accc6a405386b8bda53b17f09ec83"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","e8e5933c1705db0eed1c427f135961cd"],["C:/lmislm.github.io/public/archives/2019/05/index.html","599f58b84d1cad1649cf3bf4d0607e9c"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","b0f652c0ebd7d4b62672eb37973d5046"],["C:/lmislm.github.io/public/archives/2019/index.html","d12ebd236191710970f9a0a5fbf8d424"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","d0ed2e77d284e0576ed537f114bd9836"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","64eb0eb37ba770ab5c460f62431774a7"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","5ea339c49287c2e7e30985b08795f89b"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","a925a9e7adefafcef569e71d5e1c53c3"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","67f51c01504d38dd6a191471931d2ae1"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","a349447ab485bf941bdaf4f76d362c2f"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","a6f11a9ecc1566751776548522d7afe3"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5502cba9d5e7192876568d8a82e3f2ad"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","8104bd0663ebe3f34da79b4e633c9fac"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","3f3a2f10a61d19143f09d253724f24cf"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","7333db2c6a48aec3c804bf76f0d8b93c"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","834c35134c4d802f3f9bf86f50540a19"],["C:/lmislm.github.io/public/archives/index.html","2cc301da2fc163284a64980ae859ad34"],["C:/lmislm.github.io/public/archives/page/10/index.html","4cdb2d402a0d91c2a2ba4e8c04cbeb01"],["C:/lmislm.github.io/public/archives/page/11/index.html","cd6840aad6da4eb3383217235b18b9bc"],["C:/lmislm.github.io/public/archives/page/12/index.html","67d2121a6798779d21934bcb4bb6b2d4"],["C:/lmislm.github.io/public/archives/page/13/index.html","fbb1d4c2820f7d61f1adcdf783b4d9cc"],["C:/lmislm.github.io/public/archives/page/14/index.html","ed23d26a8551127c6c0db803af9cec82"],["C:/lmislm.github.io/public/archives/page/15/index.html","ee7ab63e5a159dc45b73874a17858e3d"],["C:/lmislm.github.io/public/archives/page/2/index.html","8d54b82d41291e057140fa114a872fff"],["C:/lmislm.github.io/public/archives/page/3/index.html","1b67eab18557702be2c8a5db4d1d3bf2"],["C:/lmislm.github.io/public/archives/page/4/index.html","6196f7e7e7219baa9efede77aa47a01c"],["C:/lmislm.github.io/public/archives/page/5/index.html","b6caca4d8954dd0e0f556dfd2d5c596e"],["C:/lmislm.github.io/public/archives/page/6/index.html","339f8c6312fa76ed1e88986753c56472"],["C:/lmislm.github.io/public/archives/page/7/index.html","bc5545de54c8c58b683a3854ddf653ab"],["C:/lmislm.github.io/public/archives/page/8/index.html","1f0d1112f0b60b5d519ae8be78f3eca2"],["C:/lmislm.github.io/public/archives/page/9/index.html","7a3d306b0680b3a0e833578fe68bfde3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b5f2deef316cedf6e0a8ea4e498b1867"],["C:/lmislm.github.io/public/categories/index.html","a635da8cb425fe4831861801483261e8"],["C:/lmislm.github.io/public/categories/xx/index.html","b697adcc295a6a15f769c7cca187c9c8"],["C:/lmislm.github.io/public/categories/学习/index.html","036a87f397a3d158bb2ad593c4a3579d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d671c08f916ae29d34ec12fb8668d412"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","98a4a3e242c33b0d35b6c0ab5b407eab"],["C:/lmislm.github.io/public/categories/工作/index.html","33ea57803b1697b473c0b88569de93fd"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b76e48b8a1ebb7189f55561773721fe9"],["C:/lmislm.github.io/public/categories/技术/index.html","feb0e810529c898132fa441450fd1299"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","58204d66df532176efa6851f7a506d44"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","714884ff301fd7caec2ba6b35691cf54"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","f7f78f40b2b1d2056618f5249951dccb"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","d371a73b3692f43719a095d21f2424a9"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","6b4248ac2d30e855353e9a624bbf07bd"],["C:/lmislm.github.io/public/categories/日常操作/index.html","e5bd45c40f64ef5c634df5c46b159500"],["C:/lmislm.github.io/public/categories/生活/index.html","2c52f5dcacc1c00b980c01ed8d7665dc"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","af4bbb7b942860eb054d25452c423750"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","17d252497d4dcefb9d54a93a7dacb356"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","107396ff8352209b2f0e3faedd09e417"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","8f55983472a2dd762fca48b684b1cef0"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","f799eb34c7da4c4824b651c346860fd8"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","99251b65453c5f9d3813b69ba9fdba28"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","c26f55ba832b07f44fc0c7c0f88f82d0"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","72f3d9e51b88313f8ca8b993e5d260c1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","892f6e9c158ed17048a5c2e0cc4ce744"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b5cdbb1cb4db6f86daf2d50e12748c5d"],["C:/lmislm.github.io/public/page/11/index.html","7b12007aa9de8bec2df8a8d674a13fc1"],["C:/lmislm.github.io/public/page/12/index.html","0bd3fe5e29d607e6fbe51bcecff1aac8"],["C:/lmislm.github.io/public/page/13/index.html","c94e0aa1c4f9295645395754d067bf4f"],["C:/lmislm.github.io/public/page/14/index.html","dde7b0c97ce6fa0aef0f0675a370e612"],["C:/lmislm.github.io/public/page/15/index.html","978263060b4bd3daf84065758fe72113"],["C:/lmislm.github.io/public/page/2/index.html","60b32604fd7a60cf0e4674867edd1330"],["C:/lmislm.github.io/public/page/3/index.html","42a8c1c5ba8ee9cdef0b374c63510222"],["C:/lmislm.github.io/public/page/4/index.html","d9e9ca3c94b3c65979b5f8a3b321d343"],["C:/lmislm.github.io/public/page/5/index.html","5391d25ac721226eb89a971511721c0b"],["C:/lmislm.github.io/public/page/6/index.html","8b7621bcc6bddfe7fc7a2a1337319aa3"],["C:/lmislm.github.io/public/page/7/index.html","bc6d210c2a3f74ae3d38d95d21ea9937"],["C:/lmislm.github.io/public/page/8/index.html","56dfd4f6c39f65350e767f5394a967ef"],["C:/lmislm.github.io/public/page/9/index.html","e5da194bfafc961991c6cd3f94b88854"],["C:/lmislm.github.io/public/tags/Interview/index.html","6cf9e4bca59a31d8343035f2acff049f"],["C:/lmislm.github.io/public/tags/JS/index.html","cdeb40502163a3ead4683fe5b0bfdcbd"],["C:/lmislm.github.io/public/tags/acm/index.html","ad08e4b77b35c4692d52dbb9ca73c115"],["C:/lmislm.github.io/public/tags/c/index.html","ade7af2879b7f2315d165eb4df4cbb43"],["C:/lmislm.github.io/public/tags/codewars/index.html","e880e5f2233cbe1835d7071896600fe0"],["C:/lmislm.github.io/public/tags/css/index.html","799fe84f147290040ee53c2159f518a3"],["C:/lmislm.github.io/public/tags/git/index.html","0570db4d7a27f80823eaf01647628d8d"],["C:/lmislm.github.io/public/tags/hexo/index.html","7946e82cdb84f3227781401e0cc48d1b"],["C:/lmislm.github.io/public/tags/index.html","1ba06b6f45ea2951ca3631802f7e92bb"],["C:/lmislm.github.io/public/tags/markdown/index.html","49573a152f727d69f103580db1e2d984"],["C:/lmislm.github.io/public/tags/poj/index.html","0f7ca00d1e047b7f141f88e54545f408"],["C:/lmislm.github.io/public/tags/shell/index.html","7a0c6f0d180be24364823876625b00db"],["C:/lmislm.github.io/public/tags/vue/index.html","0eea86509d6b62d031bbbed228ee4bd5"],["C:/lmislm.github.io/public/tags/xx/index.html","0513e8df615d2c654469f9a9e71fbebd"],["C:/lmislm.github.io/public/tags/前端/index.html","e6b06161185373e643cc40c5e79a7e7d"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e2798b3a2bafbe4806ee53fd3b31579f"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","fc3a6f4f7de63a5e6c80a0fc47352c69"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","64522afadd9f7744947167a568f220b6"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","d6b11a4ba58c7104114a1b9bab8d4b35"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","d14da5853ded489eca60c7a3eab793d1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","4d2a06cbcad32603eb1196f2ed4220d0"],["C:/lmislm.github.io/public/tags/展示/index.html","c253d9c9d13681df1c559df5fc2acedc"],["C:/lmislm.github.io/public/tags/工具/index.html","ae48aaeef3a8fcf6d63262440779bb08"],["C:/lmislm.github.io/public/tags/感悟/index.html","669714487ff347450574571b59c96ef1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","bb56eb858620d0ff942329186987fb4e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","c1ae116a29c3a94d7f4fee9865bfed57"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","619ce7c46e5928156ce69a33c371dd83"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","32ca780539e4ec54902c7f1aeb14b273"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","e8dbc2fcc9d1508225ed98215ba323c3"],["C:/lmislm.github.io/public/tags/练习/index.html","3a366ad05bb44427a4f8fac06474f06b"],["C:/lmislm.github.io/public/tags/编程/index.html","6165a1853e0317dcd0b7a62c1c164b7f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","6e76e49c1975c515fea7a23835238913"],["C:/lmislm.github.io/public/tags/运维/index.html","33cdf09434dfad0f8036c3c1bb64016b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







