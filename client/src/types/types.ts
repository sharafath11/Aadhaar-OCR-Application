export interface ErrorAlertProps {
  message: string
  onClose: () => void
}

export interface AadhaarData {
  name: string
  dateOfBirth: string
  gender: string
  aadhaarNumber: string
  address: string
}

export interface ExtractedInfoProps {
  data: AadhaarData
}

export interface ImageUploadProps {
  label: string
  onUpload: (file: File) => void
  uploadedFile?: File | null
}

export interface OCRButtonProps {
  onClick: () => void
  isProcessing: boolean
  disabled?: boolean
}

export interface AadhaarData {
  name: string
  dateOfBirth: string
  gender: string
  aadhaarNumber: string
  address: string
}
