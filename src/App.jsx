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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white px-4 py-4 lg:px-6">
        <h1 className="text-xl lg:text-2xl font-bold">Invoice Generator</h1>
      </header>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 lg:p-6 overflow-y-auto">
          <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} resetInvoice={resetInvoice} />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-6 overflow-y-auto">
          <InvoicePreview invoiceData={invoiceData} />
        </div>
      </div>
    </div>
  )
}

export default App
