# shotgun-server
Server for shotgun

# Lancement
A importer dans Eclipse en tant que projet Maven.
Il faut aller modifier au préalable les fichiers suivants :

- application-configuration.xml: `jdbc:h2:file:D://Users//ppicard//db//test_database` (ligne 35)
Y remplacer le chemin `D://Users//ppicard//db//test_database` par un chemin en local chez vous! (le test_database sera le fichier créé)
- application.properties: Y faire la même chose.

Après, il faut faire clic droit sur le projet > Run As > Spring Boot App.
