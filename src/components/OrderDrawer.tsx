"use client";

import React, { useState } from "react";
import { CartItem } from "@/data/productData";

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCompleted(true);
    }, 1000);
  };

  const handleFinish = () => {
    setCompleted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#171A18]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F4EF] border-l border-[#E3DDD2] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E3DDD2] flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-[#171A18]">Your Order</h2>
            <button
              onClick={onClose}
              className="text-xs text-[#5C625D] hover:text-[#171A18] font-medium px-2 py-1 rounded-md border border-[#E3DDD2]"
            >
              Close
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {completed ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#3D5A45] text-[#F6F4EF] flex items-center justify-center mx-auto text-sm font-bold">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-[#171A18]">
                  Order Confirmed
                </h3>
                <p className="text-xs text-[#5C625D] max-w-xs mx-auto leading-relaxed">
                  Your batch has been scheduled for cold packaging and will dispatch from our Vermont facility within two business days.
                </p>
                <button
                  onClick={handleFinish}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#171A18] text-[#F6F4EF] text-xs font-semibold"
                >
                  Return to ledger
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 space-y-2">
                <p className="text-sm font-medium text-[#171A18]">Your crate is currently empty</p>
                <p className="text-xs text-[#5C625D]">Select any 12-pack batch or the tasting box to begin.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-[#E3DDD2] flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-[#171A18] leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#5C625D]">
                      {item.size === "tasting-set" ? "Variety 12-Pack" : "12 Cans (355ml)"}
                    </span>
                    <div className="text-xs font-bold text-[#171A18] mt-1">
                      ${item.price * item.quantity}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#E3DDD2] rounded-lg bg-[#FAF8F5]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-[#5C625D] hover:text-[#171A18]"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#171A18]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#5C625D] hover:text-[#171A18]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-xs text-[#7A807B] hover:text-[#943331] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {!completed && items.length > 0 && (
            <div className="p-6 border-t border-[#E3DDD2] bg-white space-y-4">
              <div className="space-y-1.5 text-xs text-[#5C625D]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#171A18] font-medium">${total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbon-neutral shipping</span>
                  <span className="text-[#3D5A45] font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#171A18] pt-2 border-t border-[#E3DDD2]">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#171A18] hover:bg-[#2D332F] text-[#F6F4EF] text-xs font-semibold tracking-wide transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Preparing order..." : `Proceed to checkout ($${total})`}
              </button>

              <div className="text-[11px] text-[#7A807B] text-center">
                Dispatches from Vermont • 100% recyclable packaging
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
