//obtenir id from localStorage   
var callFun =localStorage.getItem('info');
/*
  si tronc = 0 l'entete de table sa change par : "Première Année Baccalauréat" et "Deuxième Année Baccalauréat"
  si tronc = 1 l'entete de table sa change par : "" et "Filières"
  si tronc = 2 l'entete de table sa change par : "Secteur" et "Information"
*/
var tronc =0;
//si intrenational = 1 afficher paragraphe de Cycle International
var intrenational=0;
function bacRegu(){
  localStorage.setItem('info', 'bacRegu'); // modier localStorage par bacRegu
  document.getElementById('titleFormation').innerHTML="Cycle baccalauréat réguliers";
  document.getElementById('description').innerHTML="Le Bac au Maroc est composé de deux années. Durant la première année, un examen régional doit être effectué pour tester les connaissances dans les matières secondaires ( par exemple l’éducation islamique, l’histoire et la géographie, le français, l’arabe pour les scientifiques). Ensuite, à la fin de la deuxième année, le bachelier passe un examen national portant sur les matières importantes et principales de la filière en question. Les notes de cet examen final constituent la moitié de la moyenne générale du bac au Maroc, tandis que celles de l’examen régional et celles de l’année scolaire constituent la seconde moitié.";
  tronc =0; 
  intrenational=0;
  var bacRegu = [
{ nom: "Sciences expérimentales", filiere:["Bac Sciences Physiques","SVT Bac"] },
{ nom: "Sciences mathématiques", filiere:["Bac Sciences mathématiques A","Bac Sciences Mathématiques B"] },
{ nom: "Bac Sciences et Technologies Mécaniques", filiere:["Bac Sciences et Technologies Mécaniques"] },
{ nom: "Bac Sciences et Technologies Électriques", filiere:["Bac Sciences et Technologies Électriques"] },
{ nom: "Sciences économiques et gestion", filiere:["Bac Sciences économiques"] },
{ nom: "Lettres et sciences humaines", filiere:["Sciences humaines","Bac Lettres"] },
{ nom: "Arts appliqués", filiere:["Arts appliqués"] },
{ nom: "Sciences de la Chariaa", filiere:["Sciences de la Chariaa"] },
{ nom: "Langue Arabe", filiere:["Langue Arabe"] }
];
    drawArray(bacRegu); //appel function drawArray() pour afficher
}
function bacPro(){
  localStorage.setItem('info', 'bacPro');
  document.getElementById('titleFormation').innerHTML="Cycle baccalauréat Professionnel";
  document.getElementById('description').innerHTML="le système du baccalauréat professionnel au titre de la dernière année scolaire, il a été procédé cette année à la création de nouvelles filières regroupées au sein de trois grands pôles, à savoir, 'Industrie', 'Agriculture' et 'Services'. Les matières de ces filières seront enseignées dans les lycées qualifiants, ainsi que dans les établissements relevant de l'Office de la formation professionnelle et de la promotion du travail (OFPPT) ou des secteurs de l'agriculture, de l'industrie et du tourisme dans les différentes régions du Royaume, dans le cadre des réseaux qui permettent de bénéficier des infrastructures, des équipements et des cadres dont ils disposent, précise le communiqué.";
  tronc =0; 
  intrenational=0;
  var bacPro = [
{ nom: "Baccalauréat Professionnel Pole industriel", filiere:["Maintenance Industrielle","Construction aéronautique","Construction Métallique","Fabrication Mécanique","Electrotechnique Equipements Communicants","Systèmes électroniques numériques","Maintenance de véhicules automobiles: Option Voiture","Froid et Conditionnement d’Air","Maintenance Informatique et Réseaux","Arts et Techniques du Bois","Gros Œuvres du Bâtiment","Dessin de Bâtiment"] },{ nom: "Baccalauréat Professionnel Pole Service", filiere:["Stylisme et modélisme","Arts Culinaires","Services de Restauration","Commerce","Comptabilité","Logistique"] },{ nom: "Baccalauréat Professionnel Pole Agricole", filiere:["Conduite de l’exploitation agricole"] }
];
    drawArray(bacPro);
}
function bacInter(){
  localStorage.setItem('info', 'bacInter');
  document.getElementById('titleFormation').innerHTML="Cycle baccalauréat International";
  document.getElementById('description').innerHTML="Le baccalauréat international (BI) est un diplôme de fin d’études secondaires. Il se prépare en deux ans en trois langues officielles : le français, l’anglais et l’espagnol et permet aux élèves de développer leurs compétences linguistiques.";
  tronc =0; 
  intrenational=1;
  var bacInter = [
{ nom: "Sciences Internationales expérimentales", filiere:["Sciences physique et chimique","Sciences de la vie et de la terre"]},{ nom: "Sections Internationales Lettres et Sciences Humaines", filiere:["Lettre","Sciences Humaines"] },{ nom: "Sciences Internationales mathématique", filiere:["Sciences  mthématique A","Sciences mthématique B"] }
];
    drawArray(bacInter);
}
function troncInter(){
   localStorage.setItem('info', 'troncInter');
   document.getElementById('titleFormation').innerHTML="Troncs communs International";
   document.getElementById('description').innerHTML="Après la 3émé année du collège, il y'a l'option international au maroc, En général, les cours des sections sont dispensés en langues étrangères (selon le choix des élèves) et sont destinés aux élèves curieux, ouverts et attirés par les langues vivantes étrangères.";
  tronc =1; 
  intrenational=1;
  var troncInter = [
{ nom: "Troncs communs Internationales", filiere:["tronc commun lettres et sciences humaines","tronc commun scientifique"]}
];
    drawArray(troncInter);
}
function troncPro(){
   localStorage.setItem('info', 'troncPro');
   document.getElementById('titleFormation').innerHTML="Troncs communs Professionnel";
   document.getElementById('description').innerHTML="Le ministère de l'Education nationale et de la Formation professionnelle a annoncé le lancement mardi 1er septembre de l'opération de réorientation aux cycles des troncs communs professionnels qui sera accompagnée d'une série de mesures organisationnelles exceptionnelles.";
  tronc =1; 
  intrenational=0;
  var troncPro = [
{ nom: "Troncs communs Professionnel", filiere:["Tronc Commun Industriel","Tronc Commun des Services",'Tronc Commun Agricole']}
];
    drawArray(troncPro);
}
function troncRegu(){
   localStorage.setItem('info', 'troncRegu');
   document.getElementById('titleFormation').innerHTML="Troncs communs réguliers";
   document.getElementById('description').innerHTML="L’appellation octroyée à la première année de lycée étant donné qu’il s’agit d’une année d’initiation à la branche choisie après avoir réussi sa 3ème année de collège au Maroc.";
  tronc =1; 
  intrenational=0;
  var troncRegu = [
{ nom: "Troncs communs Regulier", filiere:["Tronc Commun Lettres et sciences humaines ","Tronc Commun Technologique",'Tronc Commun Sciences','Tronc Commun Enseignement Originel']}
];
    drawArray(troncRegu);
}
function secteurPublic(){
  localStorage.setItem('info', 'secteurPublic');
  document.getElementById('titleFormation').innerHTML="Secteur Public";
  document.getElementById('description').innerHTML="A propos des écoles publiques après le bac au Maroc La majorité des écoles publiques après le bac au Maroc sont gérées par le ministère de l’enseignement supérieur, de la recherche scientifique, et de la formation des cadres. Les écoles publiques au Maroc sont des établissements qui offrent des formations dans différents domaines : architecture, commerce, finance, informatique, tourisme, agro-alimentaire, ingénierie, militaire, santé, etc…<br>Les écoles publiques après le bac au Maroc offrent un enseignement de qualité et disposent d’un corps professoral qualifié et du haut niveau pour pouvoir répondre aux besoins de formation exprimés par les entreprises. Elles offrent des formations gratuites et ne ne demandent pas à cet effet de frais de scolarité, sauf quelques tarifs d’inscription ou/et d’assurance au début de chaque année universitaire.";
  tronc =2; 
  intrenational=0;
  var secteurPublic = [
{ nom: "Écoles de commerce publiques", filiere:["ISCAE Casablanca et Rabat : Institut Supérieur de Commerce et d’Administration des Entreprises","Réseau ENCG Maroc : les 9 Écoles Nationales de Commerce et de Gestion"] },{ nom: "Écoles d’ingénieurs publiques", filiere:["ENSA Maroc : Écoles Nationales des Sciences Appliquées","ENSAM Casablanca : Ecole Nationale Supérieure des Arts et Métiers","IAV Rabat : Institut Agronomique et Vétérinaire Hassan II","ENAM Meknès : École Nationale d’Agriculture de Meknès","ENFI : École Nationale Forestière d’Ingénieurs","ISMAC :  Institut Supérieur des Métiers de l’audiovisuel et du cinéma","AIAC : Académie Internationale Mohammed VI de l’Aviation Civile","EHTP : École Hassania des Travaux Publics","EMI : École Mohammadia d’Ingénieurs","ENIM : École Nationale d’Industrie Minérale","ENSEM : École Nationale Supérieure d’électricité et de Mécanique de Casablanca","ENSIAS : École Nationale Supérieure d’Informatique et d’Analyse des Systèmes","ESITH : École Supérieure des Industries du Textile et de l’habillement (semi-publique)","INPT : Institut National des Postes et Télécommunications","INSEA : Institut National de Statiques et d’économie Appliquée","FST : Cycle ingénieur des Facultés des Sciences et Techniques","ENSET : École Normale Supérieure de l’Enseignement Technique","ESI : École des Sciences de l’Information"]},{ nom: "Ecoles d’Architecture , D’Art & Design", filiere:["ENA Rabat et Tétouan : École Nationale d’Architecture","INAU Rabat: Institut National d’Aménagement et d’Urbanisme","INSAP Rabat: Institut National des Sciences de l’Archéologie et du Patrimoine","AAT Casablanca : Académie des Arts Traditionnels","ESBA Casablanca: Ecole Supérieure des Beaux Arts","INBA Tétouan : Institut National des Beaux-Arts","ENSAD Casablanca: Ecole Nationale Supérieure d’Art et de Design","ISADAC Rabat : Institut Supérieur d’Art Dramatique et d’Animation Culturelle","ISMAC : Institut Supérieur des Métiers de l’audiovisuel et du cinéma"]},{ nom: "Ecoles de Militaire , Aviation & Maritimes", filiere:["ERA Marrakech : École Royale de l’Air","ARM Meknès : Académie Royale Militaire","ERN Casablanca : École Royale Navale","IRP Kenitra Maroc : Institut Royal de Police","ERSSM Rabat : École Royale du Service de Santé Militaire","ISEM Casablanca : Institut Supérieur d’Études Maritimes","ISPM Agadir : Institut Supérieur des Pêches Maritimes"]},{ nom: "Eccoles de Tourisme, Traduction & Communication", filiere:["ISIT Tanger : Institut Supérieur International de Tourisme","ISTAHT Maroc: Etablissements de Formation Hôtelière et Touristique","ESRFT Tanger : Ecole Supérieure Roi Fahd de Traduction","ISIC Rabat : Institut supérieur de l’Information et de la Communication"]},{ nom: "Ecoles de Santé, Social & sports", filiere:["ISPITS:Instituts Supérieurs des professions infirmières et techniques de santé","ISSS Settat : Institut Supérieur des Sciences de la Santé","APESA: Année Préparatoire aux Études supérieures en Agriculture","INAS Tanger : Institut National de l’Action Sociale","IRFC/JS Rabat: Institut Royal de Formation des Cadres de la juenesse et des Sports","I2S Settat : L’Institut des Sciences du Sport","ENS Sport Tétouan: Education Physique et Sportive"]},{ nom: "Ecoles de l’Enseignement, Formation &Information", filiere:["CFI Rabat :Centre de Formation des Instituteurs Rabat","CFIE Rabat :Centre de Formation des Inspecteurs de l’Enseignement","CFI Tanger :Centre de Formation des Instituteurs","FSE Rabat : Faculté des Sciences d’Education","ENS : Ecole National Supérieur","ESFEA Agadir : Ecole Supérieure de l’Education et de la Formation"]},{ nom: "Classes préparatoires", filiere:["CPGE"]},{ nom: "Brevet de Technicien Supérieur", filiere:["BTS"]},{ nom: "Diplôme de Technicien (DT)/Spécialisé (DTS)", filiere:["OFPPT"]},{ nom: "Universités Publics", filiere:["Facultés de Médecine et de Pharmacie (FMP)","Facultés des Sciences et Techniques (FST)","Facultés des Sciences (FS)","Facultés des Lettres, d’Economie et Droit (FSJES)","Facultés Polydisciplinaires (FP)"]}
];
    drawArray(secteurPublic);
}
function secteurPrivee(){
  localStorage.setItem('info', 'secteurPrivee');
  document.getElementById('titleFormation').innerHTML="Secteur Privée";
  document.getElementById('description').innerHTML="Les établissements d’enseignement supérieur privé exercent leurs missions sous le contrôle de l’administration. Ils peuvent prendre la dénomination d’écoles, instituts ou Univeristés.. sous trois type d’autorisations : établissements autorisés, établissements accrédités et établissements reconnus.<br>Dans le cadre du renforcement de la qualité de l’enseignement supérieur au Maroc, le Ministère de l’Education Nationale, de la Formation professionnelle, de l’Enseignement Supérieur et de la Recherche Scientifique encourage les établissements d’enseignement supérieur privé les plus méritants en leur offrant des certificats d’accréditation et de reconnaissance. Ce secteur privé vient de franchir la barre des 50.000 étudiants inscrits dans les cycles d’enseignement supérieur au Maroc.<br>Le secteur de l’enseignement supérieur privé compte plus de 200 établissements implantés à travers le Royaume et proposant une offre de formation très diversifiée aussi bien au niveau des cursus  que des filières : Management & Commerce, L’ingénierie/Sciences et Techniquess , Santé & Paramédical , Architecture & Design, Sport & loisirs…";
  tronc =2; 
  intrenational=0;
  var secteurPrivee = [
{ nom: "Universités Privées", filiere:["Akhawayn University in Ifrane (AUI)","L’Université Internationale de Rabat (UIR)","L’Université Internationale d’Agadir (Universiapolis)","L’Université Internationale de Casablanca (UIC)","L’Université Internationale Zahraoui des Sciences de la Santé Rabat (UIASS)","L’Université Mohammed VI des Sciences de la Santé Casa (UM6SS)","L’Université Mohammed VI Polytechnique Benghrir (UM6P)","L’Université Privée de Marrakech Tensift El Haouz (UPF)","Université Privé de Fes (UPF)","Université Euro-Méditerranéenne de Fès (UEMF)","Université Privé Casablanca (Mundiapolis)"] },{ nom: "Ecoles de Management , Finance & Commerce", filiere:["HEM Ecole Supérieure des Hautes Etudes Managériales ","SIST Institut Supérieur des Sciences de Technologie","SUPTEM Tanger Ecole Supérieure des Sciences Techniques et de Management","ESCG Tanger Ecole Supérieure de Commerce et de Gestion des Affaires","EMCGI Tanger Ecole des Métiers, de Commerce, de Gestion et d’Informatique","ESSCG Tanger  Ecole Supérieure des Sciences Commerciales et de Gestion","MEDSUP Tanger Ecole Supérieure du Management des Entreprises du Détroit","ENSI Tanger Ecole Des Nouvelles Sciences et Ingénierie","FINANSUP Tanger Ecole Supérieure de Finance et d’Audit","ESLSCA  Rabat Business School","ESCA Casablanca Ecole Supérieure de Commerce et des Affaires","ESIG Rabat Ecole Supérieure Internationale de Gestion","ESIG Casablanca Ecole Supérieure Internationale de Gestion","ESG Casablanca Groupe Ecole Supérieure de Gestion","ISG Casablanca Institut Supérieur de Gestion","ISTL Casablanca Institut Supérieur de Transport et de la Logistique","ESSEM Casablanca Ecole Supérieure des Sciences Economiques et de Management","SUP’RH Casablanca Ecole Supérieure de Management et de Gestion des RH","HEEC  Marrakech Etudes Economiques, Commerciales","PIIMT Rabat Private International Institut Of Management And Technologie","PIIMT Casablanca Private International Institut Of Management And Technologie","ISMAGI Rabat Institut Supérieur de Management et de Génie Informatique","ISHEDD Rabat Institut Supérieur des Hautes Etudes en Développement Durable","EMBCI Rabat Ecole Marocaine de Banque et de Commerce International","TBS Casablanca Business School","SUP de CO Marrakech Ecole Supérieure de Commerce","HBFG Casablanca Institut des Hautes Etudes Bancaires, Financières","SUP’MANAGEMENT Fes  Ecole Supérieure de Management de Commerce"] },{ nom: "Ecoles d’Ingénieurie ,informatiques & Technologies", filiere:["EMSI Ecole Marocaine des Sciences de l’Ingénieur","ENSI Tanger Ecole Des Nouvelles Sciences et Ingénierie","ECC Casablanca  L’Ecole Centrale de Casablanca","IGA Casablanca L’Institut Supérieur du Génie Appliqué","ISGA Rabat Institut Supérieur d’Ingénierie et des Affaires","EMG Rabat Ecole Marocaine d’Ingénierie","ESSTI Rabat Ecole Supérieure des Sciences et Technologies de l’Ingénierie","IIHEM Rabat International Institute For Higher Education in Morocco","HIGH-TECH High Rabat Technology School in Morocco","HESTIM Casablanca Hautes Etudes des Sciences et Techniques de l’Ingénierie et du Management","ESTEM Casablanca Ecole Supérieure en Ingénierie d’Information, Télécom et Management"] },{ nom: "Ecoles d’Architecture , d’Art & Design", filiere:["EAC Casablanca Ecole Supérieure d’Architecture","Art’Com Ecole Supérieure de Design","Collége laSalle Tanger, Casablanca, Rabat et marrakech","ESDAV Casablanca Ecole Supérieure de Design et des Arts Visuels","ESAV Marrakech Ecole Supérieure des Arts Visuels"] },{ nom: "Ecoles de Santé, Psychologie & Paramédicale", filiere:["ESISMP Casablanca Ecole Supérieure d’Ingénierie de la santé et de Management de Projets","IHEPS Institut des Hautes Etudes en Paramédicales et Sociales","ESSS Casablanca Ecole Supérieure des Sciences de la Santé","ISS Tanger Institut des sciences de la santé","IAG Tanger Formation aux carrières de la santé","IAEP Rabat Institut Abokrat des Etudes Paramédicales","ESP Casablanca Ecole Supérieure de Psychologie","ESK Casablanca Ecole Supérieure de Kinésithérapie","HEK Casablanca Haute Ecole de Kinésithérapie","EHEB Casablanca Ecole des Hautes Etudes de Biotechnologie et de Santé","ISFORT Casablanca Institut Supérieur de Formation en Technologie Alimentaire"] },{ nom: "Ecoles de Turisme, Communication & Sport", filiere:["OSTELEA Rabat School of Tourism et Hospitality","SMS Rabat Sports Management School","ILCS Rabat Institute for Language and communication Studies","CIFIPE Casablanca: Centre de Formation et de Perfectionnement des Enseignants"] },{ nom: "Ecoles de Politique, Journalisme & Médias", filiere:["ESJC Casablanca Ecole Supérieure de Journalisme et de Communication","ISJC Casablanca Institut Supérieur de journalisme et de communication","SUPM’M Tanger Institut Supérieur de Management et des Médias","IFJSUP Institut Supérieur du Journalisme et de l’Information","ILCS Rabat Institute for Language and Communication Studies","EGE Rabat Ecole de Guerre Economique","ESEJE Mohamedia Ecole Supérieure des Etudes Juridiques et Economiques"] },{ nom: "Ecoles de Militaire, Maritime & Aviation", filiere:["MAPA Benslimane Morocco Aviation Private Academy"] },{ nom: "Classes Préparatoires", filiere:["CPGE"] },{ nom: "BTS & DUT", filiere:["Système et Réseaux Informatiques - Gestion des PME/PMI","Développement des Systèmes d'Information - Gestion des PME/PMI","Comptabilité et Gestion Gestion des PME/PMI","Gestion des PME/PMI"] },{ nom: "T & TS", filiere:["OFPTT ( les cours du soir)"] }
];
    drawArray(secteurPrivee);
}
function secteurSemiPublic(){
  localStorage.setItem('info', 'secteurSemiPublic');
  document.getElementById('titleFormation').innerHTML="Secteur semi-public";
  document.getElementById('description').innerHTML="A propos de l’IFMEREE L’IFMEREE d’Oujda s’inscrit dans le cadre de l’accompagnement de la Stratégie Energétique Nationale et l’opérationnalisation de la convention de partenariat, signée devant SA MAJESTE LE ROI MOHAMMED VI, le 31 Mai 2011, entre l’Etat et les professionnels portant sur la mise en place et la gestion de trois Instituts de Formation aux Métiers des Energies Renouvelables et de l’Efficacité Energétique (IFMEREE) à Oujda, Tanger et Ouarzazate.";
  tronc =2; 
  intrenational=0;
  var secteurSemiPublic = [
{ nom: "l’IFMEREE ", filiere:["Efficacité Energétique dans le Bâtiment (EEB)","Systèmes Photovoltaïques (SPV)","Systèmes Eoliens (SEO)","Systèmes Solaires Thermiques (SST)"] }
];
    drawArray(secteurSemiPublic);
}
// function drawArray pour Crée et afficher table
  function drawArray(array){
    document.getElementById('borderHorizon').style.border = "1px solid black";
    document.getElementById('tableAffiche').innerHTML="";
    document.getElementById('titlee').innerHTML="";
    document.getElementById('paragraph').innerHTML="";
    if (intrenational){
      document.getElementById('titlee').innerHTML="Orientation après le tronc commun bac international au Maroc :";
      document.getElementById('paragraph').innerHTML="sections internationales du bac marocain – option français BIOF sont enseignées dans au moins un seul lycée public de chaque académie régionale, alors que les deux autres options “anglais” et “espagnol” sont en cours de test et ne seront généralisées que l’année prochaine (Année scolaire 2016-2017). <hr>";
      }
    let table = document.getElementById("tableAffiche"); 
    let thead = table.createTHead();
    let row   = thead.insertRow();
    let th    = document.createElement("th");
    let td    = document.createElement("td");
    let text  = document.createTextNode("");
    if(tronc ==1){
      text    = document.createTextNode("");
    }else if(tronc==2){
      text    = document.createTextNode("Secteur");
    }
    else{
      text    = document.createTextNode("Première Année Baccalauréat");
    }
    th.appendChild(text);
    row.appendChild(th);
    th        = document.createElement("th");
    if(tronc ==1){
      text    = document.createTextNode("Filières:");
    }else if(tronc==2){
      text    = document.createTextNode("Information");
    }else{
      text    = document.createTextNode("Deuxième Année Baccalauréat");
    }  
    th.appendChild(text);
    row.appendChild(th);
    tbody = table.createTBody();
    for(let i = 0; i < array.length; i++) {
        row   = tbody.insertRow();
        th    = document.createElement("th");
        text  =  document.createTextNode(array[i].nom);
        th.rowSpan = array[i].filiere.length;
        th.appendChild(text);
        row.appendChild(th);
    for(let j =0 ; j < array[i].filiere.length; j++){     
        td    = document.createElement("td");
        text  =  document.createTextNode( array[i].filiere[j]);    
        td.appendChild(text);
        row.appendChild(td);
        row   = tbody.insertRow();
      }   
    }
  }
if(callFun){
  window[callFun](); //appel function 
}else{
  alert('Veuillez choisir un cycle de formation');
  window.location.href='information.html';
}

