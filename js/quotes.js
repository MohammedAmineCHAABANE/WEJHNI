var proverb = [
  "Il Faut Viser La Lune, Parce Qu’au Moins, Si Vous Échouez, Vous Finirez Dans Les Étoiles.",
  "La Meilleure Façon De Prédire L’avenir Est De Le Créer.",
  "Le Désir De Bien Faire Est Un Puissant Moteur. Celui De Faire Du Bien Est Plus Puissant Encore.",
  "Le Pessimiste Dit : Je Croirai Quand Je Le Verrai.",
  "L’optimiste Dit : Je Le Verrai Quand Je Le Croirai. ",
  "Croyez En Vos Rêves Et Ils Se Réaliseront Peut-être. Croyez En Vous Et Ils Se Réaliseront Sûrement. ",
  "Si Vous Pouvez Le Rêver, Vous Pouvez Le Faire.",
  "Tenez-vous À L’écart Des Gens Qui Freinent Vos Ambitions. Les Petits Esprits Font Toujours Cela. Les Plus Grands Esprits Seuls Vous Font Sentir Que Vous Aussi, Pouvez Devenir Grand. ",
  "Le Seul Endroit Où Le Succès Précède Le Travail Est Dans Le Dictionnaire. ",
  "Le But De La Vie, Ce N’est Pas L’espoir De Devenir Parfait, C’est La Volonté D’être Toujours Meilleur.",
  "Il N’y A Qu’une Façon D’échouer, C’est D’abandonner Avant D’avoir Réussi.",
  "Ne Craignez Pas La Perfection, Vous N’y Parviendrez Jamais.",
  "En Suivant Le Chemin Qui S’appelle Plus Tard, Nous Arrivons Sur La Place Qui S’appelle Jamais.",
  "Les Obstacles Sont Ces Choses Effrayantes Que Vous Apercevez Lorsque Vous Détournez Les Yeux De Vos Objectifs.",
  "Pour Pouvoir Contempler Un Arc-en-ciel, Il Faut D’abord Endurer La Pluie. ",
  "Les Espèces Qui Survivent Ne Sont Pas Les Espèces Les Plus Fortes, Ni Les Plus Intelligentes, Mais Celles Qui S’adaptent Le Mieux Aux Changements.",
  "Il Est Difficile D’échouer. Mais Il Est Encore Plus Difficile De Ne Pas Avoir Essayé De Réussir. ",
  "Agissez Toujours Comme S’il Était Impossible D’échouer. ",
  "L’échec Est L’épice Qui Donne Sa Saveur Au Succès.",
  "L’échec N’est Qu’une Opportunité Pour Recommencer La Même Chose Plus Intelligemment."];

function getRandomInt() {
  var index = Math.floor(Math.random() * proverb.length);
  document.getElementById("pro").innerHTML = proverb[index];

}
getRandomInt();