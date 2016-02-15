var stops =[ 'A NARAYANAPURA', 'ABBIGERE', 'ADDA VISHWANATHAPURA', 'ADIGONDANAHALLI', 'ADUGODI', 'ADUGODI QTRS',
'ADUR', 'AECS LAYOUT', 'AGADUR', 'AGARA (KRM)', 'AGRAHARA CR.', 'AGRAHARA LAYOUT', 'AJANTA TALKIES',
'AKKIPIKKI COLONY', 'ALAPPANAHALLI', 'ALISDA FACTORY', 'ALLALASANDRA RLY. GATE', 'ALLALSANDRA', 'ALURU',
'AMARAJYOTHI NGR', 'AMBEDKAR INST. TECH.', 'AMBEDKAR MEDICAL COL.', 'AMRUTH NAGAR', 'ANAND NAGAR', 'ANANDARAO CIRCLE',
'ANANTHPURA', 'ANCHEPALYA', 'ANDRAHALLI', 'ANJANA NAGAR', 'ANNAPURNESWARI NAGAR', 'ANNESWARA', 'ANUGONDANAHALLI',
'ANUGONDANAHALLI CR', 'ARALUR', 'ARASHINAKUNTE', 'AREBIC COLLEGE', 'AREBINNAMANGALA', 'AREHALLI', 'ARKERE GATE',
'ASHOKA PILLAR', 'ASHRAMA (ADGH)', 'ATTIBELE', 'ATTIBELE BORDER', 'ATTIGUPPE', 'ATTUR', 'AUSTIN CR', 'AUSTIN TOWN',
'AVALAHALLI (RAJANUKUNTE)', 'AVALAHALLI BDA LAYOUT', 'AVALAHALLI BDA PARK', 'AVERAHALLI', 'B CHENNASANDRA',
'BABASAHEB PALYA', 'BABU JAGJIVANRAM DENTAL COLLEGE', 'BAGALKUNTE', 'BAGALKUNTE CR', 'BAGALUR', 'BAGUR', 'BALAGERE',
'BALDWIN GIRLS SCHOOL', 'BALIGA CIRCLE', 'BANASHANKARI', 'BANASWADI', 'BANDAPURA', 'BANDE BOMMASANDRA',
'BANDE NALSANDRA', 'BANDI REDDY CIRCLE', 'BANGALORE CHILDREN GHOSP.', 'BANGALORE CLUB', 'BANGALORE DAIRY',
'BANGALORE DAIRY COLONY', 'BANJARA PALYA', 'BANNERGHATTA', 'BANNERGHATTA NATIONAL PARK', 'BANNIKUPPE', 'BAPUJI LAYOUT',
'BAPUJI NAGAR', 'BASAVANAGARA', 'BASAVANAHALLI', 'BASAVANAPURA', 'BASAVESWARA NAGAR', 'BASAVESWARA NAGAR CIRCLE',
'BASAVESWARANAGAR 3 STG', 'BEGIHALLI', 'BEGUR', 'BEL CIRCLE', 'BELLAHALLI', 'BELLANDUR', 'BELLANDUR GATE', 'BELTHUR',
'BEML 5TH BLCK.', 'BEML LAYOUT COMPLEX', 'BENNIGANAHALLI', 'BETTA HALSUR', 'BETTA HALSUR CR', 'BETTADASANAPURA',
'BETTANAGERE', 'BETTANAHALLI', 'BHADRAPPA LAY OUT', 'BHAKTARAHALLI', 'BHARATH HOUSING CO-OP LO.', 'BHASHYAM CIRCLE',
'BHASHYAM CIRCLE SADASHIVA NGR', 'BHATTARA MARENAHALLI', 'BHIMAJOTHI NAGAR', 'BHODANA HOSAHALLI', 'BHOGANAHALLI',
'BHUDUMANAHALLI', 'BHUPASANDRA', 'BHUVANAHALLI', 'BIDADI', 'BIDARAGUPPE', 'BIKKANAHOSALLI', 'BILE SHIVALE',
'BILEKALLAHALLI', 'BILEKEMPANAHALLI CR', 'BILIKERE', 'BILWARADA HALLI', 'BINNAMANGALA', 'BINNY LAYOUT', 'BIRESWARANAGAR',
'BISANAHALLI', 'BOMBAY DYEING (YPR)', 'BOMMANAHALLI', 'BOMMASANDRA', 'BOMMASANDRA CR', 'BOREHALLI', 'BSK 1ST STG.',
'BSK 3RD STG.', 'BSK 3RD STG. 3RD PHASE', 'BSK III STAGE 2ND PHASE', 'BTM L OUT', 'BTM L OUT SOUTH',
'BTM LAYOUT EWS COLONY', 'BUDIGERE', 'BUDIGERE CR.', 'BYAGADENAHALLI', 'BYANDANAHALLI', 'BYAPPANAHALLI',
'BYATARAYANADODDI', 'BYATARAYANADODDI CR', 'BYATARAYANAPURA (BLRY RD)', 'BYATARAYANAPURA (MYS)', 'BYATHA', 'BYDARAHALLI',
'BYLAHALLI', 'BYLAKONENAHALLI', 'BYNAHALLI', 'BYRAPURA', 'BYRASANDRA', 'BYROHALLI', 'C V RAMAN NAGAR',
'CANARA BANK COLONY', 'CANT. RLY. STN.', 'CARMEL CONVENT SCHOOL', 'CENTRAL TALKIES', 'CHAMRAJPET', 'CHANDAPURA',
'CHANDAPURA CIRCLE', 'CHANDAPURA CR', 'CHANDRA LAYOUT', 'CHANDRA LAYOUT 1ST. STG', 'CHELIKERE', 'CHENNABYREGOWDA CIRCLE',
'CHENNAMANA KERE ACHKATT', 'CHENNANAYAKANAHALLI', 'CHENNASANDRA', 'CHENNASANDRA CR', 'CHENNEGOWDANADODDI',
'CHENNENAHALLI', 'CHETTAKERE PALYA', 'CHIKKA BANAHALLI', 'CHIKKA BANAVAR', 'CHIKKA BEGUR', 'CHIKKA BETTAHALLI CR',
'CHIKKA GUBBI CR', 'CHIKKA JALA', 'CHIKKA KAMMANAHALLI', 'CHIKKA NAGAMANGALA', 'CHIKKA TIMMASANDRA', 'CHIKKABETTAHALLI',
'CHIKKALASANDRA', 'CHIKKALASANDRA SARIGE NAGAR', 'CHIKKALASANDRA VILLAGE', 'CHIKKANAHALLI', 'CHIKKANAHALLI CR',
'CHIKKEGOWDANAPALYA', 'CHIMMANDA HALLI', 'CHINNAPPA GARDEN', 'CHINNAYYANAPALYA', 'CHINTALA MADIWALA', 'CHOKKANAHALLI',
'CHOLANAYAKANAHALLI', 'CHOWDESWARI BUS STAND', 'CHUDASANDRA', 'CHUNCHAGHATTA', 'CHUNCHANAKUPPE', 'CIL',
'CLARANCE SCHOOL', 'COFFEE BOARD LO', 'COLES PARK CR.', 'COMMANDO HOSPITAL', 'CORPORATION OFFICE', 'COTTONPET HOSPITAL',
'COX GTOWN', 'COX TOW CIRCLE/SBM', 'CPRI GATE', 'CSI HOSPITAL', 'CUNNINGHAM RD PETROL BUNK', 'DABBAGULI', 'DANDUPALYA',
'DASARAHALLI', 'DATTATREYA TEMPLE', 'DAYANANDASAGAR COL. CR', 'DEEPANJALI NGR', 'DEVADIGA SOUDHA', 'DEVAGERE',
'DEVANA MACHENAHALLI', 'DEVANAGUNDI', 'DEVANAGUNDI CR', 'DEVANAHALLI', 'DEVANAHALLI CR', 'DEVARA CHIKKANAHALLI',
'DEVARABISANAHALLI', 'DEVASANDRA', 'DINNUR', 'DODDA BANAHALLI', 'DODDA GUBBI', 'DODDA GUBBI CR', 'DODDA JALA',
'DODDA KANNELI', 'DODDA MARANAHALLI', 'DODDA NAGAMANGALA', 'DODDA NEKKUNDI', 'DODDA TUMKUR', 'DODDABALLAPUR',
'DODDABASTI', 'DODDABELE', 'DODDANNA NAGAR', 'DODDASANNE', 'DODDATOGUR', 'DODDERI GRAMA', 'DOMLUR', 'DOMLUR BUS STAND',
'DOMMASANDRA', 'DOOPANAHALLI', 'DRDO TOWN SHIP', 'DWARAKA NAGAR', 'DYAVASANDRA', 'EJIPURA', 'ELCTRONIC CITY',
'ELECTRIC B STN.', 'ELGIN FLOOR MILL', 'ESI HOSPITAL', 'ESI INDIRANAGAR', 'ESWAR LAYOUT', 'FATHIMA CHURCH',
'FRASER TOWN', 'G HOSAHALLI', 'GABBADI', 'GADENAHALLI', 'GADIPALYA', 'GANAKAL', 'GANAPATHIHALLI', 'GANAPATHIPURA',
'GANDHI SCHOOL', 'GANDHIBAZAR CIRCLE', 'GANESH BHAVAN STOP', 'GANESH TEMPLE-MLO', 'GANGANAGAR CR', 'GANGANAGARA',
'GANGASANDRA', 'GANGAWARA', 'GANGENAHALLI', 'GANGONDANAHALLI', 'GANTAGANAHALLI', 'GARUDACHAR PALYA',
'GAVIGANGADHARESWARA TEMPLE', 'GEDDALAHALLI', 'GEDDALAHALLI CR', 'GEJJAGADAHALLI', 'GEJJALAHALLI', 'GELEYARA BALAGA',
'GHATTAHALLI', 'GIDDENAHALLI', 'GIRIGOWDANADODDI', 'GIRINAGAR CIRCLE', 'GIRINAGAR EXTN.', 'GKWLAYOUT', 'GOKULA',
'GOLLARAHALLI', 'GOLLARAHATTI', 'GONIGHATTAPURA', 'GONIPURA', 'GOODSHED GATE', 'GOPALAPURA', 'GOPASANDRA CR',
'GORGUNTEPALYA', 'GOTTIGEHALLI', 'GOTTIGERE', 'GOVINDAPURA', 'GOVT SOAP FACTORY', 'GOWDAHALLI', 'GRAPHITE INDIA',
'GUBBALALA', 'GUDDAHALLI', 'GUDDAHATTI', 'GUDDATTI CR', 'GUDDEHATTI CR.', 'GUESTLINE HOTEL', 'GULAGANJANAHALLI',
'GULLAHATTIKAVAL', 'GUNDUR', 'GUNJUR', 'GUNJURPALYA', 'GURAPPANAPALYA', 'H GHATTA TB CR', 'H GHATTA VILLAGE',
'H GOLLAHALLI', 'HADENAHALLI', 'HAL 3RD STG', 'HAL KALYANA MANTAPA', 'HAL MAIN GATE', 'HAL MAINGATE', 'HAMPAPURA',
'HANAGALIPURA', 'HANCHARAHALLI', 'HANUMANTHNAGAR', 'HARADASANAHALLI', 'HARAGADDE', 'HARALUR', 'HARISCHANDRA GHAT',
'HAROHALLI', 'HAROHALLI CR', 'HBR LO 5TH BLK', 'HEBBAL KEMPAPURA', 'HEBBALA', 'HEBGODI', 'HEELALIGE', 'HEGGANAHALLI',
'HEGGONDANAHALLI', 'HEJJALA', 'HENNAGARA', 'HENNUR CR', 'HEROHALLI', 'HESARAGHATTA DAIRY FARM', 'HINNAKKI',
'HIRANDAHALLI', 'HMT HOUSE', 'HMT LAYOUT', 'HMT WATCH FACTORY', 'HONGASANDRA', 'HONNALAGANADODDI', 'HONNASANDRA',
'HOODI VILLAGE', 'HOPE FARM', 'HORAMAU AGRAHARA', 'HORAMAVU', 'HOSA ROAD', 'HOSAHALLI', 'HOSAKOTE', 'HOSKEREHALLI',
'HOSKEREHALLI CR', 'HOSKOTE SCHOOL', 'HOSURU', 'HULIMANGALA', 'HULIMANGALA CR', 'HULIMAVU', 'HULIMAVU GATE',
'HULLAHALLI', 'HULLALU', 'HULLEGOWDANAHALLI', 'HULUVENAHALLI', 'HUNASAMARANAHALII', 'HUNNAGERE', 'HUSKUR (HSR)',
'HUSKUR VILLAGE', 'HUTTANAHALLI', 'IAF (BELLARY RD)', 'IAF GATE', 'ICHINGUR', 'ILYAS NAGAR', 'IMMADIHALLI',
'INCOME TAX LYOUT', 'INDALAWADI', 'INDIAN EXPRESS CIRCLE', 'INDIRANAGAR POL. STN', 'INDO AMERICAN HYBRID FARM',
'INDO DANISH FARM', 'INST. OF ENGINEERS', 'ISOLATION HOSPITAL', 'ISRO LAYOUT', 'ITC FACTORY', 'ITI COLONY', 'ITTIMADU',
'J C NAGAR', 'JADE GARDEN', 'JADIGENAHALLI', 'JAGJIVANRAM NAGAR', 'JAI BHIMANAGAR', 'JAI BHUVANESWARI NAGAR',
'JAIMUNIRAO CIRCLE', 'JAKKUR', 'JAKKUR LAYOUT', 'JALAHALLI CR', 'JALAHALLI EAST', 'JALAHALLI VIL', 'JALIGE',
'JANAPRIYA TOWN SHIP', 'JANTAGONDANAHALLI', 'JARAGANAHALLI', 'JARAGANAHALLI HOUSE BLDG CO-OP SO', 'JAYANAGAR 9TH BLK',
'JAYANAGAR BUS STAND', 'JEEVANAHALLI', 'JEEVANBIMA NAGAR', 'JIGALA', 'JIGANI', 'JINDAL HOSPITAL', 'JINGO TIMMANAHALLI',
'JNANABHARATHI ADM BLK', 'JNANABHARATHI CAMPUS', 'JNR 4TH T BLK', 'JNR 5TH BLK', 'JNR EAST END', 'JOHN FOWLER',
'JOTHIPURA', 'JP NAGAR 15 CR', 'JP NAGAR 1ST PHASE', 'JP NAGAR 24TH MN/9TH CR', 'JP NGR. 6TH PHASE', 'JPN 6 PH-SARAKKI',
'JUDICIAL LAYOUT', 'JUMBO SAVARI DINNE', 'Jn. 12TH MN & 7TH CR BTML', 'Jn. 24TH CR 1ST MN',
'Jn. 9TH MN & 3RD CR (MS NGR)', 'Jn. BTM LAYOUT', 'Jn. BTM LO 12TH MN 7TH CR', 'Jn. DASARAHALLI', 'Jn. DEVANAHALLI RD',
'Jn. HOSUR RD', 'Jn. KG NAGAR RD 6TH MN', 'Jn. MAGADI RD/KACHOHALLI RD', 'Jn. OLD BRIDGE', 'Jn. PEENYA RD',
'Jn. RAMOHALLI', 'Jn. SUNKADAKATTE', 'Jn. VARTUR RD', 'K KUNTE NEW BANK COLONY', 'K NARAYANAPURA', 'K R CIRCLE',
'K R MARKET', 'K R PURAM OLD POL STN', 'K R PURAM RLY STN', 'KACHAMARANAHALLI', 'KACHARAKANAHALLI', 'KADA JAKKASANDRA',
'KADABAGERE', 'KADABAGERE CR.', 'KADASONNAPPANAHALLI', 'KADAYERRAPPANAHALLI', 'KADE AGRAHARA', 'KADGODI',
'KADIRENAHALLI', 'KADIRENAHALLI PARK', 'KADUGODI RLY STN', 'KADUGONDANAHALLI', 'KADUGONDANAHALLI POL STN',
'KAGGADASANAPURA', 'KAGGALIHALLI', 'KAGGALIPURA', 'KAJI SONNENAHALLI', 'KAKOLU', 'KALATHAMMANAHALLI', 'KALKERE',
'KALKERE GATE', 'KALKUNTE AGRAHARA', 'KALLAHALLI', 'KALYAN NAGAR', 'KALYAN NAGAR 3RD CR', 'KALYAN NAGAR BUS STAND',
'KALYANAGAR NEW BUS STND', 'KAMAKSHIPALYA', 'KAMALA NAGAR', 'KAMALA NAGAR RD', 'KAMALA NEHRU EXTN',
'KAMALANAGAR BEML LO', 'KAMALANAGAR WATER TANK', 'KAMBIPURA', 'KAMBLIPURA', 'KAMMANAHALLI', 'KAMMANAHALLI EXTN',
'KAMMANAHALLI GATE', 'KAMMEGONDANAHALLI', 'KANIMINIKI', 'KANNAHALLI', 'KANNAMANGALA', 'KANNAMANGALAPALYA GATE',
'KANNUR', 'KANNURHALLI', 'KANTEERAVA STUDIO', 'KARIKALPALYA', 'KARIMSAB LAYOUT', 'KARNATAKA RE-ROLLING INST',
'KARNATAKA SOLVENTS', 'KARUBELE', 'KASTURI NAGAR', 'KASUVANAHALLI', 'KATHRIGUPPE', 'KATHRIGUPPE CR.', 'KAVALBYRASANDRA',
'KAVERI HOTEL', 'KAVERI NAGAR', 'KBS', 'KEMBATTAHALLI', 'KEMPAPURA', 'KEMPEGOWDA BUS STAND', 'KEMPEGOWDA NAGAR',
'KENCHANAPURA', 'KENCHENAHALLI', 'KENGERI', 'KENGERI SAT TOWN', 'KENGERI SAT TOWN HOU BRD', 'KG LAKKONDANAHALLI',
'KG NAGAR SWIMMING POOL', 'KHB COLONY CR RD', 'KITTAGANAHALLI', 'KITTANAHALLI', 'KITTIGANUR', 'KODI CHIKKANAHALLI',
'KODIGEHALLI CR.', 'KODIHALLI', 'KODIYALA KARENAHALLI', 'KOGILU', 'KOLTUR', 'KOMMAGHATTA', 'KOMMAGHATTA CR',
'KOMMASANDRA', 'KONANAKUNTE CR', 'KONANAKUNTE VILLAGE', 'KONAPPANA AGRAHARA', 'KONASANDRA', 'KONASANDRA CR',
'KOOGURU', 'KOOTHAGANAHALLI', 'KOPPA', 'KOPPA GATE', 'KORAMANGALA', 'KORAMANGALA 80 FT RD', 'KORAMANGALA 8TH BLK',
'KORAMANGALA COMPLEX', 'KOTHNUR', 'KOTTIGEPALYA CR', 'KOTTUR', 'KRISHNAIAHANAPALYA', 'KRISHNANANDANAGAR',
'KRM HOUSING COMPLEX', 'KRM KALYANA MANTAPA', 'KRM KENDRIYA SADAN', 'KRM WATER TANK', 'KSFC LAYOUT', 'KUDLU',
'KUDLU GATE', 'KUDUREGERE', 'KULUMEPALYA', 'KULUVARAYANAHALLI', 'KUMARASWAMY LAYOUT', 'KUMBALAGODU', 'KUMBALAHALLI',
'KUMBARAHALLI', 'KUMBARANAHALLI', 'KUNDALAHALLI', 'KUNDALAHALLI GATE', 'KURUBARA KANNENAHALLI', 'KURUBARAHALLI',
'KUSTI BASAPPA CIR', 'KUVEMPU NGR 2ND STG', 'KYALASANAHALLI', 'LAKKASANDRA', 'LAKSHMIDEVINAGAR', 'LAKSHMINARAYANAPURA',
'LAKSHMIPURA', 'LAKSHMIPURA CROSS', 'LAKSHMISAGARA CR', 'LAL BAGH SOCIETY', 'LALBAHDURSHASTRYNAGAR',
'LALBHAG MAIN GATE', 'LAVANYA TALKIES', 'LEGGERE', 'LIC COLONY', 'LINGANAHALLI', 'LINMGARAJAPURA', 'M DASARAHALLI',
'M G ROAD', 'M HOSAHALLI', 'M L O CR', 'M S RAMAIAH COL', 'MACHOHALLI', 'MADAPATTANA', 'MADDAPPANAHALLI', 'MADIWALA',
'MAGADI', 'MAGADI RD 1ST CR.', 'MAGADI RD CR', 'MAGADI RD KHB COLONY', 'MAGADI RD LEPROSARIUM', 'MAGADI RD POL QTRS',
'MAGADI TOLGATE', 'MAHADEVAPURA', 'MAHADEVAPURA CR', 'MAHALAXMI L O', 'MAHANTALINGAPURA', 'MAHARANIS COL',
'MAHATMA GANDHI STATUE', 'MAHILA SAMAJ/OKKALIGARA SANGHA', 'MAHIMANAPALYA', 'MAILANAHALLI', 'MAKALI', 'MAKANAHALLI',
'MALAGALU', 'MALLASANDRA', 'MALLATHAHALLI', 'MALLATHALLI GATE', 'MALLESHPALYA', 'MALLESWARAM 11TH CR.',
'MALLESWARAM 13 CR', 'MALLESWARAM 18 CR', 'MALLESWARAM 8TH CR.', 'MALLESWARAM 8TH MN', 'MALLESWARAM BUS STAND',
'MALLESWARAM CIRCLE', 'MALLESWARAM RLY STN', 'MANCHAPPANAHALLI', 'MANCHENABELE', 'MANCHENAYAKANAHALLI', 'MANDUR',
'MANGAMMANAPALYA', 'MANIPAL HOSPITAL', 'MARAGONDANAHALLI', 'MARAPPA GARDEN', 'MARASANDRA CIRCLE', 'MARASUR',
'MARASUR CR', 'MARATHALLI', 'MARENAHALLI', 'MARIYAPPANAPALYA', 'MARUTI SEVANAGAR', 'MASTENAHALLI', 'MATTAHALLI',
'MATTIKERE CIRCLE', 'MAVALLIPURA', 'MAYASANDRA', 'MAYO HALL', 'MED AGRAHARA', 'MEDAHALLI', 'MEDIHALLI COLONY',
'MEENAKSHI TEMPLE', 'MEERA MONTESSARY SCH', 'MEKHRI CIRCLE', 'MELE NALSANDRA', 'MESTRI PALYA', 'METAL LAMP CAPS',
'MICO LYT.', 'MICO SHRAJIVI COLONY', 'MILITARY HOSPITAL', 'MISAGANAHALLI', 'MITTAGANAHALLI CR', 'MM INDUSTRIES',
'MODI HOSPITAL', 'MOHANKUMAR NAGAR', 'MOHD. SAB PALYA', 'MONO TYPE', 'MORRISON FACTORY', 'MOTHER DAIRY CIRCLE',
'MUDALAPALYA', 'MUDDAYYANAPALYA', 'MUGALUR', 'MUKKODLU', 'MULLUR', 'MUNEKOLLOL', 'MUNESWARA BLK', 'MUNINAGARA',
'MUSLIM COLONY', 'MUTHANALLUR', 'MUTHUGADAHALLI', 'MUTKUR', 'MUTSANDRA', 'MYLAPPANAHALLI', 'MYLASANDRA',
'MYSORE BANK CIRCLE/KAVERI BHAVAN', 'MYSORE BANK COLONY', 'Md. BLOCK', 'NADAVATTI', 'NAGA TALKIES', 'NAGAMANGALA',
'NAGANAYAKANAHALLI', 'NAGARABHAVI 1ST STG', 'NAGARABHAVI 1ST STG 2B', 'NAGARABHAVI 2 STG 10TH BLK',
'NAGARABHAVI 9TH BLK', 'NAGARABHAVI CIRCLE', 'NAGARABHAVI VILLAGE', 'NAGARUR', 'NAGARUR CR', 'NAGASANDRA',
'NAGASHETTYHALLI', 'NAGAVARA', 'NAGAVARAPALYA', 'NAGENAHALLI', 'NAGENDRA BLK', 'NAGONDANAHALLI',
'NAKKUNDI DOMMASANDRA', 'NALLURHALLI', 'NANDIDURGA RD', 'NANDINI LAYOUT', 'NANJAPPA CIRCLE', 'NARASAPURA',
'NARASIMHARAJA COLONY', 'NARASIPURA', 'NARAYANAGHATTA', 'NAUKAL PALYA', 'NAVARATNA AGRAHARA', 'NAYANDHALLI',
'NEELADRI AMUSEMENT PARK', 'NEELASANDRA', 'NEELASANDRA ROSE GDRN', 'NELAGADARANAHALLI', 'NELAGULI', 'NELAGULI CR',
'NELAMANGALA', 'NELAMANGALA TB', 'NERAGANAHALLI', 'NERIGE', 'NETTIGERE', 'NEW BYAPPANAHALLI', 'NEW GUDDADAHALLI',
'NGEF GATE', 'NORTH ROAD', 'NOSENURU', 'NRUPATUNGA NAGAR', 'NTTF-PEENYA', 'NYANAPPANAHALLI', 'OLD BYAPPANAHALLI',
'PADMANABHA NAGAR', 'PALANAHALLI', 'PALLAVI TALKIES', 'PANATHUR', 'PANATTUR DINNE', 'PANTRAPALYA',
'PAPABHOVIPALYA CR', 'PAPAREDDY PALYA', 'PARANGI PALYA', 'PARAPPANA AGRAHARA', 'PARASANAPALYA', 'PATELAPPA LAYOUT',
'PATTANDUR AGRAHARA', 'PEDDANAPALYA', 'PEENYA 2ND STG', 'PERIYAR NAGAR', 'PILLAGUMPA INDL. EST', 'PILLAHALLI',
'PILLANNA GARDEN', 'PLEGAMMA TEMPLE', 'POONIMA TALKIES', 'PRASANNA & PRAMOD TALKIES', 'PRASHANTH NAGAR',
'PRESENTATION CONVENT', 'PUJANA AGRAHARA', 'PUJANAHALLI GATE', 'PULIKESHI NAGAR', 'PUNAGAMARANAHALLI',
'PUTTANNACHETTI CIRCLE', 'PUTTAYYANAPALYA', 'PUTTENHALLI', 'R K HEGDE NAGAR', 'R T NAGAR', 'RACHENAHALLI',
'RAGHAVENDRA COLONY', 'RAGIHALLI', 'RAGUVANAHALLI CIRCLE', 'RAHMATH NAGAR', 'RAILWAY GOLLAHALLI', 'RAJAGOPALNAGAR',
'RAJAGOPALNAGAR POL.STN', 'RAJAMAHAL GUTTAHALLI', 'RAJAMAHAL VILAS 2ND STG', 'RAJANI FARM', 'RAJANUKUNTE', 'RAJAPURA',
'RAJARAJESWARI TEMPLE', 'RAJIVGANDHI NAGAR', 'RAMACHANDRAPURA', 'RAMAGONDANAHALLI', 'RAMAKRISHNA ASHRAMA',
'RAMAKRISHNAPURA', 'RAMAMURTHY NAGAR', 'RAMAPURA', 'RAMASAGARA', 'RAMASANDRA', 'RAMASWAMY PALYA', 'RAMESH NAGAR',
'RAMUHALLI', 'RAVAGODLU', 'RAVAGODLU CR', 'RAVUTHANAHALLI', 'RAVUTHANAHALLI CR', 'RAYASANDRA', 'RAZAK PALYA',
'RJNR 6TH BLK', 'RJNR ELE. POWER HOUSE', 'RJNR ESI', 'RJNR INDL. EST', 'RJNR-RAMMANDIRA', 'RJNR. 1ST BLK.',
'RPC LAYOUT', 'RV COL. OF ENGG.', 'S M ROAD', 'SADARAMANGALA', 'SADASHIVANAGAR', 'SADASHIVANAGAR POL STN',
'SADENAHALLI', 'SAJJANRAO CIRCLE', 'SAMETHANAHALLI', 'SATHNUR', 'SDS SANITORIUM', 'SHANKAR NAGAR',
'SHANKAR NAGAR PO', 'SHANUBHOGANAHALLI', 'SHESHADRIPURAM COLLEGE', 'SHETTYGERE', 'SHETTYHALLI', 'SHIKARIPALYA',
'SHIVAJI CIRCLE', 'SHIVAJINAGAR BUS STAND', 'SHIVAKOTE', 'SHIVANAHALLI', 'SHOOLAY CIRCLE', 'SIDDANAHALLI',
'SIDDAPURA', 'SIDI HOSKOTE', 'SIGEHALLI', 'SILVEPURA', 'SINGAPURA', 'SINGASANDRA', 'SINGENAAGRAHARA',
'SINGENAAGRAHARA CR', 'SINGENAHALLI', 'SIRSI CIRCLE', 'SLAUGHTER HOUSE', 'SOLADEVANAHALLI CR', 'SOLUR',
'SOMANAHALLI', 'SOMAPURA', 'SOMASHETTYHALLI', 'SONDEKOPPA', 'SOUTH END CIRCLE', 'SPORTS AUTHORITY INDIA',
'SRIGANDHADA KAVALU', 'SRINAGAR', 'SRINIVAGILU', 'SRINIVASAPURA', 'SRINIVASAPURA CR', 'SRINIVASAPURA HOSA BADAVANE',
'SRINIVASNAGAR', 'SRIRAMA TEMPLE', 'SRIRAMPURA ASHWATH KATTE', 'SRIRAMPURA DASARAHALLI',
'SRIRAMPURA HARISCHANDRA GHAT', 'SRIRAMPURAM', 'SRS KALYANA MANTAPA', 'ST. THERESAS SCHOOL', 'SUBBAIAH CIRCLE',
'SUBBARAYAPPANAPALYA', 'SUBBAYYANAPALYA', 'SUBRAMANYA NAGAR', 'SUBURBAN PRESS', 'SUDDUGUNTEPALYA',
'SUDDUGUNTEPALYA CR', 'SUGGATTA', 'SUJATHA TALKIES', 'SULIKERE', 'SULIVARA CR', 'SULTAN PALYA', 'SULTAN PALYACR',
'SUNDARAM ESTATE', 'SUNKADAKATTE', 'SURADEVANAPURA CR', 'SURYODAYA MILLS', 'SWASTIK', 'TABARANAHALLI',
'TAGACHIKUPPE', 'TALAGHATTAPURA', 'TAMMANAYAKANAHALLI', 'TANISANDRA', 'TANMBUCHETTYPALYA', 'TARABANAHALLI',
'TARAHUNASE', 'TARALU', 'TATHAGUNI', 'TATTAGUPPE', 'TATTANAHALLI', 'TAVAREKERE', 'TELE. COLONY',
'TELEPHONE EXCHANGE', 'THIMMASANDRA', 'THIMMENAHALLI', 'THYAGARAJA NAGAR', 'TIGALARAPALYA', 'TIMBAR YARD LAYOUT',
'TINDLU', 'TIPPASANDRA', 'TIPPASANDRA CR', 'TIPPENAHALLI', 'TIPPUR', 'TIRUMALASHETTYHALLI', 'TIRUMALASHETTYHALLI CR',
'TIRUMENAHALLI CR', 'TIRUPALYA', 'TORE NAGASANDRA', 'TOTAGERE TEMPLE', 'TOWN HALL', 'TRINITY CHURCH', 'UDIPALYA',
'UGANAVADI', 'ULLALU CR', 'ULLALU SAT. TOWN', 'ULSOOR', 'UPPARAHALLI', 'UTTARAHALLI', 'UTTARI', 'VABSANDRA',
'VADDARAPALYA', 'VADERAHALLI', 'VAJARAHALLI', 'VANNARPET', 'VARTHUR', 'VARTHUR KODI', 'VASANTHANAGAR',
'VASANTHAPURA', 'VASANTHAPURA CO-OP SOCIETY', 'VEERA ANJANEYA TEMPLE', 'VEERABHADRA NAGAR', 'VEERAGOUDANADODDI',
'VEERANAHALLI', 'VENKATALA', 'VENKATAPURA', 'VETERNARY COLLEGE', 'VIDHANA SOUDHA/HIGH COURT', 'VIDYANAGAR CR',
'VIDYAPEETA CIRCLE', 'VIDYARANYAPURA', 'VIDYASAGARA', 'VIGNANA NAGAR', 'VIJAYA BANK LAYOUT', 'VIJAYA COLLEGE/STG',
'VIJAYANAGAR BUS STAND', 'VIJINAPURA', 'VINAYAKANAGAR', 'VISHWANATH NAGENAHALLI', 'VISVESVARAYA ENG. COL',
'VITTASANDRA', 'VIVEK NAGAR', 'VIVEKANANDA NAGAR', 'VJNR EAST', 'WEAVERS COLONY', 'WHITE FIELD PO',
'WHITE FIELD RLY STN', 'WILSON GARDEN 10TH CR', 'WILSON GARDEN POLICE STN.', 'YARANDHALLI', 'YARAPPANAHALLI',
'YEDIYUR', 'YELACHIGUPPE', 'YELAHANKA', 'YELAHANKA NES OFF', 'YELAHANKA SAT TOWN', 'YELAHANKA SAT TOWN 4TH PH',
'YELLAKUNTE MANGAMMANAPALYA', 'YEMLUR', 'YEMLUR CR', 'YEMRI', 'YENTAGANAHALLI', 'YESHWANTHPUR BUS STAND',
'YESHWANTHPUR REG MKT', 'YESHWANTHPUR TOLGATE', 'YESWANTHPURA RLY STN', 'YMCA - ND RD' ];

var createSelectTag = function(stops){
	var result = stops.map(function(stop){
		return '<option value = "'+stop+'">';
	});
	return result.join('');
};
window.onload = function(){
	$('#fromStops').append(createSelectTag(stops));
	$('#toStops').append(createSelectTag(stops));
}
