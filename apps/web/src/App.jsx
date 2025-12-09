import React, { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronRight,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Sun,
  Tractor,
  X
} from "lucide-react";

const advantages = [
  {
    icon: Leaf,
    title: "100% ecologique",
    text: "Zero carburant, fertilisation naturelle des sols et entretien doux pour la biodiversite locale."
  },
  {
    icon: Tractor,
    title: "Terrains difficiles",
    text: "Pentes, sous-bois et ronces : les zones que les machines evitent deviennent le terrain de jeu du cheptel."
  },
  {
    icon: Sun,
    title: "Tranquillite rurale",
    text: "Un entretien silencieux, sans debroussailleuse, avec un suivi humain des animaux et du terrain."
  }
];

const goats = [
  {
    name: "Marguerite",
    breed: "Chevre Alpine",
    speciality: "Specialiste ronces",
    image: "https://images.unsplash.com/photo-1528318269466-6919ddfb82dc?auto=format&fit=crop&w=900&q=80",
    text: "Une force de la nature pour les haies, les friches et les zones oubliees depuis plusieurs saisons."
  },
  {
    name: "Noisette",
    breed: "Chevre Naine",
    speciality: "Petites surfaces",
    image: "https://images.unsplash.com/photo-1582030999818-472df03d2e9c?auto=format&fit=crop&w=900&q=80",
    text: "Parfaite pour les jardins, les vergers et les terrains proches d'une habitation."
  },
  {
    name: "Gaston",
    breed: "Chevre du Rove",
    speciality: "Terrains escarpes",
    image: "https://images.unsplash.com/photo-1614745107936-e82aab8b91dc?auto=format&fit=crop&w=900&q=80",
    text: "Notre grimpeur officiel, envoye sur les pentes et les fosses ou la tondeuse abandonne."
  }
];

const reviews = [
  {
    author: "Sylvie D.",
    place: "Gite rural, Dordogne",
    image: "https://images.unsplash.com/photo-1610425330342-99bd8505e042?auto=format&fit=crop&w=900&q=80",
    text: "Terrain impraticable rempli de ronces. Marguerite et sa bande ont tout nettoye en quatre jours. Le linge, lui, doit etre rentre avant leur arrivee."
  },
  {
    author: "Jean-Marc P.",
    place: "Particulier, Haute-Savoie",
    image: "https://images.unsplash.com/photo-1514867493125-9922252723c3?auto=format&fit=crop&w=900&q=80",
    text: "Gaston est une machine de guerre sur les pentes. Il reclame juste qu'on le regarde travailler le matin."
  },
  {
    author: "Famille Martin",
    place: "Terrain de 5000 m2, Bretagne",
    image: "https://images.unsplash.com/photo-1543881477-9dd6d75cceee?auto=format&fit=crop&w=900&q=80",
    text: "Troisieme location. Le terrain est propre, pas un bruit de tracteur, et les enfants demandent deja quand les chevres reviennent."
  }
];

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-green-600 p-2 text-white">
        <Leaf size={24} />
      </div>
      <div className="text-xl tracking-tight sm:text-2xl">
        <span className="font-extrabold text-stone-900">Loue</span>
        <span className="font-extrabold text-green-700">Une</span>
        <span className="font-extrabold text-stone-900">Chevre</span>
        <span className="font-bold text-green-700">.com</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const navItems = [
    ["#avantages", "Avantages"],
    ["#fonctionnement", "Comment ca marche"],
    ["#cheptel", "L'equipe"],
    ["#reglement", "Reglement"],
    ["#temoignages", "Avis"]
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] font-sans text-stone-800 selection:bg-green-200">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#top" aria-label="Accueil LoueUneChevre.com">
              <Brand />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(([href, label]) => (
                <a key={href} href={href} className="font-medium text-stone-600 transition-colors hover:text-green-700">
                  {label}
                </a>
              ))}
              <a href="#reservation" className="rounded-full bg-green-600 px-6 py-2.5 font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md">
                Devis
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-stone-600 hover:bg-stone-100 md:hidden"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute w-full border-t border-stone-100 bg-white p-4 shadow-lg md:hidden">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-3 font-medium text-stone-700 hover:bg-green-50 hover:text-green-700">
                {label}
              </a>
            ))}
            <a href="#reservation" onClick={() => setIsMenuOpen(false)} className="mt-4 block rounded-full bg-green-600 px-6 py-3 text-center font-medium text-white">
              Obtenir un devis
            </a>
          </div>
        )}
      </nav>

      <main id="top">
        <section className="relative overflow-hidden bg-stone-900 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80"
              alt="Paysage rural verdoyant"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/70 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/20 px-4 py-2 text-sm font-medium text-green-200">
                <Leaf size={16} />
                La tonte naturelle, 100% ecologique
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Laissez la nature <span className="text-green-400">faire le travail.</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-stone-200 md:text-xl">
                Specialistes de l'eco-paturage en milieu rural. Louez nos chevres pour entretenir grands espaces, broussailles et terrains difficiles d'acces.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#reservation" className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-500">
                  Estimer mon projet
                  <ChevronRight size={20} />
                </a>
                <a href="#fonctionnement" className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
                  Decouvrir
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="avantages" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-stone-900">Pourquoi choisir la location de chevres ?</h2>
              <p className="text-lg text-stone-600">Oubliez les tracteurs bruyants et les produits chimiques. L'eco-paturage est la solution d'avenir pour les terrains ruraux.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {advantages.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-stone-100 bg-[#fdfbf7] p-8 transition-shadow hover:shadow-lg">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-stone-900">{title}</h3>
                  <p className="text-stone-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fonctionnement" className="bg-stone-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold">Comment fonctionne <span className="text-green-400">LoueUneChevre.com</span> ?</h2>
                <p className="mb-8 text-lg text-stone-300">Nous gerons l'audit du terrain, les clotures, la livraison du cheptel et le suivi sanitaire pendant l'intervention.</p>
                <div className="space-y-8">
                  {[
                    ["Audit de votre terrain", "Surface, vegetation, accessibilite, points d'eau et risque de fuite."],
                    ["Installation et livraison", "Pose des clotures mobiles si besoin, livraison des chevres et briefing client."],
                    ["Suivi et recuperation", "Passages reguliers, suivi bien-etre animal et reprise du cheptel en fin de mission."]
                  ].map(([title, text], index) => (
                    <div key={title} className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-stone-900">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="mb-2 text-xl font-bold">{title}</h4>
                        <p className="text-stone-400">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1524024973425-ce04c1ce6e50?auto=format&fit=crop&w=1200&q=80"
                  alt="Chevre au paturage"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cheptel" className="bg-[#fdfbf7] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-stone-900">Nos employees du mois</h2>
              <p className="text-lg text-stone-600">Rencontrez quelques specialistes de l'entretien des espaces verts.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {goats.map((goat) => (
                <article key={goat.name} className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <img src={goat.image} alt={goat.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-stone-700 backdrop-blur-sm">
                      <ShieldCheck size={14} className="text-green-600" />
                      {goat.speciality}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-1 text-sm font-bold text-green-600">{goat.breed}</div>
                    <h3 className="mb-2 text-xl font-bold text-stone-900">{goat.name}</h3>
                    <p className="text-sm text-stone-600">{goat.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reglement" className="bg-amber-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white p-8 shadow-sm lg:p-12">
              <AlertTriangle size={120} className="absolute right-8 top-8 text-amber-500 opacity-10" />
              <div className="relative max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
                  <AlertTriangle size={16} />
                  A lire avant reservation
                </div>
                <h2 className="mb-8 text-3xl font-bold text-stone-900 lg:text-4xl">Le reglement interieur des brouteuses</h2>
                <div className="space-y-6">
                  {[
                    ["Clause de non-mechoui", "Nos chevres sont des collaboratrices de tonte, pas un projet de barbecue."],
                    ["Interdiction de l'apero", "Pas de chips, de pizza ou de vieux pain. Elles ont deja un buffet vegetal sous les sabots."],
                    ["Pause syndicale", "Si une chevre s'allonge au soleil, elle optimise simplement son planning de rumination."]
                  ].map(([title, text], index) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 font-black text-amber-700">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-stone-900">{title}</h4>
                        <p className="mt-1 text-stone-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="temoignages" className="bg-stone-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-3xl font-bold">Ils l'ont fait. <span className="text-green-400">Ils ont survécu.</span></h2>
                <p className="text-lg text-stone-300">Retours clients sur les interventions d'eco-paturage.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-400">
                <Camera size={16} />
                Photos clients
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.author} className="flex flex-col overflow-hidden rounded-2xl border border-stone-700 bg-stone-800">
                  <img src={review.image} alt={review.author} className="h-48 w-full object-cover" />
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 flex text-amber-400">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mb-4 text-stone-300 italic">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-white">{review.author}</p>
                      <p className="text-sm text-stone-500">{review.place}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reservation" className="relative overflow-hidden bg-green-700 py-20 text-white">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-green-600 opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/2 rounded-full bg-green-800 opacity-50 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md lg:flex-row lg:p-12">
              <div className="lg:w-5/12">
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Pret a passer au vert ?</h2>
                <p className="mb-8 text-lg text-green-100">Demandez un devis gratuit. Nous vous proposerons la formule d'eco-paturage adaptee au terrain.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-green-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold">Intervention</div>
                      <div className="text-sm text-green-200">Milieu rural et periurbain</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-green-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <div className="font-bold">Disponibilite</div>
                      <div className="text-sm text-green-200">Toute l'annee, printemps recommande</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 text-stone-800 shadow-xl lg:w-7/12">
                {formStatus === "success" ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">Demande envoyee !</h3>
                    <p className="text-stone-600">Notre berger vous recontactera sous 24h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm font-medium text-stone-700">
                        Prenom et nom
                        <input required className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500" placeholder="Jean Dupont" />
                      </label>
                      <label className="block text-sm font-medium text-stone-700">
                        Telephone
                        <input required type="tel" className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500" placeholder="06 12 34 56 78" />
                      </label>
                    </div>
                    <label className="block text-sm font-medium text-stone-700">
                      Localisation du terrain
                      <input required className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500" placeholder="Code postal ou ville" />
                    </label>
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm font-medium text-stone-700">
                        Surface estimee
                        <select className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500">
                          <option>Moins de 1000 m2</option>
                          <option>1000 - 3000 m2</option>
                          <option>3000 - 10 000 m2</option>
                          <option>Plus de 10 000 m2</option>
                        </select>
                      </label>
                      <label className="block text-sm font-medium text-stone-700">
                        Type de terrain
                        <select className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500">
                          <option>Herbe haute classique</option>
                          <option>Broussailles et ronces</option>
                          <option>Terrain en pente</option>
                          <option>Sous-bois</option>
                        </select>
                      </label>
                    </div>
                    <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 py-3.5 font-bold text-white transition hover:bg-stone-800">
                      Recevoir mon devis gratuit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 bg-stone-900 py-12 text-stone-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <Brand />
            <p className="mt-4 max-w-sm text-sm">Solution d'eco-paturage pour l'entretien naturel des espaces verts ruraux.</p>
            <div className="mt-4 flex gap-4">
              <Mail size={20} />
              <Phone size={20} />
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map(([href, label]) => (
                <li key={href}><a href={href} className="hover:text-green-400">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Legacy</h4>
            <p className="text-sm">Site maintenu historiquement par une dev et un admin sys. Documentation en cours d'audit.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
