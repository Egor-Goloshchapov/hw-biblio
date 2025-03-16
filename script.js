document.addEventListener("DOMContentLoaded", () => {
    const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";" ];
    let currentKeyIndex = Math.floor(Math.random() * keys.length);
    const keyDisplay = document.getElementById("key");
    const newGameBtn = document.getElementById("new-game");
    
    function updateKeyDisplay() {
        keyDisplay.textContent = keys[currentKeyIndex];
    }

    updateKeyDisplay();

    document.addEventListener("keydown", (event) => {
        if (event.key === keys[currentKeyIndex]) {
            currentKeyIndex = Math.floor(Math.random() * keys.length);
            updateKeyDisplay();
            PNotify.success({ text: "Правильна клавіша!" });
        } else {
            PNotify.error({ text: "Неправильна клавіша! Спробуйте ще раз." });
        }
    });

    document.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

    newGameBtn.addEventListener("click", () => {
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        updateKeyDisplay();
        PNotify.info({ text: "Нова гра почалася! Натисніть правильну клавішу." });
    });
});





const ctx = document.getElementById("sales-chart").getContext("2d");
const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600,
        650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#2196f3",
      pointRadius: 4
    }
  ]
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "День місяця"
        }
      },
      y: {
        title: {
          display: true,
          text: "Продажі"
        },
        beginAtZero: true
      }
    }
  },
};

const salesChart = new Chart(ctx, config);
