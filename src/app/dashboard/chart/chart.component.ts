import { Component, Input, computed, Signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Measures } from '../../models/measures.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  @Input({ required: true }) temperatureData!: Signal<Measures[]>;
  @Input({ required: true }) pressureData!: Signal<Measures[]>;

  chartData = computed(() => {
    const temps = this.temperatureData();
    const presses = this.pressureData();

    return {
      labels: temps.map((t) => new Date(t.date).toLocaleTimeString()),
      datasets: [
        {
          label: 'Temperatura (°C)',
          data: temps.map((t) => t.value),
          yAxisID: 'yTemp',
          borderColor: '#ef4444',
          backgroundColor: '#ef444433',
          tension: 0.4,
          pointRadius: 4,
        },
        {
          label: 'Ciśnienie (hPa)',
          data: presses.map((p) => p.value),
          yAxisID: 'yPress',
          borderColor: '#3b82f6',
          backgroundColor: '#3b82f633',
          tension: 0.4,
          pointRadius: 4,
        },
      ],
    };
  });

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      yTemp: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Temperatura (°C)',
        },
        min: 15,
        max: 40,
      },
      yPress: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Ciśnienie (hPa)',
        },
        min: 950,
        max: 1100,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    animation: {
      duration: 600,
      easing: 'easeOutQuart',
    },
  };
}
