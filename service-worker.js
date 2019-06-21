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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b55c7ae279639927f973aecff30df9fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f1cc684a131be1472cf4a91ad28d1962"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b67b0498021fbc87e98fd1297a61ab44"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","68af36abdf8c58cdfbcbd17f14f5ab79"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","069041fd911a207e70cfe64f6b7c5fda"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","2e9e6694e96b2dcb1813eb0fd6df531b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","1bd015d346853583be77101abb890594"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","302ec61f11b61f645fc8b8a643e59372"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","8dfe38002ff54ba3a9f1a7c2a84eea96"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","04b52c39ffae7c7346983f6eb636f61e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d6c668a2cff021e92552ecafd717c31d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","c3a09358eca61a280d64a97b6a7368df"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2492eb7d5c230d62de24ef703fb942a1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","0388729d87a9ef82ba74d5adcdf2ba8b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","98486eb8778b553d36c3a6267f7e2f87"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","a9b4d96f635488698ddeb3a19a8da921"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","b80edae1387ff8f68a77c047b9a6ee26"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","21fa3dffec8152f3d2939903745215b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","17e15ab061c4e63b9b60f0f0e3f0d0cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","2d70720047cef9cf12bd05fc06f6a621"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","a8ccddfd673653d03914d8c0bf3a8fbc"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c9ce5bf8e9462073ab376bb1f8ee4a1e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","5e75ff230991f7f32613531bec83d256"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8cc2f88e82034c94b04116ce84be171b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bcf5ccdc931307cd80e874197c79a352"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","603da100bf62b65b740b4d41cdce03b7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","7a20f1d69291fc75ddec7c8e1d5c15dc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","125fd7118b3dac7fa8b547e693462793"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","223954f371b16b4d309ab27f393d5ad0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","c6241f4a9cdcb230c18ade8d51c0eab6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","bc27baea3fe2947e2d524ef5aec26b5b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9c835cb323b0bed9e1186a7bf788e098"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","a7c85652bd5b38ca2d5c9b11930f4199"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","20a8e366388912b777b0243556067a66"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","e18ffdbbfae18fc61e2bb38b86cd6958"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","dc9e53b7e282945a80efcea59c3d9e2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","998ba99af24cb956a416caba6984cdb7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a403d8b6e4d05415e5db112cb4ed5b00"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","de6b3767dc9d4f0824060b5873113e4c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b51237088e5cd8cb4c45b80163fd923c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","62ee1d8178edced7fe892f6dd039c933"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","372d4875aef97cc01978d3c9bb9b7a18"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2d2d73077edf155dd3ac2506da22add4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","221958e81978f1f490c59866d2447872"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ae3f02210602c9737bfe6061ed97901b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","53f021e0b07990b8f45e394736acc957"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","cf7527ca9bbd704bb79ff8500d103b0b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","5430420bfe57d5db3fefc0fb9c1dbaef"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7093367960ba9af0bf6d6a13b21e7068"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","495e5fc70df1ccd26bece5c0b9c087a8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","739556d44d037fe220c9bc70a8cfe9fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","8bf8327ed69621bdec25ef8e383fb07e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","fdb16fc0225f5d776ef3b693db8293fa"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","2dd1ff59a6dccaa6fd15e464eed01e5f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","9c72d9d3f4f912ce04b487d342d8e613"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","12d80b5f7e4917cf68c50257f4cd2528"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","baee5366db8f938bc5dc76cb25a63f1a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d60809c01efb29bfb2501004ba2bddc1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","cf0593459e8703ddb0395148124332d7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","d22b73fecdd48dc4f45f7d259aa45fe5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","857727bd543fd1dc5d959df196cc6240"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","9a98de1264c5e7cc3a80b95a6c4f701b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","962e2352b23956b3a1f720dda8cf78af"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","7715bda18c89dc693eda4368acf99dee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","049dc154a6096e48a984836e5dee71de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","52be7632e0698cff73afbfbdc7f6a6ea"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","d246abb31ef2d47227a856342167ab16"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","ce501b1286c1d23423826bb63091b791"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","240486adc3b92548214868c02d7caebc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","ab25a5aa89c798d3d5ecfa2ac2fca435"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","8c6f7239efa4f36c0a98e6a39ddc3e9a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","fae0917d1640791f3d533d01a7a8d68a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","74e49636efb57321a1fdcddad5e091f4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","64dc7712e3166e97be514e72ae762683"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","7fefc936063dde0e969bce91c6c7e7e6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","666e0308a0d6d959a8b0f1bd1ecd1fe3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","45e96cb203b181fd983ed75fb6d29021"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","c456bf6e10e54e0db30c8019f7e8830d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","ab2371d086c05fca8cce8b910f4c9785"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","4ed105f354f3df8559bac2f6eba5e098"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","a61e88b809af1e365385386dbb10e5e4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","be75d0096fd82fef9f489278e0fcdad3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","ddc069d573cb25f685d6a83f37ab9ff9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","e5be9475c109f9a4e8940bccc70f8ed6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","bb2f06a9ba69540140953652c1319727"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","eac57333f1aa55890941711d3ba2be71"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","1f460b9b86cfb3f5af6cb5e53cbef668"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","9516c6981ce1440c759452631e5cf426"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","911a655c63530482e3acd11ce1d2aeb7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","ae2d27857a3d8ae9aeb136f6fb29b2d2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","65d667bfba387e4f776c1f98d526d505"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","54ed819b3d70fdb34a5f3e8b6703ff3e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","f46f906ff9a272b699acf74b8e6db4d8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","447291a6ad70897f6572047963c35084"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","9d3615c2567acbfe9dc6f58b4fa2337b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","1bf9e389e16f777ca4c4bf8883566676"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","ae8b9a3456d222e9371ec43364471476"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","59d01dfce9f2888f7f5148bd4f801dd3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","57e7644b9ffdd19ca1935c61fdc6fe92"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","602d6e7339187785ea186f72972c7d85"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","8e4ba57d7d93ac16739cc3be8c051bf1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","e4b53a1b846ff8aef084fb4b8286ad67"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","cc3190377ce561621403779b0b15114d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","7633bd2a22e861b479e7b9dcc6392e3a"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","efb2c71896d548a4619ac4a621754236"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","5511dd58dfb08dd77699559d96450dff"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","c317525e85ee5b3541da5df93482f6a7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","fb8d3580f551903daf44f1523cad4359"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","32a9be592c6919e8b6f43e60b33fd7af"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","9179e566998e6cde2827579461a269b8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","ce45091eefc7b00aa0363d493560163e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","6f907699519c054284a98fb06443201b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","f02e3ec6f90d24b856667ecc86ff25b8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","0b840918919f96de4cf1f5fced559fc3"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","b4339e2a86ec2e0de0cddb1c494d5a4f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","be28040a76393fb4177c019496e783ce"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","260286f0cec3bbe0a6734b0900adc10c"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","fa9d1f5b07eb81bfa81825b37a1df7cd"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","3e1d169ab3de0feb6d283d78e414e2bc"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","b02f3e9a92c898c902feb0ab8f4eb0d5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","a76619f3d5f2bdc3ce33b5a496bb96ee"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","db1e19665e4a68b42e43c5b9a556ef93"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","1c1568a2df480aa0be27222a65bb4490"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","46def53905b61cb535a93deac59d7481"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","5a5f24c54dc892fbd8ece204b1d81ea6"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","266c0f9a2eaf6966cb287f0d44df9770"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","cd594e15bae1014de672aa303768c826"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","c85febf9c847f6b5ad0e4864478150f5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","2203b89f9c3c2cd9143ed3397cf299ea"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","4527a5ed908e87c8fa2990094d8ed696"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","ad5d9157351d19c7863d363654c4d3fa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","de0ea862a0e31cc260e9c5acb85972e0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","cf78303afc68c36933d8ffda7ed1b437"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","9cafb013af9162b9827db9c53bce7831"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","2c0921ba6b9a95b2c6e984c4e5ba658c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","38396fd0e549ed93b88e9c3b219a121a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","31c57c3c6f243a8a0dd9dd578d8ca36e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","78c689034aaa50e31c3edfe7078870f9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","14a7d3b3d86bc0f981b1ca7ccb99218a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","b1795807d0a6e8b30a0134efcd7fa98a"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","622c7e4358556084d743d696a7e5a586"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","07ccbaeca5f851d82f7204d29f3b54a0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","307d5e274123290f3a67063d3efb1c70"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","27a8ecedf712ae5dc1ea4717a771c27c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","3408289d7f79103fc0fc3b8c2a919844"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","b11648d6ff1450c17e20ca4813a074e2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","6152d99b16cfe68cf1154003bb1a7f24"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","d45caa836dd645161edf5d1248ca91d0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","670f8e856641cc4dc918d1e3d1d661d1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","de8542a23b1154bffea4b12224af550b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","502e810fe69310494911cc93f3b38ea7"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







