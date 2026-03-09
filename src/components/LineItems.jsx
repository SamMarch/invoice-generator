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

  const inputClass = 'w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'

  return (
    <div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b border-gray-200">
            <th className="pb-2 font-medium">Description</th>
            <th className="pb-2 font-medium w-20">Qty</th>
            <th className="pb-2 font-medium w-28">Rate ($/hr)</th>
            <th className="pb-2 font-medium w-24 text-right">Total</th>
            <th className="pb-2 w-10"></th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map(item => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-2 pr-2">
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Item description"
                  value={item.description}
                  onChange={e => updateItem(item.id, 'description', e.target.value)}
                />
              </td>
              <td className="py-2 pr-2">
                <input
                  type="number"
                  className={inputClass}
                  min="0"
                  value={item.quantity}
                  onChange={e => updateItem(item.id, 'quantity', Number(e.target.value))}
                />
              </td>
              <td className="py-2 pr-2">
                <input
                  type="number"
                  className={inputClass}
                  min="0"
                  step="0.01"
                  value={item.rate}
                  onChange={e => updateItem(item.id, 'rate', Number(e.target.value))}
                />
              </td>
              <td className="py-2 text-right font-medium text-gray-700">
                ${(item.quantity * item.rate).toFixed(2)}
              </td>
              <td className="py-2 text-center">
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 text-lg leading-none"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={addItem}
        className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        + Add Line Item
      </button>
    </div>
  )
}

export default LineItems
