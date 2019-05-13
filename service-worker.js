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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7f9d3d8813cf385c76dfa412c3e17471"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","b11cec0130a6025f6ff58c91ac4b4f6f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","624053edf4012fe34f12110a214324cd"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e8169fadc3729a725c5d72314efa4d9f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ab4caacf7482443716662514cd8a1fba"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","69a7211c726f2d28122d53beda680d9d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","32546e0971839e6dc7a1d451a0a29831"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","63249eaa6f998933f883d12fa5505193"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","adc8c7f9a92e42409e14bda36c403b59"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9317a6fd3148a5b1a47830c9fc0813e7"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7019c5c8fbd555fadcd108dacc35d4fd"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","27225194f96c029c32752aed3a3569d2"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","75a29bfedde695ed28c8e10e83ec53cf"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","12b213b5b6c92dd058b7d38d85596886"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","7f70b1ad5aeabb0ab1c5c1a67c207df7"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","70dc5dd560756fd0449dea66b8823e4e"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d011b9ca9548a5962b59788602385163"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","858f64244bc4e847a6dfd484764ada07"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6b1a9c10717b404610061d25bf9eaed4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","3cfe9cd5fac9d522afef317ce552909d"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c14463fd1665b4b5408371d4fea1dc89"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","887a7b5f19321bc976c09ff13dd75a90"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","409d5ff056b67c29f2451d2c859668eb"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","50c9408d98be2d908f30d028b9124a3f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","92972d6815a51d2b625cf4ffb9e015f0"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","4c6454f45a5fdafaa5557947b7b499e2"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f97ce66d1abb3dee38a49d1224b6addd"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d7980dd0d771c4d7ea88ea270e6acdac"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5bc766b79c767627142493ed83f82ccb"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","fca36147ee78ce76589490596583ea74"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5714afe17fa199845680b7e56850b044"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","3e694a6be0a0f3ac0af0645fbfae3046"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f50f8892c5d443fad566ab76c6211454"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a2b2bb56ca8fa6985f26f12eb5ba69db"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","b6cbb5a5512e6245ed6b28aeb26e7544"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","42e32ae8d94822c3bb14b1851d9ee23b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c3b733f2e883a8aa84308a2fde2dce3d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","b48b3ff17f26652239bf9bb99e830e9d"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b2086f588b9c53c9a50d122dafb66191"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","e35f7562324ae505309ecfbc8dde206a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0eeb8c74516bbc2fd1f843e755c0e522"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","d7773710d30a257a9ea3a2c796e28be3"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","40300f4ec6c19d43033d3e9b56215a83"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","ebc987d67419dffeb4858409d9dc53d9"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fa6853deb47ea7ea8d08692830bfb94d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","0e21e8a8f26f498320f3a82ae61a96b8"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","936bf7134974e0e992b9753f8b7d7b03"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f1fe352121a0ee86659dc20aa3bd3b1c"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","93a8bfb44f12e4522c4cd4198f584140"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","2a84baad8d5e43531d328548095f6d94"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","eca482bfd70e83f355ab0c28dd5ef1e8"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","96f9c2fb1c69293064ca2d8c2588f032"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","96dd17fd34099addf3a05b16a6be8b88"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","fe0f742af71d326183c1682d3031fe76"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","78446fdf5874fe5d148844749e9b5c59"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","b66d3c6b4580d1cc5a9829b3d71d1feb"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","97589f6a19dafacf34b9cd088a3a39cb"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","db296b115ffa16c763d5aed3236fe691"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","b5ac57a14f4df16763336c9420fd4391"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2d86b41a9c3da5215e320ae7a2656c1f"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","cf40748091c8edc4f38d228e20045595"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","1d5df1fae165f4f0577b760acbfa5d93"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","3b839bfcfb7cbb4b915290f2bd27118b"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","670fac41af5a091a153fdb1737ff7e30"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","886dac05abb737114908bc60435cd9ec"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","267ddc2b548cebe58b3d6290217eff05"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","de52187f2fa3139d00db90ae9c1f0bc9"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e483aaae4bc560769aa28d8913c39516"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","fba17717f3c1f0e078174b70d535c19d"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1fde1e50af615354b41893a874f72454"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","d5c985511cfd38c4cc5332630a5ae472"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","bd2a1603b7335d78f68c5ede70c0fca9"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","627526e9e5cac9e1ba72fb1fbecc00d2"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e541535bd3dc9ec58f25ef18090b5a24"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","38a831e1f561c46cf2e5482ac3c968fb"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","fcdacda7711f1a6743319ee5c42c7387"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","124f164d1b334874d9c7e5b6772f346a"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","0c72d95472d28a4445ad545795248c08"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","37aa1cb268ad3ea384fd5efb9ea227d0"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","7407e0f98943e4e0234c1f1c23aeddbd"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","53b13e999866d528e5f65d652ee46243"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","55d56757ea886b16857609ff6e91c3ee"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","360bc130c63d1d400b64d4e8fc8ccf1a"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","76215944b8da11fae29e066a424e641f"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","1297e49c630ece44a19bdab6b7f297ae"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","175b4f37c25fab11f11ba732ddc5c656"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","6b03aee029e89c03c06e81cb26f69046"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","5f6687a0473fe2dc7e3f01988766415d"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","81c0bbed57d08600e7c87edca258f994"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","2218a5985092c3d78a7ca3d01deb3772"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","b52dee7ff8276ee5ab7ae452592b3d22"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","93afc9d7e0bff170444a0b220141b90a"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","d0a7b764ee7488220e3443c273069a01"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","664478b3deb8e21d83924dfe029e9e78"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ae81b8e162e354acbe7f01aacd761c32"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","28f4d51f35d674be1fae2039aa00b673"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","c87c58cb4cc65e9816891b0f7807820f"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","47c2ecede4181a993c3ada76cc158457"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","764ff547e036b6628a825640864dcfb6"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","29bd78612236e5aa6ebdae9fc6ba4c6c"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","a2f7b6b76724f5e755fe8e17e981ff8b"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","d32111ae2098aa1402133d6367d85af6"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","53764548ba3b9d2db65764f162c2708b"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","e61724217968f0d0c2e1d48a38641721"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d9e0efe1a1d4dfd53f3db1564eeb8967"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","8dc692e314c54b979dbca542e690bcbd"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","8c9a1ae915a1f782c1e3ed7e98cfdb12"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","3641b22cde49d0fcd79b8b17f9f30dfa"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","121210c09c1eb2d88e44bc922e743dad"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","1d4c643d6eb6e4673ae2b01269ae3b47"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","1656d584f60e3346060c44b2c71f4a4e"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","6f8f5097025030b65320653201a658a2"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","9c5d1ef88bbf879b9a1166f746043def"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","1d032a63b0d12aacaa111d41ca319d0a"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","cf9ab4b9a81f29c1b2b07638784f3f63"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","9f108ca422d038ca4800009461f5a143"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e361feb369e52f93c76da1388e7b694f"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","06fbe3acc25011e0a3783fde25c35534"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","43012ea5de4a78171252790d2c5c6cd4"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","586a126a12b7d6b1c3a00ce228eb70f9"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","76cfebc51abf15a06e1a6d5b51ff63d9"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","90a6e9410caec9c5343d1dcc42223cfc"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","c2e56f36057cf79574b98bfb6699f6b7"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","8810293ae4e2a9e1b9ecb03aa9a19e7d"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","bf4bd7edab9cc5898e43a1f3f142b808"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","859b9ab7075f4922730752b6276241a5"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","d9d61c10b24ea5fe42c1b9d0f37cb0a8"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","ef6ec09a0550114568ea1aa604e94307"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","69033258147f513aed06173c2afd5df5"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","d229e6411b3a464310e176733beacc42"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","4cfcbecac0055a1e6a028d5600818e47"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","48858eb89f41c1faa7e0f8d5285d4f5e"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","66c5ef729390e6eae1ab89a54188c5ab"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","cbca8eb79e847ba11b4b17624cae2b40"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","6da69ed9aace555f511dbf93c2c561e7"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","bef3c661a4c5bc3c8c329eae1fb6e4d6"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","0b57f3c5b3eb42c3df81e5e3e0338a72"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","b8dd240dda4854883d5df64aa0b3ea54"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","c7f573480a80c8f2ef957402de2806d2"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","4dfc958e84758d3e94239eba6fb80df1"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","5c2370b1a99491c40a3e801a1cb71cdb"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","c25a3399b72936b693330e84ae6f46bb"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","3fe60d207bde71e836d8930575fa3e55"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","fba8cf8e2236248f5745dbf92039dc61"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","90938e4b775ac0745ad3b7ece4924adb"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","d03506b023cba09211b21b5cace25a0a"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","8996680829c5e25727c91a85d974853b"],["C:/lmislm.github.io/public/about/index.html","94a5d66dafe5d309a446946b949cdee9"],["C:/lmislm.github.io/public/archives/2016/01/index.html","2663edbca2bbad9781624966aa5df122"],["C:/lmislm.github.io/public/archives/2016/03/index.html","9bf31805e19122f3c9f5fdeb2da186cf"],["C:/lmislm.github.io/public/archives/2016/index.html","d30ea72c7098539557727eea656c60a3"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4b15322e60811fcb082b904001fff221"],["C:/lmislm.github.io/public/archives/2017/03/index.html","27870160fa027d2fd626c34a643efe94"],["C:/lmislm.github.io/public/archives/2017/04/index.html","8251123b082f2b268c4732d92583fddf"],["C:/lmislm.github.io/public/archives/2017/05/index.html","be1b5498a4b6c62f3b70e6aab2a74fcc"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a3abb3d3c1549d63bd59f262230d67b4"],["C:/lmislm.github.io/public/archives/2017/index.html","f3bb47eedcf02b68289870de8fb92316"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ae2fe76dfa6cc9ff11c3d9d1b282d66a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","aaa14588ec8ccd646ee5cecef6278c0b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","48d45d89a4192d89cae1ca15b6ae4422"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9fb9de35e07b0b4cde431001b3b679ed"],["C:/lmislm.github.io/public/archives/2018/index.html","b65606226e221bdc82fa311e7a28ce2a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b76651668237fcdb10e3e7d69f011642"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7cc2b09f0dd56958e7b5f3db37464cd7"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","85e1fcf65cb0ead49aff234484a1f8d9"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","ccc65117b1b0fd7b93d1b1f60416fe95"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d78565eefbe22e5d7df95d71e6e30eac"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","3104db9462fd7818445328f65df366db"],["C:/lmislm.github.io/public/archives/2019/03/index.html","66e78b5d216438b874e85e8f0a5b70a0"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","376f4c5542071541d20c284420faa578"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","4f3bc6bda8cc5671c1127dffc644007c"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","4ae4b5365f9b48ead0db04563593c5c4"],["C:/lmislm.github.io/public/archives/2019/04/index.html","1e9bc619c2dfdddb4adb7dad57e57b4e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","5cf3e89128dcd331e92d38ea74d08dd6"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","a1a0c77d63f2062d21b3652271ec88a1"],["C:/lmislm.github.io/public/archives/2019/05/index.html","9ae983fbb1c4cbcc83a63789e4236341"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","391cad80561269536169744313a23299"],["C:/lmislm.github.io/public/archives/2019/index.html","69ae77b6cbbf692dac276d5dfcf6b3c4"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","cc88b5a107e8d91e674b119f67b5b384"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","94e442dc1dd1059c87d90f008751e519"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","84bc4adf7a62bdf5bb39bd4f7c4d5cdb"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","2d20b70669489b1ad4012532d4e96cc2"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","186be9b43343dadae1781eb65e6cc08c"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","eb3cebac6702458e4ebdd72912a4ef07"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0636ac836074967252ed70049a711a7c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","928581e8cb45b486f09b88f9c239d400"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a176f29182d56cfb42fd7b7cc7930949"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","cf7da31d841339697f4bd608a13947d3"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","da61c2afa343493064085f0010a3c846"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","e52b89097f48ef4ecc7c05215ccc2a16"],["C:/lmislm.github.io/public/archives/index.html","c74259184fdfcbda6e78a93c326e4abe"],["C:/lmislm.github.io/public/archives/page/10/index.html","8842173218dc2d469c08b23230613642"],["C:/lmislm.github.io/public/archives/page/11/index.html","387ce2d6a1b4858927b773ed585fb66b"],["C:/lmislm.github.io/public/archives/page/12/index.html","13c97b49d472108169ef8812df0fe3bb"],["C:/lmislm.github.io/public/archives/page/13/index.html","4dd5b0909e5d0b511887d5f745e34693"],["C:/lmislm.github.io/public/archives/page/14/index.html","f65010327c6e494823cae6ca7a2a186d"],["C:/lmislm.github.io/public/archives/page/15/index.html","41cae47a4a32bb78583cada60d18a135"],["C:/lmislm.github.io/public/archives/page/2/index.html","8e4f16f1cb5121bb2d338e71055322bd"],["C:/lmislm.github.io/public/archives/page/3/index.html","8701091e55ffaa03b7746be7ff3e9034"],["C:/lmislm.github.io/public/archives/page/4/index.html","a12c5a7b2034e08cfb6d9c95acceb69e"],["C:/lmislm.github.io/public/archives/page/5/index.html","6cee60076d1d7dff6c91042e807c7d83"],["C:/lmislm.github.io/public/archives/page/6/index.html","cf0686f3ef520fd5011d9b54a05185f8"],["C:/lmislm.github.io/public/archives/page/7/index.html","2f86ff0b9ac9326afe89b200ba3e22a1"],["C:/lmislm.github.io/public/archives/page/8/index.html","a869738c5e100810399335a706f035a3"],["C:/lmislm.github.io/public/archives/page/9/index.html","a166e93cc2db4549bb24d2533465a52e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f9d4c08d437e648536df5ba846e34651"],["C:/lmislm.github.io/public/categories/index.html","b52352eb8d8c4470a6834a6662d024f6"],["C:/lmislm.github.io/public/categories/xx/index.html","d7fcf9e5b6748506e4f4d9a16c4552eb"],["C:/lmislm.github.io/public/categories/学习/index.html","bcaf9d8c88fda486808a9c1f293ee8eb"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","821d08f68ff5312cfc7f2f302f678da0"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","de56d65dd7fe8604f873722ea0be2900"],["C:/lmislm.github.io/public/categories/工作/index.html","084d3bc640d544359d32a03f161b01db"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","52e41de6c327688336a15fa148b591f0"],["C:/lmislm.github.io/public/categories/技术/index.html","1e17a5c7f4051a440ca7b7f0e74aa8cf"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","3f3d81408d13917b27e2ecbb2a518841"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","3d4d36f295e406dd5ee4697d9204941f"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","9ab853edcd14282579e67c468806aff4"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","8f7899db48250c125e108d6cd2365bc8"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","90e25f2a15da1136d970cf51160d2615"],["C:/lmislm.github.io/public/categories/日常操作/index.html","41c64435ab9fe36ce3ca5276b2383618"],["C:/lmislm.github.io/public/categories/生活/index.html","7bc132b391a9fdcea6071f93872fbceb"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","dacc1bde408a63e2d20ceff20d478418"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a03da6a188d58fac9bd0006b9f7599d1"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","a520a127f5ff984585367459e658a6f1"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","2ceb096063af3afe8a6d2263a451b4c6"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","caa0c5d108ca891d7b297b02b1d7f74e"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","39de6f78fa8f0165e932ea538472c2be"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d14541a385923778d5c4de7727282ad9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","07a9c6b5d81f95f06cff0c4b68b4c4c3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","b0713a97299805c329bad38c58bf428f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b11bedc9f214760b373bd3fce41de390"],["C:/lmislm.github.io/public/page/11/index.html","fe387f98c28a82bd4cdd8d49a211b83f"],["C:/lmislm.github.io/public/page/12/index.html","a5e35041a915d071c9be48876c99a5b6"],["C:/lmislm.github.io/public/page/13/index.html","84d24bb54483bdcf12137ed9245f41da"],["C:/lmislm.github.io/public/page/14/index.html","ee0848db5bbc458268a7b22217bb57af"],["C:/lmislm.github.io/public/page/15/index.html","360038c43f9688fdb011e0aebdd56399"],["C:/lmislm.github.io/public/page/2/index.html","7514ea50bd763da7c062c11297fbe125"],["C:/lmislm.github.io/public/page/3/index.html","8873ea716d09e4c62aafe4623557906a"],["C:/lmislm.github.io/public/page/4/index.html","5e9c207fb130649d91286418bc16a973"],["C:/lmislm.github.io/public/page/5/index.html","cb39054b7eb904484f4056ab6868e86a"],["C:/lmislm.github.io/public/page/6/index.html","a12ff0cd560ca5bd32b4de7dc968d420"],["C:/lmislm.github.io/public/page/7/index.html","5dfd763ee0355e3b748585b0538e7fa3"],["C:/lmislm.github.io/public/page/8/index.html","176f42dc63c367b65a563f98429f45e6"],["C:/lmislm.github.io/public/page/9/index.html","c5336a8a4ad4adf3f5653fbfa9234c32"],["C:/lmislm.github.io/public/tags/Interview/index.html","8c4a5c41a97882698752b2bef6e015ee"],["C:/lmislm.github.io/public/tags/JS/index.html","6f21e0b8dd3605781325f424f4acaa57"],["C:/lmislm.github.io/public/tags/acm/index.html","aebd93aec459e0e91da8bf53e22e7bac"],["C:/lmislm.github.io/public/tags/c/index.html","a4daec564ced59a724123b08bf1dbcf9"],["C:/lmislm.github.io/public/tags/codewars/index.html","966468e0fc220f8fe403d7af9bf9a41e"],["C:/lmislm.github.io/public/tags/css/index.html","b3864f0cc222dc98f1377995fd3855fe"],["C:/lmislm.github.io/public/tags/git/index.html","af53aedf0b14767658304f7cc985ce7f"],["C:/lmislm.github.io/public/tags/hexo/index.html","415f869cfb61aa9a3e29bcf6153456c4"],["C:/lmislm.github.io/public/tags/index.html","4a43321a48bb7929ea5f3a481adce078"],["C:/lmislm.github.io/public/tags/markdown/index.html","48cf1b5ef376666cc5884c18a2b6d9a6"],["C:/lmislm.github.io/public/tags/poj/index.html","bda3393014397786184bb5f4bc46fd1c"],["C:/lmislm.github.io/public/tags/shell/index.html","7f1c9e17d88bd69fcc2ad5330cf232bb"],["C:/lmislm.github.io/public/tags/vue/index.html","98efdff7cb48fc426b4d1e7870ea48b3"],["C:/lmislm.github.io/public/tags/xx/index.html","1e478b12a72561c3cc19b5d07087dfb4"],["C:/lmislm.github.io/public/tags/前端/index.html","0fed75db83210a96d08489e65f261f1f"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e765016119824ce738072f7f52d79b35"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","67280f39872096d5167aa51b33978f27"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","405dc9cf264501c9bcad7b4a8a807eee"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","774dcb3620b1d5a99159aafb804457d2"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","7d39ccd00a60c20eb06629396f8e4716"],["C:/lmislm.github.io/public/tags/小技巧/index.html","4c8c34e49f740444d0d724f2817174dd"],["C:/lmislm.github.io/public/tags/展示/index.html","2cfc20ab5b38decf99b6299fb5cc4a32"],["C:/lmislm.github.io/public/tags/工具/index.html","70cac775dd104f21b4b8f2c9a75f5877"],["C:/lmislm.github.io/public/tags/感悟/index.html","09aa367bb1ab0f2f4af11c4b14c60768"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","df1506f0c6329c4fd26d4786f5e6198e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","0ee65207feccd6589255b77085648933"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","fad92a6c7b5a82227acd36fbdfaec84e"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","a1573ff5b8c2635e2fdccd1390fc91ce"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","70d6c5fd7269e4e039312f9988c3b802"],["C:/lmislm.github.io/public/tags/练习/index.html","817f973d9a3b2f7c1bab6a748df9ad15"],["C:/lmislm.github.io/public/tags/编程/index.html","9f832beeae387e4cd3ac0086907838f6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","da629b13eac5d738499276c8acfd8f5f"],["C:/lmislm.github.io/public/tags/运维/index.html","fbf7164a9ce266e3c10ff6551f799a8c"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







