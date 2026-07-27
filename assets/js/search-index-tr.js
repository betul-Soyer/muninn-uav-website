/* Muninn UAV sitesinin Türkçe arama dizini (tr/ sayfalarından yüklenir).
   Girdi: page (görünen ad), url (tr/ sayfalarına göre göreli), title, text. */
window.SEARCH_INDEX = [
  /* ---- Ana Sayfa ---- */
  { page: "Ana Sayfa", url: "index.html#mission", title: "Biz kimiz — yaklaşımımız",
    text: "Muninn UAV Yazgit Topluluğu öğrenci takımı Türkiye görev otonom tailsitter GöğeBakan gogebakan mühendislik sadelik güvenilirlik SUAS 2026" },
  { page: "Ana Sayfa", url: "index.html#competition", title: "SUAS 2026 görevi, madde madde",
    text: "SUAS yarışma RoboNation görevler waypoint seyir 3.2 km tarama tespit insan çadır SLAM haritalama ortomozaik hedef hizalama görsel servo Eylül 14-17 el kitabı otonom" },
  { page: "Ana Sayfa", url: "index.html#latest", title: "Günlükten son haberler",
    text: "haberler güncellemeler blog son kayıtlar kampanya tam görev simülasyon 45 dakika" },
  { page: "Ana Sayfa", url: "index.html#sponsors-strip", title: "Sponsor şeridi",
    text: "sponsorlar logolar partnerler destek sponsor ol TÜBİTAK" },

  /* ---- Takım ---- */
  { page: "Takım", url: "team.html#about", title: "Yazgit Topluluğu'nun havacılık takımı",
    text: "hakkında hikâye Yazgit Topluluğu kuzgun Muninn hafıza kimiz tarih Konya" },
  { page: "Takım", url: "team.html#members", title: "Üyeler — SUAS 2026 kadrosu",
    text: "üyeler kadro kaptan alt takımlar organizasyon yapı örgütlenme Mustafa Akgün Mert Hüseyin Çağlayan Enes Kara Beyza Akbaş Yusuf Karagülle Betül Soyer Sena Altınordu Battal Berkay Aktaş aviyonik yazılım AI mekanik" },
  { page: "Takım", url: "team.html#advisor", title: "Danışman hoca",
    text: "akademik danışman hoca mentor rehberlik Prof Dr Murat Ceylan Konya Teknik Üniversitesi" },
  { page: "Takım", url: "team.html#contact", title: "İletişim",
    text: "iletişim e-posta muninnuav@gmail.com Konya Teknik Üniversitesi Türkiye Instagram muninnteam LinkedIn adres ulaşım" },
  { page: "Takım", url: "team.html#join", title: "Takıma katıl",
    text: "katıl üye alımı başvuru dönem öğrenci" },

  /* ---- Araç ---- */
  { page: "Araç", url: "vehicle.html#overview", title: "GöğeBakan — sistem genel bakışı",
    text: "GöğeBakan gogebakan HSVTOL quadrotor tailsitter VTOL uçan kanat karbon fiber patent patentli Tesla 1928 birleşik itki mimari dört motor 129 dakika uçuş 247 km menzil %30 verimli sistem mühendisliği modüler" },
  { page: "Araç", url: "vehicle.html#specs", title: "Görev tasarım noktaları ve mimari",
    text: "özellikler spesifikasyon sayılar uçuş süresi 129 dakika menzil 247 km verimlilik %30 dört motor patentli seyir 3.2 km tarama irtifası 45 m görev penceresi 45 dakika tespit insan çadır PX4 ROS 2 QGroundControl QGC yer istasyonu veri bağlantıları tablo" },
  { page: "Araç", url: "vehicle.html#airframe", title: "Gövde ve uçuş rejimleri",
    text: "gövde uçan kanat karbon fiber tailsitter quadrotor elevon kanat ucu fin iniş takımı havada asılı geçiş öne yatış Pugaçev Kobra manevrası seyir uçuş prensibi yapı konfigürasyon" },
  { page: "Araç", url: "vehicle.html#profile", title: "Dinamik uçuş profili",
    text: "uçuş profili görev fazları sabit kanat seyir multikopter mod çim biçme ızgara tarama dönüş dikey iniş enerji verimliliği" },
  { page: "Araç", url: "vehicle.html#avionics", title: "Aviyonik ve veri bağlantıları",
    text: "aviyonik blok şema PX4 uçuş kontrolcüsü GNSS pusula telsiz telemetri 915 MHz 5 GHz IP RC alıcı yardımcı bilgisayar tesisat" },
  { page: "Araç", url: "vehicle.html#autonomy", title: "Otonomi: tespit, haritalama, hizalama",
    text: "otonomi yazılım ROS 2 YOLOv8s özel veri seti COCO 45 m tespit SLAM ortomozaik haritalama görsel servo hedef hizalama QGroundControl QGC yer kontrol istasyonu bilgisayarlı görü yapay zekâ" },
  { page: "Araç", url: "vehicle.html#safety", title: "Emniyet sistemleri ve failsafe'ler",
    text: "emniyet failsafe geofence eve dönüş RTL bağlantı kaybı batarya kill checklist ekip gözcü" },
  { page: "Araç", url: "vehicle.html#design-decisions", title: "Tasarım kararları / trade-off'lar",
    text: "tasarım kararları trade-off gerekçe tailsitter quadplane multikopter birleşik itki özel veri seti YOLOv8s PX4 ROS 2 ayrım dijital ikiz QGroundControl QGC hazır yazılım neden" },

  /* ---- Gelişim Günlüğü ---- */
  { page: "Gelişim Günlüğü", url: "journey.html#roadmap", title: "SUAS 2026'ya doğrulama merdiveni",
    text: "yol haritası kampanya planı kilometre taşları doğrulama sayısal analiz simülasyon donanım entegrasyonu yer testi kademeli uçuş testi Eylül 2026 zaman çizelgesi" },
  { page: "Gelişim Günlüğü", url: "journey.html#log", title: "Gelişim günlüğü (blog)",
    text: "gelişim günlüğü blog tarihçe kayıt tarihsel ilerleme" },
  { page: "Gelişim Günlüğü", url: "journey.html#log-website", title: "Kampanya kamuoyuna açıldı (Tem 2026)",
    text: "website yayın kampanya mühendislik hikâyesi teslimat" },
  { page: "Gelişim Günlüğü", url: "journey.html#log-mission-sim", title: "Tam görev 45 dakikada (İlkbahar 2026)",
    text: "tam görev simülasyon 45 dakika uçtan uca dijital ikiz el kitabı arazi arama yörüngeleri sistem seviyesi" },
  { page: "Gelişim Günlüğü", url: "journey.html#log-dataset", title: "Özel veri seti 45 m tespitini açtı",
    text: "özel veri seti YOLOv8s COCO hazır model başarısız 45 m irtifa insan çadır bileşen testi algı" },
  { page: "Gelişim Günlüğü", url: "journey.html#log-twin", title: "GöğeBakan'ın dijital ikizi hayat buldu",
    text: "Gazebo dijital ikiz gogebakan model Baylands dünya insan çadır modelleri simülasyon alt sistem" },
  { page: "Gelişim Günlüğü", url: "journey.html#testing", title: "Test programı — bileşenden sisteme",
    text: "test programı aşamalar bileşen alt sistem sistem tezgâh güç dijital ikiz Gazebo görsel servo tam görev saat donanım uçuş testi geçme kriteri" },
  { page: "Gelişim Günlüğü", url: "journey.html#procedures", title: "Prosedürler ve checklistler",
    text: "prosedürler uçuş öncesi checklist test kartı iptal kriteri batarya kuralları şarj emniyet git gitme" },
  { page: "Gelişim Günlüğü", url: "journey.html#videos", title: "Test görüntüleri",
    text: "videolar görüntü uçuş testi gerçek gövde 11 Temmuz 2026 izle" },

  /* ---- Medya ---- */
  { page: "Medya", url: "media.html#photos", title: "Fotoğraf galerisi",
    text: "fotoğraflar resimler galeri görseller render gövde karbon fiber apron tepeden quadrotor çim saha sergi uçuş prensibi Gazebo Baylands dijital ikiz" },
  { page: "Medya", url: "media.html#usage", title: "Medyamızı kullanmak",
    text: "medya kullanım basın kaynak gösterme izin tam çözünürlük talep" },

  /* ---- Sponsorlar ---- */
  { page: "Sponsorlar", url: "sponsors.html#current", title: "Sponsorlarımız — SUAS 2026",
    text: "sponsorlar logolar TÜBİTAK kurucu partnerler destek" },
  { page: "Sponsorlar", url: "sponsors.html#inkind", title: "Ayni destek",
    text: "ayni destek malzeme karbon kompozit CNC imalat 3B baskı elektronik batarya uçuş sahası seyahat lojistik uzmanlık bağış" },
  { page: "Sponsorlar", url: "sponsors.html#contact-cta", title: "Sponsor olun",
    text: "sponsor ol iletişim e-posta sponsorluk dosyası bütçe görüşme" }
];
