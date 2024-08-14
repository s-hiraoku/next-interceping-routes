"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="bg-gray-800 grid place-items-center">
      <dialog
        ref={dialogRef}
        className="w-full max-w-md h-auto max-h-[500px] bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full cursor-pointer flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          ×
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
