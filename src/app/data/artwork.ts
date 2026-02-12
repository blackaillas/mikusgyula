export type categoryType = 'Tajkep' | 'Egyeb' | 'Akt' | 'Eletkep' | 'Portre' | 'Csendelet' | 'Vazlat' | 'Szobor' | 'Fametszet';
export const CategoryTitle = {
    Tajkep: 'Tájkép',
    Egyeb: 'Egyéb',
    Akt: 'Akt',
    Eletkep: 'Életkép',
    Portre: 'Portré',
    Csendelet: 'Csendélet',
    Vazlat: 'Vázlat',
    Szobor: 'Szobor',
    Fametszet: 'Fametszet',
}


export interface GalleryItem {
  id: number;
  title: string;          // cím
  year?: number;          // év
  imgPath: string;
  description?: string;   // rövid leírás
  story?: string;         // hosszú leírás, vagy inkább történet
  category: categoryType;
  materials?: string;     // anyagok
}

export const artworks: GalleryItem[] = [
    {
      id: 1,
      title: 'Zalaszántó 1928',
      imgPath: 'galeria/Tajkepek/1928Zalaszanto.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 2,
      title: 'Delelő 1940',
      imgPath: 'galeria/Eletkepek/1940Delelo.jpg',
      description: '',
      category: 'Eletkep'
    },
    {
      id: 3,
      title: 'Csendélet 1943',
      imgPath: 'galeria/Csendeletek/1943csendelet.jpg',
      description: '',
      category: 'Csendelet'
    },
    {
      id: 4,
      title: 'Fekvő akt 1975',
      imgPath: 'galeria/Aktok/1975fekvoakt.jpg',
      description: '',
      category: 'Akt'
    },
    {
      id: 5,
      title: 'Becei táj 1981',
      imgPath: 'galeria/Tajkepek/1981beceitaj.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 6,
      title: 'Halászok 1964',
      imgPath: 'galeria/Eletkepek/1964halaszok.jpg',
      description: '',
      category: 'Eletkep'
    },
    {
      id: 7,
      title: 'Vadvirágok',
      imgPath: 'galeria/Csendeletek/Vadviragok.jpg',
      description: '',
      category: 'Csendelet'
    },
    {
      id: 8,
      title: 'Apám 1927',
      imgPath: 'galeria/Portrek/1927Apam.jpg',
      description: '',
      category: 'Portre'
    },
    {
      id: 9,
      title: 'Szigliget 1960',
      imgPath: 'galeria/Tajkepek/1960szigligetitel.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 10,
      title: 'Halásztragédia 1978',
      imgPath: 'galeria/Eletkepek/1978halasztragedia.jpg',
      description: '',
      category: 'Eletkep'
    },
    {
      id: 11,
      title: 'Krizantém',
      imgPath: 'galeria/Csendeletek/krizantem.jpg',
      description: '',
      category: 'Csendelet'
    },
    {
      id: 12,
      title: 'Anyám 1938',
      imgPath: 'galeria/Portrek/1938Anyam.jpg',
      description: '',
      category: 'Portre'
    },
    {
      id: 13,
      title: 'Mályvás csendélet',
      imgPath: 'galeria/Csendeletek/Malyvascsendelet.jpg',
      description: '',
      category: 'Csendelet'
    },
    {
      id: 14,
      title: 'Szeged 1924',
      imgPath: 'galeria/Vazlatok/1924Szeged.jpg',
      description: '',
      category: 'Vazlat'
    },
    {
      id: 15,
      title: 'Az öreg halász 1959',
      imgPath: 'galeria/Vazlatok/1959azoreghalasz.jpg',
      description: '',
      category: 'Vazlat'
    },
    {
      id: 16,
      title: 'Gyógyszertár 1927',
      imgPath: 'galeria/Tajkepek/1927Gyogyszertar.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 17,
      title: 'Behavazott házikó 1931',
      imgPath: 'galeria/Tajkepek/1931BehavazottHaziko.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 18,
      title: 'Bece kora tavasszal 1954',
      imgPath: 'galeria/Tajkepek/1954becekoratavasz.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 19,
      title: 'Kikötő 1957',
      imgPath: 'galeria/Tajkepek/1957kikoto.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 20,
      title: 'Szigliget 1958',
      imgPath: 'galeria/Tajkepek/1958szigliget.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 21,
      title: 'Szigligeti tél 1960',
      imgPath: 'galeria/Tajkepek/1960szigligetitel.jpg',
      description: '',
      category: 'Tajkep'
    },
    {
      id: 22,
      title: '1967mandulas.jpg ',
      imgPath: 'galeria/Tajkepek/1967mandulas.jpg ',
      category: 'Tajkep'
    },
    {
      id: 23,
      title: '1978oszitaj.jpg ',
      imgPath: 'galeria/Tajkepek/1978oszitaj.jpg ',
      category: 'Tajkep'
    },
    {
      id: 24,
      title: '1981beceitaj.jpg ',
      imgPath: 'galeria/Tajkepek/1981beceitaj.jpg ',
      category: 'Tajkep'
    },
    {
      id: 25,
      title: 'beceitaj.jpg ',
      imgPath: 'galeria/Tajkepek/beceitaj.jpg ',
      category: 'Tajkep'
    },
    {
      id: 26,
      title: 'beceitajmajusban.jpg ',
      imgPath: 'galeria/Tajkepek/beceitajmajusban.jpg ',
      category: 'Tajkep'
    },
    {
      id: 27,
      title: 'Jegvilag.jpg ',
      imgPath: 'galeria/Tajkepek/Jegvilag.jpg ',
      category: 'Tajkep'
    },
    {
      id: 28,
      title: 'szigligetiobol.jpg ',
      imgPath: 'galeria/Tajkepek/szigligetiobol.jpg ',
      category: 'Tajkep'
    },
    {
      id: 29,
      title: 'telbecen.jpg ',
      imgPath: 'galeria/Tajkepek/telbecen.jpg ',
      category: 'Tajkep'
    },
    {
      id: 30,
      title: 'Téli erdő részlet',
      imgPath: 'galeria/Tajkepek/telierdoreszlet.jpg',
      category: 'Tajkep'
    },
    {
      id: 31,
      title: 'Angéla',
      imgPath: 'galeria/Szobrok/angela.jpg ',
      category: 'Szobor'
    },
    {
      id: 32,
      title: 'Csók',
      imgPath: 'galeria/Szobrok/csok.jpg ',
      category: 'Szobor'
    },
    {
      id: 33,
      title: 'Szent Antal',
      imgPath: 'galeria/Szobrok/szentantal.jpg',
      category: 'Szobor'
    },
    {
      id: 34,
      year: 1929,
      title: 'A főerdész',
      imgPath: 'galeria/Portrek/1929Afoerdesz.jpg ',
      category: 'Portre'
    },
    {
      id: 35,
      year : 1930,
      title: 'Orgonahangoló',
      imgPath: 'galeria/Portrek/1930Orgonahangolo.jpg ',
      category: 'Portre'
    },
    {
      id: 36,
      year: 1932,
      title: 'Frimmel Gyula',
      imgPath: 'galeria/Portrek/1932FrimmelGyula.jpg ',
      category: 'Portre'
    },
    {
      id: 37,
      year: 1944,
      title: 'Mariska néni',
      imgPath: 'galeria/Portrek/1944mariskaneni.jpg ',
      category: 'Portre'
    },
    {
      id: 38,
      year: 1947,
      title: 'Gyula',
      imgPath: 'galeria/Portrek/1947Gyula.jpg ',
      category: 'Portre'
    },
    {
      id: 39,
      year: 1947,
      title: 'Portré',
      imgPath: 'galeria/Portrek/1947portre.jpg ',
      category: 'Portre'
    },
    {
      id: 40,
      year: 1950,
      title: 'Angéla',
      imgPath: 'galeria/Portrek/1950angela.jpg',
      category: 'Portre'
    },
    {
      id: 41,
      year: 1938,
      title: 'Keresztjáró napok',
      imgPath: 'galeria/Eletkepek/1938KeresztjaroNapok.jpg ',
      category: 'Eletkep'
    },
    {
      id: 42,
      year: 1940,
      title: 'Delelő csorda',
      imgPath: 'galeria/Eletkepek/1940DeleloCsorda.jpg ',
      category: 'Eletkep'
    },
    {
      id: 43,
      year: 1948,
      title: 'Mosónők',
      imgPath: 'galeria/Eletkepek/1948Mosonok.jpg ',
      category: 'Eletkep'
    },
    {
      id: 44,
      title: '1950lampionos.jpg ',
      imgPath: 'galeria/Eletkepek/1950lampionos.jpg ',
      category: 'Eletkep'
    },
    {
      id: 45,
      year: 1960,
      title: 'Ünnep',
      imgPath: 'galeria/Eletkepek/1960Unnep_m.jpg ',
      category: 'Eletkep'
    },
    {
      id: 46,
      year: 1966,
      title: 'Kakasülő',
      imgPath: 'galeria/Eletkepek/1966kakasulo.jpg ',
      category: 'Eletkep'
    },
    {
      id: 47,
      year: 1966,
      title: 'Vitorlások',
      imgPath: 'galeria/Eletkepek/1966vitorlasok.jpg ',
      category: 'Eletkep'
    },
    {
      id: 48,
      year: 1964,
      title: 'Balatoni halászok',
      imgPath: 'galeria/Eletkepek/BalatoniHalaszok1964.jpg ',
      category: 'Eletkep'
    },
    {
      id: 49,
      title: 'Halásztragédia',
      imgPath: 'galeria/Eletkepek/halasztragedia.jpg ',
      category: 'Eletkep'
    },
    {
      id: 50,
      title: 'Kakasülő',
      imgPath: 'galeria/Eletkepek/kakasulo.jpg ',
      category: 'Eletkep'
    },
    {
      id: 51,
      title: 'Kodály Keszthelyen',
      imgPath: 'galeria/Eletkepek/KodalyKeszthelyen.jpg ',
      category: 'Eletkep'
    },
    {
      id: 52,
      title: 'Pál utca ',
      imgPath: 'galeria/Eletkepek/palutca.jpg ',
      category: 'Eletkep'
    },
    {
      id: 53,
      title: 'Pecázók',
      imgPath: 'galeria/Eletkepek/pecazok.jpg',
      category: 'Eletkep'
    },
    {
      id: 54,
      title: 'Utolsó kenet',
      description: 'Egy apának három apró gyermekkel, a tanítónak aki a gyermekek között éli mindennapjait mélyen nyomot hagyó tragédia a gyermekhalál.',
      story: `
    <p><strong>Egy apa számára</strong>, akinek három apró gyermeke van, és egy tanító számára, aki nap mint nap a gyermekek között él, a legnagyobb tragédia a gyermekhalál. Zalaszántó fiatal káplánja szinte első szolgálataként szembesült ezzel a fájdalommal: egy kisfiúnak kellett feladnia az utolsó kenetet egy szőlőhegyen álló apró házban.</p>

    <p>A jelenet szívszorító volt. A tüdőgyulladásban haldokló kisfiút körülvette a megtört család, a szerény pincelakás falai között az elkerülhetetlen veszteség csendje derengett. A káplán iskolai beszámolója megrendítő hitelességgel idézte fel a tragédiát, és Mikus Gyula számára sem hagyta nyugodni a történetet. Úgy érezte, ezt meg kell örökítenie.</p>

    <p>A tanító meglátogatta a gyászoló családot, és engedélyt kért, hogy a történtek alapján festményt készítsen. Nagyméretű vásznával és festőszerszámaival felköltözött a szőlőhegyre, hogy a helyszínen dolgozhasson.</p>

    <p>Az alkotás azonban nem ment zökkenőmentesen. Egyik délután, amikor visszatért a műhöz, apró fehér foltok jelentek meg a vásznon. Értetlenül tapogatta – majd rájött, hogy a házigazda időközben kimeszelte a szobát.</p>

    <blockquote>„Mit szólnak az emberek, ha meglátják a képet?”</blockquote>

    <p>A sötét, ablaktalan helyiségben világításra volt szükség. A tanítói fizetés azonban nem engedte meg, hogy elegendő vastag gyertyát vásároljon. Ekkor a templom sekrestyése titokban segített neki: a szigorú esperes figyelmét kijátszva, a már használt gyertyák közül lopva juttatott néhányat a festőnek.</p>

    <p>A haldokló kisfiú modellje Mikus Gyula saját fia lett, aki még idős korában is mesélte a megpróbáltatásokat:</p>

    <blockquote>„Nagyon rossz modell voltam. A társaim kint játszhattak, én meg a hőségben betakarva feküdtem mozdulatlanul. Ráadásul a forró viasz mindig a kezemre csöpögött.”</blockquote>

    <p>A gyászoló apa modellje egy idős zalaszántói parasztember volt, aki beteg lába miatt már nem tudott a földeken dolgozni. Fizetsége pipadohány volt, de az első alkalom után nem akarta levenni a sapkáját. Kiderült, hogy családja nullás géppel teljesen megnyírta, mondván:</p>

    <blockquote>„Csak úgy torzonborz fejjel nem lehet a nagyközönség előtt szerepelni!”</blockquote>

    <p>A festő számára azonban az igazi kihívás az apa érzelmeinek hiteles megörökítése volt. A parasztember, bár idősebb volt, még mindig tartotta magát, és nem sugározta azt a meggyötört fájdalmat, amit Mikus Gyula keresett.</p>

    <blockquote>„Semmi módon nem tudtam rávenni, hogy megtört, meggörnyedt emberként álljon ott. Ezért inkább más részleteken dolgoztam. Idővel azonban, ahogy fájós lába miatt egyre fáradtabb lett, lassan görnyedni kezdett. Egy-egy pakli pipadohánnyal tartottam ott még egy kicsit. Végül, amikor arca már valóban tükrözte a fájdalmát, néhány perc alatt megfestettem.”</blockquote>

    <p>A kész mű először a Képzőművészeti Társulat 80. jubileumi kiállításán került a nagyközönség elé. Az 1950-es évektől Dr. Schuster Lajos galamboki esperes irodáját díszítette.</p>

    <p>A festő fia, aki soha nem látta a képet, 1967-ben baráti társasággal felkerekedett, hogy végre megtekinthesse. Az ajtóban apja percekig döbbenten állt, és csak hosszú hallgatás után tudott megszólalni:</p>

    <blockquote>„Minden apró részletre pontosan emlékeztem, de a kép tükörképe volt szemeim előtt hosszú évekig.”</blockquote>

    <p>Ez a történet nemcsak egy mestermű születésének krónikája, hanem egy festő elhivatottságának és emberi érzékenységének lenyomata is.</p>`,
      imgPath: 'galeria/Eletkepek/utolsokenet.jpg',
      category: 'Eletkep',
    },
    {
      id: 55,
      year: 1936,
      title: 'A halas kisfiú',
      description: 'A hal csapkodásától megrettenő kisfiút ábrázoló „A halas kisfiú” című szobrot Mikus Gyula 1936-ban, zalaszántói tanítóként, hároméves fia, Ferkó ihletésére alkotta meg.',
      story: ` <p>Keszthely főterén, a kútházban kapott helyet <span class="highlight">„A halas kisfiú”</span> című szobor, amely egy hal csapkodásától megrettenő kisfiút ábrázol. Az alkotást Mikus Gyula 1936-ban, még zalaszántói tanítóként, hároméves fia, Ferkó ihletésére mintázta.</p>

    <p>A kis gipszszobor mindig a művész műtermének féltve őrzött dísze volt. Nemcsak bája és szépsége miatt volt számára különleges, hanem azért is, mert fiának, a tragikusan fiatalon, mindössze 17 évesen elhunyt Ferkónak állított emléket.</p>
    
    <p>A 80-as évek elején egy barát közreműködésével a szobor Budapestre került, azzal a céllal, hogy végre bronzba önthető legyen. Mikus Gyula régóta dédelgetett álma azonban akkor még nem valósult meg.</p>
    
    <p>Mikus Gyula halála után családja és tisztelői kezdték kutatni az eltűnt szobrot, hogy végre teljesíthessék a művész vágyát. 2003 novemberében, a Mikus-Galéria fennállásának 5. évfordulóján, sikerült bemutatni az eredeti gipszszobrot és annak bronzba öntött másolatát.</p>

    <p>A szobor bemutatója hatalmas sikert aratott, és a barátok kezdeményezték egy felnagyított változat keszthelyi felállítását. Kenesei Zoltán létrehozta a <span class="highlight">„Keszthely Város Köztéri Alkotásaiért Alapítványt”</span>, amelynek célja az alkotás elhelyezésének támogatása volt. 2005 októberében egy alapítványi koncertet is szerveztek, hogy a bevételből előteremtsék a szükséges forrásokat.</p>

    <p>Sajnálatos módon a tervet végül nem sikerült megvalósítani, elsősorban a műemlékvédelmi hatóságok ellenállása miatt, akik a szobor helyett inkább egy domborművet javasoltak a Kossuth Lajos utca 10. számú ház falára.</p>
    <p>A Fő tér rekonstrukciója azonban új lehetőséget teremtett, így végül a szobor elkészülhetett. A feladatot <span class="highlight">Kalmár Katalin szobrászművész</span> kapta, aki egy 100–105 cm-es alkotást készített. A mű 2011 végén érkezett meg Keszthelyre, és 2012. június 6-án került végleges helyére.</p>

    <p>A kútház és a szobor ünnepélyes avatására 2012. július 14-én, a Fő tér átadásával együtt került sor. Az eseményen <span class="highlight">Cséby Géza</span> röviden ismertette Mikus Gyula életét és <em>„A halas kisfiú”</em> történetét. Az alkotás azóta Keszthely egyik ékköveként számos turistát és látogatót vonz, akik rendszeresen megcsodálják és fotózzák.</p>
`,
      imgPath: 'galeria/Szobrok/ahalaskisfiu.jpg',
      category: 'Szobor',
      materials: 'gipsz'
    }
  ];
