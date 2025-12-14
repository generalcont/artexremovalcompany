// Service areas data from both spreadsheets (no duplicates)

export interface ServiceArea {
  name: string;
  slug: string;
  region: string;
  neighborhoods: string[];
  description: string;
}

// Helper function to create slug from name
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Regions/Counties from Sheet 1
const regions = [
  "England", "Bedfordshire", "Berkshire", "Buckinghamshire", "Cambridgeshire", "Cheshire", "Cornwall",
  "County Durham", "Cumbria", "Derbyshire", "Devon", "Dorset", "East Riding of Yorkshire", "East Sussex",
  "Essex", "Gloucestershire", "Greater London", "Greater Manchester", "Hampshire", "Herefordshire",
  "Hertfordshire", "Isle of Wight", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Merseyside",
  "Norfolk", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Oxfordshire",
  "Rutland", "Shropshire", "Somerset", "South Yorkshire", "Staffordshire", "Suffolk", "Surrey",
  "Tyne and Wear", "Warwickshire", "West Midlands", "West Sussex", "West Yorkshire", "Wiltshire",
  "Worcestershire", "Northern Ireland", "County Antrim", "County Armagh", "County Down", "County Fermanagh",
  "County Londonderry", "County Tyrone", "Scotland", "Aberdeen City", "Aberdeenshire", "Angus",
  "Argyll and Bute", "Clackmannanshire", "Dumfries and Galloway", "Dundee City", "East Ayrshire",
  "East Dunbartonshire", "East Lothian", "East Renfrewshire", "Edinburgh", "Falkirk", "Fife", "Glasgow",
  "Highland", "Inverclyde", "Midlothian", "Moray", "Western Isles", "North Ayrshire", "North Lanarkshire",
  "Orkney Islands", "Perth and Kinross", "Renfrewshire", "Scottish Borders", "Shetland Islands",
  "South Ayrshire", "South Lanarkshire", "Stirling", "West Dunbartonshire", "West Lothian", "Wales",
  "Blaenau Gwent", "Bridgend", "Caerphilly", "Cardiff", "Carmarthenshire", "Ceredigion", "Conwy",
  "Denbighshire", "Flintshire", "Gwynedd", "Isle of Anglesey", "Merthyr Tydfil", "Monmouthshire",
  "Neath Port Talbot", "Newport", "Pembrokeshire", "Powys", "Rhondda Cynon Taf", "Swansea", "Torfaen",
  "Vale of Glamorgan", "Wrexham"
];

// Cities/Towns from Sheet 2 with their regions
const citiesData: Record<string, string[]> = {
  "Bedfordshire": ["Ampthill", "Arlesey", "Aspley Guise", "Bedford", "Biggleswade", "Dunstable", "Flitwick", "Kempston", "Leighton Buzzard", "Luton", "Sandy", "Shefford", "Woburn"],
  "Berkshire": ["Ascot", "Bracknell", "Crowthorne", "Hungerford", "Maidenhead", "Newbury", "Reading", "Sandhurst", "Slough", "Thatcham", "Windsor", "Wokingham"],
  "Buckinghamshire": ["Amersham", "Aylesbury", "Beaconsfield", "Buckingham", "Chesham", "High Wycombe", "Marlow", "Milton Keynes", "Newport Pagnell", "Olney", "Princes Risborough", "Winslow"],
  "Cambridgeshire": ["Cambridge", "Chatteris", "Ely", "Huntingdon", "March", "Peterborough", "St Ives", "St Neots", "Wisbech"],
  "Cheshire": ["Altrincham", "Chester", "Congleton", "Crewe", "Ellesmere Port", "Knutsford", "Macclesfield", "Middlewich", "Nantwich", "Northwich", "Runcorn", "Sandbach", "Warrington", "Widnes", "Wilmslow", "Winsford"],
  "Cornwall": ["Bodmin", "Bude", "Callington", "Camborne", "Falmouth", "Hayle", "Helston", "Launceston", "Liskeard", "Looe", "Newquay", "Penzance", "Redruth", "Saltash", "St Austell", "St Ives", "Truro", "Wadebridge"],
  "County Durham": ["Barnard Castle", "Bishop Auckland", "Chester-le-Street", "Consett", "Darlington", "Durham", "Hartlepool", "Newton Aycliffe", "Peterlee", "Seaham", "Spennymoor", "Stanley", "Stockton-on-Tees", "Sedgefield", "Ferryhill", "Crook"],
  "Cumbria": ["Ambleside", "Appleby-in-Westmorland", "Barrow-in-Furness", "Carlisle", "Cockermouth", "Egremont", "Grange-over-Sands", "Kendal", "Keswick", "Penrith", "Ulverston", "Whitehaven", "Windermere", "Workington"],
  "Derbyshire": ["Alfreton", "Ashbourne", "Bakewell", "Belper", "Bolsover", "Buxton", "Chesterfield", "Derby", "Dronfield", "Glossop", "Heanor", "Ilkeston", "Long Eaton", "Matlock", "Ripley", "Swadlincote"],
  "Devon": ["Axminster", "Barnstaple", "Bideford", "Brixham", "Crediton", "Dartmouth", "Dawlish", "Exeter", "Exmouth", "Honiton", "Ilfracombe", "Newton Abbot", "Okehampton", "Paignton", "Plymouth", "Sidmouth", "Tavistock", "Teignmouth", "Tiverton", "Torquay", "Totnes"],
  "Dorset": ["Beaminster", "Blandford Forum", "Bournemouth", "Bridport", "Christchurch", "Dorchester", "Ferndown", "Gillingham", "Lyme Regis", "Poole", "Shaftesbury", "Sherborne", "Sturminster Newton", "Swanage", "Verwood", "Wareham", "Weymouth", "Wimborne Minster"],
  "East Riding of Yorkshire": ["Beverley", "Bridlington", "Brough", "Cottingham", "Driffield", "Goole", "Hedon", "Hessle", "Hornsea", "Howden", "Kingston upon Hull", "Market Weighton", "Pocklington", "Withernsea"],
  "East Sussex": ["Battle", "Bexhill-on-Sea", "Brighton & Hove", "Crowborough", "Eastbourne", "Hailsham", "Hastings", "Heathfield", "Lewes", "Newhaven", "Peacehaven", "Polegate", "Rye", "Seaford", "Uckfield"],
  "Essex": ["Basildon", "Braintree", "Brentwood", "Canvey Island", "Chelmsford", "Clacton-on-Sea", "Colchester", "Epping", "Grays", "Harlow", "Harwich", "Loughton", "Maldon", "Rayleigh", "Saffron Walden", "Southend-on-Sea", "Thurrock", "Witham"],
  "Gloucestershire": ["Bishop's Cleeve", "Cheltenham", "Cirencester", "Cinderford", "Coleford", "Dursley", "Gloucester", "Lydney", "Nailsworth", "Stonehouse", "Stroud", "Tewkesbury", "Tetbury", "Winchcombe", "Wotton-under-Edge"],
  "Greater London": ["Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow", "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea", "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham", "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster", "City of London", "Romford", "Harold Hill"],
  "Greater Manchester": ["Ashton-under-Lyne", "Bolton", "Bury", "Eccles", "Manchester", "Oldham", "Rochdale", "Salford", "Stockport", "Tameside", "Trafford", "Wigan"],
  "Hampshire": ["Aldershot", "Alton", "Andover", "Basingstoke", "Eastleigh", "Fareham", "Farnborough", "Gosport", "Havant", "Lymington", "Petersfield", "Portsmouth", "Romsey", "Southampton", "Winchester"],
  "Herefordshire": ["Hereford", "Leominster", "Ross-on-Wye", "Ledbury", "Bromyard", "Kington", "Credenhill", "Lugwardine", "Kingstone", "Withington", "Weobley", "Clehonger", "Ewyas Harold"],
  "Hertfordshire": ["St Albans", "Watford", "Hemel Hempstead", "Stevenage", "Welwyn Garden City", "Hatfield", "Hertford", "Bishop's Stortford", "Hitchin", "Letchworth Garden City", "Harpenden", "Cheshunt", "Waltham Cross", "Borehamwood", "Tring", "Royston", "Berkhamsted", "Bushey", "Radlett", "Ware", "Potters Bar", "Broxbourne", "Rickmansworth", "Buntingford", "Sawbridgeworth"],
  "Isle of Wight": ["Ryde", "Newport", "Sandown", "Cowes", "East Cowes", "Shanklin", "Ventnor", "Yarmouth", "Brading"],
  "Kent": ["Maidstone", "Canterbury", "Ashford", "Gillingham", "Chatham", "Rochester", "Dartford", "Gravesend", "Tonbridge", "Tunbridge Wells", "Sevenoaks", "Sittingbourne", "Faversham", "Herne Bay", "Whitstable", "Margate", "Ramsgate", "Broadstairs", "Deal", "Dover", "Folkestone", "Hythe", "Tenterden", "Sandwich", "Swanley"],
  "Lancashire": ["Preston", "Blackpool", "Blackburn", "Burnley", "Lancaster", "Morecambe", "Chorley", "Accrington", "Nelson", "Colne", "Leyland", "Skelmersdale", "Darwen", "Fleetwood", "Lytham St Annes", "Clitheroe", "Ormskirk", "Rawtenstall", "Bacup", "Haslingden", "Garstang", "Kirkham", "Longridge", "Bamber Bridge", "Carnforth"],
  "Leicestershire": ["Leicester", "Loughborough", "Hinckley", "Wigston", "Coalville", "Melton Mowbray", "Market Harborough", "Oadby", "Earl Shilton", "Enderby", "Narborough", "Shepshed", "Syston", "Whetstone", "Ashby-de-la-Zouch", "Birstall", "Mountsorrel", "Lutterworth", "Broughton Astley", "Sileby", "Groby", "Anstey", "Castle Donington", "Countesthorpe", "Ibstock", "Barrow-upon-Soar", "Kibworth Harcourt", "Measham", "Quorn", "Markfield", "Fleckney", "Kirby Muxloe", "Ratby", "Desford", "Stoney Stanton", "Moira", "Norris Hill", "Great Glen", "Kegworth", "Bottesford", "Cosby", "Asfordby", "Newbold Verdon", "East Goscote", "Donisthorpe", "Ellistown", "Bagworth", "Harby", "Sapcote", "Queniborough", "Woodhouse", "Ravenstone", "Market Bosworth", "Cropston"],
  "Lincolnshire": ["Lincoln", "Grimsby", "Scunthorpe", "Grantham", "Boston", "Spalding", "Skegness", "Gainsborough", "Stamford", "Louth", "Sleaford", "Mablethorpe", "North Hykeham", "Bourne", "Horncastle", "Holbeach", "Market Deeping", "Cleethorpes", "Wainfleet All Saints", "Alford", "Caistor", "Crowland", "Sutton on Sea", "Coningsby", "Long Sutton", "Woodhall Spa", "Kirton in Lindsey", "Chapel St Leonards"],
  "Merseyside": ["Liverpool", "Birkenhead", "St Helens", "Southport", "Wallasey", "Bebington", "Bootle", "Crosby", "Kirkby", "Prescot", "Heswall", "Maghull", "Formby", "Newton-le-Willows", "Halewood", "Litherland", "Haydock", "West Kirby", "Hoylake", "Garswood", "Billinge", "Rainford"],
  "Norfolk": ["Norwich", "King's Lynn", "Great Yarmouth", "Thetford", "Gorleston-on-Sea", "Dereham", "Taverham", "Wymondham", "North Walsham", "Downham Market", "Attleborough", "Diss", "Caister-on-Sea", "Hunstanton", "Watton", "Fakenham", "Cromer", "Sheringham", "Swaffham", "Aylsham", "Hemsby", "Hethersett", "Poringland", "Dersingham", "Belton"],
  "North Yorkshire": ["York", "Middlesbrough", "Harrogate", "Scarborough", "Redcar", "Thornaby", "Northallerton", "Selby", "Skipton", "Whitby", "Ripon", "Filey", "Malton", "Knaresborough", "Pickering", "Richmond", "Easingwold", "Stokesley", "Bedale", "Tadcaster", "Boroughbridge", "Settle", "Pateley Bridge", "Leyburn", "Helmsley", "Guisborough", "Loftus", "Eston", "Great Ayton", "Marske-by-the-Sea"],
  "Northamptonshire": ["Northampton", "Corby", "Kettering", "Wellingborough", "Rushden", "Daventry", "Brackley", "Desborough", "Towcester", "Burton Latimer", "Raunds", "Irthlingborough", "Higham Ferrers", "Rothwell", "Thrapston", "Oundle", "Earls Barton", "Brixworth"],
  "Northumberland": ["Blyth", "Cramlington", "Ashington", "Bedlington", "Morpeth", "Berwick-upon-Tweed", "Hexham", "Prudhoe", "Ponteland", "Stakeford", "Alnwick", "Seaton Delaval", "Newbiggin-by-the-Sea", "Amble"],
  "Nottinghamshire": ["Nottingham", "Mansfield", "Beeston", "Sutton-in-Ashfield", "Arnold", "Worksop", "West Bridgford", "Newark-on-Trent", "Kirkby-in-Ashfield", "Carlton", "Hucknall", "Eastwood", "Retford", "Stapleford", "Bingham", "Kimberley", "Radcliffe-on-Trent", "Southwell", "Ollerton", "Calverton", "Edwinstowe", "Rainworth", "Warsop", "Clipstone", "Cotgrave", "Blidworth", "Ruddington", "Keyworth", "Harworth", "Balderton"],
  "Oxfordshire": ["Oxford", "Banbury", "Abingdon-on-Thames", "Bicester", "Witney", "Didcot", "Carterton", "Kidlington", "Henley-on-Thames", "Wallingford", "Thame", "Wantage", "Grove", "Faringdon", "Chipping Norton", "Chinnor", "Benson", "Eynsham", "Wheatley", "Kennington", "Woodstock", "Charlbury", "Watlington", "Bampton", "Deddington"],
  "Rutland": ["Oakham", "Uppingham", "Ketton", "Ryhall", "Langham", "Whissendine", "Cottesmore", "Kendrew Barracks", "Empingham", "Edith Weston", "North Luffenham", "Greetham", "Exton", "Great Casterton", "Market Overton", "Barrowden", "Braunston-in-Rutland", "South Luffenham", "Essendine", "Lyddington", "Manton", "Belton-in-Rutland", "Morcott", "Seaton"],
  "Shropshire": ["Shrewsbury", "Telford", "Oswestry", "Bridgnorth", "Ludlow", "Market Drayton", "Whitchurch", "Newport", "Wem", "Church Stretton", "Ellesmere", "Broseley", "Bishop's Castle", "Much Wenlock", "Craven Arms", "Shifnal", "Cleobury Mortimer"],
  "Somerset": ["Bath", "Weston-super-Mare", "Taunton", "Yeovil", "Bridgwater", "Frome", "Portishead", "Clevedon", "Burnham-on-Sea", "Wellington", "Chard", "Minehead", "Street", "Nailsea", "Shepton Mallet", "Glastonbury", "Wells", "Midsomer Norton", "Radstock", "Ilminster", "Wincanton", "Bruton", "Watchet", "Crewkerne", "Highbridge", "Keynsham", "Axbridge", "Castle Cary"],
  "South Yorkshire": ["Sheffield", "Doncaster", "Rotherham", "Barnsley", "Wath-upon-Dearne", "Bentley", "Wombwell", "Chapeltown", "Dinnington", "Rawmarsh", "Adwick-le-Street", "Hoyland", "Maltby", "Swinton", "Penistone", "Thorne", "Mexborough", "Stocksbridge", "Conisbrough", "Armthorpe", "Askern", "Goldthorpe", "Edlington", "Tickhill", "Cudworth", "Royston", "Worsbrough", "Dodworth", "Denaby Main", "Brinsworth"],
  "Staffordshire": ["Stoke-on-Trent", "Tamworth", "Newcastle-under-Lyme", "Burton upon Trent", "Stafford", "Lichfield", "Cannock", "Burntwood", "Kidsgrove", "Rugeley", "Leek", "Biddulph", "Hednesford", "Stone", "Wombourne", "Uttoxeter", "Cheadle", "Great Wyrley", "Perton", "Penkridge", "Codsall", "Norton Canes", "Eccleshall", "Bilbrook", "Kinver", "Armitage"],
  "Suffolk": ["Ipswich", "Lowestoft", "Bury St Edmunds", "Haverhill", "Felixstowe", "Sudbury", "Newmarket", "Stowmarket", "Kesgrave", "Beccles", "Mildenhall", "Woodbridge", "Brandon", "Hadleigh", "Leiston", "Trimley St Mary", "Halesworth", "Bungay"],
  "Surrey": ["Woking", "Guildford", "Walton-on-Thames", "Ewell", "Esher", "Camberley", "Redhill", "Leatherhead", "Epsom", "Weybridge", "Ashford", "Egham", "Staines", "Farnham", "Horley", "Godalming", "Reigate", "Caterham", "Frimley", "Cobham", "Dorking", "Addlestone", "Ashtead", "Chertsey", "Oxted", "Haslemere", "Banstead", "Cranleigh", "Warlingham", "Lightwater", "Hindhead", "Witley", "Virginia Water", "East Horsley", "Bagshot", "West Clandon", "Whitebushes"],
  "Tyne and Wear": ["Newcastle upon Tyne", "Sunderland", "Gateshead", "South Shields", "North Shields", "Washington", "Jarrow", "Hebburn", "Whitley Bay", "Killingworth", "Wallsend", "Boldon Colliery", "East Boldon", "West Boldon", "Ryhope", "Houghton-le-Spring", "Felling", "Birtley", "Cleadon", "Monkseaton", "Tynemouth"],
  "Warwickshire": ["Nuneaton", "Rugby", "Royal Leamington Spa", "Warwick", "Bedworth", "Stratford-upon-Avon", "Kenilworth", "Atherstone", "Polesworth", "Whitnash", "Southam", "Kingsbury", "Wellesbourne", "Alcester", "Coleshill", "Studley", "Bulkington", "Shipston-on-Stour", "Bidford-on-Avon", "Long Lawford"],
  "West Midlands": ["Birmingham", "Coventry", "Wolverhampton", "Solihull", "Sutton Coldfield", "Walsall", "Dudley", "Halesowen", "Stourbridge", "Smethwick", "Kingswinford", "Bloxwich", "Willenhall", "Bilston", "Brierley Hill", "Sedgley", "Oldbury", "Tipton", "Wednesbury", "Cradley Heath", "Darlaston", "Brownhills", "Pelsall", "Rowley Regis", "Bearwood", "West Bromwich", "Yew Tree"],
  "West Sussex": ["Worthing", "Crawley", "Bognor Regis", "Littlehampton", "Shoreham-by-Sea", "Horsham", "Haywards Heath", "Hurstpierpoint", "Southwick", "Selsey", "Westergate", "Southwater", "Storrington", "West Chiltington Common", "Billingshurst", "Steyning", "East Wittering"],
  "West Yorkshire": ["Leeds", "Bradford", "Huddersfield", "Wakefield", "Halifax", "Batley", "Dewsbury", "Keighley", "Castleford", "Brighouse", "Pudsey", "Morley", "Pontefract", "Shipley", "Bingley", "Holmfirth", "Normanton", "Ossett", "Yeadon", "Rothwell", "Mirfield", "Horsforth", "Liversedge", "Baildon", "Elland", "Garforth", "Ilkley", "Otley", "Knottingley", "Heckmondwike", "Guiseley", "Todmorden", "Cleckheaton", "Wetherby", "Featherstone", "South Elmsall", "Horbury", "Kippax", "Hemsworth", "South Kirkby", "Silsden", "Meltham", "Burley", "Haworth", "Upton", "Shepley", "Thornton", "Ackworth", "Crofton", "Ryhill", "Allerton Bywater", "Ripponden", "Boston Spa", "Sowerby Bridge", "Skelmanthorpe"],
  "Wiltshire": ["Swindon", "Salisbury", "Trowbridge", "Chippenham", "Melksham", "Devizes", "Warminster", "Calne", "Westbury", "Corsham", "Wootton Bassett", "Amesbury", "Tidworth", "Bradford-on-Avon", "Bulford Camp", "Marlborough", "Highworth", "Wroughton", "Malmesbury", "Hilperton", "Lyneham", "Ludgershall", "Purton", "Cricklade", "Bulford", "Pewsey", "Wilton", "Box", "Redlynch", "Downton", "Colerne"],
  "Worcestershire": ["Worcester", "Redditch", "Kidderminster", "Malvern", "Bromsgrove", "Evesham", "Droitwich", "Stourport-on-Severn", "Catshill", "Bewdley", "Pershore"],
  "County Antrim": ["Belfast", "Lisburn", "Newtownabbey", "Ballymena", "Carrickfergus", "Ballymoney", "Ballyclare"],
  "County Armagh": ["Lurgan", "Portadown", "Newry"],
  "County Down": ["Bangor", "Newtownards", "Downpatrick", "Holywood"],
  "County Fermanagh": ["Enniskillen"],
  "County Londonderry": ["Derry City", "Coleraine", "Limavady"],
  "County Tyrone": ["Omagh", "Dungannon", "Strabane", "Cookstown"],
  "Aberdeen City": ["Aberdeen", "Cove Bay", "Dyce", "Milltimber", "Peterculter"],
  "Aberdeenshire": ["Peterhead", "Fraserburgh", "Inverurie", "Stonehaven", "Ellon"],
  "Angus": ["Arbroath", "Forfar", "Montrose", "Brechin", "Carnoustie"],
  "Argyll and Bute": ["Helensburgh", "Oban", "Dunoon", "Campbeltown", "Rothesay"],
  "Clackmannanshire": ["Alloa", "Tillicoultry", "Alva", "Dollar", "Tullibody"],
  "Dumfries and Galloway": ["Dumfries", "Stranraer", "Annan", "Lockerbie", "Castle Douglas"],
  "Dundee City": ["Dundee", "Broughty Ferry", "Invergowrie"],
  "East Ayrshire": ["Kilmarnock", "Cumnock", "Galston", "Stewarton", "Hurlford"],
  "East Dunbartonshire": ["Kirkintilloch", "Bearsden", "Milngavie", "Bishopbriggs", "Lenzie"],
  "East Lothian": ["Musselburgh", "Haddington", "North Berwick", "Dunbar", "Tranent"],
  "East Renfrewshire": ["Newton Mearns", "Giffnock", "Clarkston", "Thornliebank"],
  "Edinburgh": ["Edinburgh", "Leith", "Portobello", "Morningside"],
  "Falkirk": ["Grangemouth", "Bo'ness", "Denny", "Larbert"],
  "Fife": ["Dunfermline", "Kirkcaldy", "Glenrothes", "Leven", "St Andrews"],
  "Glasgow": ["Glasgow", "Partick", "Govan", "Pollokshields", "Maryhill"],
  "Highland": ["Inverness", "Fort William", "Nairn", "Wick", "Thurso"],
  "Inverclyde": ["Greenock", "Gourock", "Wemyss Bay", "Port Glasgow", "Kilmacolm"],
  "Midlothian": ["Dalkeith", "Bonnyrigg", "Penicuik", "Loanhead", "Gorebridge"],
  "Moray": ["Elgin", "Forres", "Lossiemouth", "Buckie", "Keith"],
  "Western Isles": ["Stornoway", "Tarbert", "Benbecula", "Lochmaddy", "Castlebay"],
  "North Ayrshire": ["Irvine", "Kilwinning", "Largs", "Saltcoats", "Ardrossan"],
  "North Lanarkshire": ["Motherwell", "Airdrie", "Coatbridge", "Wishaw", "Cumbernauld"],
  "Orkney Islands": ["Kirkwall", "Stromness", "St Margaret's Hope", "Dounby"],
  "Perth and Kinross": ["Perth", "Kinross", "Blairgowrie", "Crieff", "Pitlochry"],
  "Renfrewshire": ["Paisley", "Renfrew", "Johnstone", "Erskine", "Linwood"],
  "Scottish Borders": ["Galashiels", "Hawick", "Kelso", "Peebles", "Jedburgh"],
  "Shetland Islands": ["Lerwick", "Scalloway", "Brae", "Hillswick"],
  "South Ayrshire": ["Ayr", "Prestwick", "Troon", "Maybole", "Girvan"],
  "South Lanarkshire": ["East Kilbride", "Rutherglen", "Hamilton", "Cambuslang", "Lanark"],
  "Stirling": ["Bridge of Allan", "Dunblane", "Callander", "Bannockburn", "Balloch"],
  "West Dunbartonshire": ["Clydebank", "Dumbarton", "Renton", "Alexandria"],
  "West Lothian": ["Livingston", "Bathgate", "Broxburn", "Linlithgow", "Armadale"],
  "Blaenau Gwent": ["Ebbw Vale", "Brynmawr", "Abertillery", "Tredegar"],
  "Bridgend": ["Maesteg", "Porthcawl", "Pencoed"],
  "Caerphilly": ["Blackwood", "Bargoed", "Risca", "Ystrad Mynach"],
  "Cardiff": ["Llanrumney", "Splott", "Llandaff"],
  "Carmarthenshire": ["Llanelli", "Carmarthen", "Ammanford", "Burry Port"],
  "Ceredigion": ["Aberystwyth"],
  "Conwy": ["Llandudno", "Colwyn Bay", "Kinmel Bay", "Abergele"],
  "Denbighshire": ["Rhyl", "Prestatyn"],
  "Flintshire": ["Connah's Quay", "Flint", "Mold"],
  "Gwynedd": ["Bangor", "Caernarfon"],
  "Isle of Anglesey": ["Holyhead"],
  "Merthyr Tydfil": ["Merthyr Tydfil"],
  "Monmouthshire": ["Abergavenny", "Monmouth", "Chepstow", "Caldicot"],
  "Neath Port Talbot": ["Neath", "Port Talbot"],
  "Newport": ["Caerleon"],
  "Pembrokeshire": ["Milford Haven", "Haverfordwest"],
  "Powys": ["Newtown", "Brecon"],
  "Rhondda Cynon Taf": ["Tonypandy", "Aberdare", "Pontypridd", "Mountain Ash"],
  "Swansea": ["Gorseinon", "Pontarddulais"],
  "Torfaen": ["Cwmbran", "Pontypool"],
  "Vale of Glamorgan": ["Barry", "Llantwit Major"],
  "Wrexham": ["Wrexham"]
};

// Generate description for an area
const generateDescription = (name: string, region: string): string => {
  const descriptions = [
    `We provide professional artex removal and smooth plastering services throughout ${name} and the surrounding ${region} area. Many homes in ${name} were built during the 1970s and 1980s when textured ceilings were popular. If your property dates from before 1999, the artex coating may contain asbestos, which is why we always recommend testing before any removal work begins. Our UKATA-certified team follows HSE guidelines to ensure safe removal, complete dust containment, and a perfect smooth finish.`,
    `Looking to modernise your ceilings in ${name}? Our experienced artex removal specialists cover all areas of ${region}, removing textured coatings and applying flawless smooth plaster finishes. We understand the housing stock in ${name} – from Victorian terraces to 1980s builds – and adapt our approach to suit each property. Every job includes asbestos testing for older properties, professional dust containment, and expert plastering that transforms your rooms.`,
    `Our artex removal service is available throughout ${name} and neighbouring areas in ${region}. Textured ceilings can make rooms feel dated and are difficult to decorate around. We remove swirl, stipple, and fan-pattern artex safely, test for asbestos when required, and finish with a smooth skim coat that's ready for painting. We've completed hundreds of projects across ${region} and take pride in our attention to detail and clean working practices.`
  ];
  // Use a consistent index based on the name length for variety
  const index = name.length % descriptions.length;
  return descriptions[index];
};

// Get neighborhoods for a region or city
const getNeighborhoods = (name: string, region: string): string[] => {
  // If it's a region, return cities in that region
  if (citiesData[name]) {
    return citiesData[name].slice(0, 12);
  }
  // If it's a city, return other cities in the same region
  if (citiesData[region]) {
    return citiesData[region].filter(c => c !== name).slice(0, 12);
  }
  return [];
};

// Create all service areas (regions + cities, no duplicates)
const createServiceAreas = (): ServiceArea[] => {
  const areasMap = new Map<string, ServiceArea>();
  
  // Add all regions first
  regions.forEach(region => {
    const slug = createSlug(region);
    if (!areasMap.has(slug)) {
      areasMap.set(slug, {
        name: region,
        slug,
        region: region,
        neighborhoods: citiesData[region]?.slice(0, 12) || [],
        description: generateDescription(region, region)
      });
    }
  });
  
  // Add all cities
  Object.entries(citiesData).forEach(([region, cities]) => {
    cities.forEach(city => {
      const slug = createSlug(city);
      // Only add if not already a region with same slug
      if (!areasMap.has(slug)) {
        areasMap.set(slug, {
          name: city,
          slug,
          region: region,
          neighborhoods: getNeighborhoods(city, region),
          description: generateDescription(city, region)
        });
      }
    });
  });
  
  return Array.from(areasMap.values()).sort((a, b) => a.name.localeCompare(b.name));
};

export const serviceAreas: ServiceArea[] = createServiceAreas();

// Get area by slug
export const getAreaBySlug = (slug: string): ServiceArea | undefined => {
  return serviceAreas.find(area => area.slug === slug);
};

// Get all areas grouped by region
export const getAreasGroupedByRegion = (): Record<string, ServiceArea[]> => {
  return serviceAreas.reduce((acc, area) => {
    if (!acc[area.region]) {
      acc[area.region] = [];
    }
    acc[area.region].push(area);
    return acc;
  }, {} as Record<string, ServiceArea[]>);
};
