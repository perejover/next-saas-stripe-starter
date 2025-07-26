import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BillingFormButton } from "@/components/forms/billing-form-button";
import { SubscriptionPlan } from "@/types";


interface BillingModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    SubscriptionPlan: SubscriptionPlan;
}

export function BillingModal({ open, onOpenChange, subscriptionPlan }: BillingModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upgrade your plan</DialogTitle>
                    <DialogDescription>
                        Upgrade to the Pro Plan to unlock unlimited projects, priority support, and advanced analytics for only 3,99€/mes.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="rounded-lg border p-4 flex flex-col items-center">
                        <h2 className="text-lg font-bold mb-2">Pro Plan</h2>
                        <p className="mb-2">3,99€/mes</p>
                        <ul className="mb-4 text-sm text-muted-foreground list-disc list-inside">
                            <li>Unlimited projects</li>
                            <li>Priority support</li>
                            <li>Advanced analytics</li>
                        </ul>
                        <BillingFormButton
                            year={false}
                            offer={{
                                title: "Pro Plan",
                                description: "Best for professionals.",
                                benefits: ["Unlimited projects", "Priority support", "Advanced analytics"],
                                limitations: [],
                                prices: { monthly: 3.99, yearly: 0 },
                                stripeIds: { monthly: "price_1Rok7l3v5wckaR0Hc4uBcY4E", yearly: null },
                            }}
                            subscriptionPlan={subscriptionPlan}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
