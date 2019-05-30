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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","4067161e569e1d3196a660c59ccd95fc"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","12a2c50b8d18d9fe02c9ac1c355050a8"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","bd4efdbec1d07cc1471cd99f84c97c10"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1f431d60c2459bb43b82f5f502d689c3"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d27dd7b2d638edfa9392c0cfa638fb9b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","7466fb8958380fd6b04ed0c14d2b3434"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","32112b1b1d298748f7b50cffaf20e6c0"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","ee5b8df1fca9656f2d6f3b86a69fd5a3"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","358a3f31a0fd17261a1c0b9be7d1e115"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","4cd443d0b3d10e926554f1013e1f22ef"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ee124c18ec36f0eca9be0ff9b9289ebc"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","250aaa63ec152ed9da0e936817504233"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","65ef9bacc0fc9f291d26d8b89e9e22b1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","1cbeeb6945ac0092108d73ea8e9b7f9d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1c5f020243c7a6fbfd70e4fd04014d90"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","687581217c75c049b3a3c716c28455ac"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","3f90596f63cd499cd9c68ec1cbc85f22"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","85a7c0cc74843b45ce565c3a64f9e895"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","a4eba8060676f94bec8e9b29f92d369a"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","ed785fb8905933df4204765da1815e32"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4235f209ae203c93b2513455ce82299f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7c5035ffc483bb2c3682f0368ec58fad"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","22557c07d05ccde5d220a7af17f56439"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","1d83b2c7f22b7940fd6df3cf5ed7652a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7b50df3b7d160d904b5d702dd06020a7"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3cedca26872f4748947a24d0a795bdaf"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d8b2a6fe718d70a80e8046ebd7e2c8f7"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","5d3bc95a0ef0665738f83929cce8a678"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","6f6c29affbb7487d9049e82e361fa322"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6ae47df24a0e11fa9dac7ae964359c90"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8618c258590ecd3d27d810d362e2741f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","ea6927571c5abcefaa20265f2e399b2e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3a9cdd2a3ae366da47d6f593030ae8de"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","cb427953d000343b41cbf637171e7b3e"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0ceaf724244b5ac2f3947406698abd01"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","0177fe973ef43480c8bf9f2920b14e42"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","dd0e43933be16d5675e8cfa459dc26d3"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ea2b1378dbcfa2b9f66621e898d3459b"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ae063b8999b39a823e9dd251a38c9cd7"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1ce0974f6e8e596aeaa218bfe905f505"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","58683e5f48e90a38e9618fe27875825a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9825d9d07517b483cdcccf02606492f6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e93fb0d2ca370d49c201cbe96813dd27"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","50b8b17ea46fa31c765d53b316424064"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7067e6a6c5f64d3af9febcceecf712f7"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e1e97cd51e416dd03b7855e92dac13d2"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","26546958b9d2ee377ae64ca03a409c43"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","faacc2c0e9373edb6aeeb221686305ed"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9ed165635912dc1c517f7ccfeb26596c"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","06eff7540c5579f3ac80b8be33aa2b76"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","40f496b3813432edd6aaab2149bb2aff"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","4f67730f50902f5e72e07a95407bd102"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","82b463d940bc7b426bc3c1b4b9aa1b23"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","432d048bbed8c0b9c432a28325f2f43e"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","5959d01f37cae360510134b965db4db7"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f346e1e41315de60928002106c40acda"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e6b0da1a9be3280b044f50c715bbf38e"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ac0fb6aa8573832526deaa52bdbe26c5"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","d3c0babc7be4c8a0b3e2f813faceeaf9"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c5373dc5c53dad8f7c43773845d56356"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","a084be0373962db457d7dea145017553"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","c8f4a088856dec228e49f0aac3916a9b"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","664be91e2466b345654c603c4222724b"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","d43ab99172220fffe5cbbf8edfaae8b8"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","916be6e0e2c3f06f7967ec52408ced94"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","fd615655a83bc78be7202d984e4ee95d"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b093cfbb5300faaee8b2acf50e349c82"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ab79045398ed6583a5852e93f7654f33"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","6cdaff10d08a558cc86c70299191f2d8"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","473d808c2029fb7fe377e5f9a397ce9f"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","1ef1e35122cd48f51fead66f75601295"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","f716618f9a88a5fd0862e940e43f9da8"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","86f1f56a14860cf567b6adf3b3e4c52a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","316ce689d4eb520148fba2b7ac7b7d67"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","82180c08702f71d41c24873b7fc70994"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c1434b879834f8b407f3ca5de6842c7a"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","d0036cc8268fa1faa514e3cc18599757"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e1172c1e46a3288776292dcb2f5954d1"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","85eee3cc8a9882170abcecaa7d6fcbbc"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","d759da5b408c6bb261b76ca866c1dab5"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","b9b7d96b04e9fe3b1004b5a379528165"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","e7b9487772a89b6d3554556e1ed09ff1"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","3d7e1ab228392c779833ee70f9da20f6"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","44dcbb8dfcb01dd22bcd997dcfa409f0"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","891cb088aab8788477bb4f7595a0842a"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","a11741abb0b6b72296584eef25f06d1d"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","6318715b3b36b9f2147b897b087883c3"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","4bbf9c46f3026451c3d49257a8c45776"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","f52b8a9000d095a6ad0c65dbb5d5ad31"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","302a0f2fa33406656628c5e99694b448"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","3945c3f916f1b0b89a9da50859d0c9bc"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","5e0a1dbd5d4eb928884ce8af0a228f7f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","043b5f32c9452285a765792ebc106251"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","ad74ab58f84423bb1ed2007f9a044f63"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ec833a7f8fb11ee2e0456bd8eaf86307"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","7a89afebb5c0d26927f054e271bf4849"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","feedfe9d7204d28e0a06b3913e2444c0"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","11fd28a4e88fba91c11e4f5e638155f7"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","f9e29fac903fb0586e0a0d10dc5c679d"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","4ab9af10ebdd9475c0257bbf06f42ccc"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","f833e604fec19b570cc0ef16ad1f9488"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","2a28504cb9be42aa1889f1a04ee06bc7"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","bba983010d0a20e9824c9d228acc6b31"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","1ad7edf93095ba241d140e8712018cc5"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","869e40fe4cc016df83a474b9addc982f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","b00cb878d24646676a6bab880b6db2f5"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","a015226d3031d17bd9af5d5273632183"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","8e8997584ff7d791f05f3aead3961163"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","951731649f3c69ebddc14f6247dcfe08"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","fd83a53b8c9977593c23b5f7444f122d"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","a6283f2f9d377c3d198861758fd924f5"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","02861d6b4071fc9b6c4a2cb59a5fd96c"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","04399cfd48bdd10a8ab60a8a625d9315"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","75a88dba8969fe34cebd0b6fed344d0e"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","cf6dc428a6e7d0b08f6111ceb3470caf"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","c47bbb6d9ebe7b54c4af896b761b2227"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","4ca01350b2ef83a19b675a34dd5ef129"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","e1306586ca705895acb31bf006ea83b5"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","3d232c1f3ccefae3755769f89acd26da"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","20493a718e61388c3d46fbfc776c44c2"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","9d5e27a57dfe8b7324b6d6b9c2913701"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","025a4ea9b2dff3c606b8dbf6e2c41119"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","d72efdf54b5539367d91ed1b18708847"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","b126bf05dc3b8be412b098e27f69fbb1"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","a21566079406abcc84fce85f38570522"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","4c8b8ced989d72240d96a8097ea41edc"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","4865ea555448c19828199d176dbbcff9"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","7a23b33cac55e54c32e2d6d5efdbebb8"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","17c70c6f671d466858a90fe57980583e"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","cb7a28117449f0fec335e52ddf139241"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","5eb7b37bc210c88413e6cf9ff5468392"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","2fa80cd78ac976e2aa9f6f6255cbb442"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","310af142d059b9d1043beb22c04bdc0e"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","027b5a03309728b9bfe6c16332082625"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","008e625c4d88a7db2670c2b23b5a32c1"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","806208db3be9ad8bef89ee4e13670f87"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","51cd7d3b9d47d5ec9bc98a2ab4a3f933"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","ce4d34746f43189d5d420e9ac616a7aa"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","9ce28d7e609c7a9abc432c2140928117"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","3b08c80de1cfe5b4bbbdf517ef37e66f"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","ab6cd7a86ef990c80ab99d884d22a923"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","7a201474ee63f4587997bd9f941b6e43"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","1690a04a052e80e260f1033533f76e6d"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","1e54fc504a2e317957e4b9e04de396ce"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","18fc01319d7619636a1eccbca93915bd"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","f138a8ce4f8e40c5610ba237adbb1565"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","71e29a8883463f0bb4982abce5e205d3"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","7424447342ae1ee8a803d22923135d67"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","4dfbb1cd6cdf3877b0542a642951e685"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","e2128abe34ff2f0678022058ef3c0d4e"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","4ecd68a9e9c4e0311af489b253a37539"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","0c6dcaf47e8a5c87cee25d8df5e2454c"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","582d8f4da6e5ee0aef1f6a1c4c3773dd"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","691b703a4ce96d1d54f38d8f8cea0542"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","95736c1fc2b829e97998005a15c53a14"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","55ce9bc5b9e525170a96f56365d81a00"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","defab302c7332d1db94d4f304634c4ed"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","e955a9755b64f100879416787917df54"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","a879a985f0e0440f59b794be730d3ec5"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","b636425b01e9ee5fd4e9d8ad0b792daa"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","b173760f2160075d0497054c86febd05"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","d8655192a7a54d81283b250787fafad7"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","59fce7a8a6563588eb0d8c1a2b6ccc5c"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","746e9953b0ad7fa5673917f83637d4ac"],["C:/lmislm.github.io/public/about/index.html","a3068c2d77ead78721d85a7aab8611d4"],["C:/lmislm.github.io/public/archives/2016/01/index.html","09c83567a196bc322e091d62f03c8a27"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a0a025248bd190c089d099c8e499cbc3"],["C:/lmislm.github.io/public/archives/2016/index.html","50db67a3036bda7b0ac3b1446235f2e6"],["C:/lmislm.github.io/public/archives/2017/01/index.html","57390506d534468556b093f913d7c02b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","611f8f313668701e86cce8663b9e6ee6"],["C:/lmislm.github.io/public/archives/2017/04/index.html","5457d9cdf6e29073823691f7fdc77cda"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4f0863f35505465ae13f00ce01da5db4"],["C:/lmislm.github.io/public/archives/2017/07/index.html","15e708bb7894da907186b43e4d5cfd92"],["C:/lmislm.github.io/public/archives/2017/index.html","e8c22d7708280ad22e04135d183b6d8d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","5f8f58f1c32bc1cebb9d1efa5630ff12"],["C:/lmislm.github.io/public/archives/2018/01/index.html","4b843a4a609d616a6202bb927b791508"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a71e0c5814377713f02cf8c484388d9f"],["C:/lmislm.github.io/public/archives/2018/12/index.html","a05dd5a2d4d5d571f8c49a831c29239a"],["C:/lmislm.github.io/public/archives/2018/index.html","07ff123b48079bcaf10d25a762a97f34"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a8a7f3d70e3d373947235811d491229e"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ad3fb8329432003e5778e7dd512b2956"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0e3ac9913b544e1489b70502a452555f"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","ae9d4cc596783f49f682d31b706c306f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a3fbb349edf5e6655e0efa5aad53d52e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","37c68ef167605d721da12bd424ec53ff"],["C:/lmislm.github.io/public/archives/2019/03/index.html","64a624b7d5d2d45f8d3177c9df0ae84e"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","7b69bc09daff55cc058629790ef5863a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","50adb47a91ab8d180b87dfbf1fac5197"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","8ece2e9bf86f0b8448085c0d51881912"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b8b764b9779216a749ce04c877a3ea9d"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","900115674b711653b4d68c4296880fb3"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","6652f178ab6ed1a7fbbfc472d13a3858"],["C:/lmislm.github.io/public/archives/2019/05/index.html","d9f2b5fa2ba8074d61738c30309f759b"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","a4e9062c88fcff12265bcc99071dcb02"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","337d2390c7c79feee2e77668d2379c50"],["C:/lmislm.github.io/public/archives/2019/index.html","bd20c103ffdc00fa8daddc44b0cfb0af"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","2bc3600f85fdcea8174f6d5d65ec2058"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","a05c50f9e0809aa3eb8c49db122e7f5d"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","6ac92bc2f7b70fe06ef694f8f88b707d"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","c28040357b78b5a951b5b52f70beb85d"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","0e146566505ec22d7cf411eff9fafa71"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","493895613810c5e6a1d55da4f837c5b6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d5b4b6a2f6c4b4bdf1872cbc40a63c7c"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","ae9ae0dbfb18d4468369f36d7741aae3"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","44857f4da5dfd1d8cbdf5d83e6c875bf"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","536490b855bdbb495e4477fa9d878cd9"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e7bc224fe4376d1b707b0e611aed8a59"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","501f1f4e00879c196881faed9bedfcd6"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","cbf94c5a339e8d9e4f80c80c7c2f3867"],["C:/lmislm.github.io/public/archives/index.html","36a79d03197c59845067f225a215971d"],["C:/lmislm.github.io/public/archives/page/10/index.html","82e7d5206ada2da802f7a9b59fcca414"],["C:/lmislm.github.io/public/archives/page/11/index.html","5ad20ec0b7c9219af5883d375e6a4d5d"],["C:/lmislm.github.io/public/archives/page/12/index.html","4fd7b7b6be114b309312ed14d1a0ea38"],["C:/lmislm.github.io/public/archives/page/13/index.html","351dfc88585f111724132214c909877d"],["C:/lmislm.github.io/public/archives/page/14/index.html","ef73e4281995fba6bf579122d3b025d9"],["C:/lmislm.github.io/public/archives/page/15/index.html","ff64b909509c7e08b26504a883d75a28"],["C:/lmislm.github.io/public/archives/page/16/index.html","766977f81e1d2606d015d26059a32f23"],["C:/lmislm.github.io/public/archives/page/17/index.html","3eb059235f9b649fed77c1832530a5cd"],["C:/lmislm.github.io/public/archives/page/2/index.html","7fdde25dd8a12f3cb5604006cd9fc351"],["C:/lmislm.github.io/public/archives/page/3/index.html","da7e8c8706f8f69010b1ac4f15a17aee"],["C:/lmislm.github.io/public/archives/page/4/index.html","5a974811a874195d9beee6642a8a6d44"],["C:/lmislm.github.io/public/archives/page/5/index.html","2c56a261a0406e8c30e63f1fb0b87e38"],["C:/lmislm.github.io/public/archives/page/6/index.html","dc49ffe3f614c4d7fb9ec34044c1ae8e"],["C:/lmislm.github.io/public/archives/page/7/index.html","aba3d1684ad302add386378636ae0558"],["C:/lmislm.github.io/public/archives/page/8/index.html","b052ca77ce2548c13b558836b49c68da"],["C:/lmislm.github.io/public/archives/page/9/index.html","83b86f6ee40089d90a73773abc9cc466"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","397d3fcde8f63897ca6231583940f878"],["C:/lmislm.github.io/public/categories/index.html","6cc747aa05b67784b5a3f255f992fc66"],["C:/lmislm.github.io/public/categories/xx/index.html","4fb9f8353992c3962c5710db52ebbe27"],["C:/lmislm.github.io/public/categories/学习/index.html","c4c9de075110c8a0f8269add03b3f1ce"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","aa2773f132f425bfef02262ee87b1d7d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f3537a554757f7a16b806c4092bee971"],["C:/lmislm.github.io/public/categories/工作/index.html","944ed9a7f9b32d8a98e47b48a018be5d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","47d0fd68aa967358818061e602723c4d"],["C:/lmislm.github.io/public/categories/技术/index.html","63fc661e5ad1cbdc9894725b5fa45bca"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","2a02d2af080dc9a3e8870a2858eecf85"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","d272911464c28340486d6af570abc9ac"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","12b3a3d59e7a5142d132582b287097d0"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","8d4dad8aea3a3d8c72eaff225d407e64"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","6e9fe021e9bad0f25c8335186186f597"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","aee15980d3a059f468d2c6e50187bb9d"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","b1f2412ecc0aa1ba8f96c79f93a3fb67"],["C:/lmislm.github.io/public/categories/日常操作/index.html","894873c01d84eb37b99a89bc2c3fbe29"],["C:/lmislm.github.io/public/categories/生活/index.html","b879526f8133c5850c1fcfb6f26e0117"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3e00b04dd758720fe0bd1b64d9e9d754"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","d601f555c3458e58776174ed6e97b8a5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","f89ae0583d2a07b62b1091cae79c48b5"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","15701a25a16696702e6e738f7eb2cf6c"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","0a9bd92203cab290c6512402dfff223e"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","32622c5f87b526ed198232612fea84a4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ff3fc351ac38329df84792c73264fa17"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","40c07b0d47a417e7ccdb96fc2fc1f50e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5b4a4e215735181f5be5c555dd8e35c6"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","3201ed2a0e4dcecd32b22b85e472226b"],["C:/lmislm.github.io/public/page/11/index.html","9b0e7c6df16ffd1cbc6530bf150e15b6"],["C:/lmislm.github.io/public/page/12/index.html","91390dd92bf9bce38027457cde55596e"],["C:/lmislm.github.io/public/page/13/index.html","5fa95436aa588cbeb247498303dbebe9"],["C:/lmislm.github.io/public/page/14/index.html","14da6cef81211979276bc7b57cde6df4"],["C:/lmislm.github.io/public/page/15/index.html","83942dc48cb64c1e3fc3b344e5e0933c"],["C:/lmislm.github.io/public/page/16/index.html","6ca0f860c1525429a6f1d265f0a73ea4"],["C:/lmislm.github.io/public/page/17/index.html","1a1c4149df26211b547f43c2d2301277"],["C:/lmislm.github.io/public/page/2/index.html","9b9a16ab50c8b05054eedc86d434036f"],["C:/lmislm.github.io/public/page/3/index.html","3f60e456c6a1efc43bc4bc915260e99e"],["C:/lmislm.github.io/public/page/4/index.html","fbe2b960289f5a34e970b1d4c689eeef"],["C:/lmislm.github.io/public/page/5/index.html","16d73002e3a46982e5699ff3c0f67510"],["C:/lmislm.github.io/public/page/6/index.html","c38a495595fd03c9536c6c985a576d63"],["C:/lmislm.github.io/public/page/7/index.html","8b7f16cc9526c7ef5b723615c1d9ef0c"],["C:/lmislm.github.io/public/page/8/index.html","1e3a3ccc380b894b0192256f509a1f85"],["C:/lmislm.github.io/public/page/9/index.html","5a627f7ed48acf5138f475d7471e131c"],["C:/lmislm.github.io/public/tags/Interview/index.html","0dd8dc10fbe1552a16d9a07d20b7d2e6"],["C:/lmislm.github.io/public/tags/JS/index.html","4d4294e7f27bba3e7229a8f758a8250f"],["C:/lmislm.github.io/public/tags/acm/index.html","d4cc4284d6c642d617096a863b472e97"],["C:/lmislm.github.io/public/tags/c/index.html","d905ddf4d45472e46d9acf3b48f7247b"],["C:/lmislm.github.io/public/tags/codewars/index.html","dad3f61759179d4b2a5f98d419e8b809"],["C:/lmislm.github.io/public/tags/css/index.html","5ceaab2cc92df4f3e237009f87e73c99"],["C:/lmislm.github.io/public/tags/git/index.html","f2b8d241d864a89868cd39aef10e1a87"],["C:/lmislm.github.io/public/tags/hexo/index.html","ebcb638201eecbbc37ca131390cf48a2"],["C:/lmislm.github.io/public/tags/index.html","a622d261f8829edb6e54bb2872951075"],["C:/lmislm.github.io/public/tags/markdown/index.html","2434742bf6574b97d5f54abcb3d9e384"],["C:/lmislm.github.io/public/tags/poj/index.html","3ed72291fb037b54766a9779970800e7"],["C:/lmislm.github.io/public/tags/shell/index.html","667d8a75e669ed0525744f223bd74766"],["C:/lmislm.github.io/public/tags/vue/index.html","8f872d731e0e9fab42a34890f98ab5af"],["C:/lmislm.github.io/public/tags/xx/index.html","d275dd4c1b04cec82055ac4f97ea2a05"],["C:/lmislm.github.io/public/tags/前端/index.html","b656fb9f8595ad98021af30c38dbabc9"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","744756379405762d792619f8b87d9775"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","2c510b8e1f29880bd64fc514f3549e4d"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","e4ccf2be94ac45bfe34288943097af9a"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","47167f8dee2427691e13410de9d5bf46"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","fa2c85e72c586e17950a216e0ae1f47f"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","5e1d780b11880034672322f130cbe9ad"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","27f835c7a557b9923576c32ac8b617f1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","3073443657161ebbf3054b2123773035"],["C:/lmislm.github.io/public/tags/展示/index.html","081c250ca411111815eeb38aef5298d0"],["C:/lmislm.github.io/public/tags/工具/index.html","675504e2d81284e0f9d01b1966c0a022"],["C:/lmislm.github.io/public/tags/感悟/index.html","2eed23c779d68b98dfee46e1cd342bc8"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","8805b78fcb2a05e28c866875775a5f54"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","7da9b4f2b4fc2ec7db576217a31cf245"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b3b4ed43fe647a4d6a63cc61ad984799"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","6274204d0cde38ded753ba1dd58399e9"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","e152a3f90aa9561cd4aa86bf21d8fa96"],["C:/lmislm.github.io/public/tags/练习/index.html","49591e4440093b972f0fa8d3e5a075dc"],["C:/lmislm.github.io/public/tags/编程/index.html","c7c4d4c77d31ac770f53b44fb37a6675"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","158d8cdbd66bbcbd1068d35841cc9c41"],["C:/lmislm.github.io/public/tags/运维/index.html","71800ef7f70c605a65b1a74f04027231"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







