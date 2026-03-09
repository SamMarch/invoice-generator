import LineItems from './LineItems'

function InvoiceForm({ invoiceData, setInvoiceData }) {
  const handleChange = (field, value) => {
    setInvoiceData(prev => ({ ...prev, [field]: value }))
  }

  const setLineItems = (lineItems) => {
    setInvoiceData(prev => ({ ...prev, lineItems }))
  }

  const inputClass = 'w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
  const labelClass = 'block text-sm font-medium text-gray-600 mb-1'

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Invoice Generator</h1>

      {/* Your Business */}
      <section className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Your Business</h2>
        <div>
          <label className={labelClass}>Business Name</label>
          <input
            type="text"
            className={inputClass}
            value={invoiceData.businessName}
            onChange={e => handleChange('businessName', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              value={invoiceData.businessEmail}
              onChange={e => handleChange('businessEmail', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              className={inputClass}
              value={invoiceData.businessPhone}
              onChange={e => handleChange('businessPhone', e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <textarea
            className={inputClass}
            rows={3}
            value={invoiceData.businessAddress}
            onChange={e => handleChange('businessAddress', e.target.value)}
          />
        </div>
      </section>

      {/* Bill To */}
      <section className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Bill To</h2>
        <div>
          <label className={labelClass}>Client Name</label>
          <input
            type="text"
            className={inputClass}
            value={invoiceData.clientName}
            onChange={e => handleChange('clientName', e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            className={inputClass}
            value={invoiceData.clientEmail}
            onChange={e => handleChange('clientEmail', e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <textarea
            className={inputClass}
            rows={3}
            value={invoiceData.clientAddress}
            onChange={e => handleChange('clientAddress', e.target.value)}
          />
        </div>
      </section>

      {/* Invoice Details */}
      <section className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Invoice Details</h2>
        <div>
          <label className={labelClass}>Invoice Number</label>
          <input
            type="text"
            className={inputClass}
            value={invoiceData.invoiceNumber}
            onChange={e => handleChange('invoiceNumber', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Issue Date</label>
            <input
              type="date"
              className={inputClass}
              value={invoiceData.issueDate}
              onChange={e => handleChange('issueDate', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Due Date</label>
            <input
              type="date"
              className={inputClass}
              value={invoiceData.dueDate}
              onChange={e => handleChange('dueDate', e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Line Items */}
      <section className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Line Items</h2>
        <LineItems lineItems={invoiceData.lineItems} setLineItems={setLineItems} />
      </section>

      {/* Notes */}
      <section className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Notes</h2>
        <textarea
          className={inputClass}
          rows={4}
          placeholder="Optional notes (payment terms, thank you message, etc.)"
          value={invoiceData.notes}
          onChange={e => handleChange('notes', e.target.value)}
        />
      </section>
    </div>
  )
}

export default InvoiceForm
