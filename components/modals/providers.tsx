"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { useSignInModal } from "@/components/modals//sign-in-modal";
import { BillingModal } from "@/components/modals/billing-modal";
import { UserSubscriptionPlan } from "@/types";

export const ModalContext = createContext<{
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
  setBillingModal: Dispatch<SetStateAction<boolean>>;
}>({
  setShowSignInModal: () => { },
  setBillingModal: () => { },
});

export default function ModalProvider({ children, subscriptionPlan }: { children: ReactNode, subscriptionPlan: subscriptionPlan | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const [billingModalOpen, setBillingModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        setShowSignInModal,
        setBillingModal: setBillingModalOpen,
      }}
    >
      <SignInModal />
      <BillingModal open={billingModalOpen} onOpenChange={setBillingModalOpen} subscriptionPlan={subscriptionPlan} />
      {children}
    </ModalContext.Provider>
  );
}
