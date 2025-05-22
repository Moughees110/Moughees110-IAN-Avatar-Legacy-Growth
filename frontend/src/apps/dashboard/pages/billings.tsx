// // import React from 'react'

// function Billings() {
//   return <div></div>
// }

// export default Billings

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import cardValidator from "card-validator";
import { formatCreditCardNumber } from "@/lib/card-format"; // create utility
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

type PaymentMethod = {
  id: string;
  cardType: string;
  last4: string;
  expiry: string;
};

type BillingForm = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  zip: string;
};

const BillingSection: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BillingForm>();

  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [cardType, setCardType] = useState<string | null>(null);

  const onSubmit = (data: BillingForm) => {
    const cardNumber = data.cardNumber.replace(/\s/g, "");
    const validation = cardValidator.number(cardNumber);
    if (!validation.isValid) return;

    const newMethod: PaymentMethod = {
      id: crypto.randomUUID(),
      cardType: validation.card?.niceType || "Unknown",
      last4: cardNumber.slice(-4),
      expiry: data.expiry,
    };

    setMethods((prev) => [...prev, newMethod]);
    reset();
    setCardType(null);
  };

  const handleDelete = (id: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const detectCardType = (value: string) => {
    const number = value.replace(/\s/g, "");
    const validation = cardValidator.number(number);
    setCardType(validation.card?.niceType || null);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h2 className="text-xl font-semibold">Billing Details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="cardNumber"
          control={control}
          rules={{
            required: "Card number is required",
            validate: (val) =>
              cardValidator.number(val).isValid || "Invalid card number",
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Card number"
              onChange={(e) => {
                field.onChange(formatCreditCardNumber(e.target.value));
                detectCardType(e.target.value);
              }}
            />
          )}
        />
        {cardType && (
          <p className="text-sm text-gray-500">Detected: {cardType}</p>
        )}
        {errors.cardNumber && (
          <p className="text-red-600">{errors.cardNumber.message}</p>
        )}

        <div className="flex gap-4">
          <Controller
            name="expiry"
            control={control}
            rules={{
              required: "Expiry date is required",
              validate: (val) =>
                cardValidator.expirationDate(val).isValid || "Invalid expiry",
            }}
            render={({ field }) => <Input {...field} placeholder="MM/YY" />}
          />
          <Controller
            name="cvv"
            control={control}
            rules={{
              required: "CVV is required",
              validate: (val) =>
                cardValidator.cvv(val, cardType === "American Express" ? 4 : 3)
                  .isValid || "Invalid CVV",
            }}
            render={({ field }) => <Input {...field} placeholder="CVV" />}
          />
        </div>
        {errors.expiry && (
          <p className="text-red-600">{errors.expiry.message}</p>
        )}
        {errors.cvv && <p className="text-red-600">{errors.cvv.message}</p>}

        <Controller
          name="zip"
          control={control}
          rules={{
            required: "ZIP is required",
            pattern: {
              value: /^\d{5}(-\d{4})?$/,
              message: "Invalid ZIP code",
            },
          }}
          render={({ field }) => (
            <Input {...field} placeholder="ZIP / Postal Code" />
          )}
        />
        {errors.zip && <p className="text-red-600">{errors.zip.message}</p>}

        <Button type="submit" className="w-full">
          Add Card
        </Button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Saved Payment Methods</h3>
        {methods.length === 0 && (
          <p className="text-gray-500">No saved cards.</p>
        )}
        <div className="space-y-4">
          {methods.map((method) => (
            <Card
              key={method.id}
              className="flex justify-between items-center p-4"
            >
              <CardContent className="flex-1">
                <p className="font-medium">{method.cardType}</p>
                <p>•••• •••• •••• {method.last4}</p>
                <p>Expires {method.expiry}</p>
              </CardContent>
              <Button
                variant="destructive"
                onClick={() => handleDelete(method.id)}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
