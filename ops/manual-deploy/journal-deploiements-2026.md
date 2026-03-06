# Journal de deploiements 2026

> Note : ce journal est tenu a la main. Il manque probablement des deploys.

| Date | Version | Qui | Fenetre | Resultat | Note |
| --- | --- | --- | --- | --- | --- |
| 2026-01-06 | v0.1.0 | Marc | 22:00 | OK | premier site public |
| 2026-01-15 | v0.2.0 | Nina | 21:30 | OK | API devis ajoutee |
| 2026-01-22 | hotfix sans tag | Nina | 23:10 | OK | texte formulaire corrige direct |
| 2026-02-03 | v0.3.0 | Nina | 20:45 | OK | prototype mobile ajoute au repo |
| 2026-02-10 | v0.4.0 | Marc | 22:15 | OK | process manuel documente apres coup |
| 2026-02-12 | hotfix env | Marc | 23:50 | NOK puis OK | SMTP casse, rollback variable |
| 2026-02-24 | hotfix tarif | Nina | 19:10 | OK | bug grandes surfaces |
| 2026-03-01 | docs only | Marc | 18:40 | OK | architecture renomme |

## Commande habituelle

```bash
ssh prod-web-01
cd /var/www/loueunechevre/current
git pull origin main
npm install --omit=dev
npm run build:web
systemctl restart loueunechevre-api
systemctl reload nginx
```

## Choses a verifier mais pas toujours faites

- envoyer un devis test ;
- regarder `/health` ;
- verifier que le formulaire arrive dans la boite support ;
- garder l'ancien dossier `current` 24h avant nettoyage ;
- noter le hash Git dans ce fichier.
