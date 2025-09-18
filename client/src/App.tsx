import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import ImageUpload from "./components/image-upload"
import OCRButton from "./components/ocr-button"
import ExtractedInfo from "./components/extracted-info"
import type { AadhaarData } from "./types/types"
import { fetchDeteils } from "./services/api"
import {Toaster , toast } from "sonner"

export default function App() {
  const [frontImage, setFrontImage] = useState<File | null>(null)
  const [backImage, setBackImage] = useState<File | null>(null)
  const [extractedData, setExtractedData] = useState<AadhaarData | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)


  const handleFrontUpload = (file: File) => {
    setFrontImage(file)
  }

  const handleBackUpload = (file: File) => {
    setBackImage(file)
    
  }

const handleOCRProcess = async () => {
  if (!frontImage || !backImage) {
    toast.info("Please upload both front and back images of your Aadhaar card")
    return
  }

  setIsProcessing(true)

  try {
    const formData = new FormData()
    formData.append("frontImage", frontImage)
    formData.append("backImage", backImage)

    const data = await fetchDeteils(formData)
    setExtractedData(data) 
  } catch (err) {
    toast.error("Failed to process Aadhaar card. Please try again.")
  } finally {
    setIsProcessing(false)
  }
}


  const resetForm = () => {
    setFrontImage(null)
    setBackImage(null)
    setExtractedData(null)

  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Aadhaar OCR</h1>
              <p className="text-muted-foreground mt-1">Secure document processing system</p>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Extract Aadhaar Information Instantly
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Upload your Aadhaar card images and get structured data in seconds using advanced OCR technology
            </p>
          </div>

          

          {!extractedData ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Upload Aadhaar Card Images</CardTitle>
                <CardDescription>
                  Please upload clear images of both front and back sides of your Aadhaar card
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <ImageUpload label="Front Side" onUpload={handleFrontUpload} uploadedFile={frontImage} />
                  <ImageUpload label="Back Side" onUpload={handleBackUpload} uploadedFile={backImage} />
                </div>

                <div className="flex justify-center">
                  <OCRButton
                    onClick={handleOCRProcess}
                    isProcessing={isProcessing}
                    disabled={!frontImage || !backImage}
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <ExtractedInfo data={extractedData} />
              <div className="flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Process Another Card
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Support</span>
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            © 2024 Aadhaar OCR. All rights reserved. Secure document processing.
          </div>
        </div>
      </footer>
    </div>
  )
}
