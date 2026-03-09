import { useState } from 'react'
import InvoiceForm from './components/InvoiceForm'
import InvoicePreview from './components/InvoicePreview'

function App() {
  const [invoiceData, setInvoiceData] = useState({
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessAddress: '',
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    invoiceNumber: '',
    issueDate: '',
    dueDate: '',
    lineItems: [
      { id: 1, description: '', quantity: 1, rate: 0 }
    ],
    notes: ''
  })

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/2 p-6 overflow-y-auto">
        <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      </div>
      <div className="w-1/2 p-6 overflow-y-auto">
        <InvoicePreview invoiceData={invoiceData} />
      </div>
    </div>
  )
}

export default App
