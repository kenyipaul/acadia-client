"use client";

import { Pie, PieChart, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Boys", value: 520 },
  { name: "Girls", value: 480 },
];

const COLORS = ["#17B581", "#FFC342"];

export default function GenderDonutChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="w-fil border-0 shadow-none">
      <CardHeader>
        <CardTitle>Gender Distribution</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between gap-6">
        {/* Donut Chart */}
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="text-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">
                  {item.value} ({Math.round((item.value / total) * 100)}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
