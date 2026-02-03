<template>
  <div class="measures-table">
    <h3 class="title">Pomiary</h3>

    <div class="filters">
      <label>
        Pokazuj co:
        <select v-model.number="sampleMinutes">
          <option :value="0">Wszystkie</option>
          <option :value="1">1 min</option>
          <option :value="15">15 min</option>
          <option :value="30">30 min</option>
          <option :value="60">1 h</option>
        </select>
      </label>
    </div>
    <div class="measures-container">
      <section v-if="temperatureSampled.length" class="section">
        <h4 class="section-title temperature">Temperatura</h4>
        <table>
          <tbody>
            <tr
              v-for="(m, index) in temperatureVisible"
              :key="m.date"
              :class="{ highlight: index === 0 }"
            >
              <td class="value">{{ m.value }} °C</td>
              <td class="date">{{ formatTime(m.date) }}</td>
            </tr>
          </tbody>
        </table>
        <button
          v-if="temperatureSampled.length > 10"
          @click="temperatureExpanded = !temperatureExpanded"
          class="btn-show"
        >
          {{ temperatureExpanded ? 'Pokaż mniej' : 'Pokaż więcej' }}
        </button>
      </section>

      <section v-if="pressureSampled.length" class="section">
        <h4 class="section-title pressure">Ciśnienie</h4>
        <table>
          <tbody>
            <tr
              v-for="(m, index) in pressureVisible"
              :key="m.date"
              :class="{ highlight: index === 0 }"
            >
              <td class="value">{{ m.value }} hPa</td>
              <td class="date">{{ formatTime(m.date) }}</td>
            </tr>
          </tbody>
        </table>
        <button
          v-if="pressureSampled.length > 10"
          @click="pressureExpanded = !pressureExpanded"
          class="btn-show"
        >
          {{ pressureExpanded ? 'Pokaż mniej' : 'Pokaż więcej' }}
        </button>
      </section>
    </div>

    <p v-if="!temperatureSampled.length && !pressureSampled.length" class="empty">
      Brak danych
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Measures } from '../../../src/app/models/measures.model'

const props = defineProps<{
  measures: Measures[]
}>()

const temperatureExpanded = ref(false)
const pressureExpanded = ref(false)

const sampleMinutes = ref(1)

const sorted = computed(() =>
  [...props.measures].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  ),
)

const temperature = computed(() =>
  sorted.value.filter((m) => m.name === 'Temperatura'),
)
const pressure = computed(() =>
  sorted.value.filter((m) => m.name === 'Ciśnienie'),
)

function sampleData(arr: Measures[], minutes: number): Measures[] {
  if (!arr.length) return []
  if (minutes === 0) return arr
  const result: Measures[] = []
  let lastTime = new Date(arr[0].date).getTime()
  result.push(arr[0])

  for (let i = 1; i < arr.length; i++) {
    const currentTime = new Date(arr[i].date).getTime()
    if ((lastTime - currentTime) / 60000 >= minutes) {
      result.push(arr[i])
      lastTime = currentTime
    }
  }
  return result
}

const temperatureSampled = computed(() =>
  sampleData(temperature.value, sampleMinutes.value),
)
const pressureSampled = computed(() =>
  sampleData(pressure.value, sampleMinutes.value),
)

const temperatureVisible = computed(() =>
  temperatureExpanded.value
    ? temperatureSampled.value
    : temperatureSampled.value.slice(0, 10),
)

const pressureVisible = computed(() =>
  pressureExpanded.value
    ? pressureSampled.value
    : pressureSampled.value.slice(0, 10),
)

function formatTime(date: string): string {
  const d = new Date(date)
  return d.toLocaleTimeString('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
</script>


<style scoped>
.measures-table {
  padding: 1rem;
  background: #ffffff;

}
.measures-container{
 display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
} 

@media (max-width: 768px) {
  .measures-container {
    grid-template-columns: 1fr;
  }
}

.title {
  font-weight: 600;
  margin-bottom: 1rem;
}
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.filters label {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: #374151;
}
.filters select {
  border-radius: 6px;
  border: 1px solid #d1d5db;
  padding: 0.25rem 0.5rem;
}

.section {
  margin-bottom: 1rem;
}
.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.section-title.temperature {
  color: #dc2626;
}
.section-title.pressure {
  color: #2563eb;
}

table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  transition: background 0.3s ease;
}
td {
  padding: 0.4rem 0;
  font-size: 0.875rem;
}
.value {
  font-weight: 500;
}
.date {
  text-align: right;
  color: #6b7280;
  font-size: 0.75rem;
}
.highlight {
  background-color: #ecfeff;
  animation: pulse 1.2s ease-out;
}
@keyframes pulse {
  0% { background-color: #cffafe; }
  100% { background-color: #ecfeff; }
}
.empty {
  font-size: 0.875rem;
  color: #6b7280;
}
.btn-show {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
}
.btn-show:hover {
  text-decoration: underline;
}
</style>
