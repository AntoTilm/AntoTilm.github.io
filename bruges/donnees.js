/* =====================================================================
   Bruges · 14–15 novembre 2026 — TOUT LE CONTENU DU SITE EST ICI
   ---------------------------------------------------------------------
   Pour modifier le site : changer ce fichier, incrémenter VERSION dans
   sw.js, puis publier. Voir README.md.

   - jours[].etapes : le programme, dans l'ordre. h = heure "16:15"
       (vide pour une étape sans heure : quand = le mot affiché, vers = l'heure
       à partir de laquelle elle compte comme « en cours »), maps = adresse pour
       Google Maps, histoire = l'anecdote (dépliable et lisible à voix haute)
   - adresses : nos adresses, rangées par moment (moment = titre du groupe)
   - hote : la liste de notre hôte, avec notre verdict
   - checklist : les choses à faire avant de partir (cochables)
   Vérifications web : 12 et 13 novembre 2026. Re-vérifier sur place.
   ===================================================================== */

window.BRUGES = {
  maj: "13 novembre 2026",

  jours: [
    {
      id: "samedi", date: "2026-11-14", nom: "Samedi",
      titre: "Canaux au soleil et Belfort au coucher du soleil",
      intro: "Une seule réservation compte : le Belfort vers 16 h 15. Le reste se fait à pied, sans se presser, par les quais calmes du nord.",
      meteo: "Ciel dégagé, environ 8 h de soleil. 7 °C l'après-midi, gel au réveil.",
      soleil: { lever: "08:02", coucher: "16:59", nuit: "17:37" },
      parcours: {
        texte: "Le parcours de l'après-midi sur Maps",
        etapes: ["Langerei, 8000 Brugge", "Jan van Eyckplein, 8000 Brugge", "Vlamingstraat 35, 8000 Brugge", "Burg, 8000 Brugge", "Vismarkt, 8000 Brugge", "Rozenhoedkaai, 8000 Brugge"],
        arrivee: "Belfort, Markt 7, 8000 Brugge"
      },
      etapes: [
        {
          h: "14:00", titre: "Arrivée",
          texte: "Chambre disponible dès 14 h. Gardez 8 € en espèces pour la taxe de séjour (4 € par personne et par nuit). En voiture : déposez les sacs, puis garez-vous au parking gratuit Lodewijk Coiseaukaai, à 10 minutes à pied.",
          maps: "Lodewijk Coiseaukaai, 8000 Brugge", lienMaps: "Voir le parking", voir: true
        },
        {
          h: "14:45", titre: "Les quais du nord",
          texte: "Descendez la Langerei puis la Spiegelrei jusqu'au Jan van Eyckplein. Peu de monde, l'eau immobile, des façades à pignons.",
          maps: "Jan van Eyckplein, 8000 Brugge",
          histoire: "Le Jan van Eyckplein était le cœur du Bruges hanséatique, là où arrivaient les marchandises. Le Tolhuis, l'ancien tonlieu, y percevait la taxe sur tout ce qui entrait en ville ; sa façade de pierre date de 1477. En face, à l'angle de l'Academiestraat, cherchez dans sa niche l'ours de la Poortersloge, sculpté en 1417. Selon la légende, c'est le plus vieil habitant de Bruges : le comte Baudouin l'aurait tué dans la forêt où la ville allait naître, et l'ours est resté dans les armes de Bruges."
        },
        {
          h: "15:15", titre: "La première « bourse »",
          texte: "Vlamingstraat 35, la maison Ter Beurze. Une façade discrète, pour un mot que vous employez tous les jours.",
          maps: "Huis ter Beurze, Vlamingstraat 35, 8000 Brugge",
          histoire: "La famille Van der Beurze tenait ici une auberge où se retrouvaient les marchands de toute l'Europe, surtout ceux de Gênes, de Florence et de Venise. On allait « ter Beurze », chez les Beurze, pour connaître les taux de change et signer des contrats. Le mot « bourse » viendrait de leur nom. Puis l'estuaire du Zwin s'est ensablé, la mer s'est éloignée, et à la fin du XVe siècle la finance est partie à Anvers."
        },
        {
          h: "15:30", titre: "Burg, ruelle de l'Âne aveugle, Rozenhoedkaai",
          texte: "Sur le Burg, l'hôtel de ville et la basilique du Saint-Sang. Passez sous l'arche de la Blinde-Ezelstraat, traversez le marché aux poissons, puis rejoignez le Rozenhoedkaai, la vue carte postale, dans la lumière dorée.",
          option: "30 minutes de bateau, si les bateaux tournent encore (garantis jusqu'à mi-novembre, dernier départ à 17 h 30).",
          maps: "Rozenhoedkaai, 8000 Brugge",
          histoire: "L'hôtel de ville a été commencé en 1376. C'est l'un des plus anciens des anciens Pays-Bas, et Bruges est gouvernée depuis ses murs depuis plus de six siècles."
        },
        {
          h: "16:15", titre: "Le Belfort au coucher du soleil", resa: true,
          texte: "366 marches pour 83 m de haut, et toute la ville en contrebas au moment où le soleil se couche, à 16 h 59. Ouvert jusqu'à 20 h le samedi, dernière entrée à 19 h. Réservez le créneau en ligne, le prix s'affiche à la réservation.",
          maps: "Belfort, Markt 7, 8000 Brugge",
          liens: [{ texte: "Réserver le Belfort", url: "https://www.museabrugge.be/en/visit-our-museums/our-museums-and-monuments/belfort/practically" }],
          histoire: "Là-haut pendent 47 cloches, environ 27,5 tonnes de bronze. Le Belfort est aussi le décor central de « Bons baisers de Bruges » (In Bruges, 2008) : Ken y grimpe pour la vue, mais la grande scène du sommet a été tournée en studio, l'escalier étant trop étroit pour une équipe de film. En redescendant, regardez la maison Craenenburg sur le Markt, aujourd'hui un café : en 1488, les Brugeois révoltés y ont enfermé Maximilien d'Autriche pendant environ quatre mois. Retenez ce nom, il revient dimanche."
        },
        {
          h: "17:15", titre: "L'heure bleue",
          texte: "Redescendez vers le Groenerei et le Rozenhoedkaai : les façades s'allument et les canaux font miroir. Il fait nuit vers 17 h 40.",
          maps: "Groenerei, 8000 Brugge"
        },
        {
          h: "17:45", titre: "Apéro à De Garre",
          texte: "Une ruelle large comme une porte, à deux pas du Markt. La Tripel maison fait 11 % : elle arrive avec des dés de fromage, et c'est trois verres maximum par personne.",
          maps: "De Garre 1, 8000 Brugge"
        },
        {
          h: "19:30", titre: "Dîner", resa: true,
          texte: "Notre choix : Gran Kaffee De Passage, cuisine belge simple à la bougie, petits prix. Plus intime : Tom's Diner, environ 30 € par personne. Plan B : Freddy's by Kok au Vin.",
          maps: "Gran Kaffee De Passage, Dweersstraat 26, 8000 Brugge", lienMaps: "À pied jusqu'à Passage",
          liens: [{ texte: "Réserver chez Passage", url: "https://www.passagebruges.com/en/dining/" }],
          voirAdresses: true
        },
        {
          h: "", quand: "Ensuite", vers: "21:15", titre: "Un dernier verre",
          texte: "'t Brugs Beertje, à 5 minutes à pied de Passage, ou De Republiek, ouvert tard. Puis retour à pied par les canaux éclairés.",
          maps: "'t Brugs Beertje, Kemelstraat 5, 8000 Brugge", lienMaps: "À pied jusqu'au Beertje"
        }
      ],
      apres: {
        titre: "Envie d'un guide ?",
        texte: "Pour les anecdotes racontées par quelqu'un du coin, remplacez la balade de 14 h 45 à 15 h 30 par un free tour de 2 h en français, au pourboire, au départ du Markt.",
        lien: { texte: "Voir le free tour en français", url: "https://www.guruwalk.com/fr/walks/30794-free-historical-tour-bruges-visit-all-the-highlights-incl-chocolate-treat-3-discount-on-boat-tour" }
      }
    },
    {
      id: "dimanche", date: "2026-11-15", nom: "Dimanche",
      titre: "Déjeuner au bord de l'eau, puis Michel-Ange",
      intro: "Nuageux, averses possibles : une courte balade au nord, un vrai déjeuner, puis le sud de la ville, où tout est couvert et à deux pas.",
      meteo: "Nuageux avec des averses possibles, 11 °C, à peine une heure de soleil.",
      soleil: { lever: "08:04", coucher: "16:58", nuit: "17:35" },
      parcours: {
        texte: "Le parcours de dimanche sur Maps",
        etapes: ["Du Phare, Sasplein 2, 8000 Brugge", "Sint-Janshuismolen, Kruisvest, 8000 Brugge", "Café Vlissinghe, Blekersstraat 2, 8000 Brugge", "Onze-Lieve-Vrouwekerk, Mariastraat, 8000 Brugge", "Brouwerij De Halve Maan, Walplein 26, 8000 Brugge", "Begijnhof, 8000 Brugge"],
        arrivee: "Minnewater, 8000 Brugge"
      },
      etapes: [
        {
          h: "", quand: "Matin", vers: "07:00", titre: "Matinée libre",
          texte: "Petit-déjeuner inclus, départ de la chambre à 11 h, bagages dans le coffre. Le dimanche de 11 h à midi, le carillonneur joue sur les cloches du Belfort."
        },
        {
          h: "12:00", titre: "Déjeuner au Du Phare",
          texte: "Un pub-bistro installé dans une ancienne porte de la ville, sur une petite île à la pointe nord. Cuisine flamande teintée d'ailleurs, prix doux, ouvert dès 11 h 30.",
          maps: "Du Phare, Sasplein 2, 8000 Brugge"
        },
        {
          h: "13:30", titre: "Les moulins et le quartier Sainte-Anne",
          texte: "Longez les remparts du Kruisvest et leurs quatre moulins, puis entrez dans Sainte-Anne, le quartier résidentiel le plus tranquille. S'il souffle trop, filez directement au café.",
          maps: "Sint-Janshuismolen, Kruisvest, 8000 Brugge",
          histoire: "Des moulins tournent sur ces remparts depuis la fin du XIIIe siècle. Le Sint-Janshuismolen, construit en 1770, est toujours à sa place d'origine : c'est le seul des quatre qui moud encore du grain. Il ne se visite que d'avril à septembre, mais la butte est libre toute l'année."
        },
        {
          h: "14:15", titre: "Café Vlissinghe, près du poêle",
          texte: "Cité dès 1515, c'est le plus vieux café de Bruges. En hiver, on s'installe près du poêle. Ouvert le dimanche de 11 h à 19 h.",
          maps: "Café Vlissinghe, Blekersstraat 2, 8000 Brugge",
          histoire: "Son décor « d'époque » doit beaucoup aux brasseurs De Meulemeester, propriétaires au XIXe et au début du XXe siècle, qui n'ont rien épargné pour l'aménager à l'ancienne. Tout près, la Jeruzalemkerk a joué la basilique du Saint-Sang dans « Bons baisers de Bruges » : l'équipe n'avait pas obtenu l'autorisation de tourner dans la vraie."
        },
        {
          h: "15:15", titre: "La Madone de Michel-Ange",
          texte: "À l'église Notre-Dame. Dimanche de 13 h 30 à 17 h, 8 € pour la partie musée ; la nef est gratuite.",
          maps: "Onze-Lieve-Vrouwekerk, Mariastraat, 8000 Brugge",
          histoire: "Après Florence, la suite logique : c'est la seule statue de Michel-Ange partie d'Italie de son vivant. Emportée à Paris sous la Révolution, rendue après Waterloo, volée par les nazis en 1944 puis retrouvée dans une mine de sel en Autriche : c'est l'histoire du film « Monuments Men ». Levez aussi les yeux vers la loge des Gruuthuse, reliée à leur palais : la famille suivait la messe sans se mêler à la foule. Leur fortune venait du gruut, le mélange d'herbes qui parfumait la bière avant le houblon, puis d'une taxe sur presque toute la bière de la ville."
        },
        {
          h: "16:00", titre: "Brasserie De Halve Maan",
          texte: "À deux minutes de Notre-Dame. Visite de 45 minutes en français avec une bière, 16 € : réservez un créneau en français.",
          maps: "Brouwerij De Halve Maan, Walplein 26, 8000 Brugge",
          liens: [{ texte: "Réserver la visite", url: "https://www.halvemaan.be/en/visit/brewery" }],
          histoire: "Selon la légende, la Brugse Zot, « le fou de Bruges », vient encore de Maximilien d'Autriche. Les Brugeois lui demandaient de financer un nouvel asile ; il aurait répondu qu'il n'avait vu que des fous de toute la journée. Aujourd'hui, la bière part vers l'usine d'embouteillage par un pipeline de 3,3 km sous la ville."
        },
        {
          h: "16:45", titre: "Béguinage et Minnewater",
          texte: "Gratuits et silencieux, à faire avant la nuit. Ensuite, comptez 30 à 35 minutes à pied jusqu'au parking du nord.",
          maps: "Minnewater, 8000 Brugge",
          histoire: "Les cygnes sont là par obligation, dit la légende. En 1488, les Brugeois ont exécuté Pieter Lanchals, conseiller de Maximilien d'Autriche : son nom sonnait comme « lange hals », long cou, et ses armes portaient un cygne. Maximilien aurait condamné la ville à entretenir des cygnes sur ses canaux pour l'éternité. Les historiens en doutent : il y avait des cygnes à Bruges bien avant lui."
        }
      ],
      apres: {
        titre: "S'il pleut fort",
        texte: "Restez dans le sud : musées, brasserie et cafés y sont à cinq minutes les uns des autres.",
        liste: [
          { titre: "Groeningemuseum", texte: "Dijver 12. Van Eyck, Memling, et le Jugement dernier de Jérôme Bosch, celui qui joue un rôle clé dans « Bons baisers de Bruges ». En général de 9 h 30 à 17 h ; vérifiez les horaires d'hiver.", maps: "Groeningemuseum, Dijver 12, 8000 Brugge" },
          { titre: "Hôpital Saint-Jean", texte: "Mariastraat 38. L'un des plus vieux bâtiments hospitaliers d'Europe (XIIe siècle), avec des Memling.", maps: "Sint-Janshospitaal, Mariastraat 38, 8000 Brugge" },
          { titre: "Musea Brugge Card", texte: "33 € par personne pour 72 h : rentable seulement à partir de trois sites payants." },
          { titre: "Les cafés", texte: "De Garre et Vlissinghe tiennent très bien un après-midi pluvieux." }
        ]
      }
    }
  ],

  /* Nos adresses, par moment. choix: true = notre choix. */
  adresses: [
    { moment: "Samedi soir", nom: "Gran Kaffee De Passage", choix: true, adresse: "Dweersstraat 26",
      texte: "Le restaurant d'un hôtel-auberge Art déco : bougies, miroirs, classiques belges généreux comme la carbonade.",
      horaires: "Samedi 12 h–22 h, dimanche 17 h–22 h", lien: { texte: "Réserver", url: "https://www.passagebruges.com/en/dining/" } },
    { moment: "Samedi soir", nom: "Tom's Diner", adresse: "West-Gistelhof 23",
      texte: "Vieille maison flamande chaleureuse, clientèle locale, environ 30 € par personne. Petite salle : réservez.",
      horaires: "Fermé dimanche et lundi" },
    { moment: "Samedi soir", nom: "Freddy's by Kok au Vin", adresse: "Sint-Jakobsstraat 63",
      texte: "Le bistro belgo-français « honnête » de l'équipe de Kok au Vin, ouvert en 2025, décor rétro années 60-70. Notre plan B.",
      horaires: "Du mardi au samedi, à réserver" },
    { moment: "Dimanche midi", nom: "Du Phare", choix: true, adresse: "Sasplein 2",
      texte: "Pub-bistro au bord de l'eau, prix doux, concerts de jazz ou de blues au moins une fois par mois.",
      horaires: "Samedi et dimanche dès 11 h 30" },
    { moment: "Apéro et verres", nom: "De Garre", choix: true, adresse: "De Garre 1",
      texte: "La Tripel maison à 11 %, dans une ruelle qu'on rate facilement.",
      horaires: "Samedi 11 h–1 h, dimanche 12 h–minuit" },
    { moment: "Apéro et verres", nom: "Bar Rose Red", adresse: "Cordoeaniersstraat 16",
      texte: "Bar cosy spécialisé en trappistes, tapas pour grignoter. Réservation conseillée.",
      horaires: "Le soir" },
    { moment: "Apéro et verres", nom: "'t Brugs Beertje", adresse: "Kemelstraat 5",
      texte: "Le café des amateurs de bière depuis 1983 : environ 300 bières et des planches de fromage.",
      horaires: "Fin d'après-midi et soirée" },
    { moment: "Apéro et verres", nom: "De Republiek", adresse: "Sint-Jakobsstraat 36",
      texte: "Grand café collé à un cinéma, cour intérieure, public jeune. Pour un verre tard, moins pour manger.",
      horaires: "Ouvert tard" },
    { moment: "Café et goûter", nom: "Café Vlissinghe", choix: true, adresse: "Blekersstraat 2",
      texte: "Le plus vieux café de Bruges, poêle en hiver.",
      horaires: "Samedi 11 h–22 h, dimanche 11 h–19 h" },
    { moment: "Café et goûter", nom: "Lizzie's Wafels", adresse: "Sint-Jakobsstraat 16",
      texte: "Gaufre de Liège maison pour quelques euros ; la grande se partage à deux.",
      horaires: "Du mercredi au dimanche, 13 h–18 h" }
  ],

  /* La liste de notre hôte. verdict : oui, verre, depannage, inutile, non */
  hote: [
    { nom: "Bistro Du Phare", adresse: "Sasplein 2", verdict: "oui", libelle: "Oui, dimanche midi", texte: "Au bord de l'eau, prix doux, ouvert le week-end dès 11 h 30." },
    { nom: "Tom's Diner", adresse: "West-Gistelhof 23", verdict: "oui", libelle: "Oui, samedi soir", texte: "Chaleureux et local, environ 30 € par personne. Fermé dimanche et lundi." },
    { nom: "Bar Rose Red", adresse: "Cordoeaniersstraat 16", verdict: "oui", libelle: "Oui, pour un verre", texte: "Trappistes et tapas, cosy." },
    { nom: "Quatre Vins", adresse: "Philipstockstraat 8", verdict: "oui", libelle: "Oui, si envie de vin", texte: "Bib Gourmand, assiettes à partager, ambiance animée. Vite plus cher qu'un bistro. Fermé dimanche." },
    { nom: "Belle Histoire", adresse: "Calvariebergstraat 49", verdict: "oui", libelle: "Oui, pour un midi", texte: "Pub-bistro de quartier, plats du jour, bon rapport qualité-prix. Horaires à vérifier." },
    { nom: "De Republiek", adresse: "Sint-Jakobsstraat 36", verdict: "verre", libelle: "Pour un verre", texte: "Animé et ouvert tard ; la cuisine est jugée chère pour ce qu'elle est." },
    { nom: "The Beerwall", adresse: "Wollestraat 53", verdict: "verre", libelle: "Pour la vue", texte: "Bar à bières au bord du canal, en plein circuit touristique." },
    { nom: "The Potato Bar", adresse: "Sint-Amandsstraat 31", verdict: "depannage", libelle: "Dépannage", texte: "Frites, burgers, croquettes, 8 à 12 € la portion. Avis mitigés sur le prix." },
    { nom: "Wuakamole", adresse: "Langestraat 93", verdict: "depannage", libelle: "Dépannage", texte: "Street food latino pas chère, mais pas très « Bruges »." },
    { nom: "Brazila", adresse: "Mallebergplaats 1", verdict: "depannage", libelle: "Pour un café", texte: "Torréfacteur depuis 1930." },
    { nom: "Kaffee Kamiel", adresse: "Zilverpand 7", verdict: "inutile", libelle: "Samedi seulement", texte: "All-day breakfast et lunch, fermé le dimanche." },
    { nom: "That's Toast", adresse: "Dweersstraat 4", verdict: "inutile", libelle: "Inutile", texte: "Brunch de 8 h 30 à 16 h ; votre petit-déjeuner est déjà inclus." },
    { nom: "Kok au Vin", adresse: "Ezelstraat 21", verdict: "non", libelle: "Non", texte: "Devenu Locàle by Kok au Vin : assiettes « gastro », €€€ au Michelin. Fermé dimanche." }
  ],
  horsBudget: "Le gril au feu de bois de Koen & Marijke (ex-In 't Nieuw Museum) est tentant, mais la bavette y coûte 46 €.",

  checklist: [
    "Réserver le dîner de samedi (Passage ou Tom's Diner)",
    "Réserver le Belfort, créneau vers 16 h 15",
    "Si envie : réserver la visite en français de Halve Maan, dimanche",
    "8 € en espèces pour la taxe de séjour, et de la monnaie pour les cafés",
    "Bonnet et gants pour samedi, veste de pluie pour dimanche",
    "Ajouter ce site à l'écran d'accueil du téléphone"
  ],

  infos: [
    { titre: "Le logement", texte: "Chambre disponible dès 14 h, départ dimanche à 11 h. Petit-déjeuner inclus." },
    { titre: "La voiture", texte: "Parking gratuit Lodewijk Coiseaukaai, à 10 minutes à pied, en face des bureaux de police. Déposez les sacs d'abord.", maps: "Lodewijk Coiseaukaai, 8000 Brugge" },
    { titre: "La taxe de séjour", texte: "4 € par personne et par nuit, soit 8 € en espèces à l'arrivée." },
    { titre: "Pas de marché de Noël", texte: "Winter Glow ne démarre que le 20 novembre : vous le ratez d'une semaine, mais la ville sera plus calme." }
  ],
  meteo: {
    lien: "https://meteoblue.com/en/weather/week/bruges_belgium_2800931",
    note: "Prévisions du vendredi 13 novembre."
  },

  sources: [
    { texte: "Météo : meteoblue, Bruges", url: "https://meteoblue.com/en/weather/week/bruges_belgium_2800931" },
    { texte: "Belfort, horaires et réservation (Musea Brugge)", url: "https://www.museabrugge.be/en/visit-our-museums/our-museums-and-monuments/belfort/practically" },
    { texte: "Notre-Dame et la Madone (Musea Brugge)", url: "https://www.museabrugge.be/en/visit-our-museums/our-museums-and-monuments/onze-lieve-vrouwekerk/practically" },
    { texte: "Musea Brugge Card", url: "https://www.museabrugge.be/en/visit" },
    { texte: "Halve Maan, visites", url: "https://www.halvemaan.be/en/visit/brewery" },
    { texte: "Bateaux sur les canaux (Ville de Bruges)", url: "https://bezoekers.brugge.be/en/bruggemetdeboot" },
    { texte: "Hôtel de ville (Visit Bruges)", url: "https://www.visitbruges.be/en/stadhuis-city-hall" },
    { texte: "Sint-Janshuismolen (Musea Brugge)", url: "https://www.museabrugge.be/en/visit/locations/sint-janshuismolen" },
    { texte: "La Poortersloge et son ours", url: "https://visit-bruges.be/see/monuments/burghers-lodge-poortersloge" },
    { texte: "Le Tolhuis (Routard)", url: "https://www.routard.com/fr/guide/europe/belgique/bruges/van-eyckplein-place-van-eyck" },
    { texte: "La Bourse de Bruges (Wikipédia)", url: "https://en.wikipedia.org/wiki/Bourse_at_Bruges" },
    { texte: "L'origine du mot « Bourse » (BFM Bourse)", url: "https://www.tradingsat.com/actualites/informations-societes/mais-au-fait-d-ou-vient-le-mot-bourse-1142560.html" },
    { texte: "La Madone de Bruges (Wikipédia)", url: "https://en.wikipedia.org/wiki/Madonna_of_Bruges" },
    { texte: "Le Belfort et ses cloches (Wikipédia)", url: "https://en.wikipedia.org/wiki/Belfry_of_Bruges" },
    { texte: "Lieux de tournage de « In Bruges »", url: "https://almostginger.com/?p=14453" },
    { texte: "La légende des cygnes (Visit Bruges)", url: "https://acc.visitbruges.be/the-story-of-the-bruges-swan-brugsch-swaentje-" },
    { texte: "Les cygnes, une légende discutée", url: "https://www.the500hiddensecrets.com/belgium/bruges/discover/unexpected-animals" },
    { texte: "Louis de Gruuthuse et la taxe du gruut (Musea Brugge)", url: "https://www.museabrugge.be/en/news/wie-was-lodewijk-van-gruuthuse-1" },
    { texte: "Vlissinghe, brochure Open Monumentendag 2012", url: "https://core.ac.uk/download/55860705.pdf" },
    { texte: "Vlissinghe, horaires (Visit Bruges)", url: "https://acc.visitbruges.be/en/cafes/cafevlissinghe-2" },
    { texte: "De Garre (Visit Bruges)", url: "https://acc.visitbruges.be/en/cafes/degarre-2" },
    { texte: "Du Phare (Visit Bruges)", url: "https://acc.visitbruges.be/en/cafes/duphare-2" },
    { texte: "Gran Kaffee De Passage, horaires", url: "https://www.passagebruges.com/en/dining/" },
    { texte: "Tom's Diner, budget (avis local)", url: "https://www.airbnb.gy/things-to-do/places/165385" },
    { texte: "Quatre Vins (Michelin)", url: "https://guide.michelin.com/se/en/west-vlaanderen/brugge/restaurant/quatre-vins" },
    { texte: "Locàle by Kok au Vin (Visit Bruges)", url: "https://acc.visitbruges.be/en/restaurants/kokauvin-2" },
    { texte: "Koen & Marijke, menu", url: "https://koen-marijke.be/menu" },
    { texte: "Winter Glow 2026", url: "https://www.nomadotravel.app/en/guides/bruges-christmas-market-guide" }
  ]
};
