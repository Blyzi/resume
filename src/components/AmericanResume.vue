<template>
  <div class="flex flex-col px-8 py-6 gap-2 h-full w-full leading-tight">
    <div class="flex flex-col gap-2">
      <div class="font-bold text-2xl text-center">Theo Lasnier</div>
      <div class="flex justify-center gap-2">
        <a href="mailto:theo.lasnier@efrei.net">theo.lasnier@efrei.net</a> |
        <a href="tel:+33663348203">+33 6 63 34 82 03</a> |
        <a href="https://linkedin.com/in/t-lasnier"
          >linkedin.com/in/t-lasnier</a
        >
        |
        <a href="https://theo-lasnier.dev">theo-lasnier.dev</a>
      </div>
      <div class="text-center underline">
        J1 Visa Candidate. Will not require sponsorship.
      </div>
      <div class="text-justify text-sm">
        As a top-ranking Master's student in Computer Science from EFREI Paris,
        I am seeking a data science internship to apply and enhance my expertise
        in machine learning. Proven leadership and advanced skills in
        programming languages such as Python, Scala, Java, combined with my
        fluency in French and English, positions me to make a significant
        contribution to your data science team.
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div class="font-bold text-lg pb-1 border-b-4 border-black">
        EDUCATION
      </div>
      <EducationDescription
        title="Master of Science, Computer & Data Science"
        school="Engineering school, English Section, EFREI Paris"
        :gpa="3.8"
        :courses="[
          'Introduction to Machine Learning',
          'Advanced Database',
          'Graph theory',
          'Mathematics for Cryptography',
          'Mathematical Modeling',
          'Data Analysis',
        ]"
        startDate="2020"
        endDate="2025"
        location="Paris, FR"
        :activities="[
          'Developer at SEP Efrei Junior Enterprise',
          'Developer at Horizon Association',
          'President at Efight Association',
        ]"
      ></EducationDescription>

      <EducationDescription
        title="Computer Science Study Abroad Program"
        school="University of California"
        :gpa="4.0"
        :courses="[
          'Java Programming',
          'Computer Architecture',
          'Operating System',
        ]"
        startDate="08/2022"
        endDate="12/2022"
        location="Irvine, USA"
      ></EducationDescription>
    </div>

    <div class="flex flex-col gap-1 text-sm">
      <div class="font-bold text-lg pb-1 border-b-4 border-black">
        EXPERIENCES
      </div>

      <ExpericenceDescription
        title="Co-Founder"
        company="Friday"
        :description="[
          'Optimizing cloud and database architectures along with the recommendation system for efficient horizontal scaling.',
          'Developing a modern designed, native, cross-platform application and a fast and reliable API to promote and find events.',
          'Managing the technical teams, scheduling long-term tasks, planning the future of the company with our incubator.',
        ]"
        startDate="12/2022"
        endDate="Present"
        location="Paris, FR"
      ></ExpericenceDescription>

      <ExpericenceDescription
        title="Web Developer - Freelance"
        company="Meta Life"
        :description="[
          'Created, updated, designed websites using various modern technologies according to the client’s specification and needs.',
          'Participated in meetings to present technical solutions to the clients, assisted the clients for technical and design choices.',
          'Improved websites visibility and SEO on web browser and social networks that resulted in an increase of daily visit by 40%.',
        ]"
        startDate="10/2022"
        endDate="11/2022"
        location="Irvine, USA"
      ></ExpericenceDescription>
    </div>

    <div class="flex flex-col gap-1 text-sm">
      <div class="font-bold text-lg pb-1 border-b-4 border-black">
        LEADERSHIP EXPERIENCE & ACTIVITIES
      </div>

      <ExpericenceDescription
        title="Product Review Analysis using Natural Language Processing"
        company="Mastercamp"
        :description="[
          'Utilized cutting-edge Natural Language Processing (NLP) techniques to perform an in-depth analysis of product reviews.',
          'Employed models such as BERT and GPT to process natural language and extract meaningful insights from customer feedback.',
          'Created concise and informative syntheses of product reviews, enabling effective decision-making for product improvement.',
        ]"
        startDate="06/2023"
        endDate="07/2023"
        location="Paris, FR"
      ></ExpericenceDescription>

      <ExpericenceDescription
        title="President"
        company="Efight Association"
        :description="[
          'Led and managed a team of executives to organize and promote martial arts events, including boxing, and other disciplines.',
          'Developed a strategic plan to increase the visibility and reach of the association within the local community.',
          'Conducted regular meetings with team members to provide support and feedback on their performance and progress.',
        ]"
        startDate="03/2023"
        endDate="Present"
        location="Paris, FR"
      ></ExpericenceDescription>
    </div>
    <div class="flex flex-col text-sm">
      <div class="font-bold text-lg pb-1 mb-1 border-b-4 border-black">
        ACHIEVEMENTS & INTERESTS
      </div>
      <div>
        <span class="font-bold">Programming Languages: </span>
        {{ hardSkils.join(", ") }}
      </div>

      <div>
        <span class="font-bold">Languages: </span>
        French (Native), English (Proffesional)
      </div>

      <div>
        <span class="font-bold">Interests: </span>
        Kick-boxing competition, New Technologies, Traveling, Cooking
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EducationDescription from "./AEducationDescription.vue";
import ExpericenceDescription from "./AExpericenceDescription.vue";

const hardSkils = [
  "Jupyter",
  "Python",
  "Scala",
  "Pandas",
  "NumPy",
  "Matlab",
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
  "PostgreSQL",
  "MySQL",
  "GraphQL",
  "Redis",
  "Azure",
  "Ngnix",
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap");

html {
  font-family: "EB Garamond", serif !important;
}
</style>
