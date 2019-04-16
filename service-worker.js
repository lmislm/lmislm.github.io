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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","1944755523615ecb5373b67e63d72042"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cbd332cfad152553c0817c653c473b62"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7b724bf7f1b9e5a0eec13497232ca833"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","491f6c769b88a775720723871a727981"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b342fff73a4619c6f3fc9ad460ed1453"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d513031f85f2ae09eb115e9d340d71b2"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","83666f432ff1278036edfb20609a6458"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","4c8df4a9d64b8a7c9173773cf31a6227"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","1f01518309968c1b9dab2f2a54db06ae"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f2ace71b9526d10bd93cccdb15c9f7de"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0d244fd09a4705d789bd9df723243518"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0d7bbd31c1b1fba61c83ed147aa395c1"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","847863e1062799218a35ccbed1b503c1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","3213d511f5f96b2a6f39f1091e75cc05"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","42440077bc1e872e8008d35d963da4ff"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","4f81146f25647a660789379df0e480b5"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d3bf0a1caf607f18ddde144635e397a9"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","3ce901fdbaea3d0870fd54f3d09edb83"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","ba880842706e6522bc47d6dd65198423"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","457b87d68233444aa98405c0dc2116a7"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4c65940972917d9731c7247791bf6330"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c0e0b0edd243f2412ca34d7b2f9b6869"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","4aefb18cc7d6ee90cbd35aac4ef4c75b"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e0150168d9048eb6279ea11813a4b0a2"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e43905514c7c6749aa08fdaa641e5168"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","08bc1c1ba406ac2b769debbf230aad76"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4893bdf72a110972ce0f34a70c7d84ce"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","38b2455a7d9669c985a69afd7f853e9c"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","112c890e517396289707257c10d89bf0"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","4313182bbe217fe6c117fd8600abc360"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","6302dad0aca68449e3555be32c6faedd"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f924ddb9340f7482b703fe602425f0b0"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","0d5e01af022c58b5d6b3a5642b35dba2"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8b13bdacc78b51233ba4326c5cbffe16"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f472f7dc5b7d923f496e00ff94f8bf8b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2344705f236b0569a5d6570d63221a86"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","e09b9ffcd0efba0b538a2f2fea430d2b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","d4c506a8dbef965b62cd1a04a200a867"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","43425d798a50ceac0231a992335281aa"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a3c2a1564c6e2f3bb71e38f57fdda307"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","11e89fa6e4a350d60ae203262520f29f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","8c035e2920a41dc4a53fab240e7db36e"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","3232bc25f5dac03633958b5c8dd10d80"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b18ffd0753b3d8db04b8cfe61d93159d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","f1bd20324b31148b13fed1e2757ac23b"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c9ce2d1836251d6ef349acfc6ff82a81"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","577979b0407e9d6bd4af030162a316eb"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","80a4ece412e3eef97cb8e721a064d0c2"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","fe142b6752f15adb0b1aaeeadfaa4fd1"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","696ab9bfe0aa711dd434c36fff027eb3"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c3eacd41a0eb00842ede6b3ea947b9c3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d50c711daa5ae4e05723068cd73dff12"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1ae63fc4116feed761b1a2365332ad4b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","43234ecc635795cf55e9cda27233986c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","682e0c7a6f59e12f2eebb43aee53cdd8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","5b4723ec3d682e4c001f9b790a461548"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9e1d0fc82b1045ae9f071dccff499e74"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","f328d05dd28e3c23823d3a123192dc38"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","8c6a5af8564ad332a6441d8dc433d9ed"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3693f57e33b44ad7c2f2ab3222161704"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d049ea601e047b0fb08f4c4b9f58b205"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","9ade47ea51f0c1c6015d23d8ee7593f1"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","efc0d8fca43e7f8928f230807592d296"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","6fd2108e81622bcc9be6e33c09d1752c"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","deb138f12086c4cc0c1cc982fba0c762"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","bee9e5aa8deabee257515b8766b160f5"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","53f0dc81261baa72e3d9cd6182952c80"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","4169f1124133710b7e1f2d74c79fc24a"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c9ff7c37fd5fcbc9752606c6c1eecf55"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","225ff908a53bdde0049d542441e9627e"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","9025f7c419c47bce811a28199d108931"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","d8deee769674b40b86c33192ab09167c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","383259a1f7d248cf3ac623c9fe119912"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","89982357fb2d8da0e8b583838ccaeee9"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","1839413f49724fb859885dfecfaeb408"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","da3c09b14a68a7db218617ac3cca98e0"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","47b9dd819397391dee9455a0c0ad6405"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","45729a64cb3975347dadefcfb30e23ce"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","0f24a43caa4ee581f201e6aea0e3f59b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","60cef7f914477183ac34cb545ab27c49"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","560f93e63b722a52c0112df91012de75"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","1df83b105af2a87d02f933f35a66846d"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","f858fcb347fa0634be8d070e466d9c20"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","f0173c2a0f084cec7d088e43fd2b1337"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","8c15e2a493f7e3f6e2947973f83aa28c"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","acc3f0fcc00679244a9d8a8562b080cd"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","707329ac81afe33aec38241136bdda27"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","4769b763f471d3ae471c25f47c932048"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","d4737da8b1e3a836098f176d632d5d64"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","96a736e33c39ae94120b7ce5bc3149ec"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","459dbc66226eb768873e05798c404f6f"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","64e2f095e88957317e762566867007f5"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","769970005559e78d9c72b24211d2f38b"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","77be64570ceb15ed331cdb0b418530a9"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","c5b60859d07e1574a45dfe07cc72dd37"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","2e6ee299d6a97eb7480a24ac2bbf7e63"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","75915529d6950c1ad185e36cb1627be0"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","58f1ed97e68b4b2dbef4c331ac3d09f3"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","d32cc5fe1939e8afefdfcd322c7f7eff"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","d1289e7aa80f1466fb3e622a96a79379"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","3976ee15f2a40d943c0fa757891935c8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","ac33e05713a69e340e73e8037a093a1e"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","06252e86ca53836416eb81081c159986"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","8ed07f61456172051920199ca92f801d"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","cd1468c4fef2cc81b9eb5d7e54ad17ef"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","fa4cb70515ca892f904a698b1b11698f"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","3734f92e431396f7bfce1eaa2d61469b"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","1aa758dd0c4aafa9a89f882104e7951a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","4199011e6bb45ade7a196dd3ed5fd1e2"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","6f9d683dfe6e8bbcc232290f8823dfb7"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","23384a873b27e76533b82d1a79d3141c"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","decb220e48f2d11464d52961549d0b84"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","a93d6d6836d2488051d95d6eb8858ddf"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","18d8d2b0d7ec3aa78e8a9c39ba4a25c5"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","d8401d16289ec4453091f88ee7ce24d2"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","f989a98a259623883f652ed182b92fc2"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","909ccf94cb04ee850ab3dcc3170cc34d"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","c6c4c142f6dd0be3000762ba9007681c"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","c9c5d2ca5f5a5af399360f75b29e61b5"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","b9dec32dcadd1523960fbef609b502b4"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","ed0c554ad1f6795f07a171493c20a309"],["C:/lmislm.github.io/public/about/index.html","1caa679ddff7028e41f0fbb8753e27c1"],["C:/lmislm.github.io/public/archives/2016/01/index.html","90f62e9ad9c9f5221fe8b0c02820f366"],["C:/lmislm.github.io/public/archives/2016/03/index.html","74da2d650fb0afea3210d11f66ff66c4"],["C:/lmislm.github.io/public/archives/2016/index.html","510c779301acc63e79946ecfee21745e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ed9c66bf266ba5818a5bc3d47c2d1696"],["C:/lmislm.github.io/public/archives/2017/03/index.html","4e3881aacb77ddb48826840f1bdd0b91"],["C:/lmislm.github.io/public/archives/2017/04/index.html","587e078f6d8b40bcf762be32e2536a2e"],["C:/lmislm.github.io/public/archives/2017/05/index.html","39e90be112e1a4380574fcecbae88504"],["C:/lmislm.github.io/public/archives/2017/07/index.html","73b591a656d61684111ea45fc6d570af"],["C:/lmislm.github.io/public/archives/2017/index.html","b9d4ff5a918b9add9bf9e21e7fb933cc"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9ec39e588dbc42b8cc477d36360bd427"],["C:/lmislm.github.io/public/archives/2018/01/index.html","bdca75a936e90d800cc8737ba7cd2a4b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","91f470d485b185a00365f37940e35796"],["C:/lmislm.github.io/public/archives/2018/12/index.html","a9626955aa407baf28778a43f6916cf3"],["C:/lmislm.github.io/public/archives/2018/index.html","7bc61b7e09b2e0cc75c9e502286dcf68"],["C:/lmislm.github.io/public/archives/2019/01/index.html","28fe9e8f39a88e5848c26ca6c1ca3032"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","fe3078e9fa2ae7cab9a336afc5e9f7b9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","6593d531c393d03bb96b867595492694"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","659e2633badddf340f41987c4a43d04f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","1aaf7739eaf13697823ac8f19acfd56f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","6dd2ea57d3fc8bb52440d12fea88f781"],["C:/lmislm.github.io/public/archives/2019/03/index.html","6c7e42b6c652580c10bf249fc3a8dfc4"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e900de5d6e518a54764c7161b1ead94f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","fb53b29f8432bb3e91d1231b3fac5a73"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","bdb56a46cfc5e19771677a98401c99c8"],["C:/lmislm.github.io/public/archives/2019/04/index.html","11228f41c86e5bb5cbbe3f553d81564e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","bce57ecd52108fbbe6dc3fe79f8ea469"],["C:/lmislm.github.io/public/archives/2019/index.html","ced94febcaeb907d1dc7cfc6304d3e20"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","4738dba95414ef2db825c89e533ca0e7"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9ce7036355f39c7dca930cd45df26397"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f37e2aadd85a3e16dc44437093d9c334"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","66f89cd847e8eab8aa6028475aa691e0"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","33eb7b03778a0ac0159933ad71abbc2e"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","eccbb087071ecb5f42f0fd12340639d4"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e0e14e0405c6c7253df692de70ea77a7"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","59cdce384497ba9967caae9839c86681"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","9331b53f7ad57f71e379da3418796a85"],["C:/lmislm.github.io/public/archives/index.html","7832260bed4a3f04869ede90e88e6871"],["C:/lmislm.github.io/public/archives/page/10/index.html","1a74c8dc23cb8a0e4ae8b4e583cbfe02"],["C:/lmislm.github.io/public/archives/page/11/index.html","4918171862b1a779843e71422a5c604a"],["C:/lmislm.github.io/public/archives/page/12/index.html","b013cc6124bdb6da7fe63e68fcb37d83"],["C:/lmislm.github.io/public/archives/page/13/index.html","c4b876f71b4ff5297098c732e8f15f04"],["C:/lmislm.github.io/public/archives/page/2/index.html","59bc7a6da610bc66fcfddf73cb626731"],["C:/lmislm.github.io/public/archives/page/3/index.html","efc0011088084724b4778de34121d6e6"],["C:/lmislm.github.io/public/archives/page/4/index.html","d12532df7a77edd62783bbb0a8b56c8d"],["C:/lmislm.github.io/public/archives/page/5/index.html","50049f253eb6d60195184edeac2f2082"],["C:/lmislm.github.io/public/archives/page/6/index.html","85a16e1c535bc7793bb052dd10ed2861"],["C:/lmislm.github.io/public/archives/page/7/index.html","aae9511b2c3c40c51abe43c1308b3e92"],["C:/lmislm.github.io/public/archives/page/8/index.html","4ada79d6cf541907b5e486490e5a1ad6"],["C:/lmislm.github.io/public/archives/page/9/index.html","33fa6c56f8be17749f81bbde6737fb19"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","26bf85beed0dc6676c35cd710e5fe4e6"],["C:/lmislm.github.io/public/categories/index.html","581a8be35b01320feda4b3952fe40a14"],["C:/lmislm.github.io/public/categories/xx/index.html","da4c71b8cfe55d800c2c432f8709f63c"],["C:/lmislm.github.io/public/categories/学习/index.html","d18d22dca4272478cdbdd99d4075ebce"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","c3d59e347cd7bd8359efabdb551986f6"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c576f4b67a00a72ce7ddf4662a669e51"],["C:/lmislm.github.io/public/categories/工作/index.html","5ed0c8241a4005f31a54b9f1337cf6de"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","4024f845f12b1c450c548efae9d85a5d"],["C:/lmislm.github.io/public/categories/技术/index.html","233982b5efd7fbc2ea7532cb186b12d5"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","a11092d160b17d754f07a74450280f55"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","c56d3fb81df2dec967f7d2d7dfda3e15"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","71914877a3739b40a040a1b59ad02c77"],["C:/lmislm.github.io/public/categories/日常操作/index.html","fc4f4864484fab19542b31717a50e5a4"],["C:/lmislm.github.io/public/categories/生活/index.html","b5f901a0593e372192647903cd8f3c55"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","029ade4c6daf39fe347499b62d1376ae"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","45456c513531fabb4d64aefd6f6d1429"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","8754ee00104abd8491dd73139454d5e2"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","03fcc9d393017c6bad0ac365ff247641"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","96f3f9498fa8a91a38504fd7e3027e90"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","5afc43f073b3f5d45623cf5c64e9d35f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f403b51a9aaf665f4c9b4dc7ec4b705d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","3479830576668ea35f411675911b63c8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ebf3d92a8754e5ef2554ce46aaec81ea"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","a644fa18b3b43de106c94d2f2efcf800"],["C:/lmislm.github.io/public/page/11/index.html","9be4671be3ea474de8765cd8a8b6b01f"],["C:/lmislm.github.io/public/page/12/index.html","80a52ad7f38eadcfedd5eb38ec3ed0ae"],["C:/lmislm.github.io/public/page/13/index.html","3ee9691bdc60354fd631fe620dee6752"],["C:/lmislm.github.io/public/page/2/index.html","7ea9d78e5186b7fe8c1f4d5dacc8bf93"],["C:/lmislm.github.io/public/page/3/index.html","469d2f9c96db77be88301c97ae2a0577"],["C:/lmislm.github.io/public/page/4/index.html","c10d9bab232d681a8bf470d1255d360b"],["C:/lmislm.github.io/public/page/5/index.html","de1655b5fa52c103faeade5f773620fb"],["C:/lmislm.github.io/public/page/6/index.html","f6f366afa81a07efa7f5634e2f596a40"],["C:/lmislm.github.io/public/page/7/index.html","5eae6b8b020a76191b89e77fde18805b"],["C:/lmislm.github.io/public/page/8/index.html","a945a2c9020331c0c17eb1ae51b4e3a2"],["C:/lmislm.github.io/public/page/9/index.html","3cd481162332483e11a72030d1df621d"],["C:/lmislm.github.io/public/tags/Interview/index.html","03beab924545080034a7ba944b248d63"],["C:/lmislm.github.io/public/tags/JS/index.html","3b5caa715079876fc686477e2677b69b"],["C:/lmislm.github.io/public/tags/acm/index.html","cdbbb76a9de3c3b4c22dcf55450b9ae1"],["C:/lmislm.github.io/public/tags/c/index.html","9c7172be8ea5609f7b0b35d880bf8670"],["C:/lmislm.github.io/public/tags/codewars/index.html","f3955cd7245af8eb32adc0b628c0015e"],["C:/lmislm.github.io/public/tags/css/index.html","534566790d52e5f26069daf2d050f3db"],["C:/lmislm.github.io/public/tags/git/index.html","0c5ee6b8f250da695c2f97e0224d51a9"],["C:/lmislm.github.io/public/tags/hexo/index.html","e3cd0ef1bdfa843d1e280966772842cd"],["C:/lmislm.github.io/public/tags/index.html","5095a68b8b9e93f1929a2280942f6b02"],["C:/lmislm.github.io/public/tags/markdown/index.html","08fdde2919bb5d017452ef672ae02b09"],["C:/lmislm.github.io/public/tags/poj/index.html","1b0039a72bfc68f8698d837ab6bd909e"],["C:/lmislm.github.io/public/tags/shell/index.html","64ba4ef70a5d354100590d819a6a732c"],["C:/lmislm.github.io/public/tags/vue/index.html","b8048e73d9303f94d45db705fafa9643"],["C:/lmislm.github.io/public/tags/xx/index.html","09feae8a7dbfe990d52abdd1bf6123b2"],["C:/lmislm.github.io/public/tags/前端/index.html","5bfb7124d23fbfdce6a615b165e0add7"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","6f9bfb0294b89ff0931521c1654d32ce"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","2b611c03f03603ce8c587e30a1cd93be"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","c8d1e215b256979e2f247c3e756a7bed"],["C:/lmislm.github.io/public/tags/小技巧/index.html","dc9642b72e82f5805fd7e3fb102704f4"],["C:/lmislm.github.io/public/tags/展示/index.html","671f6726cbb7a31fbea1ec9a98c7699a"],["C:/lmislm.github.io/public/tags/工具/index.html","091170db9b5e69ff10f4d96d959299fb"],["C:/lmislm.github.io/public/tags/感悟/index.html","0c6114810ce9d4cbfcf3bdab7d135530"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","387244118ac8291b6892149485a9c3cd"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6e1415d26472bc619433d427bf15aacc"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","ee34f28378444416b64a67dd5436ddab"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","9910486ab1d8ac8ba76feed09ba3068e"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","ca16dfc646560d67e649f24c8a8b5220"],["C:/lmislm.github.io/public/tags/练习/index.html","cfb64f3a809d30087836879b411ec66c"],["C:/lmislm.github.io/public/tags/编程/index.html","7cfc9b034a2aaaf3e364fcef7545045b"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0acf675346cd3ffa803280160ee5dd3b"],["C:/lmislm.github.io/public/tags/运维/index.html","ef09de53814ce816ba3420bff4320ed9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







