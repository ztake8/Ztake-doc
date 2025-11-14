import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function ListCategoriesPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">List Categories</h1>
        <p className="text-muted-foreground">Get list of all available bill payment categories.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/bbps/categories</code>
          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GET</code>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "data": {
    "categories": [
      {
        "category_id": "ELEC",
        "category_name": "Electricity",
        "biller_count": 125
      },
      {
        "category_id": "WATER",
        "category_name": "Water",
        "biller_count": 85
      },
      {
        "category_id": "GAS",
        "category_name": "Gas",
        "biller_count": 45
      }
    ]
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
