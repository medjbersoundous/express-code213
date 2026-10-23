1. Créez un projet Express nommé `mini-boutique`.

2. Créez un fichier `data.js` contenant un tableau de produits. Chaque produit doit avoir un `id`, un `name`, un `price` et une `image`: Ordinateur (120000 DA), Téléphone (65000 DA) et Casque (8000 DA).

3. Créez un dossier `public` contenant les fichiers `index.html`, `products.html`, `style.css` et un dossier `images` contenant une image pour chaque produit.

5. Créez une page `index.html` contenant un titre, une description de la boutique et un lien vers la page des produits.

6. Créez une page `products.html` affichant les images et les informations des trois produits. Ajoutez un fichier CSS pour améliorer la présentation.

7. Créez des routes: GET /products : retourner la liste des produits au format JSON.

GET /products/:id : retourner les informations d'un produit à partir de son identifiant.

POST /products : ajouter un nouveau produit.

DELETE /products/:id : supprimer un produit à partir de son identifiant.

8. Créez un middleware `checkAdmin` dans le dossier `middlewares`. Ce middleware doit vérifier si le paramètre `admin` dans l'URL est égal à `true`. Si c'est le cas, la requête continue avec `next()`, sinon, retournez le statut `403` avec le message « Accès interdit ». exemple : app.get("/admin/:admin", checkAdmin, fct controller);
Testez les URLs suivantes :
GET /admin/true
GET /admin/false

9. Créez une route `GET /admin` qui utilise le middleware `checkAdmin` et retourne le message « Bienvenue dans l'administration ».
