# Ajouter une base de données

1. Créer une base de données sur postgres
2. Créer 2 tables (product, category) 
    - product
        - id
        - name
        - price
        - categoryId
        - image
    - category
        - id
        - name
3. Ajouter sequelize dans le projet
    ```js
    npm i sequelize
    npm i pg pg-hstore
    ```
4. Modifier le code pour qu'il fonctionne avec sequelize et la db