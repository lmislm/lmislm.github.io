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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","807e017c8396ca2c20b0624376da0e41"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","257faf3321657606e1d9a4a5c5dd0ebf"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","079f354525aba76000a3d1c4c7edff3e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","6896090eb0a9ad10288823d33f5d019c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","cb09b3a722cdd10d10a2259c0acc94e4"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","c162bf51f26f8c33064be5117d36112f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7465d292141895dab10aaf8857ba0cc7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","8b880212293f278eff350ac54a91eebe"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","782be5cff98a7ac6efb22aae01aa904c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","955f2bf8af3bb9e379f49e634801442c"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","562d08cb54e412e79adfd1ba8a6a2b47"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a2abc9ede44726b1fe86355b8f3fbc23"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8244855c6edb13733b8f07f880f2a531"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","7264f32648bba30b562329af3a8bdfed"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","46332607bf51fc2078e702ddb011a03b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e7c535879c0e187d25e68f568641ee0e"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","adc750210165923c56bafaf46590d750"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","226bcccab67113e45099048ec91ce724"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c40d1f28b9548f244687753b6c6e236b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","7d998759ee5a48456059576a8629ea98"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f58c430e168553f2e457fd31b2219055"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","218072844ffc180bcae5d67745f7a1fa"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","21702dce7c490e4b03d6f6a116e8e30e"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9afab5e199b6b650e2af1acaa45777e3"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","b5df61e445ba6ec18bd12da61a352f1d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8cd1e3847468904e608e13476e7fe5bb"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","bb6c0e38c679331d87f607f0f550564d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","36f8abb946d8ff41bf7d5ac2f5fa0996"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","03abd9d0aa4978f8539e4011d0dd3d15"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","7202e9e2897c72b422c9c1227438f8df"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","2923a633a1240b54533cf3607a6c59f4"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","f5a80ce3f6c183004c38a6dba10225b1"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","cf60184a6df056d3f1e0f2e02e164d2b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","3b95ab818631ea7d26bb65f5e49dd8d7"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","94855e679da2d281eacc60b0cb0f3edb"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","63bb1cee7d4d6c7266c16ba3e88fbc7e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","75e07d7dd31acf961faaf5b77917b8d5"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8c9cb5a1344cf4dfc4dab3a2ccee8035"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","990f579b67746cccf630c76b30f3af9c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4d5581224ab7b6e22b432239c0e4941f"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","00698a26563d8bb2510c7d9cc486c42e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","16f2bf86d7602fffe48c38c3124becee"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","83a124a2656423da7be4179a29d179bb"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","48f95600d81e698b3ab5259eda34f744"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","19744befa14a9044fe967ab65a034d92"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","c4b4107e19f505ab65593020c6da9cf5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4f3d2db7878cfd1f89e063e6d3030cec"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","5b1350b3deb05fe21345da84754e091c"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ce4fdb8de506797f5c813cb458e88b04"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d06197507122b8a19d8ca0d2bc91ba47"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","dca276d92c4955ed82e2e02d454bfe2b"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","642f2cb2331fe24eb7e5f35dab7ff6d8"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9aa7c478254e99cdeb72276dc9531f14"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e03f8a04ca01ebc2b00f3128614c872d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","71015aa018533a909b4e162734c3f4d6"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","0581757c5fa1d948fbe5e10ee5e5d07b"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f9480994fdc84790315f5002112022e8"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e990c7615ec5a20709a0b812da7a53c0"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","9cde4699465c6d732933a8d2f3ae9fcd"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","219ec719d12a193ab3f3eaa656dac8ef"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","1e2273d9fabd20476abd832d6f5acd02"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","bdd364dc4e3bebbc9741b05d6e469a4b"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","1298b9c63d8c56e24a32a6ae322f538a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","6db14ca3061a0f6ec75e0b70e962d0db"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","60a7718fc89e9877cd3546786be74b8b"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","5f8785ab07156abe00995f5d67819f16"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","1a044a904d823932218eb6a3ed145a62"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f7e926a1391428d1143107ee9492c818"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","29b357a1453a69f89802001b80c5aa68"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","dd9d7e66491601a57850c29aa460bb77"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","075398ff85add4a48b2872412703ec0a"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","45a51fcd3a979c2ebcbbe62bf3c2928b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","a226b5099e4a6cb33d68665b9bdb9409"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e68963f5f268228c8b68553a521faff6"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","ebe5e1568942abd4f3b4f8c12ad61b76"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","30579edb4187ae5f9537cd7000d5c233"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","86e4cf56bded2f3ae7c25177113ba745"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","f96b20f0e1471985eec5789c543ea9df"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","6cd36c2fab4696a1723d5b05224b2fbd"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","911664ef2f1c99fde3d13bee313ee025"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f6b4920fa2d148c89e0ce7cb2cfe3342"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","ab8ca0ba2ae3bae4121d45122418caf9"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","b6f0b87851cb1a9c0a9f7bcadf49a74c"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","530948d1738588770c33afc11f57f3f8"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","e9ea3e8b278d4a90724a82551ff16b29"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","84cadd6f47b7dc121832adc118fd74c3"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","b67dea69606707902125e8178f17e9c4"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","39f165351a3cc4531e4d3cf01487bc35"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","2fa745bc777ed2f8215b1d69b58b2678"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","a83005269ff0faf46e67f62c53eca9c5"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","093575286af7e908064dac8344873e67"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","2c2e4c88b9dc196a6c3af60a184d2a84"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","154927f233d7ae627f1fb1246eae339a"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","e3ffbdfea54c39cd1e9f2d97050e0f47"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","12bd56df21f66196984ebc7cce33e49c"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","53782fa4c275cad45805cdf73fe174e0"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","48acdd1597ca74d140d30b002c128cbf"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","b6fa6a206920ed0aa7b89fda6e02fb10"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","3d8b73bac989e3608267a516bb7a896c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","5a493172922d225d857250139b1f0183"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","ebf42e4844ed596aec3e800af7f98ff6"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","428d6dcd70f0a79c4d14dec465803902"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","2a157584c7914a850248c07271bb84c3"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","15f9330e33354195744b902e73293d01"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","2c37c1f4de77780b78b94d8641092d7d"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","5c4eeaf23158b3bc333d874bf7e2fe74"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","aaf3a085b64eca574ebe6824c5e65c1c"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","71178bae0d1baf4a55acbdd12dac20c2"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","6d260c7ba85614befd2019a48c059f29"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","3d5acd75c79c7248aae8b40dd467a378"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","5519776b65d6f989a50364695b7b5058"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","55ff162a8fc711042efde303ea1f8afe"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","52d66f76e34895588d418886f31f1d59"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","4c602fd000e593f5cb52c1b2dc557ef7"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","7eec725aa9aab6865f1cc4cffc99df56"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","2bd81a563adb9b59f2e8c233ca6bbfa0"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","ed35293679436cfd0062f1fa74f05134"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","8972e4cd11eec6f26eb0cfc4d2ecc017"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","f91da529e87d65b53ce2ea7b87d14c4d"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","e5164d6eea785f7f79ad4a1fdd53f505"],["C:/lmislm.github.io/public/about/index.html","4a06938a2963f5cde95664bec736eb6c"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c15fd84fe4c15535a5820e131b096d58"],["C:/lmislm.github.io/public/archives/2016/03/index.html","20653bb7cb2ad69e5a9c4dba1cefc55e"],["C:/lmislm.github.io/public/archives/2016/index.html","59ffc9b0c52d90427163d3a7627e14f0"],["C:/lmislm.github.io/public/archives/2017/01/index.html","870794e07d491f87bacd8b74734e5a8b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ec24d1d72b40c4273bdcc1c0fc825e3f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","48500aeaae34c842e591b81279cfef95"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0f993a3b5948e3f5162ba5e223c50419"],["C:/lmislm.github.io/public/archives/2017/07/index.html","bd3ed83eace3fc4286e8e0d96402a1fc"],["C:/lmislm.github.io/public/archives/2017/index.html","e23a6fc3c97092288bc97ce916f95dc0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","7cda3c740666b28ec894aeda8939fe6e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0a47796a30ba8df01a6a8241d0f03f38"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ca323bd32639840fa98396b94b6a18d1"],["C:/lmislm.github.io/public/archives/2018/12/index.html","796473aacd6a15c3c05b4c658c849ae9"],["C:/lmislm.github.io/public/archives/2018/index.html","00c9243125e50bd6d07a04b00a0b0135"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f2005b01f20c9e1d2f69858ca591fe52"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2bebacb77c469f375f8cda31a3fa40f8"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","1241fb3faa6844e2bbf58e77cb3a005d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","f2711a9094e9daee22bcea520d7597fc"],["C:/lmislm.github.io/public/archives/2019/02/index.html","fe53b540201e18118d741bfc1c5e4838"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f729f0729c211006975addd1e6710cc3"],["C:/lmislm.github.io/public/archives/2019/03/index.html","cb24607efe7f498bec0af7e35eb8fe33"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e29ebfcd4c08443a704e566f0378d1a7"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","930572ee305d3f8d875d2e2f3c97cab9"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","3986c297c1ec45ef228a91864165da80"],["C:/lmislm.github.io/public/archives/2019/04/index.html","d3e3a30ddf6fb54505b87de0e1d3cc02"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","fc12711db2610fbb9afab26610420580"],["C:/lmislm.github.io/public/archives/2019/index.html","a4f4dc4633f9d744c2afd8d3dee211a6"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","af52c9b6573d236b367c630d53ce5a96"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d224d45fc165d719c11db8df61425312"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4041a71a2a306ac3aedb38eb512f3f8b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","f9e08e5c5eb90d14dbec2fc65f45f85c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","d37fd3176f016672f836748ae21b4f65"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","f252c0fac2ce518770a2929ed2f65c70"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","268bf6289da88e71c8ae9318e5f16abf"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d4cb73e02cc57507602b40e96f9ea36a"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","87063077098e34f61642870ed2ba375d"],["C:/lmislm.github.io/public/archives/index.html","3dee5d70c64b58b99e25e957e2fcac7d"],["C:/lmislm.github.io/public/archives/page/10/index.html","3275302433096d78f0ca10df148c4122"],["C:/lmislm.github.io/public/archives/page/11/index.html","168ad3800657a41bdb95a3bdc5091cd3"],["C:/lmislm.github.io/public/archives/page/12/index.html","956dbfb633d67a8f0fb806f9f17bcb39"],["C:/lmislm.github.io/public/archives/page/2/index.html","09fe3210b05b3f79833e6fab6e0fda60"],["C:/lmislm.github.io/public/archives/page/3/index.html","bcc1fd63a11cd466e74077c8d281624d"],["C:/lmislm.github.io/public/archives/page/4/index.html","13a9c852b841a308ee10167cf18675e6"],["C:/lmislm.github.io/public/archives/page/5/index.html","74bff91ddaf36d2ead7e1191a5a06085"],["C:/lmislm.github.io/public/archives/page/6/index.html","1f1537a1be983ff36b5f130d5083f04c"],["C:/lmislm.github.io/public/archives/page/7/index.html","106254e888b1de24cced4b0479e9142d"],["C:/lmislm.github.io/public/archives/page/8/index.html","76faa2d345fab9977450159c9322a8c8"],["C:/lmislm.github.io/public/archives/page/9/index.html","78e4fdc1de4a8efd5bb76dc19b683a6c"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ca82d95c82c4f82117a6161923417d4b"],["C:/lmislm.github.io/public/categories/index.html","d735e4ddfe14fe33c858727bd108b893"],["C:/lmislm.github.io/public/categories/xx/index.html","2fa704daa6ad59c241c792ff3cb6e4a9"],["C:/lmislm.github.io/public/categories/学习/index.html","6c3b03d8a5418a75f01ec8da7ab5755d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","22e24318933cacaaa8b8b4f316d40571"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d3cd08ee86eb4f3a5a8364ecda7677c0"],["C:/lmislm.github.io/public/categories/工作/index.html","9c8d9a3e56526767f169feb80defac12"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","634a94696f09d669e5a2dfefc8462c93"],["C:/lmislm.github.io/public/categories/技术/index.html","89d120a91da02983837dd74186ac16c6"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","08584908641cd9e752aff2190a65dc75"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","7497583f5b93b47a62e1c90a24d60b35"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","691603d0f1cb12a6b3034dd617281b52"],["C:/lmislm.github.io/public/categories/日常操作/index.html","628e3de75a2bd2076e895e3a5b39a1aa"],["C:/lmislm.github.io/public/categories/生活/index.html","034ffbb2141b685920fe4fbbb7b03178"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","6c81d0dbcebee18f4ae557daf2b5876d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","77f589a7d1fee804cb1b472eca3089bd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","3e9822f647ad133b36acecd70a5bc19c"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c9f9d68c73ca2844ef8928d53617a030"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","5b0a36f7dce02a288e6939e48b18b0b0"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","817db3cd0ae69cf6d64ff86223d33478"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3e66a49cd18b37bd4194d74b7fb20a60"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","05d4e2b4259c246eebe937a3551fb349"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e85d649f79e77b15e0f2da80ad904708"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","3fb0e62d24b9814196ad1955e1b7f2c6"],["C:/lmislm.github.io/public/page/11/index.html","170d087749fd2b13e25ab45b83d7ebcf"],["C:/lmislm.github.io/public/page/12/index.html","d81123c1a0364a47c06fd16872a0737f"],["C:/lmislm.github.io/public/page/2/index.html","92f6e099eefd6c4e65d5a4132a635008"],["C:/lmislm.github.io/public/page/3/index.html","6fa4a10d74ee9f7ac74cbb2aa04f20fd"],["C:/lmislm.github.io/public/page/4/index.html","10df17be01f56185049ea25a5e43c910"],["C:/lmislm.github.io/public/page/5/index.html","169c963d64bd6cd1b5537e7b2c820d1c"],["C:/lmislm.github.io/public/page/6/index.html","c492729e7d216ea8712239d1db55ff1c"],["C:/lmislm.github.io/public/page/7/index.html","03242628f7f3c2938a666f41bff0dd3f"],["C:/lmislm.github.io/public/page/8/index.html","a8298ec31f1d8dfe69ee3cfaa8e4eb4c"],["C:/lmislm.github.io/public/page/9/index.html","0941164309b3d363564418b54aaa9491"],["C:/lmislm.github.io/public/tags/Interview/index.html","b5d03fdada4f3d2681411b006cec5eee"],["C:/lmislm.github.io/public/tags/JS/index.html","874f9820b1176b03e4ada9e868af898c"],["C:/lmislm.github.io/public/tags/acm/index.html","01036d6bf59bdfdedd6061fddb82c25c"],["C:/lmislm.github.io/public/tags/c/index.html","ab682844fd290e4a4cfe1c9c71d087fa"],["C:/lmislm.github.io/public/tags/codewars/index.html","76c00d375fcc900f8e3d0e9e9e77e0dd"],["C:/lmislm.github.io/public/tags/css/index.html","eeac57da08c4ca63286c905a75ad91f6"],["C:/lmislm.github.io/public/tags/git/index.html","cdd0bcbe1cfbc88dd27847f64edcc07b"],["C:/lmislm.github.io/public/tags/hexo/index.html","a7e9329ee94435429c7fae2798115b3c"],["C:/lmislm.github.io/public/tags/index.html","5e982d5ff24753981c413fa030a7bb03"],["C:/lmislm.github.io/public/tags/markdown/index.html","2ee89617d28a5884aeb66ad968650436"],["C:/lmislm.github.io/public/tags/poj/index.html","34521a3f77019b19e3519921dc663636"],["C:/lmislm.github.io/public/tags/shell/index.html","a435e70e6325ff723aa1d74c37b2b832"],["C:/lmislm.github.io/public/tags/vue/index.html","7d53b305e506c8730a345e0146bcb7f1"],["C:/lmislm.github.io/public/tags/xx/index.html","975431b5a8fea0dc552c52b6f592c984"],["C:/lmislm.github.io/public/tags/前端/index.html","08f855bf48977c403b6dc46117bd8de6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b15e27be60165774248d570ab6ff1413"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","2e5ac9e8ce26ecd87da1d3cce72f7cb6"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","605d7204473e04c187e8aaefd8656414"],["C:/lmislm.github.io/public/tags/小技巧/index.html","51e9e3b305f325ab2ac634a667b1a290"],["C:/lmislm.github.io/public/tags/展示/index.html","c93fde1bdeff6b905735c1656907c882"],["C:/lmislm.github.io/public/tags/工具/index.html","399730dee3fd4b81c484d77da9eab25b"],["C:/lmislm.github.io/public/tags/感悟/index.html","21a037aa04c6fd6dd48b24204f6f5eef"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","fee4fc558fe9fdb8c7086947e06de92f"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","3657711852503f5a064114af5348d6f7"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","fefebd29af65031fd0fb50ac816b2654"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","3715437e34c8514646671908cf66f864"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","3cd9d98120e07078fb4a9f62bda0ed88"],["C:/lmislm.github.io/public/tags/练习/index.html","ffaa0064fa877115d27bbbcd5f073be9"],["C:/lmislm.github.io/public/tags/编程/index.html","06eca9877bb2f1783c8bc8eeba7d364c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","2e16eb75a5d829364394070a10f6f78b"],["C:/lmislm.github.io/public/tags/运维/index.html","f4325c6aae59e76dc8541fc36865cd93"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







