import { useState } from "react";
import { Button, Stack, Title, Divider, Container, Card,Text,Group } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import ItemCard from "../components/ItemCard";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "ss",
      name: "ss",
      amount: 500,
      category: "sss",
    },
  ]);
  const categories = ["Food", "Transport", "Entertainment"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */
      }

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
