var  interpersonnelle=0;
var  intrapersonnelle=0;
var  spatiale=0;
var  musicale=0;
var  ecologique=0;
var  kinesthesique=0;
var  verbale=0;
var  logique=0;
var tableResulta=[];
var resulta = [
// Intelligence Interpersonnelle
{ nom: "Intelligence Interpersonnelle",
  info:"Il s’agit de l’aptitude à discerner l’humeur, le tempérament, la motivation et le désir des autres personnes et à y répondre correctement. Cette intelligence permet l’attachement et la création de liens. Elle assoit ses bases au cours des premières années de la vie, de façon parallèle à l’intelligence intrapersonnelle dont elle est partiellement issue."  },
// Intelligence Intrapersonnelle
{ nom: "Intelligence Intrapersonnelle ", 
  info:"Cette intelligence se décrit comme l’aptitude à accéder à ses propres sentiments et à reconnaître ses émotions, ses forces, ses faiblesses."},
  // Intelligence spatiale
{ nom: "Intelligence spatiale", 
  info:"Les personnes chez qui cette forme d’intelligence prédomine présentent une grande sensibilité aux modèles logiques que l’on retrouve par exemple dans les sciences, les mathématiques, l’économie, le droit, etc. Elles excellent " },
// Intelligence musicale
{ nom: "Intelligence musicale", 
  info:"Cette forme d’intelligence appelle l’aptitude à avoir le sens du rythme, à ressentir, capter et produire une tonalité et un timbre; elle sous-tend l’appréciation des formes d’expression musicale."},
// Intelligence écologique
{ nom: "Intelligence écologique", 
  info:"L’intelligence écologique est l’intelligence de base de l’être humain, celle qui lui a permis de survivre depuis toujours. On la définit par l’aptitude à discerner l’organisation du vivant"},
// Intelligence kinesthésique
{ nom: "Intelligence kinesthésique",
  info:"L’intelligence kinesthésique, c’est la faculté d’apprendre et de penser à partir de toutes les perceptions de son corps. Chez les personnes pour qui cette forme d’intelligence domine, on note un bon équilibre entre le corps et l’esprit. "},
// Intelligence verbale
{ nom: "Intelligence verbale",
  info:"Les personnes chez qui elle domine présentent une grande sensibilité aux sons, à la signification des mots et aux fonctions du langage. Ces individus sont souvent des amoureux de la langue et de grands lecteurs."},
// Intelligence logique
{ nom: "Intelligence logique",
  info:"Les personnes chez qui cette forme d’intelligence prédomine présentent une grande sensibilité aux modèles logiques que l’on retrouve par exemple dans les sciences, les mathématiques, l’économie, le droit, etc"}];

var resulDetail = [
// Intelligence Interpersonnelle
{ definition: "Il s’agit de l’aptitude à discerner l’humeur, le tempérament, la motivation et le désir des autres personnes et à y répondre correctement. Cette intelligence permet l’attachement et la création de liens. Elle assoit ses bases au cours des premières années de la vie, de façon parallèle à l’intelligence intrapersonnelle dont elle est partiellement issue. Voici quelques caractéristiques des personnes à forte intelligence interpersonnelle :<br>- aime la vie de groupe, est très sociable;<br>- travaille facilement en coopération;<br>- s’intéresse à la communauté immédiate ou élargie;<br>- capacité à voir les situations d’un autre point de vue, avec objectivité;<br>- communique efficacement;<br>- habileté à créer et maintenir la synergie d’un groupe (leadership);<br>- sensibilité aux humeurs et aux motivations des autres;<br>- établit des relations profondes et sincères;<br>- sens de l’écoute et empathie;<br>- aptitude à obtenir naturellement l’approbation ou l’adhésion des autres;<br>- favorise la résolution de problèmes par un esprit de coopération. ", 
  Professions:"Acteur, ethnologue, arbitre, barman, chef d’entreprise, conseiller touristique, consultant, éducateur, enseignant, médiateur,metteur en scène, assistante sociale, policier, psychologue, réceptionniste, sociologue, thérapeute, animateur social, auxiliaire de vie, directeur ou membre d’une association caritative ou humanitaire. ",
  Activites:"- Pratiquer l’écoute ouverte, vraie et complète, par exemple en interviewant des gens que l’on connaît; dresser un compterendu et le présenter.<br>- Explorer divers modes de communication.<br>- Dans un lieu public, observer les gens en tentant de percevoir la teneur d’un dialogue entre deux personnes, les émotions qu’ils ressentent, ce qu’exprime leur langage non verbal (posture, gestes, mimique, etc..).<br>- Sourire plus souvent et observer l’effet de ce comportement chez les autres.<br>- Observer son comportement ou son langage non verbal et ce qu’il provoque chez les autres.<br>- Lors de discussions, favoriser le compromis, sans trahir ses engagements pour autant.<br>- Consulter autour de soi pour s’aider à résoudre des difficultés" },
// Intelligence Intrapersonnelle
{ definition: "Cette intelligence se décrit comme l’aptitude à accéder à ses propres sentiments et à reconnaître ses émotions, ses forces, ses faiblesses. C’est la connaissance de soi-même. Les éléments de base de cette forme d’intelligence s’installent avant l’âge de trois ans. L’intelligence intrapersonnelle se traduit au départ par l’établissement d’une limite entre soi et les autres. La logique se mêle à l’intuition, à la compréhension de soi. C’est aussi une capacité d’adaptation aux épreuves, aux souvenirs, aux événements, aux passions. Son expression requiert la participation d’autres formes d’intelligence. Voici quelques caractéristiques d’un individu dont l’intelligence intrapersonnelle domine :<br>- aime travailler seul;<br>- aime apprendre à apprendre;<br>- excellente concentration, autodiscipline;<br>- sens poussé de l’autocritique, tolère difficilement l’échec, se remet continuellement en question;<br>- introverti;<br>- capacité de développer sa confiance en soi et l’estime de soi;<br>- connaissance de ses valeurs et de leur application au quotidien;<br>- à l’écoute de ses émotions, de ses sentiments, de ses idées, de ses rêves et idéaux;<br>- contrôle maximum sur sa destinée et sur les moyens à prendre pour progresser;<br>- capacité à composer avec le doute;<br>- grande intuition et auto motivation. <br>", 
  Professions:"Chercheur, conseiller en orientation, consultant, designer de jeux vidéo, professeur de yoga, cadre, philosophe, romancier,thérapeute, psychologue, psychanalyste, psychiatre…" ,
  Activites:"Écrire son journal personnel, ses réflexions, des maximes du jour.<br>- Retranscrire méthodiquement ses rêves.<br>- Pratiquer la méditation, seul(e) et/ou dans un groupe hebdomadaire.<br>- Essayer de décoder ses propres mécanismes psychologiques ; ceux qui mènent à la joie, la colère, l’anxiété, etc.<br>- Pendant sept jours, écrire 25 mots pour se décrire, en tirer quelques conclusions, remarques…<br>- Lire sur des sujets à portée spirituelle, psychologique ou philosophique.<br>- Passer 20 à 30 minutes dans le silence, chaque jour.<br>- Faire l’exercice de pardonner à quelqu’un ou à soi-même un geste, une parole, etc. Il s’agit ainsi d’éliminer des éléments  négatifs de sa vie, de s’en libérer.<br>- Essayer une activité qu’on a toujours voulu faire, sans avoir osé passer à l’action.<br>- Prendre du temps pour soi, dans un lieu où l’on se sent en paix. " },
// Intelligence spatiale
{ definition: "Cette forme d’intelligence se définit par une excellente perception des choses et de son environnement. L’aptitude à se repérer dans l’espace apparaît généralement dès la petite enfance. Un peu plus tard s’ajoute «l’esprit de géométrie » et le sens de l’esthétisme. Voici quelques caractéristiques d’une personne à dominancevisuelle / spatiale :<br>- imagination fertile;<br>- mémoire visuelle infaillible;<br>- crée des images mentales;<br>- recherche l’équilibre et l’harmonie dans son environnement (sens de l’esthétisme);<br>- perçoit les relations entre les objets et l’espace, sait évaluer les distances;<br>- un sens inné de l’orientation;<br>- capacité à visualiser ses désirs et à imaginer les moyens de les concrétiser;<br>- s’exprime par des images et des comparaisons;<br>- sens aigu de l’observation, de l’ensemble comme du détail. ", 
  Professions:"Architecte, artiste, cartographe, chirurgien, cinéaste, coiffeur, décorateur, dentiste, designer, géographe, graphiste, guide touristique, ingénieur, maquilleur, marin, paysagiste, pilote, plasticien, publiciste.",
  Activites:"- Pratiquer des activités artistiques comme la sculpture, le dessin, l’art du costume ou du maquillage.<br>- S’adonner à des loisirs tels que les casse-tête et les jeux d’observation.<br>- S’exercer quotidiennement à visualiser, à imaginer des histoires, des scénarios, des dialogues, des parcours.<br>- Réaménager l’une des pièces de la maison. Dessiner un plan, puis le mettre à exécution.<br>- Se rendre dans une destination connue en empruntant des chemins différents.<br>- Pratiquer un sport faisant appel au sens de l’orientation (ski, randonnée, course d’orientation, catamaran…). "},
// Intelligence musicale
{ definition: "Cette forme d’intelligence appelle l’aptitude à avoir le sens du rythme, à ressentir, capter et produire une tonalité et un timbre; elle sous-tend l’appréciation des formes d’expression musicale. Les gens chez qui elle domine sont des auditifs purs. Ils savent comprendre les émotions ou les sentiments par le langage instrumental, vocal, les exclamations de joie, de peine, et savent les exprimer de la même façon. L’intelligence musicale est très complémentaire de l’intelligence corporelle / kinesthésique. Voici quelques caractéristiques observables :<br>- intuition basée sur le son, perception naturelle;<br>- comprend la structure musicale; a « l’oreille absolue »;<br>- reproduit, reconnaît ou crée des mélodies ou des rythmes, des sonates ou des concertos;<br>- meilleure concentration et gestion du stress par la musique, le rythme;<br>- créativité artistique ;<br>- capacité d’exprimer ses sentiments et de ressentir ceux des autres au moyen du chant, de la danse, de la chorégraphie,du timbre de la voix;<br>- capacité de mémoriser en utilisant les rythmes ou les sons.",
  Professions:"Accordeur de piano, chorégraphe, danseur, animateur, éducateur de la petite enfance, ingénieur du son, musicien, musicothérapeute, technicien audiovisuel, chef d’orchestre, chanteur, compositeur, imitateur, « bruiteur » (au théâtre, cinéma). " ,
  Activites:"- Participer à un atelier de voix ou à une chorale.<br>- S’exercer à reconnaître des sons différents, par exemple le chant des oiseaux.<br>- Écouter des styles différents de musique; observer leur effet sur son humeur ou ses émotions.<br>- Pratiquer un ou plusieurs instruments de musique, composer des suites d’accord, des chansons, etc.<br>- Aller régulièrement à des spectacles musicaux (concerts, opéra, comédie musicale…). " },
// Intelligence écologique

{ definition: "L’intelligence écologique est l’intelligence de base de l’être humain, celle qui lui a permis de survivre depuis toujours. On la définit par l’aptitude à discerner l’organisation du vivant. selections on sa culture et son environnement, elle se traduira par la faculté de l’individu à composer avec les conditions dans lesquelles il vit, dans le but de les améliorer. Voici quelques caractéristiques qu’on observe chez une personne à forte intelligence naturaliste :- aptitude à mettre les choses en lien avec l’environnement;<b>- sensibilité aux modifications de l’environnement, par exemple aux conditions météorologiques;<b>- perception sensorielle élevée;<b>- ressent de forts liens avec la nature, les animaux, les phénomènes naturels;<b>- sens de l’organisation, discernement;<b>- habileté à classifier, cataloguer, comparer;<b>- respect des autres « créatures » du monde ; l’écologie l’intéresse vraiment. ", 
  Professions:"Accordeur de piano, chorégraphe, danseur, animateur, éducateur de la petite enfance, ingénieur du son, musicien, musicothérapeute, technicien audiovisuel, chef d’orchestre, chanteur, compositeur, imitateur, « bruiteur » (au théâtre, cinéma). " ,
  Activites:"- Participer à un atelier de voix ou à une chorale.<br>- S’exercer à reconnaître des sons différents, par exemple le chant des oiseaux.<br>- Écouter des styles différents de musique; observer leur effet sur son humeur ou ses émotions.<br>- Pratiquer un ou plusieurs instruments de musique, composer des suites d’accord, des chansons, etc.<br>- Aller régulièrement à des spectacles musicaux (concerts, opéra, comédie musicale…). " },
// Intelligence kinesthésique
{ definition: "L’intelligence kinesthésique, c’est la faculté d’apprendre et de penser à partir de toutes les perceptions de son corps. Chez les personnes pour qui cette forme d’intelligence domine, on note un bon équilibre entre le corps et l’esprit. Elles aiment le mouvement, utilisent tous leurs sens pour se sentir dans l’action, savent soigner êtres humains, animaux. Voici comment on peut observer l’intelligence corporelle / kinesthésique:<br>- engagement physique dans la résolution d’un problème;<br>- préférence marquée pour l’action immédiate;<br>- communique par et avec le geste;<br>- conscience de son langage corporel et de celui des autres;<br>- le sens du toucher prédomine;<br>- aptitude à faire plusieurs choses en même temps;<br>- bonne gestion du stress;<br>- apprend très rapidement, capacité d’observation et d’imitation. ", 
  Professions:"Acrobate, acteur, clown, danseur, athlète, agriculteur, artisan, chirurgien, vétérinaire, ergonome, mécanicien,menuisier, physiothérapeute, ostéopathe, kinésithérapeute, pompier, professeur d’éducation physique, chef cuisinier, travailleur manuel." ,
  Activites:"- Pratiquer un sport ou une activité physique.<br>- Créer des choses de ses mains, par exemple par le bricolage.<br>- Faire des jeux de rôle ou des mimes, de l’improvisation théâtrale.<br>- En accomplissant ses tâches quotidiennes, prendre conscience de chaque geste.<br>- Aiguiser ses cinq sens (toucher, odorat, vue, goût, sens auditif) en pratiquant des activités variées comme la cuisine, les arts plastiques, le yoga, la danse, etc." },
// Intelligence verbale
{ definition: "Les personnes chez qui elle domine présentent une grande sensibilité aux sons, à la signification des mots et aux fonctions du langage. Ces individus sont souvent des amoureux de la langue et de grands lecteurs. Voici quelques caractéristiques d’une personne à dominance verbale / linguistique :<br>- pense en mots plutôt qu’en images;<br>- aime parler, écrire et expliquer;<br>- dotée d’un sens de l’humour qui se traduit entre autres par les calembours et les jeux de mots;<br>- vocabulaire varié et discours adapté à son interlocuteur;<br>- aptitude à communiquer ses idées, ses pensées et ses émotions par des mots;<br>- pouvoir de persuasion, aptitude à débattre et argumenter;<br>- a de la répartie. ", 
  Professions:"Animateur de radio ou de télévision, acteur, scénariste, attaché de presse, avocat, écrivain, éditeur, historien, interprète, journaliste, négociateur, politicien, professeur, traducteur, vendeur. " ,
  Activites:"- Faire des mots croisés ou s’adonner à des jeux de vocabulaire.<br>- Participer à des discussions.<br>- Apprendre un nouveau mot, une expression ou un adage chaque jour et s’efforcer de l’utiliser dans une conversation par la suite.<br>- Chercher l’origine de mots, d’expressions, et leur signification exacte.<br>- Écrire une histoire, faire des biographies, des interviews, etc.<br>- Apprendre par cœur des histoires drôles et les raconter.<br>- Aller au théâtre, écouter les humoristes, etc.<br>- Apprendre et pratiquer des langues étrangères, voyager.<br>- Lire les journaux, des magazines, des romans, de la poésie, etc. " },
// Intelligence logique

{ definition: "Les personnes chez qui cette forme d’intelligence prédomine présentent une grande sensibilité aux modèles logiques que l’on retrouve par exemple dans les sciences, les mathématiques, l’économie, le droit, etc. Elles excellent également à soutenir des raisonnements solides et à analyser l’information qu’elles reçoivent. Voici quelques caractéristiques d’une personne à dominance logique / mathématique :<br>- sens de la déduction ;<br>- s'explique souvent au moyen d’exemples précis et concrets ;<br>- facilité à composer avec l’abstrait, à utiliser les symboles, les figures géométriques, les formules ;<br>- raisonnement scientifique: aime démontrer des faits par l'expérimentation, preuves à l’appui;<br>- accepte difficilement l’idée du hasard et préfère les explications logiques ;<br>- organisation efficace et expression claire de sa pensée ;<br>- esprit d’analyse et de synthèse ;<br>- fonctionne souvent par « essai-erreur » ;<br>- aime trouver sa propre solution ou élaborer ses propres conclusions", 
  Professions:"Actuaire, analyste, avocat, juriste, banquier, comptable, informaticien, cuisinier, économiste, ingénieur,mécanicien, médecin, pharmacien, programmeur, scientifique, astrophysicien, urbaniste, géomètre, détective privé. " ,
  Activites:"- S’exercer à résoudre des problèmes mathématiques ou des énigmes.<br>- Jouer à des jeux de stratégie.<br>- Regarder des publicités d’un œil critique en essayant de déterminer les moyens utilisés pour amener le consommateur à acheter.<br>- Regarder des émissions scientifiques à la télévision.<br>- S’initier à un langage informatique, à une science.<br>- Lire des romans policiers.<br>- Apprendre et pratiquer la généalogie, l’astronomie, l’astrologie, etc. " }
];
(function() {
  var questions = [{
    //Interpersonnelle
     question: "J'aime organiser des activités sociales. ",
     choices: ['Oui','Non']},
     {question: "Je me préoccupe du bien-être des autres.",
     choices: ['Oui','Non']},
     {question: "Je suis ouvert aux opinions des autres.",
     choices: ['Oui','Non']},
     {question: "Je saisis facilement les sentiments et les émotions des autres.",
     choices: ['Oui','Non']},
     {question: "J'aide les gens à résoudre leurs problèmes et leurs conflits.",
     choices: ['Oui','Non']},
    //Intrapersonnelle
     {question: "J'aime me retrouver seul(e) pour travailler. ",
     choices: ['Oui','Non']},
     {question: "J'ai besoin de travailler à mon rythme dans des projets que j'ai choisis.",
     choices: ['Oui','Non']},
     {question: "Mes objectifs d'avenir sont bien définis.",
     choices: ['Oui','Non']},
     {question: "Je connais bien mes goûts et mes préférences.",
     choices: ['Oui','Non']},
     {question: "Je n'ai pas besoin de récompenses pour être motivé.",
     choices: ['Oui','Non']},
       //Spatiale
     {question: "À la lecture de la description d'un lieu, je me le représente facilement. ",
     choices: ['Oui','Non']},
     {question: "Je visualise facilement des objets ou des situations dans ma tête.",
     choices: ['Oui','Non']},
     {question: "Je m’oriente facilement dans un nouvel endroit. ",
     choices: ['Oui','Non']},
     {question: "J'adore dessiner. ",
     choices: ['Oui','Non']},
     {question: "J'ai un bon sens de l'observation. ",
     choices: ['Oui','Non']},
     //Musicale
     {question: "J'ai du rythme quand je danse. ",
     choices: ['Oui','Non']},
     {question: "J'aime taper des mains ou du pied en écoutant la musique. ",
     choices: ['Non','Oui']},
     {question: "Je peux facilement identifier divers styles de musique. ",
     choices: ['Oui','Non']},
     {question: "J'aime chanter sans musique (a capella). ",
     choices: ['Oui','Non']},
     {question: "Je trouve facilement des ressemblances entre des mélodies.",
     choices: ['Oui','Non']},
     //Écologique
     {question: "J'aime les livres parlant d'animaux.",
     choices: ['Oui','Non']},
     {question: "J'aime observer les oiseaux.",
     choices: ['Oui','Non']},
     {question: "J'aime les photographies de paysages illustrant la faune et la flore.",
     choices: ['Oui','Non']},
     {question: "J'ai toujours eu ou voulu avoir des animaux domestiques.",
     choices: ['Oui','Non']},
     {question: "J'aime aller à la ferme.",
     choices: ['Oui','Non']},
     //Kinesthésique
     {question: "J'aime la danse.",
     choices: ['Oui','Non']},
     {question: "Je suis très habile à démonter et à remonter des objets (moteur, calculatrice...). ",
     choices: ['Oui','Non']},
     {question: "J'aime improviser et jouer au théâtre.",
     choices: ['Oui','Non']},
     {question: "J'aime les arts parce que je peux travailler avec mes mains (dessin, couture...).",
     choices: ['Oui','Non']},
     {question: "J'aime imiter les gestes des autres.",
     choices: ['Oui','Non']},
    //Verbale 
     {question: "J'aime raconter des anecdotes et des plaisanteries. ",
     choices: ['Oui','Non']},
     {question: "J'adore écrire des lettres.",
     choices: ['Oui','Non']},
     {question: "J'aime les jeux impliquant des mots (scrabble, mots croisés, mots mystères...). ",
     choices: ['Oui','Non']},
     {question: "J'aime expliquer aux autres ce que j'ai appris. ",
     choices: ['Oui','Non']},
     {question: "J'aime écouter des histoires et des poèmes.",
     choices: ['Oui','Non']},
     //Logique 
     {question: "J'aime organiser l'information d'une façon structurée. ",
     choices: ['Oui','Non']},
     {question: "J'ai des arguments logiques pour expliquer ce que je fais.",
     choices: ['Oui','Non']},
     {question: "J'aime écouter des émissions scientifiques.",
     choices: ['Oui','Non']},
     {question: "J'aime les énigmes, les jeux d'enquête et de stratégies.  ",
     choices: ['Oui','Non']},
     {question: "Je comprends rapidement, je fais facilement des liens entre les idées.",
     choices: ['Oui','Non']}
   ];
  var answerChoix = [];
  var selections = []; //Array containing user choices
  var questionCounter = 0; //Tracks question number
  var quiz = $('#quiz'); //Quiz div object
  // Display initial question
  displayNext();
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose(); 
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Veuillez faire une sélection!');
    } else {     
     var answerR = document.getElementsByClassName('answerRadio');
  if (answerR[0].checked ) {
     answerChoix[questionCounter]=0;
  }else{
     answerChoix[questionCounter]=1;
  }
questionCounter++;
      displayNext();
    }
  }); 
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    answerR = document.getElementsByClassName('answerRadio');
    questionCounter--;
    if (answerR[0].checked ) {
    answerChoix[questionCounter]=0;
  }else{
     answerChoix[questionCounter]=1;
  }
    displayNext();
  });  
  // Click handler for the 'Recommencer' button
   $('.recom').on('click', function (e) {
     e.preventDefault(); 
    if(quiz.is(':animated')) {
      return false;
    }
     interpersonnelle=0;
     intrapersonnelle=0;
     spatiale=0;
     musicale=0;
     ecologique=0;
     kinesthesique=0;
     verbale=0;
     logique=0;
     tableResulta=[];
    questionCounter = 0;
    selections = [];
    displayNext();
    $('.start').hide();
     $('#nbTitle').show();
    document.getElementById("container").style.border  = "1px solid #eaeaea";
    document.getElementById("container").style.boxShadow  = "1px 2px 2px #cacaca";
  });

  $('.afich').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
   
    $('.start').hide();
    $('.resu').hide();
    document.getElementById("container").style.border  = "1px solid #eaeaea";
    document.getElementById("container").style.boxShadow  = "1px 2px 2px #cacaca";
  });
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    document.getElementById("container").style.border  = "1px solid #eaeaea";
    document.getElementById("container").style.boxShadow  = "1px 2px 2px #cacaca";
    var qElement = $('<div>', {
      id: 'question'
    });
    var header = $('<center ><br><h3 style="color:#0055A6;">' + (index + 1) + '/40</h2> <div class="progress" style="height: 20px"><div class="progress-bar"role="progressbar" style="width: '+(index*2.5)+'%;background: #0055A6;" aria-valuenow="'+(index*2.5)+'" aria-valuemin="0" aria-valuemax="100" > '+(index*2.5)+'%  </div> </div></center><br>');
    qElement.append(header);
    var question = $('<h4 class="titleQues">').append(questions[index].question);
    qElement.append(question);
    var radioButtons = createRadios(index);
    qElement.append(radioButtons); 
    return qElement;
  } 
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    var Alphas=['A','B'];
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<span style="color:#0055A6;">'+Alphas[i]+' - </span>  <input type="radio" name="answer" checked style="margin:15px 20px;" class="answerRadio"  value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#nbTitle').hide();
        $('#next').hide();
        $('#prev').hide();
        $('.start').show();
      }
    });
  }
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    document.getElementById("container").style.borderStyle  = "none";
    document.getElementById("container").style.boxShadow  = "none";
      for (var i = 0;i<answerChoix.length; i++) {
        if(answerChoix[i]==0){
        if (i<=4){
          interpersonnelle++;          
        }else if (i>=5 && i<10){
          intrapersonnelle++;
        }else if (i>=10 && i<15){
          spatiale++;
        }else if (i>=15 && i<20){
          musicale++;
        }else if (i>=20 && i<25){
          ecologique++;
        }else if (i>=25 && i<30){
          kinesthesique++;
        }else if (i>=30 && i<35){
          verbale++;
        }else{
          logique++;
        }
     }       
  }
    tableResulta[0]=interpersonnelle;
    tableResulta[1]=intrapersonnelle;
    tableResulta[2]=spatiale;
    tableResulta[3]=musicale;
    tableResulta[4]=ecologique;
    tableResulta[5]=kinesthesique;
    tableResulta[6]=verbale;
    tableResulta[7]=logique;
     score.append('<center class="resu"><img class="validTest" src="img/Valide.png " width="160"> <h2 style="color:#0055A6;">MERCI !<br>Fin de Test  </h2> </center>');
    return score;
  }
})();
function affichage(){
    var trouve = false;
    var cmp =0;
    for (var x = 0 ; x <= tableResulta.length; x++) {
      if (tableResulta[x]>=3){
          trouve=true;
          break;
        }
    }
$.each(resulta, function (i) {
        $( ".moreDetail" ).remove();
        if (trouve){
           if (tableResulta[i]>=3){
          var templateString = '<div class="card-group marg-Top-Bot eee" ><div class="col-lg-9 col-md-12"> <div class="card-body"><h2 style="color:#0055A6;" >' + resulta[i].nom + '</h2> <b><p>Définition</p></b> <h6>' + resulta[i].info + '</h6><hr><b><a style="float:right;color:black" href="#" onclick="detail('+i+');">plus...</a></b> </div></div><div class="col-lg-3 col-md-12"><div class="card-body"> <div class="progress-bar position" data-percent='+(tableResulta[i]*10)*2+' data-duration="2000" data-color="#ccc,#0055A6"></div> </div> </div> </div>';
    $('#container').append(templateString);
  $(".progress-bar").loading();
    $('input').on('click', function () {
       $(".progress-bar").loading();
    });
      }
        }
      else if (tableResulta[i]>0 && cmp<=3){
          var templateString = '<div class="card-group marg-Top-Bot eee" ><div class="col-lg-9 col-md-12"> <div class="card-body"><h2 style="color:#0055A6;" >' + resulta[i].nom + '</h2> <b><p>Définition</p></b> <h6>' + resulta[i].info + '</h6><hr><b><a style="float:right;color:black" href="#" onclick="detail('+i+');">plus...</a></b> </div></div><div class="col-lg-3 col-md-12"><div class="card-body"> <div class="progress-bar position" data-percent='+(tableResulta[i]*10)*2+' data-duration="2000" data-color="#ccc,#0055A6"></div> </div> </div> </div>';
    $('#container').append(templateString);
  $(".progress-bar").loading();
    $('input').on('click', function () {
       $(".progress-bar").loading();
    });
    cmp++;
      }      
});
}
  function detail(k){
    $( ".eee" ).remove();
   var templateString = '<div class="moreDetail"> <h2 style="color:#0055A6;;" >' + resulta[k].nom + '</h2> <b><p>Définition</p></b> <h6>' + resulDetail[k].definition + '</h6> <b><p>Professions</p></b><h6>' + resulDetail[k].Professions + '</h6> <b><p>Activités</p></b> <h6>' + resulDetail[k].Activites + '</h6>  <hr><div class="btnPrev" onclick="affichage()"; ><a href="#">Returner</a></div> </div>';
    $('#container').append(templateString);
  }
document.getElementById("container").style.background  = "white";