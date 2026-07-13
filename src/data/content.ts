export type PoemBodyBlock =
  | { kind: "stanza"; text: string; italic?: boolean; bold?: boolean }
  | { kind: "stanza-last-line-italic"; text: string; lastLine: string }
  | { kind: "stanza-html"; htmlLines: string[] }
  | { kind: "separator" }
  | { kind: "special-24101990" }
  | { kind: "special-buffalo-bill" }
  | { kind: "special-yes" };

export type Poem = {
  title: string;
  label?: string;
  titleHref?: string;
  authors: { name: string; href: string }[];
  body: PoemBodyBlock[];
  more?: { title: string; href: string }[];
  image?: {
    src: string;
    alt: string;
    rotate?: number;
    title?: string;
    credit?: string;
  };
};

export const poems: Record<string, Poem> = {
  "celik": {
    title: "çelik",
    label: "şiir",
    authors: [{ name: "ece zeynep unutur", href: "/yazar/ece-zeynep-unutur" }],
    body: [
      {
        kind: "stanza",
        text: "ahşap, pamuk iplikleri, ten ve et\nsesinden tanırım\nküçük ölümün ağdalı balıyla sıvanmış\ngözlerimin arasından\nadımlarını\noysa gerek yok\nçünkü sadece senin için aldığım çilekler buzdolabında\nve kayısılar\nmayhoş, üzgünüm\nerken\ngüneşten henüz nasibini almamış",
      },
      {
        kind: "stanza",
        text: "şıngırtı\nbir-iki-üç, bir-iki\nsinekliklerden yaz esintisi yerine sızan\nsigara dumanını yönetişin\nöyle mahir\naralarındaki derin uçurumu daraltmaya çalıştığın\nkaşlarını manzara bellemiş\nha hala tüten meret titreyen parmaklarının arasındaki\nha göbek deliğimin hemen altındaki deriden bir kırbaç\nbir arkeolog maceracının avcundan bırakmadığı gibi",
      },
      {
        kind: "stanza",
        text: "rahat uyu sevgilim\nüstümüze\nkapıyı kilitledim",
      },
    ],
  },
  "dog-days": {
    title: "dog days",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "kalbinin incelikleri\nkalbinin katı hali\ntırtıklı duvarlarının\nsürtünme kuvveti\nsenin karşında\ninsana hayret gerek\nsevgilim,\nsana kurbanlar kesilmesine\ntabiatın önünde secde etmesine\nşaşırmam\nbazı huylarına şaşırırım\nsonra geçer" },
      { kind: "stanza", text: "yaşlı alman ve sakat oğluyla\nyaşadığın ev\nevinin yanındaki koca kilise\ngüvenmekten yorulduğun gün\npişmanlık dolu torbalar\nyiyemediğimiz yemekler\nhiç gidilmeyecek şehirler\nistemeden katlandığın her şey\nkarşıdan gelen hiç kimse\nben ölüm görmedim\nsenden ayrılmak\nadını koyamadığım bir şey gibi" },
      { kind: "stanza", text: "burada davrandığım allah’a\norada uzaklaşırım\nallah seni kıskanır\nhalbuki ikiniz de benden\ndaha gerçeksiniz\nellerin hakeza\nöyle tutulası" }
    ],
  },
  "yerine-koymak-istemez-misiniz": {
    title: "yerine koymak istemez misiniz",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      { kind: "stanza", text: "nasıl dersen öyle\nhaberdar oluyoruz\nmobeseden bildirim geliyor kardeşim" },
      { kind: "separator" },
      { kind: "stanza", text: "baktı bakıyor buharlıgece ışık-tozluduman\nkendini bırakmak istedi kumandan\nkara kutu kutulardan dalgalar boyu uzanan\nkulağın artık yok ey komutan" },
      { kind: "stanza", text: "gayri menkul olur sana\nolduğun yerde olduğun gibi yaşamak\nen uygun boşluğa yerleşmeye çalışmak\nkalıcılıkla ilgisi bakımından" },
      { kind: "stanza", text: ".hermesin adresi\ntozkoparan mah. gidengitti caddesi\nunutkanlık apartmanı insanın halleri" },
      { kind: "stanza", text: "tabipler sıyırdı rahat olsun\ngeçti\n." },
      { kind: "stanza", text: "pek çok kafasız hesaplılık\nböyle değil midir bir bir var ederken dünleri\notuzmetrekarede\nışık yine yok, ayağım bulacak mı yerini" },
      { kind: "stanza", text: "vücudun hakkını veriyorum\nkelimelerle kaşıyorum derini akıyorum\ngizler aleminde nuhun cruise gemisi" },
      { kind: "stanza-html", htmlLines: ["burada <strong>ROMA ASKERLERİ</strong>", "burada <strong>ÇEVİK KUVVET</strong>", "burada <strong>TIMARLI SİPAHİ</strong>"] }
    ],
  },
  "wisteria-magnolia": {
    title: "wisteria, magnolia",
    label: "şiir",
    authors: [{ name: "öykü özmakinacı", href: "/yazar/oyku-ozmakinaci" }],
    body: [
      { kind: "stanza", text: "Kim bilir ne kadar zaman oldu\nsenin arkana saklanabileli\nbaşının arkasını göreli\nkimyamın güzel alnından öpeli\nsaatin kaç olduğunu bileli" },
      { kind: "stanza", text: "Kabuk her çatladığında ellerim hep çok meşgul\nSilahlarımı elbisemin eteğinin altına saklamakla\nToprağı kanla sulamakla\nŞehir özellikle acımasız\nher nar yağdığında\nDenizsiz deniz kestanesi gibi\nDilinin ayarı yok gibi\nBensiz sen yok gibi" },
      { kind: "stanza", text: "Nefes al, duman solu\nKalk yat, okul yolu\nKaranlık kentin kayıp çocuğu" },
      { kind: "stanza", text: "Büyüyünce ne olmak istersin diye sordular bana anaokulunda\nAşkın evinde bir casus\nsuyunda bir kuğu\nmorsalkım ya da manolya\nbabamın evinin ruhu" },
      { kind: "stanza", text: "Hepsini bildim\no kadar iyi bildim ki\nunuttum" }
    ],
  },
  "kizil-ruzgar": {
    title: "kızıl rüzgâr",
    label: "şiir",
    authors: [{ name: "caner torun", href: "/yazar/caner-torun" }],
    body: [
      { kind: "stanza", text: "Yılların hesabı raks istiyor\nAynada sima siliniyor\nTamam yeter\nIt’s all feigning away\nYa da soluyor ne bileyim işte\nSessiz olur musun" },
      { kind: "stanza", text: "Artık söyle meramını ya da sus\nedebinle ebediyen\nMuzafferiyette yiten havari misin\nSen ki özenilesi ve gericisin\nBak yine susar davulun" },
      { kind: "stanza", text: "Burada masal ehli yok\nRomanlılarsa hiç olmadı\nBil ki bu ölmek sanatıdır" },
      { kind: "stanza", text: "Dudaklar kıstırmış\nKızıl rüzgâr bürünmüşüm\nMaktul kulenin tahtına\nBir de güzel sırtımı vermişim\nBu bir gömmek sanatıdır" },
      { kind: "stanza", text: "Konuş konuşabilirsen" }
    ],
  },
  "suru": {
    title: "sürü",
    label: "şiir",
    authors: [{ name: "caner torun", href: "/yazar/caner-torun" }],
    body: [{ kind: "stanza", text: "bir Türkiye adam\nyaşlarını hatırlıyor\nher yer duman\nve bir dolu adam\nölen dünyada\nol dahi olmak da olamıyorlar" }],
  },
  "yasasin-deniz-kenari-ahalisi": {
    title: "yaşasın deniz kenarı ahalisi",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [{ kind: "stanza", text: "Yaz bitmeye yakın sıcak kalınca deniz\nBen ve benim gibiler denize girmeyi severiz.\nHer şey soğumadan deniz suyu kristalleşir\nVe hep birlikteliğimle bütünleşir.\nYüksekten düşersen kısa mesafede\nTek bir nefeste dikkat etmezsen\nKum akorları doksandört senesinde\nYeni doğmuş bebek ise memesinde kimlerin\nTebrikler sörfçü hanım ne güzeldi onbeş dalga\nÇıkınca davul çaldım senin için\nSen de kalk ayağa çok yaşa değil mi!" }],
  },
  "gigantic": {
    title: "gigantic",
    label: "şiir",
    authors: [{ name: "nikita", href: "/yazar/nikita" }],
    body: [
      { kind: "stanza", text: "a big sigh for my grandpa,\ntwo more for me and my mum\nthe size of death is nothing,\nso be gigantic!" },
      { kind: "stanza", text: "to live is to climb mountain peaks\nit's to love\nto understand\nto cry and to try" },
      { kind: "stanza", text: "now, i know\nhis belly filled a universe,\nso will my heart,\nand your coffee stained eyes" }
    ],
  },
  "beton-ormanda-tarla-faresi": {
    title: "beton ormanda tarla faresi",
    label: "şiir",
    authors: [{ name: "aras arslan", href: "/yazar/aras-arslan" }],
    body: [
      { kind: "stanza", text: "Hayat yokuşu dizime ağır geliyo’ biliyo’n mu?\n22’den geri çelik başlı postal eserleri kaldı\nEklem tutan inat rutinlere döndü,\nBiz erişkine, memleket cehenneme" },
      { kind: "stanza", text: "Ruhu yine buluyoruz elbet balkonda bi’ fincanda\nOrtak dil ve sohbetin eksiğini telve kapat’cak\nKi daha topuk delen taşlar anılacak\nKimi cebimizden düşmüş, kimi her zamanki elden fırlamış.\nVelhasıl, buralar hala aynı aslında\nYener abi küfretmeden vites atamıyor,\nTırnak tırnak delik deşik en öpülesi avuçlar,\nVe damalar kükürt, asit, çay dolu" },
      { kind: "stanza", text: "Da işte, nası’ çıkaracaksın huyu çıkmayan candan?\n27 yıldır deniyorlar, deniyorum\n“Hiç olmasa mıydım?” diyorum,\nFikrim kayıyor.\nBabamın inadı inat sevgisi, anamın gözü kör neşesi,\nAbimin, ablamın büyümüş de küçülmüş bana bakan suratları,\nToprağın en püründen süzülüp gelen dostlarım;\nAsosyaller, dahiler, garipler,\nUmarı kendi gönlüne sığamayan kardeşler,\nSen;\nUtanıyorum." }
    ],
  },
  "prehistoric-bir-guzelligin-var": {
    title: "prehistoric bir güzelliğin var",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      { kind: "stanza", text: "senin ellerini kırmızı çamurdan yaptım, kuruttum\nbu bir melodrama olsaydı bütün ciddiyetimle ciddi parmaklarımla ciddi ellerimle\nuzun zaman önce heybetli dağların tepelerine bırakılmış\nüç insan boyunda taştan gövdeler çok eskiden\nsenin ataların yüzyıl yaşayıp hiç uyumazlarmış üç insan boyunda\nkaşlarımı çatarak konuşmaya başlardım, dudaklarımı kemirerek,\nburadan çıkış yok herkes uyurken yatağımdan kalkıp yastıklarının altına üfledim\nturuncu bir hayal kurdum, hava çok sıcaktı ayaklarım yürümekten yorulmuşlardı\neminim sabahın ilk ışıklarını kaçırmayı hiç sevmezsin." },
      { kind: "stanza", text: "şimdi sana en çok korktuğum şeyi anlatacağım kulaklarını aç beni dinle\nçocuktum bir mağaranın içinde unuttular beni\nsırtımı taşa verirsem taşa dönüşecektim yastığımın altında ellerimi birleştirdiğimde\nbana böyle söylemişlerdi. zaman çok hızlı geçer ağaçların kökleri\ntoprağı sandığından sıkı tutar doğduğumda da elimin ortasından bu çizgi geçiyormuş\ndik kafalılığımı bu çizgiye borçluyum bana böyle söylemişlerdi\nzaman çok hızlı geçer karaağaç gövdesinin ne zaman yarıldığını sarmaşığın dört kolunun dallarını ne zaman kavradığını" },
      { kind: "stanza", italic: true, text: "mağaranın ortasında kurbanların kanının akıtıldığı bir sunak varmış\nduvarın ortasında nasıl ne zaman oyulmuş bir delik uzun günlerin güneşleri buradan batıyor" },
      { kind: "stanza", text: "unutmak için getirmişler beni dizlerim bütün ciddiyetiyle boşalıyor\nsana böyle hikayeler anlatıyorum dizlerin boşalsın istiyorum" },
      { kind: "stanza", text: "yarın uyandığımda ilk iş bu oyunu bozacağım\nbeni sinirlendirmek hiç de sandığın kadar kolay değildir,\nsenin hakkında birçok şey biliyorum hepsini ben düşündüm\netrafında döndüm söylemem gerekenleri hatırladım söylemem gerekenleri\nsöyledim" },
      { kind: "stanza", italic: true, text: "gözlerimi kapattığımda yüzünü hayal edemiyorum" }
    ],
  },
  "mahseri-doku": {
    title: "mahşeri doku",
    label: "şiir",
    authors: [{ name: "emrullah şekerci", href: "/yazar/emrullah-sekerci" }],
    body: [
      { kind: "stanza", text: "sapsağır parçalanır kimliği, beni çiğneyip çalakalmış\nfiravun ağını göklerde ve asılıyor kendi yerine\ndüşü kayır ummadığın zamanda, dar ve yoksul ân\naşırmış kendi boynunda – sonsuz süreğen" },
      { kind: "stanza", text: "çerçevesinde sürç ve de ki; cismin dokusu sızıyor\nağza yakın sevinçler ve görünüyor kendi yerine\nölü kayır ayaklarıyla, kapanıyor yarası ağzın\ndevrik tacın bütününde – birebir çoğalan" },
      { kind: "stanza", text: "bağlarlar sönmüş dünyaya, ilkinde tebessüm\nsorarken düşlüyor yarayı ve duyuyor kendi yerine\nbir nabz ağı kabarcıklı, yasasında kült mahşerin\nkoşturan uyruğa sorsun – zamanla kararan" }
    ],
  },
  "yes": {
    title: "YES",
    label: "şiir",
    authors: [{ name: "uygar", href: "/yazar/uygar" }],
    body: [{ kind: "special-yes" }],
  },
  "masal": {
    title: "masal",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      { kind: "stanza", text: "tahmin ettiğinden biraz daha zor olacak." },
      { kind: "stanza", text: "bulut gibi bir oğlandı. saçları kıvırcık.\nismi h ile başlıyor.\nköşeli bir şey görmeyeli uzun zaman olmuştu.\ngümüş yaprakların isimleri vardı.\nve sis uzun sarı saçlı perilerin elbisesine dolanıyordu." },
      { kind: "stanza", text: "elimde kesmeyen bıçaklar var. burada kan akıtamıyorum.\nbütün renkler parlayarak\nmetalleşiyor. birzamanlarhatırlanmayanlaröncesinde\nateşle\nyüz yüze gelmemiş\nhiçbir\nşey." },
      { kind: "stanza", text: "dünyanın ucundan\nbir adım daha.  nereye" },
      { kind: "stanza", text: "oğlan evi terk ediyor." },
      { kind: "stanza", text: "kanatları çıkıp kesildiğinde bronz yeşili.\nsonra bakırlar paslandı. sonra bir başkası. bir başka" },
      { kind: "stanza", text: "bunları toparlayacak gücü var mı. gerçekler-\neğilip bükülebilenden kof kabuklara\nyöneldiğimi de gizledim. bundan sonra hep daha zor olacak. düştü dünyaya olan borcunu ödemeye. bulutlartuzbuz ve kokmaz\ngittikçe ağırlaşan\nyaşamaklı bir çizgiye döndü." },
      { kind: "stanza", text: "olmadıysa baştan madem çocukların gözleri kırmızıydı ve zar zor nefes alıyorlardı. bazı organları yenidoğmuş zayıf ve titrekti. bir yarığın içinden çıktılar.\nordadan daha bundan çok var." },
      { kind: "stanza", text: "kapıları kapatırsanız giremezler kale muhafızları ve baş büyücüler bütün başları başa\nkaşlarını kaldıracak yüzünde komik bir ifade belirecek.\nbütün bunları oyuncak evlerinin tanrısı yapıp yıkıyor." },
      { kind: "stanza", text: "bunu dün biri rüyasında görmüştü." },
      { kind: "stanza", text: "üstümüze gelmeyin artık ne olur bizlere acıyın.\ntekrarı olmayacak bundan sonra bu benim tek atımlık kurşunum ıskaladıkça cebimden yenisini çıkarıyorum.\ndümdüz dedin bak ne hoş.\nbaşladığımız yere dönemeyiz çünkü iz bırakmadık. toprak çok çamurluydu yahut,\nayaklarımızın çizgileri silinmişti." },
      { kind: "stanza", text: "durup dinlenmekse bazen nefesi daha çok tıkayabilir. bunu yokuşta öğrenmiştik." },
      { kind: "stanza", text: "bazılarıysa şikayet ediyor." },
      { kind: "stanza", text: "madem ipin ucunu çakmakla yaktım. elastenpolyester naylonpetrol ve türevleri içeren hammadelerin uçucu pis kokusuyla bütün telekler kendi karınlarının içine çekildiler." },
      { kind: "stanza", text: "belki bu sefer başka olabilir." }
    ],
  },
  "nerede-kaldin-gec-oldu": {
    title: "nerede kaldın geç oldu",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      { kind: "stanza", text: "evin ahalisi üç katlıdır, bütün odaları bitişik\ngözleri kırmızı babamın, çok susmaktan parmakları\nsabahlara kadar sevişiyor, her sabah evden çapraz etekli kadınlar çıkıyor\ntırnaklarının sesine uyanıyorum, ben evden çıkıp her sabah\nyaşadıklarımı yaşamaya kapıyı babamın üstüne kilitliyorum\nuykularını uyumayı hiç bilmeyen bu adamların bu kızları\nkızlar toplayın beni evin her köşesindeyim\nsöyleyeceklerimi hiç söyleyemiyorum\nzaman böyle uzayandır koridorlar bizi birbirimize bağlar\neteklerimi topluyorum, ayaklarımı topluyorum, tırnaklarımı topluyorum\nkara kaşlı kara gözlü bir sevgilim vardı, ona da söyleyemedim. sonra beni bıraktı\nevin ahalisi üç katlıdır" },
      { kind: "stanza", text: "hepsi beni böler" }
    ],
  },
  "sadness-prevails-all-again": {
    title: "sadness prevails all again",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      { kind: "stanza", text: "memlekette yalnız burda kuzgun var\nallah topun bin belasını verdiğim şu günlerin hatrına\nbiraz da beni ansaydınız gün böcekleri\nsoğuk şerbetler içtiğimiz ilk eylül akşamında\nçirkin sivilcelerimizleydik\nsen ki demiştin peygamberler şehri çocuğusun\nsöylenilen her şeyi en az bir kere duymuşsun\npembe tokam boktan gömlek ve ilk kez bir dört levent galibiyeti\nşiirin umrunda bile olmamalı\ngeride bırakılan birkaç hikâye bence\nsomon balığı tarlasında leş gibi zeytin\nve kim bilir nerden çıktı bu akdeniz rüyası\nya, bu kaşıntım hiç bitmez\ndelikanlısın sen de ve asla unutmayan sıcak pijamalarım" }
    ],
  },
  "maverick": {
    title: "maverick",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "bu oda bana bağıra çağıra küçük\ndedim sığmayınca köpekliğim giderim\nben sınır çekmem ben alan alırım\naldığımı yerine koymam tam kere benimdir\nüstü terim kokar ekşi tatlı\nbaşka yırtıcıları çeker daveti\nbendeniz hayal kırıklıklarının tanjusu\nfox in the box" },
      { kind: "stanza", text: "jason molina’nın bıraktığı yerden\nmakinayı sana çekeyim ey bıçaklı\nağzım tükürük dolu\nçapayı şimdi nereye atmalı\nhaydi örüntüm sımsıkı tufan\nbastır düzenin suratına\nzamansal ve üretken olan her şey\noyunun dışında\nyaz makine\nböl makine\nçöz makine\nbizim dilsiz kullarımız\nkomodor dervişi\ninceden de tech-savvy" },
      { kind: "stanza", text: "ama dervişlerse gelir\ndervişler derviştir\nve dervişliğini bilir\nsakın ola karıştırma\nola ki karıştırdın hatırla\nbendeniz fırsatçı köpek\nbastır beni suratına" }
    ],
  },
  "gumruk": {
    title: "gümrük",
    label: "şiir",
    authors: [{ name: "caner torun", href: "/yazar/caner-torun" }],
    body: [
      { kind: "stanza", text: "İptidai aşktan mustaripseniz korkmayın\nMide-i ekberimiz size nazırdır\nMademki kalbiniz tüketime hazır" },
      { kind: "stanza", text: "Ezkaza vatandaşlarımıza duyuru\nHislere vize serbestisi" }
    ],
  },
  "mujde-sey": {
    title: "müjde şey",
    label: "şiir",
    authors: [{ name: "emrullah şekerci", href: "/yazar/emrullah-sekerci" }],
    body: [
      { kind: "stanza", text: "birbiri izinde eksiltilen ayarı dar\nmüjde biriktirir kendine amansız\nkıssa bir düşünceye dair denenmiş\nhafıza içerisinde bir platonik ten" },
      { kind: "stanza", text: "kendi adında meydanı biriktirir iz\ngörünür içerisinde kovan bir ağırlık\ncanın kabarır uzantısı taştığında\nbir müfredat üzerine vebali ölüm" },
      { kind: "stanza", text: "nasıl anlatılır nasıl bilirim bunu\ntaşımaktan yeryüzünü izinde bir\ntekliğin yanında inanacak şimdi\nözünde bunu boğmuyor hayali" },
      { kind: "stanza", text: "lekeli bedeni yansır ve tuzağa\narasında hummalı bir sedef\nötekinin iradesiz karmaşıklığı\nyolunda korkuyorum amansız" }
    ],
  },
  "goteborg": {
    title: "göteborg",
    label: "çeviri - eileen myles",
    titleHref: "https://www.poetryfoundation.org/poetrymagazine/poems/153229/goteborg",
    authors: [
      { name: "onur duman", href: "/yazar/onur-duman" },
      { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
    ],
    body: [
      { kind: "stanza", text: "daphne & alice için", bold: true },
      { kind: "stanza", text: "eve geldim ve\nbir dolu şu\nur kaybettim." },
      { kind: "stanza", text: "bir zamanlar\notellerden tepsi\nçalardım\n& şimdi bardak\nçalıyorum" },
      { kind: "stanza-last-line-italic", text: "baya istediğim bi\nhavlu vardı.\nisveç havludan", lastLine: "anlıyor" },
      { kind: "stanza", text: "bi gömlek vardı\nhavaalanında\nbeyaz,\nher şekilde benim\nkini katlar" },
      { kind: "stanza", text: "eni\ndışında" },
      { kind: "stanza", text: "ben de o genişliğe\nbi yemek ısmarladım &\nneredeyse uçağımı\nkaçırıyordum." },
      { kind: "stanza", text: "koştum\nkalbim\npatlayacaktı" },
      { kind: "stanza", text: "o kadar da\nhızlı değildim" },
      { kind: "stanza", text: "benimle birlikte\nkoşan\nbi adam vardı" },
      { kind: "stanza", text: "36 diye\nbağırdım\ndostane" },
      { kind: "stanza", text: "beni sallamadı\nama sonra" },
      { kind: "stanza", text: "sağa sola\nbir şeyler dökmeye\nbaşladı." },
      { kind: "stanza", text: "bana\nda\nolmuştu." },
      { kind: "stanza", text: "çok fazla\nkahve" },
      { kind: "stanza", text: "çok çok fazla\nkahve" },
      { kind: "stanza", text: "keşke biri\nburada\nolsaydı." },
      { kind: "stanza", text: "çok\nhassaslaştım" },
      { kind: "stanza", text: "on\nsaat\nuyumuş" },
      { kind: "stanza", text: "birisi\nvincent price\ngibiyim\nhiç olmasa" },
      { kind: "stanza", text: "yumuşak sesim\nfısıldar\nrastgele bir şeyleri" },
      { kind: "stanza", text: "şiirimde\nbir kadın\nvardı" },
      { kind: "stanza", text: "aslında kastım\nrüyamda" },
      { kind: "stanza", text: "ve görüştüğüm\nbirine\nbenziyordu" },
      { kind: "stanza", text: "önceleri\nhayır aslında\nonun\ngibiydi" },
      { kind: "stanza", text: "sanki\no olacaktı" },
      { kind: "stanza", text: "ve öyle\nyoğun bir\nzamandı ki\nikimiz için\nde" },
      { kind: "stanza", text: "o bir şeyleri\nbitirmeye\nuğraşıyordu ve ben\ngünlerce\nuyuyordum" },
      { kind: "stanza", text: "muhtemelen deli\nişiydi\nve benimle\nkafa buluyordu\nama" },
      { kind: "stanza", text: "aramızdaki boşluk\nkapanacak\ngibi\nhissettim" },
      { kind: "stanza", text: "gerçek olmalıydı\ndedim" },
      { kind: "stanza", text: "böyle\nhissettiriyordu" },
      { kind: "stanza", text: "demek\nbu şekilde\niki birisi\nbiz olabilirdi" },
      { kind: "stanza", text: "bu coğrafi\ndram" },
      { kind: "stanza", text: "çoğu zaman\nkişiler olarak\nzuhreder" },
      { kind: "stanza", text: "yavaşça\nöne doğru\neğiliyordum" },
      { kind: "stanza", text: "kapatmak\niçin\nküçük" },
      { kind: "stanza", text: "mesafeyi" },
      { kind: "stanza", text: "rüyamda\nafalladım" },
      { kind: "stanza", text: "çünkü\nherhangi\nbiriydi" },
      { kind: "stanza", text: "huyum\nböyle" },
      { kind: "stanza", text: "paylaşmak için\nbenim\nol ki" },
      { kind: "stanza", text: "kahvemi\nböylesi daha\niyi" },
      { kind: "stanza", text: "öğrenciler!", italic: true },
      { kind: "stanza", text: "kahve\niyi\nolması gerektiği\ngibi" },
      { kind: "stanza", text: "günün\nbu\nsaati" },
      { kind: "stanza", text: "istediğim\nilişki\ntam bu" },
      { kind: "stanza", text: "kara\nsıvı\nbeni uyandıran\nçalınmış bir\nbardakta" }
    ],
  },
  "haziranin-kesfi": {
    title: "haziran’ın keşfi",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "ellerimi kullanarak veya kullanmayarak\nsağdan sola koyduğum\ndenkleştirdiğim tüm olmazlar\naşkımın aksak tınısı\nbeni affedin" },
      { kind: "stanza", text: "gün döndüğünde elbet\ntütsülerim yine seni yanar\nkesme yakuttan\nyahut mürver çiçeklerinden yapılma\no akşamüstlerinden birinde\nbir tavşan\nalacalı bir tilkiye rast gelir\nbeden geçmişi şimdi zanneder\nkendi sağlamasına durur\nnesnenin sürekliliğini zorlar\norada mı diye üç kez yokladığım\nancak bir yumru kadar olan kalbi\neğer ki durursa diye düşünür tilki\npek bir şey değişmez ancak\nkendi kendine patlayan bir sivilce gibi\nşükür ki biraz gece ve sonrası\ndevrimim yine diskoya çalar\naşık ve kanlı\nkekremsi kırmızı yemişler gibi\nçatlayan genç bir sesle\nboşalmaya benzer" },
      { kind: "stanza", text: "tavşan kaç\nburada duramazsın\nhayalleri ve ayrık dişleri\nalacalı tilkinin\ngözlerine bakıyorsun\nsonunda yalnızsın" }
    ],
  },
  "ya-siyah-ya-beyaz": {
    title: "yolunu öğrenmemiş nehirlere",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    image: {
      src: "/images/yolunu-ogrenmemis-nehirlere.jpg",
      alt: "yolunu öğrenmemiş nehirlere için çizim",
      title: "yolunu öğrenmemiş nehirlere",
      credit: "çizim: Rachele Demarchi",
    },
    body: [
      { kind: "stanza", text: "kulakların yetmiyor soruyorsun anlamadığında\ncevaplara ulaşacaksın, kapıları aralayacaksın\nhep alelacele hep koştur — bulamayacaksın\nkapını kapatıp pencerenden maviye yeşile,\ngüneşi sana ulaştıran boş küreye,\nyolunu öğrenmemiş nehirlere\nbala dönüşmüş\nher bir çiçeğin kimliksizliğini\npatikanın aşağısındaki çeşmeye koşarak giden çocuğun\niradeyle hiç işinin olmadığını\nsıfırla birin sana ihtiyacım yok dediğine kulak vereceğin o pencere kenarını fark\netmeyeceksin fark etmeyeceksin rahminde zehir yuttuğun o benliğin lanetini" },
      { kind: "stanza", text: "you are cursed with simplicity", italic: true },
      { kind: "stanza", text: "ya siyahtır ya beyaz\nkeserek almışlar seni annenin karnından\nkolaylaştırmışlar işleri\niki yol var diye görmüşsün\nacılı ve doğal olan yol seni öldürecekmiş\nacısız hızlı olansa sana bütün bir hayatı getirmiş\nseçmişler anneni ve seni yaşatacak yolu\nöğrenmişsin işleri kolaylaştıran siyahı\nbeyazdan kesin ayıran yolu\nsınırlar ve tanımlar olmuş kalplerin ahı\nya siyahtır ya beyaz" }
    ],
  },
  "ezbere-saman": {
    title: "ezbere şaman",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "bana inanmasan da\ninanabilirsin bunca şehrin yaratıldığına\nartık çok bunaldın kalk gidelim\noltanı at birine elbet denk gelirim\nbak yeni bir desen tutturdum ıslığımla\nsık dişlerini iyice sık ki dökülsünler\nkuvvet ham derime keskin\nsokağım yorgun sırtlandım yüzyılını\niçimin yağlarını eritecek ne çok şey var\nisrail’in köpek kolonisi\nah şu berlin bir daha bombalansa!" },
      { kind: "stanza", text: "sigaranın tadı ne zaman karamele çalarsa\no zaman çağır beni\nmüziğin sana dediği gibi\nuçucu bir koku başını döndürse yeter\ntelefonun çalabilir komorbidite baştan yalan\nsaçmalamayalım onca hayatı yaşamanın bedeli var\nşimdi prospektüslerde arayaduralım şifamızı\nhepimizin bildiği kentlerin ezbere şamanı\nönümüzde koskoca literatür ne aşktır ne değildir\nmeyvem hala mı acı da ekşitir yüzünü?\nbenim yurdum sensin rot balans bozuk aksi yöne çeker\nbabamız öğretti görece toplu adamlar sürer dünyayı\nbunlar yörük adetleri eski türklerden kalma\nannemiz doğurur\ntarla bereketli\nbir çizgi iki çizgi üç çizgi zig zag\nbir de pisinden caz koyalım arkaya\nteyzeler olup açalım eklemlerimizi\niyice gıcırdasın kirişlerimiz\nrabbim leylaklarımla al beni içine\nrabbim leylaklarınla sız benim içime\nhiçbir batılı çözemesin beni" }
    ],
  },
  "sivri-catlaklar": {
    title: "duaları aksatıyorum canlandır beni",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    image: {
      src: "/images/dualarimi-aksatiyorum-canlandir-beni.jpg",
      alt: "duaları aksatıyorum canlandır beni için çizim",
      title: "duaları aksatıyorum canlandır beni",
      credit: "çizim: Rachele Demarchi",
    },
    body: [
      { kind: "stanza", text: "iyileşmek isteğiyle bitmeyecek olana\nyüzeylerden akacak sıvıların akıntısıyla devinim diye\nyaşam ve küçük ölüm isteğine boyun eğmiyorum!\nderine her çarptığımda gücümü geri toplayacak o kuvveti canlandırmak niyetiyle\nkokusuyla dokunuşuyla sonra kayganlığıyla\nvücudun heyecanı, kıvrımlarında oluşan şeffaf hayatcıklar" },
      { kind: "stanza", text: "duygularım sublardan yıkılır\nkalbin bezgin cevaplarla kırılır\ndirayetini kaptırmış çene çekilirsin hilal gibi,\negzoz gazında yapayalnız bir bebek kedi\ndudaklarında kendini bırakmış yaprağın titrekliği" },
      { kind: "stanza", text: "bil ki ben seni tamamlayamam\nsivri çatlaklarından sızan insanlığına \nparmak salladım seni tam sevemedim aşkım\nakan gözyaşlarında kelebek yolcuğu\nfani göze kaldığını belli etmez\nacıyı gören kalbin gözü\nacıyı kaydeden bu görünmez izler" },
      { kind: "stanza", text: "duaları aksatıyorum\nyardım dilenmiyorum dimdik\nçok rahatım hiç görünmediğimde\ngücenmeyiversin alemlerin rabbi de\nsu içiyorum adalet mahallesi camiinde\nşehveti tadıyorum canlandır beni\n'illellezine ca’m önü bileti al taşlının yolları kabelidir,\nmanevi star önlüldarham abal\ntak tatak tak chic çık bık\nmount etna yenen-nar bi avfike ya rahman\nsublar dört vuruş chargelıyor sanki bilinç kapanması" },
      { kind: "stanza", text: "hayatına intihar aşkçısı gibi dalan bu insan\n'ilk akşam özel fotoğraf attı,\nkıran ve kırılan\npazar allemand pazar dü levan" }
    ],
  },
  "gocmus-kediler-bahcesi": {
    title: "göçmüş kediler bahçesi",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "biliyorum, artık beni göremezsin\nbıçağın kabzası da bileyli.\nyine de utanmayı unutarak\nseninle güneşin doğuşundan\nbatışına kadar\nkedileri sevmek isterdim.\nkızışmış vaşaklar gibi gergin kaslarımız\nve buyurgan kalplerimiz\nterli ellerimizde kurulmuş saatler\nşafağa doğru haylaz\nve atılgan\nbekleriz." },
      { kind: "stanza", text: "korkulacak hiçbir şey kalmadı oysa\nbeni sevmen için tüm nedenleri ortadan kaldırdım.\nvazgeçtim görmekten\nbir fiş sırasını bekler gibi alelade\nve topukların yere değmeden\nbir hayatı içine alıp\nkendinle çoğaltmanı,\ntenine serpiştirdiğin\nonca takımyıldızını.\nbir selam bile bekleyemem\nsen kedilere odaklan." },
      { kind: "stanza", text: "hiç kimse bir yere gitmedi bak!\ngüneşimiz aynı\nhavamız aynı\nbu ne cüret ki\ngünlerin isimleri de aynı.\nçünkü göçmüş kediler bahçesi’nde\nbizden önce ve sonra\nsabah vardiyasına giden adamlar vardı.\ntaze ekmek kokuları\nterimizle yıkayıp astığımız çarşaflar,\nyanına yattığımda\nçıplak ayaklarının hizasında\nsokak lambası\nsonra sabah ezanı\nmevsimlere göre sıralarını değiş." }
    ],
  },
  "piiz-ver-piiz-ver-mayday": {
    title: "piiz ver piiz ver mayday",
    label: "şiir",
    authors: [
      { name: "onur duman", href: "/yazar/onur-duman" },
      { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
    ],
    body: [
      { kind: "stanza", text: "bir gemi kumandanıyla on beş cevval mürettebatı\ntahammül sınırlarında bir seferde\ndeniz çok korkmuş krakenler sonra sirenler\ndüşüne yattığım o gece\npiiz ver piiz ver mayday" },
      { kind: "stanza", text: "allahını unuttu güvertebaşı\naşçı günde dört kere attırdı\nbu seferler kolay değildir söylüyorum \ngemiler açılır karadeniz’den okyanusa \nyolunu bulmak zordur gps deaktif\ngerekir sigorta girişi yapılmamış en az bir saykik \nki tüyü bitmemiş oğlanlardır bunların çoğu\nherkes bilir ergenliğe girince kasıklara \nkarşı bir savunma mekanizması olarak\ntüyleri hemencecik biter o ara\nsüreçte yakılan kalorinin %35 kadarı buraya gider\nkorkma inmez iyi ki var anneler!" }
    ],
  },
  "oyunlarimiz-var": {
    title: "oyunlarımız var",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "esaslı çocuklardık bir zamanlar\nölüme ne çok yakın\nne de çok uzak\nşimdi nizami kar beyazı memleketlerde\naramızda trenler ve küslükler var" },
      { kind: "stanza", text: "terli bir akşamüstünde\nbiranın ağırlığı \nkörpe vücutlarımıza henüz çökmüşken\niki cigaralık kırıp fırlamalı sokağa\ngecekonduların arasında leyla\nyuvarlanmakla flörtleştiğimiz yokuşlarda\ntoyluğu keşfetmeli\nve yanan her ateşin\nimdat çağrısı olmadığını\nöğrenmeliyiz" },
      { kind: "stanza", text: "gecenin salyası\nüstümüze bulaşana dek\nkuyruklarımız ayrılmaz birbirinden\nsanmayın ki korkudan\nyoksa hala\noyunlarımız var" }
    ],
  },
  "24101990": {
    title: "24101990",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [{ kind: "special-24101990" }],
  },
  "belli-belirsiz": {
    title: "belli belirsiz",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [{ kind: "stanza", text: "Ulan yalvardım bırakalım dedim\nKaç kere konuştuk üç ay\nhani bidaha yoktu\nAllah belanız versin\nkontrol kanka sıkıntı yok\nbok yok" }],
  },
  "kendimin-ic-ve-disbukey-sinirlari": {
    title: "kendimin iç ve dışbükey sınırları",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "sokak her nefes alıp verdiğinde\nkaldırımlar et olur\nkabarıp söner\nkulağında trenlerin\nboğuk uğultusu\nhoşgörü bağıl\ntüm sabitler uyuşturucu\nkriptolar\npara piyasaları\nkafanı kaldırıma geçirdiklerinde\nağzına gelen\nadrenalinin metalik tadı" },
      { kind: "stanza", text: "oysa çamurum aynı sizinki gibi\nkanlı ve yapışkan\nhayal kırıklıklarından yapılma\nsıradan bir hayatı\nmahvetme kaşıntısıyla\nama hücrelerim\ntam teşekküllü\nf tipi\nbitkilerinki gibi" },
      { kind: "stanza", text: "yazık\nhislerim bazen\nkucağıma sığmaz\nyerlere dökülür\nya ziyan olur\nya da bir yoksunluk anında\nyalanmak için\nöylece beklerler\nama geriye toplamaya çalışmanın\nsaçmalığından gelen\no cüret\nsonuna kadar\nyaşanmalı" }
    ],
  },
  "paesino-sborramerda": {
    title: "paesino sborramerda",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      { kind: "stanza", text: "tanıyorum lan seni sen utanmadan öpüşensin\nsoğukta en son seni kıstıracaklar\nsanma ki yırttım adını biricit koyacağım\ntam gırtlağına şarkı yapıştıracağım\nensen kaşınacak kıskanç\nben ki a scribe of the prophetical order that is batn-ı neobeat\nkoca divination senden razı olsun budunbeyi" },
      { kind: "stanza", text: "sinyor makyavelli telefonda\nbeni günde elli kere arıyor açmıyorum\nsinyor makyavelli diyorum ben hepsini zaten ezberledim\derler ki eskiden istanbula gelir\ntarlabaşlarında kaybolurmuş\ndedikoduları kızlarda saklı kalmış\nsonra kızlar da kimseciklere söylemezmiş\nyok aman efendim iyi biri miymiş para mı verirmiş ne farkı var" },
      { kind: "stanza", text: "po nehrinde annem boğuldu\nölüsünü karşıya geçiremedik\nküçükbudunbaşı uygun görmedi\nben de dönüp bakamadım\nburada cenaze olmaz köpürür diye korktuk\nşükür ki koca kehanet sana sivrisineklerle geldim\ndölleri her yere damladı\nşu toprağın oracıklarında çiçekler bitti\no gün bugündür orası\npaesino sborramerda" },
      { kind: "stanza", text: "bize kayık alacaklar\nki venedik’te tekrar öpüşeceğim\ntüm venedik buluşup beni saklayacak\nsan marko’da kocaman taşakların ardında\nsonra balçıkları tarhanaya katacağız bolonya’da" }
    ],
  },
  "turmstrasse": {
    title: "turmstraße",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "duraktaki ince parmaklı kadın\nsen olmadığın için teşekkür ederim.\neğer mümkünse\nseni daha iyi günlerime\nsaklamak isterim.\nyaza kadar dönmeli\nyaza kadar dönmeli\nyoksa gelen her yazı\nseninle karıştırabilirim." },
      { kind: "stanza", text: "kaç kadın yıkarsam\nakar üstümden aşkın?\nşeftali ve süt kokan\nıslak koltuk altlarında\nbeni yine sen yıka\ndokunamaz içime başkası." }
    ],
  },
  "feierabendbier": {
    title: "feierabendbier",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      { kind: "stanza", text: "anneannemin dul saçlarından ördüğü dünya\nsabahın beşinde biralar içirir bana\nalmanları sarhoş ederim\nsonra ya öpüşür ya dövüşürler\nbu kabuğun kenarları çok kalın\nhava geçirmez\nsu geçirmez\naşk geçirmez\nseni geçirir bazen\nikna olurum dünyaya" },
      { kind: "stanza", text: "annem başka anneleri imrendiren\nmütevazı, alçakgönüllü\nne efendi çocuklar yetiştirir\nsonra babamı besler\nsigara içer\nrakı içer\net yer\nyanlarına giderim\nnakış gibi işlenmiş dantel\nkondurulurum televizyonun üzerine\nkimi seneler acı domates soslarına yetişirim\nkahvaltılıklara dönüşür\nekmekle yerim\nhavalar güzeldir\nçocukluğumun duvarları daralır\npüfür püfür eser\nsabah olur\nezan okunur allahuekber" },
      { kind: "stanza", text: "annem her gördüğümde biraz daha beyazlar\nkime çekmişim,\nkuş kalbi hep mi hızlı atar?\nseni bile düşünür benim yerime,\nsonra ikimiz için de\nkardeşimi öper" },
      { kind: "stanza", text: "bu kazak bana dikilmiş,\nbeş boy büyük\niyisi mi büyüyünce giyerim\nkaşındırıyor ama" }
    ],
  },
  "what-remains": {
    title: "what remains",
    label: "şiir",
    authors: [{ name: "emin musaiev", href: "/yazar/emin-musaiev" }],
    body: [
      { kind: "stanza", text: "I ought to write letters -\nletters not to be read\nuntil the time comes when it's funny\nand not a rotten bit of dread\nand boredom, smeared in honey,\nremains for me to entertain.\nto be as is, sincere and plain,\nto let my childishness remain\nmy quirk -\na funny trait,\nmaybe disturbing,\nbut yet incapable of burning\na timid finger upon touch." },
      { kind: "stanza", text: "yes, it's too much\nto seek attention and regret\nwell-meaning interest that I get,\nto be a bore of my own volition\nand hide a grin that though I hate,\nwill twist my lips - its true estate -\nand through my eyes dispense its poison\nwhile I am cowering, afraid to look\nand meet the gaze of who it took\nto be its prey." },
      { kind: "stanza", text: "come what may -\nto take one last look at the vista,\nto close the book before it rains,\nto face towards, and not away,\nis what apparently remains." }
    ],
  },
  "uyku-duzeni-duzenleyici": {
    title: "uyku düzeni düzenleyici",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [{ kind: "stanza", text: "Yatak boşluğu sandalye göçlüğü masaüstü bardak çokluğu\nÇay üstüne çay ve böbrek faaliyeti bayramı kutlamalarım\nŞu yüzyılda hala kağıtların arasında boğulmak\nIşte ben bu kadarım dedim sonunda ederim budur\nböcekler görmediğim yerlerimde gezerken\nAyak serçe parmağımda şeytan besliyor-larmış\nEzoterik şakalar ve/veya hüzün dolu şarkılar\nÜst komşumun sesine engel olacak mısınız\nsorunların bütünü parçalarından az geliyo\nbi düşününce anlık şükretme isteğim uyanıyor ama\nkimi anlar var cidden büyük aparkat\ne ama yıllardır her zaman ayaktayım\nyalnız tek başımayken elimi götürür\nBazırım bazen bazıyan yerlerimi\nki bazımasınlar bazen." }],
  },
  "buffalo-bill": {
    title: "buffalo bill",
    label: "çeviri",
    titleHref: "https://www.poetryfoundation.org/poems/47244/buffalo-bill-s",
    authors: [{ name: "prowler", href: "/yazar/prowler" }],
    body: [{ kind: "special-buffalo-bill" }],
  },
  "belki-bir-sabah": {
    title: "belki bir sabah",
    label: "çeviri",
    titleHref: "https://www.libriantichionline.com/divagazioni/eugenio_montale_forse_mattino_andando_aria_vetro_1925",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      { kind: "stanza", text: "Belki bir sabah, yürürken kuru, cam gibi havada,\ndönüp tanık olacağım mucizenin gelişine:\nsırtımı döndüğüm hiçlik, ardımda kalan boşluk\nbir sarhoşun dehşetiyle" },
      { kind: "stanza", text: "Sonra, sanki bir ekranda gibi, ağaçlar evler tepeler\nHızlıca toplanacaklar tanıdık yanılsamalarla.\nAma çok geç olacak; ve ben sessizce uzaklaşacağım\nArkalarına bakmayan insanların arasından, bu sırrımla." }
    ],
  },
  "afili-haytalar": {
    title: "afili haytalar",
    label: "çeviri",
    titleHref: "https://www.poetryfoundation.org/poetrymagazine/poems/28112/we-real-cool",
    authors: [
      { name: "onur duman", href: "/yazar/onur-duman" },
      { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
    ],
    body: [
      { kind: "stanza", text: "kolpo sert, kafalar güzel.\nkör sabahın yedisi.", italic: true },
      { kind: "stanza", text: "afili haytalar. okul\nkaçık. gece" },
      { kind: "stanza", text: "sürtük. yumruk\nhakiki. ağızlar" },
      { kind: "stanza", text: "bozuk. cin\nseyrelir, yaz" },
      { kind: "stanza", text: "cazlar. genç\nölür." }
    ],
  },
  "gunceme": {
    title: "\"teşrif edin siz de günceme,\" diye buyurdular",
    label: "şiir",
    authors: [{ name: "av. ifi yılmaz", href: "/yazar/av-ifi-yilmaz" }],
    body: [
      {
        kind: "stanza",
        text: "\"Teşrif edin sizler de günceme,\" diye buyurdular.\n\"İlk harfi siz yazın,\" dediler.\nDediler ki: \"İzinizden terakki edelim.\"\nAma adımlarımın sağlam basmaması bir kenara,\nsabıkalarımın çeşitliliğine çarpılmış olmaları lazımdı.\n\"Yalnız,\" dedim, \"ben dedemi hiç görmedim, ters gittiğim yolları da çok beğendim, dönmedim.\"\n\"Vay anam, öyle olur mu?\" dediler.\n\"Siz de elbet dağdan akan suyu içersiniz,\nbulamazsanız bir kuyu...\nSonuçta bir huylunun huyu, bir de ampulün duyu,\" deyiverdiler.\n\"Yani bakın,\" dedim.\n\"Benim yazıtlarımda zorla ikna sonucu kabul etmişlikler söz konusudur, ben en iyisi bizim yörenin armağanlarına ek olarak\npaslanmaz çelikten yaptırdığım 41 delikli kevgiri vereyim,\" diye ekledim. Sonuçta asal sayılara olan tutkum dillere şayandır.\n\"Gökyüzünün yarısı buluttur, bizim de karnımız armağana toktur. Sizi duayenler yıkamış efendim, sabrın sınırları sizde mevcut\ndeğildir. Atın şu ilk harfi de akbabaya saç ektirmeye gidelim.\"\nAkbaba hep kel mi kalacaktı?\nAllem ettiler, kallem ettiler, bana okuma yazmayı bellettiler ama ben o son noktayı koymamaya ant içtim"
      }
    ]
  },
  "denizden-karaya": {
    title: "denizden karaya çıktığım günlerin birinde",
    label: "şiir",
    authors: [{ name: "av. ifi yılmaz", href: "/yazar/av-ifi-yilmaz" }],
    body: [
      { 
        kind: "stanza", 
        text: "Denizden karaya çıktığım günlerin birinde\nSayılardan bir haber 18 tane adama\nAdabı muaşeret konusunda eğitim almaları gerektiği tasfiyesinde bulundum." 
      },
      { 
        kind: "stanza", 
        text: "Aralarından cambaz olan\ncambazlığını da içtiği suyun boğazının ortasına oturmasından anladığım\nkara gözlü hırt tırnaklı tepegöz kılıklı bir beyefendi, yağlandırmanın ne kadar ağır geçtiğini ve kulüplerin teklifini kabul\nedemeyeceğini dudakları kulaklarına varan şekillerde hızlıca anlatmaya çabaladı" 
      },
      { 
        kind: "stanza", 
        text: "ammma" 
      },
      { 
        kind: "stanza", 
        text: "Kumu yiyen oğlan durur mu? Durmaz. Kiramen katibin de gazıyla, cengaveroğulları paşası gibi\nÇengelsiz konfetilerden ve albayın ettiği yeminlerden\nÜrgüpü anımsatan\nBir yapıya benzemeye kalktı" 
      },
      { 
        kind: "stanza", 
        text: "Radyasyonu hissettin mi? Aman deliklerimizi kapatalım efendim" 
      }
    ]
  },
  "baharlari-da-dahil-eden-yaz-donemi-boyunca": {
    title: "baharları da dahil eden yaz dönemi boyunca",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      { 
        kind: "stanza", 
        text: "‘bizi kurtar bi şarkı aç dinleyelim" 
      },
      { 
        kind: "stanza", 
        text: "kaya…tuzu…peritozu-polenleşme\n    ara sokaklarda\n    ve küçük parkta\nduvarcılar kenarda" 
      },
      { 
        kind: "stanza", 
        text: "bak bi bana bak sana kafana kafana yüzüne gözüne\ndiyeyim\nişaret grup - Can Erzincan Kürede\nbebeğimiz daha yeni doğdu\neldiven takıyor yüzünü çizmesin diye\ntamam ev sahibi bey kirayı yüzde atmış beş artıralım." 
      },
      { 
        kind: "stanza", 
        text: "evet zaten\nbir yazlık beldede denize iki yüz metrede\nlinkedinde\namaan canım ölüm her yerde\ntam burnun ucunda\nbaharları da dahil eden yaz dönemi boyunca\nvalimizle müdürümüz\nyerel yönetim ile iyi bağlar\nüretiyor kazanıyor kazandırıyor insanlara\nbaşım neden dönüyor o his geldiğinde\naz önce\ngöğüs cebinde\nakşam az bi dolanalım" 
      }
    ]
  },
  "daha-yeni": {
    title: "daha yeni",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      {
        kind: "stanza",
        text: "daha yeni\ntemiz tezgahta reçelli kavanoz\nduruyor\ndaha yeni\nçıkmış kirliliği meydana\nduvardaki yarığın sınırlarında\nbir doğal kanatlı böceğimsi"
      },
      {
        kind: "stanza",
        text: "kavanoz tatlı ve reçelli.\nçilekli bir dünya!"
      },
      {
        kind: "stanza",
        text: "hayır bu uzun sürmemeli diye isyanda\n/mı?\npencereye yaklaşalım.\nkavanozun içi\ndar yapışkan\nyorucu\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0ufacık şeyler nasıl da öyleler ama!\nakupunktur gibi,\nbazısı saklı bazısı tam gözüne\nfarklar\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0kümeler\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0tekillikler\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0birliktelikler\ntekrarlar\nfark ettin mi bastırıyor derine"
      },
      {
        kind: "stanza",
        text: "uçuyorsun. izliyorum seni, pek\nçok ağaç var\nyemyeşil oldular son bir ayda.\nhayret doğrusu, seni hala görebiliyorum"
      },
      {
        kind: "stanza",
        text: "bir metre on metre otuz metre\nmesafede, ufak bir kuş serbest,\ntam hedefe, aniden,\nve bir tanesi daha\ndaha yeni\nbitti\n/mi\nsence?"
      },
      {
        kind: "stanza",
        text: "hareket ediyorsun\nazalıyorsun hareket\nediyorsun çoğalıyorsun\nmekanı yaratıyorsun\nyeni-eski yeni düğümler\nel işleri ve danteller\nsahi\neskidendi.\nhoşgeldin zaman\nmekanın hıfzına\nkarnına\nbacaklarına\nve ayakkabılarının bağına"
      }
    ]
  },
  "hammer-amour": {
    title: "hammer amour",
    label: "şiir",
    authors: [{ name: "öykü özmakinacı", href: "/yazar/oyku-ozmakinaci" }],
    body: [
      {
        kind: "stanza",
        text: "You broke my big fat white"
      },
      {
        kind: "stanza",
        text: "satellite heart\ninto pieces\ninto dust\nSplit the full moon apart"
      },
      {
        kind: "stanza",
        text: "If you had let me\nI would have waltzed\non your frequency\nfor another lifetime\nI watched you\nGrow yellow\nin our first-ever houselet\nlike wallpaper in a bar\nlike a pear softening\nleft on the countertop"
      },
      {
        kind: "stanza",
        text: "With spring, the wind has sprung\nSpread me all over town\nI am one too many now\nOne but none\nNone but all"
      },
      {
        kind: "stanza",
        text: "Listen\nYou can hear me\ncrack and pop\non your grandma's old radio\nShadowplay tunes\nMoody blues\nNostalgic for a future that never arrived"
      },
      {
        kind: "stanza",
        text: "Lorine said that Hudson says\nBirds feel something akin to pain\nbefore the flight\nBetween you and I,\nI never feared the flight\nas much as I dreaded the rot."
      }
    ]
  },
  "rats": {
    title: "rats",
    label: "şiir",
    authors: [{ name: "ruth", href: "/yazar/ruth" }],
    body: [
      {
        kind: "stanza",
        text: "since falling in love I've seen so many dead rats\njust there\non the floor\nthe first time (I remember it distinctly)\ni audibly gasped\ni was riding my bike and got so startled\ni almost fell off"
      }
    ]
  },
  "cambaz": {
    title: "cambaz",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      {
        kind: "stanza",
        text: "birinden diğerine geçişine çalışıyor aklım\ntransit transis transition trans\nbölükçülendi zihnim birbirbin adacığın\nsöyle söyle söyle hangisinden – di\nbiraz sonra genişleyecek ve ovalaşacak ve buraya tekrar dönemez – se ya o ra da sonsuza\nkalsa kadar kadar kadar ka\nkorkutucu olurdu bir korkmaorganı bulmuş olsaydı yolda hayaletlerin\nölümdensonraya geçmekten mi\ngeçememişlerve şimdi olur olmaz beliriyorlar\nsesleri birbirine girmekten kurtaran kim\nbeni kurtar atladığım ipten bir diğerine\nbu ipleri burgula astığımız yerlere bundan sonra\nbir cambaz gibi yüzü gülümser boyalı hatta saçları iki örük\nartık düşmez üstüne beni de çağırdılar\nmutlu olmuştum. sonra kollarım uzadı"
      },
      {
        kind: "stanza",
        text: "tutamadım"
      }
    ]
  },
  "24-mayis": {
    title: "24 mayıs",
    label: "şiir",
    authors: [{ name: "göksu köse", href: "/yazar/goksu-kose" }],
    body: [
      {
        kind: "stanza",
        text: "napılır bilmiyorum, bu kuşlara mı\nkızmalı? neşeli bağırıp çağırmalar\nnehire mi kızmalı, sokaklarda avuntuların takırtıları\nher gün yeni bayramlar\nbir dakika daha sarf edemem\ndeliler matbaasında\nyeni havadisler öksürüğüme karışır\nbu yoksunlukta"
      },
      {
        kind: "stanza",
        text: "aslında yeni yok hiçbir şey.\nkalbim tufandan daha eski\noturur yerinde\noluk oluk senelerdir\nbeş sene, on sene, bin ve milyon sene\ndinozorlar bile hatırlamaz sorsan\ndoğduğum günü"
      }
    ]
  },
  "izdirap-muhendisligi": {
    title: "ızdırap mühendisliği anabilim dalı",
    label: "yazı",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
     image: {
      src: "/images/goksel-arizali-cizim.jpg",
      alt: "ızdırap mühendisliği anabilim dalı için çizim",
      title: "ızdırap mühendisi",
      credit: "çizim: goxel",
    },
    body: [
      {
        kind: "stanza",
        text: "Televizyon seni hasta etti, küçükken ninja kaplumbağalar izliyordun. Yediğin cips seni hasta etti. Salak gibi ellerin titriyor, çünkü dün çok içtin. Arkadaşların seni hasta etti, sigaraları hala elinden düşmüyor. Gerçekten gerizekalısın, kendin de olabilirdin. İnsanların seni önemsemediğini biliyorsun. Telefonun elinden düşmüyor, sürekli tırnaklarını yiyorsun, elin ağzından düşmüyor. Öylece neden oturamıyorsun? Ayakların seni hasta etti, yabancı mekanlarda kaybolmaktan gurur duyuyorsun. Köprülerin etrafında ne aradığını sorabilir miyim? Hayalle şişirilmiş miden seni hasta ediyor. Yuttuğun havayı artık kusma vakti. Zavallılara acıyorsun çünkü başka bir çaren yok. Empati! Uyanık eziklerin bir numaralı ilgi arayışı metodu. Izdırap mühendisliği anabölüm dalı başkanı leş orospu çocuğu kavat"
      }
    ]
  },
  "super-bal-satan-cicekler": {
    title: "süper bal satan çiçekler",
    label: "şiir",
    authors: [{ name: "esra kuş", href: "/yazar/esra-kus" }],
    body: [
      {
        kind: "stanza-html",
        htmlLines: [
          "<span style=\"padding-left: 240px; font-style: italic;\">arı bende bal</span>",
          "<span style=\"font-style: italic;\">yok,çiçeklerde bal çok*</span>",
          "<span style=\"padding-left: 240px; font-style: italic;\">arın”a*</span>"
        ]
      },
      {
        kind: "stanza",
        text: "bu dar evlerin olduğu sokakta büyüdüm,devlet geniş\nbunun oturuşumu düzelttiren,elalem kesici taraflarını kıra döke arzulamadan,\narzu da şehvete pek yaklaşmadı buralarda,belki film izlerken sahnelere arkamızı\ndöndüğümüz içindir\ndeniz kabuklarıyla yaptığım özel çerçeve ağzının ilk boşluğu\nve\nben boşluklardan bağımsız ağzımı açamam\nağzının açtığı boşluk Yusuf’un kuyusu değil,ilk kez değil,\nbundan hep bahsetti usta isimler,usta isimlere süper ballar ısmarladı devlet,\nsüper ballara süper çiçekler,\nbu dar evlerin becerdiği kısa kollar,devlet hep geniş"
      },
      {
        kind: "stanza",
        text: "sanki ininde mutluydun da ben kımıldattım seni,devletle genişleyesin diye ittim,\nitilesin varmış,\nsaymanın fasülye ve abaküsleri olmasaydı bak aramızdan kıl gibi bir 11 geçti\ndemeyecektin,\nduyasım varmış,\nsayıların artışından balların miktarını anlıyordum o zamanlar ve\narındıramadığım yüz on tane günahsız arı,"
      },
      {
        kind: "stanza-html",
        htmlLines: [
          "emip çiçeğini genişleyen arı görmedim doğrusu,",
          "günahsız olduklarını da yaradanın mutlak gücüne veriyorum,bu mutlaklığa sığmam,",
          "bu dar evlerin olduğu sokakta büyüdüm",
          "gittikçe genişleyen devleti unutmayayım diye",
          "sırtımdaki terli gecelerin,terli atletlerini değiştirirdi babam,",
          "memelerime bakmıyormuş gibi yaparak",
          "genişleyesi var olan devletle bakmıyormuş gibi yapılan bakışlar arasına sıkıştım kaldım,",
          "sıkıştı atlet,<span style=\"margin-left: 140px;\">genişlemedi arı,</span>",
          "<span style=\"margin-left: 80px;\">yüz on tane günahsız arı,</span>",
          "hangi dar sokakta olsam tanırım,hangi devlet genişlese düşerim"
        ]
      },
      {
        kind: "stanza",
        text: "süper bal satan çiçekler arıları harcadığını bilsin diye\nhiçbir yere kona kona yaşayamıyorum ben\nbu dar sokakta aramızdan kıl gibi bir 11 geçti\ngeçesi varmış"
      }
    ]
  },
  "inscription": {
    title: "inscription",
    label: "şiir",
    authors: [{ name: "aras arslan", href: "/yazar/aras-arslan" }],
    body: [
      {
        kind: "stanza",
        text: "At some point in the night, I got suspended in the tightening lids of your eyes,\nAnd couldn’t let them come down on me.\nThe pride, the blood flowing behind the eyes, the desire\nTo be there, uncontested in your gaze, yet subdued\nBy the possibility that we might lose me for a second, that you won’t care to look back again."
      },
      {
        kind: "stanza",
        text: "So I did what I do (to the best of my knowledge of the sham that is the self),\nI set free the three-headed fox on whomever might have been around us. And I didn’t know which would face you.\nOne apprehensive and dismissive, given the chance,\nTeeth cocked under thin lips, ready.\nOne in thunderous laughter and fairytale whimsy,\nEyes lidless and steady."
      },
      {
        kind: "stanza",
        text: "Last one, I prayed\nStays muzzled, dumb and drowned.\nI wipe its mouth everyday but you can tell the saliva stains,\nPus and rust in reddish gold,\nThere to stay, like the piece of lead shining on its dome,\nNo more than a piece of emerald lodged into the spirit’s home."
      },
      {
        kind: "stanza",
        text: "So let me tell you the trick,\nThe three are one in crystal notes oozing out of humming amps.\nHug his bones broken, and let ‘em dangle\nIn the winds of imagined change."
      }
    ]
  },
 "setaneios": {
    title: "setaneios",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      {
        kind: "stanza",
        text: "hem dekadan hem yaratan\ntopraklama yapıyorduk\niş görebilmesindendir kadr-i kalkışma\nlatex adem çamurdan"
      },
      {
        kind: "stanza",
        text: "malzemeyi her şey ve herkes kılarak\nveremli grafitilere secde\nolduğu şeyin yaptığı şeyin ta kendisi olduğu şey,\nkotbusator mevlana camii"
      },
      {
        kind: "stanza",
        text: "alayının toptan yaptığı soyutlamacılık derecesine toptan varabilen\nduyumunda kavram ve işlev kadar öngörülemez coğrafi çalışmalar"
      },
      {
        kind: "stanza",
        text: "bir temsil aşırılık\nyabandayım barbar bir aşkla xenofili\nkarmaşıklık çeşitlemecilik\nsiktiğimin"
      },
      {
        kind: "stanza",
        text: "ibne adresi\nkendi deneyim imkansız bedeninde\nne kadarı\nyaşadığın gewobag"
      },
      {
        kind: "stanza",
        text: "ben artık o günden sonra\nkendimi coğrafyacı olarak\ngörücem ve coğrafya yazıları yazıcam\nher şey şeyliğiyle\nbeşinci coğrafya hareketi"
      },
      {
        kind: "stanza",
        text: "şüphesiz\nkendimizin biziyiz\nkoca bir sahnede bay andersson\nyine mi eşinizin iç çamaşırlarını giydiniz\nbunu konuşmuştuk."
      }
    ]
  },
  "ankara-bir-memur-sehridir": {
    title: "ankara bir memur şehridir -sokakları geniş sayılır",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      {
        kind: "stanza",
        text: "ankara bir memur şehridir ellerimi\nnasırlı tutar ve beni sert siker\nkapıları kapattığımda boynunu uzatır\nalnında hep bir damarı belirgindir\ncebimi beş kuruşlarla doldurdum\nkuşların gagasını sert kapattım elimin\naltında bir başkasını duyuyorum elimi ağzıma\nkapatıyorum"
      },
      {
        kind: "stanza",
        text: "her gün\nhep gün doğar\nmutfakta bulgur güvelenmiş\naklıma geliyor birileri bana yalan söyledi\nmasalarda parmağım daireler çiziyor\nmasalarda parmağım bir ileri bir geri\nutanmasam bilmiyorum"
      },
      {
        kind: "stanza",
        text: "ankara bir memur şehridir eskiden\nmemurlar kumral olurmuş çayı şekerle\niçerlermiş\nmendilimi hep sağ cebimde taşıyorum"
      },
      {
        kind: "stanza",
        text: "kimse gittiği yerden dönmüyor",
        italic: true
      }
    ]
  },
  "kavramsal-anlami-yaratan-gibi-oku": {
    title: "kavramsal anlamı yaratan gibi oku",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [ 
      {
        kind: "stanza-html",
        htmlLines: [
          "<span style=\"display: block; text-align: right; margin-bottom: 4px;\">biliriz söylemesini sahiciye benzeyen nice aldatıcı şeyleri,</span>",
          "<span style=\"display: block; text-align: right; margin-bottom: 8px;\">biliriz yine de istediğimiz zaman hakikati dile getirmesini.</span>",
          "<span style=\"display: block; text-align: right;\">Hesiodos <span style=\"font-size: 16px; color: #6f6b63;\">(çev. Erman Gören)</span></span>"
        ]
      },
      {
        kind: "separator" 
      },
      {
        kind: "stanza-html",
        htmlLines: [
          "unity<span style=\"margin-left: 60px;\">of</span><span style=\"margin-left: 80px;\">consciousness</span>",
          "<span style=\"margin-left: 80px;\">kendi</span>",
          "<span style=\"margin-left: 150px;\">gerçeğini</span>",
          "<span style=\"margin-left: 60px;\">kurmak adına merda d'artista</span>"
        ]
      },
      {
        kind: "stanza",
        text: "nazariyata kavuşup hatrıma girenler sahnede,\nlogos itibariyle özgürlüğüne\nkavuşturmanın iç içe örülmesidir bu yaptığım dört dörtlük yakıştırma, doğrudan\ndoğruya yerli yerine\nvarlığı seyretmek demektir bu. hepsinin bendeki karşılığıdır\ntemas önemli olduğu için yaklaşıyorum. tanrıyı\nindirecem sanmaktan oluyor ki ilk o zaman siz varlığın o veçhesine müşahede\nedersiniz. bu varlığı doğrudan doğruya seyirdir.\non the edge analysis, coğrafi çalışma. yazın bilim kışın da başka bir şey.\nher şey, şeyliğiyle örgün eğitimde."
      },
      {
        kind: "stanza",
        text: "değişime tabi olmama esası üzerinden: the application of scarce means against\nalternative ends to derive the most satisfaction possible (marshall sahlins).\n“evet, her şeye tahammülümün olduğu bir gün daha. kulaklarımı çok önemli\ngördüğüm için kara kutulardan sesi yüksek bir kalp buldum kendime. “kaderi onu\nduymuş olan var mı? “biz sabah olunca uyanacağız (referans ahmet güntan\nsevdiğim laflar; not defteri; telefon; ohm; bağdaş kurmuş otururken, “tarihin ilk\nteröristi olarak anılan ve tarihe nam salmış ünlü kundakçılardan Herostratus'un anti\nhukuk mücadelesine.\nortamlarımız imajlı dünyanın logosu ve ifade problemini aşımın topluluğu ve\ntarihinin tarihidir. kendi-üretimimi-kurtarmak-için-böyle-bir-problemi-ele-aldım. —\nkavramsalsezgi-uçurumudaralttı."
      },
      {
        kind: "stanza",
        text: "sen kavramsal anlamı yaratan gibi oku."
      },
      {
        kind: "stanza",
        text: "providencia universalis. gegebenheit."
      }
    ]
  },
  "icinden-cikilamaz-umut-boroloyko": {
    title: "içinden çıkılamaz umut- /boroloyko",
    label: "şiir",
    authors: [{ name: "göksel", href: "/yazar/goksel-yaman" }],
    body: [
      {
        kind: "stanza-html",
        htmlLines: [
          "<div style=\"display: flex; justify-content: center; padding: 2rem 0;\">",
          "  <img src=\"/images/goksel-gorsel-siir.png.jpeg\" alt=\"Göksel - Görsel Şiir\" style=\"max-width: 100%; height: auto; mix-blend-mode: multiply;\" />",
          "</div>"
        ]
      }
    ]
  },
 "landscape-zehra-erkoc": {
    title: "Landscape",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      {
        kind: "stanza",
        text: "Etera dağının kuzey yamacında milyon 3 2 zaman önce çokyüksek ve çoksert kayalar\nuçurumun başına oturmuşlar göğün 3 / 2si yarılmış yanına oturmuştu"
      },
      {
        kind: "stanza",
        text: "Uzun gölgeliksiz üç dal üç çalı keçi yollarından ve dar ağızlı taşların ince dudaklarından tek\ntük otlar"
      },
      {
        kind: "stanza",
        text: "Haşmetli bir dağın karşısındadır ve aralarından gözlerden uzak ipince bir su akar,\nBuradan bakan dağın kuzeyine ve kuzey doğusuna arkasını döndüğünde alabildiğine geniş\novasına"
      },
      {
        kind: "stanza",
        text: "Kafasını kaldırdığında bir kertenkele diğerine, nedense gözümü kapatırsam aklıma onlar\ngeliyor. Selam sana kara derili kuru kertenkele diğeri başını eğer kuyruğunu bırakıp gider."
      }
    ]
  },
  "landscape-ii-zehra-erkoc": {
    title: "Landscape II",
    label: "şiir",
    authors: [{ name: "zehra erkoç", href: "/yazar/zehra-erkoc" }],
    body: [
      {
        kind: "stanza",
        text: "yeşilden sarıya sekiz ve kahverengiye dokuz kırmızıya doğru\nsaymaya başlamadan önce böylesine görebilir miydin\nyer yarıldığında yanıp sönen bu taşlar üstlerinde ateş izleriyle\nserpantin koyun kıyılarını binyıllık bir yılan gibi sarıyor"
      },
      {
        kind: "stanza",
        text: "korku bilseydi kızılçamların göğsü patlardı\ndikenyaprakları dağılıp"
      },
      {
        kind: "stanza-html",
        htmlLines: [
          "sevgilim elimde bir izopod iskeleti tutuyorum",
          "onu kumların arasındaki deniz şehrinden çıkardım, <i>bir dilek tut</i>",
          "parmaklarımın ucunda eziliyor, kemik sihirli bir tozdur",
          "birleşir canlanır dağılıp"
        ]
      },
      {
        kind: "stanza",
        text: "hepsini havaya üfleyeceğim"
      }
    ]
  },
  "unstable-signs-lot-49": {
    title: "Unstable Signs: Meaning and Truth in The Crying of Lot 49",
    label: "yazı",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      {
        kind: "stanza",
        text: "I. The Postmodern Epistemic Crisis",
        bold: true
      },
      {
        kind: "stanza",
        text: "Postmodernism, diverging from the paradigm of modernism, centrally focuses on ontological inquiries. The primary nexus of questions - inquiries into selfhood (what am I?), the nature of the world (what is this world?), and what modes of existence exist? - constitutes the foundational ontological framework that underpins the most consequential inquiries and critical endeavours of this epoch (McHale 8-10). Published in 1966, the great American novelist Thomas Pynchon's The Crying of Lot 49 is a novel that was written at the height of postmodernism. In its rich manner and postmodern style, as has been argued by many a scholar, the novel offers responses, and one may form nuanced connections with political and intellectual currents of the 1960s. Thanks to the novel's potential richness of context, I would like to focus on its epistemological attributes and characteristics. For instance, McHale argues that epistemology is in fact the dominating mode of modernism. However, placing the focus only within this conceptualisation would be imagining impermeability between subsequent periods and therefore mean leaving behind those questions regarding the limits, characteristics, and implications of our knowing."
      },
      {
        kind: "stanza",
        text: "The quest for knowledge in the postmodern era unfolds as an endless journey of frustration, a frustration that emerges from ontological uncertainty. Jacques Derrida addresses such a condition as a rupture, a break in the ordinary order of things (Derrida 350). Martin Heidegger's contention was that the history of Western philosophy solely concerned itself with the focus on the knowing subject. And yet his question of being (Seinsfrage), that is, questions regarding the world we live in, remained unanswered, and efforts to understand the networks of significance had to continue (Heidegger). As a result, this epistemic rupture points out a shift in philosophy to a decentered understanding of knowledge, exposing the absence of any epistemological center, a nexus that signs originate and find ultimate reference."
      },
      {
        kind: "stanza",
        text: "In such a case, devoid of an epistemological center to anchor, the human-individual, the symbol-making animal, is left with nothing to fix the symbols to a certain structure. Even attempts at larger meaning systems to fix upon are no remedy either. The infinite jest of a sign to other signs to fix a meaning leads to a constant culmination of referral and proliferation. A remark by the French poststructuralist sheds light on aspects of the situation at hand: \"the absence of the transcendental signified extends the domain and the interplay of signification ad infinitum\" (Derrida 354). The ontological hesitancy, decenteredness of the postmodern era, transcends questions and ambiguities regarding existence. Devoid of systems of significance, the result is indeterminacy of seemingly absolute meanings or conclusive interpretations. In this decentered, destructured terrain, an active intellect has to bring about subjective frameworks each time it tries to comprehend external phenomena, eventually leading to a state of fundamental epistemological uncertainty. The result for the active intellect is an epistemological nightmare of free-floating referents generating equally valid interpretations and understandings, with the subject becoming their vessel. To escape the burden of ontological uncertainty and uneasiness, we are actively turning to words and interpretations. Paradoxically enough, the active intellectual finds itself in the realm of words and meanings, seeking refuge from the imposed redundancy of existence, only to lose its way vis-à-vis constantly proliferating symbols adrift in time and space."
      },
      {
        kind: "stanza",
        text: "In an effort to delve deeper into the epistemology of postmodernity, this paper will mainly draw upon selected theories of Michel Foucault, Jacques Derrida, Jean Baudrillard, and Jean-François Lyotard to examine the onto-epistemological hesitancy and epistemic ruptures that characterize meaning-making in Thomas Pynchon's The Crying of Lot 49. Foucault's interrogation of the power-knowledge dynamic (Truth and Power 131) provides the framework for understanding how decentered systems of signification (Derrida 1970, 916) manifest in Pynchon's literary universe."
      },
      {
        kind: "stanza",
        text: "Selected key passages from The Crying of Lot 49 will exemplify the free-floating referent and hermeneutic paranoia, particularly in examples where \"the hieroglyphic sense of concealed meaning\" (Pynchon 15-6) comes into contact with Foucault's theories on truth production. The investigation will focus on three entangled dimensions: 1) the web of decentered signs with respect to the idea of textuality and discourse; 2) interpretation and its interplay with power; 3) identity and subjectivity amidst semiotic excess. Throughout, this analysis will demonstrate how Pynchon's novel stages the emergence of postmodern paranoia through Oedipa's quest for epistemic anchoring in a terrain of proliferating and protean symbols, while simultaneously implicating readers in parallel acts of interpretive subjection where pattern-making clues decenter our distanced and secure interpretive position, putting us in to the novel's epistemic chaos."
      },
      {
        kind: "stanza",
        text: "II. Power and Truth",
        bold: true
      },
      {
        kind: "stanza",
        text: "The relationship of knowledge and power can be a tricky one with shifting positions. In postmodernity, their relationship is not necessarily an opposing, contrasting one. Rather, knowledge and power form a fundamentally shifting alliance that is in constant movement. Knowledge, in its movement towards becoming truth, becomes a function of power. Foucault addresses this and notes that power emerges, or becomes, in discussions of, conversations, and discourses about truth. It is fashioned ultimately out of a certain kind of communication."
      },
      {
        kind: "stanza",
        text: "\"Truth isn't outside of power, or lacking in power: contrary to a myth... truth isn't the reward of free spirits, the child of protracted solitude, not the privilege of those who have succeeded in liberating themselves. Truth is a thing of this world: it is produced only by multiple forms of constraint. And it induces regular effects of power. Each society has it regime of truth, its 'general politics' of truth: that is the types of discourse which it accepts and makes function as true; the mechanism and instances which enable one to distinguish true and false statements, the means by which each is sanctioned; the techniques and procedures accorded value in the acquisition of truth; the status of those who are charged with saying what counts as true.\" (131)",
        italic: true
      },
      {
        kind: "stanza",
        text: "Here, truth comes not as an agent of disclosure and protection from power, which, according to the theoretical paradigm of this paper, secures hegemony in its bosom, eventually laying out hidden motifs, but rather as a concept that is part of a more layered interplay of power and truth. It operates subtly, and in Foucault's words, the truth is: \"a system of ordered procedures for the production, regulation, distribution, circulation and the operation of statements. Truth is linked in a circular relation with systems of power which produce and sustain it, and to effects of power which it induces and which extend it\" (133)."
      },
      {
        kind: "stanza",
        text: "This generant system of power and truth diverges from the conventional paradigm surrounding truth. Normally, it is not unnatural to expect from the idea of truth/knowledge to offer expansions of horizon, shedding light on the previously unknown, and even lead to a certain kind of emancipation from epistemological impositions and limitations. It is important to highlight how, in this influential paradigm, truth is not something that approaches a general idea of freedom. Rather, it is a systemized model with restraint and limitation, with a fundamental destination: power. Power embodies discipline and totality: it describes, it limits. Truth's liberation is only an illusion as power's hegemony operates through truth's very production. In other words, it is naïve to think the truth is connected to freedom. It is only possible with naïve logic that the truth liberates. It is rather the opposite: the hegemony of power flourishes, grows, and dominates everything and everywhere."
      },
      {
        kind: "stanza",
        text: "Truth does not emerge and crystallize as a result of inclusion. It comes into existence in and through exclusions. It is not simply a concept, a nebula of thoughts, but a material process, an actual practice of exclusion. On the contrary, truth comes into existence in conflict among alternative understandings. That which is characterized and sustained by power's appearance in the matter must overcome its rivals, oppress variety and differences, put forth a discourse based on dominance, and essentialize itself. Thus, truth as a reification and self-confirmation of power."
      },
      {
        kind: "stanza",
        text: "The quest for truth, a coherent system of knowledge/meaning and classification, is to renounce the self. \"Power produces; it produces domains of objects and rituals of truth. The individual and the knowledge that may be gained of him belong to this production\" (Foucault 194). Oedipa's role as executrix offers a fitting example to this production. This assumption of executrix identity turns into the mechanism that triggers her downward journey into a labyrinth. In the relation among subjectivity, truth, and power, truth and subjectivity emerge as constructs of power. To understand Oedipa-as-subject, we must trace the actions demanded by the introduction of the letter and the signs she pursues, which collectively construct the reality she navigates:"
      },
      {
        kind: "stanza",
        text: "\"The individual is not to be conceived as a sort of elementary nucleus, a primitive atom, a multiple and inert material on which power comes to fasten or against which it happens to strike, and in so doing subdues or crushes individuals. In fact, it is already one of the prime effects of power that certain bodies, certain gestures, certain discourses and certain desires come to be identified and constituted as individuals. The individual, that is, is not the vis-a-vis of power; it is I believe one of its prime effects. . The individual is an effect of power, and at the same time, or precisely to the extent which it is that effect it is the element of its articulation. The individual which power has constituted is at the same time its vehicle.\" (\"Two Lectures\", 98)",
        italic: true
      },
      {
        kind: "stanza",
        text: "By the coast of perpetual proliferation of signs and meaning, confounded by reflective and thick surfaces, subjects try to delve into a deeper understanding of the external reality that they are faced with. In the sea of centerless signs, they try to hold onto a system of ordered meanings fast and tight. Referring to Louis Althusser, even though at the beginning the subject has ideas, thoughts, takes, at the end, they all derive from discourses present and firm, which ultimately function in a circular motion, bringing into existence by predetermination and sustaining. This circularity, where subjects work by themselves and adopt voluntary interpretive roles, exemplifies Althusser's \"interpellation\" and complements Foucault's notion of \"power's vehicle,\" showcasing how Oedipa's clue-reading and conspiracy-mapping sustain the subjugating discourse. The subjects in their acceptance of their roles as subjects in a certain discourse enable the power structure to become and to sustain its existence."
      },
      {
        kind: "stanza",
        text: "III. Deferral and Hermeneutic Paranoia",
        bold: true
      },
      {
        kind: "stanza",
        text: "Having established Foucault's model of truth production through inclusion and exclusion, we now examine how Oedipa's quest for Tristero will exemplify this dynamic. In her encounters with proliferating signs from bathroom walls and stamps to jackets, Derrida's contention on différance materializes. Attempts to fix meaning to the proliferating signs, such as the muted post horn or the W.A.S.T.E. acronym throughout the novel, will accelerate the insidious interplay of truth/power, where the interpretive act itself sustains a centerless proliferation machine."
      },
      {
        kind: "stanza",
        text: "Shift the focus to tracing the ways, attributes, and manifestations of postmodern epistemology in Pynchon's The Crying of Lot 49, I will start with a brief introduction to the novel's world and reality. Secondly, I will continue with the active intellect's interpretive efforts vis-à-vis the hegemony of discourse and subsequent threat of succumbing to it in becoming a subject. Lastly, I will close the discussion with the position and state of the subject in this postmodern terrain. In the protagonist's quest, we will be able to trace how futile it is to anchor at a center. On the contrary, this will facilitate decentralization of the active interpreting individual. This cluster of interpreting subjects contains both Oedipa and us as readers."
      },
      {
        kind: "stanza",
        text: "When dominant discourses begin to challenge each other and offer different interpretations, it becomes clear that these are attempts at constructing a reality, and they multiply in their variety. With the poststructuralist, we have an awareness that our understanding of what we call reality is always mediated: through language, through certain discourses inflicted by certain ideologies, depending on the time period, culture, where you live, and into which body you are born. As these change, so does how the external world is represented to you. And all these representations can be called texts, referring to Derrida's conceptualization. Therefore, reality becomes text. It is indeed a multiplicity of texts. The subject is no longer able to have an unmediated glimpse of external reality. This mediated experience is what is referred to as \"text.\" Therefore, it accounts for the outcome that there is no longer the possibility of a naked truth external and out there. Whenever there is an attempt at understanding a phenomenon, the subject has to relate to it with and through signs. And they are never neutral."
      },
      {
        kind: "stanza",
        text: "IV. Provocative Invitation",
        bold: true
      },
      {
        kind: "stanza",
        text: "One of the important points in Lot 49 is how the subject finds herself in a deeply layered plot where a constant proliferation of information will lead not to a fixed, coherent center of a text, but rather to a constant deferring of signs. Therefore, it is a story of the interpretation of reality and how meaning is conceived out of it. Oedipa Maas's hunt for meaning begins with a letter from Metzger, which announces she is the \"executrix\" of a \"will\" business. She is given the responsibility of sorting out the inheritance of a real estate mogul, Pierce Inverarity, who passed away recently and happens to be an ex-lover of Oedipa. In her journey to execute the will, she comes across a secret and mysterious underground postal system called \"the Tristero\". While signs and clues come from every possible direction in various forms and shapes, Oedipa finds herself vacillating, coming closer and going farther away, in a paradoxical position where it becomes more and more complex to figure out what the central and fundamental truth is that makes up this secret communication system. Throughout her attempts, she will keep stumbling upon an endless line of uncertainties and referring of signs, which may be \"all part of a plot, an elaborate, seduction, plot\" (Pynchon, 19)."
      },
      {
        kind: "stanza",
        text: "Early in her journey, unfamiliar with how to execute a will and estate matters, Oedipa visits the family lawyer Roseman. As they review the technicalities, she asks about delegating the executorship: \"Can't I get somebody to do it for me?\" Roseman's response is deliberately provocative: \"Aren't you even interested?... In what you might find out\" (Pynchon, 12). This response, antithetical to clarity in its deliberate opacity, demands scrutiny with its very conspicuousness. Could all this being an \"elaborate plot\" constitute the very essence of reality's initial fabrication and the subsequent interpretive reception woven around it? Does it not thereby position readers at the novel's decisive call-to-action threshold? Fiction's flux thus begins, sweeping both characters and readers."
      },
      {
        kind: "stanza",
        text: "In the absence of any self-interpreting, foundational text, but instead in multiplicities of texts, it may not be possible to distinguish the real from fiction. If we say there are as many realities as there are discourses, then what is the novelist going to represent in the book? No external naked reality, no fixed identity. Even the idea of perspective is now secondary. Building on this premise, the novel attempts to exploit this opacity, pushing the reader to confront the mechanisms of how fiction is constructed and received."
      },
      {
        kind: "stanza",
        text: "Written with the awareness of creation, the work comes as a self-conscious text. It is indeed remarkably preoccupied with the concept of creating and interpreting fiction: a dual preoccupation literalized through the protagonist Oedipa Maas. In the absence of self-interpreting experience, everything has become a fiction: constructed, both created by the subject and \"visited on her from outside and for no reason at all\" (Pynchon, 13). The direct consequence is the blurring of the boundary of what is fiction and what is its outside. In other words, an ontological blurring. Nevertheless, equipped with certain strategies, the active intellect is going to make sense of the signs and significations, and consequently decide. And this means textuality weaves into the world. Signification and being jointly sustain each other."
      },
      {
        kind: "stanza",
        text: "Oedipa will constantly try to trace down clues and signs surrounding the secret postal system to make sense. These clues and texts she encounters during her quest are in constant proliferation and fragmentation, and are either openly or more subtly empty in the sense that definitive interpretation is withheld. Her compulsive inclination to look at clues and texts and see meaningful and ordered meaning will only cause her to lose her way in the insidious movement of decentered signs in permanent deferral. Several signs will come together in different combinations to yield several interpretations. Two central clues, a muted post horn and an acronym, \"W.A.S.T.E.\", will show up in the hardest instances to make sense of: on the bathroom wall, on stamps, on people's jackets. A secret postal service's name (Tristero) will first appear in a revenge play, in a history book, and later in a nursery rhyme. Amid all this chaos, how is Oedipa going to reach the starting point of all? What kind of a schema could it be? Down the spiral, do they all connect at a certain point to make a whole, a coherent discourse to reveal a fundamental truth? With each attempt, there will only be more and more layers of ambiguity introduced rather than revelation."
      },
      {
        kind: "stanza",
        text: "Having been taken by curiosity and decided to take up the responsibility of being the executrix, Oedipa's journey to San Narciso marks a deviation. The first images of the city are constituted by techno-scientific jargon, presenting a seemingly rational legibility. The text's language and Oedipa's experience instantly become one and function as a destabilization engine. Pretense of legibility and clarity are constituted by the text's material circumstances, which are manifest in its form."
      },
      {
        kind: "stanza",
        text: "\"The ordered swirl of houses and streets, from this high angle, sprang at her now with the same unexpected, astonishing clarity as the circuit card had. Though she knew even less about radios than about Southern Californians, there were to both outward patterns a hieroglyphic sense of concealed meaning, of an intent to communicate. There'd seemed no limit to what the printed circuit could have told her (if she had tried to find out); so in her first minute of San Narciso, a revelation also trembled just past the threshold of her understanding.\" (Pynchon 15-6)",
        italic: true
      },
      {
        kind: "stanza",
        text: "The passage opens up with epistemic shadow play. Vertiginous geometric order offers clarity and suggests decipherability. Similarly, the text constructs a perceptible world loaded with \"intent to communicate.\" Yet, the intent-to-communicate is capturing, and, paradoxically enough, withdraws the message. It is elusive and remains out of reach. Like chasing a dream, which will always be absent, a four-step deciphering urged by \"hieroglyphic sense of concealed meaning\" showcases this paradox and epitomizes Foucauldian power-knowledge regimes, where the promise of revelation serves as the mechanism of control. The \"unsaid\", what-is-beneath is full of charm. The narrative resurfaces a limitless potential revelation that a circuit card secured and had to offer, and without stopping, goes on to introduce more revelations. Revelation is immanent to Oedipa's experience. These deliberate gaps of \"unsaids\" and \"unexplaineds\" are forming the space where the subject's interpretation and consequently one's subjectification will fill up."
      },
      {
        kind: "stanza",
        text: "How strongly the passage implies that Oedipa is ready for the role of reader of signs, for the message out there, without a limit, intended for her, and striving to convey meaning. Her designation as the executrix both precedes and constructs Oedipa. The constant deferral of a truly clear signified is what structures the interpretive endeavour and takes hold of her. The circuit card simile addresses this insidious terrain. The card's simplicity and geometric structure on the outside call attention to its opposite: a potential universe of richness in its insides. Even though the apparent clarity of things implies legibility and decipherability, it is exactly what masks the subtle subjection to power of free-floating signifiers. Understanding and the gravitational center of experience are bent inside out."
      },
      {
        kind: "stanza",
        text: "V. Lurking Possibility",
        bold: true
      },
      {
        kind: "stanza",
        text: "The lurking foundational uncertainty, embedded in the movement of different potentialities, connects to Oedipa's undecidedness and confusion as to what kind of a meaning she is invited to attribute to the external world's experience. In other words, while she \"knows\" her experiences and can register them, this knowledge nevertheless does not pertain to truth. Through inclusion and exclusion on the way to descriptions, which means a meaning takes hold over other possible, rival meanings, emerges power's insidious interplay with truth power as production of truth as a certain manifestation, becoming, of power."
      },
      {
        kind: "stanza",
        text: "Our protagonist is already involved in a layered and blurry plot. The expectation of something happening and the promise of curious events are already out there. In the face of an excess of information and a permanent proliferation of possible significations, Oedipa will employ a strategy of chronologically ordering of events to reach a meaningful resolution. In the apparent ambiguity and disorder of things, between subjective epistemological confusion and \"objective\" reality, there should be a strategy to affirm a shared, ordered, centered meaning. The world bombards us with an excessive amount of information from which we can select, combine, and form into conspiracies, leading to a postmodern crisis where the validity of incoming information is perpetually uncertain. The very issue of signification becomes a problem, marked by the slippage of signifiers and the absence of permanence."
      },
      {
        kind: "stanza",
        text: "\"If one object behind her discovery of what she was to label the Tristero System or often only The Tristero (as if it might be something's secret title) were to bring to an end her encapsulation in her tower, then that night's infidelity with Metzger would logically be the starting point for it; logically. That's what would come to haunt her most, perhaps: the way it fitted, logically, together. As if (as she'd guessed that first minute in San Narciso) there were revelation in progress all around her.\" (Pynchon, 29)",
        italic: true
      },
      {
        kind: "stanza",
        text: "This highlights the drift of signifiers and the gap, emphasizing the lack of permanence. Pynchon explores the condition of the contemporary individual, bombarded by an overwhelming array of meanings and explanations, never able to reach a definitive understanding. The emphasis on \"logically\" thrice draws our attention to the lack of logic in the whole reasoning. There is no logical reason why infidelity with Metzger must be the beginning point. If she is going to trace something called Tristero, we might easily trace it back to Pierce Inverarity and his naming her the executrix. If we think logically, Pierce couldn't have named her if they hadn't had an affair."
      },
      {
        kind: "stanza",
        text: "Having laid out the illogicality of the logic, the questions we may want to ask change. Is there a Tristero conspiracy? Or is there really a conspiracy? Or is Oedipa, in her all intentness in finding meaning to be communicated to her, trying to find the communicated message, creating something out of her mind? Who was a bored housewife, now in the middle of changing the course of her life, is taking the mission up and is very much hungry for meaning and communication all around. As in Foucault's power schema, she is \"under the thrall of truth\"; she is pursuing the truth yet with little awareness and knowledge as to why. Reflecting on Foucault's conceptualization of power and its mechanisms, a pivotal consequence emerges: Oedipa becomes enmeshed in a specific form of subjectivity, a profoundly inquisitive and logical executrix. This transformative process underscores a constitution of and identification with a certain mechanism of subjectivity, as a vehicle of power. The turning-out of events is not solely driven by the interplay of an active intellect and truth, but is significantly propelled by the influential force of power on the subject. It is \"the end of perspective\" (Baudrillard 30)"
      },
      {
        kind: "stanza",
        text: "In this truth-attribution attempt, Oedipa stages a version of the bricoleur, using \"the means at hand to extract meaning from fragments. Like Lévi-Strauss's mythmaker, she repurposes \"the instruments [s]he finds at [her] disposition around [her], those which are already there, which had not been especially conceived with an eye to the operation for which they are to be used and to which one tries by trial and error to adapt them, not hesitating to change them whenever it appears necessary, or to try several of them at once, even if their form and their origin are heterogeneous\" (qtd. in Derrida 355)."
      },
      {
        kind: "stanza",
        text: "She improvises retroactively, by repurposing the affair with the co-executor Metzger, who was a momentary lover, within a fragment of her whole personal history, to find it fit logically into the whole intricate schema around the Tristero mystery, which is itself introduced by the mysterious letter within a fragment of her whole history. This whole logic introduces and is very much based on limits, whether temporal or interpersonal. The use of \"would\" underscores the logic's contextuality and its use-value only within designated borders. These interpretations make sense as long as she and the moment deem them valid. Their functionality as logical tools in deciphering is characterized by their eventual abandonability. This post hoc restructuring exemplifies her bricolage: she forces the experience to fit into an interpretive schema. Through this process, she replicates Foucauldian truth-rituals, treating all signs as equally valid evidence to manufacture coherence. And thus she falls deeper into the labyrinthine interplay of discursive power, truth, and subjectivity."
      },
      {
        kind: "stanza",
        text: "The novel employs free indirect narrative style to point out Oedipa's intensifying epistemological crisis that that there are so many conspiracies in circulation does not necessarily mean there are no conspiracies. The sheer proliferation of conspiracies does not negate their potential reality, but renders their verification impossible. The narrative immerses us in close proximity to uncovering an elaborate plot:"
      },
      {
        kind: "stanza",
        text: "\"as if a plunge towards dawn indefinite black hours long would indeed be necessary before The Tristero could be revealed in its terrible nakedness. Would its smile, then, be coy, and would it flirt sway harmlessly backstage, say goodnight with a Bourbon Street bow and leave her in peace? Or would it instead, the dance ended, come back down the runway, its luminous stare locked to Oedipa's smile gone malign and pitiless; bend to her alone among the desolate rows of seats and begin to speak words she never wanted to hear?\" (Pynchon, 35)",
        italic: true
      },
      {
        kind: "stanza",
        text: "However, the problem is the difficulty of determining whether there is a conspiracy or not. And it gets immensely harder as the world affords her with an excessive amount of information, which Oedipa picks up and compulsively attempts to organize into patterns. The novel directs attention to language's capacity, operation, and reach through and against attempts to understand and conceptualize the reality we are in. As previously established, coming up with your own coherent narrative, which is neither generated nor dominated by the discourse itself, is not possible anymore. The novel makes it clear that language, if it ever had, has lost its power of issuing significance, putting a graspable frame around the bits and pieces of the external phenomena. The result is oscillating between absurdity and menace."
      },
      {
        kind: "stanza",
        text: "VI. Experimentation: Collapse in Subjectification",
        bold: true
      },
      {
        kind: "stanza",
        text: "In a sense, the novel stages humanity's phases of comprehension and subjectification, and more precisely, Oedipa's increasingly concentrated experiments upon herself. This pertains both to the institution of a personality and to becoming the subject of something. Knowledge circulates unfiltered, resists meaningful systemization almost to the level of impossibility, and the system escalates into disorder and instability. There are random encounters and situations where meaning might lie far beyond reach or might not exist at all. Amid this turbulence, Oedipa records the proliferating signs in her notebook, traces their echoes in the external world, and attempts to forge connections between her experiences. As Jean-François Lyotard asserted in his 1986 essay \"Defining the Postmodern\", the subject is \"obligated to complexify, mediate, memorize and synthesise every object, and to change its scale\" (3). It was thus essentially an expression of an inclination. Resilient enough, until and for now, she would \"give them order, she would create constellations\" (Pynchon 60). \"Because it seemed that a pattern was beginning to emerge\" (59). Yet for Oedipa, this is a hastily concluded scenario."
      },
      {
        kind: "stanza",
        text: "This interpretive and pattern-mapping mediation of external phenomena rests on unstable ground. \"That a sign could refer to the depth of meaning, that a sign could exchange for meaning and that something could guarantee this exchange\" are preconditioned and sustained by belief in truth (Baudrillard 5). But what if truth itself is simulated, reproduced in different forms, is shaped ever-changingly by discourses, is constantly manipulated by protean signs? In Baudrillardian terms, it becomes \"weightless,\" it is nothing but a \"gigantic simulacrum,\" \"exchanging in itself, in an uninterrupted circuit without reference or circumference\" (6). Signification itself becomes the central problem, not because language fails to signify, but \"worse: by their artificial resurrection in systems of signs,\" dissolving former roles as a guiding epistemic center into a gap of impermanence (2). What if it is \"attendance at some unique performance, prolonged as if it were the last of the night, something a little extra for whoever'd stayed this late\" (Pynchon, 35)?"
      },
      {
        kind: "stanza",
        text: "When Oedipa happens to see a Jacobean revenge play called The Courier's Tragedy, which shockingly references The Tristero, she is compelled to seek out its director, Randolph Driblette. Lured and invested in even more, she obsessively attempts to trace the original text and to single out what is authentic from what is not. In search of the history of a couplet from the play she saw on stage, she inquires whether it was part of the original stage directions or Driblette's touch. Fixated, she asks several more why-questions."
      },
      {
        kind: "stanza",
        text: "\"You don't understand, getting mad. 'You guys, you're like Puritans are about the Bible. So hung up with words, words... You know where that play exists, not in that file cabinet, not in any paperback you're looking for, but -' a hand emerged from the veil of shower-steam to indicate his suspended head' in here... The words, who cares? They're rote noises to hold line bashes with, to get past the bone barriers around an actor's memory, right? But the reality is in this head. Mine. I'm the projector at the planetarium, all the closed little universe visible in the circle of that stage is coming out of my mouth, eyes, sometimes other orifices also.\" (52-53)",
        italic: true
      },
      {
        kind: "stanza",
        text: "Driblette's provocative answer is an entrapment. He entraps Oedipa in her questioning. Conditions here are not those conditions where traditional modes of causality can explain and lead to centers. She was and is thrilled by the real (truth), assuming its exteriority and universality, and oneness. Nevertheless, the inquiring subject can no longer distinguish what is exterior from what is interior under the violence of interpretation. In the novel's reality, truth's incarnation, as Baudrillard states, embodies the subject, \"the distinction between active and passive is abolished. No longer is there any imperative to submit to the model, or to the gaze. 'YOU are the model!\" (29)."
      },
      {
        kind: "stanza",
        text: "Stable exterior reality, which was once a strong assumption, has collapsed into subjectivity. Oedipa, almost destiny-like obligated, faced with this web of perpetual ambiguity, expresses: \"I am meant to remember. Each clue that comes is supposed to have its own clarity, its fine chances for permanence\" (95). She is the operational ground, where it all happens. Anything and everything that she comes across on her way seems to be just eligible for divisions of pattern. Yet it is never possible to get to the bottom of anything in this flux of communication. No fixedness. It's an ever-continuous production of new relations."
      },
      {
        kind: "stanza",
        text: "Her quest for emancipation, in a sense, to determine explanations, is a continuous restructuring of meaning production and distribution. This operation happens under specific conditions, conditions that Lyotard explains as \"humanity is in the condition of chasing after the process of accumulating new objects of practice and thought,\" \"like a destiny towards a more and more complex condition\" (4). Thus, a two-fold result takes place: one, accidental encounters and correlations with signs of existence and origence all over fill up the most unexpected spaces under the atmosphere, and two, having been a \"thrall of truth,\" \"power's vessel\", the subject both experiences and embodies, resultign in confusion of reality with discursive models. It is the dissolution of words into life, the dissolution of life into words."
      },
      {
        kind: "stanza",
        text: "Oedipa's search for the original text of The Couirer's Tragedy becomes a futile excavation as each clue and discovery of pencilled notes, footnotes, copyright pages, edited editions, and cut-off references feeds her growing paranoia. After Driblette mentions a paperback compilation of Jacobean revenge plays, Oedipa goes to Zapf's Used Books, where she examines the copyright page and discovers that the original hardcover was a textbook, \"Plays of Ford, Webster, Tourneur and Wharfinger\", published by The Lectern Press, Berkeley, Californi, back in 1957\" (68). This discovery spirals into further uncertainty: \"Was there yet another edition,\" where \"the tristero might be explained (68)? D'Amico's speculation that Wharfinger's \"libellous comparison was altered by printer Inigo Barfstable exposes textual instability in a quest for origins (68). Each \"original\" Oedipa traces and finds out facilitates fractures into new variants."
      },
      {
        kind: "stanza",
        text: "As Baudrillard states, \"there is a proliferation of myths of origin and signs of reality; of second-hand truth, objectivity and authenticity. There is an escalation of the true, of the lived experience; a resurrection of the figurative where the object and substance have disappeared\" (6-7). The Tristero mystery resides in erasures and revisions. Her archival efforts into a self-defeating pursuit with each multiplied ambiguity."
      },
      {
        kind: "stanza",
        text: "The violation of thermodynamics' second law, which is introduced to the novel with Maxwell's Demon, serves as a metaphor for Oedipa's increasingly ineffective attempts to \"sort\" significance into meaning (57). Her question, \"Sorting isn't work?\" (57) reflects a metaphysical protest. It is a protest against the fact that despite correlations she detects, they fail to provide coherence, and instead, conspiracy and paranoia are somehow grounds for reality perception processes. Where signs move at random speeds, meaning production becomes a perverse possibility. The equation of effort with figuring out revelation is rendered unfeasible. Therefore, the metaphor operates at two levels simultaneously: just as Oedipa's psyche fractures under the \"swirling, mobile effect\" of signification (Baudrillard), the novel's structure reflects this disintegration. The landscape's loss of variety (87), her automatic driving on the highway, and the return to her starting point (87) are not just plot devices but phenomenological manifestations of a consciousness unable to anchor itself in the \"uninterrupted circuit\" (Baudrillard 6) of free signification."
      },
      {
        kind: "stanza",
        text: "The Tristero's accelerating appearances in a herbalist's window (78), chalked on sidewalks (78), in a \"jump-rope\" game represent the crisis of the empty signifier at its full speed. Each sighting leads to further semiotic shifts in Oedipa's psyche. While early in the novel she meticulously records clues in her notebook, at this point she ends up in a state where she is having trouble \"sorting the night into real and dreamed\" (78). Her strategy of the real has generated only its own deterrence, circulating in a \"gigantic simulacrum\" (Baudrillard 6). Oedipa's final sightings of the muted post horn signs, blurred by dim streetlights in temporal dislocation, mark her deterritorialized state under the power of semiotic excess."
      },
      {
        kind: "stanza",
        text: "Oedipa's daring question, \"Shall I project a world?\" (54), becomes a definitive metafictional point in the novel. The novel has systematically dismantled every foundation for stable interpretation: Pierce's intentions are irrecoverable, the Tristero's existence is unverifiable (\"Either Trystero did exist... or it was being presumed\" [73]), and the boundaries between waking and dreaming dissolve. In this vacuum, the act of \"projecting\" meaning is the only remaining ontological imperative. This crisis is extended to the reader as we attempt to impose narrative coherence on the ambiguities. The final ambiguous auction scene thus functions as a call to sober up from the dizzying effects of the narrative."
      },
      {
        kind: "stanza",
        text: "The novel's non-ending is both a rupture in the narrative and a fulfilment of theoretical stakes. By still unresolved the questions whether the Tristero exists, whether Oedipa has uncovered a conspiracy or fallen into psychosis, Pynchon calls attention to Lyotard's definition of the postmodern as \"incredulity toward metanarratives.\" What is at work instead are fragments and ambiguity. The novel performs the very paradox it has built its narrative upon by inviting interpretation but resisting disclosure by leaving its central questions unresolved. The very operation has become deterrence itself."
      },
      {
        kind: "separator"
      },
      {
        kind: "stanza",
        text: "Works Cited",
        bold: true
      },
      {
        kind: "stanza",
        text: "Althusser, Louis. \"Ideology and Ideological State Apparatuses.\" Lenin and Philosophy and other Essays. Translated by Ben Brewster, London: New Left Press, 1971.\nAuría, Carmen Pérez-Llantada. \"On Fractal Geometry and Meaning Dissemination: Re-Thinking Pynchon's 'The Crying of Lot 49'\". Atlantis, November 1995, Vol. 17, No. 2 (noviembre 1995), pp. 229-243.\nBaudrillard, Jean. Simulacra and Simulation. Translated by Sheila Faria Glaser, The University of Michigan, 1994.\nBinney, Matthew W. \"Thomas Pynchon's Philosophy of the Self in 'The Crying of Lot 49'\". Interdisciplinary Literary Studies, Spring 2006, Vol. 7, No. 2 (Spring 2006), pp. 18-32.\nMcHale, Brian. Postmodernist Fiction. Taylor & Francis e-Library, 2004.\nBurke, Kenneth. Language as Symbolic Action: Essays on Life, Literature, and Method. University of California Press, 1966.\nDerrida, Jacques. \"Force and Signification.\" Writing and Difference. Translated by Alan Bass, London: Routledge Classics, 2002.\nDerrida, Jacques. \"Structure, Sign, and Play in the Discourse of the Human Sciences.\" Writing and Difference. Translated by Alan Bass, London: Routledge Classics, 2002.\nEve, Paul Martin. Pynchon and Philosophy: Wittgenstein, Foucault, Adorno. Palgrave Macmillan, 2014.\nFoucault, Michel. \"Two Lectures.\" Power/Knowledge, Ed. Colin Gordon, New York: Pantheon Books, 1980.\nFoucault, Michel. \"Truth and Power.\" Power/Knowledge. Ed. Colin Gordon, New York: Pantheon Books, 1980.\nFoucault, Michel. \"The Confession of the Flesh.\" Power/Knowledge. Ed. Colin Gordon, New York: Pantheon Books, 1980.\nFoucault, Michel. \"On Power.\" Politics, Philosophy, Culture. Ed. Lawrence D. Kritzman, New York: Routledge, 1988.\nLyotard, Jean-François. \"Defining the Postmodern\", Postmodernism (ICA Documents 4), edited by Lisa Appignanesi, Institute of Contemporary Arts, 1986.\nLyotard, Jean-François. The Postmodern Condition: A Report on Knowledge. Translated by Geoff Bennington and Brian Massumi, Minneapolis: The University of Minnesota Press, 1984.\nPynchon, Thomas. The Crying of Lot 49. New York: The Penguin Press, 2012."
      },
      {
        kind: "separator"
      },
      {
        kind: "stanza",
        text: "© 2026 metnin tüm hakları yazarına aittir.",
        italic: true
      }
    ]
  },
};