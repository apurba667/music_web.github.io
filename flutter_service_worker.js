'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.eQ.cache": "38ec4b8289fd529f6de1f4916b928fb5",
".git/COMMIT_EDITMSG": "1940f5caf02a22072bc78b77a201ce44",
".git/config": "e5ef3c7d01d6c4d97918ca4931d4069c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e71b29ce5bda16bd08a9f367318715b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f68af1f31c8e90adff91d4b7305aa34",
".git/logs/refs/heads/main": "5c5fb5e45164c4b71c440fa4d5b27a1a",
".git/logs/refs/remotes/origin/main": "6d4622bff082fd375554a17bb96b6038",
".git/objects/03/2d93095d69a73e64a7efdefd6197ab3d1d7634": "4660021ac8e5bae4a5f6a8f04f2ebff0",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/3242a9b2d214827d05b241e0cd01a2063d1da7": "03fceace1ae2ccffb38d35fafede8bf8",
".git/objects/07/7f7b26ce52780fb8a05acd722f3ce7bc9f258d": "d6827a5c56d0959ac163eae14bb8d680",
".git/objects/08/25ce1f0f1af1da211de7f9959d0e286ba4d462": "6e261200ccf9f11174189a8f4816f875",
".git/objects/08/8cbcf39fb0a602bb7e2fba4ea32313da428b7c": "37038691e7133e63415d4c4018bd0604",
".git/objects/09/755f30bce40d1625f88844d720bf46dd728dee": "a36388f1c11adb6a9315b14bae50e0a3",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/b10d8bcfdfdd9fbd6bd36ca2839594c8d0827d": "bd7a9d725c14a1f08ca37c1620371f78",
".git/objects/0b/dfdbd772e4372cced7310abac4ae5be4e028a1": "9bcac07d12c5c240d9793898f3e7a9b4",
".git/objects/0c/bfc57f906a160c8efb55ffbbbfd18d57a88b1c": "dbb5d4b8e21c49ac964778cb677cb498",
".git/objects/0d/4784eb9e9e48c93a87c642668f5cec57b75dae": "a3998a697d5ae29eee6c06f07947644a",
".git/objects/0f/6579ef92b23568656467860156ceb916158998": "c6b030a74aa1d61165e661571220dbfe",
".git/objects/0f/840506c7a0f5f33d2334f4a247e959c4b2a97d": "59e1b3501e40d9d63b6e8eb8174ec6de",
".git/objects/0f/c16926411bce712114aa94478076e4bce33786": "56a0f95aa4e905c7b890bd5003a578c2",
".git/objects/12/451fe2029da6bc3764b313ea5792244fd23f82": "e8e6ee630256e0ae838f673d535d3870",
".git/objects/13/76b371912ad66fc112be3137b81678204a0b3c": "b55c5426966227874016a347bd3b2932",
".git/objects/13/adfd7dbb8788a1f6c886661ed6458682dcc4a2": "be9bae8ef03f5b03428868aaf7918e12",
".git/objects/16/250834d1c96609c7ec367a063a02081917d915": "40352041903492814275e8f137d5f59d",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/dde4f8ecef974a99e1cf7dce36d80f758bb7be": "d596bbbdd99fd0b148af6a157e00ccd5",
".git/objects/19/01070f18207a78352627793f4512f5e4c88d57": "be67898519ee6e7fb2d94b1075e4b70e",
".git/objects/19/e2a3293fb32cfc24d731674cd283c41af69fc0": "f73523c715904c1cfb1724156ca9ddae",
".git/objects/1b/fba330724217bbe7023746d2db8d9ef365d450": "febcaaeb12e633a4c11727378a10f002",
".git/objects/1c/6afdf69dc1241610735519c29f6981733fff32": "586c51e1f7f64fb9fe69aec3f48ca7d7",
".git/objects/1c/cb4f6a0fba7cc8d0a431ca7fb8043825d3f35c": "e3aac5fee064f4612619f8707c33e526",
".git/objects/1e/987a40c0457172416498f942b6ebc536be7950": "36ea9bdff0c25a3af407bb61356d9fa5",
".git/objects/1f/a9922e9872658a065da126b2c5d1ffd3f666db": "e41d4900e7f60b57e39b72ef2e424842",
".git/objects/21/77430a9020b5c17bd79bc79649acbfa543aeca": "4adc88e170529286aa34db99d4ab5fcf",
".git/objects/22/9e164c3ea04be7c2740cd20c9cdab3ac48a822": "513a54f62709bed003925d3d3578f8f6",
".git/objects/22/b85e6377c928e8506bf1bfa688a7afe9d0649a": "f022cf7595d56cb6b2028893fe9c78b7",
".git/objects/24/a73d6d595318e52019fcea23b9f91a069a8bcd": "c839613a5292be54d775a32419e1b874",
".git/objects/24/ae4494863bac48e39985961172a9131911e3c3": "4ff4413a3229b268c8961954a396c10c",
".git/objects/24/dc2e27eef4e890fd3302a595aea3fe8b86c016": "1c650de3c455319072f1a7d6cc06f144",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2c/bc0528a9094adef75a06e5ac17ce562dd34068": "c2fac5cc0ed98710c9db2aeb8ff4311a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/fab5dfa2b5abb519978ed4520ad083f107f752": "3248fe5741da67d06f485c0d92d589c4",
".git/objects/2e/71ce6d236136d5fff1c0d1ab179468a99f5481": "cc5668a7b54e94c278c9718cf056cca0",
".git/objects/2e/fb8def8b30d98a9e0c9d22cebd13c54f79f717": "08899df9151bc9a3e07ffc72530e998d",
".git/objects/30/cf5cb67a0aaa671d33589721b754035b6a187f": "b64db55cdf70d777067c4064be7055bf",
".git/objects/31/ec1c0ac8c31bb076e51fbb6089006a60694f65": "8cfe0aa326eedd10a0a6507ee6caa7e0",
".git/objects/35/6f7beec37451c3942178074869d6013c0227ff": "2518216f009166a00749f4cd51341a81",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/9d97b7415b5607718f37808b6e33d1e8fedc5e": "bbac07d91c94dc670b6f670e4a8728fd",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/a1a9a58418c138b22b38d9cafbccf0ed2deb12": "efee7ff1827caa44930dc998733454cb",
".git/objects/3c/d8623ba4a7f72ab0c16141be6733daf00b0d1b": "a79bb71b41dfea53cfc70d2b3db81b15",
".git/objects/3d/7844da601f08de6c73792bdde70f7018710836": "0f01aa115ace7a535b2e858a270c6976",
".git/objects/3e/a4464ed611ee3d0110f8bd983a939262748a61": "12080431edc0d2998788a2986d81533f",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/3f/9e9c4411836e8509f912ed0436416876c574f3": "a217f7e45e09f4947db9a7a36da13d83",
".git/objects/40/1253f5a7dd71b39365094d21aee8cf9e1d055c": "57acce1f9983014a988ba3660d6aa8cc",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/40/db88a6def1855890204091e1aa25c0b3b309f4": "a5beef5da1dafa08cb11a682cf67ecf7",
".git/objects/42/73191b398441e8847285c97efa260cf677c1ea": "2cd9e4542882973c80f63ac62b11cb6b",
".git/objects/43/3a5ba467f8b41ac787c66b0e7d27ea5bd43861": "18ef1623c1997943d803f44bbde05f03",
".git/objects/44/2788f49aa18b33e75d08db0d5ed47d850cadf6": "e0048e77e2a8380eed69be9240c1e15c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/47/4b1bfea956392d6f0e102bc1da1039288debc0": "15a1cbbddd9ae56cce5f9650de61b5d9",
".git/objects/48/1e3df63f200fdd095e7734d1974c78c11bb9cf": "2ed9699e0835c3ab4f44b72386cdc87d",
".git/objects/4a/cc1f98c3e9797d9e5a3b75f72b4627d2f73596": "cc305aedfb104e83eb9c8d6aa3d8e46d",
".git/objects/4c/a375018d21736e36260e6c7119a452b14faca1": "87dd39827449b07b7c469d24879998c5",
".git/objects/4d/15cb221804e5358284d02bb38252f781bafadf": "6961b00ba377a0e79ecab592afef2f08",
".git/objects/4d/4c12512f9c392694e39d8b7edc52a7f5c868e9": "35fd26b1d59372f1bba5630054ac63b1",
".git/objects/4d/b85067a97b8a600962f1a0a76f805ca6c6a14e": "82325ebc893dd3e0a14fa1918691719b",
".git/objects/4f/89b33f27430fa4d0b5435bcf97cf6d7e8d2e2b": "475c59ba5c1d2af6d388e70c78ceea13",
".git/objects/51/44fa64e7916d28ba9fc21ebdde67d6e96e37db": "30c4bcbb0d98dfb96c3e06b8d61a3b0e",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/2395cb2095784cfdb28c4e23c447d532c5d67a": "0ab2620186d08799610f73aad151af7f",
".git/objects/56/6b60ea9a61a685823c28d703dc063c46729cd7": "de044ca76f2abdf58586313f45917cb6",
".git/objects/57/536527d8b4970eecf32e4656be0930e3f91f4f": "e8a61f2b82cfed1c6a67f1d8a4e313d2",
".git/objects/57/870f26da629cdd5aa820485ded9e551308e642": "1662ec0ddb91a39e434ff5bbbfb8a52c",
".git/objects/57/b496ef09a558c42cbd9e8a60a1a1b1368687bd": "07e0df1b745f363fb558e7d52ce40cb2",
".git/objects/58/b3cbc6801a27f996f8b9d8fdf0124bdae8542b": "bb3281db7bc75854611919b8217cd357",
".git/objects/58/e4e78f0aae6216db34c5496ad4c82db72773f2": "7178be3122be1ff12e9298d276c92137",
".git/objects/5a/192333699961b330c7cc6d839d059b553d51f3": "f5230730a2491200f60bf6edb0aa1dc3",
".git/objects/5a/e7a170bb13e427f7e32bb9e8ef334e799c570c": "99dbd2d45aaabff497cff6b2db3bd5f0",
".git/objects/5b/e2b1db0131a0878799589140f0001639fe3275": "2d83286d1bcf428d1d3ffb996b5f42c3",
".git/objects/5d/c86d44f0f5359c59051f1eec737df40516818f": "e162b0eb17825cfbe74852360df4f615",
".git/objects/5e/7cfc1a4213cf8af21558401afecd87b39a013c": "91a31eea4bd9869e9e5812ba6adfbd75",
".git/objects/60/6a2849731c1ed549daa13c718af8602c5a8aa3": "35e8f3af089a4b6d878fbf43ee7ee0a7",
".git/objects/61/6a4be78e8941a231e1bea67745a8ccbdf322b8": "8e3f557a2087885bc254e02fbb333507",
".git/objects/62/8a787ad2381ef288ab79933b8bf0b628788443": "8e3ce364abc7dd8cb61d850c684fdb3b",
".git/objects/63/723c180aead4b87e51dcac86b290b093fdd649": "72edd21b08f381b59840aaa3c3aa3825",
".git/objects/63/9e0f720b3e4e647b432f29361b267d60361186": "a5ba3cfc25db78afc10561e06c27347a",
".git/objects/66/0dd539d3a8f58f9c7f1bb9bb1d009352369e3b": "397aba6c8eea95a299bc1f74534ce856",
".git/objects/67/3058620944034847481b718966ac3b41c46edc": "ea7d2b225e57a899ebd56f56468ba3cb",
".git/objects/67/a9178d59fe4c8d75398f70ca7bfd7b9c5996ba": "5b1c462df809b633144bd4b772338c2f",
".git/objects/68/7415f6cae0b144b0d680a8b32d1b04a77b3f3c": "b7c81fbeccfac56b22370c88c0813fbb",
".git/objects/6a/aab509cff4712fa9ea3213eae0529adaaa27ab": "a4568dd2c9efece734b0990e1ab1f8d0",
".git/objects/6c/1c01a7f9721f7f79733b8c40c0fe92b3f09413": "e8b4dbe578635bea1ab4d30de72ccc81",
".git/objects/6c/73128250bdd871dd175d1420c4902a26c5ee58": "13c011d6456e1bf7a81457215c5618b4",
".git/objects/6d/ed6045b26b1f8b7cb6c82543c611a67519e391": "a798becabfe9bcad50050cca2ca57daa",
".git/objects/6e/36bbd397b87307c43bf46d08df36d39a38aea5": "5c9b33ae2acd94f6e08cbe43f75fef19",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/52b18538c86fd67524789762da293e14144be2": "da85c9b5506bb8f752c5bf12bad56877",
".git/objects/73/b0db0050961b6c73a43c5c726cd1c4dc9317b6": "74a85a41f48c89e30880fc15f5a2e30a",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/74/5b1ff29d4082924bde7bee5a0bcb52c7973ccd": "e4f67eeed39462123989d317f0d2dc1d",
".git/objects/74/8a326db2120e9e3b4a9b65d9ca147ca368132c": "c3b5c8cf68732b0aaff67382475f97d5",
".git/objects/75/b72904cb5eb259406727ca27dab131296bf5a2": "4d5fbbddcf377e748faed204aa39cf36",
".git/objects/76/6c66e00c5e119fcb3f8b8dcc29523f50530ff9": "969e14e52f8b07c9569b0620f8e47bd6",
".git/objects/76/9d8f69f94ff3c3d9187d4d3b11f59505439363": "178f36ef49e1499fcc18f21ba412ebfc",
".git/objects/77/1aa24fbf1318c38ad79f09a586412623918950": "f9628f726645814df7bb6e04118f074a",
".git/objects/7a/8923ead1b5958351ac16f52a52cf1311caf513": "1dd3bcec0f6eb255d7f7d2928f493144",
".git/objects/7b/8f2023cf0c6fa1d30b4b3cc792af117debc681": "c13ceb18b5bff7bf6991adec1f9dbff1",
".git/objects/7b/e5a2abb04bee3f40127ae85060f80e2cf9dd7b": "761b8bd6539c6142acb36555b119341d",
".git/objects/7c/33a7bf40f1656ee58c724183d5659d488f1139": "1bf18b64fb418fb0780fbd69a4729a92",
".git/objects/7f/9943a2b870e17386b5d571fe371d7e14c0d7b5": "b447d33ba697a9a6260df511c4c02fa7",
".git/objects/80/84a4c6db56c2851031980523de42f2c63907fc": "eb0d3945cfe857983029f9e3ead0c084",
".git/objects/82/91a2ea62058e9f4c97851e0150a0d319d00e65": "d078b5f8da4d154643737beca53dae84",
".git/objects/82/d4fee7ba8bf843c7fa8df92c66007fbee84552": "cce6cce88db8f889eb196004c6c63904",
".git/objects/83/0d15449486e10b0ad062246259b9e5ab4973ea": "d0e1947961f6bf5c7a824f1a9832d53e",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/86/420398738accb957dffbf81e12976767222a73": "602ec244c60e449999c7eb30d27851ac",
".git/objects/86/897b743306d42ee837aa61709a8f99ee1e9a00": "a1cb0a106dda3334518858434df73c4c",
".git/objects/87/9f561ea63c45b3bc3b30aab6fd4a278f181e1d": "7160081b6fcbb77c31872b504f65f8f9",
".git/objects/87/e6454a9b9ae9a5ac4a0955f8e4238af00f3f39": "924f7403ab80c328b85c855b3bef5c6f",
".git/objects/88/950c19756b410d15dcbd156d19a5279904a4ee": "982a5faed22585a8f0af621db347bc45",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f2e285677d9fb853821317993461e902cf96da": "608356cbcfa3d05793d803abf12b4c3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4dc2f8364f35c44c38484019be19a5bac25007": "812f9a7f6a526544c23f7a20b484976b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8b/eaa3928197981679753ea8e6d236f706c849ae": "e5d005908d284eaff882a6f7610b527f",
".git/objects/8d/69fa793194a68508ae36da6ba291662a305117": "dc6082482a409491ea9fe69643113345",
".git/objects/8e/77e6658bcdcccbd3f2cb2b1769242418ce6f65": "6a983035d575ca8a01e8286273d06cd8",
".git/objects/90/9fce6c714842bba1088b2b43a18e973615d1f0": "317569a8b43a8ce2b0949d80f3719518",
".git/objects/96/122df577e9754d212d288452e034c4031bd98e": "b3f57a2b5ef44b359fee54607cc85477",
".git/objects/96/36612d00f12dad1a68a038926454c5670f05c1": "cfbbb7df1c9420d05134c5e5af205d20",
".git/objects/96/376e9185ec1f29db0561774f670b912e4c5216": "263dccc587d77d328a47a447796ba4c3",
".git/objects/96/7a0b4307b16fe20531d1c2ebe7b44cc2411931": "9727b68fd2871b632d84a1602ac62c64",
".git/objects/97/06827160580c4e6cae97d358dad7e9e419219f": "4e81d43e31c6d173e61307b2fc6e7e23",
".git/objects/97/0d93366a86dca4a994cc20c99e110c25993587": "52e9b806a6b642ddc9bf928fce4c45ef",
".git/objects/97/965e2a7e9081677874d39bc22db530385a7566": "13d0f41ed1a389ded25782ec0abd1188",
".git/objects/99/e2b8a12c821729905bdb7cfaab88f8c0f44062": "5e3741c33bb709c02da3b0db40d09cf6",
".git/objects/9a/dfbc83b93d9ecc7e6af3a80ad348e48a41f50c": "e84cbc43ddee1081e209674b3754d06d",
".git/objects/9a/f4398decdbb737c6b11bdd5b545cbcbf49cbf6": "68a9dbcfedd64f1bea36fd060b39539a",
".git/objects/9b/66d4d19fc10db0ffa3e76a153082a8d463fa66": "2982aad6ded468ab2c3eba20ead5e92b",
".git/objects/9b/6ac9cb62c167742b18ed08e04f026876b05d7b": "9afcdddaa5d25d73620b3e2ff5073d58",
".git/objects/9c/157e70b2b98e2ad78985086cd3cb491200bed6": "dfbaa1fdedca238dd62f86eb611cbd3c",
".git/objects/9c/3a9781d995f6fc798c464dbf32822ea7a4e8f5": "bba696f0d512cd3b8253259f580d28b7",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/137128a3c102288216ee8f66c28f74db37f9bb": "2c1c4809b56a5321a9f1b7acb4575f75",
".git/objects/a1/2659630927403e2ce7513baf24cd37acae1357": "8a43adf908d42fdfa7fafa6769fe2318",
".git/objects/a1/5d93b1a865a1bd4489fa3490fa8ce5e3d18e15": "85400a9b34e3a40c5bc263faefc903a0",
".git/objects/a2/d81e2e1d635d8fb87f3bd5e0edef2906bb9eed": "5ec6d1fcacbe59107393f58d33017ab6",
".git/objects/a3/2e220cda1b9929a7675733976dec15f030aa3e": "52407780a499312cccc2436c5095a514",
".git/objects/a4/875116897693c30d00e10b3edc074a4cc8c132": "01c276295a285b08dffba8733b7d0893",
".git/objects/a6/06ff6b35452648ac0f4edebbd657374bf36334": "a57687d87edc9622077d551d6169c8d6",
".git/objects/a7/300382d945f6f1072ee16502422a0d09c813bd": "ab1dbdb154e66d1b7e4057950ba2f08c",
".git/objects/a7/4cb977cde9ca8e9d53bb957fefb128fe901617": "185387ce75d76d5f9863f31e032f6c70",
".git/objects/a9/d64e4fef637748f54704186696c677fd9b6ed1": "1d85cabc49426f0baf0e951c3f51b447",
".git/objects/aa/5bf79554e179061313a3535e140f148e7c5889": "0b3b7174842ea3ec87aadd3c23d3409d",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ac/c038f11def49f9e4a20534d7a086793c8ef15d": "f0e71e5c3f46b9da364acba764436980",
".git/objects/ac/dfbbf352b0f514a3c58db92aed3172fd274c64": "093670de41ff71f1fb6f8eaff653f5d7",
".git/objects/ad/4552f584126f18be4e29b11e4d99758a71d383": "070803253cecadd6e76e411009410915",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b0/e11e9f7280f833142da3e8550b15ba8c8e1850": "ad6181c560745ca1ce96aba3f927b9c1",
".git/objects/b2/1642bf0fe09d2ff9b86999bca1537a94aed08d": "b49d893c38b551e251a885bc39099573",
".git/objects/b3/41146919ba4a43593aec93df8ea51f0e140879": "e4859e4bc9375a6eec1e0b9c003802e0",
".git/objects/b3/640216c7afef3261726df90b462b74fb6acf50": "8a54429af3eaaded4507bccd0f7f5cca",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/36a225cef1624f1d7ee102e92eaaeb9d0e6aeb": "0a128fe8d74ddbc5a718e39593dfbe87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/25b4d4961a768ae4caf121c1d234a2de59575c": "e11093a564c11bd2287e0e967a118823",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d3c6d88ca2f0d5ae43d0491ef31cccd67a4d9": "fbe519fc77e51ee2e53613ac23b25b3c",
".git/objects/b9/95826380d9a63bb4c7dff36ce8057ce958f1df": "eb3a303edbe82bba63cf6ac8bb43137e",
".git/objects/ba/4ce4bb2e661febcc387028a24ba345113c53a3": "e53fe4f22847f44ed1ed530533e5a8b8",
".git/objects/ba/f8bc0735309a483b4287c7c60c91f69414627d": "4a636290776ae18590ce2dfccd16a30c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/172edece52ea7f483a69a3af75b4ed70fd47ad": "a0382fb968c5224ceb4547a2064343fc",
".git/objects/bd/54e51dc6d51c80c9e730bb5362c878cb98bd57": "38901cd925bcf9755edb3f81bf971557",
".git/objects/be/b32258016812b5245e0af867a76b551a644950": "488a82b8ff1e9b6268335ff0395a893b",
".git/objects/bf/6dcbdc1085f66065e5bf59daf49bb5beeb0b4f": "e03f7d802e791c58d9476bc4898827c0",
".git/objects/c0/15cd5ad7a4e2052b74504d4d5917cfaa41f3da": "ed53de62a63636c754caaa5fb7a75a6d",
".git/objects/c2/a29dc98ab38dd39c324b12599d589970fca42e": "0c31779915c4c24f835f71e3a0792760",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/18a475b51561a2a054bd405a19b6e273980677": "9af54eeb308d3f78ba6871fe1a6cba2b",
".git/objects/c3/915374a7ce858ab155f72f99772e3597804fa5": "ff3fca77282c42eab3ddaa6e43d8ece4",
".git/objects/c4/aced34c843c2a5ecc2b38cad3af1999fe8d1db": "c18acb3b1aa471f98343530d64d05a98",
".git/objects/c4/c42013189845d36e08732efe9debb50f5d2dda": "1914fa9e65dc8dfb31332657062f4fe7",
".git/objects/c4/fbde7562c3be60ec4dcca6e97e939a68b4da6a": "27cc5b28020075a078a2ad525522e3b6",
".git/objects/c5/46751fdafc92d63e68bf5166b9c41f8b488b7a": "edebd39d794541489fd0cb9e280391dd",
".git/objects/c5/56516afc3339860877c61382526dfeb48031aa": "efdd19644a25061e6b7d516c83a6609a",
".git/objects/c5/7e9c2d92a10455e3d6fc85876d605a3f82160e": "db04e12e228e918d1cfa3e8651b5c42c",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/c9/5d32676f707450e27c6ee5704290f0eb0c1a03": "3622e0e9fece42ce083fb28fe4b59a5a",
".git/objects/c9/8ed7244f7dc4832907fefd9f1a0481c08f25bf": "62249073dbd35549df29ab433bc6c55f",
".git/objects/cb/8c6c3af0092ca9829749cf1f6516da8477b022": "ec19f774ea4c733bcbe60d1ffefdd27a",
".git/objects/cd/f4b99cbe6dd9c10afbd6d805fa5c9453315a03": "a929c31dfc31b13cd6ddb4997678fe11",
".git/objects/d0/054ff5fb2aa058d47df780055905a5fe3055f3": "21e3b7a6e694f76b1903bcdaf40d7c88",
".git/objects/d0/5dcf15777f67f0bcaf47f082deac53de68cac3": "a5d992092549a695f63d95414f948536",
".git/objects/d0/809d3148d9df1c067b1d0262e64febf6f5091c": "bc02d4e4023828e24fd300560f32582d",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d3/b9bed2b453d046fdf8a96d6a5d22a40112489f": "10234dd2acb38f618d4c7e91c1daa047",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/6556122c1099890d8ffba5001707f1aa895d85": "70aeb02f9f6ec90c9360e9d53283a164",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/1b8074e6de60862b785c29b7e3a891025f49f1": "82a94ba1860311350d468638a81e54f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dfdce3e6a58ab1cb177e5edc609fa329693b87": "ebd26bf6231e4e2cdf83bedf8b9a09d4",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d9/4b65a4216ebedc1e3b9c79600d25c18073a8d2": "f75ae4278003561a1a55737c043ee789",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/dc/f7c9f8c8f473848c9014afaf4da8fae7d1b8d4": "e8db8a7e2e038978cfff5ef7ee002026",
".git/objects/dd/866e76b4eba4d13b4ad06a0aca1df1e45492e9": "b6a1e60b9b3bfba302e735d10e31f7a5",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/df/3825b170754d56eaeff9bbbccf2108e3837904": "03e0d1c9ec189054fe154679443cabd9",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/e90c635e2cf45aac2fefffae63e7762f9fc091": "f01a55a29d30a91d8dc8df026ce43e09",
".git/objects/e9/f8dbd43f9c55c7ce3c942b7aa0ede69ac7e81c": "a1fa0617aa35c45d2bf46a585b72f416",
".git/objects/ea/69e55015dc64f7c6ca72fe6f226df36ce4e729": "f1e843a0b0239fdbc2b5986ee1b6120f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bb58a949e20ad495bcfcb04fa056b54b011500": "1515c88ad8a97b05d6ae2f112835f975",
".git/objects/ec/ddba4c7a17d4f2d516f9e6c33d489dc9d5433f": "3a0a78cea4d04bfcd013bf869dfc8316",
".git/objects/ed/43b92d981e479521b068f688d7a0043a475562": "c989c302a18645208baeceda9784d509",
".git/objects/ef/6d13db8a9a9e659bfbe9d2e45d7d5bb3f355c1": "35cd23fb340c60dc8cb9cd7e58f8568b",
".git/objects/ef/d8d256520132db11cf97a4494e3dd281f6b2cd": "be8461452dd2501bed36a0cc3d259ec4",
".git/objects/f3/9db2c3b8b62d7c6fa289f176e8359a28943b8f": "e3bc7cc8eb2d0f1e5481dc271b5cfb91",
".git/objects/f3/f6da782483591557d4293d069995cf58541a66": "854e4b3f871f92da3112d93af0f77426",
".git/objects/f4/fa86d60c158f94c42540a362352bd0e3e6e18b": "040fb7287f18b2f3608d281523c3be53",
".git/objects/f5/248938515029727683aa109923a01d7224d3e8": "aca5daca8e6e5d0c1f0f3d1120be1ba8",
".git/objects/f5/da77b9c574ee450ac4634c1c83bb8218665624": "277970395ae7c71b297b71c712ee6e8f",
".git/objects/f6/9161763b727864ec9247d8e1fb348a9e8aed4e": "fff8b52ef6a8f9440bebd09540c6ea30",
".git/objects/f6/da05a1699aea6529e5416c0570d5b9046a35bf": "3e9d1d641c83ea5c1bfdd55ba4e424a8",
".git/objects/f7/425f56240a1bed15238fbefc209da91164c610": "4e27ebab0d0d404cf31d446dbd5990ad",
".git/objects/f8/34cf400e3ddd308b6a30000e86c844ff45a10f": "d2266cc8bbff3b6913ff951c8446c49a",
".git/objects/fa/3af7dd91496ba54957aeed95bf2c759e05c40d": "aa0077b75bb7cb3dbd09c278f17c814f",
".git/objects/fa/3ea2be1b71c18a9459c9e5c4ffb25aede9bb85": "21096763be3996c356342a082925f4f5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/fd/9e365ad928c1974a88a1098dacf2d3781130f1": "199007856f6ec45f30d870455eacce85",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/3a13f412e0055dc42ba15d447f6f0abe4858e0": "b059822579bf6b7c9e1281ef3ab6b7fc",
".git/objects/ff/c5a342a23e47259b5329c40d83d22c427552e6": "d0ddcfb798dc6bb634773ad51b8e8ac0",
".git/refs/heads/main": "19e0b4570b55085e5fc93f18618afd65",
".git/refs/remotes/origin/main": "19e0b4570b55085e5fc93f18618afd65",
"assets/AssetManifest.bin": "ee5824dd4e8d35f86049f35625d2a1cd",
"assets/AssetManifest.json": "db6992e136067845d9092836c4d69dba",
"assets/assets/icons/activity.svg": "ae2564aed50413f62b5716b350fdc5b9",
"assets/assets/icons/activity_selected.svg": "f9930049c30d117cb15dcdab7704701d",
"assets/assets/icons/back_arrow.svg": "f3a4dc0988a1801442d8b0575389efb7",
"assets/assets/icons/chat.svg": "b1cd718d906340d8edb76a713a1433a6",
"assets/assets/icons/chat_selected.svg": "cc414bc7b2427b6395191aea9dacbb7a",
"assets/assets/icons/comment.svg": "bd61516d8d2eb26bbedd230ed1dea9b9",
"assets/assets/icons/comment_fill.svg": "b28728741c61823875bfb5b422a8c88f",
"assets/assets/icons/Delete.svg": "2efd603196c0eb390b4bd6fc009cae67",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/Edit.svg": "10e45cb45eaf38522a2a5d7c5a6f42ed",
"assets/assets/icons/events.svg": "e546cc4bef4ac5e2792f9e2529ae8013",
"assets/assets/icons/events_selected.svg": "02730cd545e68c461475c103de8fe95d",
"assets/assets/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "dd047213ae81e8de3916da9e849d2b73",
"assets/assets/icons/love.svg": "722d9eebe3212adcf213760d24585b5c",
"assets/assets/icons/love_selected.svg": "9dc7646671f0076121856719d3363f4e",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/meets.svg": "b7a9991bb34dcbd5183cc93908a60026",
"assets/assets/icons/meets_selected.svg": "bd09b0edd39dd0d97badab49173f16dc",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/profile.svg": "0612d5e85cb4fa2fc251a07c6e9f9e09",
"assets/assets/icons/profile_selected.svg": "b4dabe7ba258537129bd6e1f0602f5c4",
"assets/assets/icons/search.svg": "3fb096dd707b413343eab8e7c398a421",
"assets/assets/icons/Setting.svg": "ba62e9a779ac34ee9c68ee43942f56f2",
"assets/assets/icons/share.svg": "2e36f84c6c8333dfe86167b91910b1c7",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/transaction_error.svg": "f2e09c79017aaf031d413deb996c74c3",
"assets/assets/icons/transaction_pending.svg": "aa8316858444b80078cbee4d81ed889f",
"assets/assets/icons/transaction_success.svg": "f4f83593658a03e516e9860a7edcf743",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/app_icon.jpg": "845981b82cfe9008648ee08f5f38d95d",
"assets/assets/images/background.png": "33bb76744a1a689df5a73c7d787b59db",
"assets/assets/images/background_vector.png": "15e9b5e0526c938388590d29c4b6152c",
"assets/assets/images/event_image.png": "ea23397b5a3d86bbb9c0f0f817de6f7e",
"assets/assets/images/image1.png": "f1551343242d7d8a2e3ae90142e8b222",
"assets/assets/images/image2.png": "4e4adb800ad348bf001ceb2930edec86",
"assets/assets/images/image3.png": "83791267e8703fe9e23d35a8a810dc82",
"assets/assets/images/image4.png": "bad03e7b63c7c0449be97cf74da8d05f",
"assets/assets/images/image5.png": "3bf7bb62d939dcf3347b3bf4e630fd43",
"assets/assets/images/logo.png": "c3b89cd4d8d01c21f6a8e032747c8a3e",
"assets/assets/images/profile.png": "2d49ec214aded13731af0ac5d23a9ae8",
"assets/assets/images/qrcode.png": "b96869e9cd1a41a5e3d220f35046ee57",
"assets/assets/images/splash.jpg": "61b06ee20764f16e59d9ff51da066bca",
"assets/assets/images/visa_logo.png": "1774dac0981743d4a0b96cec3bfe15e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1521f91003935b2c389a4a2671740b2b",
"assets/NOTICES": "8bbdeaaf2b9028c5f2248f15ade786d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "50fbbff5b32ef4cb9a03bb350d2b1698",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3a3ef4ab45ac71f785a1341d015a656",
"/": "8789cc5fefe7c56139e1622c741c4574",
"main.dart.js": "6497007ba78ca5582987dec730aef4c8",
"manifest.json": "7cb0ef5b9df8ad3381ead30f2c4aaed5",
"version.json": "b00f4eca814849ea5b4aa4411d2d4e69",
"y/index.html": "8789cc5fefe7c56139e1622c741c4574"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
