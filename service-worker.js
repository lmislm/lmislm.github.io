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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","402190c6ef0835f21cacac0704800918"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","8e3327627cc41a1f19b3720500315132"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","dd48ec7b055eff5466e284bd03bdcd5b"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ce060a0768c063f1db6a8070c3e1591a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","e5bdd20231c8184cce6b32bc1ead5866"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b73be1be5f3d8c86c0c4399c26d1ff13"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","f84c456bf1e8424d5f0555b5a7d0d454"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","21b04a196137d09b98c3458cea1a02da"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b96b9b6135b7c7e3c60f04dd9a891eba"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","8e46e13d6276d22bb2cc33790ef39310"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","92df9178ee002d991aaaa006fbc219d0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a28e14a7ddce958fb0a3028a82b71bff"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","81e21aaec51279d5232c0e809bf212f1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9aba0c322f8db4e017944bee240ed53c"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6db3d0cf60dbf734609b280767ddfccf"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","12e86e624a93f5beafc9827ae44b28a3"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d580c98016a72645f6c8d49ff0e8b35c"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","554033d061477dd879f61afcd0900eb5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4526992d9b7c346099b7f3dc823068c9"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","147d0197892e92a558efadbc2b7c3c74"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","6046b13ebcc08503330255bee991f350"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6c04e364c746fe9130e0512955879881"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b12a782ae8d28b8e4a635b5f5264bb5c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","5124b06676050368a93bc388a5751d7d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","f8cc6896a1a2df68baa6eb144250ee85"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f0f0bf2c0f510e4300ed2963a373b044"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","b2dab16c8b49313b555f929bfccca423"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","812c7239272ed333bcc59c3d9ae66474"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","da39a61d05701fc45ff8a1f3f7506ce9"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bd8122432af644d6fb18fcf059da356a"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","077cb2a8f3dcb9999f741c407a803c65"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","020ad7b780300df9efdfde365dbe2902"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","24ddc0bee14e49d2723b047000e45757"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","4c8c267c10d1616e79bee404990cf3bf"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","708f943774ea3db3b08136bbf56c7a54"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","abf126c505ae6ad71fff74bad2df5b81"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","da39f1191493ce5564c4c5911db524ef"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","71a292962682e66524811e62889ef107"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b61c44e9dcfc66a91a1ac9b32c36444c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","918765b7512ebd79924697bd8f11022d"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3d4bb875d5bde6ac456b6754e3f4ec28"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","f79ef0e49e84eaed7fe76d001b2c8502"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","4bd57d1b882098ff7b83e5585887cd89"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","bb05882f6b840349e0b8e8de7bc3803d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c7e3b1b8c9816cb3645e666101f89165"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","935da710c80dc52c9fb6387fbc316274"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","80325cecb7d801b6466e5f924df57f69"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","e1c2525182c7bff72c1015e4368f78ac"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","3c108941a1571e6e524e292d41c080ca"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","cbc5b2236140194869048e3535cdca81"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","5f759dc59182d1a01c4f8b70c9f73927"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","e19021387dabae9b82d06767044ccf2d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9613e5da53db4ef37afb7fef9093276f"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b07626e33784dfa311d23feb798af8b3"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","2061a9c4d2a10ced14ad9ba18d16c1a6"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4e6e5298fb95bdef1c2cf825712fa968"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","248e09012ce68f89a7686cc544ccba62"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","399e03d6347f02f5b47cac243ef5753b"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","83d86b7687cfd5166ca00d54d736f34c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","731a237fcd6ec48afd44aad4ebb75388"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7da0c527d68ecd15a780f4e850033d91"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","fed4bbac5541101732dd03e5197a5121"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6831dd6a0925c5bdc580ec34c8983cef"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e9fb48ae17949329d7e11cb36929b031"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","941b4a0930f9a6e07036361d1dc8f46a"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","5f73eaff9e20d8f4c09d53ccd0c6ae3f"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","e4ed6894d10340862e33690c97544403"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","fb3c8982ae89dee070682eb0101dacfc"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a3b090af3a85aa8b8ba0036f3c89149b"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","d7caae3df10335c46a869d623556c6b4"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","fa229d238ceee640578fb718ecf4b23f"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","cba5f6b9c89d423bb589e3e6be01e536"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","d4e707e2a7e8e14c93e309ddac82303f"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e3c8ade5d96dfd9ed6677b265152e532"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","8260fdd9a9c6cedc10b47b7171ce33a9"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c89c584904b47ea9bfb757302ac20a9a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","acb414f4451736c1a03a1500bc5aa0eb"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","ec0a0dc167c0f5e5ccdb51cc6718aa55"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","20368f2997b0248fa28c11669a6a6764"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","83a123534c25abdc752da65d1bc69da8"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","cb9221cc696fcf8fbdb3202d4c3be452"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5b3c661b996062345e4de28a363a0849"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c0df9dd58458d3344d6726dd60674f84"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","481554f26ef9125c5a4ae08390a95ef4"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f9634ee46df48154e55e236d212e7159"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","85579365acafaa316382e7d7cf267306"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","39a67378c22dc9197e778e60e00850e4"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","0382351d25509f41fd12029ccc57cb33"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","8bbe988b768dfc1acc3b337a8e904f70"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","5b8bbcb0d28a7afe252d0a9be2c17a4b"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","7959978d05af44571b939b110a799a50"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","3d6d5aa34b4a59a68816ace52ba5c31d"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","387ace1ef4f6a4da4e55f3738b962d80"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","ae53c12a8145f90eecaae9880bc11649"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","dc31a4714b28b7b84ad218dba6d3d8b9"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","752f8d02a941450095674c5568776e4a"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","e8eb894df50be531be868a7149cb8f8a"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","1e1e1ca70e315d90989fe96ba1e7f1e2"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","511e493d66906cebd9e22ae7d1fbb963"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","ce1ee6515c47f47c22467407aa38c4bf"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","d9d88b189429cc9f783faa82223c9e94"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","0c627564040252dad66873a3bdeeb975"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","2e5217979812d1c88b30573151cb8086"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","88bc3322436c69ee48576351f319cce6"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","839fdce43fb4dcd50addcd3964ce7fa2"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","a86e77998a1730575a7e51f633693d64"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","2c33b64de9e9127255a86026d73b923b"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","d57512fe82b65479502e4c83b9da88ef"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","1fb779bc462a8fd169922704e50d1091"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","6acbb55488c533551df9195257a3b323"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","04badfd9d84448fa8daa1d824964c891"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","f5f02e57f14875a802e4a991078b4a93"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","387ed4759e1ed615e9b725fef914911a"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","444c3bf16fd8c382ed779d84fc54e4e8"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","3149928a4410e5636ae4562f114b4a16"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","9acded7d32384ddd89a782f583b556e0"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","c48aac9b1e3fc66e95a77c73642b880e"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","edcfd9b38d4f1b65db4fce9c60dd5a1d"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","3bf9b8f34014155ba6f303d959e578c7"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","164d3ef572f6ed0d1b13b06a8a9c47ab"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","2f6e87583cebb89703cb3d4893358844"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","fbe4ddfdc2d9c8fbf4889d44143af2e5"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","6088f2be5c0ae837a0fa3ef0debc51dd"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","c052f99810f4e0dbe2b6717d6d102394"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","bcba742071150a5516ab33700a6f954c"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","efdc9257684203a83cd2465b5663642f"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","0c6642d33b2e3e845e7cc4881690a436"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","f309bf5a0fe8d7cd25a3cec38f1ad218"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","f0889cf59102f81291b2f53479be4d99"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","2d30263a42a0d2bb05b8fb587ab39597"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","966366cbf73d0e02af1aecad19950ad2"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","1b463fbba191d1f9db08e69d5d36e7ed"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","e7e2738056ef6f7da50a638970d49b81"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","0d944a22ce7454dd3fb361c97298a63c"],["C:/lmislm.github.io/public/about/index.html","e53b0c3a905cc7af813047e02d03c5e7"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ef87917e862242e8ae033f65df7fac5e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8e003de0531897fb4d393fb2a3c72019"],["C:/lmislm.github.io/public/archives/2016/index.html","a66b3b6e86247ebaa10fe909037125a9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","cfac9058bb9e1b91c1f61046b3d7565a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","137bef8880c8447542002c55f155cf00"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c510b44d0c4af6e3382db56c2634d87d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","35463d5022c8ad501b8365aefcdabd01"],["C:/lmislm.github.io/public/archives/2017/07/index.html","33be3f59f9c6fe9c49d659a7c310d701"],["C:/lmislm.github.io/public/archives/2017/index.html","938f36612803f952eb401ed806d6853e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","313bf0b6a7bf54fddac0152447e2dd58"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3646e4d476496f48595f20fb355727bc"],["C:/lmislm.github.io/public/archives/2018/03/index.html","203608db6efcd64fc5bad22083e6aef1"],["C:/lmislm.github.io/public/archives/2018/12/index.html","13d777e35c79453268c8f28a9ea4d975"],["C:/lmislm.github.io/public/archives/2018/index.html","7e260cc09237f0ec759dd4e9b0863a35"],["C:/lmislm.github.io/public/archives/2019/01/index.html","154148144ff53da29cbcbadd695ce18a"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","756d2265889c355b3c6e00df63423ca6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","11f73c08ef84dacf13355be31a3c2d73"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","7cc644baac76250059b8236484dd4f5a"],["C:/lmislm.github.io/public/archives/2019/02/index.html","9e078cbddaedffa4a4c5da39004b804e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","47e7a5641e484489795d9bde294c8e89"],["C:/lmislm.github.io/public/archives/2019/03/index.html","eda6ec9afcc82b45d690a7201846a97c"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","4df5c7bd8639ebd3b9440b7ca243c201"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","12a88e8a867b201a35f1547322b2e0a6"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","2f82f48d8a8d5dda8d555166ce4ab212"],["C:/lmislm.github.io/public/archives/2019/04/index.html","842782544540fe997ad8aa70c5f784a3"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","62fee68cb79e5ab8a5c72414da987acc"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","88d53e67e23a3da1a4bb3a1d51ba9f46"],["C:/lmislm.github.io/public/archives/2019/index.html","1619c80b8742353d51d15ff9deefaf55"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","47698bbbfff76ef6c865a9efdf121790"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","6df06c24a51d2cb8aa8ca3d15ba31e64"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","110f69cab47dd08838daadd0c44b3513"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","95325dac34ae0063abffa4e2723a21fe"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","34540ae767310db41ade019c1d872e02"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","361d13fe7fd0caaf33bb4a0e70564c71"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","667059491a427837375fc3bc42368759"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7e0ecf82a282229a9e4e26a64f30b2b2"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d486a9df0cd4bcc7e153c4812c1cef9a"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","715ab384800ffa4d2efaa670ababf9fd"],["C:/lmislm.github.io/public/archives/index.html","13e748b1d0327db6964c46e7b1f9ba84"],["C:/lmislm.github.io/public/archives/page/10/index.html","23ca8447a00cae8f1213832f35060bc1"],["C:/lmislm.github.io/public/archives/page/11/index.html","8484c8a37ce7e1413a2d655334f609d9"],["C:/lmislm.github.io/public/archives/page/12/index.html","eb873d3aa1c7ea0be397c01afd887461"],["C:/lmislm.github.io/public/archives/page/13/index.html","33776a341a4c02d5bf3659894a71855a"],["C:/lmislm.github.io/public/archives/page/14/index.html","fae6abaef7c8ff38f1789d01a42e87c6"],["C:/lmislm.github.io/public/archives/page/2/index.html","bba458f40d66ed03408e42aa663453ed"],["C:/lmislm.github.io/public/archives/page/3/index.html","83a9080f2712427e28b37842230f2165"],["C:/lmislm.github.io/public/archives/page/4/index.html","473bce5bd295c44ea6cb139831ebdce6"],["C:/lmislm.github.io/public/archives/page/5/index.html","4f3af9c377c7b19abb66e56c7f00fe1c"],["C:/lmislm.github.io/public/archives/page/6/index.html","e1053f4526a6ba4ded17fa488e381909"],["C:/lmislm.github.io/public/archives/page/7/index.html","6772287b30122c96daa87298c55723ac"],["C:/lmislm.github.io/public/archives/page/8/index.html","8130eddd1e38c49138546fd79f72bd86"],["C:/lmislm.github.io/public/archives/page/9/index.html","8646385839c32475eb8e940a74b4cd63"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","bc836cd462487969353a15fbbdeff833"],["C:/lmislm.github.io/public/categories/index.html","a4f8f7f125b46d540b18013e3e971203"],["C:/lmislm.github.io/public/categories/xx/index.html","8362dfd3d51d6764f0c914267b8a6681"],["C:/lmislm.github.io/public/categories/学习/index.html","1d34886ec166c5f22cd910a3e53bb314"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","88cf05cd1302d6a3f65245ed6cbf5243"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c7b1807d2ede84f69b962fe454065363"],["C:/lmislm.github.io/public/categories/工作/index.html","5d6b3d94a001f92fd6395f5ebd9b91c4"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","6d5d5b1e0976464c1263ec60992c8f65"],["C:/lmislm.github.io/public/categories/技术/index.html","0b9c96346c2ce74f0d43e7a8cc585437"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","740904d80c16e1b879225e5af9ddd20c"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","c032ae978a8fd46b7b518480cb2ddf8c"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","3c57aa70a5722c303f58ac861378d2ea"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","7b14521bde068076e597af607856463f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","562c5b30942d281c2d8b361405fc1b53"],["C:/lmislm.github.io/public/categories/生活/index.html","cf5af36b2d644363956517daa19fd83d"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1d1c5116fecd1b30a06697bbfb8facdc"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0f0536c89161b78a5f8644ae28df336c"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","4aa525d62d7e45bb34ca20e684cb166c"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","9fb0bb5e3bff1b56f9ad041aec0d30a9"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","47eb0a4787fae739f7141487f8358f26"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","d9e8fa45409885194b94f88959bcd598"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","57827a7aee350bfb0ebc7dace84d9d3b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","12080bda19afa3099779064843a65175"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","fcd308855bfb3265453a982732cb201f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b1dfd147df2ae963a1f66976db25db47"],["C:/lmislm.github.io/public/page/11/index.html","ed6c731d8e3f0a5250b0825123f92797"],["C:/lmislm.github.io/public/page/12/index.html","65247cacd617f44c690a48db1dadce75"],["C:/lmislm.github.io/public/page/13/index.html","6846abb0f8e70459ec4da8e9ae20f087"],["C:/lmislm.github.io/public/page/14/index.html","2a0ca13f5e165eb9428acc380c97aa21"],["C:/lmislm.github.io/public/page/2/index.html","ead9f8f76fd140b294437c0cf24ffd15"],["C:/lmislm.github.io/public/page/3/index.html","92675964230f57cb7bfb06a7a6303b43"],["C:/lmislm.github.io/public/page/4/index.html","15e6f9d831b8a15460347522778b6f65"],["C:/lmislm.github.io/public/page/5/index.html","e508d45bf0c38c884ba2c2167e6775e2"],["C:/lmislm.github.io/public/page/6/index.html","84379389c76f8925ace42b1cf501fd9d"],["C:/lmislm.github.io/public/page/7/index.html","0acbf33f23a3c47e9454e50fc2350209"],["C:/lmislm.github.io/public/page/8/index.html","e7fb4e0fd28e68cfc9e7efacd14ecb92"],["C:/lmislm.github.io/public/page/9/index.html","c9e7762e61858d5e1f7392cdb2d408c7"],["C:/lmislm.github.io/public/tags/Interview/index.html","84f896a1ea6f744e9eea2ea3413e5096"],["C:/lmislm.github.io/public/tags/JS/index.html","cbbeef760b60da5ffd939e115c9d2336"],["C:/lmislm.github.io/public/tags/acm/index.html","8bf69214fb804b309d937e2a332d3f75"],["C:/lmislm.github.io/public/tags/c/index.html","a324baea76cedc98fb13e343ae7d7f45"],["C:/lmislm.github.io/public/tags/codewars/index.html","30501716a0fc472fc9ac4e45556f4eeb"],["C:/lmislm.github.io/public/tags/css/index.html","3dc8b8f6290131be96a7e351f304500f"],["C:/lmislm.github.io/public/tags/git/index.html","a2d241a7020a690834fc8e71cb7b12dd"],["C:/lmislm.github.io/public/tags/hexo/index.html","555091d21e0a62b9f45bc2859af6319a"],["C:/lmislm.github.io/public/tags/index.html","8e55956ac6517a304971b8c068056cfc"],["C:/lmislm.github.io/public/tags/markdown/index.html","872e90396eee0b804ce6d6f76ca5a0f8"],["C:/lmislm.github.io/public/tags/poj/index.html","b80460c02cf9a689654ddddde6aabc8b"],["C:/lmislm.github.io/public/tags/shell/index.html","77467631ec0e80c8758a89a826805bbc"],["C:/lmislm.github.io/public/tags/vue/index.html","a9ef325f1393cddc2576132b82d7618a"],["C:/lmislm.github.io/public/tags/xx/index.html","d18ea7d778c87e85248f050fbd8e0adb"],["C:/lmislm.github.io/public/tags/前端/index.html","99ef6fd6869ba9e05cff93ac902b8423"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","50616711ca0a50fc5bd7de8649210f62"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","19794d96db2b7052bbbb31143698cdfa"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","39ea4c500b16e979afbd5cb0672dc4e0"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","c72e2e91be7655b6c3b8f7baf21a5b3b"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0667dc652926d415bc8331dea10d83af"],["C:/lmislm.github.io/public/tags/展示/index.html","ed92481bb5be06b6b4eca8ba02a949f4"],["C:/lmislm.github.io/public/tags/工具/index.html","eef6fd9089048061fb1ff8108ace1ea7"],["C:/lmislm.github.io/public/tags/感悟/index.html","1cc6a110936b98f3dff1d555d5803ae1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1d31c450d3387fc11421d5c57305ba06"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","2af099978909656ec421db5debca18ef"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","076ff0ab7be9b6ebf21a09f040c93f7b"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","4c2d81bbae262dd80180b969eda591e8"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","4d563caf6d392272c6e04b684d12565a"],["C:/lmislm.github.io/public/tags/练习/index.html","90b3835f47a91e28d5cd4794bc3e8cc1"],["C:/lmislm.github.io/public/tags/编程/index.html","0ff80cdadf0f1a6b1c238e4e2af855ef"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","f1a9986517c3683f424ca38133727ceb"],["C:/lmislm.github.io/public/tags/运维/index.html","915cf566cbccae30c61a881ec25822c5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







