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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f401cac933395d9be520e00036092f3f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","21869e8269a05d2e0c6413732a223f2f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","edf44c1ae27a5bcd15bd58592b1fd357"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d6671cd9f7913bf3186a3476fc482dd9"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","491c6ab71ccb662d2dd8ce2caf1ef6aa"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","324c49a4482f9e9a337ee332737fc6d3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7d8cfa9f9de562453a06f7019099ff09"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","cef63d1e7babbcd818c58f2204a61b9a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","2a94127591cd0736de89fc30c9fbacad"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e5e82ea1629ef1f504211af7aac6818d"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","77ca336f7051d09384b58738cd43cf58"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","2f5b2ab2ab669efa3ca5b976deb9648e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d48a48c2cf7e04fd52e0494b30142549"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","520778293e39d1e06af542e69c55078e"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","586f85c780c995b0a64f26c40fd1855e"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","aa6edc53a586bb48383f3922dff00af1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","857366161279db98ec8efcf545358838"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","664cc9650b25fe5cb42cfa6e6b9c0f2b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2375e8bbcfd69303a78d2780114bcf65"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8dc2071a9c7b9fb11dae283e0e47524b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","95443fc7de63503ca0a737be9986815f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","86e89aae7ee7a0d2976e43c07bc571d7"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","d6343a78dc63cddcd0af9815ef74a9dd"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","819c379179b7a08719a4337c1e9aa2ed"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9189f7e25614fbaf9ff0c70f49c87200"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a0bb87c833ea02467e5abbb571c64fbd"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f1d3f419d38ff449b451c8d5e1ad9250"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d5c6de8415210801d0cc92c789578778"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","38b1dd51210c199adc518d6c2c51d181"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a2ef4d86a886eac555655f7cd89bf46b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","be490f0de67acc50993e5fa917f0faa4"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","c1435cf397b07f775c47bd3ae8e994e7"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f0a75f46bca9fc03c8484e9a08b5d547"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","7d9a8fe3584b2493763a98393986bfe7"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5e32dc1a497c9f99c01f00abcd09af1b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","abb978893265a2ce7d6f1c0c8f5d1a00"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","2b968ea6e0ca1a7936d9087b041960d4"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","519f5dd2e18183f68ef6713d41e77aed"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f713c6bce7761ecf8b20c8487f07e7c1"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3e0b17db5e8d579a8d30c7102837f279"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","d61a35a3c66f2d1cbe67bb3320e07d26"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","3e4b851e9675c12339a4db6b9d1f56ff"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","45f412090b5d4b33cc57479b99874b81"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","9b055bb6cb2ea66200f8499f8e3f2869"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","75c884d9f35ee40cfb6375bab7943609"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","b4b9849116b50d5b1a9add6ce27a0251"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6a9422de3270b7aac7fe0d96d80b0cc4"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a2f0e0e4a3b545c559aa06a38328dd18"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ac3ab1a03a230dea99b17a91bf1e505f"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","c0e3c7c30226e33057c4876cc092c796"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","8b82158a38a44a295b8d233680728fe1"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","1dcb5e542f9ba264c435506a93ae0390"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","2ee7362e2ce2aae15ea9891de6672479"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e6047a1f41d2959aa0328c5c63bf60e9"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6c666d715971795b62ce07151304e366"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8d529b888625845286ff5e964e12effa"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","3194e04d4f824a5ff4db958884991b0c"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","bf10538b2edd48f1d61e24d8327ef2e6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","86b9403981ddc2c0bb43ba5ea1ec79de"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","5d0f5abd0b8493841ca7088baba92338"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","0689a9ac0bd81de4892362814604e7c9"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","9535ff790e414100c71ac45e0d930e02"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","44a8599306b6050c663bc8c5d8884d28"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","a03bd210cd36d23920919e2291dee074"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","16259276aa0a017c5b2e6d3dab4c1b19"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","7229882f7fdc0264ad24fa5e3a9c0d9e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","16c80eee634c892f10cbff11fe5ea18f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","61f47bd04a88ec9ae518a2b5b3c75f5e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","e7083ed723d7ed7f54fb4d59bdba577c"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1839e004291286a527576e33ca4561d6"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","3f998128af2b227de5b4ebd7412cc587"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","bb1a6155bee413a2a826b922cd8feda1"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","f79f94a36d4b84b253a666874e2f7e91"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","df5cf581c90d55591deb1d95ab3c0ecd"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","69974ad62424bdc4675f1ca8bb12fd81"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0ea4fbaacabbc3a84a594ddd560df2b4"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","90dcfc73856caf406425629ce98b69c3"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","cbc4fd81c35b560c1d27cad0f7efc2b2"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","412192f4180b3236b3ec8d5d73b1ca32"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","3a7a904cfaccf24107f17e0dc00dc857"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","9df59ccfb155214cfd88e376a2a34a2a"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5eede04a97dcd7a57bdb7b0bdd40f52e"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","6e1821fac5e6d4dc7a6d17990b960e5b"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","bf261faaab4bc6f51b9e4f5ec933c7b4"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","5dcdfdbb2683c1daaef18db091289343"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d2de728d2b63a53224fa31ac2e13a839"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","55f91a25d48e4f6dbc10b9401aba306e"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","12a71f48490ddb81fb255b356e9c5a6a"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","45e9a9bb5bbe6c8af7506eac989075f7"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","dba0f72cd3098d93cc1549b06b166a35"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","147357edc908939f507190158efdc2b8"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","b1e2a9ae9e43e3c1427e70decf6860df"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","ee7712a8e52d9d2cc8acd5afe132b0c0"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f6a986f9133b0118832fce5e57c46aa4"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","4c8f3faf373560c583cf053169a70bcd"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","daa2800623d323ed33b281c09e67f65d"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","e3fe0ae64408e89e154de111c626584b"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","d83f729a762b9bb2d433f31d8c130701"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","34ec9cf4a032921defbb7ea6148b089b"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","60c022876a12f39f448be91f16a03142"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","0ccc0c6a3671fd5e84e4c253450e51e8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","77c79d85679beea247f0fd2eb0dc1484"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","ee9a75ecedf47a1f01666d2789965fbf"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","e7836ab56ab34b41bdff6b985d8edba9"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d7f5fe403eb6588bf82fa5548097cc8f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","1ae287ce8e337a409292bd5fa3954ec3"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b0dff55e3b928a46ea14f2ffcbff5226"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","70ebbb08fc1b180420104d966ed6b7f7"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","6ccfc2896d3b3eb23705da8759e89394"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","befd2199df7479bcf647d5a480f75317"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","995d26fa427b66e77d9a0ed94204e500"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","e7963346e5dc81dcc435ea45e5f3a7d4"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","0be5e19bd848f6bb88acdd477f779746"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","da74251a6355c96578c9acab599f6086"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","55a8b2f071381715354dbfa089c4925e"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","a8bec2b1fcb5b8a02b93996fef84b189"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","28cb106399d05401b066a967fa9adff7"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","9dc287cee8ab216fc41854e0dc4b7db8"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","81542187cef2902ca8fbc92c484b72e1"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","5914c51efea5e0d1ffc56b82dcb03cf1"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","d720fa55af35e04ff6b7849779b9b33c"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","d4caabaf1c5ca7dcb8cd754d659c6f5e"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","bc41ea770a515cd47d0de856448db5ae"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","35614408739149584f674dfce1ed0117"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","b4a14d59d36e18860df9e362be6837bd"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","c7200fa020b589ef29e4bf88e4095597"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","cd2e8b1b32a2dfe8afa7584c42cb17e9"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","685fce577d669ee53d442706d17363bf"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","18a8dc57d61c1519473a297e99528d1d"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","0c86e1e044256599437e0f6f560f25e0"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","c93a4da51ed5ce13ad72dbb650bbfd7e"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","9da964f2414ffa74e1186690fbd6aa70"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","8e40919fbff199a74c291c3ebb9cf26b"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","daf90aa4948b826324f518d75b82e684"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","302140257b66a4dd506b96270aa92ecd"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","5a40d353bb9b0e4c6a88396a2754840b"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","7444b46a3050fbe80f0e75d16d422122"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","998aeff1cf1ec05f0f0a98a0e10a3bff"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","fd1757c4bf1cf820c2ff63d32a9ace67"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","f9642549ce2f89e11db0050e86504a8f"],["C:/lmislm.github.io/public/about/index.html","68251b59653c9581f5298791cad6e172"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ec33717b034af23a4cbade251cf83415"],["C:/lmislm.github.io/public/archives/2016/03/index.html","6c1d85f9e82889da6d999e873d0f7420"],["C:/lmislm.github.io/public/archives/2016/index.html","a3b791614eda6dfa8485d64ee0f0d3cd"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e82e5863e4d52f5f72b89a602f317704"],["C:/lmislm.github.io/public/archives/2017/03/index.html","c0a5696932cff4f39c817b84782751da"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d34285fd84d3c67921b28f88f11fb152"],["C:/lmislm.github.io/public/archives/2017/05/index.html","069c512e5b153e0ba1e09f764ea267cf"],["C:/lmislm.github.io/public/archives/2017/07/index.html","1a5f2b2facbccca8cf4b27e7bc34a410"],["C:/lmislm.github.io/public/archives/2017/index.html","5c70f0ab8c953a6ae4cb4a455565843e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","2eea6f4fb330448cb2b160abf7e5903f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b7f219a4ca98adbdd3af739746ff7a15"],["C:/lmislm.github.io/public/archives/2018/03/index.html","0527fcc16efdf9e082d4388fafe9e99a"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9df0f63d88f3ab75134d96bb78e16481"],["C:/lmislm.github.io/public/archives/2018/index.html","3751073f9e6b8c37e9d34944d6f9e8d9"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4fa88b35c39afa68551a60a0670edf78"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8cc7c89b3c8042dd8bd271e7e18f3713"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","7a16e7c6949f8b41b9275b8a7c7a3a8d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","5ef0bc3c6ab5dfa5498acfc8186545ae"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d122572504e78e1ea0bcf64dd70a8e4f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","82992f8d062c56ced1a5cc8da3bd559a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","aebd7ab39e59bad41801ea17630984c8"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","4196730279792df1511efb77b2ffef3e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","f9e413e4289976b1effd5ce8e1752039"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","7b00a2094d8569d3d03debe02d2a52b5"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b4005a87bb33ffbcffece6a449ef0e90"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","b4780049619ca90a635c1a5416471adf"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","e8edc8c40f9a3e6fe5b5ae82340e97b7"],["C:/lmislm.github.io/public/archives/2019/05/index.html","c455caa815cab4e6a2cdbf027c638b03"],["C:/lmislm.github.io/public/archives/2019/index.html","dae87e5d53d020a8aec67b35853e4fe3"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","0febbc7ab21cd2dc0f95e145affc55f6"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","6bbe88c0b751f6d7eac90f1529a24085"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","d6d27caf0bcb654d63ca0d73c577a194"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2d9eff3dd53349547e4d1bc5a0c1e0a3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","a1b9e88666a3349b3a1135f96b22e429"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","39f6f1d3884845c6a6ffcc6a0deec5e7"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","5c76515ae25695d3e59eb0faa7ae93a1"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d642e3311d2fcb0eb501aca8832da0de"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8cdcee9d913b86480a4bb99352c2c5e2"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","7d5636249ae4276e221a90c4dabf613c"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","5b44b66b71feaa04b8ef79ba3939f6d7"],["C:/lmislm.github.io/public/archives/index.html","174450fcdb260a5cee75d6a52423244d"],["C:/lmislm.github.io/public/archives/page/10/index.html","f30a3d16490cd5ac10aeaebd79187abd"],["C:/lmislm.github.io/public/archives/page/11/index.html","b9f6e75c0bc0e1777ff957c809d69bfa"],["C:/lmislm.github.io/public/archives/page/12/index.html","ef82c3cdd620830475cdc1e05b46f739"],["C:/lmislm.github.io/public/archives/page/13/index.html","1bf392b5a3b0e1d8c3f10a15d08996a8"],["C:/lmislm.github.io/public/archives/page/14/index.html","69df92d979841498686ea188e9bec8f3"],["C:/lmislm.github.io/public/archives/page/2/index.html","17066cc90f67e0c313dea3ce137976b7"],["C:/lmislm.github.io/public/archives/page/3/index.html","a037f16ad230711ecd7a134f533a2f1a"],["C:/lmislm.github.io/public/archives/page/4/index.html","d4f1a7b1dae8ee99104012aa69691796"],["C:/lmislm.github.io/public/archives/page/5/index.html","d3ed54cfb0186ad7c1d2e928d1b91bd1"],["C:/lmislm.github.io/public/archives/page/6/index.html","edca9624c9a517a0cc3eace54f49b09b"],["C:/lmislm.github.io/public/archives/page/7/index.html","927fdeae6d694e5a4fecddd09a5c6991"],["C:/lmislm.github.io/public/archives/page/8/index.html","023244b22e8973100400ccf628c0de72"],["C:/lmislm.github.io/public/archives/page/9/index.html","d9a89950ecd0089d2b1e35687d0601f7"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","a86529cdb0bdcd37c81ceabe24ab0112"],["C:/lmislm.github.io/public/categories/index.html","7a48646e76563a7c93c0bfba08b7a2cd"],["C:/lmislm.github.io/public/categories/xx/index.html","8297a2af359ceb36f3bb7cc2720f7d22"],["C:/lmislm.github.io/public/categories/学习/index.html","7b545b51e3ac6b73cfb28abe1eae02ec"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","e7c58e24e39b9ae127da9a724f3e50da"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ca1ac937e55a1dd2890ff996192597bf"],["C:/lmislm.github.io/public/categories/工作/index.html","1938f3cc1421ce6baa9846ccf36851ef"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ca0700fe9b8f8c4d1c1fd1cb28d65b22"],["C:/lmislm.github.io/public/categories/技术/index.html","089c39ca727df51445425a50a54a0b19"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","01c1d024d20f28237b83f2d4553e98f5"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","ae18ed12a4b2acb2704922e3f09bfb4d"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","df8acf2e59add858b083d1bb58a04630"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","600150201527b50177a195dcb17d679f"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","f1bcf189f380b2d2eec3bfb7fee09486"],["C:/lmislm.github.io/public/categories/日常操作/index.html","2272d951659e654932731cd35d9cdaa4"],["C:/lmislm.github.io/public/categories/生活/index.html","c12a59c344cd66d88ca796bf36de9142"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","80a782ba88f040bfe4ecc77f1e041e36"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f36e3c3a4aabfe78164b0ee8ef576330"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","374370c294e59db8ac6d01d37c06db30"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","cb4c6b11f1ee9532b9d6272495d30022"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","1407097506ea2fb243830166a1fdaff2"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","56549df6e3c08fe5eb1e3a0ef89918fe"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","b72e9ed08ecae7a95077521c2cf73e16"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","49225424fdae0ab39a1fe0c60e11596b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","1a29434b9ffb86e28d81759a1ee5ee1f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","394872667875a2d937619e8502ac8f00"],["C:/lmislm.github.io/public/page/11/index.html","38ce30d6ab0dcdad615107609b0752da"],["C:/lmislm.github.io/public/page/12/index.html","a0abe136e24031d4261272cd652c727f"],["C:/lmislm.github.io/public/page/13/index.html","695bacfb5b0a727dc475217556c0c41b"],["C:/lmislm.github.io/public/page/14/index.html","be553286f8fa8a5eca370c420ca91ac7"],["C:/lmislm.github.io/public/page/2/index.html","82fd99f6d46dfca2e3c5bcf19c584721"],["C:/lmislm.github.io/public/page/3/index.html","a8afa6fe5fd70bf2699619ac7fcf6098"],["C:/lmislm.github.io/public/page/4/index.html","817b8083c3ccf8d900a111e902a632d0"],["C:/lmislm.github.io/public/page/5/index.html","c6f64684682c60f6fcf0b510bb4cd780"],["C:/lmislm.github.io/public/page/6/index.html","7ea5334106e5a18368b5741165f90cc9"],["C:/lmislm.github.io/public/page/7/index.html","f5999df63f83d8f13f6c3ca9889f2ed9"],["C:/lmislm.github.io/public/page/8/index.html","9ebd05058a249632b89b8bfaae427db0"],["C:/lmislm.github.io/public/page/9/index.html","54efbdd46ae6389886a54d8c938058c1"],["C:/lmislm.github.io/public/tags/Interview/index.html","c0bf4756374163fd2624630adac6be60"],["C:/lmislm.github.io/public/tags/JS/index.html","396c8a4e62820010113b63fa413d7c58"],["C:/lmislm.github.io/public/tags/acm/index.html","287542f344fecc93197f6446d93de26d"],["C:/lmislm.github.io/public/tags/c/index.html","97828b22fa4f3b360829b18d8a81f278"],["C:/lmislm.github.io/public/tags/codewars/index.html","fc984c3a79433a7eee38f5970ad74d8f"],["C:/lmislm.github.io/public/tags/css/index.html","849117f3f09ef608bb3b5289c023d095"],["C:/lmislm.github.io/public/tags/git/index.html","682c860b5093c463ea8aac0018daaed0"],["C:/lmislm.github.io/public/tags/hexo/index.html","84d3b9b47f87e3c6ff3b4339a8473119"],["C:/lmislm.github.io/public/tags/index.html","f8dd2e7a4e3c604267d906d1685b37d9"],["C:/lmislm.github.io/public/tags/markdown/index.html","24006d98d631ab16e390bc9303dd28f2"],["C:/lmislm.github.io/public/tags/poj/index.html","dbdedf71a45fa19fff00cc343b6123df"],["C:/lmislm.github.io/public/tags/shell/index.html","a309b1452583f2e4409958737657b688"],["C:/lmislm.github.io/public/tags/vue/index.html","6465b19749eacc452d78a0cc004a5705"],["C:/lmislm.github.io/public/tags/xx/index.html","0ba5a53137b36cccdbc7d949b37c56de"],["C:/lmislm.github.io/public/tags/前端/index.html","dcc04372bb26cbdf4037226e4b985c17"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","92cfef27fd6e23c3bb1afb775cf3ab9b"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","f576de46fef3c50ce5038db31f9fe0ec"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","3606bc4e54435c6bedb139f6eddc453f"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","213d7c1b101121ed6b36b34e94a91e81"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","79d8f647e4c04e3c42b5f0b199714d4e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","da4f3d5cf5067bc548232f2c4a6d48c7"],["C:/lmislm.github.io/public/tags/展示/index.html","83caa9efb7ec69cdf0de9c3db26b304e"],["C:/lmislm.github.io/public/tags/工具/index.html","f70a46dc5d00de340f5948a2de785a59"],["C:/lmislm.github.io/public/tags/感悟/index.html","82ccb488841a95c7a537570d33203990"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","765e68588027716722dc12c8ce503411"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","a7260a3364372008dbb2ec27b5d767f3"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","caf9e0df2459dc11b32018391cbc84fd"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f08161250950d9bbadcc15bdaf5109ff"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","53149ca7c1ffae7d9ad9437b521e9483"],["C:/lmislm.github.io/public/tags/练习/index.html","d9513f00b7bbf937b86e6a07dc41aff8"],["C:/lmislm.github.io/public/tags/编程/index.html","a000e5497f4ed20b49f5d891d8d8dcda"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e314ce141ea97af32df12371daf5dcb3"],["C:/lmislm.github.io/public/tags/运维/index.html","bc150bdd0f62b9d4df65aab229589ccb"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







