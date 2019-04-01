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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","ba17d8f8c2fb0f20dd70d9a840ad17ff"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","7d46c434c61f83422a87d1e785a61c0d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","83133ae2af9725497f9b5ff579d710f0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","5230780fdf785aa5d6f26d9ae1c09049"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1b6dc72eed8eb2407bea40b7c18cfb7a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","cbf7ffadc91b7c7d093068d9c6bd0d5d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","55281a015410f6a92365d3acc619d3b5"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c8e124f75af8d723db7cb2f35edf71bb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b334d76afc7242d0d5f82109c786b950"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","93db2bec9980232080661177d4a23136"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","14814270223c7846d3a2914dd49bb0f1"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","79aebee6efef8a6e0129e37f44061a25"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","13a6cb5cbd9a48683fbb504518f07f62"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e9aff533f711d14930e1417529779111"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","23fcec5df28fd852ba85baf4d1c950ed"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","6f729a2918684343af919b0858b91839"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ef5010437dd44ff3c2fb92fc27bca19d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","dbdf1adc6aab615fc665445c6ed9e3af"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","46d7c01ec8482182b1501aa49284bbc5"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9213bf0d5f33faf7557193b7982cc164"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","df819b2dcec6a1cc111b4989a513f001"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","b2933090ebda6cb47c29a33046d11f21"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","180fa070b8d5d0920107d04c3aed95f5"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","fc09d26eca34b3e42394b8ac1ddd7845"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","32162da9dca3077df373b42981eecf66"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","415ac6aff424c6a9674a0598a4e0be33"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","84e817515d7dad8c52886071fc6c9012"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","7d93184bf15e17a8b3d155798623723e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b7cbf557f021e353d276bfa4bf5c3158"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","143fc88e05ff113161a8c465d95e027c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","da2f2bfda0986d4b3fa06e1e880039d0"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","98dc1c15d617265c394156c9e53a30c6"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f770f2302bae7c21b61d347e942b4357"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8b08a586ad9d942285aa4051d90c808d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","14e571c312a08ce12625e073924bf669"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","f8bd386319b27969bc726da582b755a1"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3d760811ee31ed36accab3fbeb35e495"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","018fec580e65ef9fe8420ef65536f939"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1653b8bd6a934215ea89fae30961713a"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","54937efc9efcd104dcfdbe8da19cffe5"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","79ffba051651603c0947017ca6c8eaa9"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e96dffab1d6e25eacd2d4c5abe38625e"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","001d23893ef71d22bc9334d0787e317f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b061cd4bbffe7bc7b7d5ed66026a1196"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b17bf6238dea72ed164482a31bc22808"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","d37f9292a45f136316f3e8b40585c0f8"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","672b9209e8b6685ac8d717a0f94f97bd"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c31aa22adb672db81b84eed0247c4208"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d07c905818dfd0137bb943b64ae4b1d5"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","4c14593564b48b1a74a65ea2806f4a1d"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","4a95195f9f5a6215da0b90d84db0017c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","3c1031719069227b165f73937db96c8a"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","fa3a402fd2c347287649665e281e48c5"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","31d282477940460c99ebf4a65fd2db13"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","a72b410a7196d62453c099555e7bb97f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","b39235de23f431dd418e784cb948e2bd"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9e859339da20f1b3bc8b795254b627a5"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5704b8693ab1b1c2d006f72c725492db"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","78e5f7b7ac32917b94692a60455868e7"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","b44b864a7a5db4b1ec657ddc65fee7aa"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","fbede78144c3d27d17e2ae94b4a22024"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","edaf3d04732cd30bdaec5b6c96ddf4dc"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","210c63e342dca92f87926e52fc09807c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e24448658608b9374d064d897ad048b1"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","91a143395cd667fd50900c51b89e8fc2"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","4304b38caf29c0e6aa39fdfecca5d9f6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","6b2baf127e4532d2c0108cae05c3a6f6"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","21ac3f2142196bb63964809f5a738a36"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","e8ff3361885bb8532f356e0d63e23cd3"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","867a29078d5f7e8ee37bd98a7fd1d6ef"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a233cbeac3415f853c33e8ed3e02bf8d"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","ff500738946b9bd1df7f3c5bddf133a6"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a267c8251896cc6990566ea5f40c5fd7"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","cda77d27367909b8d1a9d669b0faca07"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","2cc4c988eac5ce0aaa1032438085841d"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","54e0768a9920b8766ba75a85b23fcd6b"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","cb2020e6c26a3135b8a9dc0bc003aaf0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","d067be519e6ea9b211881114d00b337d"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","71c1b78dc456aec8f2eccfeebeea5ddb"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","978a57c129e716bbf6abab2f32aeb29e"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","7d5e144095886ad598371095d5a929da"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f72331ed72fa5b7757b0a95bf3ed3992"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","82c7dea32154b07deb485d889d815cb8"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","bbcf1f3bc9723aaa9da2e8634c9f9046"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","7e1d50f3e5acb6547133b18d7037d435"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","f3b0100754c879b713873bca7ececd7e"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","367aa3be102d21b3c599ac364d60ec66"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","bf2c3e3225483685e00f1beab450a49e"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","7d0c7fa1d1d063f5d9c4abd934f7b9e9"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","b31399ff53bf0643d1bca44264a66954"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","18180f5e71d37c81227d11e48028e84c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","401a6f244cae2a1304a599e3763b6676"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","001c279fde3c24276326cc6c2036967d"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","532e27b7e78b79d031a73935d03a69d0"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","a29082ef326c1516d34dc22f2263dc7f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","e16bad8f59e64999e69ebaab6f07379b"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","b47a8186d04d1eb843e45d9fe597d48b"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","888dba8968035ecf174f753d5a08e274"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","9a451098f4ea78043eb3c05e08ca6c59"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","f9d2970e3d2de8039af8170dab138efa"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","11b41707cf4bb32f59f5d4abd73b119e"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","119d3abde1e65d03d53b8ccca59da70a"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","08413102b8a5af8bc909bbf204e65baf"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","7a2d8ce582104e02a3cf1c558e16bb01"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","927027d47fbe6c613e1342cb11540014"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","020393ce2ed8496fa828293747d9f3e3"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","e6fb9fe884817083a9fbd7aff16bd316"],["C:/lmislm.github.io/public/about/index.html","5cee3296c3729d9cb02ea4b12829af03"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ed167e8e91d8c0eb0359973c0158e947"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8ec6a1ef5c2fa3f33421d3e9a40e9fee"],["C:/lmislm.github.io/public/archives/2016/index.html","b96113391be247bdd07029b2738e1527"],["C:/lmislm.github.io/public/archives/2017/01/index.html","78ba8ab803b57b0bdd3b1682c022894c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","298dfdd723477bd1602309aea1d18c7b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","9d3ebbc0d1b322084da188517b1fb13a"],["C:/lmislm.github.io/public/archives/2017/05/index.html","6e1fe46451a58432e5c3a276487f5050"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7dff29a1285e98c79b32a08a79d0f85d"],["C:/lmislm.github.io/public/archives/2017/index.html","ad1108d5439cc799b26330363e32d312"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","0ba6e8516036b603c43a4ff90d9ddebe"],["C:/lmislm.github.io/public/archives/2018/01/index.html","1e44eb463bff1f04f05438bf43a1716d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","594df01ffa94d27e512e5b58830e3fb5"],["C:/lmislm.github.io/public/archives/2018/12/index.html","72c868da04bd7df4a38252b615f0f2ac"],["C:/lmislm.github.io/public/archives/2018/index.html","4bff128e61d745736243483168654b3d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d218ae0d69efe0618b22fc773e45f084"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","487a824b7d322a425ef1736c2213272a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","da0d293af56686e588ed121099c3ff0e"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e581e254d52bbd6aea2611349f909b17"],["C:/lmislm.github.io/public/archives/2019/02/index.html","7a2e2dd31692fe4ceff28aa485345a1a"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","c85f88f2a5b0e62ec229876136c32964"],["C:/lmislm.github.io/public/archives/2019/03/index.html","a577a6fffc01d4184c0a55b65df00367"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","f46e183986a9797853951aba3536ddcf"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","04d58d661317b2f2d8a11679b39e93c1"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","ad17e8a15babde20af203148e7bd8731"],["C:/lmislm.github.io/public/archives/2019/04/index.html","653888f5717af7acfc613d309d9dbe79"],["C:/lmislm.github.io/public/archives/2019/index.html","124f8c40c0616856006407ebf0c45707"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4c3b0c9e028c51e486a3f1260f91ab31"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","25bf464ae9560d0587d5f5594d484cfb"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","832336e23bd2b307d2d9ce281bdee005"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1e31c7d823e053023eaea553cc060268"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","431af2650904926549c35481e44f635b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","be9fc0bfa04cacba2a6831bdcbccf3ae"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","fd0dbc94aeb8efaa32f4d3e1f053c1ba"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","e13c814488c41f16c701635c42aad29c"],["C:/lmislm.github.io/public/archives/index.html","1ccc190be18b8785e8a95bca92dc1aec"],["C:/lmislm.github.io/public/archives/page/10/index.html","07b78361d9349ccacfd2dec5c4e56166"],["C:/lmislm.github.io/public/archives/page/11/index.html","8a69e7ed198dbe5fd6c892f4d4e09798"],["C:/lmislm.github.io/public/archives/page/2/index.html","11a50f477128cc0aca53d1dedf95ee7b"],["C:/lmislm.github.io/public/archives/page/3/index.html","e514a193ac97e81fd4902154f565f1a8"],["C:/lmislm.github.io/public/archives/page/4/index.html","80bf24f6ab62e3427eb660e62dc2ffed"],["C:/lmislm.github.io/public/archives/page/5/index.html","7e60a96d5387e78589d460c8498cbaa8"],["C:/lmislm.github.io/public/archives/page/6/index.html","3d361af1825fd92cf93e889ae9d6c902"],["C:/lmislm.github.io/public/archives/page/7/index.html","34de3615bc82e903988336ec1033c62b"],["C:/lmislm.github.io/public/archives/page/8/index.html","3fdac9f7ed85753e04c5d038343a77d0"],["C:/lmislm.github.io/public/archives/page/9/index.html","731d43a2c6343ee91ad70c5704204298"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8a6a5e90a73b2474c82bf3bb9ee996ef"],["C:/lmislm.github.io/public/categories/index.html","04267a6f055b8652e14c4edaebb0a093"],["C:/lmislm.github.io/public/categories/xx/index.html","126e03a2bc2de27d4e8d24f856501c95"],["C:/lmislm.github.io/public/categories/学习/index.html","9cf39bb067086c0787b261c587d49fe5"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f7d44958dfd523735bda985d11e8c8f0"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","2078b3d627f40bc0d5444643ef6361aa"],["C:/lmislm.github.io/public/categories/工作/index.html","1db1b46a7a13e5e28a6b99544c7a9641"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b28aed7538870cdc30f3277be6c26775"],["C:/lmislm.github.io/public/categories/技术/index.html","a73d3326c26dd2c85519da0badff82e8"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b05fd32926b1902128a9869ef2b7c626"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","de3dc42918c21c3e1805ae882f07cfa5"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8de2e0e76f5139339656f60e5015b435"],["C:/lmislm.github.io/public/categories/生活/index.html","a95c05adf482d1224f69da66195f478f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ccc036947c4d81908a9de0350880b2cc"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","6dee0e14c7453bdeb7acc223477bb269"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","1b9a6b7759a7e396a0ec53aeceb2139b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","1730f5e5258fc272205a5df382cb3338"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","2c9f73c10f73a3689ec96702967280d2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5f80d95e3d976922ace92d9a79671c22"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","16ab2ed27c1d3230a512a79f4f6ae32d"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","54410a75f2d26c09d5b845196261abfa"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","94123ac8656773e07e9f278ca5139046"],["C:/lmislm.github.io/public/page/11/index.html","0494ba281c33b8285e0b1bda8506e7cb"],["C:/lmislm.github.io/public/page/2/index.html","21e314f3bbb4d9c0ed10a58c7b0fbf3e"],["C:/lmislm.github.io/public/page/3/index.html","60e10836983f8c618c126705e8df8d77"],["C:/lmislm.github.io/public/page/4/index.html","a333b7df11f228c67a6cf27224fec134"],["C:/lmislm.github.io/public/page/5/index.html","28256797ce9bec0d9a27bdeb7729db14"],["C:/lmislm.github.io/public/page/6/index.html","494fd4149b53f9e4a7217b10382a896c"],["C:/lmislm.github.io/public/page/7/index.html","2682ee42492c15a229a3eeda227b17c4"],["C:/lmislm.github.io/public/page/8/index.html","d374f10b51cad15a9bb3cf36e433c1c2"],["C:/lmislm.github.io/public/page/9/index.html","d3c23db1e4ce70c8decef31706f476fe"],["C:/lmislm.github.io/public/tags/Interview/index.html","dd03faba0794c95c157d39464ae4611a"],["C:/lmislm.github.io/public/tags/JS/index.html","50ad6a441b939efbdc346a15ae0fddd7"],["C:/lmislm.github.io/public/tags/acm/index.html","0c5542e38e1a331150871951e2618ade"],["C:/lmislm.github.io/public/tags/c/index.html","8b215dc994988e7303823aa6b300bd14"],["C:/lmislm.github.io/public/tags/codewars/index.html","bf4da34d2e149e4be38279e115aa7d8c"],["C:/lmislm.github.io/public/tags/css/index.html","c26128b3ecf42fa29bbdc6cea2785a28"],["C:/lmislm.github.io/public/tags/git/index.html","f500f325d0ef463c5634016b39947a38"],["C:/lmislm.github.io/public/tags/hexo/index.html","61ff2d4899fe04331594f1028ff1074d"],["C:/lmislm.github.io/public/tags/index.html","a06e47d5379ff773ecd3269961348418"],["C:/lmislm.github.io/public/tags/markdown/index.html","3251837d013693136f80ddb1e4262747"],["C:/lmislm.github.io/public/tags/poj/index.html","6f94b8eefde5d36acf640f6c36638392"],["C:/lmislm.github.io/public/tags/shell/index.html","96b16191ff4cd39c49d52adbe2bfb3a7"],["C:/lmislm.github.io/public/tags/vue/index.html","38cd55f99b6555184f5f6f9806ffcfd1"],["C:/lmislm.github.io/public/tags/xx/index.html","198b890e989068016a64b0e799b72ad8"],["C:/lmislm.github.io/public/tags/前端/index.html","cdae4d4065a9c2abebf294db2c736c52"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","86150a77b8c59207d47efb4a9f64b5fb"],["C:/lmislm.github.io/public/tags/小技巧/index.html","22c6da559c98845e28c4c6fb2037cf4d"],["C:/lmislm.github.io/public/tags/展示/index.html","bb37550678950c49e65de6f1b42e7568"],["C:/lmislm.github.io/public/tags/工具/index.html","1bcc62baddff3d9a9750318e004d8fc5"],["C:/lmislm.github.io/public/tags/感悟/index.html","22284c76f34eee19b53cfd3c3d5cf473"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","7974b31816b391e2fdb0dcb62d095589"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","449bbd1883703238eb866b6caab1ff69"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","9c111006de6afe9d32a2c4ffc9a20256"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","045e382015596b2ef823c6595ef5ce9d"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","88919ffacbb4e5ca5a40a34a4ea3122d"],["C:/lmislm.github.io/public/tags/练习/index.html","04268ce203b7bbc648260101597879b1"],["C:/lmislm.github.io/public/tags/编程/index.html","ff3bfff301e4ba00378ec395d7cf11c5"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","471b9ae8307c32cc68dec59e9c65fc5f"],["C:/lmislm.github.io/public/tags/运维/index.html","b092d351b495925e20478615b06d1be3"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







