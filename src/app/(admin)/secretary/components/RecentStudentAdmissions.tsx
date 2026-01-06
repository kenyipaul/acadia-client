import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Student = {
  id: number;
  name: string;
  class: string;
  admissionDate: string;
  status: "Active" | "Pending";
};

const students: Student[] = [
  {
    id: 1,
    name: "John Michael Doe",
    class: "Form 1A",
    admissionDate: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Jane Smith",
    class: "Form 1B",
    admissionDate: "2024-01-14",
    status: "Active",
  },
  {
    id: 3,
    name: "David Lee Brown",
    class: "Form 2A",
    admissionDate: "2024-01-14",
    status: "Pending",
  },
  {
    id: 4,
    name: "Emma Rose Wilson",
    class: "Form 1A",
    admissionDate: "2024-01-13",
    status: "Active",
  },
  {
    id: 5,
    name: "James Liu Chen",
    class: "Form 3C",
    admissionDate: "2024-01-12",
    status: "Active",
  },
];

export function RecentStudentAdmissions() {
  return (
    <Card className="mt-6 border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Student Admissions</CardTitle>

        <Button size="sm">View All Students</Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Admission Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>

                <TableCell>{student.class}</TableCell>

                <TableCell>{student.admissionDate}</TableCell>

                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      student.status === "Active"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                    }
                  >
                    {student.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right space-x-3">
                  <button className="text-sm text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
