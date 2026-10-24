<script setup>
import DeptIcon from '../components/DeptIcon.vue'
import PersonCard from '../components/PersonCard.vue'
import { departments, president } from '../data/org'
</script>

<template>
  <main>
    <header>
      <div class="intro">
        <p class="max-width">
          <strong>Equipe dirigeante</strong> — organisation proposée pour répartir clairement le bureau et les
          responsabilités du club.
        </p>
        <div class="legend" aria-label="Légende">
          <span class="legend-dot" aria-hidden="true"></span>
          <span>Une personne peut occuper plusieurs fonctions</span>
        </div>
      </div>
    </header>

    <section class="org-chart" aria-label="Organigramme du club">
      <div class="president-wrap">
        <PersonCard
          :name="president.name"
          :role="president.role"
          president
        />
      </div>

      <div class="departments">
        <section
          v-for="dept in departments"
          :key="dept.id"
          class="department"
          :aria-labelledby="dept.id"
        >
          <h2 class="dept-heading" :id="dept.id">
            <DeptIcon :name="dept.icon" />
            {{ dept.title }}
          </h2>
          <div class="people-stack">
            <PersonCard
              v-for="(person, index) in dept.people"
              :key="`${dept.id}-${person.name}-${index}`"
              :name="person.name"
              :role="person.role"
              :multi="person.multi"
              :food-tag="person.foodTag"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
