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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","9b9086d6bab29d1c0a9f7553f1efe83d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cd6306eb909bd7872e4410b626638534"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","23dbedfb2e5370b2d2cbaa2d812a86d2"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8e59814a05dd9fe1c1a79c8004006163"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","74ab56af1de2def31636bfb3a94ebded"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","dd597f6ff4ba140298933bf6ecbe4c9c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","9b694c494a774acb06ba00fa6186c3db"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c8a94353719896b8bf818e03a38934c4"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","214f1a2c28607304233ce032b56ff743"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","bfbd5b30b1e7784bb9326ee4e37133de"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c37308848dd2844ab20c45a04408dafb"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","987a484b9426889e52edd21017c5f164"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4b8a111538a44ac2b37c4a2846f89e1d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","7921d8c6a93c37903838bfed71e9a3b2"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ba452a8762dead60aa9b5874496319a3"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5eff05085f1e0c66dbbf592b1ccc3de2"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","21042539b4977cf68b5fdb3a6b3ba764"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","796c47fcb7e26be0bf8c09a7d266bd04"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","92e65b196780151f20e9727a5152efd4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","06987985675c0e75ea9ed92f57dd0db9"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","bef91d4dd530d10344c0655359938990"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a1375ba14edaae4fdf10a7dafb2f0c40"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6084d2faf39d8e2f5da16d8f72631764"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","7256959993668ebda4bc443aedf596fe"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d5aa14e2f7f7c1d93e4af21467e8b253"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d1ba1737d9e006e2a6099d09e96e61d4"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","ba7ea174af5fbe21ab235c7ac9716eab"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","cece344eded746e5149c58313cea9498"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","696920ce864fc7bc520da670183922c5"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e1111d5a7d16c98cb4770fa7618b1a2f"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","48405c4e59526904d71ebf2986e4c2e1"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6231052e48e442a52eea69579da5f4ea"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","bf1161a5c2a6c44abb1330291ba58541"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","acb98011f1c6c04bd021436e8ec94667"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2950fe4bfd34f3a16be6cf531e404808"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","cad5ebf2c5c7a7e69cef64b55aad1ef4"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","aab335fc6d5e848c3271221f4de5e74a"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","420f55f0d3dbef960dda534d69d7959f"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","c8120ad67cd4e0692400c31774f37e9a"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7055fd44b49303bea7617e987fb8f817"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","940db4353f4d1ff0f6c04dcbf41f7230"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","1f91e89ee46a13ca14a81a1dc3adf7a1"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e80c79d131ef77bbec1ebcb320b6eb58"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c9a6d9c5aeb3357c4fd4f1b71184efcb"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c6bf9c09585b1f2264d4409d82926409"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","17d6b3c8928ddf0d18b80ab695c059a0"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","9efff9b0a30427ba00354c940dba0b2e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","405ed9d414c68666594bd30099499c36"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","25ceb6ddc00a4ca7ea4f59eb17f0d57e"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a16c969efe6b5f83124a5d57c076fa05"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","f56fc305b1416a1f8930159edc61176e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","1fb375c427799e9a7b7408b7e3b27747"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","873246ee7767ea8aeed92fd3ae3ca295"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e53b718fc2bf3c0bcb3e94d2dcdec375"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","7e3ebd119ef8317a9ed2ae126204ce73"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","6f6a787169dc5249613eea8e5e2d1d74"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","06e93aa287735e2c8e2529963ac75ad0"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0476a5de1f5f0f160bf217b106fa0821"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","8924d0fb90af60e16a072ce00e098188"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2a5f8d7de3306afda74e19451788a803"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d02c9f9c3edee7f6d6aabae6c864665c"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","94e5ee6ba72d2026b846ffeed05e4b25"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","47c7f1676dd70caf95cfd79fad84023a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","4e6133df53def3221e189aa342c59054"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","ad2908e0698e7605b01680a1a95a9377"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f4a4d16bb94fd174aef9d7d7dabfc54b"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","30f5b2869411a629d9027d20f66ce737"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","1c9269548d8f20e6bda80853ac966efb"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1edd4ee381321520183cf2df2e4ad3a4"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","e25cfc4c9b43b54226917136a26b46ac"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","7ad95b77255759f83fe1bad3ac0b0ec2"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","34249a29048ed1898cce33455ee7fb0b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","8c8d3cbf8293bf41e69025616aa360fe"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","02a74c653f5285a50130d83589c961ac"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","29fb4afd002cf6fe9f445d195227cc1f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","103e2349795b5bff9f24687d59d8da4d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","bb9dcc5e59c3f2e2625855ace446424a"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","c53855023801beeee07c5e587e24ee37"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ff842378f651ced29a63d51d6bdc873a"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","84aee7da74a1133eefdbb1c29cfc32fc"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","e42cafe4d98ed5ccf3b66e9d3eac5fb5"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d55b9c54bbf7c07d6f6a86fecc0fa16b"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","9d7214bc0d89204417f24ac01eeaf555"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","4a8482ee3f442cc6dc6719b979c534cd"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","b12c41501da5b18cb239434a873d0df0"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","ac70804f02645f9ab63da600026914ac"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","5fd1946de505aa6a4d27c48c28c12fb0"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","3d3bd152adc0f350b3f1d3a3a4f2d96e"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e851739aec2c8f11b160217d45ab9a7d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","ca5b14d5f9b322054e702c356f255c99"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","a36de3032817ea0a9bb301b2ead1b6ca"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","7705cb74f5b3cc7e6f045a9328621e9f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","cc94d13d9bac3e0151ebed2949cb3065"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","4da1c113126329322a70d0225ffbcc84"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","8d53f7720be9757fc557b1430af3eee7"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","67333f5af1d010e294eed547f12f01d4"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","d2ad445851993bbd3072effacd365461"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","346aa678cf6e1915b894af253fff39b3"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","7b759c7f5946453cd785bcf386bf6d11"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","d100a80a1cb165c344a78710edb43100"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","7e55fa793f2c4e175bb5cd8af192c4d8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","6e4f2b08c46ddea45e9d10ffe7fba8c0"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","cef262d8f609729bd1df77496652afa6"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","31fb141bb7088c9bf02b7fa9af9d1efb"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","6cbb6fa90598ef9a4c8db5fb59e44bf1"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","8170c6c8f3a248bd7a2d60e834ab832b"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","fd4e01bab0cd560a234b6c1642017dbd"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","738a993f1abece17e21c4c6cadf752c5"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","6f3d1a580154de5f54228bee17cc1fdc"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","472705c941e560460e9c88932aa8bd2e"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9eae0d9eafee6174edc6f987a2b6bffa"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","6ccc3c26ddef8e314f112e7e0e5804e1"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","489881b5dd8b0b4ea3e02ecf6bb2bcdf"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","d7abb139d1c1b02d1e63a8947176c8cf"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","778e80c5840af52f4518486cea4d3208"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","69123151cefd5460f587baad58b7f78d"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","efa83281837e160a8cb79a8e4a7601ce"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","38cab5c6719f8411c2ac8fa57406f7f0"],["C:/lmislm.github.io/public/about/index.html","43e282ae0867b1d4768e956fb19c94a7"],["C:/lmislm.github.io/public/archives/2016/01/index.html","798bf977e56ca19a33563768991cf78f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a34dee142a1e08ad4da69663d7e54f7a"],["C:/lmislm.github.io/public/archives/2016/index.html","45ff52e8644183c9079a320102c85b70"],["C:/lmislm.github.io/public/archives/2017/01/index.html","6f573d3d3bba512771a6b2140d59318f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","79b1cd08ace668ef6f1b96f333951923"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b0652990551455e6d17252ae81e03c8b"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ffa1cb1f60ae8d96e608d493c282ef90"],["C:/lmislm.github.io/public/archives/2017/07/index.html","523e730a6f6a8fb1d1742278f318be62"],["C:/lmislm.github.io/public/archives/2017/index.html","9249a28d0e14f5c74bf136fb6ed20781"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f8b1aa27f892eafdfd3f9afeb58cb380"],["C:/lmislm.github.io/public/archives/2018/01/index.html","9b07cfb8364e7c8504f5b4cbea948cd3"],["C:/lmislm.github.io/public/archives/2018/03/index.html","6a3d640b3b8acaac01313f269f63d88b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9710f7345581f945500467d7b5fb9713"],["C:/lmislm.github.io/public/archives/2018/index.html","dc42c0c1cc7b0201a05430897625da56"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b90f7d1afcf6c9124c496fd06143f057"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7ede26d617e9c7a3ff3e12a24f206a8d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f29d02ff5fa1bf078730e07129220672"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3441870247bb1b3659d3173aeef83b36"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d683c252e62e27de1a24598cd1b7ee38"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","c6a4d4b59d65915b44ca26936abeb732"],["C:/lmislm.github.io/public/archives/2019/03/index.html","ee36d931fecc853fd0a20fcfc757b266"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","cc5be251362c1d85f266bfb48f441f4e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","bd5a9cb6726635b2465238c1d70ae2e7"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","44d795967340b8ee020e4207956005f5"],["C:/lmislm.github.io/public/archives/2019/04/index.html","62087f7809c6eb0bf03096d8eeb3b17c"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","bb8c44d3db40a2b4fbed9925d78b2f31"],["C:/lmislm.github.io/public/archives/2019/index.html","26a127e6921263377f831be63e4ec28d"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","cbde615852039641a6972f3b01780690"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","58852783fe737bcf8e03451f78ba5611"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f845a11166a7ee479198aa8fba2acc2d"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","15961910c2b6e2aabef95e8b049f05ff"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","135d5bf14931b30c66af83fb4f9cd73a"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","25f0fd0315d54ac037fbfc076c60d254"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1a3a80891deb99e81e847fe66120fc51"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","8317839d7cfbd7853686b88e21a60797"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","0af0d548513e5485f876397e76df249f"],["C:/lmislm.github.io/public/archives/index.html","98763926ac1b5278e9ae5637f2e678c2"],["C:/lmislm.github.io/public/archives/page/10/index.html","9fb2aed0a3348d062baf032b2b1e8595"],["C:/lmislm.github.io/public/archives/page/11/index.html","548bfa4a274555f93b57509c49249f4c"],["C:/lmislm.github.io/public/archives/page/12/index.html","fabfc3ce2029dfad3b60b1b3f7bee510"],["C:/lmislm.github.io/public/archives/page/2/index.html","a2181c1c3b4b3867116c3ea221ab1101"],["C:/lmislm.github.io/public/archives/page/3/index.html","e5bd536329f75be1361b1933cdc3959a"],["C:/lmislm.github.io/public/archives/page/4/index.html","dec20282a35d6bde3eefb8340b055221"],["C:/lmislm.github.io/public/archives/page/5/index.html","d464bb77256a38f19c1380ad6941e046"],["C:/lmislm.github.io/public/archives/page/6/index.html","15dbb8db4c666ec9d1ff848885ca9db8"],["C:/lmislm.github.io/public/archives/page/7/index.html","011fa883120220298171475c5b72c5aa"],["C:/lmislm.github.io/public/archives/page/8/index.html","566225047524b0fb060bbfff05c06b53"],["C:/lmislm.github.io/public/archives/page/9/index.html","3debe11afaff788d049c80cddb58a904"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","395f7df53980a071190a93f40fb21e25"],["C:/lmislm.github.io/public/categories/index.html","05a279dcaab6460f7166f3d2eb1a4c37"],["C:/lmislm.github.io/public/categories/xx/index.html","3f476f40c3168c689d9c23383ff5ff99"],["C:/lmislm.github.io/public/categories/学习/index.html","6a4b056bf1042f7ce2d60cf6b7a98ccb"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","20e263004b06e6ba2799696bedb7ca5b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","12210847c12c29e12868584e21bac985"],["C:/lmislm.github.io/public/categories/工作/index.html","65ba975216111d63e587e8eb2ab999c7"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","fc7bd4479e247def931e3c61146b2035"],["C:/lmislm.github.io/public/categories/技术/index.html","f4478cafb29a4895daacfd32d30c052d"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","1a632fa6e802fc2dce18ce121877ba0b"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","004c783afed46cee0b4792768ed29f72"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","ba3e5e3f78824df19ff4d042e4774741"],["C:/lmislm.github.io/public/categories/日常操作/index.html","cd95537d420f43333179ce94a461afe9"],["C:/lmislm.github.io/public/categories/生活/index.html","7dd5d2e62573d980ffa765dfccc92bca"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8e6576671c3d26ff425843572202ab5d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","55cd3eed845db689b11b2ce94ab82b09"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b9441a1e57f3ebaf05a4419c3b996e72"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","30887d54e0c4774e160b4701bd670231"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","fae48bfe857f942287f59c25fed174a2"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","93683e49e7b54abd8959dbf9f06a3d83"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","24f93c6fdd1ea873d62aacaea2063f5c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f8802bd4e2fb1ad97ae9cd5f1860756c"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","3624af87d3b19e07ee6e91d724a85559"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","14f1b9712978fe24c9f61aadd5a5cffc"],["C:/lmislm.github.io/public/page/11/index.html","37b70b5c571d5179332ae3a6484a3332"],["C:/lmislm.github.io/public/page/12/index.html","4a0f3b08e22845696d2c10695d65832c"],["C:/lmislm.github.io/public/page/2/index.html","16862ea69318a9c0bba921cb095a4d57"],["C:/lmislm.github.io/public/page/3/index.html","1d26882712f5e3ebb5429e5b1fae01bf"],["C:/lmislm.github.io/public/page/4/index.html","00d30a7886150590c424a35d9cc1ee6e"],["C:/lmislm.github.io/public/page/5/index.html","cfbf1ee498fd86af5e683dd0b867831b"],["C:/lmislm.github.io/public/page/6/index.html","7df573934f22d2f6375ecd5556e16ff6"],["C:/lmislm.github.io/public/page/7/index.html","c40a3dafea20f89d87a8c662a6d6b5f5"],["C:/lmislm.github.io/public/page/8/index.html","9177fc51427790fc807346a1eb564c14"],["C:/lmislm.github.io/public/page/9/index.html","ca13d64f7dde1784f90de175ed573c29"],["C:/lmislm.github.io/public/tags/Interview/index.html","b435c9ead93208c28098f260bd178ce5"],["C:/lmislm.github.io/public/tags/JS/index.html","dcc11a928e4a205c8ed999c9ae901f61"],["C:/lmislm.github.io/public/tags/acm/index.html","49310afc7fec591e42a8910b7139926d"],["C:/lmislm.github.io/public/tags/c/index.html","169ee8f986b04a9e6db2c0d94b47dfc5"],["C:/lmislm.github.io/public/tags/codewars/index.html","6421d10df784a8da5072455f44bcd031"],["C:/lmislm.github.io/public/tags/css/index.html","3068570e5b417fa9b62610d9568df9ff"],["C:/lmislm.github.io/public/tags/git/index.html","bd328ffa0082fbbc02692a86250253df"],["C:/lmislm.github.io/public/tags/hexo/index.html","f9006a5f5f538254f5a7e9a0d0c5873a"],["C:/lmislm.github.io/public/tags/index.html","ce48dbbb81f4c1bcccf6d05dc407eb93"],["C:/lmislm.github.io/public/tags/markdown/index.html","b3387e8cb81c546e87123f923a6aa306"],["C:/lmislm.github.io/public/tags/poj/index.html","c606278954989b1682c11788f13249cd"],["C:/lmislm.github.io/public/tags/shell/index.html","c99cb29b9f28fde233b4e886a7a5fb3e"],["C:/lmislm.github.io/public/tags/vue/index.html","b94fd6b6d84622691a27e240f69f004e"],["C:/lmislm.github.io/public/tags/xx/index.html","d47f122fb3b0645003e371c7b9f59804"],["C:/lmislm.github.io/public/tags/前端/index.html","a4413ac5c615d6baf499b432e29bf03e"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","74852e8774cd7ca648178028b43434d2"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","662ac181f660534042a23988f4e917a4"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","72ba698548ac793ec094872d854fe455"],["C:/lmislm.github.io/public/tags/小技巧/index.html","6e61f44d61e03d7a93c43a15b1c06872"],["C:/lmislm.github.io/public/tags/展示/index.html","57e8619e914f3c4e4b2c1fd6ba894898"],["C:/lmislm.github.io/public/tags/工具/index.html","b0b4ca310300d761f6ad7cd5f6b94fdc"],["C:/lmislm.github.io/public/tags/感悟/index.html","e52ad4a47e6d5c0c8f4571bd6255a00b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","4e98f1621c893f84a16a21510f01bfdf"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","17704eb1b1cacd786a5d79ed018a5309"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","13cb39ee689f56f176ddf796f3fe8d4e"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","5bc3bf7edeeb976a32a260eeaacbfda2"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","22f550109788bf9327cf86fc982157be"],["C:/lmislm.github.io/public/tags/练习/index.html","6e87d1b67b180ecc80c536ce5b8216d4"],["C:/lmislm.github.io/public/tags/编程/index.html","956e1ec53b407008a2b36734f18700b1"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","ee10d9ab5d3d1568276823f33f053e43"],["C:/lmislm.github.io/public/tags/运维/index.html","1bec71f9eef097b8560425f2df0f20ce"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







