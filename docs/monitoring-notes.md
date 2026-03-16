# Monitoring notes

## Ce qu'on regarde aujourd'hui

- `curl /health` via cron toutes les 10 minutes ;
- logs nginx quand un client se plaint ;
- `systemctl status loueunechevre-api` apres deploy ;
- alertes CPU du VPS par mail OVH, parfois dans les spams.

## Ce qu'on ne mesure pas

- taux d'erreur formulaire devis ;
- temps entre merge et prod ;
- nombre de deploys par semaine ;
- MTTR reel ;
- taux de rollback ;
- disponibilite vue client ;
- latence mobile en zone rurale.

## Idee a discuter

Creer un dashboard minimal :

- uptime externe `/health` ;
- erreurs 5xx API ;
- nombre de devis par jour ;
- dernier hash deploye ;
- temps de reponse p95 formulaire devis ;
- alerte si aucun devis recu pendant 6h en jour ouvrable.

## Warning

Ne pas commencer par 25 graphiques. On veut 5 signaux utiles et actionnables.
