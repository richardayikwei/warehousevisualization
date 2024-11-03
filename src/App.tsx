import Header from "./components/Header";
import ChartCard from "./components/ChartCard";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function App() {
 
  
  return (
    <div className="font-serif text-lg">
      <Header />
      <ChartCard>
        <Bar
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </ChartCard>
    </div>
  );
}

export default App;
