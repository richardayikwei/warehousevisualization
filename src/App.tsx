import Header from "./components/Header";
import ChartCard from "./components/ChartCard";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { apiKey } from "./apikey/apikey";
import { Colors, Chart } from "chart.js/auto";

Chart.register(Colors);


function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function fetchInventory() {
      const spreadsheetId = "1_y_fzDlQmBg8bVK2WBE8hD09imlPPEusITYCSZBvGdc";
      const range = "inventory!A:C";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Inventory not retrieved");
        }
        const data = await res.json();
        setInventory(data.values);
      } catch (e) {
        console.error(e);
      }
    }
    // fetchInventory();
  }, []);

  console.log(inventory);
  return (
    <div className="font-serif text-lg">
      <Header />
      <ChartCard>
        <Bar
          data={{
            labels: inventory
              .map((item) => item[0])
              .filter((entry) => !(entry === "Item")),
            datasets: [
              {
                label: "Quantity",
                data: inventory
                  .map((item) => item[1])
                  .filter((entry) => !(entry === "Quantity")),
              },
            ],
          }}
        />
      </ChartCard>
    </div>
  );
}

export default App;
