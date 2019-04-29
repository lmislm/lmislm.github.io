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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","dc54e9968767c82212fa6f8a8c34bc77"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","d3d2e88d4bc5f6cc17e6c2666ee332b3"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5822a84acfd36b2f071f021c8f42ae19"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3c5bd56bd7c2a7c351ce463b4dabe4f5"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","a847f3d67cffa66ea834043d26064759"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1cf9681893c9c1d28be3a2b65e09e23e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","dcb0fdcbd75186d00a88563f10654698"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","45cedfc4035630fa07dcb0992eca763d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b44425373cc507a39fd86e5fbdf9b1c2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","66a34aa8a16d55f6d8bc8ffc28f0f958"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ba142767eb6d52f8d5ee65cd560b7414"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9407ae9b3816b001cd130a8c54b330da"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","a823191192b173106cbfe59c431833a7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","22ff27a0d6c8d592091d5eac591c231d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e11ac6222ca6731a89f78dc2a5aa11c1"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","14756969d436e02f28e8f2cfb2264a41"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a7ad8216beed3b27a7a55ad429f6808b"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","30b65b6664fca2e8cc50a51c1edfcfbf"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","06bf1778dc181409bbde1b3357e68c8a"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","85c2d7ca520be8346cc6beded48c6193"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0d28d541430986f26d2974bdb7fef068"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","60abbbee0cb9a7230deb1593856452c4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7eb11b4e24021274b0f7d206d9deebe7"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","933fbd52542d64d3b9fabc85dede8b97"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","b3f9d1c5bea56b5e4a60aa6bd20cfbb1"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3b137755d16130eabc67de84cd0b3c0a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","be0c95b21cc78ab0527519933c192e18"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","18d6acfa68aa1c1cf4dbf66c9015be82"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","eab2a23ab7d15d4708ef3908fff475a7"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a5021a73ae989f74ca8566c65c163ca9"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","82d376bb88a0151a95c0a2f8442f3177"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2d4c46ffd7dc02b57063656b790ba28a"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","fde32f1c9c17ed3b9c6f1cd7d434b656"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","4460bde00d18d896997f899148ca5474"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","22a6f3ac4fdfdfe4e43b9d5ed2536e05"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","32774d0f79822dff3c02512c1d5f173d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","226e8942af6ca7af05edabce985aad38"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","9e33d32f9845c24eea641c5209ecb04e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5326401b67804ba1519aa07ca36d3380"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","37f07e874df84df4c8ff4bca769ba493"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8367a33dab6ef66d328a7d8365b9eca0"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","82744f584aed288f5d2dc40863f22d2a"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","878b749c7607910452f4c0dc97d96810"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","300643eb228f1a1a00e029011ecbd1cd"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","bbfa664f0b11f0369a4108c6c4da938d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","167c834b55ba7392598500674adc135e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","ce6ac64894b0c317cbc7cb0e284bd579"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","7a703e92086e97cb2a31f2c886a81b3f"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bf2f002acec9435cce3fc2a98eb6b971"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0826369c5101762e0f00f12f60c7f5aa"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","8fe28b9ec8a44e70c12c3fd2913dc082"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","51a561f1aab51c8e5d3cef5c547c4bdc"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","49e819bdab498eb86bdf802e437e22b3"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","bf44c68aa80279cc4e0bc0f040fea257"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e95a0e07bd832ac309a9be9668552dc4"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ac11994d0c6fbd9022ec49242fa85c4f"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b55e5fe9328e9ce5cabb32d8f95f0726"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","a0c3a3df08208639714b95fe67b005d5"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","37d744180318eb1cee64e016ad5fa0b9"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","06ab8a3120dada234e75f536d1ad537b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","124297fd2a439ac52902a78f7e02c5a3"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a3a14642b4d447105876f85616aa714b"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2665631490aca8f7c26de24131ccdee6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","1ec1e1da3de0a940f3ec00978ca5427e"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","5d4cc7ebdedd202bb4372c8728955b92"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d93683b52dee92e4cd98d43e1b1a8fe3"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","3a0f484867cd8dc0b2f3d6682036ec5f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","0c6bd1ce5e3f758acc6e16bd4e62a43c"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a7cc614b35f6239fffe50cfce47f0ffc"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","707bfad8f726727774958ee8340bfbde"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","fa05504df7bcf6de81156d323e218065"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","a6f3dc6a5ea1d1d1b2999c3dd500ee7f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a77a2d4f133abc66f15ec69965bc19f6"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","345c97ec490d57768ccdcb1585235b90"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","45c4e40be9395bfe8dd0027f9c58e0f6"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","40bbdde13355370ed978fc967c37315f"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","f07ce943ad557b0202101ec1b5d73c3e"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","050204b01bc1ed947217b20dc8326ae5"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","9f651bea0b9a5a411125dc2fca629e5d"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a40a961c07a067b0ee6ecef99a11c28c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","5e31adafc63f0eb46af5aac0d618889e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","1c736aaa5c5ba9e4b9c242e033d5d980"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","12d56287861df1ae56c5c0a3eed8fe08"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","3dc6577d73880adcd12118d000dfcade"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","57d6dae05485e663ea071595763e2152"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","90ba2ad3382ad16b0aefaea5073c526f"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","18f859cd258d43734491307bd3e861d0"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","12301bae4f73d8a0e182079a6b236ef0"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","2812e1480e99e43c8ee824b358ab765d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","ac0805666865e15e6f7e6c2f9139b7f3"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","c07b69a3b743ee87df52363589bac7e3"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","7a5946fcd6d68566145f3274e722fcb7"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","5ac26b9a26fe87ab1c1494a738432a76"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","e5b39b429794c31fd8a0a8b96d696797"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","374f70adbf95be3d18cb7c10dc2a511f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","f58284fbd7efc0c41c8514b4620bc563"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","0feccbb8351c96716949ee4eb01e41c8"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","0c7cdef30158ca30b369d97281470cc7"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","8e31a89bb5e43306c6bf7bd48193dc28"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","9e472245d9cc45ab7b12a70c9f68855e"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","2463e40b1531452d6d4bc7ce2958a6fb"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","ace5e8a5cf44806c0c42824dbeb9d9d8"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","bdba444abbafcee22ca0fe85c9fbdbd4"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","58774ad9f97b0b9c094d24da71175cca"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d639242d678c53e65dc85236dbe134e5"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","a7183df6c69988899a9813fb9b261550"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","fac2dc25502b212c7cdd9bbaffa1c6c3"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","5b167d1f19ed6facc6efb5e97d58821a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","80dbb3418ae1644559231ba3e1c198ae"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","86111cebb69c4b58f807ac78df362503"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","4011d26b8ecf2aa03e2093bcd51b7525"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","cd833899c46e8f1940e51f78543a9b86"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","ea3fb15ae61a7b3a7987e4b9a6ee2ed8"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","e8433749c773be0a1f9852743c56e1a7"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","eeb841cf79011efa502b744c0de7e16e"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","5f614d3c0e5fcd7ed43c69bef1cfd76e"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","bc7f5f830b32a986f612d7ec7d07b5d9"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","d3635aa004bc483eb230cc8ea4b51c99"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","e0d480cee934171abb4a75018c0de1d3"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","96547790a956ea94948054d7e665e732"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","e0decb5efbdc70b4c4fe1ae64c3f787b"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","e4e844ac4eee8a1c858a37df52cb53d5"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","d5ff232937d8c97cfe15547c714b72bd"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","08f0d14a9adde3064f6a83d1f6f8f9f5"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","1a91255fe82cd8c1abd04c86f669e7cb"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","f1f44001566a43aeaff812bdde5ff7e4"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","685682e94d83386cf9dfbec8b87cf2bd"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","7924acaa2b4795d2527285bdb6fe3417"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","90a4fb135f1c9f148803406e9557324f"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","75669ff8b804ceed17d6378af479ce9d"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","3470032b4f1c05b110b8077598b13a81"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","26ebd3abefbe62e38dd4952bbcd72e85"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","4c993dbbf3ca99620778e1d1ddb86c89"],["C:/lmislm.github.io/public/about/index.html","4be3eae750ccae1a8e62291a925ffb30"],["C:/lmislm.github.io/public/archives/2016/01/index.html","9faf633bdc0e4a1523eea0b67536ae4c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","5d8b48519d8e2fb6d84a87189aef1537"],["C:/lmislm.github.io/public/archives/2016/index.html","b0e20f671e94c454f49cdb9c5b47ffe2"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e2fc16114ca9d01e9a2a519be05f8fb0"],["C:/lmislm.github.io/public/archives/2017/03/index.html","786c381c48bb2df3e680951c355773a0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","be743e1f2e6342a97e2b50c717765749"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0b2f3c2dc31586e94662b245bd78d8bc"],["C:/lmislm.github.io/public/archives/2017/07/index.html","6d3b0ba520b4cc83c622236a2d8a9ebb"],["C:/lmislm.github.io/public/archives/2017/index.html","07bcfb068a33a8f6ed37f58f0f11cd4d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1e2634b093959108fe89561d55c66eb4"],["C:/lmislm.github.io/public/archives/2018/01/index.html","6e128009893a7dc95c83498b914e85d9"],["C:/lmislm.github.io/public/archives/2018/03/index.html","69d9515f94f96b7a2265087c19beb335"],["C:/lmislm.github.io/public/archives/2018/12/index.html","19d6091f56ee7a264eb37804fd7cb072"],["C:/lmislm.github.io/public/archives/2018/index.html","fe7e10dfdfd1a96b5d73e8d3de7a11ba"],["C:/lmislm.github.io/public/archives/2019/01/index.html","11adeb2979397fb9ebf5ed99c205e313"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","e49e08bcb966f856f7955cc86cec8761"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f02ec5e3c93ee682531cebc6563fe857"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8c2fbc8fdc7e4f0fc17936a041a87dea"],["C:/lmislm.github.io/public/archives/2019/02/index.html","63d40061d0280ea8a3d3eed92c645101"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","53f41c6360c33bdbf425a7b0b41b8ffa"],["C:/lmislm.github.io/public/archives/2019/03/index.html","1a6871da49ffd95cbf34c96d8dcb8181"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","bf105bc3af2dbc65dcf9f84ac9d65b8a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","120ee725469af18e277dd137237f8ed4"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","ccc68782d6cb7dabae8f19779d8e2c9c"],["C:/lmislm.github.io/public/archives/2019/04/index.html","31b24f54ccfb12fc8e784ee5933cf006"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","2b8ec166d39cb106454cfe3ca725a4b4"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","4a69c82e53a357a394584d6d3c30b98a"],["C:/lmislm.github.io/public/archives/2019/index.html","ce87bdc6ffbe7c612e84e9030436e654"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","72edfb83749d415948427f84cf151e5a"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","452820aa570a4fc9c7f3e3df3fac8c92"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","1281b609bcef5e58aaf48bff13f3a337"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4f02a27cde5c7e43bcf6cb4bdb2e3ef0"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","e7f12f2bd3cb5cb6c50f2b89126dd3df"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","d38a89861a7c01e36fe7d0e288022528"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a850109608994d746b5bbd15bd633fd6"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8c0294d28e11be0468c9147c11ba150c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","b66b153c5135563f123c85c0fc338378"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","889b290b86033114a5a4c923ecf19684"],["C:/lmislm.github.io/public/archives/index.html","7afcfc82c71b2068021cd397509ea92f"],["C:/lmislm.github.io/public/archives/page/10/index.html","26fde525068613c3d38ee31d4841676f"],["C:/lmislm.github.io/public/archives/page/11/index.html","9a132aab8d2d954fc9aeed77aeb19a87"],["C:/lmislm.github.io/public/archives/page/12/index.html","1af6cfd58b2dd8187039e9b2acb25c4f"],["C:/lmislm.github.io/public/archives/page/13/index.html","efcfe73f41f734b5fa2f5c1ade3d31a1"],["C:/lmislm.github.io/public/archives/page/14/index.html","a6ec66d8c7e849e888984dd5d59ccb1e"],["C:/lmislm.github.io/public/archives/page/2/index.html","a0586a9f6eaa47ac9aa3a6a12b9ec5e5"],["C:/lmislm.github.io/public/archives/page/3/index.html","8b961247012d9b056f0d059df542483f"],["C:/lmislm.github.io/public/archives/page/4/index.html","a5930f8f96683a341c6134079d1d257a"],["C:/lmislm.github.io/public/archives/page/5/index.html","074e844fba7e18bad7f47147909eb6fc"],["C:/lmislm.github.io/public/archives/page/6/index.html","f7f4a3e623e24bae4ed85d721baf0024"],["C:/lmislm.github.io/public/archives/page/7/index.html","afdac860e7cb915a9e5c680b18298dbe"],["C:/lmislm.github.io/public/archives/page/8/index.html","407a65ab654add9878d1e96333d97d3f"],["C:/lmislm.github.io/public/archives/page/9/index.html","4386358e9644429e361401bf8c3bfefe"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ae6a61619b48df35a5248f5c63bc8062"],["C:/lmislm.github.io/public/categories/index.html","93a71161e7276931636894b071472b8b"],["C:/lmislm.github.io/public/categories/xx/index.html","55babc31ba24e4e7ec9dd0d451c6137c"],["C:/lmislm.github.io/public/categories/学习/index.html","afea507c96ff143a663e211fa04b7df2"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","bfac87d030292c14d5156ad3329dbfe3"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6e2c80f8c94d161685b9ec44d58a1b29"],["C:/lmislm.github.io/public/categories/工作/index.html","eb2f84fa50c6ee4860a9e8d8255f5568"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2ef4e31107828fca7d0a57a3d012016a"],["C:/lmislm.github.io/public/categories/技术/index.html","c2a44ea792d693ad70f167881ddf99e3"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","27a97f12d0568bc79517e3789c059998"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","af02f4f3a92a7d67721b9f9b7cc3e9de"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","fadc1b7596974a26958b6b4b8c39fcaa"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","aed38ed8182e8df0457b83a56a971782"],["C:/lmislm.github.io/public/categories/日常操作/index.html","145dec77aa7289e7c6e1f86fdfa5f688"],["C:/lmislm.github.io/public/categories/生活/index.html","a633b39db78ee985de24ec5dde63142b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e48b2b98d82cda743290295f4ecaa416"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","75796897efa1118a5d5ab44d7de7ad8a"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","1b2af57fad15756f627493456eb0e4bb"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","fd09edb84d82dbdca94115901e5c3044"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","cbe968229fffdd676908eb545abad1e0"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","5cb7d1829d6ba4de9bd8522895568213"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d44463ac9accf64bb64398c9a4497705"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","96a87bac7d3b10056ec2718d0fa7b54e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","14ae8b1aa17e9c69d338015bc82ecf4b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","3e1953ace557da02d60529956ccfa733"],["C:/lmislm.github.io/public/page/11/index.html","62c689252cff73df20e6c2ecbc577b9f"],["C:/lmislm.github.io/public/page/12/index.html","1d7ef97d7a6a4e54ee174fd50ec6bb68"],["C:/lmislm.github.io/public/page/13/index.html","2103e8d88869deae567034f1a96baf21"],["C:/lmislm.github.io/public/page/14/index.html","e42db57c8392b54e099129ea13af3d42"],["C:/lmislm.github.io/public/page/2/index.html","6ac70a00f064ad39c8141c29996c1830"],["C:/lmislm.github.io/public/page/3/index.html","27c83083a07f299882e0bee7a935dae7"],["C:/lmislm.github.io/public/page/4/index.html","9d1d3b6de0f18c3d9e912c79458233d5"],["C:/lmislm.github.io/public/page/5/index.html","7a8737c4fbdbbcdaffbf7293c0c9f2a0"],["C:/lmislm.github.io/public/page/6/index.html","8a5e0f61fde7502ca54e89d4994d9ba6"],["C:/lmislm.github.io/public/page/7/index.html","20e1cf35dae98705e9fecb9aaeeb1782"],["C:/lmislm.github.io/public/page/8/index.html","ae1fbcfd830d2986a474fdba98afd9e0"],["C:/lmislm.github.io/public/page/9/index.html","3dc5729012e908430d15616824b7d809"],["C:/lmislm.github.io/public/tags/Interview/index.html","5fcccdb28e0b8e741d0d4dede8b7eb27"],["C:/lmislm.github.io/public/tags/JS/index.html","d86bbd9cde03fb99b6814d8a67707715"],["C:/lmislm.github.io/public/tags/acm/index.html","17f649730adf187331da4a0e44091358"],["C:/lmislm.github.io/public/tags/c/index.html","df6bb302ad34faff24908a6644e22ea3"],["C:/lmislm.github.io/public/tags/codewars/index.html","7d5114b592e05f00622b8a3a6e2cb18d"],["C:/lmislm.github.io/public/tags/css/index.html","dd10c274c2ddc606eb817ee17d25457e"],["C:/lmislm.github.io/public/tags/git/index.html","100cac1677881991dd9bf9ced1a132c9"],["C:/lmislm.github.io/public/tags/hexo/index.html","3dfb2bbe0a3ab33a827449b7954f1fca"],["C:/lmislm.github.io/public/tags/index.html","1a860d9b1f9b3463143b5245c6f0dcb2"],["C:/lmislm.github.io/public/tags/markdown/index.html","9cffa2280d4b095df6eb8dc156b15f01"],["C:/lmislm.github.io/public/tags/poj/index.html","5c38051139ca7cce5e0a1e92921bf7ab"],["C:/lmislm.github.io/public/tags/shell/index.html","a1ae218bbece7f320deb591dca3eb1b7"],["C:/lmislm.github.io/public/tags/vue/index.html","968b4eeed70d6922d82231139cf41d2d"],["C:/lmislm.github.io/public/tags/xx/index.html","0cad9496e2e1153815192f9e8626b58f"],["C:/lmislm.github.io/public/tags/前端/index.html","d643634917f5d42789c2bcda2939a77a"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d850ece167acb802f9ae356d4d318698"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","01ea0cf7e3a2817deeae16e5abd87167"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","bbe9393ee96e4e84d815b535cb2d6507"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","ccc66519c944c8521796365f2f0ca65f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","623c649c5d0d0f13b5e74a91e3330b56"],["C:/lmislm.github.io/public/tags/展示/index.html","a861cedfcd531617b11741339147530d"],["C:/lmislm.github.io/public/tags/工具/index.html","c6e290b8be50a5f4f2f21cdfaf082f79"],["C:/lmislm.github.io/public/tags/感悟/index.html","330685715f43851a80fa07bd008c8e59"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","185b744e0d920563ab39e95846c1a0c0"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","d0ad664f0b2d33bda8a4672e36270fee"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","57b75953c81141a6af7216ded9d54057"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","8d0f158fb05efee0e9f527c0197183ff"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","e38731efce47a37f064279356e3a2429"],["C:/lmislm.github.io/public/tags/练习/index.html","1b793d9c1e623e071dc886a037573567"],["C:/lmislm.github.io/public/tags/编程/index.html","b9e615e579acec74b5d3a04554ce1fb8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9dd709e55cedc897e6b14c1a8e5cccf7"],["C:/lmislm.github.io/public/tags/运维/index.html","4c88aa48b3ef24ca4c2c0633c92e7a13"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







