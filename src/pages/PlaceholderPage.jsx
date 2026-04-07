import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card.jsx'
import { Badge } from '../ui/Badge.jsx'

export function PlaceholderPage({ title }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          <div className="mt-0.5 text-sm text-slate-600">
            UI stub — next we’ll build this module with real screens + data.
          </div>
        </div>
        <Badge variant="neutral">Coming next</Badge>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-dashed border-sand-300 bg-sand-50 p-6 text-sm text-slate-700">
          This page is wired into the navigation and ready for design + features.
        </div>
      </CardContent>
    </Card>
  )
}

