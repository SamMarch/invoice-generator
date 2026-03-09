import { useState } from 'react'
import InvoiceForm from './components/InvoiceForm'
import InvoicePreview from './components/InvoicePreview'

function App() {
  const initialState = {
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
  }

  const [invoiceData, setInvoiceData] = useState(initialState)

  const resetInvoice = () => setInvoiceData(initialState)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/2 p-6 overflow-y-auto">
        <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} resetInvoice={resetInvoice} />
      </div>
      <div className="w-1/2 p-6 overflow-y-auto">
        <InvoicePreview invoiceData={invoiceData} />
      </div>
    </div>
  )
}

export default App
