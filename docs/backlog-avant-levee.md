# Backlog avant levee

Ce fichier vient d'un export Notion incomplet. Les priorites etaient faites au feeling.

## Produit

| ID | Sujet | Priorite | Statut | Note |
| --- | --- | --- | --- | --- |
| P-001 | Paiement acompte en ligne | haute | a faire | demande investisseurs |
| P-002 | Planning disponibilite chevres | haute | a faire | aujourd'hui Nina tient un tableur |
| P-003 | Espace eleveur partenaire | moyenne | idee | utile si expansion nationale |
| P-004 | Notifications SMS client | haute | a faire | plusieurs clients oublient les passages |
| P-005 | Photos avant/apres | moyenne | prototype mobile | stockees localement pour l'instant |
| P-006 | Carte des zones desservies | moyenne | a faire | marketing veut une carte |
| P-007 | Gestion caution cloture | basse | a cadrer | juridique pas clair |
| P-008 | Multi-devis pour gros comptes | moyenne | a faire | communes et domaines viticoles |
| P-009 | Historique intervention client | haute | a faire | support fouille dans mails |
| P-010 | Export compta mensuel | haute | bricolage | CSV manuel chaque lundi |

## Technique

| ID | Sujet | Risque | Note |
| --- | --- | --- | --- |
| T-001 | Mettre CI sur PR | eleve | pas de protection main |
| T-002 | Ajouter staging | eleve | on teste parfois en prod |
| T-003 | Variables env propres | eleve | SMTP deja casse |
| T-004 | Logs centralises | moyen | journalctl + fichiers + rien |
| T-005 | Backups verifies | eleve | restore jamais teste |
| T-006 | Migration DB | moyen | pas encore de vraie DB |
| T-007 | Secret scanning | moyen | `.env` copie parfois dans zip |
| T-008 | SLO devis | moyen | pas de mesure |
| T-009 | Tests E2E formulaire | eleve | parcours business critique |
| T-010 | Runbook incident | moyen | depend de Marc |
| T-011 | Build mobile reproductible | moyen | Expo lance chez Nina |
| T-012 | Feature flags | bas | demandes marketing rapides |

## Notes prises en reunion

- "Si ca marche, on ne touche pas avant la saison haute."
- "Le formulaire devis vaut plus que la home page."
- "Marc connait les serveurs, mais il part souvent en intervention terrain."
- "Nina veut eviter Kubernetes tant qu'on n'a pas de monitoring."
- "Le board n'a pas demande la perfection, il demande de livrer sans casser."
