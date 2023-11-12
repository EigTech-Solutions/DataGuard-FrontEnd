const chart_fluxo_rede = document.getElementById('chart_fluxo_rede').getContext("2d");

// Configuração e dados de cada linha do chart
var datasetLinhas = [
    {
        label: 'Media - Download',
        data: [],
        borderColor: 'rgba(251, 154, 153, 1)',
        backgroundColor: 'rgba(251, 154, 153, 1)',
    },
    {
        label: 'Media - Upload',
        data: [],
        borderColor: 'rgba(158, 171, 240, 1)',
        backgroundColor: 'rgba(158, 171, 240, 1)',
    },
    {
        label: 'Media - Ping',
        data: [],
        borderColor: 'rgba(163, 199, 207, 1)',
        backgroundColor: 'rgba(163, 199, 207, 1)'
    },
]

// Criando estrutura para plotar gráfico - legendas e dados
let dados = {
    labels: [],
    datasets: datasetLinhas,
}

// Criando estrutura para plotar gráfico - configurações
const config = {
    type: 'line',
    data: dados,
    options: {
        maintainAspectRatio: false,
        tension: 0.5,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        borderWidth: 2,
        pointRadius: 3,
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
                labels: {
                    color: "#FFFFFF",
                    useBorderRadius: true,
                    borderRadius: 3.5,
                    boxWidth: 25
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value, index, values) => {
                        return `${value} Mbps/Ms`;
                    },
                    color: "#C2C2C2"
                },
                grid: {
                    lineWidth: 1,
                    color: "#124559"
                }
            },
            x: {
                ticks: {
                    color: "#C2C2C2",
                },
                grid: {
                    lineWidth: 1,
                    color: "#124559"
                }
            }

        },
    }
};

// Adicionando gráfico criado em um canvas na tela
let chartFluxoRede = new Chart(
    chart_fluxo_rede,
    config,
);