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
  more?: { title: string; href: string }[]; // Artık opsiyonel, çünkü algoritma seçecek
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
    title: "çelik,",
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
      { kind: "stanza", text: "sinyor makyavelli telefonda\nbeni günde elli kere arıyor açmıyorum\nsinyor makyavelli diyorum ben hepsini zaten ezberledim\nderler ki eskiden istanbula gelir\ntarlabaşlarında kaybolurmuş\ndedikoduları kızlarda saklı kalmış\nsonra kızlar da kimseciklere söylemezmiş\nyok aman efendim iyi biri miymiş para mı verirmiş ne farkı var" },
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
  "afili haytalar": {
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


  // -- ÇEVİRİ VE YAZI ÖRNEKLERİ --
  "bir-kafenin-icinden": {
    title: "bir kafenin içinden",
    label: "çeviri",
    authors: [{ name: "ayşe kaya", href: "/yazar/ayse-kaya" }],
    // Çeviri ve yazılarda body düz metin paragrafı olarak tutulduğu için stanza kullanıyoruz
    body: [
      { kind: "stanza", text: "bu sayfa şimdilik yer tutucu bir çeviri sayfası.\nbirazdan buraya gerçek çeviri metnini koyacağız.\nistersek ileride özgün metin bilgisi, kaynak künyesi ve çeviren notu da ekleriz." }
    ]
  },
  "sabahi-goremem": {
    title: "sabahı göremem",
    label: "yazı",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      { kind: "stanza", text: "bu sayfa şimdilik yer tutucu bir yazı sayfası.\nbirazdan buraya gerçek düzyazı metnini koyacağız.\nparagraf ritmi ve satır uzunluğu da buna göre şekillenecek." }
    ]
  }
};