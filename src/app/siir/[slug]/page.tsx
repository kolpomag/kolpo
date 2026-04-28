import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

type PoemBodyBlock =
  | { kind: "stanza"; text: string; italic?: boolean; bold?: boolean }
  | { kind: "special-24101990" }
  | { kind: "special-buffalo-bill" };

type Poem = {
  title: string;
  label?: string;
  titleHref?: string;
  authors: { name: string; href: string }[];
  body: PoemBodyBlock[];
  more: { title: string; href: string }[];
};

const poems: Record<string, Poem> = {
  "goteborg": {
    title: "göteborg",
    label: "çeviri - eileen myles",
    titleHref:
      "https://www.poetryfoundation.org/poetrymagazine/poems/153229/goteborg",
    authors: [
      { name: "onur duman", href: "/yazar/onur-duman" },
      { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
    ],
    body: [
      {
        kind: "stanza",
        text: "daphne & alice için",
        bold: true,
      },
      {
        kind: "stanza",
        text:
          "eve geldim ve\n" +
          "bir dolu şu\n" +
          "ur kaybettim.",
      },
      {
        kind: "stanza",
        text:
          "bir zamanlar\n" +
          "otellerden tepsi\n" +
          "çalardım\n" +
          "& şimdi bardak\n" +
          "çalıyorum",
      },
      {
        kind: "stanza",
        text:
          "baya istediğim bi\n" +
          "havlu vardı.\n" +
          "isveç havludan\n"+
          "anlıyor",
      },
      {
        kind: "stanza",
        text:
          "bi gömlek vardı\n" +
          "havaalanında\n" +
          "beyaz,\n" +
          "her şekilde benim\n" +
          "kini katlar",
      },
      {
        kind: "stanza",
        text:
          "eni\n" +
          "dışında",
      },
      {
        kind: "stanza",
        text:
          "ben de o genişliğe\n" +
          "bi yemek ısmarladım &\n" +
          "neredeyse uçağımı\n" +
          "kaçırıyordum.",
      },
      {
        kind: "stanza",
        text:
          "koştum\n" +
          "kalbim\n" +
          "patlayacaktı",
      },
      {
        kind: "stanza",
        text:
          "o kadar da\n" +
          "hızlı değildim",
      },
      {
        kind: "stanza",
        text:
          "benimle birlikte\n" +
          "koşan\n" +
          "bi adam vardı",
      },
      {
        kind: "stanza",
        text:
          "36 diye\n" +
          "bağırdım\n" +
          "dostane",
      },
      {
        kind: "stanza",
        text:
          "beni sallamadı\n" +
          "ama sonra",
      },
      {
        kind: "stanza",
        text:
          "sağa sola\n" +
          "bir şeyler dökmeye\n" +
          "başladı.",
      },
      {
        kind: "stanza",
        text:
          "bana\n" +
          "da\n" +
          "olmuştu.",
      },
      {
        kind: "stanza",
        text:
          "çok fazla\n" +
          "kahve",
      },
      {
        kind: "stanza",
        text:
          "çok çok fazla\n" +
          "kahve",
      },
      {
        kind: "stanza",
        text:
          "keşke biri\n" +
          "burada\n" +
          "olsaydı.",
      },
      {
        kind: "stanza",
        text:
          "çok\n" +
          "hassaslaştım",
      },
      {
        kind: "stanza",
        text:
          "on\n" +
          "saat\n" +
          "uyumuş",
      },
      {
        kind: "stanza",
        text:
          "birisi\n" +
          "vincent price\n" +
          "gibiyim\n" +
          "hiç olmasa",
      },
      {
        kind: "stanza",
        text:
          "yumuşak sesim\n" +
          "fısıldar\n" +
          "rastgele bir şeyleri",
      },
      {
        kind: "stanza",
        text:
          "şiirimde\n" +
          "bir kadın\n" +
          "vardı",
      },
      {
        kind: "stanza",
        text:
          "aslında kastım\n" +
          "rüyamda",
      },
      {
        kind: "stanza",
        text:
          "ve görüştüğüm\n" +
          "birine\n" +
          "benziyordu",
      },
      {
        kind: "stanza",
        text:
          "önceleri\n" +
          "hayır aslında\n" +
          "onun\n" +
          "gibiydi",
      },
      {
        kind: "stanza",
        text:
          "sanki\n" +
          "o olacaktı",
      },
      {
        kind: "stanza",
        text:
          "ve öyle\n" +
          "yoğun bir\n" +
          "zamandı ki\n" +
          "ikimiz için\n" +
          "de",
      },
      {
        kind: "stanza",
        text:
          "o bir şeyleri\n" +
          "bitirmeye\n" +
          "uğraşıyordu ve ben\n" +
          "günlerce\n" +
          "uyuyordum",
      },
      {
        kind: "stanza",
        text:
          "muhtemelen deli\n" +
          "işiydi\n" +
          "ve benimle\n" +
          "kafa buluyordu\n" +
          "ama",
      },
      {
        kind: "stanza",
        text:
          "aramızdaki boşluk\n" +
          "kapanacak\n" +
          "gibi\n" +
          "hissettim",
      },
      {
        kind: "stanza",
        text:
          "gerçek olmalıydı\n" +
          "dedim",
      },
      {
        kind: "stanza",
        text:
          "böyle\n" +
          "hissettiriyordu",
      },
      {
        kind: "stanza",
        text:
          "demek\n" +
          "bu şekilde\n" +
          "iki birisi\n" +
          "biz olabilirdi",
      },
      {
        kind: "stanza",
        text:
          "bu coğrafi\n" +
          "dram",
      },
      {
        kind: "stanza",
        text:
          "çoğu zaman\n" +
          "kişiler olarak\n" +
          "zuhreder",
      },
      {
        kind: "stanza",
        text:
          "yavaşça\n" +
          "öne doğru\n" +
          "eğiliyordum",
      },
      {
        kind: "stanza",
        text:
          "kapatmak\n" +
          "için\n" +
          "küçük",
      },
      {
        kind: "stanza",
        text:
          "mesafeyi",
      },
      {
        kind: "stanza",
        text:
          "rüyamda\n" +
          "afalladım",
      },
      {
        kind: "stanza",
        text:
          "çünkü\n" +
          "herhangi\n" +
          "biriydi",
      },
      {
        kind: "stanza",
        text:
          "huyum\n" +
          "böyle",
      },
      {
        kind: "stanza",
        text:
          "paylaşmak için\n" +
          "benim\n" +
          "ol ki",
      },
      {
        kind: "stanza",
        text:
          "kahvemi\n" +
          "böylesi daha\n" +
          "iyi",
      },
      {
        kind: "stanza",
        text: "öğrenciler!",
        italic: true,
      },
      {
        kind: "stanza",
        text:
          "kahve\n" +
          "iyi\n" +
          "olması gerektiği\n" +
          "gibi",
      },
      {
        kind: "stanza",
        text:
          "günün\n" +
          "bu\n" +
          "saati",
      },
      {
        kind: "stanza",
        text:
          "istediğim\n" +
          "ilişki\n" +
          "tam bu",
      },
      {
        kind: "stanza",
        text:
          "kara\n" +
          "sıvı\n" +
          "beni uyandıran\n" +
          "çalınmış bir\n" +
          "bardakta",
      },
    ],
    more: [
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
      { title: "afili haytalar", href: "/siir/afili-haytalar" },
      { title: "buffalo bill", href: "/siir/buffalo-bill" },
    ],
  },

  "haziranin-kesfi": {
    title: "haziran’ın keşfi",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "ellerimi kullanarak veya kullanmayarak\n" +
          "sağdan sola koyduğum\n" +
          "denkleştirdiğim tüm olmazlar\n" +
          "aşkımın aksak tınısı,\n" +
          "beni affedin.",
      },
      {
        kind: "stanza",
        text:
          "gün döndüğünde elbet\n" +
          "tütsülerim yine seni yanar.\n" +
          "kesme yakuttan\n" +
          "yahut mürver çiçeklerinden yapılma\n" +
          "o akşamüstlerinden birinde\n" +
          "bir tavşan\n" +
          "alacalı bir tilkiye rast gelir.\n" +
          "beden geçmişi şimdi zanneder\n" +
          "kendi sağlamasına durur\n" +
          "nesnenin sürekliliğini zorlar.\n" +
          "orada mı diye üç kez yokladığım\n" +
          "ancak bir yumru kadar olan kalbi\n" +
          "eğer ki durursa diye düşünür tilki\n" +
          "pek bir şey değişmez ancak\n" +
          "kendi kendine patlayan bir sivilce gibi.\n" +
          "şükür ki biraz gece ve sonrası\n" +
          "devrimim yine diskoya çalar.\n" +
          "aşık ve kanlı\n" +
          "kekremsi kırmızı yemişler gibi\n" +
          "çatlayan genç bir sesle\n" +
          "boşalmaya benzer.",
      },
      {
        kind: "stanza",
        text:
          "tavşan kaç,\n" +
          "burada duramazsın.\n" +
          "hayalleri ve ayrık dişleri\n" +
          "alacalı tilkinin\n" +
          "gözlerine bakıyorsun\n" +
          "sonunda yalnızsın.",
      },
    ],
    more: [
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
      { title: "göçmüş kediler bahçesi", href: "/siir/gocmus-kediler-bahcesi" },
      { title: "oyunlarımız var", href: "/siir/oyunlarimiz-var" },
    ],
  },

  "ya-siyah-ya-beyaz": {
    title: "yolunu öğrenmemiş nehirlere",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      {
        kind: "stanza",
        text:
          "kulakların yetmiyor soruyorsun anlamadığında\n" +
          "cevaplara ulaşacaksın, kapıları aralayacaksın\n" +
          "hep alelacele hep koştur — bulamayacaksın\n" +
          "kapını kapatıp pencerenden maviye yeşile,\n" +
          "güneşi sana ulaştıran boş küreye,\n" +
          "yolunu öğrenmemiş nehirlere\n" +
          "bala dönüşmüş\n" +
          "her bir çiçeğin kimliksizliğini\n" +
          "patikanın aşağısındaki çeşmeye koşarak giden çocuğun\n" +
          "iradeyle hiç işinin olmadığını\n" +
          "sıfırla birin sana ihtiyacım yok dediğine kulak vereceğin o pencere kenarını fark\n" +
          "etmeyeceksin fark etmeyeceksin rahminde zehir yuttuğun o benliğin lanetini",
      },
      {
        kind: "stanza",
        text: "you are cursed with simplicity",
        italic: true,
      },
      {
        kind: "stanza",
        text:
          "ya siyahtır ya beyaz\n" +
          "keserek almışlar seni annenin karnından\n" +
          "kolaylaştırmışlar işleri\n" +
          "iki yol var diye görmüşsün\n" +
          "acılı ve doğal olan yol seni öldürecekmiş\n" +
          "acısız hızlı olansa sana bütün bir hayatı getirmiş\n" +
          "seçmişler anneni ve seni yaşatacak yolu\n" +
          "öğrenmişsin işleri kolaylaştıran siyahı\n" +
          "beyazdan kesin ayıran yolu\n" +
          "sınırlar ve tanımlar olmuş kalplerin ahı\n" +
          "ya siyahtır ya beyaz",
      },
    ],
    more: [
      {
        title: "dualarımı aksatıyorum canlandır beni",
        href: "/siir/sivri-catlaklar",
      },
      { title: "piiz ver piiz ver mayday", href: "/siir/piiz-ver-piiz-ver-mayday" },
      { title: "belli belirsiz", href: "/siir/belli-belirsiz" },
    ],
  },

  "ezbere-saman": {
    title: "ezbere şaman",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "bana inanmasan da\n" +
          "inanabilirsin bunca şehrin yaratıldığına\n" +
          "artık çok bunaldın kalk da gidelim\n" +
          "oltanı at birine elbet denk gelirim\n" +
          "bak yeni bir desen tutturdum ıslığımla\n" +
          "kuvvet ham derime keskin\n" +
          "mutlak yansın canımız\n" +
          "kuvvet ham derime keskin\n" +
          "sık dişlerini iyice sık ki dökülsünler\n" +
          "sokağım yorgun sırtlandım yüzyılını\n" +
          "içimin yağlarını eritecek ne çok şey var\n" +
          "israil’in köpek kolonisi\n" +
          "ah şu berlin bir daha bombalansa!",
      },
      {
        kind: "stanza",
        text:
          "sigaranın tadı ne zaman karamele çalarsa\n" +
          "o zaman çağır beni\n" +
          "müziğin sana dediği gibi\n" +
          "uçucu bir koku başını döndürse yeter\n" +
          "telefonun çalabilir komorbidite baştan yalan\n" +
          "saçmalamayalım onca hayatı yaşamanın bedeli var\n" +
          "şimdi prospektüslerde arayaduralım şifamızı\n" +
          "hepimizin bildiği kentlerin ezbere şamanı\n" +
          "önümüzde koskoca literatür ne aşktır ne değildir\n" +
          "meyvem hala mı acı da ekşitir yüzünü?\n" +
          "benim yurdum sensin rot balans bozuk aksi yöne çeker\n" +
          "babamız öğretti görece toplu adamlar sürer dünyayı\n" +
          "bunlar yörük adetleri eski türklerden kalma\n" +
          "annemiz doğurur\n" +
          "tarla bereketli\n" +
          "bir çizgi iki çizgi üç çizgi zig zag\n" +
          "bir de pisinden caz koyalım arkaya\n" +
          "teyzeler olup açalım eklemlerimizi\n" +
          "iyice gıcırdasın kirişlerimiz\n" +
          "rabbim leylaklarımla al beni içine\n" +
          "rabbim leylaklarınla sız benim içime\n" +
          "hiçbir batılı çözemesin beni",
      },
    ],
    more: [
      { title: "haziran’ın keşfi", href: "/siir/haziranin-kesfi" },
      {
        title: "göçmüş kediler bahçesi",
        href: "/siir/gocmus-kediler-bahcesi",
      },
      { title: "oyunlarımız var", href: "/siir/oyunlarimiz-var" },
    ],
  },

  "sivri-catlaklar": {
    title: "dualarımı aksatıyorum canlandır beni",
    label: "şiir",
    authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
    body: [
      {
        kind: "stanza",
        text:
          "iyileşmek isteğiyle bitmeyecek olana\n" +
          "beni tut beni bırakma diye\n" +
          "yarı yolda kendime güvendim\n" +
          "yüzeylerden akacak sıvıların akıntısıyla devinim diye\n" +
          "yaşam ve küçük ölüm isteğine boyun eğmiyorum!\n" +
          "derine her çarptığımda gücümü geri toplayacak o kuvveti canlandırmak niyetiyle\n" +
          "kokusuyla dokunuşuyla sonra kayganlığıyla\n" +
          "vücudun heyecanı, kıvrımlarında oluşan şeffaf hayatcıklar",
      },
      {
        kind: "stanza",
        text:
          "duygularım sublardan yıkılır\n" +
          "kalbin bezgin cevaplarla kırılır\n" +
          "dirayetini kaptırmış çene çekilirsin hilal gibi,\n" +
          "egzoz gazında yapayalnız bir bebek kedi\n" +
          "dudaklarında kendini bırakmış yaprağın titrekliği\n" +
          "yanaklarında karşı koyamadığım pürüzsüz yumuşaklık",
      },
      {
        kind: "stanza",
        text:
          "bil ki ben seni tamamlayamam\n" +
          "sivri çatlaklarından sızan insanlığına \n" +
          "parmak salladım seni tam sevemedim aşkım\n" +
          "bekledim aşkım, \n" +
          "akan gözyaşlarynda kelebek yolcuğu\n" +
          "fani göze kandığını belli etmez\n" +
          "acıyı gören kalbin gözü\n" +
          "acıyı kaydeden bu görünmez ister",
      },
      {
        kind: "stanza",
        text:
          "dualarımı aksatıyorum annem\n" +
          "yardım dilenmiyorum dimdik \n" +
          "çok rahatım en görünmediğimde\n" +
          "gücenmeyiversin alemlerin rabbi de\n" +
          "su içiyorum adalet mahallesi camiinde\n" +
          "şehveti tadıyorum canlandır beni\n" +
          "illellezine ca’m önü bileti al\n" +
          "taşlının yolları kabelidir, alllah\n" +
          "manevi star önlüldarham abal",
      },
      {
        kind: "stanza",
        text:
          "tak tatak tak dışk dışk dışk dışk\n" +
          "ecirna minen-nar bi avfike ya rahman\n" +
          "subhaneke ya tevvab tealeyte ya vahhab\n" +
          "sublar dört vuruş chargelıyor\n" +
          "sanki bilinç kapanması",
      },
      {
        kind: "stanza",
        text:
          "hayatına intihar aşkçısı gibi dalan bu insan\n" +
          "ilk akşam bana özel fotoğraf attı\n" +
          "kıran ve kırılan\n" +
          "pazar allemand pazar dü levan",
      },
    ],
    more: [
      { title: "yolunu öğrenmemiş nehirlere", href: "/siir/ya-siyah-ya-beyaz" },
      { title: "piiz ver piiz ver mayday", href: "/siir/piiz-ver-piiz-ver-mayday" },
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
    ],
  },

  "gocmus-kediler-bahcesi": {
    title: "göçmüş kediler bahçesi",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "biliyorum, artık beni göremezsin\n" +
          "bıçağın kabzası da bileyli.\n" +
          "yine de utanmayı unutarak\n" +
          "güneşin doğuşundan\n" +
          "batışına kadar\n" +
          "kedileri sevmek isterdim.\n" +
          "kızışmış vaşaklar gibi gergin kaslarımız\n" +
          "ve buyurgan kalplerimiz\n" +
          "terli ellerimizde kurulmuş saatler\n" +
          "şafağa doğru haylaz\n" +
          "ve atılgan\n" +
          "bekleriz.",
      },
      {
        kind: "stanza",
        text:
          "korkulacak hiçbir şey kalmadı oysa.\n" +
          "beni sevmen için tüm nedenleri ortadan kaldırdım.\n" +
          "vazgeçtim görmekten\n" +
          "bir fiş sırasını bekler gibi alelade\n" +
          "ve topukların yere değmeden\n" +
          "bir hayatı içine alıp\n" +
          "kendinle çoğaltmanı,\n" +
          "tenine serpiştirdiğin\n" +
          "onca takımyıldızını.\n" +
          "bir selam bile bekleyemem\n" +
          "sen kedilere odaklan.",
      },
      {
        kind: "stanza",
        text:
          "hiç kimse bir yere gitmedi bak!\n" +
          "güneşimiz aynı\n" +
          "havamız aynı\n" +
          "ne cüret ki\n" +
          "günlerin isimleri de aynı.\n" +
          "çünkü göçmüş kediler bahçesi’nde\n" +
          "bizden önce ve sonra\n" +
          "sabah vardiyasına giden adamlar vardı.\n" +
          "taze ekmek kokuları\n" +
          "terimizle yıkayıp astığımız çarşaflar.\n" +
          "yanına yattığımda\n" +
          "çıplak ayaklarının hizasında\n" +
          "sokak lambası\n" +
          "sonra sabah ezanı\n" +
          "mevsimlere göre sıralarını değiş.",
      },
    ],
    more: [
      { title: "haziran’ın keşfi", href: "/siir/haziranin-kesfi" },
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
      { title: "oyunlarımız var", href: "/siir/oyunlarimiz-var" },
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
      {
        kind: "stanza",
        text:
          "bir gemi kumandanıyla on beş cevval mürettebatı\n" +
          "tahammül sınırlarında bir seferde\n" +
          "deniz çok korkmuş krakenler sonra sirenler\n" +
          "düşüne yattığım o gece\n" +
          "piiz ver piiz ver mayday",
      },
      {
        kind: "stanza",
        text:
          "allahını unuttu güvertebaşı\n" +
          "aşçı günde dört kere attırdı\n" +
          "bu seferler kolay değildir söylüyorum \n" +
          "gemiler açılır karadeniz’den okyanusa \n" +
          "yolunu bulmak zordur gps deaktif\n" +
          "gerekir sigorta girişi yapılmamış en az bir saykik \n" +
          "ki tüyü bitmemiş oğlanlardır bunların çoğu\n" +
          "herkes bilir ergenliğe girince kasıklara \n" +
          "karşı bir savunma mekanizması olarak\n" +
          "tüyleri hemencecik biter o ara\n" +
          "süreçte yakılan kalorinin %35 kadarı buraya gider\n" +
          "korkma inmez iyi ki var anneler!",
      },
    ],
    more: [
      { title: "afili haytalar", href: "/siir/afili-haytalar" },
      { title: "yolunu öğrenmemiş nehirlere", href: "/siir/ya-siyah-ya-beyaz" },
      { title: "belli belirsiz", href: "/siir/belli-belirsiz" },
    ],
  },

  "oyunlarimiz-var": {
    title: "oyunlarımız var",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "esaslı çocuklardık bir zamanlar\n" +
          "ölüme ne çok yakın\n" +
          "ne de çok uzak\n" +
          "şimdi nizami kar beyazı memleketlerde\n" +
          "aramızda trenler ve küslükler var",
      },
      {
        kind: "stanza",
        text:
          "terli bir akşamüstünde\n" +
          "biranın ağırlığı \n" +
          "körpe vücutlarımıza henüz çökmüşken\n" +
          "iki cigaralık kırıp fırlamalı sokağa\n" +
          "gecekonduların arasında leyla\n" +
          "yuvarlanmakla flörtleştiğimiz yokuşlarda\n" +
          "toyluğu keşfetmeli\n" +
          "ve yanan her ateşin\n" +
          "imdat çağrısı olmadığını\n" +
          "öğrenmeliyiz",
      },
      {
        kind: "stanza",
        text:
          "gecenin salyası\n" +
          "üstümüze bulaşana dek\n" +
          "kuyruklarımız ayrılmaz birbirinden\n" +
          "sanmayın ki korkudan\n" +
          "yoksa hala\n" +
          "oyunlarımız var",
      },
    ],
    more: [
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
      { title: "haziran’ın keşfi", href: "/siir/haziranin-kesfi" },
      { title: "göçmüş kediler bahçesi", href: "/siir/gocmus-kediler-bahcesi" },
    ],
  },

  "24101990": {
    title: "24101990",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [{ kind: "special-24101990" }],
    more: [
      { title: "belli belirsiz", href: "/siir/belli-belirsiz" },
      { title: "paesino sborramerda", href: "/siir/paesino-sborramerda" },
      { title: "uyku düzeni düzenleyici", href: "/siir/uyku-duzeni-duzenleyici" },
    ],
  },

  "belli-belirsiz": {
    title: "belli belirsiz",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      {
        kind: "stanza",
        text:
          "Ulan yalvardım bırakalım dedim\n" +
          "Kaç kere konuştuk üç ay\n" +
          "hani bidaha yoktu\n" +
          "Allah belanız versin\n" +
          "kontrol kanka sıkıntı yok\n" +
          "bok yok",
      },
    ],
    more: [
      { title: "24101990", href: "/siir/24101990" },
      { title: "paesino sborramerda", href: "/siir/paesino-sborramerda" },
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
    ],
  },

  "kendimin-ic-ve-disbukey-sinirlari": {
    title: "kendimin iç ve dışbükey sınırları",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "sokak her nefes alıp verdiğinde\n" +
          "kaldırımlar et olur\n" +
          "kabarıp söner\n" +
          "kulağında trenlerin\n" +
          "boğuk uğultusu\n" +
          "hoşgörü bağıl\n" +
          "tüm sabitler uyuşturucu\n" +
          "kriptolar\n" +
          "para piyasaları\n" +
          "kafanı kaldırıma geçirdiklerinde\n" +
          "ağzına gelen\n" +
          "adrenalinin metalik tadı",
      },
      {
        kind: "stanza",
        text:
          "oysa çamurum aynı sizinki gibi\n" +
          "kanlı ve yapışkan\n" +
          "hayal kırıklıklarından yapılma\n" +
          "sıradan bir hayatı\n" +
          "mahvetme kaşıntısıyla\n" +
          "ama hücrelerim\n" +
          "tam teşekküllü\n" +
          "f tipi\n" +
          "bitkilerinki gibi",
      },
      {
        kind: "stanza",
        text:
          "yazık\n" +
          "hislerim bazen\n" +
          "kucağıma sığmaz\n" +
          "yerlere dökülür\n" +
          "ya ziyan olur\n" +
          "ya da bir yoksunluk anında\n" +
          "yalanmak için\n" +
          "öylece beklerler\n" +
          "ama geriye toplamaya çalışmanın\n" +
          "saçmalığından gelen\n" +
          "o cüret\n" +
          "sonuna kadar\n" +
          "yaşanmalı",
      },
    ],
    more: [
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
      { title: "turmstraße", href: "/siir/turmstrasse" },
      { title: "feierabendbier", href: "/siir/feierabendbier" },
    ],
  },

  "paesino-sborramerda": {
    title: "paesino sborramerda",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      {
        kind: "stanza",
        text:
          "tanıyorum lan seni sen utanmadan öpüşensin\n" +
          "soğukta en son seni kıstıracaklar\n" +
          "sanma ki yırttım adını biricit koyacağım\n" +
          "tam gırtlağına şarkı yapıştıracağım\n" +
          "ensen kaşınacak kıskanç\n" +
          "ben ki a scribe of the prophetical order that is batn-ı neobeat\n" +
          "koca divination senden razı olsun budunbeyi",
      },
      {
        kind: "stanza",
        text:
          "sinyor makyavelli telefonda\n" +
          "beni günde elli kere arıyor açmıyorum\n" +
          "sinyor makyavelli diyorum ben hepsini zaten ezberledim\n" +
          "derler ki eskiden istanbula gelir\n" +
          "tarlabaşlarında kaybolurmuş\n" +
          "dedikoduları kızlarda saklı kalmış\n" +
          "sonra kızlar da kimseciklere söylemezmiş\n" +
          "yok aman efendim iyi biri miymiş para mı verirmiş ne farkı var",
      },
      {
        kind: "stanza",
        text:
          "po nehrinde annem boğuldu\n" +
          "ölüsünü karşıya geçiremedik\n" +
          "küçükbudunbaşı uygun görmedi\n" +
          "ben de dönüp bakamadım\n" +
          "burada cenaze olmaz köpürür diye korktuk\n" +
          "şükür ki koca kehanet sana sivrisineklerle geldim\n" +
          "dölleri her yere damladı\n" +
          "şu toprağın oracıklarında çiçekler bitti\n" +
          "o gün bugündür orası\n" +
          "paesino sborramerda",
      },
      {
        kind: "stanza",
        text:
          "bize kayık alacaklar\n" +
          "ki venedik’te tekrar öpüşeceğim\n" +
          "tüm venedik buluşup beni saklayacak\n" +
          "san marko’da kocaman taşakların ardında\n" +
          "sonra balçıkları tarhanaya katacağız bolonya’da",
      },
    ],
    more: [
      { title: "24101990", href: "/siir/24101990" },
      { title: "belli belirsiz", href: "/siir/belli-belirsiz" },
      { title: "uyku düzeni düzenleyici", href: "/siir/uyku-duzeni-duzenleyici" },
    ],
  },

  "turmstrasse": {
    title: "turmstraße",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "duraktaki ince parmaklı kadın\n" +
          "sen olmadığın için teşekkür ederim.\n" +
          "eğer mümkünse\n" +
          "seni daha iyi günlerime\n" +
          "saklamak isterim.\n" +
          "yaza kadar dönmeli\n" +
          "yaza kadar dönmeli\n" +
          "yoksa gelen her yazı\n" +
          "seninle karıştırabilirim.",
      },
      {
        kind: "stanza",
        text:
          "kaç kadın yıkarsam\n" +
          "akar üstümden aşkın?\n" +
          "şeftali ve süt kokan\n" +
          "ıslak koltuk altlarında\n" +
          "beni yine sen yıka\n" +
          "dokunamaz içime başkası.",
      },
    ],
    more: [
      { title: "feierabendbier", href: "/siir/feierabendbier" },
      {
        title: "kendimin iç ve dışbükey sınırları",
        href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
      },
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
    ],
  },

  "feierabendbier": {
    title: "feierabendbier",
    label: "şiir",
    authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
    body: [
      {
        kind: "stanza",
        text:
          "anneannemin dul saçlarından ördüğü dünya\n" +
          "sabahın beşinde biralar içirir bana\n" +
          "almanları sarhoş ederim\n" +
          "sonra ya öpüşür ya dövüşürler\n" +
          "bu kabuğun kenarları çok kalın\n" +
          "hava geçirmez\n" +
          "su geçirmez\n" +
          "aşk geçirmez\n" +
          "seni geçirir bazen\n" +
          "ikna olurum dünyaya",
      },
      {
        kind: "stanza",
        text:
          "annem başka anneleri imrendiren\n" +
          "mütevazı, alçakgönüllü\n" +
          "ne efendi çocuklar yetiştirir\n" +
          "sonra babamı besler\n" +
          "sigara içer\n" +
          "rakı içer\n" +
          "et yer\n" +
          "yanlarına giderim\n" +
          "nakış gibi işlenmiş dantel\n" +
          "kondurulurum televizyonun üzerine\n" +
          "kimi seneler acı domates soslaryna yetişirim\n" +
          "kahvaltılıklara dönüşür\n" +
          "ekmekle yerim\n" +
          "havalar güzeldir\n" +
          "çocukluğumun duvarları daralır\n" +
          "püfür püfür eser\n" +
          "sabah olur\n" +
          "ezan okunur allahuekber",
      },
      {
        kind: "stanza",
        text:
          "annem her gördüğümde biraz daha beyazlar\n" +
          "kime çekmişim,\n" +
          "kuş kalbi hep mi hızlı atar?\n" +
          "seni bile düşünür benim yerime,\n" +
          "sonra ikimiz için de\n" +
          "kardeşimi öper",
      },
      {
        kind: "stanza",
        text:
          "bu kazak bana dikilmiş,\n" +
          "beş boy büyük\n" +
          "iyisi mi büyüyünce giyerim\n" +
          "kaşındırıyor ama",
      },
    ],
    more: [
      { title: "turmstraße", href: "/siir/turmstrasse" },
      {
        title: "kendimin iç ve dışbükey sınırları",
        href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
      },
      { title: "ezbere şaman", href: "/siir/ezbere-saman" },
    ],
  },

  "what-remains": {
    title: "what remains",
    label: "şiir",
    authors: [{ name: "emin musaiev", href: "/yazar/emin-musaiev" }],
    body: [
      {
        kind: "stanza",
        text:
          "I ought to write letters -\n" +
          "letters not to be read\n" +
          "until the time comes when it's funny\n" +
          "and not a rotten bit of dread\n" +
          "and boredom, smeared in honey,\n" +
          "remains for me to entertain.\n" +
          "to be as is, sincere and plain,\n" +
          "to let my childishness remain\n" +
          "my quirk -\n" +
          "a funny trait,\n" +
          "maybe disturbing,\n" +
          "but yet incapable of burning\n" +
          "a timid finger upon touch.",
      },
      {
        kind: "stanza",
        text:
          "yes, it's too much\n" +
          "to seek attention and regret\n" +
          "well-meaning interest that I get,\n" +
          "to be a bore of my own volition\n" +
          "and hide a grin that though I hate,\n" +
          "will twist my lips - its true estate -\n" +
          "and through my eyes dispense its poison\n" +
          "while I am cowering, afraid to look\n" +
          "and meet the gaze of who it took\n" +
          "to be its prey.",
      },
      {
        kind: "stanza",
        text:
          "come what may -\n" +
          "to take one last look at the vista,\n" +
          "to close the book before it rains,\n" +
          "to face towards, and not away,\n" +
          "is what apparently remains.",
      },
    ],
    more: [
      { title: "uyku düzeni düzenleyici", href: "/siir/uyku-duzeni-duzenleyici" },
      { title: "buffalo bill", href: "/siir/buffalo-bill" },
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
    ],
  },

  "uyku-duzeni-duzenleyici": {
    title: "uyku düzeni düzenleyici",
    label: "şiir",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      {
        kind: "stanza",
        text:
          "Yatak boşluğu sandalye göçlüğü masaüstü bardak çokluğu\n" +
          "Çay üstüne çay ve böbrek faaliyeti bayramı kutlamalarım\n" +
          "Şu yüzyılda hala kağıtların arasında boğulmak\n" +
          "Işte ben bu kadarım dedim sonunda ederim budur\n" +
          "böcekler görmediğim yerlerimde gezerken\n" +
          "Ayak serçe parmağımda şeytan besliyor-larmış\n" +
          "Ezoterik şakalar ve/veya hüzün dolu şarkılar\n" +
          "Üst komşumun sesine engel olacak mısınız\n" +
          "sorunların bütünü parçalarından az geliyo\n" +
          "bi düşününce anlık şükretme isteğim uyanıyor ama\n" +
          "kimi anlar var cidden büyük aparkat\n" +
          "e ama yıllardır her zaman ayaktayım\n" +
          "yalnız tek başımayken elimi götürür\n" +
          "Bazırım bazen bazıyan yerlerimi\n" +
          "ki bazımasınlar bazen.",
      },
    ],
    more: [
      { title: "paesino sborramerda", href: "/siir/paesino-sborramerda" },
      { title: "belli belirsiz", href: "/siir/belli-belirsiz" },
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
    ],
  },

  "buffalo-bill": {
    title: "buffalo bill",
    label: "çeviri",
    titleHref: "https://www.poetryfoundation.org/poems/47244/buffalo-bill-s",
    authors: [{ name: "prowler", href: "/yazar/prowler" }],
    body: [{ kind: "special-buffalo-bill" }],
    more: [
      { title: "belki bir sabah", href: "/siir/belki-bir-sabah" },
      { title: "what remains", href: "/siir/what-remains" },
      { title: "afili haytalar", href: "/siir/afili-haytalar" },
    ],
  },

  "belki-bir-sabah": {
    title: "belki bir sabah",
    label: "çeviri",
    titleHref:
      "https://www.libriantichionline.com/divagazioni/eugenio_montale_forse_mattino_andando_aria_vetro_1925",
    authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
    body: [
      {
        kind: "stanza",
        text:
          "Belki bir sabah, yürürken kuru, cam gibi havada,\n" +
          "dönüp tanık olacağım mucizenin gelişine:\n" +
          "sırtımı döndüğüm hiçlik, ardımda kalan boşluk\n" +
          "bir sarhoşun dehşetiyle",
      },
      {
        kind: "stanza",
        text:
          "Sonra, sanki bir ekranda gibi, ağaçlar evler tepeler\n" +
          "Hızlıca toplanacaklar tanıdık yanılsamalarla.\n" +
          "Ama çok geç olacak; ve ben sessizce uzaklaşacağım\n" +
          "Arkalarına bakmayan insanların arasından, bu sırrımla.",
      },
    ],
    more: [
      { title: "uyku düzeni düzenleyici", href: "/siir/uyku-duzeni-duzenleyici" },
      { title: "göteborg", href: "/siir/goteborg" },
      { title: "afili haytalar", href: "/siir/afili-haytalar" },
    ],
  },

  "afili-haytalar": {
    title: "afili haytalar",
    label: "çeviri",
    titleHref:
      "https://www.poetryfoundation.org/poetrymagazine/poems/28112/we-real-cool",
    authors: [
      { name: "onur duman", href: "/yazar/onur-duman" },
      { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
    ],
    body: [
      {
        kind: "stanza",
        text: "kolpo sert, kafalar güzel.\nkör sabahın yedisi.",
        italic: true,
      },
      { kind: "stanza", text: "afili haytalar. okul\nkaçık. gece" },
      { kind: "stanza", text: "sürtük. yumruk\nhakiki. ağızlar" },
      { kind: "stanza", text: "bozuk. cin\nseyrelir, yaz" },
      { kind: "stanza", text: "cazlar. genç\nölür." },
    ],
    more: [
      { title: "piiz ver piiz ver mayday", href: "/siir/piiz-ver-piiz-ver-mayday" },
      { title: "göteborg", href: "/siir/goteborg" },
      { title: "buffalo bill", href: "/siir/buffalo-bill" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const poem = poems[slug];

  if (!poem) {
    return {
      title: "şiir bulunamadı",
      description: "çağdaş yazın alanı.",
    };
  }

  return {
    title: poem.title,
    description: "çağdaş yazın alanı.",
    openGraph: {
      title: `${poem.title} — kolpo.`,
      description: "çağdaş yazın alanı.",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${poem.title} — kolpo.`,
      description: "çağdaş yazın alanı.",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function SiirPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";

  const linkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const poem = poems[slug];

  if (!poem) {
    return (
      <main
        style={{
          background: "#f3f0e8",
          minHeight: "100vh",
          color: "#111111",
          fontFamily: "Georgia, Times New Roman, serif",
          padding: "34px 36px",
        }}
      >
        şiir bulunamadı
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#f3f0e8",
        minHeight: "100vh",
        color: "#111111",
        fontFamily: "Georgia, Times New Roman, serif",
      }}
    >
      <style>{`
        .author-link:hover,
        .more-link:hover,
        .source-link:hover {
          color: ${accent} !important;
        }

        .poem-shell {
          padding: 24px 36px 110px 36px;
          max-width: 1280px;
        }

        .poem-topline {
          border-top: 1px solid rgba(17,17,17,0.12);
          padding-top: 18px;
          margin-bottom: 28px;
        }

        .poem-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: #6f6b63;
          margin-bottom: 14px;
        }

        .poem-title {
          margin: 0;
          max-width: 980px;
          font-size: 92px;
          line-height: 0.93;
          font-weight: 600;
          letter-spacing: -0.05em;
        }

        .poem-meta {
          margin-top: 16px;
          margin-bottom: 0;
          font-size: 20px;
          line-height: 1.15;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: -0.02em;
        }

        .poem-grid {
          display: grid;
          grid-template-columns: minmax(0, 760px) 1fr;
          gap: 72px;
          align-items: start;
        }

        .poem-body {
          display: flex;
          flex-direction: column;
          gap: 26px;
          font-size: 30px;
          line-height: 1.55;
          letter-spacing: -0.02em;
        }

        .poem-more {
          padding-top: 8px;
        }

        .poem-more-inner {
          border-top: 1px solid rgba(17,17,17,0.12);
          padding-top: 14px;
        }

        .poem-more-title {
          margin: 0 0 22px 0;
          font-size: 22px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #c32721;
        }

        .poem-more-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .poem-more-link {
          color: #111111;
          text-decoration: none;
          transition: color 0.18s ease;
          font-size: 30px;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .special-24101990 {
          background: transparent;
          color: #111111;
          padding: 34px 34px 42px 34px;
          min-height: 860px;
          position: relative;
          overflow: hidden;
        }

        .special-24101990-head {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 54px;
        }

        .special-24101990-title-wrap {
          position: relative;
          margin-bottom: 42px;
        }

        .special-24101990-gunes {
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: 170px;
          line-height: 0.82;
          font-weight: 900;
          color: #c32721;
          text-transform: uppercase;
          letter-spacing: -0.08em;
        }

        .special-24101990-dersane {
          position: absolute;
          left: 310px;
          top: 118px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #111111;
        }

        .special-24101990-grid {
          display: grid;
          grid-template-columns: 0.9fr 0.7fr;
          gap: 56px;
          align-items: start;
        }

        .special-24101990-left {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          line-height: 1.8;
          max-width: 400px;
        }

        .special-24101990-right {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          justify-content: space-between;
          padding-top: 8px;
        }

        .special-24101990-diltek {
          font-family: Arial, Helvetica, sans-serif;
          max-width: 360px;
        }

        .special-24101990-diltek-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }

        .special-24101990-diltek-body {
          font-size: 24px;
          line-height: 1.65;
        }

        .special-24101990-stop {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.04em;
          max-width: 360px;
          margin-top: 120px;
        }

        .special-24101990-address {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          text-align: right;
          opacity: 0.9;
          margin-top: 160px;
          max-width: 420px;
          align-self: flex-end;
        }

        .special-buffalo {
          padding: 18px 0 6px 0;
          font-size: 30px;
          line-height: 1.55;
          letter-spacing: -0.02em;
        }

        .special-buffalo-line {
          display: block;
          white-space: pre-wrap;
        }

        .bb-1  { margin-left: 0; }
        .bb-2  { margin-left: 0; }
        .bb-3  { margin-left: 150px; }
        .bb-4  { margin-left: 150px; }
        .bb-5  { margin-left: 560px; }
        .bb-6  { margin-left: 0; }
        .bb-7  { margin-left: 860px; }
        .bb-8  { margin-left: 0; }
        .bb-9  { margin-left: 430px; }
        .bb-10 { margin-left: 0; }
        .bb-11 { margin-left: 0; }
        .bb-12 { margin-left: 0; }

        @media (max-width: 900px) {
          .poem-shell {
            padding: 20px 20px 72px 20px;
          }

          .poem-title {
            font-size: 56px;
            line-height: 0.96;
          }

          .poem-meta {
            font-size: 17px;
            margin-top: 12px;
          }

          .poem-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .poem-body {
            font-size: 24px;
            line-height: 1.6;
            gap: 22px;
          }

          .poem-more {
            padding-top: 0;
          }

          .poem-more-link {
            font-size: 26px;
          }

          .special-24101990 {
            padding: 20px;
            min-height: auto;
          }

          .special-24101990-head {
            font-size: 18px;
            margin-bottom: 28px;
          }

          .special-24101990-gunes {
            font-size: 92px;
            line-height: 0.84;
          }

          .special-24101990-dersane {
            position: static;
            margin-top: 10px;
            font-size: 28px;
          }

          .special-24101990-title-wrap {
            margin-bottom: 28px;
          }

          .special-24101990-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .special-24101990-left {
            font-size: 17px;
            line-height: 1.7;
            max-width: 100%;
          }

          .special-24101990-right {
            padding-top: 0;
            gap: 28px;
          }

          .special-24101990-diltek-title {
            font-size: 20px;
          }

          .special-24101990-diltek-body {
            font-size: 18px;
            line-height: 1.6;
          }

          .special-24101990-stop {
            font-size: 24px;
            margin-top: 0;
          }

          .special-24101990-address {
            font-size: 16px;
            text-align: left;
            align-self: flex-start;
            margin-top: 0;
          }

          .special-buffalo {
            font-size: 23px;
            line-height: 1.58;
          }

          .bb-1, .bb-2, .bb-3, .bb-4, .bb-5, .bb-6, .bb-7, .bb-8, .bb-9, .bb-10, .bb-11, .bb-12 {
            margin-left: 0 !important;
          }
        }

        @media (max-width: 560px) {
          .poem-title {
            font-size: 44px;
          }

          .poem-meta {
            font-size: 16px;
          }

          .poem-body {
            font-size: 21px;
            line-height: 1.62;
          }

          .poem-more-link {
            font-size: 22px;
          }

          .special-24101990-gunes {
            font-size: 72px;
          }

          .special-24101990-dersane {
            font-size: 22px;
          }

          .special-24101990-left {
            font-size: 15px;
          }

          .special-24101990-diltek-body {
            font-size: 16px;
          }

          .special-24101990-stop {
            font-size: 20px;
          }

          .special-24101990-address {
            font-size: 14px;
          }

          .special-buffalo {
            font-size: 20px;
            line-height: 1.6;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="poem-shell">
        <div className="poem-topline">
          <div className="poem-label">{poem.label || "şiir"}</div>

          <h1 className="poem-title">
            {poem.title}
            {poem.titleHref ? (
              <a
                href={poem.titleHref}
                target="_blank"
                rel="noreferrer"
                className="source-link"
                style={{
                  color: "#111111",
                  textDecoration: "none",
                  transition: "color 0.18s ease",
                  marginLeft: "8px",
                }}
              >
                *
              </a>
            ) : null}
          </h1>

          <p className="poem-meta">
            {poem.authors.map((author, index) => (
              <span key={author.href}>
                <a href={author.href} className="author-link" style={linkStyle}>
                  {author.name}
                </a>
                {index < poem.authors.length - 1 ? (
                  <span style={{ color: "#6f6b63" }}> & </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>

        <div className="poem-grid">
          <div className="poem-body">
            {poem.body.map((block, index) => {
              if (block.kind === "special-24101990") {
                return (
                  <section key={index} className="special-24101990">
                    <div className="special-24101990-head">
                      24101990 alternatif
                    </div>

                    <div className="special-24101990-title-wrap">
                      <div className="special-24101990-gunes">GÜNEŞ</div>
                      <div className="special-24101990-dersane">DERSANESİ</div>
                    </div>

                    <div className="special-24101990-grid">
                      <div className="special-24101990-left">
                        <div style={{ marginBottom: "8px" }}>VE</div>
                        <div style={{ marginBottom: "10px" }}>SÜRÜCÜ KURSU</div>
                        <div>Üniversiteye Hazırlık</div>
                        <div>ise son sınıflara,</div>
                        <div>Memelilere ve</div>
                        <div>lise 2. sınıflara</div>
                        <div>nihai gayemiz düşünce</div>
                        <div>özgür ve yaratı çoCUMar yetiştirmektir.</div>

                        <div style={{ marginTop: "26px", fontWeight: 800 }}>
                          6 AYDA
                        </div>
                        <div style={{ fontWeight: 800 }}>İNGİLİZCE</div>
                        <div>PERA</div>
                        <div style={{ fontWeight: 800 }}>ENGLISH</div>
                        <div style={{ fontWeight: 800 }}>SAATTE</div>

                        <div
                          style={{
                            marginTop: "24px",
                            marginBottom: "18px",
                            textAlign: "center",
                            fontSize: "28px",
                            lineHeight: 1,
                          }}
                        >
                          İ
                        </div>

                        <div>Gerçekten öğrenmek istiyorsanız...</div>

                        <div style={{ marginTop: "18px" }}>YABANCI DİL BİLMEK</div>
                        <div>ÇAĞDAŞ BİR</div>
                        <div>ZORUNLULUKTUR.</div>

                        <div style={{ marginTop: "26px" }}>başlangıç düzeyi.</div>
                        <div>Orta düzey. İleri düzey.</div>
                        <div>Proficiency. Toefl.</div>

                        <div style={{ marginTop: "22px" }}>
                          sizden de beklendiği gibi
                        </div>
                        <div>Yeni yıla İngilizce girin</div>
                      </div>

                      <div className="special-24101990-right">
                        <div className="special-24101990-diltek">
                          <div className="special-24101990-diltek-title">
                            DİLTEK
                          </div>

                          <div className="special-24101990-diltek-body">
                            <div>Audio-Visual Yöntem</div>
                            <div>Sıcak, Uygar Bir Ortam</div>
                            <div>Beceri Odaklı Eğitim</div>
                            <div style={{ fontWeight: 800 }}>
                              !!! 3 KUR AL 2 KUR ÖDE !!!
                            </div>
                          </div>
                        </div>

                        <div className="special-24101990-stop">
                          STOP EVERYTHING START ENGLISH
                        </div>

                        <div className="special-24101990-address">
                          <div>Etiler Mahallesi Serçe Sokak No:87,</div>
                          <div>34337 Beşiktaş/İSTANBUL</div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              }

              if (block.kind === "special-buffalo-bill") {
                return (
                  <section key={index} className="special-buffalo">
                    <span className="special-buffalo-line bb-1">Buffalo Bill</span>
                    <span className="special-buffalo-line bb-2">rahmetli</span>

                    <br />

                    <span className="special-buffalo-line bb-3">sürerdi</span>
                    <span className="special-buffalo-line bb-4">sugibi-kurşuni</span>
                    <span className="special-buffalo-line bb-5">beygirini</span>

                    <br />

                    <span className="special-buffalo-line bb-6">
                      ve pat diye birkiüçdörtbeş güvercini tekte indirirdi
                    </span>

                    <br />

                    <span className="special-buffalo-line bb-7">allahım</span>

                    <br />

                    <span className="special-buffalo-line bb-8">ne yakışıklı adamdı</span>
                    <span className="special-buffalo-line bb-9">bilmek isterim</span>
                    <span className="special-buffalo-line bb-10">Beğendin mi</span>
                    <span className="special-buffalo-line bb-11">mavigözlü oğlanını</span>
                    <span className="special-buffalo-line bb-12">Bay Ölüm</span>
                  </section>
                );
              }

              return (
                <p
                  key={index}
                  style={{
                    margin: 0,
                    whiteSpace: "pre-line",
                    fontStyle: block.italic ? "italic" : "normal",
                    fontWeight: block.bold ? 700 : 400,
                  }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          <aside className="poem-more">
            <div className="poem-more-inner">
              <h2 className="poem-more-title">daha fazlası</h2>

              <div className="poem-more-list">
                {poem.more.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="more-link poem-more-link"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}