// Profile.tsx
import React, { useEffect, useState } from "react";
import { auth } from "../Auth/firebase";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.tsx";
import { Button } from "@/components/ui/button.tsx";
const invoices = [
  {
    invoice: "INV001",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    bookings: "Hotel Diana, Paris",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export const calculateTotalMoney = () => {};

const Profile: React.FC = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const user = auth.currentUser;

  useEffect(() => {
    calculateTotalMoney();
  }, []);

  const calculateTotalMoney = () => {
    let sum = 0;
    invoices.forEach((element) => {
      let amount = parseFloat(element.totalAmount.replace("$", ""));
      sum += amount;
    });
    setTotalMoney(sum);
  };

  return (
    <div className="profile ">
      <div className="flex flex-col w-[100vw] h-[100vh] py-20 text-3xl items-center justify-center">
        <h1>Welcome, {user?.email?.substring(0, 3)}</h1>
        <div className="w-[100vw] mt-10 lg:w-[60vw] lg:mt-0 mx-[20vw] flex h-[90vh] items-center justify-center">
          <Table>
            <TableCaption>A list of your recent Stats.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">S.No</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mode Of Payment</TableHead>
                <TableHead className="text-right">Mode Of Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">${totalMoney}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="w-[100vw] h-[100vh]  flex  justify-center gap-6">
          <Button>Go to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
