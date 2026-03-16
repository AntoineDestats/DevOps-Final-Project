# ADR-0001 - Garder un monorepo

Date : 2026-03-15

## Contexte

Le web, l'API et le prototype mobile sont dans le meme depot. Ce n'etait pas vraiment une decision d'architecture au depart : Nina a cree un dossier unique pour aller vite.

## Decision

On garde le monorepo a court terme.

## Raisons

- une seule personne connait vraiment le code ;
- le projet est encore petit ;
- l'exercice de formation doit montrer les dependances entre web, API et mobile ;
- separer maintenant ajouterait surtout de la coordination.

## Consequences

- il faudra une CI capable de tester par workspace ;
- les deploys web/API doivent etre separes meme si le code est ensemble ;
- les etudiants doivent identifier les ownerships avant de proposer des pipelines.
