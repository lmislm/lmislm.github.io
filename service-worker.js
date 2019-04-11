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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","45efcbb60d108f36e7226ecfdd95e5c0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f8a7b6d27b0d63c3f667f54d1fcfa1b5"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6473664c2981764d7026a1dd7e9f4498"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","6b92976c341f023febd3d7be311d9a67"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","cfe9b2b28d3fce68ce01fb42e669815f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","aded24f7dc7b2babdafd6378370ce75a"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c59f58a79e26fc3e92a66f0f8e137278"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e7c07c2a47932b01b96e1bc8b3257384"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","52cc8fdd124bec10ce88db2b3fb6a18d"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","fd3e8490ddf7e5d5297f2e92d920ed24"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","038683bcdd033f8db8a0a02c65288504"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","21c1986c3c3f0b3e3f48e3aa8f982cfd"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3456e475ca8f436a568ae5773810db5b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5d8e5b92895890a438d5a7b2e673b4fe"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","012e19d94eb064334b709ad7b6902232"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b4a9f5b41266bbb519f67afa64ca338f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","75c56eea7604cec0daabf5376307df1a"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d4d7d99f4a55df57139669da688b0203"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","0712f83d902c27b5c17a011278cca27d"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0512feafdbb06a4cd5c2448f7ea56752"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","a4428143ad5c49796bc509f72630411d"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","fad70226e3e077a0914fd33b61054425"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0d05ff0f3a50e843d8974dfe2d215093"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","f5349b83ef4118ded8b7ab02295e622b"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","76ef74c82a6218677d10c4b0d0fdfdbd"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","b09391469efd6344c24e57ffb453203e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8a6d302732b3c79a12cbefbaf42f54dd"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9b58d00ad6a0cfe5d88115247c095688"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2521cccd90aefc8129683b509694bb13"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a0c122a594fe1f80ff636c649c2269bb"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c713997385541636a39938014a7b7ab6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","e7fc025eb8a9b641bc07717f724b1b55"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e20d1e19bf89a140106a41b6a9f86777"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ac3ccace22484f8a3fd7d06c18ac7cad"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d88d604df81ac727100fcaf93e0921cc"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","32a4fe30a09bb20cd5646ba77257bac7"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","8a928afbcfe3e329c20324198937318e"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8738cda5a2d40b5e8c43264a36486ce4"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0ae434c8c4478a678157f9ea5de093f9"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","68b7131a93c5131762593f13715e30b9"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f8c12db4e55bb5d69158e07a383f418a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","972d8452c1d65106fc55e8a7e34bb11f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","0d76914d02f616f343007f3d58ed7618"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a477cfe890b06a797fda4ea0d40cb1df"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","5789ff5852a47f10d3fd2096b131be56"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f203288174e24db45ea6bd34f5bb87ee"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3ab74ac211140c45c8e8b95c09f4426b"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","7d4e58ae613c4dd5d5e3e4b8b5bdcd8b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","19b1e952f7e18f8485e26faefc3eac7e"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","fdb27e349b13e24738b6db07f1c99c29"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","4d3fa8702cd19fd5d6e5102b88374097"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","89d0add004ca57e62bd22cfcc121c0aa"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","912007db27c275151487dbbfc936c48c"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","2f451dc4ee93a11d717ce0113a35c68c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","310d380e496fe1964f6090b8181c0fa1"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","aa5d20858c8860ceddb47215b3b9299e"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0c94c1a54e09551da24e04c9150e58c6"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","2a0a3eaf9e4e58d31323c88bbf1f3d2c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","79aacc1ecd3468de0dcb175fb397e373"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","434a97fe41fefca92a22b666b64d3d17"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","72e772aa2ceb8f9cfec045ec3285d1ac"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","3b853420f83b881e64526db00d66130d"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","32705f9c1b5522c0fc3d599dac234112"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","fcf217fda5d90521efbaceaa79dc7a8e"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","649ed6d826f0301967fd2a8ed782f458"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","4df8459d612ab68da8990d36176d6d3a"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","64707fae9f3513f080fd511086e1e184"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","b5b8f25ef5e348c4d5ec72310ad6e64a"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8052266e1be6e4024cb754eb6c992c7a"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1089977bfe8c12abb6e267f43893b365"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","f5b9d53606e3b0d570d8e4debbe7ecb2"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","428bd62defc9005c82be86386d7f5906"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","3f306f3e5b790ca48b3f316e26365581"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","6e59394ce7ea6a9eb43f5a5d61d438f9"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","16ecff1789468a41d3081d5b0939a1e2"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","badb1612c7619b11525379633c9abc3c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","081e9e54205b12f8a9edd950058dcf03"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","772dae1ad213660af0053d339afa1802"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","519fa05ef120d79c73e1ff806138ba84"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","0069672ba65c13b9c539b09dd0edee08"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","0071290db7894bf2e8329c8d2ebe5fb6"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","b47da37e73ae2bcc2e5f2b1029af573e"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c8e57c02eac7dba99a9666534ec3acd8"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","3b11ab10e99a9efa4adf943b1a7465df"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","77db67cf35f70d21cf3cb7e5fc85852a"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d5da952e2f17e4e294876aa9f800f6ea"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","2cad68b380287c50fa85d16b1d740b19"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","cc863d03f08febb24ca686d6bbbe49bb"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","29b0cb5608e0034abeb9fcfebd74223c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","f6cd7afe2ab2a6db0324423cf16fa6f1"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","130ddd84c1bb5eae3919d09ecfa815db"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","868ab6d590e64d76b4a4ce193a261b35"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","04ec8accd69b73ad869fc3669d33e0e7"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","45c89f200571f584bf1d353393cb3749"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","1d60c7945afa89d092adbc2747ce12bc"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","7ffdcd00f38a5954e0e42355f3ab318e"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","f17b04b27eeb3c5cbdb9cd8e677f6eb4"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","33573c3ad29f8c1ca1c3ae038afa45b6"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","da88f67c19a1077faa523b173faf21f8"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","040b72addcb13e90966a2456e47cd370"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","9a01211aafc6f51e3fdbd45704a1f314"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5be746c6400e958691167f8c4d98f36f"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","f5cf72ec592da6e3a69a54f5abea2819"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","b665ecede31d07fe62972c6d7c8ad7c9"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","742715661493876948e209b57ba8103f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","b1bf4396179a3685dd05751860d7ba33"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","deb09a1975508c22b47f63b24706ff98"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","ec322f614ac8229b548790c00d660f12"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","e501dbe9d20fa4ee02b068a40c299f29"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","e710c3beb6c466feb78ea1720de4dd59"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","b0e343f9fe19cd9cbd1cc24cc4615f38"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","4962ad1605bbeedceb83ebda78a60917"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","7cb6f2d130128dcd30425328bb6a4e1e"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","e54144e6b1d90e1513c63bee4cb8186b"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","ebd88d7c5e91ba9dfc785fc20edf8575"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","800760e7f713359d4bdf238d6a021708"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","fa9dda81a97099e1e2534e5483483628"],["C:/lmislm.github.io/public/about/index.html","0d4d9065c8ca6a3517cc0a28c5859f2b"],["C:/lmislm.github.io/public/archives/2016/01/index.html","9113702192bd9163ed13a57fcf5db13d"],["C:/lmislm.github.io/public/archives/2016/03/index.html","919f6b002bf91db8be394ae3f9233c96"],["C:/lmislm.github.io/public/archives/2016/index.html","e86e95912d06053c27a56c219fb9bd40"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c3ddc16c7ee2a837357e4ab09aab7cbc"],["C:/lmislm.github.io/public/archives/2017/03/index.html","cc2bc5b9dcf5d9d025abea4dc567fc57"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1ba8d569e1f2d7fd3bee77bb962f894a"],["C:/lmislm.github.io/public/archives/2017/05/index.html","9929ca66a4180bcbd348f1fca296bb86"],["C:/lmislm.github.io/public/archives/2017/07/index.html","059995adc576ae6fdef0a6b1b3ce85ba"],["C:/lmislm.github.io/public/archives/2017/index.html","67ef2112642004994deee3e6ed8b832d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e57c7cbdb7bbeee2bd52b0ce5c8bc122"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7b448f6348ced72a59c3b1e0b9de4bfc"],["C:/lmislm.github.io/public/archives/2018/03/index.html","fa9899c10e23f3856f52be0b93152776"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c36b6a7bc8e37646c6385da2ac791392"],["C:/lmislm.github.io/public/archives/2018/index.html","03226094f720bc938f05a438d661210c"],["C:/lmislm.github.io/public/archives/2019/01/index.html","9ba40ff27188e9cfede8da8e7148e569"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","6cfc89a4da2748e3a80cd3e78005a5d6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","528c947e500113bc819a3b65b051bd5d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","85b5254cf3b3b59915dbb1bfc34cc629"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a2a821ed6d4f8a3f3fa9bcf70ac7f474"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f30097e727b3583510bffd4b540cb47d"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2d76760459a7b2688136ba76bbcc35bf"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","0c2cfdb0e4753ae3769e3898002b4f0d"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","8065ca51581b52d045bab42b2e3894c2"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","498b83e90d1128b7a4315beb4e34411f"],["C:/lmislm.github.io/public/archives/2019/04/index.html","efc2852fa05d0071e4064653b56ed925"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4c29fe735757441a807e5122b705303c"],["C:/lmislm.github.io/public/archives/2019/index.html","558f5523031c7b69144cf31b413caf5c"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","70f23e46dfb85fc98c8db58d36ae084c"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4dd0aa247456c0ca83e17a0203cd3784"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d5ce5c051f5d815696b0ac58e4a2af35"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","ee0ab80435de314ee291824a3052585b"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","3f8fec16e37260168d486b500190e955"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ffa0ea527a0b6ba921da5d47dfd1ce98"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1136e097d3b68be3a5889193d992dd3b"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","50274c60d411fc0939e307faf61ec5e1"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","272d1a06110f0e205c08ef19e5d10389"],["C:/lmislm.github.io/public/archives/index.html","7418fb758e25c4ce6dc32fa8dd81ad30"],["C:/lmislm.github.io/public/archives/page/10/index.html","1f0c9d66bef2f506638e6d4375abbd70"],["C:/lmislm.github.io/public/archives/page/11/index.html","c12cf791210e3100a0213acec4cb81e2"],["C:/lmislm.github.io/public/archives/page/12/index.html","f6d482798e003a7778b5ea15f31f233d"],["C:/lmislm.github.io/public/archives/page/2/index.html","fac34d371b6d0778201591314633295c"],["C:/lmislm.github.io/public/archives/page/3/index.html","58da57451c3cab2aab73ca05acbc7747"],["C:/lmislm.github.io/public/archives/page/4/index.html","1c789879f15fa7e589a9dfcec0c77a99"],["C:/lmislm.github.io/public/archives/page/5/index.html","e842a7a58c9aea19cb70896be18093ad"],["C:/lmislm.github.io/public/archives/page/6/index.html","325d22390d93b3f409a74b850cefd4d5"],["C:/lmislm.github.io/public/archives/page/7/index.html","120df6f4d7744675b5ea30753b004757"],["C:/lmislm.github.io/public/archives/page/8/index.html","2da031a51ed418824253a708e8782886"],["C:/lmislm.github.io/public/archives/page/9/index.html","e0f43a5d61aef4eecaf99a830e1c6b14"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","0872d453bc576c27e4b0a93cf9a23ec5"],["C:/lmislm.github.io/public/categories/index.html","1eb25ac1bffcfe77d3b4bed0d01ed17b"],["C:/lmislm.github.io/public/categories/xx/index.html","f332974617ad9832e8a7efc2cb8af9c3"],["C:/lmislm.github.io/public/categories/学习/index.html","18b84014eec1dc8a66937827bcb54415"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","402ca5745d5fcf585d0f6be6139c2e8e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","edfb6e4b1a86b7b9ca08fbe4f292ffd2"],["C:/lmislm.github.io/public/categories/工作/index.html","bff6df0470ffa3336f9c0c6b0ba75a28"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","39aeaa13e60ae911cda63937a6100944"],["C:/lmislm.github.io/public/categories/技术/index.html","c1f69d2c14f1c427d827af5d269324ff"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e6cca45d6bf8bfcfae87e2a87276a206"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","f76ae0870750baab78c2b418f9636d33"],["C:/lmislm.github.io/public/categories/日常操作/index.html","78aa1af558b3b62b9858e43cde51c56f"],["C:/lmislm.github.io/public/categories/生活/index.html","9b09a6313926451dd216c79c61d57bfc"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","c6c93b8fc99a8fbc6680827ec6dd1985"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","db366ebe0a31941c7d0826682bb720a1"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","4953e1b52958614e5654e9d52d6bd96b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","d6276b515daaf9da3b1902115788de35"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","0336652cd3b1d9c6271b6c38b91bc644"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","e8d15e0a640848c875232a9bff19db62"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","e70c41fc528b4083a548fe138710151e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d2e729456c22e4d3107ccc1dedf8686a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","06129f7715febed00eb058145791bd21"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","ddd329d6d4d0ae06e889ae82a3a16f34"],["C:/lmislm.github.io/public/page/11/index.html","4cbf029c200e6e944c19d88f13b6ea95"],["C:/lmislm.github.io/public/page/12/index.html","d485819715d7b30320686bbffbed0372"],["C:/lmislm.github.io/public/page/2/index.html","629eaa5e5a69a63a4faddcfb5673c4d1"],["C:/lmislm.github.io/public/page/3/index.html","38cb5909300432fa4daa53c22f05415b"],["C:/lmislm.github.io/public/page/4/index.html","b48502a8b94da554f4533e93c568c9f3"],["C:/lmislm.github.io/public/page/5/index.html","095694c3747375c8d202c5b0b5befc97"],["C:/lmislm.github.io/public/page/6/index.html","5c5beb76725d05f97d79796d27bce52a"],["C:/lmislm.github.io/public/page/7/index.html","5d9c96a59a9f41e2377d40ded1ff697c"],["C:/lmislm.github.io/public/page/8/index.html","4035281f48a78ecf24ea966317d9f36c"],["C:/lmislm.github.io/public/page/9/index.html","477aa04126c29f7498db5511c5a9c04c"],["C:/lmislm.github.io/public/tags/Interview/index.html","2085d2e8c3865e70da6eb5d78a0c65eb"],["C:/lmislm.github.io/public/tags/JS/index.html","2966d6dbf42e7e33c2a9e1482405e4e0"],["C:/lmislm.github.io/public/tags/acm/index.html","aee2a8bcdc3e64432119372018810cf8"],["C:/lmislm.github.io/public/tags/c/index.html","6997d977e5a8a4bb04ed98d55b29ea0b"],["C:/lmislm.github.io/public/tags/codewars/index.html","420fcbb38b76d4eda94a12cc6946546f"],["C:/lmislm.github.io/public/tags/css/index.html","d99dce79252be7ed93e9615992691366"],["C:/lmislm.github.io/public/tags/git/index.html","e0d7954629659c5a2a59afb94b7ff2b0"],["C:/lmislm.github.io/public/tags/hexo/index.html","9d1bd9b12e686b4e7e93b53c2210a70a"],["C:/lmislm.github.io/public/tags/index.html","d9f73f8f468baac3351debc53b8ad9ec"],["C:/lmislm.github.io/public/tags/markdown/index.html","e8bc418c8b0691ab8ad8b02ace24f6b5"],["C:/lmislm.github.io/public/tags/poj/index.html","18ab72d9d74b59bad33ec12ac6bbae83"],["C:/lmislm.github.io/public/tags/shell/index.html","05095a07b1839af2661cea26a11b6f09"],["C:/lmislm.github.io/public/tags/vue/index.html","84f64f3e095c4d557e589bbe4d44dcbf"],["C:/lmislm.github.io/public/tags/xx/index.html","834a0d8515576f36a4c57e1bf9e0c850"],["C:/lmislm.github.io/public/tags/前端/index.html","fd9bdca38129744c322bbbf6b26b98ab"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c387a390468b8cff5c0f97e2b0f79482"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","b6256c1cc9404df16d8be1873d7f7c0b"],["C:/lmislm.github.io/public/tags/小技巧/index.html","a7d583b38ef59f2c78e19b9236c260f4"],["C:/lmislm.github.io/public/tags/展示/index.html","3828ceb61ab6dae32fa84d85653e0e74"],["C:/lmislm.github.io/public/tags/工具/index.html","54a1f144a7598667402a89c861e179ee"],["C:/lmislm.github.io/public/tags/感悟/index.html","0db3a5a371ed3a9ff140f7cf1de9cf88"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","dc34562f2a167264744efed23fe39b34"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","24b8a0e05903cafc6ddb567f86aa5ff7"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","457925baf6068e01a95892a98fc2fe99"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","47cad37a1ea48a56591bba20e9e3a022"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","630234d3d74ad973beecacb8392d75d2"],["C:/lmislm.github.io/public/tags/练习/index.html","fbe6f82980137254d1027b00574469f7"],["C:/lmislm.github.io/public/tags/编程/index.html","3e388de5c4b1dbb9137d34bd3eabd60a"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3272518d965b6819ea44b3c4451b6a66"],["C:/lmislm.github.io/public/tags/运维/index.html","db572438b6bd65edbd5963a7f1a6f72b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







