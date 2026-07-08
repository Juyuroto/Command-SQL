const sqlCommands = [
  // --- Sélection & Filtrage (DQL) ---
  {
    id: 1,
    category: 'Sélection & Filtrage (DQL)',
    name: 'SELECT',
    description: 'Permet de sélectionner et d\'extraire des données à partir d\'une ou plusieurs tables.',
    example_code: 'SELECT nom, prenom FROM utilisateurs;'
  },
  {
    id: 2,
    category: 'Sélection & Filtrage (DQL)',
    name: 'WHERE',
    description: 'Filtre les enregistrements pour ne garder que ceux qui respectent une condition précise.',
    example_code: 'SELECT * FROM produits WHERE prix > 50 AND stock > 0;'
  },
  {
    id: 3,
    category: 'Sélection & Filtrage (DQL)',
    name: 'ORDER BY',
    description: 'Trie le résultat d\'une requête par ordre croissant (ASC) ou décroissant (DESC).',
    example_code: 'SELECT * FROM clients ORDER BY date_inscription DESC;'
  },
  {
    id: 4,
    category: 'Sélection & Filtrage (DQL)',
    name: 'LIMIT / OFFSET',
    description: 'Restreint le nombre de résultats retournés et permet de sauter un nombre de lignes (pagination).',
    example_code: 'SELECT * FROM articles ORDER BY cree_le DESC LIMIT 10 OFFSET 20;'
  },
  {
    id: 5,
    category: 'Sélection & Filtrage (DQL)',
    name: 'LIKE / ILIKE',
    description: 'Recherche un motif spécifique dans une chaîne. ILIKE est insensible à la casse (spécifique PostgreSQL).',
    example_code: "SELECT * FROM utilisateurs WHERE email ILIKE '%@gmail.com';"
  },
  {
    id: 6,
    category: 'Sélection & Filtrage (DQL)',
    name: 'IN',
    description: 'Vérifie si une valeur correspond à l\'une des valeurs contenues dans une liste ou sous-requête.',
    example_code: "SELECT * FROM commandes WHERE statut IN ('En attente', 'En cours');"
  },
  {
    id: 7,
    category: 'Sélection & Filtrage (DQL)',
    name: 'BETWEEN',
    description: 'Filtre des données comprises dans un intervalle inclusif (nombres, dates, texte).',
    example_code: "SELECT * FROM ventes WHERE date_vente BETWEEN '2024-01-01' AND '2024-12-31';"
  },
  {
    id: 8,
    category: 'Sélection & Filtrage (DQL)',
    name: 'DISTINCT',
    description: 'Élimine les doublons dans les résultats retournés.',
    example_code: 'SELECT DISTINCT pays FROM clients;'
  },

  // --- Jointures (JOINS) ---
  {
    id: 9,
    category: 'Jointures (JOINS)',
    name: 'INNER JOIN',
    description: 'Retourne les enregistrements ayant des valeurs correspondantes dans les deux tables.',
    example_code: 'SELECT utilisateurs.nom, commandes.total \nFROM utilisateurs \nINNER JOIN commandes ON utilisateurs.id = commandes.utilisateur_id;'
  },
  {
    id: 10,
    category: 'Jointures (JOINS)',
    name: 'LEFT JOIN',
    description: 'Retourne tous les enregistrements de la table de gauche et les correspondances de la table de droite.',
    example_code: 'SELECT clients.nom, commandes.id \nFROM clients \nLEFT JOIN commandes ON clients.id = commandes.client_id;'
  },
  {
    id: 11,
    category: 'Jointures (JOINS)',
    name: 'RIGHT JOIN',
    description: 'Retourne tous les enregistrements de la table de droite et les correspondances de la table de gauche.',
    example_code: 'SELECT employes.nom, departements.nom_dept \nFROM employes \nRIGHT JOIN departements ON employes.dept_id = departements.id;'
  },
  {
    id: 12,
    category: 'Jointures (JOINS)',
    name: 'FULL OUTER JOIN',
    description: 'Retourne tous les enregistrements lorsqu\'il y a une correspondance dans l\'une des tables.',
    example_code: 'SELECT * FROM produits \nFULL OUTER JOIN categories ON produits.category_id = categories.id;'
  },

  // --- Modification (DML) ---
  {
    id: 13,
    category: 'Modification (DML)',
    name: 'INSERT INTO',
    description: 'Insère de nouvelles lignes dans une table.',
    example_code: "INSERT INTO employes (nom, poste, salaire) \nVALUES ('Alice', 'Développeuse', 45000);"
  },
  {
    id: 14,
    category: 'Modification (DML)',
    name: 'UPDATE',
    description: 'Modifie des données existantes dans une table. Attention à toujours inclure un WHERE.',
    example_code: "UPDATE commandes \nSET statut = 'Livré' \nWHERE id = 1042;"
  },
  {
    id: 15,
    category: 'Modification (DML)',
    name: 'DELETE',
    description: 'Supprime des lignes d\'une table selon une condition.',
    example_code: "DELETE FROM paniers WHERE cree_le < '2023-01-01';"
  },
  {
    id: 16,
    category: 'Modification (DML)',
    name: 'UPSERT / ON CONFLICT',
    description: 'Insère une ligne ou la met à jour si une clé primaire/unique existe déjà (PostgreSQL).',
    example_code: "INSERT INTO utilisateurs (id, email, nom) \nVALUES (1, 'test@email.com', 'Bob') \nON CONFLICT (id) \nDO UPDATE SET email = EXCLUDED.email;"
  },

  // --- Agrégation & Groupes ---
  {
    id: 17,
    category: 'Agrégation & Groupes',
    name: 'GROUP BY / COUNT',
    description: 'Groupe les lignes ayant les mêmes valeurs et permet de compter les occurrences.',
    example_code: 'SELECT ville, COUNT(*) as nombre_clients \nFROM clients \nGROUP BY ville;'
  },
  {
    id: 18,
    category: 'Agrégation & Groupes',
    name: 'SUM / AVG / MIN / MAX',
    description: 'Calcule des valeurs agrégées (somme, moyenne, minimum, maximum) sur une colonne.',
    example_code: 'SELECT category_id, SUM(prix) as total_prix, AVG(prix) as prix_moyen \nFROM produits \nGROUP BY category_id;'
  },
  {
    id: 19,
    category: 'Agrégation & Groupes',
    name: 'HAVING',
    description: 'Filtre les groupes créés par GROUP BY (équivalent du WHERE pour les groupes).',
    example_code: 'SELECT client_id, COUNT(*) as nb_commandes \nFROM commandes \nGROUP BY client_id \nHAVING COUNT(*) > 5;'
  },

  // --- Structure (DDL) ---
  {
    id: 20,
    category: 'Structure (DDL)',
    name: 'CREATE TABLE',
    description: 'Crée une nouvelle table en définissant ses colonnes et leurs types de données.',
    example_code: 'CREATE TABLE articles (\n  id SERIAL PRIMARY KEY,\n  titre VARCHAR(150) NOT NULL,\n  contenu TEXT,\n  cree_le TIMESTAMP DEFAULT NOW()\n);'
  },
  {
    id: 21,
    category: 'Structure (DDL)',
    name: 'ALTER TABLE',
    description: 'Modifie la structure d\'une table existante (ajouter, supprimer ou modifier des colonnes).',
    example_code: 'ALTER TABLE utilisateurs \nADD COLUMN age INT,\nDROP COLUMN telephone;'
  },
  {
    id: 22,
    category: 'Structure (DDL)',
    name: 'DROP TABLE',
    description: 'Supprime définitivement une table et toutes ses données de la base.',
    example_code: 'DROP TABLE IF EXISTS temporaire;'
  },
  {
    id: 23,
    category: 'Structure (DDL)',
    name: 'TRUNCATE',
    description: 'Vide rapidement tout le contenu d\'une table sans supprimer la structure elle-même.',
    example_code: 'TRUNCATE TABLE journaux_logs;'
  },
  {
    id: 24,
    category: 'Structure (DDL)',
    name: 'CREATE INDEX',
    description: 'Crée un index sur une ou plusieurs colonnes pour accélérer les recherches.',
    example_code: 'CREATE INDEX idx_utilisateurs_email ON utilisateurs(email);'
  },

  // --- Advanced & Transactions ---
  {
    id: 25,
    category: 'Transactions & Avancé',
    name: 'BEGIN / COMMIT / ROLLBACK',
    description: 'Encapsule plusieurs instructions dans une transaction pour garantir la cohérence des données.',
    example_code: 'BEGIN;\nUPDATE comptes SET solde = solde - 100 WHERE id = 1;\nUPDATE comptes SET solde = solde + 100 WHERE id = 2;\nCOMMIT;'
  },
  {
    id: 26,
    category: 'Transactions & Avancé',
    name: 'COALESCE',
    description: 'Retourne la première valeur non NULL dans la liste de ses arguments.',
    example_code: "SELECT nom, COALESCE(telephone, 'Non renseigné') as contact FROM clients;"
  },
  {
    id: 27,
    category: 'Transactions & Avancé',
    name: 'CASE WHEN',
    description: 'Ajoute des conditions logiques SI/ALORS directement dans les requêtes.',
    example_code: "SELECT nom, prix,\n  CASE \n    WHEN prix > 100 THEN 'Cher'\n    ELSE 'Abordable'\n  END as categorie_prix\nFROM produits;"
  },
  {
    id: 28,
    category: 'Transactions & Avancé',
    name: 'UNION / UNION ALL',
    description: 'Combine le résultat de deux ou plusieurs requêtes SELECT en un seul jeu de données.',
    example_code: 'SELECT email FROM clients\nUNION\nSELECT email FROM fournisseurs;'
  }
];

export const sqlService = {
  getAllCommands: () => {
    return sqlCommands;
  },

  getCategories: () => {
    const categories = sqlCommands.map(cmd => cmd.category);
    return ['Toutes', ...new Set(categories)];
  },

  getCommandsByCategory: (category) => {
    if (!category || category === 'Toutes') {
      return sqlCommands;
    }
    return sqlCommands.filter(cmd => cmd.category === category);
  }
};