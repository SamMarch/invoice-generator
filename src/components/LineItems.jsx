function LineItems({ lineItems, setLineItems }) {
  const updateItem = (id, field, value) => {
    setLineItems(
      lineItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    )
  }

  const addItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now(), description: '', quantity: 1, rate: 0 }
    ])
  }

  const removeItem = (id) => {
    setLineItems(lineItems.filter(item => item.id !== id))
  }

  const inputClass = 'w-full border border-gray-300 rounded-lg px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'

  return (
    <div className="space-y-4">
      {lineItems.map(item => (
        <div key={item.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Line Item</span>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500 text-sm font-medium cursor-pointer"
            >
              Remove
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Item description"
              value={item.description}
              onChange={e => updateItem(item.id, 'description', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Qty</label>
              <input
                type="number"
                className={inputClass}
                min="0"
                value={item.quantity}
                onChange={e => updateItem(item.id, 'quantity', Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Rate ($/hr)</label>
              <input
                type="number"
                className={inputClass}
                min="0"
                step="0.01"
                value={item.rate}
                onChange={e => updateItem(item.id, 'rate', Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Total</label>
              <div className="px-3 py-3 bg-gray-50 rounded-lg text-base font-medium text-gray-700">
                ${(item.quantity * item.rate).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="w-full py-3 text-base text-indigo-500 hover:text-indigo-700 font-medium border-2 border-dashed border-gray-300 hover:border-indigo-300 rounded-lg transition-colors cursor-pointer"
      >
        + Add Line Item
      </button>
    </div>
  )
}

export default LineItems
