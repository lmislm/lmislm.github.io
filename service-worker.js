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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","08d0240a8f5f0a3f0a9bf5f080f5634f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","0a5d2a3bfaf5729d9fbccb23c22bd587"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7d5cd28bcaf64e18051a4f4d74c899ce"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","9f29f6c075ca6c825f78712b681cb503"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","965d2194f3846a5c85788d5688e5c5dc"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","3b2fb8241f31caaefe59ee4aef1ed5be"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","565cd03a35bfd5b09cd880541019c428"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","cffaa994c28a225fab20def417635106"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","8c62bf2c97857225f30bf7e5d00a0fc3"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","cdf8343bbae03ce7e408640e41741559"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7e3ffa7ef49e2548f22f8682e551c482"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","87d5881713c453f2441487951ff4e671"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","ef6223a28fade52c2b18ee88bb4717d2"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","894310db2b1b20e4d982c55dc10090d3"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","a025087c1f5398ac85fc5232ddb6bd9a"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","2f8559c29304da9ffab97110afa3940f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a22f83fb849a3f91dadcd47ba5ac4420"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9b741c4210b1fd6703c6c2f31a57f51f"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","21cb5c7907f4d3da78f033b18d3b50e2"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","32569a0fe66d4884d93a04593091fdee"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0a5204c5fb6c84e16d4e19c000666d01"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a1628a6550cf4346ed73470f5991b40e"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","8a8f9cafdb089a620138b8281a13a9c3"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","05438dd7a4f657757a33e6d8deea65e7"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","147c0c6134d3fd27301426a4fb0e1e65"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","79b5aa5a5b21b86487d04cb2f117c3e8"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","9e9d16916ede57e07aac9e23833c45ef"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","7a1e3e54069a43e4120ef20a4dc44c8e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c3fcc77c625b43278c7ef145ab2dbdea"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","28a29a8663df1ca87da42769da674b10"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9027cb1d4ed7199cc9cd98798b4ec2c9"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","36a7c5b44b9ea19493f8da7f94848cab"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","5a80cadafe224d8f1fe585d4935a6966"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","b7e35b5379ad1a547a8b3fd15e11ea40"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5d741d4e9243ddaf3c3e7e091cde4d4d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","93136e65ec8067e5cabcf0ab0d32fd36"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","6bf25fe6aed29fd902454c4921a988ec"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","470853c91b4330af75e61bc09df57c7b"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","60f161fa00302d812f2b175e614a110e"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","25cd3f143286c769e8bd9c80ce3d2f83"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a963b40a47231a7515dded5c316abbd8"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","6a8e1277b0431111f0c343eb6e1c23b0"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d721254d4d0012447998fcc6f9fbb2b5"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a52cd1ec784015bc5766cbd50f743861"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","f1c155ca8d7afb895dcc77f8121d6d67"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","4f1a62427fa85d0b9be16de0c8ea59d5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2d8affbff540ee78329d188176a8ce30"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","fab45ed8b734637d67a9d9cd2757d61d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","71158268d11eb5e14100223f177cbc63"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5be1f9971e9fe8d97a77e4575e22cf83"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","9411059b4d32b573bbf333576d0ee9dd"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","ac259534b0ef2062ee557f3c1c24d542"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","589f8bafb094d31a0ebbb7eeb3fe48db"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c2ad1471bc492ac0dccb2a102ab6d2d2"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b6a89c5ca9967b061ae2dd54a7a6c9b4"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e00c7d91aeef0178cb6dbace93989cfa"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","bcccf8a603a566753a35a21ae535eb1e"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","454e3ae1c987d028316b36c578f557e2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","55a4c878fa47a2df8e3c8dec6c9ae95e"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","527df1197977c18cb4dffb4947263875"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7666f5115965906543e0e4d7c6efc920"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","cd7f7d61d9617cd8d1d9903821c2c8be"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","923ef97096221a95c2241d6d5421840f"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","d72c0b9c2c21f7fdcde3422988fe4672"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","ed344e1f02f155ec323ce142974dc304"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d13c76f540fa4f5db2014256e76d249f"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d1c482ba81603ddfc7290916c45729b9"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b6b1cf296104041851ca9891e66fa9df"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","fd655b774e84e08278370d1138823299"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","cd48a82f0514f343d1610833b7ca0ddd"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","0530a3ae58f1709dbc62bc5455f7b2d3"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","0cf97ad27f6ed98bf1b1b3033a89e0d7"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","738af9176fbebae620a7a79aaee2868a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","01c3c70722ea051324e5af435e65444f"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","b6aacfe01d58416d021f17603cfbc41e"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","4953681d4c63fc8e8a93e00f0da7a39d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","89fd0eeafa41e0cce916883aff0b9883"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","631768a70953d7a4973792f9ae1ee56c"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ddc6e9a952fd927b377ab78ceb5499d1"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","9c9d9b02fbecf8302d9a6e454bfe0924"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","6eac2682f4dd8c38803d58ead3af3fef"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f782719387e57e1e58c85abd527ee8a1"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","a1f7cf4435af5639668dc842d3ce4142"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","0259c3dfb827ec0a6eaf1ebefeb3e228"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","9b6728a605f52fa7d216e7855142d7aa"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","405b6138b2dae6454c7270a5cc2dcd29"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","781f84528c2680ee35704a4bfbf2a91d"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","497e25fe9e55478ae995d92ab4f73a41"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","47afaa01417e5492f6627290e61af7d1"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","cd0e4f5a1d30bb33b38bb38f27df596c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","aff2d47a08ef48554c8dbf147922c868"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","6302267d4564e39a4c70adba283a7afb"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","28a4c350f75dbec4c0b970d362904acb"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","dc3a407dc4808eeb37a193774459c914"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","b1bc9f9d2603b902593a83918f42945f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","0bef8e421fc47b736842df36e14102f7"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","bb1463bea7e969a375716a4f26684d89"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","050f524c85f5ce15ed281368ee96011d"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","602e6d3b31767db6f1e828140e0260e4"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","a2890139ae536e547f2339b3af1269d0"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","bb31b3b0b36c5c4eed186eef4694d24c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","3ac8ad672dda1f7c4d32e77aee118667"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","cff40d2cb7bc5d30fd5da7b6ffe7924d"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","0d155b7c557f0a66006f4895895c7bf5"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","ada5232199ef6cf04c6d433905b5bbd3"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","020245c885cabc40d91163f1eb5d131a"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","d3353a6cc2d0acc2f72b074f26ba25ad"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","be9310e5f38b6f7f88a77059a4c0db12"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","dd963fb03ba5e7184542c6408f99a8b9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","7d8a9959c6a1f2caaebf06b965b7bd7c"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","d6206344653a872a24d0f3bfced2b545"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","3f7a16c116d2e90bce84b0c1bbf0c190"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","4ef88780b1eacd90ca0c2e030a7501fe"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","0d27009a069dc58ea9719f1ac24d5c03"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","42e454a742155b6244b6bea38eef9ff5"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","9db27cb216e2fdd9ed404625437293e1"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","aaebe9990c91fb549d40a8bc0d1f0e4c"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","2135b82a03800db965e77080edba71fe"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","d862dc24a53b2840e30e2e250d87de0c"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","c4895443c039c04fada40b2f99632635"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","2c7a78f6f1dd2218cfaf2a11e47822b3"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","c37d5db0d9d1d0827374472884e2c7f2"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","4243ba6a5c1596448c34a7922c5e12a2"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","67a6ed589153f16259c9cf6db136da9f"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","4921bcbfb472e2cc4d30651c105747f3"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","a8afa26cc9d21ffbfdf5e60829a8c3cf"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","6b648bb16f038a58b6d5ddbbc5a3137b"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","a05a86a2354e64f1b286e89a4ecf8687"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","a5eb1e7904957e7e270512b698bb8e3f"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","2313c111e0077576d68fd9aae8391aa7"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","307c59f9d519e2a1db2ef094375a78dd"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","f83763a44f11f4b4cd7964705f271af2"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","774572feaf11703b40e7eab3c09fc3ac"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","1f3bdcc0eb27b8c9e02054637edddca4"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","063670484c341eb34e907c23e62d81b5"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","ea626873fa2186fc23d745e0499a1a41"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","9cb0a580a0b6c529ba6264922037978d"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","a0c02a90233ac699ae1ae548da483327"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","c21fa507ce33158080ed6bf4af373c0f"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","9bd766507605a5c5e5be76495b365ec1"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","ef1d893ea3d12bd8cbd3f672a6bdf886"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","76b8441e8559cbce2f16c7745b11999b"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","6a586350b58aeea7d4f89457ca715a8d"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","f4d5e9cde8e3a107afd1ca70a6723ce7"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","5056e2ab44d0430d18a10f2b684a4786"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","1e48dea8b60934e90922164a483e3e9d"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","dc86fe40b881069500228fbe52f4b436"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","c7035423147aa252b826807965ba599b"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","9704a7e8ab5b9681e7f0d45587721a68"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","cab7fbd318432adf4da36cd11c677a17"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","5d95bee8d7033e6c403cb6d46d8032db"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","ce0311ce6e06a1a5da2b727ff5092812"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","ec608f1f1f7f26d3e18e9ecc79dbca97"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","68f3850f9cff4847f67ec83f8782dbb8"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","5816ddef80d5908389397b3ca03cdb28"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","90ef7ab2629a3bf0b8f9a1e9bc73cc04"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","3464d69289d7493eb0727feff0a0692d"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","a3b65b482177521c59ac66cb1169cd7b"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","ee54cc63e1862ec5912714c9ff7b1321"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","ac91ab08c07244403096e9451254b716"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","9c28da14b2363313968a66b2d5c90efa"],["C:/lmislm.github.io/public/about/index.html","226bc921492f8a151c896912c356f750"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c4d5e6ca615f674150605827d09ac269"],["C:/lmislm.github.io/public/archives/2016/03/index.html","e204a43ce15cf759a03a82d5e1d46e9c"],["C:/lmislm.github.io/public/archives/2016/index.html","adf748178309a4444e457ba929e5c307"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e6bab406812310957c3ae5da912ee77a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ba2f406a7b9e2d3e27a25e318c033092"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c8be0665abccddc88b5a4cd5e045ac11"],["C:/lmislm.github.io/public/archives/2017/05/index.html","6c247b8410332d4657fdd276c7e2d556"],["C:/lmislm.github.io/public/archives/2017/07/index.html","23a1691e4c499ab2dde221cc8d312084"],["C:/lmislm.github.io/public/archives/2017/index.html","8defae07270d5779ef1096a5ec9e4bc4"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3c88dbbf3b75448a6883e877db4aa4c6"],["C:/lmislm.github.io/public/archives/2018/01/index.html","137bbb17a17f9c36a416b18c1ba03536"],["C:/lmislm.github.io/public/archives/2018/03/index.html","844a5be00ada32f1b6a7591c3f7f79ec"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d9010e44b7759522337b21653ab7cfef"],["C:/lmislm.github.io/public/archives/2018/index.html","4b24e364c87fc3cabd10a17bd11e6f44"],["C:/lmislm.github.io/public/archives/2019/01/index.html","95d5bf9ff794623236cb23c3274eb480"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5f9948f4220e229e801853955e2403c0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","1ebe2262fd8008b563b549d9faa3c753"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","80f66c4467328be2d44c9382aa808a0e"],["C:/lmislm.github.io/public/archives/2019/02/index.html","191b68424daf66b4132a590b93d1fe30"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","5c4f9611ba3acd98840eba944fa30c1a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b7006505fb910e6781bf50f1b943384b"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","1f05aa1931d446b19cd810277c0ca04a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","378664312bf06fab09474477c2b1ebf6"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","0ccfb3c5bc3e1edd50a21828a3e4a2bf"],["C:/lmislm.github.io/public/archives/2019/04/index.html","bedf051ebc71b07f6c0e28ac9f1ddc60"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","20ba99c90e18e76bbe0eb920ed3c95bc"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","95770679f6c45ac218b2750c3436b9ac"],["C:/lmislm.github.io/public/archives/2019/05/index.html","1d993b42269c56b040141ad36e74e4aa"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","63532c17bb0ee63b08c20802645eacd3"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","34e5f6d5f801e563c893639521d6d8f8"],["C:/lmislm.github.io/public/archives/2019/index.html","c909d9bf09d870a306c5791007725a0e"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","c8cab74c89dca802b0a3546575adbf6c"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","cad2b031d2ae00989e1611e6a15770ef"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","304305dce4087d72f82b3d45e2f13be9"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","51f291fff091db14ba737a67fd8df37a"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","584aa27f32b767e098b947b1007dfe14"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","983e7d2b8ffcc69c170b6186d0b67cf8"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","dd80c5e77802edcacd64dd08aa783ab3"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","4db2e1b250959044c4935be01213d5eb"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","51ae3ca6a8ead78b6191d5ffbd93bbbe"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","b649791bcb8661e67b8caa085fc05208"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1fc9b5b67bdce7701ce97f7265bbd059"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","5641e00f127713c81340131b3413b888"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","a0f78ddcf2ba7226e4d4228eb1879cbc"],["C:/lmislm.github.io/public/archives/index.html","78f503bc8d7652b8cc1094325a3397f0"],["C:/lmislm.github.io/public/archives/page/10/index.html","875535e0ed2377bfbc9dba993415bbbf"],["C:/lmislm.github.io/public/archives/page/11/index.html","fcd5e25e2b52ee8f71f395f0aeddf05a"],["C:/lmislm.github.io/public/archives/page/12/index.html","59366ffda6b80b602bc3be6508993fc8"],["C:/lmislm.github.io/public/archives/page/13/index.html","310ffa4d8ea908b8abec6dc4b93715a5"],["C:/lmislm.github.io/public/archives/page/14/index.html","6973516c992a69e29c87ceb58368393a"],["C:/lmislm.github.io/public/archives/page/15/index.html","98737b9f64b4e9f9208958cfe12102a1"],["C:/lmislm.github.io/public/archives/page/16/index.html","d981a0ee060f1ee2482bf63f51d87eb2"],["C:/lmislm.github.io/public/archives/page/17/index.html","3e2374db27688b74ca1fcf09d26c2110"],["C:/lmislm.github.io/public/archives/page/2/index.html","0079d0126818bd4f86ff520d86175d8d"],["C:/lmislm.github.io/public/archives/page/3/index.html","7e7e0b04c026c4b18cf7e10391a88773"],["C:/lmislm.github.io/public/archives/page/4/index.html","be6ab98510798df7bd4a0eb6597a989a"],["C:/lmislm.github.io/public/archives/page/5/index.html","d8706e12de7aa28994549a3bcb647fcb"],["C:/lmislm.github.io/public/archives/page/6/index.html","ef756dd63c96e498b29946a169263879"],["C:/lmislm.github.io/public/archives/page/7/index.html","27d405f630b976f945f0fd0400ef9e5c"],["C:/lmislm.github.io/public/archives/page/8/index.html","dc713ef143401a1a4eb65c36f317a6c6"],["C:/lmislm.github.io/public/archives/page/9/index.html","b3cbc3600caf06594ddabb4a637eb7ab"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","55ef5971c0eddec980764df5bd9f64bb"],["C:/lmislm.github.io/public/categories/index.html","d9113fee8756f3ad02fefb678a5d1ca3"],["C:/lmislm.github.io/public/categories/xx/index.html","f9f1f7c901204233958ffe14155799ea"],["C:/lmislm.github.io/public/categories/学习/index.html","815b55ec61cc61472527969fd6fdb474"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","092f6a94895beeab677a132df6f498e2"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f375967c1042309a43a7bdcc06168858"],["C:/lmislm.github.io/public/categories/工作/index.html","a8a99c6063992b85577d72c34d25888e"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","73acfa07eee8dc0490742e2cab51dfc0"],["C:/lmislm.github.io/public/categories/技术/index.html","365137770fc2d8cef6f5335afa730e56"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","f0c687806142f355ebe274088328e1ad"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","5e575721467797ecb7db36d2486c5208"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","5ecadcc71cc8d59be66a864d29248627"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","170cc26cdf55626466dad91db8c208c6"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","5b4d43e1543ffcf7332f3369ef4ec622"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","fad49964d3deffdad7d83c96a9a2a1f3"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","af711f8ca94dd817af43c2f30ca27706"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6ca09240e41749c1ff8f27198af42166"],["C:/lmislm.github.io/public/categories/生活/index.html","428486edaa5718a88c9b71e27b27b56c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","fcf31d98bd6b5f3e26682086e4ed6c3e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","62c16de664da47f3e97fd023b14878eb"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","cb9741132b775afc9fc01e70c9ec5f9c"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c1d15788e53fec7d53b59a0a7cc7b7d2"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","7ccf41b1712325195900ad74d97a7db3"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","dd2f512cdee25dca3cce819e9c364335"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ccd253919ffa8ef8739ffdef055a9783"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2da7d3a1fbb780730a00ba779efd9d75"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e97a6287a019c8384642b89706009ffd"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","661d383536f14e54a9050df6dedc2b29"],["C:/lmislm.github.io/public/page/11/index.html","225525b0a3d6028bda7ebfc41887fb18"],["C:/lmislm.github.io/public/page/12/index.html","1a697861c244b7e0609cde00f3e42aab"],["C:/lmislm.github.io/public/page/13/index.html","f9dd258d2c96ef59c55dc862765fdea9"],["C:/lmislm.github.io/public/page/14/index.html","e61a00ebc874068c23a063d0a1d682f4"],["C:/lmislm.github.io/public/page/15/index.html","9f87534386de4775c478028741808e48"],["C:/lmislm.github.io/public/page/16/index.html","3c9d35d58bb3e9dc6742d4d53494ca12"],["C:/lmislm.github.io/public/page/17/index.html","3904ae674cad12212bf80a58dc5f2428"],["C:/lmislm.github.io/public/page/2/index.html","b2e9baf8df086c8e3e7e8d1a7d6db005"],["C:/lmislm.github.io/public/page/3/index.html","4a4786a5547fd81af8f26e5a828d6985"],["C:/lmislm.github.io/public/page/4/index.html","3cba3d4d9df2109d0fe06d9d759a1b98"],["C:/lmislm.github.io/public/page/5/index.html","036be59ba00a671a6260a84da0b20099"],["C:/lmislm.github.io/public/page/6/index.html","217aec31407042493663de7030aa6f36"],["C:/lmislm.github.io/public/page/7/index.html","92726310878adc399dd30a7402d35b97"],["C:/lmislm.github.io/public/page/8/index.html","8648d2e697e1adafd7e8d7feb0329c84"],["C:/lmislm.github.io/public/page/9/index.html","f863506b0838aba85a4c2a4656d4a2f3"],["C:/lmislm.github.io/public/tags/Interview/index.html","b416521d96591dfad9f5ac3421fae686"],["C:/lmislm.github.io/public/tags/JS/index.html","cadf356f6df68f8097327bcaee177c64"],["C:/lmislm.github.io/public/tags/acm/index.html","30b9c9995d673910bf7247f7edb42b46"],["C:/lmislm.github.io/public/tags/c/index.html","6dd89db20d4749671ea4439785b45eef"],["C:/lmislm.github.io/public/tags/codewars/index.html","05607b4d832a7fbf914e6ec6ce096f5f"],["C:/lmislm.github.io/public/tags/css/index.html","b48b11a68f84dd1df5e7445c81edace1"],["C:/lmislm.github.io/public/tags/git/index.html","22de3ee0e8d2933ddd4e2b85bace1656"],["C:/lmislm.github.io/public/tags/hexo/index.html","db7bf0916065ef1cda8414f69c2688d8"],["C:/lmislm.github.io/public/tags/index.html","2bb5dc380cfd6cbac77eabc3832347c2"],["C:/lmislm.github.io/public/tags/markdown/index.html","86bee971f48321a3170099dc40a90a18"],["C:/lmislm.github.io/public/tags/poj/index.html","76679a4b531128e494f11a8ffbda4a13"],["C:/lmislm.github.io/public/tags/shell/index.html","fe93e0f89709c4d0bff65a8737263cb5"],["C:/lmislm.github.io/public/tags/vue/index.html","9245e91652c31448f46e15a679fe3239"],["C:/lmislm.github.io/public/tags/xx/index.html","afb3d4ea7cffc245ac3d05c1c071113b"],["C:/lmislm.github.io/public/tags/前端/index.html","00f4c8728287d04b13653566b0572617"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","899f3818c3554e07706e3b7a4f5b3268"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","6aa8a4c320a21fcfb5ec8a96b5fbad33"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","2eea6f06f1dd98816afa1584495e1223"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","8ff06fb0d6aeef024fe07a2be5c3240b"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","77d3c6d9370052a64521b33fdf23b206"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","c08fca69ae43b45df1beddea1e2a7948"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","65ed54760c8e0cbb1b54818443ec6c66"],["C:/lmislm.github.io/public/tags/小技巧/index.html","6cb03ab4083f8aae145118a69b450ce9"],["C:/lmislm.github.io/public/tags/展示/index.html","fabb43be7dcff0db2131f8a97b07c3c8"],["C:/lmislm.github.io/public/tags/工具/index.html","a365ca68e83eedc7d2304401580cf243"],["C:/lmislm.github.io/public/tags/感悟/index.html","5dc9c05d0ee1c054f39c50bc10227bb6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","862159a3472035e07d45545b9cf79fe0"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","84999fa27f71074e8441a186bc99ba37"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","bca5725af5e18dcc93f63d64cd3afd30"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","8028e52ccbb811509f11d3ac2be74655"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","dcc34fa6249eef2a866199713dbc1796"],["C:/lmislm.github.io/public/tags/练习/index.html","270b23d2bea7bbcb8a48eb8ed178387c"],["C:/lmislm.github.io/public/tags/编程/index.html","5391f65256783a878546f691a2b803f7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9a2fb8e002444f8bcd4edcdc8a09df65"],["C:/lmislm.github.io/public/tags/运维/index.html","37f25c319d6ebbccb636fdd1b1768da5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







