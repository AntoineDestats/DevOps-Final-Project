# Incidents notes

## 2026-02-12 - Devis impossibles pendant 2h

Symptome : le formulaire web repondait OK mais aucun mail ne partait.

Ce qu'on sait :

- changement deploye vers 21h ;
- variable SMTP differente sur prod ;
- Marc a remis l'ancienne variable a la main ;
- pas de post-mortem fait, trop de demandes clients le lendemain.

Action note papier : "mettre check mail dans checklist deploy".

## 2026-03-18 - API down apres redemarrage VPS

Symptome : `/api/goats` en 502.

Ce qu'on sait :

- systemd n'avait pas le bon chemin Node ;
- fix fait directement sur le serveur ;
- pas de commit correspondant ;
- Nina a recopie la commande dans Slack.

Action : documenter systemd un jour.

## 2026-02-24 - Mauvais tarif envoye a 14 clients

Symptome : surface > 10 000 m2 mal calculee.

Ce qu'on sait :

- pas de test sur les grandes surfaces ;
- correctif fait vite ;
- support a envoye des mails d'excuse.

Action : test unitaire sur quote.
