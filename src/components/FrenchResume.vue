<template>
  <div class="flex p-2 text-slate-800 gap-1 h-full w-full">
    <div class="flex flex-col gap-1">
      <div class="flex gap-4 p-2">
        <img
          src="../assets/photo.jpeg"
          alt="Profile Picture"
          srcset=""
          class="rounded-md h-44 aspect-square"
        />
        <div class="flex flex-col gap-1 justify-between">
          <div class="flex flex-col gap-1">
            <div class="text-xl text-teal-500 text-center">
              Stage en Machine Learning
            </div>
            <div class="text-md text-teal-500 text-center">
              Novembre - Avril
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <div class="text-lg font-bold">Théo Lasnier</div>
            <div class="text-xs text-justify">
              Étudiant en M1 à l'EFREI Paris, je suis à la recherche d'un stage
              en data science. Fort de mes compétences en analyse et
              modélisation de données, je suis un ajout de valeur pour toute
              équipe, apportant persévérance, esprit de collaboration et une
              approche orientée solution.
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between p-2 pt-0 grow">
        <div class="flex flex-col gap-2">
          <IconText
            text="Expériences"
            :icon="BriefcaseIcon"
            :reverse="true"
            class="text-white text-lg"
          />
          <ExperienceDescription
            title="Co-fondateur"
            company="Friday"
            start-date="01/2023"
            end-date="Présent"
            :description="[
              'Développement d\'une application native, multiplateforme et une API GraphQL rapide et fiable pour promouvoir et trouver des événements.',
              'Conception de l\'architecture cloud, de l\'architecture de la base de données et de l\'algorithme de recommendation de l\'application.',
            ]"
            location="Paris, FR"
          />
          <ExperienceDescription
            title="Fullstack Web Developpeur"
            company="Meta Life / Freelance"
            start-date="10/2023"
            end-date="11/2023"
            :description="[
              'Création, mise à jour, conception de sites Web utilisant diverses technologies modernes selon les spécifications et les besoins du client.',
              'Amélioration de la visibilité et du SEO sur les navigateurs web et les réseaux sociaux, ce qui a entraîné une augmentation de 40% des visites quotidiennes.',
            ]"
            location="Irvine, USA"
          />
        </div>
        <div class="flex flex-col gap-2">
          <IconText
            text="Projets"
            :icon="RocketLaunchIcon"
            :reverse="true"
            class="text-white text-lg"
          />
          <ExperienceDescription
            title="Analyse d'avis produits par Traitement du Langage Naturel (NLP)"
            company="Mastercamp"
            start-date="06/2023"
            end-date="07/2023"
            :description="[
              'Apprentissage de techniques NLP avancées afin d\'analyser un avis produit.',
              'Utilisation des modèles BERT et GPT pour traiter le langage naturel.',
              'Création des synthèses concises et informatives permettant une prise de décision efficace pour l\'amélioration de produit.',
            ]"
            location="Villejuif, FR"
          />
          <ExperienceDescription
            title="Prédiction du prix de l'électricité"
            company="Challenge Data - ENS"
            start-date="05/2023"
            end-date="06/2023"
            :description="[
              'Utilisation de techniques avancées d\'analyse de données et d\'apprentissage machine pour développer des modèles prédictifs précis.',
              'Élaboration de stratégies d\'optimisation pour améliorer la précision des prédictions en ajustant et en affinant les modèles.',
            ]"
            location="Villejuif, FR"
          />
        </div>
        <div class="flex flex-col gap-2">
          <IconText
            text="Formation"
            :icon="AcademicCapIcon"
            :reverse="true"
            class="text-white text-lg"
          />
          <ExperienceDescription
            title="Ingénieur spécialisé en IA - Section international (M1)"
            company="EFREI Paris - GPA 3.80/4"
            start-date="2020"
            end-date="2025"
            :description="[
              'Cours pertinents : Introduction au Machine learning, Bases de données avancées, Théorie des graphes, Conception de circuits numériques, Mathématiques pour la cryptographie, Modélisation mathématique, Analyse de données',
              'Activités associatives : Président de Association E’fight, Développeur à SEP Efrei Junior Entreprise, Développeur à Horizon',
            ]"
            location="Villejuif, FR"
          />
          <ExperienceDescription
            title="Computer Science Study Abroad Program"
            company="University of California - GPA 4.00/4"
            start-date="08/2022"
            end-date="12/2022"
            :description="[
              'Cours pertinents : Programmation Web avancée, Programmation Java, Architecture informatique, Réseaux et protocoles, Système d\'exploitation',
            ]"
            location="Irvine, USA"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-1 min-w-[33%] w-1/3">
      <div class="rounded-md bg-gray-700 flex flex-col gap-4 p-4 pr-0 text-xs">
        <IconText
          text="theo.lasnier@efrei.net"
          :icon="EnvelopeIcon"
          link="mailto:theo.lasnier@efrei.net"
        />
        <IconText
          text="+33 6 63 34 82 03"
          :icon="DevicePhoneMobileIcon"
          link="tel:+33663348203"
        />
        <IconText
          text="theo-lasnier"
          :img-icon="LinkedinIcon"
          link="https://linkedin.com/in/t-lasnier"
        />
        <IconText
          text="theo-lasnier.dev"
          :icon="GlobeAltIcon"
          link="https://theo-lasnier.dev"
        />
        <IconText text="Paris, France" :icon="MapPinIcon" />
      </div>

      <div class="rounded-md bg-gray-700 flex flex-col gap-4 p-4 grow">
        <IconText text="Hard Skills" :icon="WrenchIcon" />
        <div class="flex flex-wrap gap-2 text-xs text-white">
          <SkillTag v-for="skill in hardSkils" :tag="skill" />
        </div>

        <IconText text="Soft Skills" :icon="ChatBubbleBottomCenterTextIcon" />
        <div class="flex flex-wrap gap-2 text-xs text-white">
          <SkillTag v-for="skill in softSkills" :tag="skill" />
        </div>

        <IconText text="Langues" :icon="LanguageIcon" />
        <div class="flex flex-wrap gap-2 text-xs text-white">
          <SkillTag tag="Francais - Natif" />
          <SkillTag tag="Anglais - Professionnel" />
        </div>

        <IconText text="Loisirs" :icon="HomeModernIcon" />
        <div class="flex flex-wrap gap-2 text-xs text-white">
          <SkillTag v-for="loisir in loisirs" :tag="loisir" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  WrenchIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeModernIcon,
  LanguageIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/24/solid";
import IconText from "./IconText.vue";
import LinkedinIcon from "../assets/Linkedin_icon.svg";
import SkillTag from "./SkillTag.vue";
import ExperienceDescription from "./FExperienceDescription.vue";

const hardSkils = [
  "Jupyter",
  "Python",
  "Scala",
  "Pandas",
  "NumPy",
  "SciKit-Learn",
  "TensorFlow",
  "Keras",
  "Java",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PHP",
  "SQL",
  "Docker",
  "Git",
  "Linux",
  "Shell",
  "Astro",
  "Vue.js",
  "React.js",
  "Nuxt.js",
  "Next.js",
  "Nest.js",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "Redis",
  "Azure",
  "Ngnix",
];

const softSkills = [
  "Travail d'équipe",
  "Adaptabilité",
  "Autonomie",
  "Créativité",
  "Curiosité",
  "Leadership",
  "Persévérance",
  "Résolution de problèmes",
  "Sens du relationnel",
];

const loisirs = [
  "Kick-Boxing en competition",
  "Nouvelles technologies",
  "Cuisine",
  "Voyages",
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");

html {
  font-family: "Poppins", sans-serif !important;
  font-weight: 300;
}
</style>
