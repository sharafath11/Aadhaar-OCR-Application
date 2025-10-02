import { User, Calendar, Users, CreditCard, MapPin, Clipboard} from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import type { ExtractedInfoProps } from "../types/types"
import { Button } from "./ui/button"
import copy from "copy-to-clipboard";
import { useState } from "react"

export default function ExtractedInfo({ data }: ExtractedInfoProps) {
   const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const formatted = `
Aadhaar Details
---------------
Full Name     : ${data.name}
Date of Birth : ${data.dateOfBirth}
Gender        : ${data.gender}
Aadhaar No.   : ${data.aadhaarNumber}
Address       : ${data.address}
    `.trim();

    copy(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
          ✓ Extraction Complete
        </Badge>
        <h3 className="text-2xl font-bold text-foreground">Aadhaar Information Extracted</h3>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <span>Aadhaar Card Details</span>
          </CardTitle>
           <Button variant="outline" size="sm" onClick={handleCopy}>
            <Clipboard className="h-4 w-4 mr-2" />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <User className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <p className="text-lg font-semibold text-foreground">{data.name}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                  <p className="text-lg font-semibold text-foreground">{data.dateOfBirth}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Gender</label>
                  <p className="text-lg font-semibold text-foreground">{data.gender}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Aadhaar Number</label>
                  <p className="text-lg font-semibold text-foreground font-mono">{data.aadhaarNumber}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Address</label>
                  <p className="text-lg font-semibold text-foreground leading-relaxed">{data.address}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
