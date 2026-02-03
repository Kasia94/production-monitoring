import { defineCustomElement } from 'vue';
import MeasuresTable from './components/MeasuresTable.ce.vue';

const VueMeasuresTable = defineCustomElement(MeasuresTable);
customElements.define('vue-measures-table', VueMeasuresTable);
