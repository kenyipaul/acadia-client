"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { class: "Form 1", boys: 120, girls: 110 },
  { class: "Form 2", boys: 115, girls: 105 },
  { class: "Form 3", boys: 110, girls: 100 },
  { class: "Form 4", boys: 105, girls: 95 },
];

export default function EnrollmentByClassChart() {
  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader>
        <CardTitle>Student Enrollment by Class</CardTitle>
      </CardHeader>

      <CardContent className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis dataKey="class" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={30} />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />
            <Bar dataKey="boys" fill="#17B581" radius={[6, 6, 0, 0]} />
            <Bar dataKey="girls" fill="#FFC342" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
