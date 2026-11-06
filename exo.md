# Agence de location de voitures
## 1. Modèles de la base de données
| Modèle | Attributs |
|---|---|
| Admin | name, email, password |
| Customer | name, email, password, phone |
| Category | name, description |
| Car | brand, model, year, pricePerDay, status, category_id |
| Rental | customer_id, car_id, startDate, endDate, totalPrice, status |
## 2. Fonctionnalités requises
### Admin
- Créer un compte Admin.
- Se connecter.
### Customer
- Créer un compte.
- Se connecter.
- Afficher tous les clients.
- Afficher les détails d'un client.
### Category
- Ajouter une catégorie.
- Afficher toutes les catégories.
- Afficher une catégorie par ID.
- Modifier une catégorie.
- Supprimer une catégorie.
### Car
- Ajouter une voiture.
- Afficher toutes les voitures.
- Afficher les voitures disponibles.
- Afficher les détails d'une voiture.
- Modifier une voiture.
- Supprimer une voiture.
### Rental
- Créer une demande de réservation.
- Afficher toutes les réservations.
- Afficher les détails d'une réservation.
- Afficher l'historique des réservations d'un client.
- Modifier une réservation.
- Confirmer ou refuser une demande de réservation.
- Annuler une réservation.
## 3. Règles de gestion
1. Une voiture ne peut pas être louée si son statut est `unavailable`.
2. La date de fin doit être postérieure à la date de début.
3. Le prix total est calculé automatiquement :
   `totalPrice = numberOfDays * pricePerDay`
4. Lorsqu'une réservation est créée, son statut par défaut est `pending`.
5. Le statut d'une réservation peut être `pending`, `confirmed`, `rejected` ou `cancelled`.
6. Le statut d'une voiture peut être `available` ou `unavailable`.
7. Les adresses e-mail doivent être uniques.
8. Les mots de passe ne doivent jamais être enregistrés en clair dans la base de données.