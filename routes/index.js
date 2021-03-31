var express = require('express');
var fs = require('fs');
var router = express.Router();
const nomFichier = './json_datas/infos_movies.json'
// On déclare la const monfichier e lui assignant le non du ficier .json contennat les informations en format json de mesInfosArtciles
/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile(nomFichier, 'utf8',
    // en utilisant le utf8 j evite d'utiliser la fonction la methode to string
    function (err, data) {
      if (err) {
        return (console.log('y a une erreur' + err));
      }
      // pas besoin de mettre le esle de if 
      // console.log(data);
      let mesInfosArticles = JSON.parse(data);
      // console.log(bufferEnUtf8);
      res.render('index', { title: 'Express', infos: mesInfosArticles });
    });
  // on commnete le let mesInfosArticles =... après avoir créer un dossier infos_movies.json contenant le tableau contenu ds la variable mesInfosArticles
  // let mesInfosArticles = [{ titreTemplateInfo: "Mon premier super film", imageArtclInfo: "images/amon.jpg" }, { titreTemplateInfo: "Mon deuxième super film", imageArtclInfo: "images/viking.jpg" }, { titreTemplateInfo: "Mon troisième super film", imageArtclInfo: "images/gunjan.jpg" }];
  // toujours redemarer le serveur ctrl + C pour raffraichir les info coté serveur
  // infos: mesInfosArticles est la nouvelles variable qui est utilisé comme variable infos dans index.pug
});

module.exports = router;
