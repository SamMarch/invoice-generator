import { usePDF } from 'react-to-pdf'

function InvoicePreview({ invoiceData }) {
  const { toPDF, targetRef } = usePDF({
    filename: 'invoice.pdf',
    page: { format: 'a4' }
  })
  const {
    businessName, businessEmail, businessPhone, businessAddress,
    clientName, clientEmail, clientAddress,
    invoiceNumber, issueDate, dueDate,
    lineItems, notes
  } = invoiceData

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`

  const subtotal = lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  const gst = subtotal * 0.10
  const grandTotal = subtotal + gst

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <div className="sticky top-6">
      <button
        onClick={() => toPDF()}
        className="w-full mb-4 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors cursor-pointer"
      >
        Export PDF
      </button>
      <div ref={targetRef} className="bg-white rounded-lg shadow-sm p-10 text-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          {businessName && <h2 className="text-xl font-bold text-gray-900">{businessName}</h2>}
          {businessEmail && <p className="text-gray-500 mt-1">{businessEmail}</p>}
          {businessPhone && <p className="text-gray-500">{businessPhone}</p>}
          {businessAddress && <p className="text-gray-500 whitespace-pre-line">{businessAddress}</p>}
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
          {invoiceNumber && <p className="mt-2 text-gray-500">#{invoiceNumber}</p>}
          {issueDate && (
            <p className="text-gray-500 mt-1">
              <span className="text-gray-400">Issued:</span> {formatDate(issueDate)}
            </p>
          )}
          {dueDate && (
            <p className="text-gray-500">
              <span className="text-gray-400">Due:</span> {formatDate(dueDate)}
            </p>
          )}
        </div>
      </div>

      {/* Bill To */}
      {(clientName || clientEmail || clientAddress) && (
        <div className="mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Bill To</p>
          {clientName && <p className="font-medium text-gray-900">{clientName}</p>}
          {clientEmail && <p className="text-gray-500">{clientEmail}</p>}
          {clientAddress && <p className="text-gray-500 whitespace-pre-line">{clientAddress}</p>}
        </div>
      )}

      {/* Line Items Table */}
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b-2 border-gray-200 text-xs font-semibold text-gray-400 uppercase tracking-wide">
            <th className="pb-2 text-left">Description</th>
            <th className="pb-2 text-right w-16">Qty</th>
            <th className="pb-2 text-right w-24">Rate</th>
            <th className="pb-2 text-right w-24">Total</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map(item => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 text-gray-700">{item.description}</td>
              <td className="py-3 text-right text-gray-600">{item.quantity}</td>
              <td className="py-3 text-right text-gray-600">{formatCurrency(item.rate)}</td>
              <td className="py-3 text-right font-medium text-gray-800">
                {formatCurrency(item.quantity * item.rate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end mb-10">
        <div className="w-60 space-y-2">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>GST (10%)</span>
            <span>{formatCurrency(gst)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t-2 border-gray-800 text-base font-bold text-gray-900">
            <span>Total</span>
            <span>{formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {notes && (
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Notes</p>
          <p className="text-gray-600 whitespace-pre-line">{notes}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default InvoicePreview
