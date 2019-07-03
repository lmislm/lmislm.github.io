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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","aeaf3de0db4cfeeca135e6909b8b40bf"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","a97a07796a9c9d9363eb0230347e26f2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5796af97d8f581a3d97b87cd45863a7b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","38a4f2c55e2efec0707d3fba76d50bd8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ec903475da1f67112c4844cfe5cd4dc8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","b75da33cd4206895f2a7d3a68a57d20a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","340043de37d8b3ba0cc37368c229ea53"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","d90129b49e64bdecadd56b413afb02cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","37150b0fa22508b7a2efbf7c9ab1f06b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","ca79b99c8732ce5f1a17dbdb38397b9e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","31bbb3daba0799259ef328a2363cf4c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9817fe5d4e9652c36e30b6f6ed4476fb"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","28a8848bd375a726cd117d8b6da9248d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","20e706bf88b69c245fce6560c8d93a8d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","4b0853991271ffa23502fc3ca95f3b70"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","31e7d5cc4752c5bb7647eac3a4601f5a"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d3b9c8cf302e0fda85d33bb61f3ac5fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8c8521cadd66ddde6a6a7793db124cce"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","dd660473f184ad2e588bd91e82691e36"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","4b9d00ff888f80ecee747933b4f9bedb"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","80fe100c19ff126bcaa9f5d5c274b58c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","119cb8504a05bcda45ad60de1ad1c29a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f81789c8ddceba6aad9fe819032fa2ac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","9589715641ded33d88319fc4c454348c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","668cedf110aa9333ffc329a7f42933e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","139818f435b1be94a751fbea7a6dbd58"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","df746dda0ae6c9510c5756040805db30"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","60571abcbab714040be396c29e86c4b2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","336e5f47db88b1cf9f7f33ef2ea2a46b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","acea3e143172dee5d4c87a9934684b35"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","34ff8a15f63541ed8cdf6e3e081ae9f3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d85ca347c392a338c3a903aa915c0a90"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","1f3a897de2871667e1de4880eea64a54"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7b3ae65c551c75194be310238cfc4ca6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","2f5063031402aa51bb8258bbb7849a44"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","bc639caf4749d85889be8750a772307e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","68c3eec6ace4e55c5105a8c0af4d0919"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","04086e0f9d7b20155262920177737875"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","400d26d3c08e5215349b984350005a44"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bf325f8e60a49e7d92e963e5fbedb141"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","931484d8855edc83b88e8a7d87809ac6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b943bd38d06fab4784dd9cf997f589a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e7c6211a7e39ca89072e402c4140a440"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","cdb1a635737ea4116957265f4cf3e018"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","70d875957aa0edaf490fa480393544b4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6b22d73b0db2267f1b686bc9a162f68d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0a0341a14cb26db7c9c25c4319466dfb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","ad3671bb30e28d2bef0756c27d649e4d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","364d1b7829e05ccdcf632d54f2f24b81"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","68e9af6a4289b14f1575d50182ed82b6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","7c4f61533dcedab9df39605eaf6f6cbb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","97134753a386d6fb07da695f139378c8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f950383ed65fd292288dd472939bced8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","03a0cd561a48bed425ccbeb9f8a5208c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","f470c194e8e422e36751613fd43a2443"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2e3ae059941ff66fe90a9b4fd566a8c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","57b57a4d3b13ffbd5749d6fe5406cecf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f8324d8fbbf6444a73148b4000aeac8e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","70e4137bcce43248538e22067ed508f2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","5d50fa6b3baa252a0e58f7934315e16f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","c00643bfedad5e6d7c1b267e5fbc4828"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","7c8fc98c622772de55c9ace2633510f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","41f193be1ad2677ace7196810aafa900"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","30fb800528c4351d44a790ce463f9a40"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","3df3797b82f945a3017f254330354f09"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","46f80c82951124062f142051ef490498"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","ff5158d923ae9434c45dd51a28ef8d61"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","ecec2a384224f612f189a24c2041e102"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","942e1aef4eaea85451bd0d465056e04f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","a6c4ae50fbb8165f577ac040181315d0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","d1a37c727ab5499fe3f1257a47124e28"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","91b4d812708d5830c18b4926ebfb397c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","a3c8d632aefa7846d2a59d12ed8b968e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","148389ea8e935f39e3114fdbd2d24810"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","ac15800ac813136e89a11ca86fc33e0f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","f9e62c17298c7889fa246393b4bb06ad"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","824672ff5daeef60589f6ca41fabf675"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","bf44e51b15903e3f81311db0f2c0a043"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","98a41963465243171f111f0fe1f04ba2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","19d3c6b61e66ec18c5475eec3cb07e65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","6d33fb7a9e0a55b01983ded5e7ad4a43"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","49e722b43accfb7c8b749951cc0962cd"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","7491a998eabd5e5b55b30dad380e4952"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","8ec2efc147d01bf7568e0bb0c02975ec"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","8e3a24cfd8a35c53f0997a6d7d9e9cb8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","1f7dcb567dcfd7a41ee0e75c9db9ca24"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","bac3c51a1f2f4238149e3982ebe93f2e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","06cc5b6d0d8178e3ba4055ea73458387"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","6df4e26af627f77323eda22f8a55a3f9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","d6c55e1aeec2ac05a7df16a766e6ae0a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","23890307d7f74d1cf5e990b2903737d2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","87c26c58b7a7c56a961c1f7cb8c923f0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","9cf4f601e639b1a3b4b4298212ada2f5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","fc830eb4de9f2973ffbd47ef0af07845"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","fd9f7e9580e24a06f2ee5a88d3cb4433"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","73840b3c572492fb53680fbdf996ba40"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","d72c01fd0b8a7b57391578876e96fcbd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","a3b1f21adcdf687d2f05c8d967baf6e5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","a5b283b5588dbd29272db2af21b5b102"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","ffbfebc722a414ae6b455f8ebd2e761c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","577c28a68bac3c041ea19b04558bbafa"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","a87280253074c74d32c592c880455e67"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","1cead9a51ad5ecea9a169e4536bf2c35"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","ea912200364af78f2ee4efee10b23fd9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","509cbabe18dbca12de62ced88ab4b965"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","b0cba3fdd34a7e97ff249c909801c32f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","944e679bee918576b1211aab0b21104d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","5d3ff59a4e9903df21bf6c1490c5b067"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","ccbad70597a5ce0ff14be6bb086c06b8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","a3cd1ab15b1d08c240c482131d385f32"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","9f201d36ec4288d034471735c06cf4ab"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","43be3c5bfacc4124482df1d538234396"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","411845550ecb4304b0bf758c2413b564"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","4acea2c62a08ffe86e38af3f914f8266"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","06821e35c4cd81916f79d2fc0ab05d33"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","5f193ef3081fb5b141dea89d49128158"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","83104f63646cf424fdbb445805ea0120"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","6211d8ad95ca7a08b8d3de808783c925"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","efe24761a78e9273795bb599f7c4252d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","18db4d078a2062cc25530d54a50bf594"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","3910e47789d4e523c6edf945203e75fb"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","24e3ccbe5cb7bb6a9e41554715e11ac4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","fcf5ed33c7900d77a0939913c8b960d1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","21ee86889157cb3e3e77a09fc8707661"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","b7f9c845202184b79889afdfadeda654"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","5b7c036cae1974926967844e9b4697fc"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","cc3b36be3f38b2ab28a86bd09ff6680f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","4f637376bb1fdee04db5595a224473b1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","27e0f8f9d547bc4d0796af7eda42497f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","7e48f826974cf2681e6ad84c95ba4ea4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","ef589eb9d756292d19f8a05d055f2900"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","b3c1a7b295f8002bde7971c5d23d75fc"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","b87603cbd39576e1eb75be94d5588023"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","21c7a46afe7083cd5b034f772b50ccc5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","285e65b7ae7842ed9c2042301d10fdf4"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","87e71bbfb1adb1f2dab2580ab1ea574c"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","635054eeb9eaf2bfe2d89e3e62c30bb7"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","4730114f9f954627f3ce269c1fbdc82c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","b19bea3c0962cf2b227db331c8eb893b"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","0f34ec439b530115da859ecbd1201df5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","6967ddc3f755c2d2ec4c4391ffe65cd9"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","0c8d9bc1a1430c8d96d457e2cdd97237"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","98434add5a863f08020e3caf35b6bf8c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","fe332f7328787a49c56bb43bcda3b5ad"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","cfc6e6c5d29a1f80318d33f12543eb41"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","e49f128a67c260566f00012fd27c6783"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","76f39095ee5c29546e4a7e87087ca28d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","cd8fcf9ad75e6662bf8babc013b97402"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","ad2274018549b5078932a4a0cb72f249"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","ad67f81aef59859071213d313a7ae791"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","1089913102b4f643847b178954cb0224"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","d914a3aa1f04634ec4c6bf1d91b9b1ef"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","247eafa69f0fc4d93d24749a6440655b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","468a1f95df0860a389c02ae3d10e8eac"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","569cdd0d86c31c8a1e7d873bf454ed53"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","55f953c2db44dfe105a359f4dbb3cf42"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","db4b0389d31344fb1f19152e95d3d2fa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","e957119666f33991d3abf3c61e9113fc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","c54660cc5cea61b65e783143131ecd22"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","cd4af02c207308e03e8f4d1e7a1013fb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","1aae9df813f9d0b78dde401853100d00"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","8ac121ad29c59396ba317621a1e76aaa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","3586638294deaf16b99dbfb354a40bc4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","b7fd42ad353226ac847a56302b796b3d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","a9bb925904c87f0b9da897d71cc2954b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","7e90ea853ce7d848fd903b5c2f5e4fe2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","52e248063f07dd8e65b843dfb82433cf"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","0d89f40769b576f871c0910a4aed73fc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","ae8c726f3f94091563af2027f115766f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","3e5c862db0795b8bec8a5188cc69babb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","f0f4611bf99286f5e0c6403531ce4a2d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","c7f189ebfc2891e8ea3497811b29595e"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







