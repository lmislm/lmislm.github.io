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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7409a8d9460ce76aee0e908c9e022bed"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f0195d2b0800f9f6eef54aa16538e229"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","bce67e16817fb65a9874145ea5b0bfc0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","f91ddab147a2497e7b3b6ead093d12b0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","006e6b4c2a66b73cebed4d9248749473"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","08a1edac076d3f5b75b6e5339801e83c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","50caa3e4f954c56c990969665a222946"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3de3139016a9cd3bad8634a591710d0c"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9064fb5b2a53f876a9dafd91c891a467"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ec5f639cb72490ac8fa835cc34254281"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","514d26b61ff0717cefa890976f32f3a0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","ad721b175d8b4f587dcdc11d99f45c3b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d187888dac0795daa81a839bdb0ddc2d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","1a0f55ba8eaa4cdd359fc7f36e23c849"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","167de0c03e1602a9bf405c5e69a24337"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","1687c5e5f885f9f0ece1949fb44d63b5"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","79b08705d7a2bb5a16a883209c314e91"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","96a68b175edf4c7d51c2be9e7260fffa"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","722ac9f7c0ca12e8b8fe7e52e9f51b05"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5b8d535c44541d8a7adfb72bc8f3e546"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","475991fd666b00948c41b7eaff36bdfa"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6bdec4cd062ac65b90ce5a09b10c68d2"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","356928e015689bb9d19b389d3734f70a"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a63e5434c1f06b6251197af572c15ded"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1b4887b3c6ff23e388abc4b36662d6a9"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","da163e394f587003bca2a1aec6575f28"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","7dff4afe8adf381cb684e542e9d9d8ae"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","668f4b070ac29b782f5976c864010401"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c05d43f13ac8218b22615185adf8abaf"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e2c8bf46876221df5a9a0bcf2b233de7"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e455dc1ba4e6311e2cc008b07df167c0"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6a35a9e96134398351eb6559842badd2"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f5d81eb4a87c6fb47656215f34002c01"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","d13a12908667fc6b3e620acb302d1825"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5bc0928f039ae7bd97642fab44eee5ef"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2e3678fac53380d767d673ef6a739f86"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3aeded132415bd125118b95a7e9dffb1"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","b930b290faab023b51529cd8d0e14d74"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","cb4a4b6181c83d8e650ceebda0c3cbd9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","46d1159f299234b2b09e68a91d3ec16b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","98cbac277b0adb54f6c00cc47d883b0c"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","f27104a7477665aecc486e8c3679e057"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","0159a206176f5c1b2362ec45659dae54"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c6c5b6678d0a115cae1330700c8b97cd"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","60825196f45e4c8de45f1f53a3717679"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e636d6714a300303a2f17caf12fae1bb"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fa3401425288445cd4e4d21d15402001"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f4f1b1520acb9937f9ff224597dd0800"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","9d6f1895647f30629f07f52bcb325f79"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f2368d7206c057418b3a7d27112797ec"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c98d183febefa4b3e5a2b429d10dc539"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","e34d7a770f28494db8f9c1a5ebd7dc0a"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","8c2f2ac97dd64a7c0309147b964b8b05"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f1c6ef4bc7b6f2de545d46648e6e6a11"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","ba89068a7c752437a789c9365a4e7d33"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","7b8de1346f78fa91850c4314c672df86"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4492d07d7f24caa2a2ca71999a00c8e0"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","4efaf389d3b4c636049c22d0037500f5"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","58b0ac02f8660979896daa5eec0fc11f"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","96f501db6d53ac1cf1441eec6477933b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","490b30fc71caf02a2dbae5fe393e8d21"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ace69a5d3625f761195853870caa15b8"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6db011f727d0b51b05b1de7b7806072a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","d55f4f9bb2e4ea4670de30710816b274"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","4728ae9517e049eb2752e76ebb76e890"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","2bb6e34504b03c003b46b5aed40496e6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","9f0932dec40adc44491840275b960566"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","05ccf8b6e5c6e2af59c5f32825e5851d"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","d2ed7d8d56e52f3d9a5e04eaed40594e"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","d27cdb087844b82c50cbe8b92bf14006"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","0e7716a6dedecad177fef176575661a3"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","12cfdd8894bcf8e5189b144263b0beda"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","d6a0798e19d6bc381ff0a791bd168f3a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","8ed36543d2d04fd0fd864dc7212daa24"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","ff5c4f8584e83565987b9ba42a1b0e0b"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","fef6959998af281a7a97a6f2b7997714"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","a5b518e3f410484742187558a3dbde7c"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","f1b435262d029632ff954fb4b381da54"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f3b0e99dce8af55960f6fca32a9317ff"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","be7bd126826a4fddb5e311d5dea5e2e1"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","39ac6908e62d92f730c1827b252164f9"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","bb21138c22edf3585eff97fd341e7ffc"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","6ef6f82059827de4e5a251b209f66770"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","4c789347b93cfdbcc243bd236df51b36"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","913b71c4c0395088f42f6fc467d1498e"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","01ab0e911dc382c60c30a2120c5ca087"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","4a83ba3f73dda22c9dfa6a12659d5460"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","b0cc8828371622120e0aa4e3164ea59b"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","dfcb606276cef69aefba7db2376d605d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","9e47a7ec2eb37f7b00633e6d1b1c93cf"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","9e0e221bee35e08e2091740dad95977c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","e809ec5dc6b254f33f39e41bec07016b"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","c120531c981b7b932472f4a2b40e1eb4"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","5bbc885cfcaca291e4bed5550fdfb8de"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","a3c6d49d2a276cbb2b8ba809cc582d4e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","8cb28f875b9bfe71248494e8a3800f93"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","28104e7ecb72c2be63558c1ac2bc719e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","05b4d58346a521c41257e4825b084eb5"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","8d893b79f1d32dd56ff42dac0a7d1e8c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","849665d0929d9c49b96e707c147db741"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","aae12d742ba9e2e22235ec1db703395c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","ffd4066b97473d0cf2cd9a5bb18fec1e"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","587c3a6b9892af78f8dca70153eaccf0"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","9499dd74ffc56dfe0f7e78e96583f4f6"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","7010558b717a0c99220f3df957ec6fea"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","a9e52ac243256d4c4cc77acf9eae1e61"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b01f47c3150a3f753bedd78f83034e60"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","4f2ba27cf30d71460f266bc2e1a66122"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","70789cca045c864d570e19dbde8febf4"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","b6b4dcadb40d60a5739e6542b315a8ae"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","0d5521c7347324383e7a56f2c704c696"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","2a5a69cb2108611f2b4b582e18579cea"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","9390287b5fb4275b2ab2524deb4a3102"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","14cd75f2ec3b71b39501fb8d3db89584"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","82c003fbde3135b2d57b0ffeaa9a68f9"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","28f3655e066239f1f75bf3a8ff0cf432"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","4a4d33f0971a24910ddbabf6ce9f859d"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","1cc0ea9b1e152b5bfeebec10e4c678b1"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","43a4fa8f03f38c23b05402f4e3a07ea6"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","ddfa321fcb437148b0264f2a0f131104"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","cf4de05dcfc68cb0b9ad119750efbc7a"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","25ff1eb3b7cd9b78a8e4976691b8644b"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","055efcd1f304620044907d4d58fd2a57"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","adfb4a847cd87135e0bb75f5dfb60882"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","bb186cb6d0a817ed0329cb6ed959b932"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","aba67505716c96165f1724a11fbcb2cf"],["C:/lmislm.github.io/public/about/index.html","4231c5345a953306f58292b9b29f6eab"],["C:/lmislm.github.io/public/archives/2016/01/index.html","38a140a581e00d32eb11528a2a76cfc1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","5ac907a73136fee3de8c91f9a2c70055"],["C:/lmislm.github.io/public/archives/2016/index.html","0951a6b0e3d01b015bb80dd3c64feb16"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b9ec4645744b6e3915375fcf9af83f9c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0005a4a7b130b33a95280af39ee02c5c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7889ed9b596285e56df1d0f5e03f7bdf"],["C:/lmislm.github.io/public/archives/2017/05/index.html","99041f6c5a4151099eeb064195fd64f7"],["C:/lmislm.github.io/public/archives/2017/07/index.html","853a0c4c7652210417b49ee4c678213a"],["C:/lmislm.github.io/public/archives/2017/index.html","ed0541a4a106dc71753b8e928fd99bd5"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9130abfbe86b6b1d18e4fe02f68fd660"],["C:/lmislm.github.io/public/archives/2018/01/index.html","24b91e45819c9089fdf4c184810b666e"],["C:/lmislm.github.io/public/archives/2018/03/index.html","01e74b4c10543206eb7f820bec9f0370"],["C:/lmislm.github.io/public/archives/2018/12/index.html","8239c15a3fdcc9bdbdf29492697dd33e"],["C:/lmislm.github.io/public/archives/2018/index.html","9d2eafb03ee26e4a5cf62474c2a8438d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","25149d4ec388f678f3e2eb5bd26f9882"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2b77d3ef0a8cfa27e58abe35e64f8c18"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0c90ed461d77f2d006638d93984a8981"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8696c2c1e001cf8754a91439a771b59b"],["C:/lmislm.github.io/public/archives/2019/02/index.html","0ff5c8c8ed1064db3530fd0571aba4b6"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","3c53c36a49df38c505148533689173a0"],["C:/lmislm.github.io/public/archives/2019/03/index.html","1164fffdbc079ace13578937bb8f4287"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","01228d7090c27bbf5719ce6902687234"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","de2e7317df36ffd739192fb37051a138"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","a110d5665b255680fd1290d3f54bf1e8"],["C:/lmislm.github.io/public/archives/2019/04/index.html","f17af519b98b001c3a0c8e037b6fa64e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","2cb61bafc5268e966bfa9dd95ed62184"],["C:/lmislm.github.io/public/archives/2019/index.html","16bedc62418f5539d74cdac854dd42d4"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","7f409cee4d90aae8ce7e1987eba98368"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","cb2f166da7eec552413f7bcfba605069"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","633a8a49591ef4b74d218f447722e7a4"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","50b3f9a2b4f584cf2b186e24c2b446fe"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","46895aaaf7c07dbcb7533a880a361479"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","4cefdde9130d73be538044d9c6d2faf1"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","bc77d83ad566815018fc85191d1c1f43"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","6d54331307ab6b4fc47c5b77337fa08b"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","6b485aa74c4883ccd1a4c72bc155bfb9"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","93a4898589cff17ef166cd5e439dce10"],["C:/lmislm.github.io/public/archives/index.html","4ef50239ff3d7a0ec28fff548de2b642"],["C:/lmislm.github.io/public/archives/page/10/index.html","b1cf09eef42c9598f6c3a25f05f52da7"],["C:/lmislm.github.io/public/archives/page/11/index.html","08641887801ba7b0a14189f50d630d12"],["C:/lmislm.github.io/public/archives/page/12/index.html","b48f435b817e9ccbe8d6164f744ea374"],["C:/lmislm.github.io/public/archives/page/13/index.html","b5777b4c2c2259462871b66d786feda7"],["C:/lmislm.github.io/public/archives/page/2/index.html","f9730fb0c8b21579aef868e8ef5ff56f"],["C:/lmislm.github.io/public/archives/page/3/index.html","0698687271011e38fd826bdacb0f0a40"],["C:/lmislm.github.io/public/archives/page/4/index.html","b236973604deaac1e474658406acfeb1"],["C:/lmislm.github.io/public/archives/page/5/index.html","231564ab478e93b180a82320e4efc3f5"],["C:/lmislm.github.io/public/archives/page/6/index.html","7c7c4d4599d4888ca65d0a78231f867d"],["C:/lmislm.github.io/public/archives/page/7/index.html","e8643a97ace2765c4ce400e2700874aa"],["C:/lmislm.github.io/public/archives/page/8/index.html","a0a165a990ec6bf6c78f68eac9d1fd0b"],["C:/lmislm.github.io/public/archives/page/9/index.html","75eb06fb62cae1ba6eea7bc9775f297a"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","3da2fb82124cb0e39f4b84fea53bd8ec"],["C:/lmislm.github.io/public/categories/index.html","6b03782e123b0f5973535af32bab5568"],["C:/lmislm.github.io/public/categories/xx/index.html","6e4465a80b996d55beffd2d624286538"],["C:/lmislm.github.io/public/categories/学习/index.html","060bf6b20dbc5a5aa1b58a2b99ada43d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","021ec3d8b9f5fad23ffb863498749b2f"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","1498039eeed0bdc304160a138686a38b"],["C:/lmislm.github.io/public/categories/工作/index.html","d763e4e8f9adb6ec574943ebee586e44"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","64072d6631482def8f427ba759cd5e2f"],["C:/lmislm.github.io/public/categories/技术/index.html","b423f5b366f92dd4950c871140f70719"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","fb07d2cfa8967942d9dd5f6baccdaab3"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","ce8874801a5b7f6c7d0247774c5669f2"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","212a7dfbfae8104b0fa63c237972e2a5"],["C:/lmislm.github.io/public/categories/日常操作/index.html","bbe4f1132cdf1abd2489d4872e04b1f7"],["C:/lmislm.github.io/public/categories/生活/index.html","439e427759fe03762fcad57c42042f60"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8fd53913fd632b23685cce85c75e03a5"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","75782d1ea0f3c80732ff4e48aa50a6a2"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","83935ae1579bcbb8cb049142b7d2427f"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","082eea33998e429091a380955d0d1478"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","1260f3cca534c92852d94ba6b56be1b0"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","85449a61a599a1363896e133847f8e3b"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a0f320eed6a9044ccba91d8df05dfe76"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","ac5b420b724c5562a0af131307317d27"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f52421bb14694b82afec9d32ffeedb24"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","292cb3fc942134010aec836a88eb991d"],["C:/lmislm.github.io/public/page/11/index.html","2bed5b597bc95a0de18d8954b32bf5db"],["C:/lmislm.github.io/public/page/12/index.html","ebc9bb88238cea2432ff37c5deacedad"],["C:/lmislm.github.io/public/page/13/index.html","5ee5eb1422af5b3161c49523d0030585"],["C:/lmislm.github.io/public/page/2/index.html","f049be619fb9f77e75d8452800cb2b77"],["C:/lmislm.github.io/public/page/3/index.html","f86f83e03fae7e53f47e18f817aac34c"],["C:/lmislm.github.io/public/page/4/index.html","c3fc6388070778522c8be15f599e6f83"],["C:/lmislm.github.io/public/page/5/index.html","c5032ea48c468cc158247da1e4538db4"],["C:/lmislm.github.io/public/page/6/index.html","9de9836f9358d4231be31d26ecfd6e23"],["C:/lmislm.github.io/public/page/7/index.html","5e7009a225c7fa35a1ee3b83c41c2874"],["C:/lmislm.github.io/public/page/8/index.html","b4ac44f6faa7f2a8f74c4b1d6abbf580"],["C:/lmislm.github.io/public/page/9/index.html","6559b9d60adc07f19b1cba9daed05c07"],["C:/lmislm.github.io/public/tags/Interview/index.html","5ce28badc70fc63553b9570092a4a575"],["C:/lmislm.github.io/public/tags/JS/index.html","d1bc91769caeedee9fa9b9de08013390"],["C:/lmislm.github.io/public/tags/acm/index.html","4a53636a7dc8aa8e4b871014403371c0"],["C:/lmislm.github.io/public/tags/c/index.html","a8c9a9885670c5e984c03cfb9b5b0d29"],["C:/lmislm.github.io/public/tags/codewars/index.html","320b496a1fc8c6fc3e26c74c3ac6275b"],["C:/lmislm.github.io/public/tags/css/index.html","b97f9b41d54d0cb9e24e6db236a3102f"],["C:/lmislm.github.io/public/tags/git/index.html","088c17976e7c1aadae8caeb227b11513"],["C:/lmislm.github.io/public/tags/hexo/index.html","eab84b0022d233d3e1d44048a995bfe1"],["C:/lmislm.github.io/public/tags/index.html","fa730c16995c32fcb47e6cc7dbe05d02"],["C:/lmislm.github.io/public/tags/markdown/index.html","4e4c39f2d51597723b32fb64bd240152"],["C:/lmislm.github.io/public/tags/poj/index.html","00f26f84cbde665edbbee0dd3cdb0ac1"],["C:/lmislm.github.io/public/tags/shell/index.html","408d64ed795025e74b5e6e146431c7e1"],["C:/lmislm.github.io/public/tags/vue/index.html","60ad96e47b50228a6a8cfcd93e5743c3"],["C:/lmislm.github.io/public/tags/xx/index.html","812b0a29e4c5cfceac63684f894f4b50"],["C:/lmislm.github.io/public/tags/前端/index.html","b0f31594574f83e3b4fb083a9473afc5"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a0bc7e897b59b2472434c0da46b3747d"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","56971803410a9b814e36d7b23918b08c"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","0e753c5c113dddc87dcc3af6af76e3a5"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d71676b0058adc27b5ac10b27f9ad9af"],["C:/lmislm.github.io/public/tags/展示/index.html","1366bb756ecf5a2cd5e40644422e1bc2"],["C:/lmislm.github.io/public/tags/工具/index.html","1584a390f5942280cd1071f32d0e3d22"],["C:/lmislm.github.io/public/tags/感悟/index.html","5afa6ca4f10135bc9c49d48fc446e6cc"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","9cb0bf35d59901539cb612e2b0dc7cff"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","cc26ecc402d99cd759261f84f7ee36b5"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e5df4e919e701b578727d3d68722e8de"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","fb24ba1c2ad7b19842cddbad0abd56fc"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","910d7ce18b6c37ceceafb2c5f534845b"],["C:/lmislm.github.io/public/tags/练习/index.html","0bf6b89473a5718d30d3ea32747b2820"],["C:/lmislm.github.io/public/tags/编程/index.html","bbe631a69ee3e64952270513feab6723"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","775b11c9f9bb96833258578089f3bba4"],["C:/lmislm.github.io/public/tags/运维/index.html","535af0e1c3fad4490dec44f5816e1ce0"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







