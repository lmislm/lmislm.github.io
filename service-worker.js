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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b9105a93b0084eb901a693bcc0ace4d7"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","101ae3750e354abbbe7a320b745230ae"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","03e82b9f6b367fea41bf9daaf3dc4193"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2933bd84946bc7ac68799ec44df0764d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","10f82636135333a8f9b6cbc52b327526"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","2d07e8903524e5c7881d072eb3db1f73"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","908d9e104e0c66fe492b176be6254490"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","4df4b0a44f2be9165a082970784e5cdc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","31166c5367d184ab500ba9787456c38d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","f21db61a3981f06a12a2d32383a0be01"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","cf2ae36b9ba7c831ca8c1977388e5e75"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","dd9f907a5dd33a09c4aef7e33560306d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","33917eef43bb775fd5503ee93ee5c255"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8a64b53d469c854b49d0baae0260929e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","f3d78a9371c077127fc2e5f6d2973522"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","2a0111229afd6fb514c5f9e0d553db4b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","7a8129511474116a2f249aabe8c8e775"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f06c859c729c2c9b5519d8ed9859575c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","02fb9e2fe113bec38248000a4fb499f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","ac9c00eeaed53972b6e0922bf7bfb706"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","2a7e7bf441e712ba7b1282e85cb52e26"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3399a217e5d35f8dd616253113496232"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ef3949392ebee8e08485dfc1de949620"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f7d25457f8c2c84442e298341c658961"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c8d5cd236997e221d954b5d7b7420617"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ad620258ed58b0601af6aa09a638a67d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","33fbfed44a0695b8a766014f283ea7d9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ca409074b8928488d1bd5cc2406f9438"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d6a709db2fc79d3d9d4d25dffe21c8e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","edca7881ab8e26f429bf7f7a5cab6a4f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","c1760798e24b06701597b7224ca2b07a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2707091e612a19dde72e48bb7a31a090"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","ff0fc80db7256334fa49358ab2106c82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c4faf5b6a2b877c48327dfa8282bbec8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","46f98654a1c1c0ceb38ca43879145869"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5426cafc71517238eded629567160519"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","eb6eaf9df45bed1dbb3aa388929d0120"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","b9ab1d322c699a0a1862acb0ac839763"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","4c2b1dd7c84286c3bf02d6008e5bd0cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","586ae3cb80373d97a932e102b2c807b4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2e9f485ffb51f62286c834d6b1e3be3b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","efd530c52afa2d57c0d416f3b380474b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","372295bb20557ef6aa4523e1ef7a1f7b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","8dbe9109005123834b075cede26e15a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","7bdcb1911c406f902fdd2982fbb7d4be"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2c2e3388b656a71de1ce22a19030717e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f0491e155d9689df59b51a9454201ee3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e7b78fa028b83b0a1662955f9284be75"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","a4872358cc1e9319e1d066580058470f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","ae6b167e7f18cd983c168bc4b6b36928"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","6e93f7688f4304bc3dda69e8e675e938"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","158f67087b7d816c6a8b46b809c510ee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f593a34eeb66be7160f467b100703032"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","8aec44e7bc4a5afd0bfe749dda464d77"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ca522839a56ae629b2d734db1fe5dad0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0a8868e0fa28bd3f1aa0b51862e42fea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","83090bc7af4fb3d935e7e32cd903bf52"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","2ab923d12c0ff294d6734fd628db9963"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","aafe339f56dc2834bb55f5c3b0b63c68"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","7ddc230647478a219b4e689ecb3c80b1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","8133be54a1e5e64fbff046f43d5ea3f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","5bcafa95289ae129a988cdb46107e426"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","d3f65dc2e69c5b86acdbff9ae1add214"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","bcdf8f23726596582ef72f821b9b2dbc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","5ad893cfc77f364e060487935bc2f682"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","791eb48cfb5ca31c56c547a5f536bba9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","152e6dea3fa952d14b65c9efef25efba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","8f0c6d70075756e08c921b4667a7c071"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","f4d5d8a413dc27c085ad4502cc7423a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","3d177dc0d5b17dfe3d0f7ca409690914"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","b4773683bf81b27299abdc3d45692715"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","302ff8ca8b889babdf4f5b8ce0f0a63d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","5c93c12bff6f9fcbe8f82e5286971150"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","10b699cf8cc4aee3dfcd0a55b3a7f088"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","42fbc37f6d2f12b2bf51ab3cf26f585c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","8b2708724bdcd5fd2c2373ac2249813c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","909e20031bb14ae16654519b02c47a71"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","8d9c2363bb302dab425b81522a746963"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","cffcd7ddd97c1e202cf7db390506e43a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","2db2284512bf7e69080f8b72f76a2a0d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","ee472d192de5d8edf682004ce2b1e9e5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","a1eef647b74735d4108712c2d41fc81c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","c5bab61beb355ea5c1055d3c4d6d2134"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/05/2019-07-05/index.html","0f5d02ae44032bb0f3dbbedee2a1b96b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/06/2019-07-06/index.html","81b4933614a5c040f609f6ea8ecec6ac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/07/2019-07-07/index.html","568c59b6bfcebd2fd67bf5997425fdc7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/08/2019-07-08/index.html","3708eb7cbc90164f58f66c1f7d0ceff0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/09/2019-07-09/index.html","e209652705837c8f7ef90f3ed37cf724"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","dd4bce208167b433cc33d26edeedf1cf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","b35ae63356b71d05a8d8e64635a02826"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","404a460e930783c8554293548d097682"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","38d0adbac35124c21e3654bb8f0bcfcd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","cc8c1edf382c623b786792e78b22ffb2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","bf03b444448c574c8511e5c5f13b187c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","0f3937ee9d7215c58e5260fee36191ef"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","fdb133103fb786ce63a8ed726be1ceda"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","b845e8bd035e5126b1317e4f6a04721b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","42f2feb21dd25bea3e99a9f2715f041a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","dfb4fb08952fea114e94eb400db6216c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","34bfa8015470f61bf64fc55633e17463"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","4eac5e170a5f50f6b08c0004d39bd665"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","dd74169d8d8c0ea5db827973fcabe467"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","d707f6fe2bbd3a955946473258a46e54"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","e396888442650a77978af4a296e037bb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","75e2fd6654a7ceca7e16217a20233d86"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","1516001efabc84c4ebf480405df74f0f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","0a46a83714f7be21a29f4ff65970a170"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","0c0495ef16dda6fc0b5dcb4cf916d656"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","d3c68281dc37354d6bced0feb1b6bacd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","35059d468febb774fd0ed7f172a81fcb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","e65474515596b0e5806167a222affdca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","5a661cd12b1adfe0dcb19e1f0cd41ef3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","41678cf7b8c6d3158b668371b08f7484"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","6489edc19b38583db176ebb4618114e6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","67b311cadf280e06beb26449f7a99d3d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","840788621e82444a36e76fb87819153f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","e5f9d87cd0e1e4ac03144d77423ad967"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","ef06d0ea87a2e75677ad9f1bbb27d373"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","c25ae8afbac2dfdb1f9d5769b294362f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","b23e961b00869465b03fcb2a71bfeea7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","5ffb7dc07104f959e5deb992ef38f47f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","00872a78a3945711058d9878713b1d90"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","01d7b345750518ec067baed7f3d492e4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","98cc9bc7b082791f7d62d4d7c831ae24"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","97be6667e6af6d668253f03ac31a6db3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","2b0a59587eb0bc8a439cbc25a68cd62a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","76b568ad781ebe93928de7cfa8553add"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","7d15ee8b7e443bc375a45dc541cc1596"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d248085fcf504c37f8cd9870f4bffea6"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","17a57bad7ea88244e4f42ce4f94fe845"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","b330845e14c9efea5d19dc5f24a412d4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","6030d15d69690efada05a2563ab31308"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","8c5b2d354af3cf7ad1b478e5312df395"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","b74db6f2d88461e63b8d3c0164359bcb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","be26a432d60e6a66103eab963b0e6426"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","c23f0ef5065fd0ed255514916da71201"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","47f8eac4a4d6029412c1712cfe2e1eab"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","8839cbbc77466012024efcacaa6d7f82"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/4/index.html","89cd276f1fdf9807fe59c57e395beaaa"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","22b6b846afac9535c2e1eda816e1d97a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","ef62a7e9231c4475a9a77c3e56858de7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","262cee548c046ff6afd851150fcb79cd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","022ccec188e777fc3389260c6ec43ef8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","2b6307c4941b9b7c1418aaf3c3c7eb0e"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","4a63f2a1b11e9a7a657796819ca59d9f"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","e606a21ac675e6f98c129c02628b53c0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","d93c81959621c03f0b0e4253a29507f2"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","d89bb91c6c4ee47a6f9b6b3c6e4231dd"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","d67c9eeeef78d68f3c6807667b4fb12c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","3dc6954b464c231670d5b99eb43390c4"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","5f92c25037b6b0da73853e8e34046383"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","93b464f37bc59f5ca6dfc021873b7184"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","09f5cf6052c9a417f861a335c6617637"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","8ccdc7cd332e82435eb3ce0de5fe55a7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","e758ccd4886409ac16e9bf1d1af67c84"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","5267501c494d7945d07cb1d63e2c626f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","cbece5c8e2ba37ee3bb61d78ab1398e7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","c77975d842199e64e23054abd343c556"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","4ded512513f7a5d062bde09bbe349a9c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","b4c945a073b7b7bd50e849a08cd6e999"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","2f1d1198d9a1349b645bdfeaecde6c1f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","357bf9d8a3f749063a22d521d92f7c0e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","ca655c4a072781aef9c9103e75c181e6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","a5a6ed3b6b61276b5df660da68f15192"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","1acbaa1fdf7e191e5f8db96ca41aad0c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","610ff7ff4f37557319855e7e45ff651f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","82dff99d6ae7ca59ba943c2e184fda29"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","cb07a9d287293fff8efbc6a35d56a397"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","f459c197b84f838bbb86cb24b64262d1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","fc2495dddbd891177dca526de2b9aa86"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","ab72b4fc90f84b554d2fa3de519246d5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","3077958e551ef056f03c032683322f11"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","4b69bc810fef9139eb895bee53273a93"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","d4c79851351b66342481909c030b1a00"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","8fcdba77aa77ed1484d57b2322f277e6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","e5357ab945ced1991f84800eb9681096"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","7f4a611d7d1900ececb57f7005ae3d74"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","ba65f6864900af982bb3052b81b36225"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","edc1a0e3214e04698bdbc02bc8554e04"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","3abc41b8dcbaec132ae49afeedfb505c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","773af68d29979c97cabfee8554b53948"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







