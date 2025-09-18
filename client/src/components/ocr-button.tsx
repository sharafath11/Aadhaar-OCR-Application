import { Loader2, Scan } from "lucide-react"
import { Button } from "./ui/button"
import type { OCRButtonProps } from "../types/types"

export default function OCRButton({ onClick, isProcessing, disabled }: OCRButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isProcessing}
      size="lg"
      className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {isProcessing ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing Images...
        </>
      ) : (
        <>
          <Scan className="mr-2 h-5 w-5" />
          Extract Aadhaar Info
        </>
      )}
    </Button>
  )
}
