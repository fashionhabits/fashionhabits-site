# Fashionhabits — Boutique indépendante (sans plateforme)

Voici **ton site complet** prêt à être mis en ligne. Tu n'as pas à coder.
Tu peux l'héberger **gratuitement** (avec un sous-domaine) ou sur ton propre domaine.

## 🚀 Contenu du dossier
- `index.html` — Le site complet (accueil, boutique, panier, paiement)
- `netlify/functions/create-checkout.js` — La fonction serveur pour **Stripe Checkout**
- *(Pas d'autre fichier requis)*

---

## 🏁 Mise en ligne rapide (recommandé : Netlify)
1. Crée un compte gratuit sur Netlify.
2. Clique **"Add new site" → "Deploy manually"** puis **upload le dossier** entier (`fashionhabits-site`).
3. Netlify te donne une adresse comme `https://fashionhabits.netlify.app`.
4. Dans Netlify, onglet **Site configuration → Functions**, vérifie que le dossier `netlify/functions` est détecté.

### 🔐 Configurer STRIPE (paiement réel)
1. Crée un compte Stripe → active le **mode test** pour commencer.
2. Dans Stripe, crée **6 produits** (un par article) et **copie les `price_xxx`** (IDs de prix).
3. Ouvre `index.html` et remplace les valeurs `price_xxx_...` (champ `priceId`) par les **vrais IDs** de Stripe pour chaque produit.
4. Dans Netlify, va dans **Site settings → Environment variables** :
   - Ajoute `STRIPE_SECRET_KEY` = *ta clé secrète Stripe* (en mode test pour commencer).
5. Dans `netlify/functions/create-checkout.js` :
   - Remplace les URLs `success_url` et `cancel_url` par ton vrai domaine (Netlify ou personnalisé).
6. Clique **"Deploy"** à nouveau si besoin (Netlify redéploie automatiquement quand tu réuploades).

> 💡 En mode test Stripe, utilise des cartes de test (ex: `4242 4242 4242 4242`).

### 🌐 Utiliser ton propre domaine
- Dans Netlify → **Domain management** → **Add custom domain** → entre `fashionhabits.fr` (ou autre).
- Achète ton domaine chez OVH / Gandi / Namecheap, puis **pointe-le** vers Netlify (guide visuel fourni par Netlify).

---

## 🛒 Ajouter / modifier des produits
- Ouvre `index.html`, cherche le tableau `PRODUCTS` (tout en haut du `<script>`).
- Duplique un objet pour créer un nouveau produit.
- Renseigne : `id`, `title`, `price`, `sizes`, `image`, `priceId` (copié depuis Stripe).

## 🧰 Changer les couleurs / style
- Les couleurs sont définies en haut du `<style>` (variables CSS `--accent-start` et `--accent-end` pour le dégradé).
- Le style est déjà **streetwear & chic** (fond sombre, dégradé violet→cyan, animations).

## 🔒 Légal & RGPD
- Les sections **Mentions légales**, **Confidentialité**, **Retours** se trouvent en bas du `index.html` (ancres). **Complète tes infos** (SIRET, adresse…).

## ❓ FAQ
**Q. Puis-je accepter PayPal ?**  
Oui, on pourra ajouter les **PayPal Buttons** (client-side) produit par produit. Dis-moi quand tu veux que je l’intègre.

**Q. Puis-je gérer les stocks ?**  
Actuellement, le stock n’est pas décrémenté automatiquement. On peut connecter à Airtable/Google Sheets plus tard si tu veux.

**Q. Et si je veux modifier sans coder ?**  
Tu peux ouvrir `index.html` dans un éditeur visuel (par ex. Pinegrow) ou me demander les modifications et je te renverrai les fichiers prêts.

---

## ✅ Ce que tu as maintenant
- Un **site indépendant**, sans Shopify, **avec panier et paiement réel via Stripe Checkout** (dès que tu as remplacé les `priceId` + mis la clé Stripe).
- Un design **moderne**, **réactif**, animations légères.
