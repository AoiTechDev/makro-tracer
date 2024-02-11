import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getServerSession } from 'next-auth';
import MealsTableBody from './MealsTableBody/MealsTableBody';

const MealsTable = async () => {
  const session = await getServerSession();
  return (
    <Card className="flex-1">
    <CardHeader>
      <CardTitle>Meals for Selected Day</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meal</TableHead>
            <TableHead>Protein (g)</TableHead>
            <TableHead>Carbohydrates (g)</TableHead>
            <TableHead>Fat (g)</TableHead>
            <TableHead>Calories</TableHead>
            <TableHead>Sugar (g)</TableHead>
          </TableRow>
        </TableHeader>
        <MealsTableBody session={session}/>
      </Table>
    </CardContent>
  </Card>
  )
}

export default MealsTable